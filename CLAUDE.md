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
its last good version. Only `index.html`, `404.html`, `sitemap.xml`, `sw.js`,
`data/` and `images/` go online. The repo is
public (free GitHub Pages requires it), so notes, scripts and `photo-originals/` are
readable on GitHub even though they are not part of the website.

**Extras added at publish time (23 Oct 2026).** After copying those files, the
workflow runs two scripts on the copy it is about to publish — never on this folder,
so Kyle never runs them and nothing here changes:
- `scripts/publish-photos.py` makes an 800 px copy of every JPEG/WebP wider than
  900 px in `images/w800/`.
- `scripts/publish-extras.mjs` writes a copy of the page for each section
  (`…/stay/index.html` and so on, with `<base href="../">`, its own title,
  description, canonical address and `window.START_PAGE`), adds schema.org
  structured data from the data file, puts `window.PHOTO_FILES` (every file in
  `images/`) and `window.SMALL_FILES` (the 800 px copies) after the
  `PUBLISH-EXTRAS` marker in the `<head>`, gives the page's own `<img>` tags a
  `srcset`, and rewrites `sitemap.xml` with every page.
Both steps are `continue-on-error`: if one fails, the plain site is published as
before. The page works without them — run locally there is no START_PAGE and no photo
lists, so every photo slot is tried and photos load full size. Never reference
`images/w800/` from the data or markup; it only exists on the live site. To try the
extras locally: copy the five items and the two folders into `_site/` (git ignores
it), run both scripts on it, open `http://localhost:8137/_site/`, then delete it.

**Offline reading.** `sw.js` (registered at the end of the page script) keeps the
page, data, translations and the two maps for reading with no signal. It fetches the
network first, so a publish is never held back, and keeps no photos. If you change
`sw.js`, raise the number in its `CACHE` name (now `-v2`). It fetches with
`cache: 'no-cache'` (24 Oct 2026), so the browser's own short-term cache can't hand
back an old page after a change.

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
   `slug`, `category`, `status: "draft"`, `sample: true`, a short sample
   `body` written only from facts already on the site, and an `img` from `images/` —
   never a canvas `/_blob/…` URL; if the card's photo isn't in `images/`, ask Kyle for
   the file). Changed category or excerpt → update the entry. Ignore the canvas's
   read times: the site works out read time from the body (there is no `readMins`
   field any more). Keep each excerpt to what its body actually says. A card whose
   title changed: confirm with Kyle which entry it replaces before renaming (the
   title is what links them). Story text written in the canvas → the entry's `body`.
3. The order of the home "Field notes" cards → `HOME_STORIES` in `index.html`. Only
   stories with `status: "published"` are listed (Stories page and home); a draft
   stays off the site but opens from its own link (`#blog/<slug>`) for a preview. With
   one published story the card is drawn wide; with none, Field notes is hidden.
   Publishing a story is Kyle's call: don't set `published` without him.
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

Twenty-seven `<section id="page-x" class="page-view">` elements, one shown at a time by
`switchPage(id)`: `home`, `why`, `stay`, `eat`, `do`, `park`, `birdwatching`, `itineraries`, `getting-here`,
`when`, `know`, `events`, `blog`, `gallery`, `services`, `tourism-plan`,
`development-plan`, `investors`, `contact`, `ranomafana`, `commune`, `gendarmerie`,
`hospital`, `public-documents`, and four section overviews: `explore`, `plan`,
`services`, `documents`.
**Header tabs and sections** (23 Oct 2026). Kyle: "for the upper tab list About,
Hotels, Restaurants, Activities, Events calendar. The other activities and subheadings
should logically flow underneath these tabs or should be found at the bottom of the
site." The header has exactly those five tabs, as plain links (Kyle had drop-down
menus taken out the same day: "make it simple and clickable"). Each opens its page,
whose tab bar holds the pages under it:
- **About** (`#ranomafana`): About Ranomafana, Why visit, Photo gallery, Contact.
  Stories moved to Explore on 24 Oct 2026 (Kyle: "Move the stories to the explore"). There is no About overview page (Kyle, 24 Oct 2026: "start with an about
  ranomafana first and remove the overview page"): the section opens on
  `ranomafana`, which holds the "At a glance" figures and the six fact cards. Old
  `#about` links land there (`PAGE_ALIAS`, and `ALIAS` in `404.html`).
- **Hotels** (`#stay`) and **Restaurants** (`#eat`): no menu.
- **Activities** (`#do`): Things to do, National park, Birdwatching, Itineraries.
- **Birdwatching** (`#birdwatching`, added 26 Oct 2026, Kyle: "add a learn more about
  birdwatching in Ranomafana page"): the long version of the Birdwatching listing,
  built from the park and Birdwatching listings plus the six birds that make the park
  a Key Biodiversity Area (keybiodiversityareas.org, site 6600, checked 26 Oct 2026;
  their names stay in English with the scientific name, in every language). The fees
  are tokens, so January 2027's new guide fee reaches it through `specialistFee`. The
  Birdwatching pop-up ("Learn more about birdwatching") and the park's Ornithology
  card link to it; it has a Sources line (`birdSources`).
- **Hiring a guide is part of the National Park page** (Kyle, 24 Oct 2026: "should be
  integrated into the information about the national park"). It was its own page
  (`guides`); its sections (how it works, costs `#guideCosts`, specialists, outside the
  park `#guidesOutside`, its Sources line) now follow the park's main column, under
  `#park-guide`. `renderGuides()` still fills them. Links to `#guides` are kept on
  purpose: `PAGE_ALIAS` sends them to `park` and `SCROLL_TO` scrolls to `park-guide`
  (`404.html` has the same alias), so old shared links work too.
- **Events calendar** (`#events`): What's on, When to visit.
Everything else is at the foot of the site: the footer's five columns are Explore
(Hotels, Restaurants, Activities, Ranomafana National Park, Events calendar, Stories —
the same six as Explore's tab bar and overview cards; Kyle, 26 Oct 2026, asked for the
park there), Plan (the four
planning pages and Hiring a guide), About, Municipal services (commune, gendarmerie, hospital) and
Documents (tourism-plan, development-plan, investors, public-documents). The phone menu
holds only Home and the five header tabs (Kyle, 26 Oct 2026: "only show main
headers") — no sub-pages; don't add them back. The phone bottom bar is Home, About,
Stay, Eat, Do, Events.

All of it comes from `SECTIONS` in the script. The three header tabs with menus, and
Plan, Municipal services and Documents, put one tab bar under the hero of every page
they hold (`buildSectionTabs()` at start-up); a section whose own page is its overview
names it in `overview` (Activities → `do`, Events → `events`). A page carries only one
bar, so Plan's bar holds Getting here and Know before you go, and its overview shows
Itineraries, When to visit and Hiring a guide (the park's guide section) as extra cards
(`more`). Explore's bar sits only on its overview and on Stories (`barOn`); its other
pages carry their header tab's bar. Overviews of cards (`renderHubs()`, photo
and text read from each page's own hero photo and intro) exist for `explore`, `plan`,
`services` and `documents`. **Never write a `plan-tabs` bar by hand**: add the
page to `SECTIONS`, and keep `NAV_GROUP` (which header tab lights up) in step.

Kyle, 23 Oct 2026, on the sections: each needs a dedicated page with a tab bar;
Municipal services must not share a place with Stories; Public documents and each
service get their own tab. **About** is about Ranomafana itself: `ranomafana` ("About
Ranomafana") opens with "At a glance" figures (Kyle, 26 Oct 2026: "put at a glance
first, then the images, then the text"), then "The village and the valley", five of Kyle's photos (26 Oct 2026: the village under a
rainbow, zebu on the main road, the RN25 welcome sign, a river over boulders, zebu on a
riverbank; and later that day the Namorona in mist, a sixth), three across (two on phones). They are `TOWN_PHOTOS` in the script (`renderTownPhotos()`; a tap opens
them in the pop-up) and also appear in the Photo gallery under "Village & culture",
linked back to About Ranomafana. Then comes the text: "The valley of hot water" in six
cards — every fact taken from elsewhere on the site, with a Sources line. Service entries are `municipalData` rows with `section`
"commune", "gendarmerie" or "hospital"; none have been confirmed, so each page shows an
"on its way" note. Never fill the Gendarmerie or hospital with unconfirmed numbers.
**Documents** (23 Oct 2026): `tourism-plan` (Regional Tourism Plan), `development-plan`
(Ranomafana Development Plan) and `investors` (Investor information) share a tab bar,
and a fourth footer column, "Documents", beside Explore, Plan and About (with a link to
the Commune's public documents too). Each lists the `documentData` rows whose
`section` names it; until then it says the document is on its way. Write nothing about
the plans' contents on the site: the documents themselves are the source.
**`contact`** (23 Oct 2026, Kyle: "merge the team and the contact tab under contact")
was the About page (`about`): the "Email the team" box first, then the team. Drawer
and footer have one "Contact" link to it; `PAGE_ALIAS` (and `ALIAS` in `404.html`)
sends old `#about` / `…/about` links there. "About page" below means this page. `gallery`
and `services` were added on 23 Oct 2026 at Kyle's request (a partner's list of five
asks: contrast, new sections, partner logos, social media, birdwatching):
- **Photo gallery** (`#gallery`, header tab "Gallery"): every real photo in the
  listing galleries, gathered by `renderGallery()` — nothing to maintain; a new
  gallery photo appears by itself. Placeholders, `PLACEHOLDER_STAY/NATURE` and empty
  pre-wired slots are left out. Filters reuse the Things-to-do layers plus "Stays &
  food". A tap opens the photo with a link to its listing; arrow keys step through.
  Each photo has a ♥ (Kyle, 23 Oct 2026): a liked photo moves to the top (latest
  like first) and joins a "Your likes" filter. Likes are kept in the visitor's own
  browser (`localStorage`, key `ranomafana-liked-photos`), so each visitor sees only
  their own; shared like counts would need an outside service.
- **Municipal services** (`#services`, header tab "Commune"): the Commune's services
  (`municipalData`) and **public documents** (`documentData`, files in `documents/`,
  which the publish workflow now copies), plus a "Follow Ranomafana" block. Both
  lists started empty, so the page shows "on its way" notes; never fill them with
  guessed offices, hours or numbers.
- **Social links** (`SOCIAL_LINKS`) and **extra partner logos** (`PARTNER_LOGOS`,
  pre-wired file names) are settings at the top of the data file; see
  `data/README.md`. Both were left empty for Kyle to supply.
- The gold "Plan your visit" / "Ask the team" header button was removed when the
  header had nine tabs; it has five now (see "Header tabs and sections"), and the
  button was not brought back. `know` ("Know before you go",
added 23 Oct 2026) is the fifth Plan tab: visas, health and safety with links to
official advice (the e-visa portal, GOV.UK, CDC, France Diplomatie, Auswärtiges
Amt), money with the exchange-rate note, a packing list, the eight-point
**Ranomafana promise** (the visitor code; guides, MNP and the Commune should check
it, especially the line on fady) and a few Malagasy words. It states no visa fees or
health rules of its own: those change, so it links out. The plan tabs on all five
Plan pages, the drawer, the footer and the home "Before you go" strip link to it. The page name lives in the address as a
hash (`index.html#park`), so links are plain `<a href="#park">`, the back button
works, and pages can be shared. `PAGES`, `NAV_GROUP` (which nav item lights up) and
`PAGE_TITLE` in the script list them. **No element may have an `id` equal to a page
name** — the browser would scroll to it.

Each listing and story pop-up has its own address too: `#stay/setam-lodge`,
`#eat/<slug>`, `#do/<slug>`, `#blog/<slug>` (`ITEM_PAGES` and `markOpenItem()` in the
script). Opening one swaps the address in place (no extra back-button step), closing
it puts the page's address back, and a link to it opens that page with the pop-up.
Each of these pop-ups has a Share button (the phone's share menu, or a copied link,
with `?lang=` for the current language). The **slug is the link**, so don't rename
the slug of a listing that is already online.

The first language a visitor sees is, in order: `?lang=fr` (or `de`, `mg`) in the
link, their own earlier choice from the menu (saved in the browser), their browser's
language, then English. Only a menu choice is saved, and it drops any `?lang=`.

**Search and sharing.** The `<head>` carries link-preview tags (the photo is
`images/og-ranomafana.jpg`, a 1200×630 crop of the hero) and a canonical address.
Those, and `sitemap.xml`, hold the full github.io address: if the site gets its own
domain, change all of them (the publish step reads the address from the canonical
link). On a per-page copy (`…/stay/`) the page changes in place: `switchPage()`
writes the full path into the address, and in-page `#` links are caught by the
click handler, because `<base href="../">` would otherwise send them to the home
copy. `404.html` is what GitHub Pages shows for a missing
address, in the visitor's language; an address ending in a page name (`…/stay`) is
sent on to that page (`#stay`).

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
keep the credit out of it. On 20 Oct 2026 he asked for a photo there: under the heading
sits the yellow footbridge into the park (`ranomafana-national-park-entrance.jpg`), with
an inset of the greater bamboo lemur over its corner (`.welcome-photos`; descriptions
`altWelcomeBridge` and `altWelcomeLemur`). No text was added with them.

**The case for Ranomafana is the site's message.** Kyle's rationale ("Why Ranomafana —
Tourism Rationale", 15 Oct 2026) was worked into the site on 16 Oct 2026.

- **Home hero:** it opens on the name. "Ranomafana" is the headline, with "Madagascar ·
  UNESCO World Heritage" above it and "A world found nowhere else." and "…Your visit keeps
  it alive." below. Kyle, 16 Oct 2026: "it should open with clear text that says
  Ranomafana". It replaced "Go deeper into the forest." The welcome section already says
  "Welcome to Ranomafana!", so the hero doesn't repeat it.
- **Keep the home page clear** (Kyle, 16 Oct 2026). The rationale's points live on their
  own page, **Why visit** (`#why`). In order, the page has:
  - **"Where in the world":** a map of Madagascar with tappable pins and a panel beside it.
  - **"Why Madagascar":** life found nowhere else, the home of the lemurs, your visit
    goes further.
  - **"Why Ranomafana":** fourteen kinds of lemur, all in one valley, run by the people
    who live here.
  - **"The valley up close":** a map of the valley with four tappable stops.
  - **"How your visit protects the forest":** the buffer zone and the four-step circle,
    with pills to guides, stays, food and things to do.
  - **"Why your visit matters":** "On the fence about visiting?", "Who your visit
    supports" (`who1`–`who8`) and "By the numbers" (visitors before and since the
    pandemic, the town's 20,000 people). It used to sit on the About page; Kyle asked on
    20 Oct 2026 for it to be on a different page from the team. The same day he asked
    for it to keep some of the MNP story but to focus, in the end, on what ecotourism
    does for the community. So the paragraphs pair how fees fund the park with where
    visitors' money goes locally; MNP's role since 1991 is told through how it involves
    communities; and the pandemic paragraph covers both the town and MNP. The list is
    five community points (guides and their association, villagers working with MNP,
    the town's businesses, the VOI reserves, artisans), two MNP points (its rangers and
    protection work, its research partners) and the community fee. The photo beside it
    is the town flowers (Kyle asked for it back after it was briefly swapped). Keep
    that balance. At both VOI reserves, Mitsinjo and Ambohimagneva, the fees go straight
    to the village and its people (Kyle, 20 Oct 2026; also on the Ambohimagneva listing). The About page is now the team and
    the "Email the team" box only, with no Sources line of its own: those facts' sources
    joined `whySources`.
  - **"Where your money goes"** (added 23 Oct 2026, review C3): five rows — park
    entry, the community fee, the guide fee, the VOI reserves, beds/meals/crafts —
    each saying who the money reaches, from facts already on the site. The amounts
    are tokens (`{entryFee}`, `{communityFee}`, `{guideRange}`). The community fee
    row only repeats MNP's own name for it ("a communal tax"); what it pays for is
    not yet sourced.
  - **A Sources line** at the foot of the page.

  Each reason is a photo card (`WHY_CARDS` in the script). Tapping a card opens its photos
  in the pop-up with a link onward. The photos are already on the site, and their
  descriptions come from the listing galleries (so they are already translated) or from
  `PAGE_PHOTO_ALT`.
- **The maps** are static SVGs in `images/`: `map-madagascar.svg` (Natural Earth, public
  domain) and `map-ranomafana.svg` (OpenStreetMap, ODbL; the credit under it is a licence
  condition). `scripts/make-maps.py` drew them and explains how to redraw them. The pins
  and place names are HTML on top of the pictures, so they translate, at percentages set
  in `MAPS` in the script.
  - **Shared pins:** places only 250 m apart share a pin (the park gate with Centre
    ValBio, the village with the thermal pool), so pins never overlap on a phone.
  - **Short pin labels:** pins carry short labels; the panel gives the full name.
  - **Check after any change:** check pin labels for overlap at 320–375 px in all four
    languages.
- **Its tab:** Why visit had its own header tab until 23 Oct 2026; it now sits in the
  About tab's menu and tab bar (see "Header tabs and sections"). The welcome's link,
  the menu drawer and the footer's About column lead to it.
  - **Header fit:** the header gaps were tightened, and the German label shortened to
    "Warum hierher", so the header stays on one line at 1280 px in every language. It
    already wrapped at 992–1200 px.
  - **Malagasy Home tab:** the Malagasy bottom-bar "Fandraisana" carries a soft hyphen,
    so on small phones it breaks to two lines instead of being cut.
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

In a listing's pop-up gallery, placeholder cards appear only while the listing has no
real photo (Kyle, 26 Oct 2026): once one real photo is in, `galleryHTML()` leaves out
every slot still waiting for its file (and any placeholder image), and leads with the
first real photo. A pre-wired slot still lights up by itself when its file arrives.

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
   existing nav item. If it belongs to a section, add it to `SECTIONS`: it gets its
   card and its tab, and its breadcrumb should name the section.
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
  Do not repeat it. Google makes the same mistake: its pop-up map searched the name and
  pinned Andasibe, so the listing carries `mapPin` (Ambatolahy village, from
  OpenStreetMap). The reserve is around 150 hectares of forest (Kyle, 23 Oct 2026).
- **Pop-up maps search Google for the listing's name** unless it has a `mapPin`. All
  56 were checked on 23 Oct 2026: eleven landed on another business, another town or
  a scatter of pins, and are now pinned (sources in each `sourceNote`). Two rest on
  the best evidence found rather than Kyle's word: VOI Ambohimagneva (Google's own
  listing for the reserve, at the forest edge north of town; Kyle confirmed its phone
  number, now on the listing, on 23 Oct 2026) and Cascade
  Andriamamovoka (the roadside viewpoint below the park gate; Wikidata's coordinates
  for the falls are rough). The Jirama hike is pinned at its start, the public pool.
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

25 stays · 16 restaurants · 17 things to do · 7 itineraries · 8 events · 10 blog
seeds. **Birdwatching** (`do`, slug `birdwatching`, 23 Oct 2026) is built only from
facts on the park listing (125 species, Vohiparara, the specialist guide fee): when
the park's guide fees change in January 2027, change its `price` too. All 25 stays are verified, against published sources or on Kyle's
authority. The whole site — interface, page text and listings — is in English,
French, German and Malagasy (since 12 Oct 2026).

Kyle's own notes (`Website information.docx`, received 11 October 2026) were folded
into the whole site that day: room rates, meals and contacts for 13 hotels, the
park's fees by circuit and its 07:00–17:00 hours, the hot springs, kayaking, the
arboretum, Getting here, a welcome on the home page and "Why your visit matters" on
the About page (now on Why visit). Where his notes disagreed with an earlier source, the conflict is
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
home page's Canopy layer and a village beside "Without visitors…" (now on the Why visit page). Their
descriptions name a species only where the picture makes it certain or Kyle confirmed it
(the golden bamboo lemur and the scaly ground-roller). Four Centre ValBio
photos the same day (aerial, terrace, two team photos) joined the Centre ValBio gallery;
originals in `photo-originals/2026-10-13 Centre ValBio/`. Details in section 7 of
`PHOTO-AND-DATA-GAPS.md`.

Kyle's 51 photos of 19 October 2026 (used as received; 28 on the site) added 18 to the
park gallery (four of them among the eight on the park page, and the yellow footbridge
over the Namorona fills the old `entrance` slot), filled all of Studio oloNala's slots
plus two more, gave Varibolo Resto its frontage and terrace, and added two to the
kayaking listing. They also started a new listing, **Park Entrance Craft Shop** (Market):
Kyle says it is a local shop by the park entrance, not Varibolo's. Its real name and
hours are unknown, and its description lists only what the photos show. Varibolo Resto
is **not** the Park Entrance Restaurant (Kyle, 19 Oct 2026). Kyle asked for the photos
showing people's faces (his group at the park sign, a woman at the Varibolo banner) to go
on the site. The large lemur with white ear tufts stripping bamboo is named a greater
bamboo lemur from those marks, not on Kyle's word, so it is flagged for him to check. The
Varibolo banner is the source of the second Varibolo number (034 37 737 13) and
variboloresto72@gmail.com. Details in section 7 of `PHOTO-AND-DATA-GAPS.md`.

Kyle's 14 photos of 20 October 2026 (used as received) each went to the listing he named:
VOI Mitsinjo Reserve got seven (its twin waterfall, now the card photo, the viewing
shelter, the walk in, the path being cleared), the park two sunlit cascades, VOI
Ambohimagneva two tree-frog photos and a waterfall, and the Jirama Waterfall Hike two
more of the big falls. VOI Mitsinjo's description now says how to reach the waterfall,
in Kyle's words of 20 Oct 2026: a 30-minute walk from Ambatolahy village, or a four-hour
hike through the forest.

Kyle's photo of 26 October 2026 (used as received), a golden bamboo lemur sitting in
bamboo, is the park listing's photo (`ranomafana-national-park-golden-bamboo-lemur.jpg`):
the Things to do card, the Explore overview card and the first of the park page's
photos. It is a tall photo, so the listing's `imgPosition: "center 34%"` keeps the
lemur in the wide card frames. The old card photo (a lemur on a branch) moved to the
end of the park gallery.

Kyle's other photos of 26 October 2026 (WhatsApp copies, used as received):
- **Park wildlife:** a pale frog with orange feet, a yellow-and-black weevil, two
  millipedes and a land snail joined the end of the park gallery, and the frog heads a
  fifth wildlife card, "Frogs & small creatures" (no species named: the photos don't
  make them certain).
- **Mahakaty Reserve** (`do`, slug `mahakaty-reserve`, category "Nature reserve", a new
  category in `DO_GROUPS` (forest) and `CATEGORY_LABEL`): a new listing at Kyle's request
  with his six photos. Its description holds only what the photos show; the hours
  (08:00–15:30, every day) come from the faded sign by the reception door. Who runs it,
  where it is, fees and contacts are unknown, so it is `verified: false`, with no
  `mapPin`, until Kyle confirms (section 6 of `PHOTO-AND-DATA-GAPS.md`).
- **Centre ValBio at night** (`cvb-buildings-night.jpg`), fourth in its stay gallery.
- **Kayaking:** the launch slot (`namorona-kayaking-launch.jpg`) is filled, and a
  paddler waving at the launch (`namorona-kayaking-paddler.jpg`) added after it; the
  group slot is still waiting.

The park office notice board (photo, 19 Oct 2026; copy in `photo-originals/2026-10-19
Park office/`) confirms the entry and guide fees the site shows. It also posts new guide
fees from **January 2027** (120,000 / 150,000 / 180,000 Ar, specialists 250,000 Ar),
shown for now as a park tip. In January 2027 move them into `guideFees` and
`specialistFee` (and the `price` sentence) in all four languages, and drop the tip.
Notices on the same board about new entry fees for "Parc Phare" parks could not be read;
nothing was taken from them.

Station Thermale prices and hours come from the board at its ticket booth (photo,
October 2026): 10,000 Ar / residents 2,000 Ar, pool closed Tuesdays. It has **no contact
details of its own** — never fill them with Hotel Thermal's, which is what the site
did until 11 October 2026.

Open editorial work is tracked in `PHOTO-AND-DATA-GAPS.md`: 6 unconfirmed listings,
26 entries awaiting a real photograph (95 individual photo slots, all pre-wired),
and the conflicts listed in its section 0. The team profiles on the About page are
placeholders, hidden (`hidden` on `.team-grid`, with a note in the markup) until
Kyle has names; the About page shows the credit line and the email box meanwhile. Kyle's notes had headings for a donation link and a town map with no
content yet; nothing was added for them.

**Review of 22 October 2026.** A tourism review and benchmark, the claude.ai
artifact <https://claude.ai/artifact/Wm3UVW8U6hhzFoMpiJL2Ep>, lists bugs F1–F10,
recommendations A1–E2 in a four-phase roadmap, and seven questions for Kyle; he may
cite them by code. Phase 1 (F1–F4, F9, F10, A1, A2, A7, B3) was done on 22–23 Oct
2026:
- varibolo.com and karibotel.com no longer exist, so their links are gone, and
  Varibolo's email is now the banner's variboloresto72@gmail.com (info@varibolo.com
  could not receive mail);
- drafts are hidden and read times worked out from the text, with four excerpts
  rewritten to match their stories;
- the team cards are hidden;
- "best-rated" and "most-reviewed" were removed from Soa Lodge, Grenat and Hotel
  Manja (the site's own ratings contradicted them) — don't add rankings back;
- "Centre ValBio" is spelled that way everywhere, and the footer copyright uses the
  guide's name;
- ratings show their scale ("★ 4.4/5", "★ 9.0/10");
- plus the sharing tags, sitemap, 404 page, language detection and item links
  described under Pages.

**The rest of the review, 23 Oct 2026** (Kyle: "fix all bugs and check all
recommendations"):
- **Settings at the top of the data file:** `TEAM_EMAIL` (every "Ask/Email the
  team" link, through `data-team-mail` in the markup; still ask@valb.io until Kyle
  confirms Centre ValBio answers for the guide — review F5) and `EXCHANGE` (one
  dated XE mid-market rate, for the "≈ €11 · $12" guide beside fees and the
  exchange-rate note; `npm run check` warns when it is six months old).
- **Peace Corps:** the logo is a local copy (`images/peace-corps-logo-white.svg`)
  and the footer carries a disclaimer (`footerDisclaimer`). Whether Peace Corps
  Madagascar approves the logo, and wants other wording, is still Kyle's to ask (F6).
- **Events:** the home page and When to visit show only firm dates and confirmed
  weekly events; the two unconfirmed weekly ones stay on What's on, with their note.
  The World Lemur Festival's `date` is 2026-10-30: after the festival, set next
  year's date (the last Friday of October) or it drops off the home page.
- **WhatsApp:** `contact.whatsapp` on Setam Lodge, Au Domnatur (the two numbers its
  note names) and Kambana, from their own notes. Add others only on the business's
  word.
- **Park-gate distances:** `toGate` on 24 stays (not Soa Lodge, which is not on
  OpenStreetMap), measured by OpenStreetMap routing to the park reception
  (-21.25625, 47.42129). By road the village centre is about 5.8 km from the gate;
  the site's "6.5 km" and "about 7 km" (MNP and Kyle's notes) were left as they are.
  Shown on stay cards and pop-ups, and as the "Nearest the park" sort. "The closest
  place to stay" (Setam: Centre ValBio is closer), Manja's "4 km from the park" and
  Kambana's "8 km from the park" were taken out as wrong.
- **Prices:** Kambana and Minerva now read Ariary first ("About 160,000 Ar ($35)"),
  converted at the XE rate of 23 Oct 2026; their `sourceNote`s say so.
- **Plan costs:** each itinerary's `costs` list adds up per adult (alone, 2 or 4
  sharing a guide) from the fees in the data. "Contact for rates" items show as
  "price on request". A seventh plan, **When It Rains** (`rainy-day`), uses only
  existing listings; When to visit links to it in wet months.
- **"Details as of October 2026"** (`asOf`) on the 22 listings whose details come
  from Kyle's notes of 11 Oct 2026 or the Station Thermale price board.
- **Home:** the "Before you go" strip now sits right under the welcome (C6).
- **Printing:** a print style prints just the page (or open pop-up) dark on white;
  plans have a "Print this plan" link.
- **Search, speed, offline:** see Publishing.

**Colours, 23 Oct 2026.** The ground was lifted from near-black to deep forest green,
secondary text and borders lightened (every text colour passes WCAG AA on `--under`),
and a forest accent added: `--leaf` / `--leaf-deep` for small strokes before section
labels, card tops and hovers, tick icons and the footer edge. It never marks an
action — gold still does that.

Still waiting on Kyle for the 23 Oct additions: the official Facebook, Instagram and
LinkedIn addresses; logo files for the Commune, Vatovavy Region, Ministry of Tourism,
Regional Tourism Office and each PCDT-R member (and their exact names); the
Commune's services and any public documents to post.

Still waiting on Kyle (the review's questions and partner work): who answers the
team inbox (F5), Peace Corps logo approval (F6), Search Console sign-in and sitemap
submission, a domain (A5), local facts for Know before you go (nearest cash machine,
phone signal, clinic, emergency numbers, tipping), what the community fee pays for
(C3), confirming the two weekly events (F8), coordinates or access notes for the rest
(B5, C8), the business survey for badges (C7), and everything in the review's group
D that needs partners (festival programme, village experiences, guide profiles, trek
prices, volunteer day, trade kit, visitor counter).

Source material — one folder per property, with the original descriptions and
photos — lives outside this repo at `C:\Desktop\Ranomafana Website`.
