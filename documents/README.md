# Public documents

Files in this folder can be downloaded from the website's **Documents** pages:
Regional Tourism Plan, Ranomafana Development Plan, Investor information and
Public documents (the Commune of Ranomafana's own). To add one:

1. Save the file here, with a short name and no spaces, such as
   `arrete-camping-2026.pdf`. A PDF is best; keep it small (connections in
   Ranomafana are slow — `npm run check` warns above 5 MB).
2. Add a row for it to `documentData` in `data/ranomafana-data.js` (the comment
   there shows the fields). Its `section` says which page lists it.
3. Run `npm run check`.

Publish only documents the Commune has made public. This folder goes online with
the site; this README does not.
