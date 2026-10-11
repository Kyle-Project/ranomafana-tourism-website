#!/usr/bin/env python3
"""
Generate placeholder card images for listings that have no photograph yet.

These are deliberately GRAPHICS, not simulated photographs: a flat colour panel
in the site palette carrying the listing name and category. Nobody looking at one
mistakes it for a picture of the place, which is the whole point — the previous
version of this site used stock photos of unrelated hotels.

  python scripts/make-placeholders.py            regenerate all
  python scripts/make-placeholders.py --list     show what it would write

Overwriting is safe: a placeholder is only ever written to
images/placeholder-<slug>.jpg, never over a real photograph.
"""
import json
import os
import subprocess
import sys
import hashlib
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMAGES = os.path.join(ROOT, "images")
DATA_JS = os.path.join(ROOT, "data", "ranomafana-data.js")

W, H = 1200, 800

# Site palette ("Deep Forest"), from the :root block in index.html
MIST = (234, 240, 234)      # headings
LICHEN = (169, 184, 175)    # secondary text
GOLD = (229, 181, 61)       # the one accent
EMBER = (233, 138, 98)      # small labels
FLOOR = (5, 11, 9)          # page edge, so the card sits flush on dark pages

# Deterministic per-listing tint: dark understory greens close to the site's
# photo-placeholder colour (#1A2C25), so each card is distinct but on-palette.
TINTS = [(26, 44, 37), (22, 40, 33), (30, 50, 42), (24, 46, 40), (32, 48, 38), (20, 38, 34), (28, 42, 32)]

def _first_existing(paths):
    for p in paths:
        if os.path.exists(p):
            return p
    return None


# Try a serif bold and a plain sans in the common locations for each OS this
# script might run on (Kyle is on Windows; the original author may not be).
# Falls back to Pillow's built-in bitmap font if none of these exist, so the
# script still runs — just with a plainer label — rather than crashing.
FONT_BOLD = _first_existing([
    "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf",   # Linux
    "C:/Windows/Fonts/georgia.ttf",                             # Windows — Georgia is the site heading font's fallback
    "C:/Windows/Fonts/timesbd.ttf",                             # Windows fallback
    "/System/Library/Fonts/Supplemental/Georgia Bold.ttf",      # macOS
])
FONT_SANS = _first_existing([
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",          # Linux
    "C:/Windows/Fonts/arial.ttf",                                # Windows
    "/System/Library/Fonts/Supplemental/Arial.ttf",              # macOS
])


def load_data():
    """Evaluate the JS data file with node and hand back the object."""
    out = subprocess.run(
        ["node", "-e",
         f"const fs=require('fs');const c=fs.readFileSync({json.dumps(DATA_JS)},'utf8');"
         "const d=new Function(c+'; return RANOMAFANA_DATA;')();"
         "process.stdout.write(JSON.stringify(d));"],
        capture_output=True, text=True, check=True)
    return json.loads(out.stdout)


def wrap(draw, text, font, max_w):
    words, lines, cur = text.split(), [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        if draw.textlength(trial, font=font) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def make(slug, name, kind):
    tint = TINTS[int(hashlib.md5(slug.encode()).hexdigest(), 16) % len(TINTS)]
    img = Image.new("RGB", (W, H), FLOOR)
    d = ImageDraw.Draw(img)

    # Colour panel with a thin dark margin — reads as a designed card, not a photo.
    m = 18
    d.rounded_rectangle([m, m, W - m, H - m], radius=26, fill=tint)

    # Faint contour lines, a nod to the rainforest terrain, kept very low contrast
    # and clipped to the card so nothing bleeds onto the margin.
    band = tuple(min(255, c + 12) for c in tint)
    lines_layer = Image.new("RGB", (W, H), tint)
    ld = ImageDraw.Draw(lines_layer)
    for i in range(7):
        y = m + 96 + i * 84
        ld.arc([m - 260 + i * 40, y - 150, W - m + 260 - i * 40, y + 150],
               start=200, end=340, fill=band, width=3)
    mask = Image.new("L", (W, H), 0)
    ImageDraw.Draw(mask).rounded_rectangle([m, m, W - m, H - m], radius=26, fill=255)
    img.paste(lines_layer, (0, 0), mask)
    d = ImageDraw.Draw(img)

    def font(path, size):
        return ImageFont.truetype(path, size) if path else ImageFont.load_default(size=size)

    title_font = font(FONT_BOLD, 72)
    kind_font = font(FONT_SANS, 30)
    note_font = font(FONT_SANS, 26)

    inner = W - 2 * m - 130
    lines = wrap(d, name, title_font, inner)
    while len(lines) > 3 and title_font.size > 40:
        title_font = font(FONT_BOLD, title_font.size - 6)
        lines = wrap(d, name, title_font, inner)

    total = len(lines) * (title_font.size + 14)
    y = (H - total) // 2 - 26
    for ln in lines:
        d.text((W // 2, y), ln, font=title_font, fill=MIST, anchor="ma")
        y += title_font.size + 14

    d.text((W // 2, m + 100), kind.upper(), font=kind_font, fill=EMBER, anchor="ma")

    # Rule + honest label so the gap is legible rather than disguised.
    ry = y + 26
    d.line([(W // 2 - 90, ry), (W // 2 + 90, ry)], fill=GOLD, width=2)
    d.text((W // 2, ry + 26), "Photograph coming soon", font=note_font, fill=LICHEN, anchor="ma")
    d.text((W // 2, H - m - 78), "Ranomafana", font=note_font, fill=LICHEN, anchor="ma")

    return img


KINDS = {"stays": "Where to stay", "eat": "Where to eat", "do": "What to do"}


def main():
    data = load_data()
    dry = "--list" in sys.argv
    written = 0
    for key, kind in KINDS.items():
        for row in data.get(key, []):
            if not row.get("photoNeeded"):
                continue
            name = row.get("name") or row.get("title")
            path = os.path.join(IMAGES, f"placeholder-{row['slug']}.jpg")
            if dry:
                print(f"  would write {os.path.relpath(path, ROOT)}  ({name})")
            else:
                make(row["slug"], name, kind).save(
                    path, "JPEG", quality=86, optimize=True, progressive=True)
                print(f"  {os.path.relpath(path, ROOT)}  ({name})")
            written += 1
    print(f"\n  {written} placeholder{'' if written == 1 else 's'}"
          f"{' would be' if dry else ''} generated")


if __name__ == "__main__":
    main()
