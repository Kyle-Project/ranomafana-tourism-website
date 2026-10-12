# Ranomafana Tourism Directory

A community tourism directory for Ranomafana, Madagascar — where to stay, where to
eat, what to do, and how to plan a visit around the national park.

Static site. No build step, no framework, no dependencies to install.

## Getting started

```bash
npm run dev
```

Then open <http://localhost:8137>. That is it — `npm run dev` just starts Python's
built-in web server. Nothing is compiled.

After changing any listing:

```bash
npm run check
```

## Publishing

Live site: <https://kyle-project.github.io/ranomafana-tourism-website/> ·
repository: <https://github.com/Kyle-Project/ranomafana-tourism-website>

The site is hosted on GitHub Pages and updates itself: every change pushed to the
`main` branch on GitHub goes live a minute or two later. Before publishing, GitHub
runs the same `npm run check`; if it finds an error, nothing changes on the live
site and the run shows a red ✗ under the repository's **Actions** tab.

## What's where

| Path | What it is |
|---|---|
| `index.html` | The whole site — markup, styles, JavaScript, translations |
| `data/ranomafana-data.js` | **The database.** Every listing lives here |
| `data/ranomafana-data.json` | Generated copy for CMS import — don't edit by hand |
| `data/ranomafana-translations.js` | Listing text in French, German and Malagasy |
| `data/README.md` | Field-by-field reference for the database |
| `images/` | All photography |
| `scripts/validate.mjs` | The data checker behind `npm run check` |
| `scripts/make-placeholders.py` | Generates the placeholder cards |
| `scripts/fetch-photos.mjs` | Downloads free-licensed Commons photos |
| `.github/workflows/publish.yml` | Publishes the site to GitHub Pages on every push |
| `CLAUDE.md` | Project conventions, for Claude Code sessions |
| `PHOTO-AND-DATA-GAPS.md` | What still needs verifying or photographing |

## Editing a listing

Open `data/ranomafana-data.js`, find the listing, change it, save, run
`npm run check`, reload the page. Nothing else needs touching — the page counts,
filter chips and search all read from the data.

To add a listing, copy the nearest existing entry and edit it. `data/README.md`
explains every field.

## Two rules

**Don't guess contact details.** If a phone number can't be sourced, leave it empty.
The site renders an empty contact block honestly, as "no published contact details
yet". An earlier version of this directory carried invented phone numbers; six were
later found to be wrong.

**Don't use stock photos of other places.** A listing with no photograph shows a
generated placeholder card with its name on it — obviously a graphic, so no visitor
is misled. Set `photoNeeded: true` and run `npm run photos:placeholders`.

## Adding photos

Every photo-less listing already knows which files it wants. Shoot it, name the file
exactly as the shoot list says, drop it in `images/`, reload. Nothing else to do —
no code, no editing the data file.

The shoot list is in [PHOTO-AND-DATA-GAPS.md](PHOTO-AND-DATA-GAPS.md).

## Current contents

25 places to stay · 16 places to eat · 14 things to do · 6 itineraries · 8 events ·
10 blog seeds. Fully available in English, French, German and Malagasy: the
interface, the page text and every listing. Listing translations live in
`data/ranomafana-translations.js`; when you change a listing's English, run
`npm run check` — it lists any translation that now needs updating, and until it is
updated that text shows in English. The Malagasy still needs checking by a native
speaker.

Pages: home, Places to stay, Places to eat, Things to do, the National Park, four
Plan pages (Itineraries, Getting here, When to visit, Hiring a guide), What's on,
Stories and About. Each has its own address, such as `index.html#park`, so you can
link straight to it. The design follows the "Ranomafana Website Redesign" canvas of
October 2026.

The accommodations have been checked against published sources — the Malagasy
hoteliers' federation (FHORM), the Ministry of Tourism register, Tripadvisor, Petit
Futé, and the properties' own websites — and, since October 2026, against the room
rates, meal prices and contacts the team collected locally.

Outstanding work is listed in [PHOTO-AND-DATA-GAPS.md](PHOTO-AND-DATA-GAPS.md).
