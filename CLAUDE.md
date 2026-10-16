# Ranomafana Tourism Directory

A community tourism directory for Ranomafana, Madagascar. Static site, no build
step, no framework. Kyle runs it; he is not a coder, so explain changes in plain
language and avoid introducing tooling he would have to maintain.

## Run it

```bash
npm run dev                  # http.server on 8137 → http://localhost:8137
npm run check                # validate the data (no deps, always safe)
npm run check:write          # validate, then regenerate the JSON mirror
npm run check:gaps           # same, listing every unverified / photo-less item
npm run photos:placeholders  # regenerate placeholder cards, all 4 languages (needs Pillow)
npm run photos:find          # show free-licensed Commons photos, download none
npm run photos:fetch         # download them + write images/PHOTO-CREDITS.md
```

`.claude/launch.json` already defines the `ranomafana-web` config on port 8137.

**Run `npm run check` after every data edit.** It is the whole test suite.

## Publishing

Live at <https://kyle-project.github.io/ranomafana-tourism-website/>, from the repo
<https://github.com/Kyle-Project/ranomafana-tourism-website> (first published 11 Oct
2026). The folder is a git repository (branch `main`). Pushing `main`
to GitHub publishes the site through GitHub Pages — `.github/workflows/publish.yml`
runs `npm run check` first and publishes nothing if it fails, so the live site keeps
its last good version. Only `index.html`, `data/` and `images/` go online. The repo is
public (free GitHub Pages requires it), so notes, scripts and `photo-originals/` are
readable on GitHub even though they are not part of the website.

**A push is a publish.** Commit and push only when Kyle asks, and run `npm run check`
before you do. GitHub's servers are Linux: image names are case-sensitive there, which
they are not on Kyle's Windows machine.

## Architecture

Three files matter:

```
index.html                  the entire site — markup, CSS, JS, i18n dictionary
data/ranomafana-data.js     the database: six global arrays
images/                     flat folder, kebab-case names
```

Plus `data/ranomafana-translations.js`, the listing text in French, German and
Malagasy (see i18n below).

`index.html` loads `data/ranomafana-data.js` first, so the arrays are globals by
the time the page script runs. There is no bundler and no module system — keep it
that way unless Kyle asks otherwise.

### Design

The look comes from the **"Ranomafana Website Redesign"** canvas
(<https://claude.ai/artifact/MSaEKCrvxqyspHBypzwoc3>), applied in October 2026.
"Deep Forest": near-black greens, one gold (`--gold`) for every action, one ember
(`--ember`) for small labels; Fraunces (light, large, italic gold for the key phrase)
over Figtree. Colours are CSS custom properties at the top of the `<style>` block —
use them rather than new hex values. The canvas boards hold copies of the listings
made on 5 Oct 2026; they are **not** a data source. The data file is. **One
exception: stories** — see below.

### Stories and the design canvas

Kyle wants stories added or changed in the canvas to show up on the site. There is
no automatic link (the canvas is a private claude.ai artifact, the site is static
files), so the sync is a step you run when he asks ("sync the stories from the
design"):

1. Read the canvas with the Artifact tool (`action: "read"`, the URL above): the home
   board `project/Main.dc.html`, its `<!-- STORIES -->` / "Field notes" section, and any
   board whose title mentions stories (list `project/canvas.json` first).
2. Match each story card to `blogData` by **title**. New title → new entry (kebab
   `slug`, `category`, `readMins`, `status: "draft"`, `sample: true`, a short sample
   `body` written only from facts already on the site, and an `img` from `images/` —
   never a canvas `/_blob/…` URL; if the card's photo isn't in `images/`, ask Kyle for
   the file). Changed category, read time or excerpt → update the entry. A card whose
   title changed: confirm with Kyle which entry it replaces before renaming (the
   title is what links them). Story text written in the canvas → the entry's `body`.
3. The order of the home "Field notes" cards → `HOME_STORIES` in `index.html`.
4. `npm run check:write`, then open a story on the site to confirm.

Last synced 11 Oct 2026: the canvas's three Field notes cards (Golden Bamboo Lemur,
Night Walk Etiquette, How a VOI Works) matched `blogData` and `HOME_STORIES`
exactly; the canvas holds no story text. Don't confuse this with the `/design-sync`
skill, which uploads a coded component library to a claude.ai design-system project
— it doesn't apply to this site.

### The six collections

| Global | Rendered by | Into |
|---|---|---|
| `stayData` | `renderStays()` | `#stayGrid` |
| `eatData` | `renderEat()` | `#eatGrid` |
| `doData` | `renderDo()` | `#doGrid` |
| `itineraryData` | `renderItineraries()` | `#itineraryGrid` |
| `eventData` | `renderEvents()` | `#eventList` |
| `blogData` | `renderBlog()` | `#blogGrid` |

`renderItineraries()` draws the plan picker into `#itineraryGrid` and the chosen
plan into `#itineraryDetail`. Alongside the six, `renderHome()`, `renderPark()`,
`renderWhen()` and `renderGuides()` read the same arrays. `setLanguage()` calls
`renderAll()`, which runs every one of them — that is what happens on
`DOMContentLoaded`, and again whenever the language changes.

### Pages

Thirteen `<section id="page-x" class="page-view">` elements, one shown at a time by
`switchPage(id)`: `home`, `why`, `stay`, `eat`, `do`, `park`, `itineraries`, `getting-here`,
`when`, `guides`, `events`, `blog`, `about`. The page name lives in the address as a
hash (`index.html#park`), so links are plain `<a href="#park">`, the back button
works, and pages can be shared. `PAGES`, `NAV_GROUP` (which nav item lights up) and
`PAGE_TITLE` in the script list them. **No element may have an `id` equal to a page
name** — the browser would scroll to it.

The National Park page and the Things to do card both read the park's `doData`
entry. Getting here, When to visit and Hiring a guide are editorial pages: their
paragraphs are plain English markup with a **Sources** line at the foot of each page.
Keep that line in step with any fact you change there.

`data/ranomafana-data.json` is a **generated mirror** for CMS import. Never edit it
by hand; run `npm run check:write`.

## Adding or editing a listing

Edit the object in `data/ranomafana-data.js`. Nothing in `index.html` changes. Every
count on the site ("23 places", the filter-button numbers) comes from the arrays,
through `{stays}`-style tokens in the translations.

Field reference lives in `data/README.md`.

## Rules that matter

**Credit the guide correctly.** It was made by Peace Corps Volunteer Kyle Schmidt,
with funding from PIC3 and support from PCDT-R and the Commune of Ranomafana. That
credit appears in the "Plan with people who live here" boxes (`planCtaText`), the
About page and the footer (`footerCredit`), in all four languages. The footer is the
main place for it, kept to one short dot-separated line (Kyle, 11 Oct 2026: "make it
succinct"); the home-page welcome does not carry it. Kyle had the first welcome
paragraphs (which opened with the credit) removed on 11 Oct, then asked on 12 Oct for
a new welcome, and that day settled on short, punchy tour-operator copy under the
heading "Welcome to Ranomafana!" (no small label above it — he had the "Why
Ranomafana?" one removed), in the order he asked for: four key phrases, one per line
(`welcomeText1`, his own wording: "Wild adventures. Immersive expeditions. Thermal
relaxation. World-renowned biodiversity."), then "UNESCO World Heritage Ranomafana is
home to…" and the key activities (`welcomeText2`), then the impact of a stay
(`welcomeText3`). He asked twice for it shorter and punchier: keep it that way, and
keep the credit out of it.

**The case for Ranomafana is the site's message.** Kyle's rationale ("Why Ranomafana —
Tourism Rationale", 15 Oct 2026) was worked into the site on 16 Oct 2026.

- **Home hero:** it opens on the name. "Ranomafana" is the headline, with "Madagascar ·
  UNESCO World Heritage" above it and "A world found nowhere else." and "…Your visit keeps
  it alive." below. Kyle, 16 Oct 2026: "it should open with clear text that says
  Ranomafana". It replaced "Go deeper into the forest." The welcome section already says
  "Welcome to Ranomafana!", so the hero doesn't repeat it.
- **Keep the home page clear** (Kyle, 16 Oct 2026). The rationale's points live on their
  own page, **Why visit** (`#why`). It has "Why Madagascar" (life found nowhere else, the
  home of the lemurs, your visit goes further) and "Why Ranomafana" (fourteen kinds of
  lemur, all in one valley, run by the people who live here). It also has "How your visit
  protects the forest": the buffer zone and the four-step circle, with pills to guides,
  stays, food and things to do. Its Sources line is at the foot of the page.
- **Links to it:** the welcome's link, the menu drawer and the footer's Explore column.
  It isn't in the desktop nav, which is full.
- **Elsewhere:** the Stay and Hiring a guide intros, and a footer line ("Discover
  Ranomafana. Protect what exists nowhere else."), carry the message too.

Where the document and the site differ, the site wins:
- MNP's 43,550 ha and 14 lemur species, not the document's 41,600 ha and 12.
- "Montane rainforest", not "primary cloud forest" (Talatakely is secondary forest).
- No comparisons with Andasibe, Isalo, Nosy Be or the Avenue of the Baobabs: MNP, a
  partner, runs Andasibe and Isalo.

**Emma Starink is thanked in the footer credit only**
("Thanks to Emma Starink") — Kyle asked for her name to stay out of the main body
text. Do not describe the guide as made with Madagascar National Parks — the first
welcome text did, and Kyle corrected it.

**Never invent contact details.** This site was rebuilt once already because an
earlier draft carried AI-generated phone numbers and emails that turned out to be
fabricated — six were confirmed wrong against FHORM and the properties' own sites.
If a number cannot be sourced, leave the field as `""`. The modal renders an empty
contact block as "no published contact details yet", which is the correct outcome.
A stay's "Send an inquiry" button appears only when the stay has its own email. Until
16 Oct 2026 it fell back to Centre ValBio's ask@valb.io, which sent guesthouse inquiries
to CVB. Never give it a fallback address.

**Never use stock photos of somewhere else.** A listing without its own photograph
gets a generated placeholder card, `images/placeholder-<slug>.jpg` — a colour panel
with the name on it, obviously a graphic. Its words are printed in the picture, so
each card also has `-fr`, `-de` and `-mg` twins (`placeholder-<slug>-fr.jpg`…), which
`localImage()` in the script swaps in for that language. Set `photoNeeded: true` and
run `npm run photos:placeholders`, which writes all four (`--lang fr,de,mg` to leave
the English ones untouched); `npm run check` warns if a twin is missing. An honest placeholder is fine; an Unsplash hotel room
standing in for a real hotel is not.

`PLACEHOLDER_STAY` and `PLACEHOLDER_NATURE` still exist at the top of the data file
and point at real Ranomafana photographs — despite its file name,
`great-ranomafana-nature-shot.jpg` (`PLACEHOLDER_NATURE`, also the National Park
page hero) is a leaf-tailed gecko on a branch, and `ranomafana-primary.jpg`
(`PLACEHOLDER_STAY`) is a waterfall pool. They are for genuinely scenic contexts, not
as a stand-in for a business. Describe them by what they show in `alt` text.

The home-page hero is `ranomafana-national-park-namorona.jpg`, the Namorona River
through the park's rainforest (Kyle's choice, 12 Oct 2026, replacing the gecko: a
forest shot says where you are). A wide, misty shot over the canopy would suit it
even better if one is ever taken; a landscape-format photo fits the hero best.

On listing cards a photo-less listing shows a CSS placeholder (dark panel, name,
"Photo coming soon") and quietly tries its first gallery slot on top, so a newly
dropped-in photo lights up the card as well as the pop-up.

**Station Thermale and Hotel Thermal are two different places.** The public bathhouse
has no photos yet. The home page's "Hot water" section shows Station Thermale's own
pre-wired slot (`station-thermale-pool.jpg`, falling back to its placeholder). Never
put a Hotel Thermal photo there — the canvas did, and it was taken out.

**Photo slots are pre-wired.** Every photo-less listing already has a `gallery` array
naming the files it wants (`karibotel-exterior.jpg`, `karibotel-room.jpg`, …), each
with `fallback` pointing at its placeholder. Dropping a correctly named file into
`images/` lights up that slot with **no code change**. Do not rename these — the
shoot list in `PHOTO-AND-DATA-GAPS.md` is what Kyle is shooting against.

**Free-licensed photos are for public subjects only.** `scripts/fetch-photos.mjs`
pulls Wikimedia Commons photos of the park, lemurs, the river and the falls. Never
extend it to a hotel or restaurant slot: a generic rainforest shot on a hotel card
misrepresents that hotel. It writes `images/PHOTO-CREDITS.md`; **attribution is a
licence condition and those credits must appear on the site before publishing.**

**`verified: false` is a feature, not a TODO.** It renders a "details unconfirmed"
note on the listing. Prefer publishing with the caveat over publishing a guess or
dropping the listing.

**Name is the lookup key.** `openStayModal(name)` / `openEatModal(name)` /
`openDoModal(name)` find rows by `name`. Two rows sharing a name means the second is
unreachable — `npm run check` catches this.

**Facts need a source.** Prices, fees, ratings and opening hours change. Record where
each came from in `sourceNote` and cite the source when you update one. Park fees in
particular have flip-flopped: an earlier pass lowered entry to 45,000 Ar based on two
"2026 fee guides" that turned out to copy each other. Gate reports from 2017, 2024
and August 2025 all say 55,000 Ar plus a community fee, and that is what the site now
shows. Prefer a dated report from someone who paid at the gate over a fee-guide
website. MNP publishes no official list online.

The park's fees exist twice in its `doData` entry: the `price` sentence, and broken
out as `entryFee`, `childFee`, `communityFee`, `guideFees` and `feesAsOf` (year-month).
The home page, the park page and the Hiring a guide page read the broken-out fields.
**Change both together.**

## i18n

Kyle asked on 12 Oct 2026 for **everything** to be translated in every language
option, and it now is: interface, page text and listing content. Two places hold it.

**Interface and page text** — `translations` in `index.html` holds `en` / `fr` / `de`
/ `mg` dictionaries keyed by `data-i18n` attributes (`data-i18n-html` when the value
carries markup such as `<em>` or a link, `data-i18n-placeholder` for inputs,
`data-i18n-alt` for image descriptions, `data-i18n-aria-label` for screen-reader
labels). Rendered cards use `t(key)`. This includes the explanatory paragraphs and
**Sources** lines on Getting here, When to visit, Hiring a guide and About, so a fact
changed there must be changed in all four dictionaries, not just the markup (the
markup holds the English only as the no-script fallback). Values may contain tokens —
`{stays}`, `{eats}`, `{dos}`, `{itins}`, `{circuits}`, `{entryFee}`, `{childFee}`,
`{communityFee}`, `{feesAsOf}`, `{specialistFee}`, `{parkHours}` — filled from the
data by `tokenValues()`. Do not put a `data-i18n` element inside another one: the
outer one's text replaces it. Browsers have no Malagasy month names, so
`mg.monthNames` lists them. Category names (Things to do and Stories) stay English in
the data and are translated through `CATEGORY_LABEL` in the script; month notes are
the `note…` keys.

**Listing content** — `data/ranomafana-translations.js`, as
`LISTING_TRANSLATIONS[collection][slug][field] = { en, fr, de, mg }`, covering the
fields listed in `TRANSLATED_FIELDS` in `scripts/validate.mjs` (plus `name` for
descriptive Do and Eat names). `applyListingLanguage()` switches the rows in place, so
render functions read `row.desc` as before; `english(row, field)` returns the
original wherever the English must stay (Google Maps and Tripadvisor searches,
`STOP_LINKS` matching, the weekly-event test, circuit level colours). The file is
fetched only when someone picks a non-English language. Each field's `en` is the
English it was translated from: **if you change English listing text in the data file,
that field shows English in every language until you update its entry** — copy the
new English into `en` and rewrite `fr`, `de` and `mg`. `npm run check` names every
field in that state, and `npm run check:gaps` lists listing text with no translation
(a new listing starts that way and shows English until translated). Prices in
translations use the local style: `160 000 Ar` (fr, mg) and `160.000 Ar` (de), with
non-breaking spaces so they never wrap mid-number; `localNumbers()` does the same for
fees read straight from the data.

Every new interface string goes into **all four** dictionaries (`npm run check` warns
when one is missing). Photo descriptions are translated too (Kyle, 12 Oct 2026:
"translate all the text including photo descriptions"): gallery `alt` text through the
`gallery[].alt` field of the translations file, page images through `data-i18n-alt`.
A new gallery photo shows its English description until that listing's
`gallery[].alt` entry is updated. Not translated, on purpose: listing names that are
proper names, and partner organisations' names on their logos. All the Malagasy —
the October 2026 redesign and the 12 Oct 2026 translation of the page text and
listings — was written without a native speaker and should be checked by one.

## Adding a new page

1. Add a `<section id="page-x" class="page-view">` with a `page-hero` (give its
   photo `loading="lazy"` so hidden pages don't download it up front).
2. Add `'x'` to `PAGES`, and to `NAV_GROUP` / `PAGE_TITLE` if it belongs under an
   existing nav item.
3. Link to it with `<a href="#x">` — desktop nav (`data-nav`), the drawer, the footer,
   and the bottom nav (`data-bnav`) if it belongs there.
4. Add its keys to all four translation dictionaries.
5. If it renders data, add a `renderX()` and call it from `renderAll()`.
6. If it adds a collection, add it to `COLLECTIONS` in `scripts/validate.mjs`.

## Gotchas

- **Images must exist before you reference them.** The site is served from `file://`
  or a bare http server; a missing image is a silent broken box. `npm run check`
  catches every broken path.
- **Gallery `fallback`.** A gallery entry may carry `fallback: "images/other.jpg"`,
  used via `onerror` when the primary 404s. This is what makes pre-wired photo slots
  work, and `npm run check` treats a missing `src` with a working `fallback` as
  planned rather than broken.
- **The park's circuits live on the park listing.** `doData`'s Ranomafana National
  Park entry carries a `circuits` array rendered as a "Walking Circuits" section in
  its modal. Do not re-split them into separate Things to Do — they share one entry
  fee and one guide.
- **VOI Mitsinjo is not Association Mitsinjo.** The reserve at Ambatolahy is run by
  VOI Ambatolahy and is a genuine local listing; the well-known Mitsinjo is at
  Andasibe, 600 km away. An earlier session deleted this listing over that confusion.
  Do not repeat it.
- **Duplicate keys are silent.** A repeated `gallery:` or `img:` in one object is
  legal JS and the last one quietly wins — it happened once here and hid a correct
  gallery behind a stale one. `npm run check` now fails on it.
- **Filter buttons are hardcoded in HTML** but filter on `type` values from the data.
  Add a new `type` and it will not appear until you add a button. The validator warns
  about both directions of that mismatch. Things to do filters by "layer" instead:
  `DO_GROUPS` in the script maps each `category` to forest / water / village, and the
  validator warns when a category is missing from it.
- **Events need `months`** (`[6, 7]`) to appear on the When to visit month picker.
  Weekly events don't. The next dated event is flagged "Next up" automatically.
- **Itinerary stops are `"When — what"`.** The text before ` — ` shows as the time.
  A stop naming a listed place gets a link via `STOP_LINKS` in the script.
- **Keep images under ~500 KB.** Ranomafana connections are slow. Resize to 1600px
  and JPEG quality 80 (`main-view-cvb.jpg` needed 1440px to get under). The validator
  warns above 500 KB.
- **Nothing may sit off-screen to the side.** An element parked beyond the right edge
  (even a fixed, hidden drawer) widens the page on phones. The drawer is
  `display: none` when closed for that reason; check `scrollWidth` at 375px after
  layout changes.

## Current state

25 stays · 16 restaurants · 14 things to do · 6 itineraries · 8 events · 10 blog
seeds. All 25 stays are verified, against published sources or on Kyle's
authority. The whole site — interface, page text and listings — is in English,
French, German and Malagasy (since 12 Oct 2026).

Kyle's own notes (`Website information.docx`, received 11 October 2026) were folded
into the whole site that day: room rates, meals and contacts for 13 hotels, the
park's fees by circuit and its 07:00–17:00 hours, the hot springs, kayaking, the
arboretum, Getting here, a welcome on the home page and "Why your visit matters" on
the About page. Where his notes disagreed with an earlier source, the conflict is
recorded in that listing's `sourceNote` and in section 0 of `PHOTO-AND-DATA-GAPS.md`.
Stays and restaurants can now carry `rooms`, `ratesNote`, `meals`, `features` and
`wifiNote`; the park carries `hours`, `specialistFee`, `intro` and `wildlife`.
Field reference in `data/README.md`.

The park opens at 07:00. Do not reintroduce "be at the gate by 06:00" advice: Kyle's
notes give mid-morning as the best time for lemurs.

Kyle's WhatsApp photos of 11 October 2026 fill the park gallery and its wildlife cards,
the Jirama waterfall walk, the night walk, the kayaking river slot, four more VOI
Ambohimagneva waterfalls, the Hiring a guide and About pages, and Station Thermale.
Their untouched originals are in `photo-originals/` (not used by the site; keep
originals there, not in `images/`). The park page shows eight photos and a
"See all photos" pop-up (`openParkPhotos()`) for the rest.

Kyle's 12 photos of 13 October 2026 (used as received, no separate originals) gave the
park's Lemurs, Birds and Reptiles cards new photos, added nine to the park gallery, made a
red-eyed tree frog the night walk's card photo, put a feeding golden bamboo lemur on the
home page's Canopy layer and a village beside "Without visitors…" on the About page. Their
descriptions name a species only where the picture makes it certain or Kyle confirmed it
(the golden bamboo lemur and the scaly ground-roller). Four Centre ValBio
photos the same day (aerial, terrace, two team photos) joined the Center Val Bio gallery;
originals in `photo-originals/2026-10-13 Centre ValBio/`. Details in section 7 of
`PHOTO-AND-DATA-GAPS.md`.

Station Thermale prices and hours come from the board at its ticket booth (photo,
October 2026): 10,000 Ar / residents 2,000 Ar, pool closed Tuesdays. It has **no contact
details of its own** — never fill them with Hotel Thermal's, which is what the site
did until 11 October 2026.

Open editorial work is tracked in `PHOTO-AND-DATA-GAPS.md`: 6 unconfirmed listings,
29 entries awaiting a real photograph (103 individual photo slots, all pre-wired),
and the conflicts listed in its section 0. The team profiles on the About page are
placeholders. Kyle's notes had headings for a donation link and a town map with no
content yet; nothing was added for them.

Source material — one folder per property, with the original descriptions and
photos — lives outside this repo at `C:\Desktop\Ranomafana Website`.
