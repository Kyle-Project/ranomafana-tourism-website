"""Draw the two Why-visit maps as small SVG files in the site's colours.

  images/map-madagascar.svg   Madagascar and the African coast (Natural Earth, public domain,
                              via the world-atlas 50m TopoJSON)
  images/map-ranomafana.svg   the valley from the park entrance to the village
                              (OpenStreetMap data, (c) OpenStreetMap contributors, ODbL)

Prints where each marker sits, as left/top percentages, for the HTML overlay. If you
redraw with a different frame, copy those numbers into MAPS in index.html.

The site does not need this script: the two SVGs are committed. To redraw them, put the
data in a folder (not in this repo) and run  python scripts/make-maps.py <folder> images

  countries-50m.json  https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json
  local.json          the OpenStreetMap query in scripts/make-maps-valley.overpassql, run at
                      https://overpass-api.de/api/interpreter (send a User-Agent header)

Drawn 16 Oct 2026. The OpenStreetMap credit under the valley map is a licence condition.
"""
import io, json, math, sys

DATA, OUT = sys.argv[1], sys.argv[2]

# ----------------------------------------------------------------- helpers
def dp(pts, tol):
    """Douglas-Peucker on a list of (x, y)."""
    if len(pts) < 3:
        return pts
    keep = [False] * len(pts)
    keep[0] = keep[-1] = True
    stack = [(0, len(pts) - 1)]
    while stack:
        a, b = stack.pop()
        ax, ay = pts[a]; bx, by = pts[b]
        dx, dy = bx - ax, by - ay
        L = math.hypot(dx, dy) or 1e-9
        best, idx = -1, None
        for i in range(a + 1, b):
            px, py = pts[i]
            d = abs(dy * px - dx * py + bx * ay - by * ax) / L if (dx or dy) else math.hypot(px - ax, py - ay)
            if d > best:
                best, idx = d, i
        if idx is not None and best > tol:
            keep[idx] = True
            stack += [(a, idx), (idx, b)]
    return [p for p, k in zip(pts, keep) if k]

def clip_ring(ring, x0, y0, x1, y1):
    """Sutherland-Hodgman clip of a closed ring to a rectangle."""
    def clip(pts, inside, cross):
        out = []
        for i, cur in enumerate(pts):
            prev = pts[i - 1]
            if inside(cur):
                if not inside(prev):
                    out.append(cross(prev, cur))
                out.append(cur)
            elif inside(prev):
                out.append(cross(prev, cur))
        return out
    def xcross(x):
        return lambda p, q: (x, p[1] + (q[1] - p[1]) * (x - p[0]) / (q[0] - p[0]))
    def ycross(y):
        return lambda p, q: (p[0] + (q[0] - p[0]) * (y - p[1]) / (q[1] - p[1]), y)
    pts = ring
    for inside, cross in ((lambda p: p[0] >= x0, xcross(x0)), (lambda p: p[0] <= x1, xcross(x1)),
                          (lambda p: p[1] >= y0, ycross(y0)), (lambda p: p[1] <= y1, ycross(y1))):
        if not pts:
            break
        pts = clip(pts, inside, cross)
    return pts

def ring_d(pts):
    return 'M' + 'L'.join('%.1f %.1f' % p for p in pts) + 'Z'

def line_d(pts):
    return 'M' + 'L'.join('%.1f %.1f' % p for p in pts)

def crop_line(pts, x0, y0, x1, y1, pad):
    """Keep the runs of a polyline that come near the frame."""
    runs, cur = [], []
    for p in pts:
        if x0 - pad <= p[0] <= x1 + pad and y0 - pad <= p[1] <= y1 + pad:
            cur.append(p)
        elif cur:
            cur.append(p); runs.append(cur); cur = []
    if cur:
        runs.append(cur)
    return [r for r in runs if len(r) > 1]

def pct(x, y, W, H):
    return round(100 * x / W, 2), round(100 * y / H, 2)

# ------------------------------------------------- 1. Madagascar (Natural Earth)
topo = json.load(io.open(DATA + '/countries-50m.json', encoding='utf-8'))
sx, sy = topo['transform']['scale']; tx, ty = topo['transform']['translate']
arcs = []
for arc in topo['arcs']:
    x = y = 0; pts = []
    for dx, dy in arc:
        x += dx; y += dy
        pts.append((x * sx + tx, y * sy + ty))
    arcs.append(pts)

def ring_from(idxs):
    pts = []
    for i in idxs:
        a = arcs[i] if i >= 0 else arcs[~i][::-1]
        pts += a if not pts else a[1:]
    return pts

LON0, LON1, LAT0, LAT1 = 36.5, 51.2, -26.2, -11.4     # west, east, south, north
K = math.cos(math.radians(-19))
W = 900
H = round(W * (LAT1 - LAT0) / ((LON1 - LON0) * K))
def proj_mg(lon, lat):
    return ((lon - LON0) / (LON1 - LON0) * W, (LAT1 - lat) / (LAT1 - LAT0) * H)

mada, others = [], []
for g in topo['objects']['countries']['geometries']:
    polys = g['arcs'] if g['type'] == 'MultiPolygon' else [g['arcs']] if g['type'] == 'Polygon' else []
    for poly in polys:
        for k, ring in enumerate(poly):
            pts = [proj_mg(lon, lat) for lon, lat in ring_from(ring)]
            xs = [p[0] for p in pts]; ys = [p[1] for p in pts]
            # Only shapes with a point inside the frame. (Fiji's outline wraps round the
            # date line and would otherwise clip to a stray line across the map.)
            if not any(-5 <= x <= W + 5 and -5 <= y <= H + 5 for x, y in pts):
                continue
            pts = dp(pts, 0.6)
            pts = clip_ring(pts, -2, -2, W + 2, H + 2)
            if len(pts) < 3:
                continue
            (mada if g.get('id') == '450' else others).append(ring_d(pts))

svg = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d">' % (W, H),
       '<!-- Natural Earth (public domain), via world-atlas 50m. Drawn for the Ranomafana guide. -->',
       '<path fill="#22352D" stroke="#40594B" stroke-width="1.2" d="%s"/>' % ''.join(others),
       '<path fill="#2B4A3C" stroke="#6B8F7C" stroke-width="1.6" stroke-linejoin="round" d="%s"/>' % ''.join(mada)]
# The road from the capital, simplified: Antananarivo - Fianarantsoa (RN7) - Ranomafana - Mananjary (RN25)
CITIES = {
    'tana': (47.5256, -18.9100),        # OpenStreetMap / Nominatim
    'fianar': (47.0851, -21.4564),
    'rano': (47.4547, -21.2595),
    'mananjary': (48.3463, -21.2385),
}
route = [proj_mg(*CITIES[c]) for c in ('tana', 'fianar', 'rano', 'mananjary')]
svg.append('<path fill="none" stroke="#E5B53D" stroke-width="2.5" stroke-dasharray="7 6" stroke-linecap="round" d="%s"/>' % line_d(route))
svg.append('</svg>')
io.open(OUT + '/map-madagascar.svg', 'w', encoding='utf-8', newline='\n').write('\n'.join(svg) + '\n')
markers = {'madagascar': {k: pct(*proj_mg(*v), W, H) for k, v in CITIES.items()}, 'madagascarSize': [W, H]}

# ------------------------------------------------- 2. The valley (OpenStreetMap)
osm = json.load(io.open(DATA + '/local.json', encoding='utf-8'))
L0, L1, B0, B1 = 47.402, 47.474, -21.280, -21.236      # west, east, south, north
K2 = math.cos(math.radians(-21.258))
W2 = 1000
H2 = round(W2 * (B1 - B0) / ((L1 - L0) * K2))
def proj_v(lon, lat):
    return ((lon - L0) / (L1 - L0) * W2, (B1 - lat) / (B1 - B0) * H2)

def join_rings(ways):
    ways = [w[:] for w in ways if len(w) > 1]
    rings = []
    while ways:
        ring = ways.pop(0)
        changed = True
        while ring[0] != ring[-1] and changed:
            changed = False
            for i, w in enumerate(ways):
                if w[0] == ring[-1]:
                    ring += w[1:]
                elif w[-1] == ring[-1]:
                    ring += w[::-1][1:]
                elif w[-1] == ring[0]:
                    ring = w[:-1] + ring
                elif w[0] == ring[0]:
                    ring = w[::-1][:-1] + ring
                else:
                    continue
                ways.pop(i); changed = True
                break
        rings.append(ring)
    return rings

park, rivers, namorona, roads = [], [], [], []
for e in osm['elements']:
    t = e.get('tags', {})
    if e['type'] == 'relation' and e['id'] == 5185264:
        for role in ('outer', 'inner'):
            ways = [[(p['lon'], p['lat']) for p in m['geometry']] for m in e['members']
                    if m['type'] == 'way' and m['role'] == role and m.get('geometry')]
            for ring in join_rings(ways):
                pts = dp([proj_v(*p) for p in ring], 0.8)
                pts = clip_ring(pts, -2, -2, W2 + 2, H2 + 2)
                if len(pts) > 2:
                    park.append(ring_d(pts))
    elif e['type'] == 'way' and t.get('waterway') == 'river':
        pts = dp([proj_v(p['lon'], p['lat']) for p in e['geometry']], 0.8)
        for run in crop_line(pts, 0, 0, W2, H2, 30):
            (namorona if t.get('name') == 'Namorona' or e['id'] == 309555040 else rivers).append(line_d(run))
    elif e['type'] == 'way' and t.get('ref') == 'N 25':
        pts = dp([proj_v(p['lon'], p['lat']) for p in e['geometry']], 0.8)
        for run in crop_line(pts, 0, 0, W2, H2, 30):
            roads.append(line_d(run))

v = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d">' % (W2, H2),
     '<!-- Map data (c) OpenStreetMap contributors, ODbL. Drawn for the Ranomafana guide. -->',
     '<rect width="%d" height="%d" fill="#0F1C17"/>' % (W2, H2),
     '<path fill="#17301F" stroke="#36513F" stroke-width="1.5" stroke-dasharray="6 5" fill-rule="evenodd" d="%s"/>' % ''.join(park),
     '<path fill="none" stroke="#4F7FA0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" opacity=".7" d="%s"/>' % ''.join(rivers),
     '<path fill="none" stroke="#6E9FC0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="%s"/>' % ''.join(namorona),
     '<path fill="none" stroke="#050B09" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" d="%s"/>' % ''.join(roads),
     '<path fill="none" stroke="#C3CFC8" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" d="%s"/>' % ''.join(roads),
     '</svg>']
io.open(OUT + '/map-ranomafana.svg', 'w', encoding='utf-8', newline='\n').write('\n'.join(v) + '\n')

PLACES = {   # OpenStreetMap / Nominatim, checked 16 Oct 2026
    'village': (47.4547, -21.2595),       # Ranomafana (place=town)
    'pool': (47.4515, -21.2593),          # "Piscine thermale"
    'gate': (47.4213, -21.2563),          # park information office, Ambodiamontana
    'cvb': (47.4218, -21.2541),           # Centre ValBio
    'ambatolahy': (47.4300, -21.2501),
    'tsararano': (47.4446, -21.2530),
}
markers['valley'] = {k: pct(*proj_v(*p), W2, H2) for k, p in PLACES.items()}
markers['valleySize'] = [W2, H2]
print(json.dumps(markers, indent=1))
