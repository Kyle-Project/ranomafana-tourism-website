# Ranomafana Tourism Directory — Database

`ranomafana-data.js` is the single source of truth for every listing on the site.
`index.html` loads it before its own script, so all six arrays are global.

```html
<script src="data/ranomafana-data.js"></script>
<script> /* the site's own code */ </script>
```

## Collections

| Array | Count | Page |
|---|---|---|
| `stayData` | 25 | Places to stay |
| `eatData` | 16 | Places to eat |
| `doData` | 14 | Things to do (the national park entry also feeds the National Park page) |
| `itineraryData` | 6 | Itineraries, and the "What kind of traveller are you?" picker on the home page |
| `eventData` | 8 | What's on, the home page, and the When to visit month picker |
| `blogData` | 10 | Stories, and "Field notes" on the home page |

`ranomafana-data.json` is a generated mirror of the same content, for importing
into a CMS (Webflow, Wix, Airtable) or feeding a build script. Regenerate it
after editing the `.js` file — the `.js` file is the master, not the JSON.

## Adding a listing

Copy the nearest existing object, change the fields, done. Nothing in
`index.html` needs to change. The stay count in the page heading and the
"All (n)" filter chip both read from `stayData.length` automatically.

## Extra detail in the pop-ups (all optional)

A stay can carry these, and the pop-up shows each one only when it is there:

```js
rooms: [{ type: "Double", price: "160,000 Ar" }, { type: "Family (1 double + 2 single beds)", price: "200,000 Ar" }],
ratesNote: "Breakfast is included.",          // one line under the rate table
meals: ["Breakfast: 25,000 Ar", "Lunch or dinner: 50,000 Ar set price"],
features: ["Swimming pool", "Bar with sport on TV"],   // shown as "Good to know"
wifiNote: "In the restaurant",                // replaces "Available" on the Wi-Fi line
```

Keep `price` as the short range shown on the card ("160,000–200,000 Ar / night").
Restaurants can carry `meals` too.

## Stories (`blogData`)

Every story card opens a reader. Its text is the `body` list — one line per
paragraph, and a line starting `## ` becomes a sub-heading:

```js
body: [
  "First paragraph.",
  "## A sub-heading",
  "Another paragraph."
],
sample: true,      // shows "This story is a draft and will be updated" — delete when rewritten
```

The ten stories carry sample text written only from facts already on the site.
Rewrite freely; delete `sample: true` (and set `status: "published"`) when a story
is final. Story titles, categories and read times follow the design canvas — see
"Stories and the design canvas" in `CLAUDE.md`.

## Fields that drive more than one page

- **The national park's fees.** Its `doData` entry has the `price` sentence and the
  same fees broken out — `entryFee`, `childFee`, `communityFee`, `guideFees`
  (walk, hours, price; hours may be a range like `"2–4"`), `specialistFee`, `hours`
  (opening hours, e.g. `"07:00–17:00"`) and `feesAsOf` (year-month, e.g. `"2026-10"`).
  The home page, the National Park page, When to visit and Hiring a guide read the
  broken-out fields. Change both together, and record the source in `sourceNote`.
- **The park page's own text.** `intro` (paragraphs at the top of the National Park
  page; the card keeps the short `desc`), `wildlife` (groups of species with a note)
  and `circuits`.
- **`months` on an event** — month numbers, e.g. `[6, 7, 8, 9]` for June to
  September. It puts the event on the When to visit month picker. Weekly events
  don't need it.
- **`parkTicket` on an itinerary** — a short answer shown beside the plan, e.g.
  `"Yes, both days"` or `"Not needed"`.
- **Itinerary `stops`** are written `"When — what"`. The part before ` — ` becomes
  the time on the Itineraries page; put each stop in its own string.

## The `verified` flag

- `verified: true` — confirmed against a published source (FHORM, the Ministry of
  Tourism register, Tripadvisor, Petit Futé, Booking.com, or the property's own
  site) or on the ground.
- `verified: false` — the modal shows a small "details unconfirmed" note.

An empty `contact` renders as "no published contact details yet" rather than a
guessed number. That is deliberate: leave a field blank rather than fill it with
something unconfirmed.

This is deliberate: it is better to show a listing with an honest caveat than
to publish a phone number nobody has dialled. Flip the flag to `true` and delete
the `sourceNote` once you have checked the listing locally.

`photoNeeded: true` marks listings still using one of the site's own generic
Ranomafana photos instead of a photo of the actual place. See `PHOTO-AND-DATA-GAPS.md`
in the project root for the full list.

## Placeholder images

Two constants at the top of the file:

- `PLACEHOLDER_STAY` → `images/ranomafana-primary.jpg`
- `PLACEHOLDER_NATURE` → `images/great-ranomafana-nature-shot.jpg`

These are the site's own photographs of Ranomafana. They are honest placeholders —
unlike stock photos of unrelated hotels, which is what several listings carried
before. Never point a listing at a stock photo of somewhere else.

## Gallery fallbacks

A gallery entry can carry a `fallback` path. If the primary image 404s, the
browser swaps to the fallback rather than showing a broken image:

```js
{ src: "images/cvb-aerial-view.jpg", fallback: "images/main-view-cvb.jpg", alt: "..." }
```
