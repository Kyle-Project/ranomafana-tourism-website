/* ============================================================================
   RANOMAFANA TOURISM DIRECTORY — MASTER DATABASE
   ----------------------------------------------------------------------------
   This file is the single source of truth for every listing on the site.
   index.html loads it BEFORE its own <script>, so these arrays are global.

   To add or edit a listing: edit the object here. Nothing in index.html
   needs to change.

   FIELD REFERENCE
   ---------------
   Shared
     slug        kebab-case id, unique within its collection
     name        display name (also the lookup key used by the modals)
     desc        1-2 sentence card description
     img         card image — a path under images/
     sourceNote  where the facts came from (kept out of the UI)
     verified    true  = confirmed against a published source or on the ground
                 false = needs local verification before launch (shows a
                         small "details unconfirmed" note in the modal)

   stays        type: 'eco' | 'hotel' | 'guest'
                price (the short range shown on the card), wifi, hotWater,
                restaurant, parking
                gallery: [{ src, alt, fallback? }]
                contact: { phone, email, website, social, note? }
                Optional, all shown in the pop-up:
                  rooms: [{ type, price }]   the room-by-room rate table
                  ratesNote   one line under the table ("Breakfast is included.")
                  meals: [ "Breakfast: 10,000 Ar", … ]
                  features: [ "Swimming pool", … ]   shown as "Good to know"
                  wifiNote    where the Wi-Fi reaches ("In the restaurant")
                  toGate      km to the park gate by road, rounded to 0.5 km.
                              Measured 23 Oct 2026 with OpenStreetMap routing from
                              the listing's place on OpenStreetMap (Minerva: from
                              Centrest, opposite; Kambana: from Tsararano hamlet;
                              Forêt Australe: from Ambatolahy). Shown in the pop-up
                              and used by the "Nearest the park" sort.
                contact.whatsapp   the number(s) the owner says take WhatsApp,
                              joined by " / ". Adds a "Message on WhatsApp" button.
                              Only from the business itself or Kyle's notes.
                asOf        "2026-10": the month the listing's details were
                              gathered. Shown as "Details as of October 2026".

   eat          type: 'malagasy' | 'french' | 'snack' | 'hotel'
                rating (string; '—' when unrated), price ('$'..'$$$')
                contact, hours, highlights[], meals[] (optional, as for stays)

   do           category, price, rating, duration, desc, gallery, contact
                status: 'open' | 'coming-soon'

   do (park)    entryFee, childFee, communityFee, guideFees[], specialistFee,
                hours, feesAsOf — the national park's fees and opening hours,
                broken out for the home, park and guide pages. Keep them in
                step with its `price` string. guideFees rows are
                { walk, hours, price }; hours may be a range ("2–4").
                intro[] (paragraphs for the park page), wildlife[]
                ({ group, note, species[] }), circuits[], tips[].

   itineraries  days, badge, level, title, desc, stops[], bestFor, parkTicket
                costs[]: what the plan costs, worked out from the fees in this
                file. "park" = one day's entry + community fee; "guide:Talatakely"
                (start of a guideFees walk) or "specialist" = a guide fee shared
                by the group; "do:<slug>" = that activity's price per person. A
                "?" in front marks an optional extra.
                Each stop is "When — what"; the text before " — " shows as
                the time on the Itineraries page.
   events       title, whenLabel, dayBadge, monthBadge, recurring, desc, date,
                months[] (1–12: which months it falls in, for When to visit)
   blog         title, excerpt, category, status, img (read time is worked out from the body)
   ============================================================================ */

/* Fallback used when a listing has no photograph of its own yet.
   These are the site's OWN Ranomafana photos, not stock images of
   unrelated places — an honest placeholder rather than a misleading one. */
const PLACEHOLDER_STAY = "images/ranomafana-primary.jpg";
const PLACEHOLDER_NATURE = "images/great-ranomafana-nature-shot.jpg";

/* The team's email address. Every "Email the team" and "Ask the team" link on
   the site points here, so this is the one place to change it. */
const TEAM_EMAIL = "ask@valb.io";

/* The rough euro and dollar guide shown beside Ariary prices ("≈ 11 € · 12 $").
   One dated rate, not a live feed. Update it now and then from xe.com (the
   mid-market rate), with the month in asOf. */
const EXCHANGE = { eur: 5080, usd: 4530, asOf: "2026-10", source: "XE mid-market rate, 23 Oct 2026" };

/* ---------------------------------------------------------------- 1. STAYS */
const stayData = [
  {
    slug: "centre-valbio",
    name: "Centre ValBio",
    type: "eco",
    price: "Contact for research / guest rates",
    toGate: 0.5,
    rating: "4.4 (Tripadvisor, 13 reviews)",
    img: "images/main-view-cvb.jpg",
    wifi: true, hotWater: true, restaurant: true, parking: true,
    verified: true,
    sourceNote: "Property-supplied description; Centre ValBio / Stony Brook University.",
    desc: "Modern research-station lodging beside Ranomafana National Park: 48 dorm beds (quad and six-bed rooms) plus 3 en-suite private rooms, Starlink Wi-Fi, and three-course meals. All visits arranged at least one day in advance.",
    gallery: [
      { src: "images/cvb-aerial-view.jpg", fallback: "images/main-view-cvb.jpg", alt: "Aerial view of Centre ValBio" },
      /* Kyle's photos of 13 Oct 2026; originals in photo-originals/2026-10-13 Centre ValBio/ */
      { src: "images/cvb-campus-aerial.jpg", alt: "The Centre ValBio buildings from the air, beside the road with the forest behind" },
      { src: "images/cvb-terrace-dusk.jpg", alt: "Tables on the terrace outside the conference room at dusk, Centre ValBio" },
      { src: "images/cvb-front-entrance-shot.jpg", alt: "Visitors at the Centre ValBio entrance" },
      { src: "images/cvb-researcher-guide.jpg", fallback: "images/wright-patricia-125.jpg", alt: "Centre ValBio researcher and guide" },
      { src: "images/cvb-community-event.jpg", fallback: "images/independence-day-cvb-team-shot.jpg", alt: "Community event at Centre ValBio" },
      { src: "images/cvb-team-group.jpg", fallback: "images/group-staff-shot.jpg", alt: "Centre ValBio team" },
      { src: "images/cvb-staff-green-shirts.jpg", alt: "Centre ValBio staff in green team shirts beside a Centre ValBio sign" },
      { src: "images/cvb-world-lemur-day.jpg", alt: "World Lemur Day with Centre ValBio: staff and guests with a ruffed lemur mascot" },
      { src: "images/satanic-leaf-gecko.jpg", fallback: PLACEHOLDER_NATURE, alt: "Satanic leaf-tailed gecko near Centre ValBio" }
    ],
    contact: {
      phone: "+261 34 13 581 71",
      email: "ask@valb.io",
      website: "https://www.stonybrook.edu/commcms/centre-valbio/",
      social: "https://www.facebook.com/CentreValBio",
      note: "US office +1 (631) 632-3273. Arrange all tours and stays one day ahead."
    }
  },
  {
    slug: "setam-lodge",
    name: "Setam Lodge",
    type: "eco",
    price: "160,000–200,000 Ar / night",
    toGate: 1,
    rating: "3.6 (Tripadvisor, 294 reviews)",
    img: "images/setam-lodge-aerial-view.jpg",
    wifi: true, hotWater: true, restaurant: true, parking: true,
    wifiNote: "In the restaurant",
    verified: true,
    sourceNote: "Contacts corrected from setam-madagascar.com and FHORM. The previously listed setam-lodge.com and setamlodge@yahoo.fr are not the property's own details. Rates, meals, amenities and the 800 m distance from Kyle's notes ('Website information.docx', received 11 Oct 2026), which confirm the phone and email. 'The closest place to stay' was dropped on 23 Oct 2026: Centre ValBio, beside the gate, is closer (OpenStreetMap).",
    desc: "Twenty bungalows on a ridge an 800 m walk from the park entrance, each looking out over the rainforest canopy, with private hot-water bathrooms and a 70-seat bar and restaurant. The largest and most established lodge in Ranomafana.",
    rooms: [
      { type: "Double", price: "160,000 Ar" },
      { type: "Twin", price: "160,000 Ar" },
      { type: "Triple (1 double + 1 single bed)", price: "180,000 Ar" },
      { type: "Family (1 double + 2 single beds)", price: "200,000 Ar" }
    ],
    meals: ["Breakfast: 25,000 Ar continental, 30,000 Ar American", "Lunch or dinner: 50,000 Ar set price"],
    features: ["An 800 m walk from the park entrance", "Fan or heater in the rooms", "Look for giraffe-necked weevils in the grounds"],
    gallery: [
      { src: "images/setam-lodge-aerial-view.jpg", alt: "Aerial view of Setam Lodge" },
      { src: "images/setam-lodge-entrance-path.jpg", alt: "Entrance path at Setam Lodge" },
      { src: "images/setam-lodge-dining-hall.jpg", alt: "Dining hall at Setam Lodge" },
      { src: "images/setam-lodge-terrace-view.jpg", alt: "Terrace view at Setam Lodge" }
    ],
    contact: {
      phone: "+261 34 07 324 33",
      whatsapp: "+261 34 07 324 33",
      email: "setamlodgeresa@gmail.com",
      website: "https://setam-madagascar.com/en/lodge",
      social: "https://www.facebook.com/setam.lodge/",
      note: "Same number on WhatsApp. Reservations Monday–Friday, 08:00–17:00."
    }
  },
  {
    slug: "foret-australe",
    name: "Forêt Australe",
    type: "eco",
    price: "60,000–80,000 Ar / night",
    toGate: 1.5,
    rating: "3.1 (Tripadvisor, 24 reviews)",
    img: "images/foret-astral-exterior.jpg",
    wifi: true, hotWater: true, restaurant: true, parking: true,
    wifiNote: "In the rooms",
    verified: true,
    asOf: "2026-10",
    sourceNote: "Name corrected from 'Foret Astral' — Tripadvisor and Petit Futé both list it as Forêt Australe, at Ambatolahy. Rates, meals, Wi-Fi and features from Kyle's notes (received 11 Oct 2026), which confirm the phone and email. His notes also give www.groupeaustralhotel.com and www.foretaustral.groupeaustralhotel.com, but neither address resolved when checked on 11 Oct 2026, so no website is linked.",
    desc: "Eco-lodge at Ambatolahy immersed in nature, with rustic bungalows along the Namorona River near Ranomafana National Park, a private walking circuit, and lemurs in the hotel's own trees.",
    rooms: [
      { type: "Double", price: "60,000 Ar" },
      { type: "Family (1 double + 2 single beds)", price: "80,000 Ar" }
    ],
    meals: ["Breakfast: 10,000 Ar", "Lunch or dinner: 20,000–25,000 Ar"],
    features: ["Private walking circuit in the grounds", "Lemurs in the hotel's trees"],
    gallery: [
      { src: "images/foret-astral-exterior.jpg", alt: "Forêt Australe exterior" },
      { src: "images/foret-astral-room.webp", alt: "Room at Forêt Australe" },
      { src: "images/foret-astral-landscaping.jpg", alt: "Landscaping at Forêt Australe" },
      { src: "images/foret-astral-reception.jpg", alt: "Reception at Forêt Australe" }
    ],
    contact: { phone: "+261 34 16 391 74", email: "austhotel@moov.mg", website: "", social: "https://www.facebook.com/p/For%C3%AAt-Australe-61553678471858/" }
  },
  {
    slug: "au-domnatur",
    name: "Au Domnatur",
    type: "eco",
    price: "120,000–210,000 Ar / night",
    toGate: 4,
    rating: "3.3 (Tripadvisor, 77 reviews)",
    img: "images/au-domnatur-exterior.webp",
    wifi: true, hotWater: true, restaurant: true, parking: true,
    wifiNote: "In the restaurant",
    verified: true,
    asOf: "2026-10",
    sourceNote: "Formerly trading as Domaine Nature — the two names are the same property, not separate listings. Rates, meals, amenities, both WhatsApp numbers and the email from Kyle's notes (received 11 Oct 2026); the email is spelled there with a double r ('audomnaturr'). +261 32 42 952 37 was listed before his notes and is kept as a third number. The earlier 'from about €40' rate is replaced.",
    desc: "Quiet nature lodge 2 km above Ranomafana, with comfortable bungalows and rooms amid lush vegetation, canopy views, waterfalls in the grounds, a bar and an on-site restaurant. Previously known as Domaine Nature.",
    rooms: [
      { type: "Single", price: "120,000–140,000 Ar" },
      { type: "Double", price: "160,000–180,000 Ar" },
      { type: "Double suite", price: "180,000–210,000 Ar" },
      { type: "Family (1 double + 1 single bed)", price: "160,000–190,000 Ar" },
      { type: "Family (1 double + 2 single beds)", price: "180,000–210,000 Ar" }
    ],
    meals: ["Breakfast: 20,000 Ar continental, 25,000–30,000 Ar American", "Lunch or dinner: 40,000–50,000 Ar"],
    features: ["Waterfalls in the grounds", "Bar", "A swimming pool is nearly finished"],
    gallery: [
      { src: "images/au-domnatur-exterior.webp", alt: "Au Domnatur exterior" },
      { src: "images/au-domnatur-restaurant.webp", alt: "Restaurant at Au Domnatur" },
      { src: "images/au-domnatur-room.jpg", alt: "Room at Au Domnatur" },
      { src: "images/au-domnatur-view.jpg", alt: "Forest view from Au Domnatur" },
      { src: "images/au-domnatur-view-2.jpg", alt: "Nature view at Au Domnatur" }
    ],
    contact: { phone: "+261 34 41 846 32 / +261 32 03 611 19 / +261 32 42 952 37", whatsapp: "+261 34 41 846 32 / +261 32 03 611 19", email: "audomnaturr@gmail.com", website: "", social: "https://www.facebook.com/p/H%C3%B4tel-Au-Domnatur-Ranomafana-100005913759576/", note: "The first two numbers are on WhatsApp. Also bookable on Hotels.com and Expedia." }
  },
  {
    slug: "hotel-thermal",
    name: "Hotel Thermal",
    type: "hotel",
    price: "270,000–350,000 Ar / night",
    toGate: 6,
    rating: "4.0 (Tripadvisor, 157 reviews)",
    img: "images/hotel-thermal-exterior.jpg",
    wifi: true, hotWater: true, restaurant: true, parking: true,
    wifiNote: "In the rooms",
    verified: true,
    asOf: "2026-10",
    sourceNote: "+261 34 75 512 26 corroborated by FHORM and Madagascar-Tourisme. Kyle's notes (received 11 Oct 2026) give +261 32 12 511 26, so both are listed. His notes spell the email 'thermal@leralais.mg' — taken as a typo for the FHORM-listed thermal@lerelais.mg. Seasonal rates, the three hot-spring tubs, bar, spa, gym, nature walk and river access from his notes.",
    desc: "Three-star hotel beside the thermal springs, run by Association Le Relais Madagascar. Twenty-one air-conditioned rooms (2 single, 7 twin, 12 double) with hot water, satellite TV, Wi-Fi and safes, a 60-seat restaurant terrace, and three private hot-spring tubs of its own, plus a spa, gym and bar.",
    rooms: [
      { type: "Single", price: "270,000 Ar low season · 300,000 Ar high season" },
      { type: "Double or twin", price: "300,000 Ar low season · 350,000 Ar high season" },
      { type: "Extra bed", price: "50,000 Ar" }
    ],
    ratesNote: "High season runs April to November.",
    features: ["Three hot-spring tubs for up to 8 people each, open to non-residents by booking", "Spa with massages, and a gym", "Bar with a wide choice of rhum arrangé", "Nature walk and river access"],
    gallery: [
      { src: "images/hotel-thermal-exterior.jpg", alt: "Hotel Thermal exterior" },
      { src: "images/hotel-thermal-aerial.jpg", alt: "Aerial view of Hotel Thermal and the thermal complex" },
      { src: "images/hotel-thermal-room.jpg", alt: "Bedroom at Hotel Thermal" },
      { src: "images/hotel-thermal-garden.jpg", alt: "Garden at Hotel Thermal" },
      { src: "images/hotel-thermal-landscaping.jpg", alt: "Landscaping at Hotel Thermal" }
    ],
    contact: { phone: "+261 34 75 512 26 / +261 32 12 511 26", email: "thermal@lerelais.mg", website: "https://thermal-ranomafana.mg/en/home/", social: "https://www.facebook.com/thermalranomafana/", note: "63 km from Fianarantsoa." }
  },
  {
    slug: "centrest-sejour",
    name: "Centrest Sejour Hotel",
    type: "hotel",
    price: "165,000–220,000 Ar / night",
    toGate: 5.5,
    rating: "3.5 (Tripadvisor, 212 reviews)",
    img: "images/centrest-sejour-exterior.jpg",
    wifi: true, hotWater: true, restaurant: true, parking: true,
    wifiNote: "In the restaurant",
    verified: true,
    asOf: "2026-10",
    sourceNote: "Rates, meals and facilities from Kyle's notes (received 11 Oct 2026), which confirm +261 34 16 524 33 and the email. His notes say both 'breakfast included' and a 25,000–30,000 Ar breakfast price; read here as breakfast included with the room, priced for non-residents — confirm.",
    desc: "Mid-range hotel at the entrance to Ranomafana village, with spacious rooms, private bungalows, a swimming pool, sports courts and Malagasy and French dining. Registered with the Ministry of Tourism.",
    rooms: [
      { type: "Double", price: "165,000 Ar" },
      { type: "Double bungalow", price: "170,000 Ar" },
      { type: "Triple", price: "190,000 Ar" },
      { type: "Family (1 double + 2 single beds)", price: "220,000 Ar" }
    ],
    ratesNote: "Breakfast is included.",
    meals: ["Breakfast: 25,000–30,000 Ar (continental or American)", "Lunch or dinner: from 40,000 Ar"],
    features: ["Swimming pool and pool area", "Basketball and bocce courts", "Billiards"],
    gallery: [
      { src: "images/centrest-sejour-exterior.jpg", alt: "Centrest Sejour Hotel exterior" },
      { src: "images/centrest-sejour-room.jpg", alt: "Room at Centrest Sejour Hotel" },
      { src: "images/centrest-sejour-lounge.jpg", alt: "Lounge at Centrest Sejour Hotel" },
      { src: "images/centrest-sejour-restaurant.jpg", alt: "Restaurant at Centrest Sejour Hotel" },
      { src: "images/centrest-sejour-landscaping.jpg", alt: "Landscaping at Centrest Sejour Hotel" }
    ],
    contact: { phone: "+261 34 16 524 33 / +261 38 60 594 02", email: "centrestsejour@gmail.com", website: "", social: "https://www.facebook.com/profile.php?id=61579310794179" }
  },
  {
    slug: "cristo-hotel",
    name: "Cristo Hotel",
    type: "hotel",
    price: "Contact property for rates",
    toGate: 12,
    rating: "3.9 (Tripadvisor, 49 reviews)",
    img: "images/cristo-hotel-exterior.jpg",
    wifi: true, hotWater: true, restaurant: true, parking: true,
    verified: true,
    desc: "Mid-range rooms and bungalows in a lush Namorona River landscape 5 km from Ranomafana, with dining, a bar, and kayaking or local excursions on request.",
    gallery: [
      { src: "images/cristo-hotel-exterior.jpg", alt: "Cristo Hotel exterior" },
      { src: "images/cristo-hotel-room.jpg", alt: "Room at Cristo Hotel" },
      { src: "images/cristo-hotel-room-2.jpg", alt: "Second room at Cristo Hotel" },
      { src: "images/cristo-hotel-view.jpg", alt: "View of Cristo Hotel" }
    ],
    contact: { phone: "+261 38 95 657 07", email: "cristomadagascar@gmail.com", website: "", social: "https://www.facebook.com/p/Cristo-HOTEL-Ranomafana-100092747982904/" }
  },
  {
    slug: "grenat-hotel",
    name: "Grenat Hotel",
    type: "hotel",
    price: "80,000–120,000 Ar / night",
    toGate: 6,
    rating: "3.7 (Tripadvisor, 114 reviews)",
    img: "images/grenat-hotel-exterior.webp",
    wifi: true, hotWater: true, restaurant: true, parking: true,
    wifiNote: "In the rooms",
    verified: true,
    asOf: "2026-10",
    sourceNote: "Listed on Tripadvisor and Petit Futé as 'Le Grenat' / 'Hôtel Grenat', on the main road at the village exit. Rates, meals, features, +261 34 12 780 84 and legrenatran@gmail.com from Kyle's notes (received 11 Oct 2026). Previously listed: +261 34 20 622 88 (kept as a second number) and hotelgrenat@gmail.com (replaced by his email) — confirm which still work.",
    desc: "Comfortable mid-range accommodation on the main road at the edge of the village, with river and rainforest views, private en-suite rooms, guarded private parking, and one of the better-reviewed restaurants in Ranomafana.",
    rooms: [
      { type: "Single", price: "80,000 Ar" },
      { type: "Double", price: "80,000 Ar" },
      { type: "Triple", price: "120,000 Ar" },
      { type: "Family (1 double + 3 single beds)", price: "120,000 Ar" }
    ],
    meals: ["Breakfast: from 10,000 Ar", "Lunch or dinner: 15,000–30,000 Ar"],
    features: ["River view", "Private parking, watched from a guard tower"],
    gallery: [
      { src: "images/grenat-hotel-exterior.webp", alt: "Grenat Hotel exterior" },
      { src: "images/grenat-hotel-bungalow.jpg", alt: "Bungalow at Grenat Hotel" },
      { src: "images/grenat-hotel-room.jpg", alt: "Room at Grenat Hotel" },
      { src: "images/grenat-hotel-restaurant.jpg", alt: "Restaurant at Grenat Hotel" },
      { src: "images/grenat-hotel-sign.jpg", alt: "Grenat Hotel sign" }
    ],
    contact: { phone: "+261 34 12 780 84 / +261 34 20 622 88", email: "legrenatran@gmail.com", website: "", social: "https://www.facebook.com/p/Hotel-Grenat-Ranomafana-100063624831201/" }
  },
  {
    slug: "chez-gaspard",
    name: "Chez Gaspard",
    type: "guest",
    price: "70,000–140,000 Ar / night",
    toGate: 6,
    rating: "3.7 (Tripadvisor, 148 reviews)",
    img: "images/chez-gaspard-exterior.jpg",
    wifi: true, hotWater: true, restaurant: true, parking: true,
    wifiNote: "In the restaurant",
    verified: true,
    asOf: "2026-10",
    sourceNote: "Rates, meals, features, hotelchezgaspard@gmail.com and +261 32 01 115 15 from Kyle's notes (received 11 Oct 2026), which confirm the 034 and 033 numbers. Previously listed: +261 38 02 115 02 (kept as a fourth number) and bungalow@hotelchezgaspard.com (replaced by his email).",
    desc: "Budget-friendly guest house and restaurant behind the Catholic church, run by the Priests of the Sacred Heart of Jesus — a long-standing favourite with backpackers and guided tour groups, with a garden gazebo and water feature and a bar showing sport.",
    rooms: [
      { type: "Double", price: "70,000 Ar" },
      { type: "Twin", price: "70,000 Ar" },
      { type: "Family (1 double + 2 single beds)", price: "120,000 Ar" },
      { type: "Family (1 double + 3 single beds)", price: "140,000 Ar" },
      { type: "Extra bed", price: "25,000 Ar" }
    ],
    meals: ["Breakfast: 12,000–15,000 Ar", "Lunch or dinner: 12,000–35,000 Ar à la carte, or a 45,000 Ar set menu"],
    features: ["Gazebo and water feature in the garden", "Bar with sport on TV"],
    gallery: [
      { src: "images/chez-gaspard-exterior.jpg", alt: "Chez Gaspard exterior" },
      { src: "images/chez-gaspard-bungalow.jpg", alt: "Bungalow at Chez Gaspard" },
      { src: "images/chez-gaspard-restaurant.avif", alt: "Restaurant at Chez Gaspard" },
      { src: "images/chez-gaspard-logo.jpg", alt: "Chez Gaspard logo" }
    ],
    contact: { phone: "+261 34 02 115 15 / +261 33 01 155 05 / +261 32 01 115 15 / +261 38 02 115 02", email: "hotelchezgaspard@gmail.com", website: "https://hotelchezgaspard.com/", social: "https://www.facebook.com/chezgaspardhotel/?locale=fr_FR" }
  },
  {
    slug: "karibotel",
    name: "Karibotel",
    type: "hotel",
    price: "143,000–168,000 Ar / night",
    toGate: 4.5,
    rating: "3.2 (Tripadvisor, 57 reviews)",
    img: "images/placeholder-karibotel.jpg",
    wifi: true, hotWater: true, restaurant: true, parking: true,
    wifiNote: "In the rooms",
    verified: true,
    photoNeeded: true,
    sourceNote: "Contacts corrected via FHORM. The previously listed +261 34 05 601 20 and karibotel.ranomafana@gmail.com were not the property's details. Room rates, pool, Wi-Fi and meal prices from Kyle's notes (received 11 Oct 2026, where it is called 'Karibou Hotel'), which confirm the phone. They replace the earlier 16,000 Ar à la carte / 30,000 Ar set-menu figures. His notes also say 'breakfast included' alongside a breakfast price — confirm. The website karibotel.com no longer exists (checked 22 Oct 2026: no such domain), so its link was removed.",
    gallery: [
      { src: "images/karibotel-exterior.jpg", fallback: "images/placeholder-karibotel.jpg", alt: "Karibotel exterior" },
      { src: "images/karibotel-room.jpg", fallback: "images/placeholder-karibotel.jpg", alt: "Room at Karibotel" },
      { src: "images/karibotel-restaurant.jpg", fallback: "images/placeholder-karibotel.jpg", alt: "Restaurant or common area at Karibotel" },
      { src: "images/karibotel-view.jpg", fallback: "images/placeholder-karibotel.jpg", alt: "View from Karibotel" }
    ],
    desc: "Hotel and restaurant at Tsararano, just before the village, on the hillside above the river, with a swimming pool. Doubles 143,000 Ar and family rooms 168,000 Ar, breakfast included.",
    rooms: [
      { type: "Double", price: "143,000 Ar" },
      { type: "Family (1 double + 1 single bed)", price: "168,000 Ar" }
    ],
    ratesNote: "Breakfast is included.",
    meals: ["Breakfast: from 8,000 Ar", "Lunch or dinner: from 45,000 Ar"],
    features: ["Swimming pool and pool area"],
    contact: { phone: "+261 33 15 629 50", email: "resa.karibotelranomafana@gmail.com", website: "", social: "https://www.facebook.com/karibotelranomafana/", note: "Tsararano, Ranomafana — just before the village on the RN25." }
  },
  {
    slug: "kambana-residence",
    name: "Kambana Résidence",
    type: "guest",
    price: "From about 105,000 Ar (€21) / night",
    toGate: 4.5,
    rating: "—",
    img: "images/placeholder-kambana-residence.jpg",
    wifi: false, hotWater: true, restaurant: true, parking: true,
    verified: true,
    photoNeeded: true,
    sourceNote: "Contacts corrected via the property's own site and Aty Aminay. The previously listed +261 34 04 882 11 and kambana.residence@gmail.com were not the property's details. '8 km from the park' was dropped on 23 Oct 2026: Tsararano is about 4.5 km from the gate by road (OpenStreetMap routing). The Ariary price is the property's €21 at the XE rate of 23 Oct 2026, rounded.",
    gallery: [
      { src: "images/kambana-residence-exterior.jpg", fallback: "images/placeholder-kambana-residence.jpg", alt: "Kambana Résidence exterior" },
      { src: "images/kambana-residence-room.jpg", fallback: "images/placeholder-kambana-residence.jpg", alt: "Room at Kambana Résidence" },
      { src: "images/kambana-residence-restaurant.jpg", fallback: "images/placeholder-kambana-residence.jpg", alt: "Restaurant or common area at Kambana Résidence" },
      { src: "images/kambana-residence-view.jpg", fallback: "images/placeholder-kambana-residence.jpg", alt: "View from Kambana Résidence" }
    ],
    desc: "Self-catering apartments at Tsararano, 2 km from the village, overlooking the rocky Namorona gorge. Three units (Laguna, Tequila, Vinho) or the whole apartment for up to 15. Solar electricity, hot water, 24-hour reception; meals with two hours' notice.",
    contact: { phone: "+261 34 95 932 86", whatsapp: "+261 34 36 588 09", email: "navalona40@gmail.com", website: "https://www.kambanaresidence.com/", social: "https://www.facebook.com/profile.php?id=100064152995497", note: "WhatsApp +261 34 36 588 09. Staff arrange transport and park entry reservations." }
  },
  {
    slug: "soa-lodge",
    name: "Soa Lodge",
    type: "guest",
    price: "100,000–180,000 Ar / night",
    rating: "4.1 (Tripadvisor, 23 reviews)",
    img: "images/placeholder-soa-lodge.jpg",
    wifi: true, hotWater: true, restaurant: true, parking: true,
    wifiNote: "Available, but poor",
    verified: true,
    photoNeeded: true,
    sourceNote: "Listed on Tripadvisor as 'Soa Lodge', not 'Soa Guest Lodge'. Contacts corrected — the previously listed +261 34 50 112 40 and soaguestlodge@gmail.com were not the property's details. Rates, meals-to-order and the Antsirabe sister hotel from Kyle's notes (received 11 Oct 2026, where it is called 'Soa Guest'), which confirm both phone numbers.",
    gallery: [
      { src: "images/soa-lodge-exterior.jpg", fallback: "images/placeholder-soa-lodge.jpg", alt: "Soa Lodge exterior" },
      { src: "images/soa-lodge-room.jpg", fallback: "images/placeholder-soa-lodge.jpg", alt: "Room at Soa Lodge" },
      { src: "images/soa-lodge-restaurant.jpg", fallback: "images/placeholder-soa-lodge.jpg", alt: "Restaurant or common area at Soa Lodge" },
      { src: "images/soa-lodge-view.jpg", fallback: "images/placeholder-soa-lodge.jpg", alt: "View from Soa Lodge" }
    ],
    desc: "A small family-run lodge with three hand-painted bungalows on a hillside, panoramic views, a restaurant and bar, laundry, and packed lunches for park days. Expect a lot of steps.",
    rooms: [
      { type: "Double", price: "100,000 Ar" },
      { type: "Triple", price: "130,000 Ar" },
      { type: "Triple with loft bed", price: "160,000 Ar" },
      { type: "Family with loft bed (1 double + 3 single beds)", price: "180,000 Ar" }
    ],
    meals: ["Meals are cooked to order — ask ahead", "Breakfast: 15,000 Ar continental, 20,000 Ar American", "Lunch or dinner: 25,000–40,000 Ar"],
    features: ["Sister hotel in Antsirabe"],
    contact: { phone: "+261 33 15 279 90 / +261 32 02 279 90", email: "soa_guesthouse@outlook.com", website: "", social: "", note: "Wi-Fi can be intermittent." }
  },
  {
    slug: "minerva-apart",
    name: "Minerva Apart",
    type: "guest",
    price: "About 160,000 Ar ($35) / night",
    toGate: 5.5,
    rating: "9.0/10 (Booking.com, 36 reviews)",
    img: "images/placeholder-minerva-apart.jpg",
    wifi: true, hotWater: true, restaurant: false, parking: false,
    verified: true,
    photoNeeded: true,
    sourceNote: "Confirmed to exist — trades as 'Minerva Apart', formerly Chez Minerva. On the RN25 opposite Hôtel Centrest. The Ariary price is Booking.com's $35 at the XE rate of 23 Oct 2026, rounded.",
    gallery: [
      { src: "images/minerva-apart-exterior.jpg", fallback: "images/placeholder-minerva-apart.jpg", alt: "Minerva Apart exterior" },
      { src: "images/minerva-apart-room.jpg", fallback: "images/placeholder-minerva-apart.jpg", alt: "Room at Minerva Apart" },
      { src: "images/minerva-apart-restaurant.jpg", fallback: "images/placeholder-minerva-apart.jpg", alt: "Restaurant or common area at Minerva Apart" },
      { src: "images/minerva-apart-view.jpg", fallback: "images/placeholder-minerva-apart.jpg", alt: "View from Minerva Apart" }
    ],
    desc: "Spacious 50 m² self-catering apartments on the RN25 opposite Centrest, with private entrances, balconies, kitchenettes and garden or mountain views. The owner, Jeannot, arranges guides and park transport. Cash only.",
    contact: { phone: "", email: "", website: "", social: "", note: "Book via Booking.com. Check-in 13:00, check-out 11:00. Cash payment only; pets by prior arrangement." }
  },
  {
    slug: "la-palmeraie",
    name: "La Palmeraie",
    type: "guest",
    price: "Double 20,000 Ar · triple 30,000 Ar · family 40,000 Ar",
    toGate: 5.5,
    rating: "3.5 (Petit Futé)",
    img: "images/placeholder-la-palmeraie.jpg",
    wifi: false, hotWater: true, restaurant: false, parking: false,
    verified: true,
    photoNeeded: true,
    sourceNote: "Listed on Petit Futé as 'La Palmeraie', in the village centre behind the market. Kyle's folder recorded it as 'Hotel Palmarie' with a Namorona riverside description and a +261 34 08 341 55 phone — neither matches; treat the earlier entry as unreliable. Kyle's notes of 11 Oct 2026 list 'La Palmeraie' among the village hotelies (20,000–50,000 Ar, shared bathrooms, no Wi-Fi), which matches Petit Futé.",
    gallery: [
      { src: "images/la-palmeraie-exterior.jpg", fallback: "images/placeholder-la-palmeraie.jpg", alt: "La Palmeraie exterior" },
      { src: "images/la-palmeraie-room.jpg", fallback: "images/placeholder-la-palmeraie.jpg", alt: "Room at La Palmeraie" },
      { src: "images/la-palmeraie-restaurant.jpg", fallback: "images/placeholder-la-palmeraie.jpg", alt: "Restaurant or common area at La Palmeraie" },
      { src: "images/la-palmeraie-view.jpg", fallback: "images/placeholder-la-palmeraie.jpg", alt: "View from La Palmeraie" }
    ],
    desc: "Six budget rooms with shared toilets in the middle of the village, behind the market. Mosquito nets, outdoor hot showers, European-style toilets and a night watchman. A restaurant sits across the street.",
    contact: { phone: "+261 34 52 251 84", email: "", website: "", social: "", note: "Au centre du village, derrière le marché." }
  },
  {
    slug: "manja-hotel",
    name: "Manja Hotel",
    type: "hotel",
    price: "70,000–90,000 Ar / night",
    toGate: 6.5,
    rating: "3.2 (Tripadvisor, 114 reviews)",
    img: "images/placeholder-manja-hotel.jpg",
    wifi: true, hotWater: true, restaurant: true, parking: true,
    wifiNote: "In the restaurant",
    verified: true,
    asOf: "2026-10",
    photoNeeded: true,
    sourceNote: "Website manjahotel.com confirmed earlier. Rates, meals, the three phone numbers and hotelmanja@gmail.com from Kyle's notes (received 11 Oct 2026); they replace the 58,000–67,000 Ar Wikivoyage range. His notes mark the phones '(Check all)' and give www.hotelmanja.mg as the website, but that address did not resolve when checked on 11 Oct 2026, so manjahotel.com stays. '4 km from the park' was dropped on 23 Oct 2026: by road it is about 6.5 km (OpenStreetMap routing).",
    gallery: [
      { src: "images/manja-hotel-exterior.jpg", fallback: "images/placeholder-manja-hotel.jpg", alt: "Manja Hotel exterior" },
      { src: "images/manja-hotel-room.jpg", fallback: "images/placeholder-manja-hotel.jpg", alt: "Room at Manja Hotel" },
      { src: "images/manja-hotel-restaurant.jpg", fallback: "images/placeholder-manja-hotel.jpg", alt: "Restaurant or common area at Manja Hotel" },
      { src: "images/manja-hotel-view.jpg", fallback: "images/placeholder-manja-hotel.jpg", alt: "View from Manja Hotel" }
    ],
    desc: "Hillside bungalows overlooking the village, with a bar and one of Ranomafana's busiest restaurants. Rooms are dated but clean — hot water, mosquito net, fan. A steep climb to the rooms, with porter help available.",
    rooms: [
      { type: "Double", price: "70,000–80,000 Ar" },
      { type: "Twin", price: "70,000–80,000 Ar" },
      { type: "Triple", price: "80,000–90,000 Ar" }
    ],
    meals: ["Breakfast: from 8,000 Ar", "Lunch or dinner: 12,000–25,000 Ar", "The voanjobory (Bambara groundnut stew) is exceptional"],
    contact: { phone: "+261 33 09 010 22 / +261 34 13 176 22 / +261 32 07 540 03", email: "hotelmanja@gmail.com", website: "https://manjahotel.com/", social: "", note: "If one number doesn't answer, try the others." }
  },
  {
    slug: "ihary-hotel",
    name: "Ihary Hotel",
    type: "hotel",
    price: "70,000–120,000 Ar / night",
    toGate: 6,
    rating: "3.0 (Tripadvisor, 47 reviews)",
    img: "images/placeholder-ihary-hotel.jpg",
    wifi: true, hotWater: true, restaurant: true, parking: true,
    wifiNote: "In the restaurant",
    verified: true,
    asOf: "2026-10",
    photoNeeded: true,
    sourceNote: "Landline +261 20 76 296 96 via Gondwana Explorer; Facebook page confirmed. Rates, meals, three mobile numbers, iharyhotel@gmail.com, hot water, Wi-Fi in the restaurant and river access from Kyle's notes (received 11 Oct 2026). Older reviews reported cold showers; his notes say hot water, so it is now marked available. His notes do not mention the swimming pool earlier sources describe — confirm it is still there.",
    gallery: [
      { src: "images/ihary-hotel-exterior.jpg", fallback: "images/placeholder-ihary-hotel.jpg", alt: "Ihary Hotel exterior" },
      { src: "images/ihary-hotel-room.jpg", fallback: "images/placeholder-ihary-hotel.jpg", alt: "Room at Ihary Hotel" },
      { src: "images/ihary-hotel-restaurant.jpg", fallback: "images/placeholder-ihary-hotel.jpg", alt: "Restaurant or common area at Ihary Hotel" },
      { src: "images/ihary-hotel-view.jpg", fallback: "images/placeholder-ihary-hotel.jpg", alt: "View from Ihary Hotel" }
    ],
    desc: "Twenty-two rooms on the bank of the Namorona, a few kilometres from the park entrance, with river access, a swimming pool and a riverside restaurant. Basic and ageing, with mosquito nets in the bungalows, but the river-facing rooms have the best view in the village.",
    rooms: [
      { type: "Double", price: "70,000–120,000 Ar" },
      { type: "Family (1 double + 2 single beds)", price: "120,000 Ar" }
    ],
    meals: ["Breakfast, lunch or dinner: 10,000–30,000 Ar"],
    features: ["River access"],
    contact: { phone: "+261 34 13 434 57 / +261 33 12 857 98 / +261 32 02 526 98 / +261 20 76 296 96", email: "iharyhotel@gmail.com", website: "", social: "https://www.facebook.com/iharyhotel/", note: "16 Poste, Ranomafana 312. Free accommodation for drivers; packed lunches for park visitors." }
  },
  {
    slug: "ny-tanana-hotel",
    name: "Ny Tanàna Hotel",
    type: "hotel",
    price: "Budget — contact for rates",
    toGate: 8.5,
    rating: "3.8 (Tripadvisor, 13 reviews)",
    img: "images/placeholder-ny-tanana-hotel.jpg",
    wifi: false, hotWater: true, restaurant: true, parking: false,
    verified: true,
    photoNeeded: true,
    sourceNote: "Own website and Facebook page confirmed; listed with FHORM at Ankevoevo. The +261 34 62 109 88 number in Kyle's folder is unconfirmed.",
    gallery: [
      { src: "images/ny-tanana-hotel-exterior.jpg", fallback: "images/placeholder-ny-tanana-hotel.jpg", alt: "Ny Tanàna Hotel exterior" },
      { src: "images/ny-tanana-hotel-room.jpg", fallback: "images/placeholder-ny-tanana-hotel.jpg", alt: "Room at Ny Tanàna Hotel" },
      { src: "images/ny-tanana-hotel-restaurant.jpg", fallback: "images/placeholder-ny-tanana-hotel.jpg", alt: "Restaurant or common area at Ny Tanàna Hotel" },
      { src: "images/ny-tanana-hotel-view.jpg", fallback: "images/placeholder-ny-tanana-hotel.jpg", alt: "View from Ny Tanàna Hotel" }
    ],
    desc: "Small hotel and restaurant at Ankevoevo offering authentic Malagasy hospitality, budget rooms and simple home-style meals.",
    contact: { phone: "", email: "", website: "https://nytanana-hotel-ranomafana.mg/", social: "https://www.facebook.com/Ny.Tanana.Hotel/", note: "Ankevoevo, Ranomafana." }
  },
  {
    slug: "lemur-coffee-hotel",
    name: "Lemur Coffee Hotel",
    type: "hotel",
    price: "Contact property for rates",
    toGate: 7,
    rating: "—",
    img: "images/placeholder-lemur-coffee-hotel.jpg",
    wifi: true, hotWater: true, restaurant: true, parking: true,
    verified: true,
    photoNeeded: true,
    sourceNote: "Own website and Facebook page confirmed. The +261 34 94 302 10 phone and lemurcoffeehotel@gmail.com address in Kyle's folder are unconfirmed and have been left out.",
    gallery: [
      { src: "images/lemur-coffee-hotel-exterior.jpg", fallback: "images/placeholder-lemur-coffee-hotel.jpg", alt: "Lemur Coffee Hotel exterior" },
      { src: "images/lemur-coffee-hotel-room.jpg", fallback: "images/placeholder-lemur-coffee-hotel.jpg", alt: "Room at Lemur Coffee Hotel" },
      { src: "images/lemur-coffee-hotel-restaurant.jpg", fallback: "images/placeholder-lemur-coffee-hotel.jpg", alt: "Restaurant or common area at Lemur Coffee Hotel" },
      { src: "images/lemur-coffee-hotel-view.jpg", fallback: "images/placeholder-lemur-coffee-hotel.jpg", alt: "View from Lemur Coffee Hotel" }
    ],
    desc: "A hybrid address combining accommodation, a specialty coffee house and a meeting space — the newest opening in Ranomafana, aimed at travellers who want a proper coffee and somewhere to sit and work.",
    contact: { phone: "", email: "", website: "http://lemurcoffeehotel.com/", social: "https://www.facebook.com/p/Lemur-Coffee-Hotel-61584568870374/" }
  },
  {
    slug: "chez-jose",
    name: "Chez Jose",
    type: "guest",
    price: "45,000–60,000 Ar / night",
    toGate: 6,
    rating: "—",
    img: "images/chez-jose-exterior.avif",
    wifi: true, hotWater: true, restaurant: false, parking: true,
    wifiNote: "In some rooms",
    verified: true,
    asOf: "2026-10",
    sourceNote: "Rates, Wi-Fi, bar, coffee, the conference room and 'no dining' from Kyle's notes (received 11 Oct 2026), which confirm the phone and email; the restaurant flag is now off. His notes describe it as strongly Catholic — it is run by ECAR, the Catholic Church in Madagascar.",
    desc: "Centrally located, low-cost Catholic guest house in Ranomafana village — simple overnight lodging within walking distance of the thermal baths, with a bar and coffee but no meals.",
    rooms: [
      { type: "Double", price: "60,000 Ar" },
      { type: "Twin", price: "60,000 Ar" },
      { type: "Twin with shared bathroom", price: "45,000 Ar" }
    ],
    meals: ["No meals served — coffee and the bar only"],
    features: ["Run by the Catholic Church (ECAR)", "Conference room for 18, 70,000 Ar per day"],
    gallery: [
      { src: "images/chez-jose-exterior.avif", alt: "Chez Jose exterior" },
      { src: "images/chez-jose-room.avif", alt: "Room at Chez Jose" },
      { src: "images/chez-jose-reception.avif", alt: "Reception at Chez Jose" },
      { src: "images/chez-jose-exterior-2.avif", alt: "Second exterior view of Chez Jose" }
    ],
    contact: { phone: "+261 34 64 950 73", email: "ecar.chezjose@gmail.com", website: "https://ecarchezjose.wixsite.com/ecar/chez-jos%C3%A9-ranomafana", social: "" }
  },
  {
    slug: "coin-dor",
    name: "Coin d’or",
    type: "guest",
    price: "About 20,000–50,000 Ar / night",
    toGate: 5.5,
    rating: "—",
    img: "images/placeholder-coin-dor.jpg",
    wifi: false, hotWater: true, restaurant: true, parking: false,
    verified: true,
    photoNeeded: true,
    sourceNote: "Local listing from Kyle's own records — not present on Tripadvisor or Petit Futé. His notes of 11 Oct 2026 list it among the village 'hotelies' (hostels): 20,000–50,000 Ar, hot water, shared bathrooms, no Wi-Fi, meals only at the hotely downstairs. The price is the range he gave for all four.",
    gallery: [
      { src: "images/coin-dor-exterior.jpg", fallback: "images/placeholder-coin-dor.jpg", alt: "Coin d’or exterior" },
      { src: "images/coin-dor-room.jpg", fallback: "images/placeholder-coin-dor.jpg", alt: "Room at Coin d’or" },
      { src: "images/coin-dor-restaurant.jpg", fallback: "images/placeholder-coin-dor.jpg", alt: "Restaurant or common area at Coin d’or" },
      { src: "images/coin-dor-view.jpg", fallback: "images/placeholder-coin-dor.jpg", alt: "View from Coin d’or" }
    ],
    desc: "Small, charming, centrally located hotely — a village hostel with shared bathrooms and hot water — above its own restaurant, with karaoke and hearty local food.",
    features: ["Shared bathrooms", "No Wi-Fi", "Meals at the hotely (local restaurant) downstairs"],
    contact: { phone: "+261 34 31 318 09", email: "satsecretaire1@gmail.com", website: "", social: "" }
  },
  {
    slug: "akamasoa-guest-house",
    name: "Akamasoa Guest House",
    type: "guest",
    price: "Budget — contact for rates",
    toGate: 7,
    rating: "—",
    img: "images/placeholder-akamasoa-guest-house.jpg",
    wifi: false, hotWater: true, restaurant: false, parking: true,
    verified: true,
    photoNeeded: true,
    sourceNote: "Local listing from Kyle's own records — not present on Tripadvisor or Petit Futé. Map pin from the 'Akamasoa' bed and breakfast on Google Maps (checked 23 Oct 2026): a Google search for the listing's full name landed on Soa Lodge.",
    mapPin: "-21.2632,47.4646",   // Google Maps "Akamasoa"; the name search finds Soa Lodge
    gallery: [
      { src: "images/akamasoa-guest-house-exterior.jpg", fallback: "images/placeholder-akamasoa-guest-house.jpg", alt: "Akamasoa Guest House exterior" },
      { src: "images/akamasoa-guest-house-room.jpg", fallback: "images/placeholder-akamasoa-guest-house.jpg", alt: "Room at Akamasoa Guest House" },
      { src: "images/akamasoa-guest-house-restaurant.jpg", fallback: "images/placeholder-akamasoa-guest-house.jpg", alt: "Restaurant or common area at Akamasoa Guest House" },
      { src: "images/akamasoa-guest-house-view.jpg", fallback: "images/placeholder-akamasoa-guest-house.jpg", alt: "View from Akamasoa Guest House" }
    ],
    desc: "Simple, community-focused dormitory accommodation for park visitors, with basic clean rooms, local hospitality, and kitchen facilities.",
    contact: { phone: "", email: "", website: "", social: "" }
  },
  {
    slug: "chez-liantsoa",
    name: "Chez Liantsoa",
    type: "guest",
    price: "Budget — contact for rates",
    toGate: 5.5,
    rating: "—",
    img: "images/placeholder-chez-liantsoa.jpg",
    wifi: true, hotWater: false, restaurant: false, parking: false,
    verified: true,
    photoNeeded: true,
    sourceNote: "Local listing from Kyle's own records — not present on Tripadvisor or Petit Futé.",
    gallery: [
      { src: "images/chez-liantsoa-exterior.jpg", fallback: "images/placeholder-chez-liantsoa.jpg", alt: "Chez Liantsoa exterior" },
      { src: "images/chez-liantsoa-room.jpg", fallback: "images/placeholder-chez-liantsoa.jpg", alt: "Room at Chez Liantsoa" },
      { src: "images/chez-liantsoa-restaurant.jpg", fallback: "images/placeholder-chez-liantsoa.jpg", alt: "Restaurant or common area at Chez Liantsoa" },
      { src: "images/chez-liantsoa-view.jpg", fallback: "images/placeholder-chez-liantsoa.jpg", alt: "View from Chez Liantsoa" }
    ],
    desc: "Cosy, budget-friendly inn with clean rooms and warm local hospitality, close to the village centre and to guides and transport.",
    contact: { phone: "+261 34 89 594 20", email: "", website: "", social: "" }
  },
  {
    slug: "mirary-hotel",
    name: "Mirary Hotel",
    type: "hotel",
    price: "50,000–80,000 Ar / night",
    toGate: 6,
    rating: "—",
    img: "images/placeholder-mirary-hotel.jpg",
    wifi: true, hotWater: true, restaurant: true, parking: true,
    wifiNote: "In the rooms",
    verified: true,
    asOf: "2026-10",
    photoNeeded: true,
    sourceNote: "Facebook page confirmed to exist. Rates, Wi-Fi, river access, the hotely-style restaurant and +261 34 38 530 71 from Kyle's notes (received 11 Oct 2026), so it is now marked verified on his authority. The older +261 34 19 554 02 and miraryhotel@gmail.com from his folder remain unconfirmed and are left out.",
    gallery: [
      { src: "images/mirary-hotel-exterior.jpg", fallback: "images/placeholder-mirary-hotel.jpg", alt: "Mirary Hotel exterior" },
      { src: "images/mirary-hotel-room.jpg", fallback: "images/placeholder-mirary-hotel.jpg", alt: "Room at Mirary Hotel" },
      { src: "images/mirary-hotel-restaurant.jpg", fallback: "images/placeholder-mirary-hotel.jpg", alt: "Restaurant or common area at Mirary Hotel" },
      { src: "images/mirary-hotel-view.jpg", fallback: "images/placeholder-mirary-hotel.jpg", alt: "View from Mirary Hotel" }
    ],
    desc: "Peaceful hotel with standalone garden bungalows and double rooms, private bathrooms, river access, a hotely-style restaurant, and easy access to local trekking start points.",
    rooms: [
      { type: "Double", price: "50,000 Ar" },
      { type: "Triple (1 double + 1 single bed)", price: "80,000 Ar" }
    ],
    meals: ["Hotely-style restaurant: simple Malagasy plates"],
    features: ["River access"],
    contact: { phone: "+261 34 38 530 71", email: "", website: "", social: "https://www.facebook.com/MiraryHotel/" }
  },
  {
    slug: "chez-rose",
    name: "Chez Rose",
    type: "guest",
    price: "About 20,000–50,000 Ar / night",
    toGate: 6,
    rating: "—",
    img: "images/placeholder-chez-rose.jpg",
    wifi: false, hotWater: true, restaurant: false, parking: false,
    verified: true,
    asOf: "2026-10",
    photoNeeded: true,
    sourceNote: "Local listing from Kyle's notes (received 11 Oct 2026), one of four village 'hotelies' (hostels) with Hotel In-Kavana, Coin d'or and La Palmeraie. Price, hot water, shared bathrooms, no Wi-Fi and no meals are what he gave for all four. No contact details yet. Map pin from 'Chez Rose' on OpenStreetMap, in the village centre (checked 23 Oct 2026): a Google search for the name landed on Chez Jose.",
    mapPin: "-21.2605,47.4552",   // OpenStreetMap "Chez Rose"; the name search finds Chez Jose
    gallery: [
      { src: "images/chez-rose-exterior.jpg", fallback: "images/placeholder-chez-rose.jpg", alt: "Chez Rose exterior" },
      { src: "images/chez-rose-room.jpg", fallback: "images/placeholder-chez-rose.jpg", alt: "Room at Chez Rose" },
      { src: "images/chez-rose-restaurant.jpg", fallback: "images/placeholder-chez-rose.jpg", alt: "Restaurant or common area at Chez Rose" },
      { src: "images/chez-rose-view.jpg", fallback: "images/placeholder-chez-rose.jpg", alt: "View from Chez Rose" }
    ],
    desc: "A village hotely — the local word for a simple hostel — with basic rooms, hot water and shared bathrooms. No Wi-Fi, and no meals unless there is a hotely restaurant downstairs.",
    features: ["Shared bathrooms", "No Wi-Fi"],
    contact: { phone: "", email: "", website: "", social: "" }
  },
  {
    slug: "hotel-in-kavana",
    name: "Hotel In-Kavana",
    type: "guest",
    price: "About 20,000–50,000 Ar / night",
    toGate: 6,
    rating: "—",
    img: "images/placeholder-hotel-in-kavana.jpg",
    wifi: false, hotWater: true, restaurant: false, parking: false,
    verified: true,
    asOf: "2026-10",
    photoNeeded: true,
    sourceNote: "Local listing from Kyle's notes (received 11 Oct 2026), one of four village 'hotelies' (hostels) with Chez Rose, Coin d'or and La Palmeraie. Price, hot water, shared bathrooms, no Wi-Fi and no meals are what he gave for all four. No contact details yet. Map pin from 'Hotel Kavana' on OpenStreetMap, in the village centre, taken to be this hotely (checked 23 Oct 2026): a Google search for the name landed on Kambana Résidence.",
    mapPin: "-21.2604,47.4549",   // OpenStreetMap "Hotel Kavana"; the name search finds Kambana
    gallery: [
      { src: "images/hotel-in-kavana-exterior.jpg", fallback: "images/placeholder-hotel-in-kavana.jpg", alt: "Hotel In-Kavana exterior" },
      { src: "images/hotel-in-kavana-room.jpg", fallback: "images/placeholder-hotel-in-kavana.jpg", alt: "Room at Hotel In-Kavana" },
      { src: "images/hotel-in-kavana-restaurant.jpg", fallback: "images/placeholder-hotel-in-kavana.jpg", alt: "Restaurant or common area at Hotel In-Kavana" },
      { src: "images/hotel-in-kavana-view.jpg", fallback: "images/placeholder-hotel-in-kavana.jpg", alt: "View from Hotel In-Kavana" }
    ],
    desc: "A village hotely — the local word for a simple hostel — with basic rooms, hot water and shared bathrooms. No Wi-Fi, and no meals unless there is a hotely restaurant downstairs.",
    features: ["Shared bathrooms", "No Wi-Fi"],
    contact: { phone: "", email: "", website: "", social: "" }
  }
];

/* ------------------------------------------------------- 2. PLACES TO EAT */
const eatData = [
  {
    slug: "varibolo-resto",
    name: "Varibolo Resto",
    type: "malagasy",
    rating: "5.0 (Tripadvisor, 8 reviews)",
    price: "$$",
    img: "images/varibolo-resto-exterior.jpg",
    verified: true,
    asOf: "2026-10",
    photoNeeded: false,
    gallery: [
      { src: "images/varibolo-resto-exterior.jpg", alt: "Varibolo's green-painted restaurant and kayak shop, with its Kayak Ranomafana banner" },
      { src: "images/varibolo-resto-dining.jpg", alt: "The covered dining terrace at Varibolo Resto, with red-checked tablecloths and a view over banana plants to the forest" },
      { src: "images/varibolo-resto-dish.jpg", fallback: "images/placeholder-varibolo-resto.jpg", alt: "A dish at Varibolo Resto" }
    ],
    sourceNote: "Kayak trips are self-guided, per Kyle's notes (received 11 Oct 2026), which also give info@varibolo.com and the US number. The earlier 'guided descents' wording is corrected. Frontage and terrace photos from Kyle, received 19 Oct 2026; he confirmed the terrace is Varibolo Resto's, and that Varibolo Resto is not the Park Entrance Restaurant. The banner in the frontage photo ('Varibolo Resto — Kayak Ranomafana') gives the second number, 034 37 737 13, and variboloresto72@gmail.com. On 22 Oct 2026 the domain varibolo.com no longer existed, so info@varibolo.com (from Kyle's notes) cannot receive mail: the banner's Gmail address replaced it and the website link was removed. Map pin from 'Varibolo Resto' on OpenStreetMap, by the park entrance next to Gîte Le Rianala (checked 23 Oct 2026): a Google search for the name scattered ten pins across the valley.",
    mapPin: "-21.2559,47.4218",   // OpenStreetMap "Varibolo Resto", by the park entrance
    desc: "Riverside restaurant beside the Namorona serving Malagasy and American dishes for breakfast, lunch and dinner — run by Varibolo, Ranomafana's kayak operator, which rents kayaks for self-guided trips down the river.",
    highlights: ["Malagasy and American menu", "Breakfast, lunch and dinner", "Kayak trips arranged by the same team"],
    contact: { phone: "+261 34 90 823 03 / +261 34 37 737 13", email: "variboloresto72@gmail.com", website: "", social: "", note: "Staff speak English, French and Malagasy. US number: +1 516 479 1889." }
  },
  {
    slug: "chez-gaspard-restaurant",
    name: "Chez Gaspard Restaurant",
    type: "french",
    rating: "3.7 (Tripadvisor, 148 reviews)",
    price: "$$",
    img: "images/chez-gaspard-restaurant.avif",
    verified: true,
    desc: "The dining room at Chez Gaspard, behind the Catholic church and run by the Priests of the Sacred Heart — the village's best-known sit-down meal and a standard stop for guided groups, with a bar showing sport.",
    highlights: ["Set three-course dinners", "Zebu dishes", "Vegetarian on request"],
    meals: ["Breakfast: 12,000–15,000 Ar", "Lunch or dinner: 12,000–35,000 Ar à la carte", "Set menu: 45,000 Ar"],
    contact: { phone: "+261 34 02 115 15", email: "hotelchezgaspard@gmail.com", website: "https://hotelchezgaspard.com/", social: "https://www.facebook.com/chezgaspardhotel/?locale=fr_FR" }
  },
  {
    slug: "grenat-hotel-dining",
    name: "Grenat Hotel Restaurant",
    type: "malagasy",
    rating: "4.0 (Tripadvisor, 21 reviews)",
    price: "$$–$$$",
    img: "images/grenat-hotel-restaurant.jpg",
    verified: true,
    desc: "Hotel restaurant with rainforest views on the main road at the village exit, serving traditional rice dishes alongside French-influenced plates.",
    highlights: ["Zebu steak", "Rice and laoka", "Terrace seating"],
    meals: ["Breakfast: from 10,000 Ar", "Lunch or dinner: 15,000–30,000 Ar"],
    contact: { phone: "+261 34 12 780 84 / +261 34 20 622 88", email: "legrenatran@gmail.com", website: "", social: "https://www.facebook.com/p/Hotel-Grenat-Ranomafana-100063624831201/" }
  },
  {
    slug: "manja-restaurant",
    name: "Hotel Manja Restaurant",
    type: "malagasy",
    rating: "3.5 (Tripadvisor, 63 reviews)",
    price: "$",
    img: "images/placeholder-manja-restaurant.jpg",
    verified: true,
    photoNeeded: true,
    gallery: [
      { src: "images/manja-restaurant-exterior.jpg", fallback: "images/placeholder-manja-restaurant.jpg", alt: "Hotel Manja Restaurant frontage" },
      { src: "images/manja-restaurant-dining.jpg", fallback: "images/placeholder-manja-restaurant.jpg", alt: "Dining room at Hotel Manja Restaurant" },
      { src: "images/manja-restaurant-dish.jpg", fallback: "images/placeholder-manja-restaurant.jpg", alt: "A dish at Hotel Manja Restaurant" }
    ],
    desc: "Busy, inexpensive hillside restaurant and a reliable budget option, with an exceptional voanjobory. Wi-Fi reaches the restaurant, which is more than can be said for the rooms.",
    highlights: ["Voanjobory (Bambara groundnut stew)", "Malagasy set plates", "Wi-Fi in the dining room"],
    meals: ["Breakfast: from 8,000 Ar", "Lunch or dinner: 12,000–25,000 Ar"],
    contact: { phone: "+261 33 09 010 22 / +261 34 13 176 22 / +261 32 07 540 03", email: "hotelmanja@gmail.com", website: "https://manjahotel.com/", social: "" }
  },
  {
    slug: "hotel-thermal-restaurant",
    name: "Restaurant de l’Hôtel des Thermes",
    type: "french",
    rating: "4.0 (Tripadvisor)",
    price: "$$–$$$",
    img: "images/hotel-thermal-garden.jpg",
    verified: true,
    desc: "The 60-seat restaurant terrace at Hotel Thermal, serving French and seafood-leaning dishes beside the thermal complex. The most comfortable lunch stop between the park and the pool.",
    highlights: ["French classics", "Seafood", "Outdoor terrace"],
    contact: { phone: "+261 34 75 512 26", email: "thermal@lerelais.mg", website: "https://thermal-ranomafana.mg/en/home/", social: "https://www.facebook.com/thermalranomafana/" }
  },
  {
    slug: "rianala-gite-restaurant",
    name: "Rianala Gite Restaurant",
    type: "malagasy",
    rating: "5.0 (Tripadvisor, 1 review)",
    price: "$",
    img: "images/placeholder-rianala-gite-restaurant.jpg",
    verified: true,
    photoNeeded: true,
    sourceNote: "Added during verification — the gîte's kitchen is separately recommended.",
    gallery: [
      { src: "images/rianala-gite-restaurant-exterior.jpg", fallback: "images/placeholder-rianala-gite-restaurant.jpg", alt: "Rianala Gite Restaurant frontage" },
      { src: "images/rianala-gite-restaurant-dining.jpg", fallback: "images/placeholder-rianala-gite-restaurant.jpg", alt: "Dining room at Rianala Gite Restaurant" },
      { src: "images/rianala-gite-restaurant-dish.jpg", fallback: "images/placeholder-rianala-gite-restaurant.jpg", alt: "A dish at Rianala Gite Restaurant" }
    ],
    desc: "Home cooking at the small gîte by the park entrance. Only one review exists, but it called dinner here the best meal of a Madagascar trip. Worth booking ahead if you are staying elsewhere.",
    highlights: ["Home-cooked Malagasy dishes", "Right at the park entrance", "Call ahead"],
    contact: { phone: "", email: "", website: "", social: "", note: "By the entrance of Ranomafana National Park, Ambatolahy." }
  },
  {
    slug: "karibotel-restaurant",
    name: "Karibotel Restaurant",
    type: "malagasy",
    rating: "3.2 (Tripadvisor, 57 reviews)",
    price: "$$",
    img: "images/placeholder-karibotel-restaurant.jpg",
    verified: true,
    photoNeeded: true,
    gallery: [
      { src: "images/karibotel-restaurant-exterior.jpg", fallback: "images/placeholder-karibotel-restaurant.jpg", alt: "Karibotel Restaurant frontage" },
      { src: "images/karibotel-restaurant-dining.jpg", fallback: "images/placeholder-karibotel-restaurant.jpg", alt: "Dining room at Karibotel Restaurant" },
      { src: "images/karibotel-restaurant-dish.jpg", fallback: "images/placeholder-karibotel-restaurant.jpg", alt: "A dish at Karibotel Restaurant" }
    ],
    desc: "Restaurant at Karibotel, Tsararano, just before the village, on the hillside above the river.",
    highlights: ["Terrace above the river", "Breakfast from 8,000 Ar"],
    meals: ["Breakfast: from 8,000 Ar", "Lunch or dinner: from 45,000 Ar"],
    contact: { phone: "+261 33 15 629 50", email: "resa.karibotelranomafana@gmail.com", website: "", social: "https://www.facebook.com/karibotelranomafana/" }
  },
  {
    slug: "centrest-restaurant",
    name: "Centrest Sejour Restaurant",
    type: "french",
    rating: "3.5 (Tripadvisor, 212 reviews)",
    price: "$$",
    img: "images/centrest-sejour-restaurant.jpg",
    verified: true,
    desc: "Hotel restaurant at the village entrance serving both Malagasy and French cuisine, open to non-residents.",
    highlights: ["Malagasy and French menu", "Village entrance"],
    meals: ["Breakfast: 25,000–30,000 Ar (continental or American)", "Lunch or dinner: from 40,000 Ar"],
    contact: { phone: "+261 34 16 524 33 / +261 38 60 594 02", email: "centrestsejour@gmail.com", website: "", social: "https://www.facebook.com/profile.php?id=61579310794179" }
  },
  {
    slug: "au-domnatur-restaurant",
    name: "Au Domnatur Restaurant",
    type: "malagasy",
    rating: "3.3 (Tripadvisor, 77 reviews)",
    price: "$$",
    img: "images/au-domnatur-restaurant.webp",
    verified: true,
    desc: "On-site restaurant at the forest-edge lodge 2 km above town, with canopy views from the dining terrace.",
    highlights: ["Canopy views", "Order ahead"],
    meals: ["Breakfast: 20,000 Ar continental, 25,000–30,000 Ar American", "Lunch or dinner: 40,000–50,000 Ar"],
    contact: { phone: "+261 34 41 846 32 / +261 32 03 611 19 / +261 32 42 952 37", email: "audomnaturr@gmail.com", website: "", social: "https://www.facebook.com/p/H%C3%B4tel-Au-Domnatur-Ranomafana-100005913759576/" }
  },
  {
    slug: "cristo-bar-restaurant",
    name: "Cristo Hotel Bar & Restaurant",
    type: "malagasy",
    rating: "3.9 (Tripadvisor, 49 reviews)",
    price: "$$",
    img: "images/cristo-hotel-view.jpg",
    verified: true,
    desc: "Riverside bar and dining room 5 km from the village, often combined with the hotel's kayaking and excursion offers.",
    highlights: ["River setting", "Bar", "Excursions on request"],
    contact: { phone: "+261 38 95 657 07", email: "cristomadagascar@gmail.com", website: "", social: "https://www.facebook.com/p/Cristo-HOTEL-Ranomafana-100092747982904/" }
  },
  {
    slug: "setam-lodge-dining",
    name: "Setam Lodge Dining Hall",
    type: "french",
    rating: "3.6 (Tripadvisor, 294 reviews)",
    price: "$$$",
    img: "images/setam-lodge-dining-hall.jpg",
    verified: true,
    desc: "A 70-seat bar and restaurant above the canopy — the largest and most formal dining room in the area. Reserve ahead if you are not staying at the lodge.",
    highlights: ["Set menus", "Canopy views", "70 seats — groups welcome"],
    meals: ["Breakfast: 25,000 Ar continental, 30,000 Ar American", "Lunch or dinner: 50,000 Ar set price"],
    contact: { phone: "+261 34 07 324 33", email: "setamlodgeresa@gmail.com", website: "https://setam-madagascar.com/en/lodge", social: "https://www.facebook.com/setam.lodge/" }
  },
  {
    slug: "ihary-restaurant",
    name: "Ihary Hotel Restaurant",
    type: "malagasy",
    rating: "3.0 (Tripadvisor, 47 reviews)",
    price: "$",
    img: "images/placeholder-ihary-restaurant.jpg",
    verified: true,
    photoNeeded: true,
    gallery: [
      { src: "images/ihary-restaurant-exterior.jpg", fallback: "images/placeholder-ihary-restaurant.jpg", alt: "Ihary Hotel Restaurant frontage" },
      { src: "images/ihary-restaurant-dining.jpg", fallback: "images/placeholder-ihary-restaurant.jpg", alt: "Dining room at Ihary Hotel Restaurant" },
      { src: "images/ihary-restaurant-dish.jpg", fallback: "images/placeholder-ihary-restaurant.jpg", alt: "A dish at Ihary Hotel Restaurant" }
    ],
    desc: "Riverside restaurant on the bank of the Namorona serving Malagasy cuisine. Quality is acceptable and prices low; service can be slow, so it is not the place to eat before an early park start.",
    highlights: ["River views", "Packed lunches for the park", "Allow extra time"],
    meals: ["Breakfast, lunch or dinner: 10,000–30,000 Ar"],
    contact: { phone: "+261 34 13 434 57 / +261 33 12 857 98 / +261 32 02 526 98 / +261 20 76 296 96", email: "iharyhotel@gmail.com", website: "", social: "https://www.facebook.com/iharyhotel/" }
  },
  {
    slug: "coin-dor-restaurant",
    name: "Coin d’or",
    type: "snack",
    rating: "—",
    price: "$",
    img: "images/placeholder-coin-dor-restaurant.jpg",
    verified: true,
    photoNeeded: true,
    gallery: [
      { src: "images/coin-dor-restaurant-exterior.jpg", fallback: "images/placeholder-coin-dor-restaurant.jpg", alt: "Coin d’or frontage" },
      { src: "images/coin-dor-restaurant-dining.jpg", fallback: "images/placeholder-coin-dor-restaurant.jpg", alt: "Dining room at Coin d’or" },
      { src: "images/coin-dor-restaurant-dish.jpg", fallback: "images/placeholder-coin-dor-restaurant.jpg", alt: "A dish at Coin d’or" }
    ],
    desc: "Central hotel-restaurant serving hearty local plates, with karaoke most evenings — the closest thing the village has to a night out.",
    highlights: ["Local plates", "Karaoke", "Late opening"],
    contact: { phone: "+261 34 31 318 09", email: "satsecretaire1@gmail.com", website: "", social: "" }
  },
  {
    slug: "park-entrance-restaurant",
    name: "Park Entrance Restaurant",
    type: "snack",
    rating: "—",
    price: "$",
    img: "images/placeholder-park-entrance-restaurant.jpg",
    verified: true,
    photoNeeded: true,
    sourceNote: "Wikivoyage: unnamed restaurant near the park reception, around 15,000 Ar per main. Map pin at the park reception, where OpenStreetMap and Google Maps agree (checked 23 Oct 2026): a Google search for the name scattered thirteen pins across the valley.",
    mapPin: "-21.2563,47.4212",   // the park reception; the name search scatters pins
    gallery: [
      { src: "images/park-entrance-restaurant-exterior.jpg", fallback: "images/placeholder-park-entrance-restaurant.jpg", alt: "Park Entrance Restaurant frontage" },
      { src: "images/park-entrance-restaurant-dining.jpg", fallback: "images/placeholder-park-entrance-restaurant.jpg", alt: "Dining room at Park Entrance Restaurant" },
      { src: "images/park-entrance-restaurant-dish.jpg", fallback: "images/placeholder-park-entrance-restaurant.jpg", alt: "A dish at Park Entrance Restaurant" }
    ],
    desc: "Simple restaurant beside the national park reception — the practical lunch stop between a morning and an afternoon circuit. Expect around 15,000 Ar for a main dish.",
    highlights: ["Walk-in lunch", "Cold drinks", "Right at the trailhead"],
    contact: { phone: "", email: "", website: "", social: "" }
  },
  {
    slug: "centre-valbio-dining",
    name: "Centre ValBio Dining",
    type: "malagasy",
    rating: "4.4 (Tripadvisor, 13 reviews)",
    price: "$$",
    img: "images/cvb-front-entrance-shot.jpg",
    verified: true,
    desc: "Three-course meals at the research station. Not a walk-in restaurant — meals must be arranged with the campus at least a day in advance.",
    highlights: ["Three-course set meals", "Arrange one day ahead", "Researcher and visitor dining"],
    contact: { phone: "+261 34 13 581 71", email: "ask@valb.io", website: "https://www.stonybrook.edu/commcms/centre-valbio/", social: "https://www.facebook.com/CentreValBio" }
  },
  {
    slug: "ellies-snack",
    name: "Ellie’s Snack",
    type: "snack",
    rating: "—",
    price: "$",
    img: "images/placeholder-ellies-snack.jpg",
    verified: false,
    photoNeeded: true,
    sourceNote: "Carried over from the original site draft. Nothing found under this name in any directory — confirm the name and that it is trading, or remove the listing.",
    gallery: [
      { src: "images/ellies-snack-exterior.jpg", fallback: "images/placeholder-ellies-snack.jpg", alt: "Ellie’s Snack frontage" },
      { src: "images/ellies-snack-dining.jpg", fallback: "images/placeholder-ellies-snack.jpg", alt: "Dining room at Ellie’s Snack" },
      { src: "images/ellies-snack-dish.jpg", fallback: "images/placeholder-ellies-snack.jpg", alt: "A dish at Ellie’s Snack" }
    ],
    desc: "Local snack bar for samosas, coconut cakes, coffee and fresh fruit juices.",
    highlights: ["Samosas", "Coconut cake", "Fresh juice"],
    contact: { phone: "", email: "", website: "", social: "" }
  }
];

/* --------------------------------------------------- 3. THINGS TO DO & SEE */
const doData = [
  {
    slug: "ranomafana-national-park",
    name: "Ranomafana National Park",
    category: "National park",
    price: "55,000 Ar adult/day · 25,000 Ar ages 5–12 · under 5 free · 5,000 Ar community fee · guide 90,000–150,000 Ar per group, by circuit",
    rating: "4.9 (Google Maps & Tripadvisor)",
    duration: "2 hours to 2 days, depending on circuit",
    status: "open",
    img: "images/ranomafana-national-park-lemur-branch.jpg",
    verified: true,
    /* The same fees broken out, for the home page, the park page and the
       Hiring a guide page. Change them here, alongside `price` above, and
       record the new source in sourceNote. feesAsOf is year-month. */
    entryFee: "55,000 Ar",
    childFee: "25,000 Ar",
    communityFee: "5,000 Ar",
    guideFees: [
      { walk: "Talatakely (Aureus)", hours: "2–4", price: "90,000 Ar" },
      { walk: "Sahamalaotra", hours: "2", price: "90,000 Ar" },
      { walk: "Vatoharanana", hours: "3–4", price: "120,000 Ar" },
      { walk: "Valohoaka trek", hours: "5–7", price: "150,000 Ar" }
    ],
    specialistFee: "220,000 Ar",
    hours: "07:00–17:00",
    feesAsOf: "2026-10",
    sourceNote: "Entry (adult 55,000 Ar; ages 5–12 25,000 Ar; under 5 free; Malagasy citizens 2,000 / 500 Ar), guide fees by circuit, the 220,000 Ar specialist rate, group sizes, opening hours, circuit notes, the lemur list and how to get to the gate all come from Kyle's notes ('Website information.docx', received 11 Oct 2026). They agree with gate reports from August 2025 (The Travelling Sloth: 55,000 Ar entry, guide ~90,000 / 120,000 / 150,000 Ar) and January 2024 (The Blog of Dimi). The 5,000 Ar community fee is not in his notes but is stated on the official MNP park page (checked 11 Oct 2026) and in both gate reports, so it stays. The 45,000 Ar entry figure used here in early 2026 came from two fee-guide websites, one citing the other — do not reuse it. Area (43,550 ha), species counts (14 lemurs, 125 birds) and the community fee from the official MNP park page, parcs-madagascar.com/en/parc/ranomafana-2/, checked 11 Oct 2026; Kyle's notes give 43,650 ha, 13 lemurs and 118 birds. Circuit levels for Sahamalaotra, Vatoharanana and Valohoaka are judged from their lengths, not taken from a source. Confirmed by the notice board at the park office, photographed by Kyle (received 19 Oct 2026; copy in photo-originals/2026-10-19 Park office/): entry per day 55,000 Ar foreign adults, 25,000 Ar foreign children, 2,000 / 500 Ar Malagasy; day-and-night tickets 105,000 / 75,000 Ar (Malagasy 7,000 / 5,500 Ar); camping 5,000 Ar per pitch per night; circuit map 5,000 Ar; guide fees per group of 1–4 Aureus 90,000, Vatoharanana 120,000, Valohoaka 150,000, Sahamalaotra 90,000 Ar, trekking, ornithology and herpetology 220,000 Ar, botany 200,000 Ar. The same board posts the guides' association's new guide fees from January 2027 (agreed 9 June 2026): Aureus 120,000 Ar (2 hours), Vatoharanana 150,000 Ar (3–4 hours), Valohoaka 180,000 Ar (5–7 hours), Sahamalaotra 120,000 Ar (2 hours), specialist herpetology, ornithology, botany or trek 250,000 Ar. Switch guideFees and specialistFee to these in January 2027. Also pinned there: a Ministry of Tourism letter dated 3 Oct 2026 and MNP 'Parc Phare' / 'Annexes nouveaux tarifs' sheets that seem to set new entry fees for flagship parks, Ranomafana possibly among them; they are too small in the photo to read reliably, so nothing on the site is taken from them.",
    desc: "UNESCO World Heritage montane rainforest holding fourteen lemur species, including the critically endangered golden bamboo lemur. A certified guide is mandatory for international visitors — arrange one through your hotel, or choose from the guides working that day when you arrive.",
    /* Longer introduction for the National Park page (the card uses desc). */
    intro: [
      "Ranomafana became Madagascar’s fourth national park in 1991 and a UNESCO World Heritage Site in 2007. It protects 43,550 hectares of mountainous rainforest and is one of the island’s most important conservation sites, a treasure trove of plants and animals found nowhere else. It is the fourth most visited national park in Madagascar by international tourists, and for good reason.",
      "Every visitor buys an entry ticket and pays for a local guide to show them the forest. What you spend depends on the circuit, the guide and what you hope to see. Arrange a guide through your hotel, or turn up at the park and choose from the guides working that day."
    ],
    tips: [
      "Open 07:00–17:00. Mid-morning is usually best, when the lemurs are awake and settling in to feed",
      "Cash in Ariary only at the gate — no cards, no euros or dollars",
      "Bring small notes; the office often has no change for large bills",
      "The 5,000 Ar community fee is paid at a separate booth from the park ticket",
      "One guide for a group of one to four; groups of six or more take at least two",
      "Tell your guide about your fitness and any worries — they will adapt the route to suit you",
      "Travelling solo? Ask the office to pair you with others to share the guide fee",
      "Guide fees rise in January 2027: 120,000 Ar for Talatakely or Sahamalaotra, 150,000 Ar for Vatoharanana, 180,000 Ar for Valohoaka and 250,000 Ar for a specialist guide",
      "Getting there: take a taxi-brousse heading for Fianarantsoa from the station in the centre of town and ask for the park entrance — 20–25 minutes, 1,000–2,000 Ar. By car it is 7 km up the road",
      "Weather permitting, walk back: it is a beautiful hour downhill to town, and lemurs are sometimes seen near the road",
      "Malagasy citizens pay 2,000 Ar (adults) and 500 Ar (ages 5–12)",
      "Bring a rain shell in every season"
    ],
    wildlife: [
      {
        group: "Lemurs",
        note: "Fourteen species live here, among them:",
        photo: { src: "images/ranomafana-national-park-ruffed-lemur.jpg", alt: "A black-and-white ruffed lemur looking down from a branch, Ranomafana National Park" },
        species: ["Golden bamboo lemur", "Greater bamboo lemur", "Ranomafana grey bamboo lemur", "Milne-Edwards’ sifaka", "Southern black-and-white ruffed lemur", "Red-bellied lemur", "Red-fronted brown lemur", "Aye-aye", "Brown mouse lemur", "Crossley’s dwarf lemur", "Small-toothed sportive lemur", "Sibree’s dwarf lemur", "Peyrieras’ woolly lemur"]
      },
      {
        group: "Birds",
        note: "125 species, many found only in Madagascar. Look for:",
        photo: { src: "images/ranomafana-national-park-paradise-flycatcher.jpg", alt: "A Madagascar paradise flycatcher sitting on its mossy nest, Ranomafana National Park" },
        species: ["Forest ibis", "Ground-rollers", "Blue vanga"]
      },
      {
        group: "Reptiles",
        note: "Well camouflaged, so let your guide point them out:",
        photo: { src: "images/ranomafana-national-park-chameleon-branch.jpg", alt: "A chameleon with blue legs and an orange-banded tail on a branch, Ranomafana National Park" },
        species: ["Satanic leaf-tailed gecko", "Mossy leaf-tailed gecko", "Madagascar boa", "Chameleons"]
      },
      {
        group: "Other mammals",
        note: "Look down as well as up:",
        photo: { src: "images/ranomafana-national-park-mongoose.jpg", alt: "A ring-tailed mongoose crossing a stone path in Ranomafana National Park" },
        species: ["Ring-tailed mongoose"]
      }
    ],
    circuits: [
      {
        name: "Talatakely (Aureus)",
        duration: "2–4 hours",
        level: "Easy to moderate",
        desc: "The park’s main circuit, on a mix of clear paths and rougher cuts through secondary forest, with some steep climbs and descents. It passes through bamboo forest home to golden and greater bamboo lemur groups and climbs to a lookout where red-bellied and red-fronted lemurs like to hang out. Side paths lead to the Sakaroa waterfall, good for a dip on a hot day. Reachable on foot from the gate."
      },
      {
        name: "Sahamalaotra",
        duration: "About 2 hours",
        level: "Easy",
        desc: "A short circuit with its own entrance at Sahamalaotra, priced the same as Talatakely."
      },
      {
        name: "Vatoharanana",
        duration: "3–4 hours",
        level: "Moderate",
        desc: "Into primary rainforest beyond Talatakely, with a camping area en route. Fewer visitors, more intact forest, and the best chance at Milne-Edwards’ sifaka. Wear proper footwear and carry water."
      },
      {
        name: "Valohoaka",
        duration: "5–7 hours",
        level: "Demanding",
        desc: "The longest trek on the guide price list. Plan on most of a day: carry lunch and two litres of water, and wear serious footwear."
      },
      {
        name: "Vohiparara",
        duration: "Full day, or 2 days to the sacred lake",
        level: "Moderate",
        desc: "Higher-altitude forest at the park\u2019s western edge \u2014 the birders\u2019 circuit, and the route towards the sacred lake on the two-day version. Cooler and wetter than Talatakely; ask specifically for a birding guide."
      }
    ],
    /* Photos from Kyle, 11 Oct 2026 (originals in photo-originals/), and more
       from him on 13, 19 and 20 Oct 2026 (used as received: already 1600px and under
       500 KB). The park page shows the cover photo and the first seven here;
       "See all photos" opens the rest. The greater bamboo lemur is named from its
       white ear tufts and the bamboo it is stripping; the waterfalls of 19 Oct were
       sent as park photos but are not named. */
    gallery: [
      { src: "images/ranomafana-national-park-bamboo-lemur-feeding.jpg", alt: "A golden bamboo lemur feeding on bamboo leaves, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-greater-bamboo-lemur.jpg", alt: "A greater bamboo lemur, with its white ear tufts, clinging to a bamboo stem, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-cascade.jpg", alt: "A small cascade tumbling over mossy boulders in the rainforest, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-waterfall.jpg", alt: "A waterfall pouring into a forest pool, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-leaf-chameleon.jpg", alt: "A tiny leaf chameleon (Brookesia) on a mossy twig, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-comet-moth.jpg", alt: "A comet moth resting on a leaf, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-namorona-gorge.jpg", alt: "The Namorona River winding through its forested gorge" },
      { src: "images/ranomafana-national-park-wildlife.jpg", alt: "A lemur clinging to a tree trunk among the bamboo, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-campsite.jpg", alt: "The forest campsite inside Ranomafana National Park, with a wooden rack and a fire pit" },
      { src: "images/ranomafana-national-park-canopy.jpg", alt: "Looking up a giant rainforest tree into the canopy, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-lemur-trunk.jpg", alt: "A brown lemur clinging to a trunk in the forest, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-trail.jpg", alt: "Walkers on a forest trail in Ranomafana National Park" },
      { src: "images/ranomafana-national-park-greater-bamboo-lemur-feeding.jpg", alt: "A greater bamboo lemur chewing a strip of bamboo, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-chameleon.jpg", alt: "A green chameleon on a branch, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-lemur-canopy.jpg", alt: "A lemur on a mossy branch high in the canopy, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-lemur-bamboo.jpg", alt: "A lemur in the bamboo, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-lemur-walking.jpg", alt: "A lemur walking along a branch high in the trees, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-lemur-tail.jpg", alt: "A lemur on a hanging vine, its long bushy tail curled below, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-lemur-mossy-trunk.jpg", alt: "A lemur looking out from a mossy trunk in the canopy, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-mongoose.jpg", alt: "A ring-tailed mongoose crossing a stone path in Ranomafana National Park" },
      { src: "images/ranomafana-national-park-leaf-tailed-gecko.jpg", alt: "A leaf-tailed gecko disguised as a dead leaf, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-bird.jpg", alt: "A bird perched in the understory, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-chameleon-in-hand.jpg", alt: "A young chameleon held up for a closer look, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-ruffed-lemur.jpg", alt: "A black-and-white ruffed lemur looking down from a branch, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-paradise-flycatcher.jpg", alt: "A Madagascar paradise flycatcher sitting on its mossy nest, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-chameleon-branch.jpg", alt: "A chameleon with blue legs and an orange-banded tail on a branch, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-ground-roller.jpg", alt: "A scaly ground-roller, one of the shy birds of the forest floor, in close-up, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-nestlings.jpg", alt: "Hungry nestlings calling from their nest hole, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-caterpillar.jpg", alt: "A hairy black-and-orange caterpillar under a leaf, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-bamboo.jpg", alt: "Bamboo forest, home of the park's bamboo lemurs" },
      { src: "images/ranomafana-national-park-bamboo-path.jpg", alt: "A stone-paved path through the bamboo forest, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-bamboo-walkers.jpg", alt: "Walkers following a trail under arching bamboo, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-mossy-trunks.jpg", alt: "Moss-covered tree trunks in the rainforest, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-stream.jpg", alt: "A stream running over mossy rocks under the forest canopy, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-stream-ferns.jpg", alt: "A stream tumbling over rocks between ferns and mossy trees, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-cascade-boulders.jpg", alt: "A stream cascading over lichen-covered boulders in the sun, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-cascade-steps.jpg", alt: "A rocky stream stepping down through the forest, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-waterfall-pool.jpg", alt: "A tall waterfall falling into a pool behind a mossy tree, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-namorona.jpg", alt: "The Namorona River rushing through the rainforest" },
      { src: "images/ranomafana-national-park-footbridge.jpg", alt: "Walkers crossing a wooden footbridge over a forest stream, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-entrance.jpg", alt: "Walkers crossing the yellow footbridge over the Namorona into the forest, Ranomafana National Park" },
      { src: "images/ranomafana-national-park-visitors-sign.jpg", alt: "A group of visitors at the Parc National Ranomafana sign" },
      { src: "images/ranomafana-national-park-interpretation-sign.jpg", alt: "The sign at the park's interpretation centre, topped by a wooden lemur: “Veloma — Good bye — Au revoir”" },
      { src: "images/ranomafana-national-park-interpretation-centre.jpg", alt: "Inside the park's interpretation centre: a display of a Tanala village" },
      { src: "images/ranomafana-national-park-circuit-map.jpg", alt: "The board mapping the park's walking circuits" }
    ],
    contact: { phone: "", email: "", website: "https://parcs-madagascar.com/en/parc/ranomafana-2/", social: "" }
  },
  {
    slug: "voi-mitsinjo",
    name: "VOI Mitsinjo Reserve",
    category: "Community conservation",
    price: "Contact VOI Ambatolahy for entry and guide rates",
    rating: "\u2014",
    duration: "2\u20134 hours",
    status: "open",
    img: "images/voi-mitsinjo-waterfall.jpg",
    verified: false,
    photoNeeded: false,
    sourceNote: "Local knowledge, from Kyle on the ground in Ranomafana. NOT the same as Association Mitsinjo at Andasibe, ~600 km north \u2014 do not \u2018correct\u2019 this entry away on that basis, as an earlier pass wrongly did. Entry rates and hours still to be confirmed with the association. Photos of the waterfall, its viewing shelter and the path from Kyle, received 20 Oct 2026; the wildlife slot is still waiting for a photo. Waterfall access (a 30-minute walk from Ambatolahy village, or a four-hour hike through the forest) from Kyle, 20 Oct 2026. Size (around 150 hectares of forest) from Kyle, 23 Oct 2026. The map is pinned to Ambatolahy village (OpenStreetMap) because a Google search for the name lands on Parc Mitsinjo at Andasibe.",
    mapPin: "-21.2501,47.4300",   // Ambatolahy village; searching the name finds Andasibe
    desc: "Community-managed forest reserve of around 150 hectares at Ambatolahy, run by VOI Ambatolahy \u2014 the local community association that holds the forest management transfer. Guided day and night walks with community guides, with fees going directly to the village rather than to the national park. The reserve's twin waterfall is a 30-minute walk from Ambatolahy village, or a four-hour hike through the forest.",
    tips: [
      "Arrange through VOI Ambatolahy \u2014 ask at Ambatolahy village or through your hotel",
      "No national park ticket needed; this is a separate community reserve",
      "Good option for a night walk, and for a day when the park circuits are full"
    ],
    gallery: [
      { src: "images/voi-mitsinjo-waterfall.jpg", alt: "A man standing at the pool below the reserve's twin waterfall, VOI Mitsinjo Reserve" },
      { src: "images/voi-mitsinjo-waterfall-pool.jpg", alt: "The twin waterfall pouring into its pool, VOI Mitsinjo Reserve" },
      { src: "images/voi-mitsinjo-viewing-shelter.jpg", alt: "The covered viewing shelter, with its yellow railings, above the waterfall, VOI Mitsinjo Reserve" },
      { src: "images/voi-mitsinjo-shelter-group.jpg", alt: "A group in the viewing shelter, with the waterfall behind them, VOI Mitsinjo Reserve" },
      { src: "images/voi-mitsinjo-waterfall-above.jpg", alt: "The twin waterfall seen from above, falling over dark rock into a pool, VOI Mitsinjo Reserve" },
      { src: "images/voi-mitsinjo-forest.jpg", alt: "Walking through forest and banana plants on the way to the waterfall, VOI Mitsinjo Reserve" },
      { src: "images/voi-mitsinjo-community.jpg", alt: "Three men clearing the path down to the waterfall, VOI Mitsinjo Reserve" },
      { src: "images/voi-mitsinjo-wildlife.jpg", fallback: "images/placeholder-voi-mitsinjo.jpg", alt: "Wildlife at VOI Mitsinjo Reserve" }
    ],
    contact: { phone: "", email: "", website: "", social: "", note: "Managed by VOI Ambatolahy." }
  },
  {
    slug: "night-walk",
    name: "Guided Night Walk",
    category: "Wildlife",
    price: "About 40,000 Ar per person",
    rating: "4.7 (Tripadvisor)",
    duration: "About 1 hour",
    status: "open",
    img: "images/night-walk-tree-frog.jpg",
    verified: true,
    asOf: "2026-10",
    sourceNote: "Price paid August 2025 for a 2-hour night walk (The Travelling Sloth trip report). The earlier 20,000–25,000 Ar figure came from 2026 fee-guide websites with no gate report behind it. Length (about an hour), booking through your guide or hotel, the brown mouse lemurs and chameleons, and the need for a private car from Kyle's notes (received 11 Oct 2026).",
    desc: "After-dark walk along the RN25 at the forest edge — the park itself closes at 17:00 — for brown mouse lemurs and many kinds of chameleon, with tree frogs and leaf-tailed geckos too. No park ticket is needed. Arrange it through your daytime park guide or your hotel.",
    gallery: [
      { src: "images/night-walk-tree-frog.jpg", alt: "A green tree frog with red-rimmed eyes on a mossy twig at night" },
      { src: "images/satanic-leaf-gecko.jpg", alt: "Satanic leaf-tailed gecko" },
      { src: "images/night-walk-chameleon.jpg", alt: "A chameleon asleep on a twig, lit by torchlight on the night walk" },
      { src: "images/night-walk-mouse-lemur.jpg", alt: "A mouse lemur in the branches at night" },
      { src: "images/night-walk-pygmy-kingfisher.jpg", alt: "A Madagascar pygmy kingfisher perched on a twig after dark" }
    ],
    tips: ["You need a private car: taxi-brousses stop running regularly after dusk, and walking the road at night is not considered safe", "Arrange it with your daytime guide or your hotel", "Bring a head torch with a red filter", "Starts around 18:30", "Wear long sleeves"],
    contact: { phone: "", email: "", website: "", social: "" }
  },
  {
    slug: "station-thermale",
    name: "Station Thermale (Thermal Pool & Baths)",
    category: "Thermal springs",
    price: "Pool 10,000 Ar (residents 2,000 Ar) · private bath 10,000 Ar per person (residents 2,000 Ar)",
    rating: "3.6 (Tripadvisor, 35 reviews)",
    duration: "1–2 hours",
    status: "open",
    img: "images/station-thermale-pool.jpg",
    verified: true,
    asOf: "2026-10",
    photoNeeded: false,
    sourceNote: "Prices, opening hours and the Tuesday closure from the price and opening-hours board at the Station Thermale ticket booth, photographed by Kyle (received 11 Oct 2026): bath and pool 10,000 Ar foreigners / 2,000 Ar residents; baths 07:00–11:30 and 14:00–16:00; pool 06:00–12:00 and 13:30–16:30; pool closed every Tuesday ('Talata'); thermal cure 5,000 Ar; lodging for the sick ('hébergement pour les malades') 2,000 Ar; gîte residents 10,000 Ar per person per night (the foreigners' gîte price is faded and unreadable — about 50,000 Ar — so it is not published); relaxing massage 40,000 / 20,000 Ar. These replace the figures in his written notes (5,000 / 1,000 Ar, closed Wednesday, an evening session 19:00–21:00). Contact details removed 11 Oct 2026: the phone, email, website and Facebook page shown here were Hotel Thermal's, a different place; the pool's wall carries the Commune of Ranomafana's emblem. Rules, the private baths and the geothermal explanation from Kyle's notes (received 11 Oct 2026). They replace the Petit Futé hours (pool 06:00–18:00, baths 07:00–11:30 and 14:00–16:30), the 'sulphurous' description (his notes say the water has no sulphur smell) and 'swim cap for long hair' (his notes say everyone). The riverside restaurant was under construction 'as of 2023' in his notes. Photo removed 2026-09-12: was incorrectly using a Hotel Thermal photo — Station Thermale (the public bathhouse) and Hotel Thermal (the accommodation) are two different places.",
    gallery: [
      { src: "images/station-thermale-pool.jpg", alt: "The open-air thermal pool at Station Thermale, with the forested hills behind" },
      { src: "images/station-thermale-exterior.jpg", alt: "The Station Thermale ticket booth, with its welcome sign, opening hours and prices" },
      { src: "images/station-thermale-signpost.jpg", alt: "Signposts at Station Thermale pointing to the massage room, pool, baths, restaurant and vaporium" },
      { src: "images/station-thermale-path.jpg", alt: "Stone steps down through the gardens to the Station Thermale buildings" },
      { src: "images/station-thermale-wall.jpg", alt: "The Ranomafana emblem on the stone wall beside the pool" },
      { src: "images/station-thermale-view.jpg", alt: "Bins under a cleanliness sign, with the mountains beyond, at Station Thermale" },
      { src: "images/station-thermale-site-plan.jpg", alt: "The site plan board at Station Thermale" },
      { src: "images/station-thermale-baths.jpg", fallback: "images/placeholder-station-thermale.jpg", alt: "Private bath rooms at Station Thermale" }
    ],
    desc: "The public pool and bathhouse that give Ranomafana — \"hot water\" in Malagasy — its name, across the Namorona from the football field and no more than 20 minutes' walk from any hotel in town. Ancient geothermal vents heat fresh water near the surface rather than pumping it up from deep below, so there is none of the sulphur smell of most hot springs. The pool ticket includes thermal showers, changing rooms and a toilet. At the same booth you can take a private bath room: a tiled tub with a thermal tap and a cold tap, cleaned after every visitor.",
    tips: [
      "The pool is closed all day on Tuesdays",
      "Pool 06:00–12:00 and 13:30–16:30; private baths 07:00–11:30 and 14:00–16:00",
      "Everyone needs a swim cap — on sale at the entrance for 1,000–3,000 Ar. Any swimwear is fine",
      "Bring your own towel, and soap for the private baths — only hot and cold water are provided",
      "Several people can share a private bath room if each buys a ticket",
      "No food, drink or animals in the pool area; the riverside lawn next door is the picnic spot",
      "Bags sit on open shelves in sight of the pool. Crime is rare, but leave valuables at your hotel on busy days",
      "Book a massage at the same ticket counter: a relaxing massage is 40,000 Ar (residents 20,000 Ar)",
      "Also on the price board: a thermal cure for 5,000 Ar, lodging for people taking the cure for 2,000 Ar, and gîte beds at 10,000 Ar per person per night for residents. The price for foreign visitors has faded off the board, so ask at the booth"
    ],
    contact: { phone: "", email: "", website: "", social: "", note: "Pay at the ticket booth at the entrance. Not part of Hotel Thermal." }
  },
  {
    slug: "thermal-massage",
    name: "Thermal Massage",
    category: "Thermal springs",
    price: "Relaxing massage 40,000 Ar (residents 20,000 Ar)",
    rating: "—",
    duration: "45–60 minutes",
    status: "open",
    img: "images/placeholder-thermal-massage.jpg",
    verified: true,
    asOf: "2026-10",
    photoNeeded: true,
    sourceNote: "Kyle's notes (received 11 Oct 2026) confirm a massage room in the private baths, booked at the ticket counter. Price (relaxing massage 40,000 Ar foreigners / 20,000 Ar residents) and 'the centre does not supply massage oil' ('Tsy miantoka menaka hanorana ny centre') from the price and opening-hours board at the Station Thermale ticket booth, photographed by Kyle (received 11 Oct 2026). Contact details removed 11 Oct 2026: they were Hotel Thermal's, a different place. Photo removed 2026-09-12: was incorrectly using a Hotel Thermal photo — Station Thermale (the public bathhouse) and Hotel Thermal (the accommodation) are two different places.",
    gallery: [
      { src: "images/thermal-massage-room.jpg", fallback: "images/placeholder-thermal-massage.jpg", alt: "The massage room at Station Thermale" }
    ],
    desc: "Massage in a room set aside within the Station Thermale's private baths — the standard reward after a long circuit. Book at the same ticket counter as the pool and baths.",
    tips: ["Book at the Station Thermale ticket counter", "Bring your own massage oil — the centre does not supply it", "Hotel Thermal's spa, a separate business, also offers massages"],
    contact: { phone: "", email: "", website: "", social: "", note: "Book at the Station Thermale ticket booth. Not part of Hotel Thermal." }
  },
  {
    slug: "hotel-thermal-pools",
    name: "Hotel Thermal Hot-Spring Pools",
    category: "Thermal springs",
    price: "20,000 Ar per person for several hours",
    rating: "—",
    duration: "Several hours, day or evening",
    status: "open",
    img: "images/hotel-thermal-aerial.jpg",
    verified: true,
    asOf: "2026-10",
    sourceNote: "All details from Kyle's notes (received 11 Oct 2026). These are Hotel Thermal's own pools, not the public Station Thermale, so Hotel Thermal's photos are correct here.",
    gallery: [
      { src: "images/hotel-thermal-aerial.jpg", alt: "Aerial view of Hotel Thermal and the thermal complex" },
      { src: "images/hotel-thermal-garden.jpg", alt: "Garden at Hotel Thermal" },
      { src: "images/hotel-thermal-exterior.jpg", alt: "Hotel Thermal exterior" }
    ],
    desc: "The closest thing in Ranomafana to a familiar hot tub, with poolside drinks. Hotel Thermal has three small thermal pools, each seating up to eight, that anyone can book — at any time, late evening included. Changing rooms, toilets, cold showers and towels are provided, and you can order drinks, with or without alcohol, to enjoy in the pool.",
    tips: ["Book in advance at the Hotel Thermal front desk", "Good for a group, or an evening soak after the public pool has closed", "Towels provided — unlike the public pool"],
    contact: { phone: "+261 34 75 512 26 / +261 32 12 511 26", email: "thermal@lerelais.mg", website: "https://thermal-ranomafana.mg/en/home/", social: "https://www.facebook.com/thermalranomafana/" }
  },
  {
    slug: "cascade-andriamamovoka",
    name: "Cascade Andriamamovoka",
    category: "Waterfall",
    price: "Free access; local guide recommended",
    rating: "4.5 (Tripadvisor)",
    duration: "Half day",
    status: "open",
    img: "images/placeholder-cascade-andriamamovoka.jpg",
    verified: true,
    photoNeeded: true,
    sourceNote: "Coordinates 21°15′15″S 47°25′18″E. They are Wikidata's for Andriamamovoka Falls (taken from English Wikipedia) and fall on Centre ValBio, so they look rough. The map pin is the roadside viewpoint Google Maps calls 'Chutes Andriamamovoka' (checked 23 Oct 2026): it is downstream of the park gate, as 'below the park' says, and the nearest named place to Wikidata's point; its reviews describe falls beside the road to the park, and the Commons photo of the falls (Hardscarf, 2013) is taken from a railed roadside platform like it. Google's other 'Cascade Andriamamovoka', a hiking area at Vorondolo about 3 km further up the RN25, is upstream of the park gate.",
    mapPin: "-21.2515,47.4280",   // Google Maps "Chutes Andriamamovoka", the roadside viewpoint
    gallery: [
      { src: "images/cascade-andriamamovoka-falls.jpg", fallback: "images/placeholder-cascade-andriamamovoka.jpg", alt: "Cascade Andriamamovoka" },
      { src: "images/cascade-andriamamovoka-trail.jpg", fallback: "images/placeholder-cascade-andriamamovoka.jpg", alt: "Trail to Cascade Andriamamovoka" },
      { src: "images/cascade-andriamamovoka-river.jpg", fallback: "images/placeholder-cascade-andriamamovoka.jpg", alt: "River below Cascade Andriamamovoka" }
    ],
    desc: "The big falls on the Namorona River below the park, reached on a scenic riverside walk. The most photographed waterfall in the Ranomafana area.",
    tips: ["Rocks are slippery — this is not a handrail trail", "Go with a village guide"],
    contact: { phone: "", email: "", website: "", social: "" }
  },
  {
    slug: "jirama-waterfall-hike",
    name: "Jirama Waterfall Hike",
    category: "Waterfall",
    price: "Free access; local guide recommended",
    rating: "—",
    duration: "About 1 hour each way",
    status: "open",
    img: "images/jirama-waterfall-hike-falls.jpg",
    verified: true,
    asOf: "2026-10",
    photoNeeded: false,
    sourceNote: "Local knowledge from the original site draft — no published source found under this name. The route (start at the public pool, about an hour upriver to the biggest waterfall on the Namorona, not visible from the road) is from Kyle's notes (received 11 Oct 2026), which describe the walk but do not name the falls. On 11 Oct 2026 Kyle identified his photos of the big granite falls as the end of this walk, and placed them on this listing, so it is now marked verified. Two more photos of the falls (high water, and the pool below) from Kyle on 20 Oct 2026. Map pin at the start of the walk, the public pool (checked 23 Oct 2026): a Google search for the name scattered three waterfall and park pins. The falls themselves are probably Google Maps' 'Ranomafana Waterfalls' (-21.2569, 47.4360), on the river beside the Namorona hydropower station (OpenStreetMap), away from the road; its photo looks like Kyle's.",
    mapPin: "-21.2593,47.4516",   // the start of the walk, the public pool
    gallery: [
      { src: "images/jirama-waterfall-hike-falls.jpg", alt: "The big waterfall on the Namorona, stepping down over granite at the end of the walk from the public pool" },
      { src: "images/jirama-waterfall-hike-high-water.jpg", alt: "The big waterfall running high and brown under a blue sky" },
      { src: "images/jirama-waterfall-hike-pool.jpg", alt: "The falls and the boulder-strewn pool below them, under a cloudy sky" },
      { src: "images/jirama-waterfall-hike-trail.jpg", alt: "The waterfall seen across the fields and banana plants on the way" },
      { src: "images/jirama-waterfall-hike-river.jpg", alt: "Water pouring between granite boulders at the falls" }
    ],
    desc: "A short walk popular with locals, to the biggest waterfall on the Namorona, which you can't see from the road. Start at the public swimming pool (the piscine) and follow the main path past it up the river, through a small village, along narrow dirt paths and across rice paddies. About halfway you'll see the big waterfall in the distance. No park ticket needed.",
    tips: ["About an hour each way from the pool", "Not sure of the way? Ask anyone for the 'cascade'", "Doable before an afternoon circuit", "Paths are narrow and muddy after rain"],
    contact: { phone: "", email: "", website: "", social: "" }
  },
  {
    slug: "namorona-kayaking",
    name: "Namorona River Kayaking",
    category: "Water activity",
    price: "60,000 Ar per person",
    rating: "5.0 (Tripadvisor, 8 reviews)",
    duration: "About 2 hours",
    status: "open",
    img: "images/namorona-kayaking-river.jpg",
    verified: true,
    asOf: "2026-10",
    photoNeeded: false,
    sourceNote: "Price, length, meeting point, the self-guided format, the brousse back and both phone numbers and email from Kyle's notes (received 11 Oct 2026). The earlier 'guided paddle' wording is corrected — his notes are explicit that no guide goes with you. Equipment list from varibolo.com. River photo from Kyle, 11 Oct 2026, and Varibolo's shop and its 'Kayak Ranomafana' banner on 19 Oct 2026 (the banner gives the third number); the launch and group slots are still waiting for photos. On 22 Oct 2026 the domain varibolo.com no longer existed, so info@varibolo.com was replaced by variboloresto72@gmail.com from the banner and the website link was removed. Map pin at the meeting point by the thermal pool, a kayak business on Google Maps (checked 23 Oct 2026): a Google search for the name zoomed out over the whole region.",
    mapPin: "-21.2600,47.4521",   // the meeting point by the thermal pool
    gallery: [
      { src: "images/namorona-kayaking-river.jpg", alt: "The Namorona River winding through the valley near Ranomafana" },
      { src: "images/varibolo-resto-exterior.jpg", alt: "Varibolo's shop and restaurant, where you can book a kayak" },
      { src: "images/namorona-kayaking-banner.jpg", alt: "A woman pointing to Varibolo's Kayak Ranomafana banner" },
      { src: "images/namorona-kayaking-launch.jpg", fallback: "images/placeholder-namorona-kayaking.jpg", alt: "Launch point for Namorona River Kayaking" },
      { src: "images/namorona-kayaking-group.jpg", fallback: "images/placeholder-namorona-kayaking.jpg", alt: "Paddlers on the Namorona River Kayaking" }
    ],
    desc: "Paddle yourself down the Namorona in an inflatable kayak from Varibolo, which has a shop near the park entrance. You usually meet the staff at the little island in the middle of the river by the thermal pool, where they give you a briefing and the kayak (with paddle, life jacket and helmet). The river loosely follows the RN25: you may pass people panning for gold, and can stop at a toaka gasy (local rum) still. No rapids are difficult or dangerous, but you will get wet.",
    tips: [
      "No guide goes with you — you're on your own",
      "There's no set finish: when you've had enough, get out, deflate the kayak and flag down a taxi-brousse back to town",
      "Book in person at the shop, by phone or by email; they will confirm the meeting point",
      "Water levels are highest December to March",
      "A dry bag is worth bringing",
      "Cristo Hotel also arranges kayaking on request"
    ],
    contact: { phone: "+261 34 90 823 03 / +261 34 37 737 13 / +1 516 479 1889", email: "variboloresto72@gmail.com", website: "", social: "" }
  },
  {
    slug: "ranomafana-arboretum",
    name: "Ranomafana Arboretum",
    category: "Garden",
    price: "10,000 Ar per person (non-Malagasy), guide included",
    rating: "3.9 (Tripadvisor, 23 reviews)",
    duration: "About 1 hour",
    status: "open",
    img: "images/placeholder-ranomafana-arboretum.jpg",
    verified: true,
    asOf: "2026-10",
    photoNeeded: true,
    sourceNote: "Ticket price, guided loop, founder, tree and animal details from Kyle's notes (received 11 Oct 2026). Unresolved: his notes say founded 1991 by Dan Turk, an earlier source here said 1994; they say 4 km east of town but also 'a two-minute drive or 20-minute walk', which fits the earlier 2 km better. The page gives the travel times and no distance or year until confirmed. The previously listed ~$5 entry fee was an estimate and has been removed.",
    gallery: [
      { src: "images/ranomafana-arboretum-entrance.jpg", fallback: "images/placeholder-ranomafana-arboretum.jpg", alt: "Ranomafana Arboretum entrance" },
      { src: "images/ranomafana-arboretum-path.jpg", fallback: "images/placeholder-ranomafana-arboretum.jpg", alt: "Path through Ranomafana Arboretum" },
      { src: "images/ranomafana-arboretum-flora.jpg", fallback: "images/placeholder-ranomafana-arboretum.jpg", alt: "Endemic flora at Ranomafana Arboretum" }
    ],
    desc: "A hidden gem just east of town on the RN25, founded by Dan Turk: more than 50 kinds of tree, some native to south-east Madagascar and some brought to the island by trade centuries ago, plus a young baobab. A guide speaking English, French and Malagasy leads a loop of the grounds, with stunning views of the valley, unusual fruits to try, and lowland streaked tenrecs, chameleons, butterflies and frogs along the way.",
    tips: ["A two-minute drive, or an easy 20-minute walk, from town", "Expect the guided loop to take an hour or more", "Be ready to feed a giant Parson's chameleon an insect snack", "Gentle walking — suits varied mobility", "Good option in heavy rain or on a rest day"],
    contact: { phone: "", email: "", website: "", social: "" }
  },
  {
    slug: "centre-valbio-tour",
    name: "Centre ValBio Research Campus Tour",
    category: "Research & conservation",
    price: "Contact for visit rates",
    rating: "4.4 (Tripadvisor, 13 reviews)",
    duration: "1–2 hours",
    status: "open",
    img: "images/cvb-front-entrance-shot.jpg",
    verified: true,
    asOf: "2026-10",
    sourceNote: "Founding (2003, Dr Patricia Wright), staffing, talks, trainings and tours from Kyle's notes (received 11 Oct 2026).",
    desc: "Guided tour of the research station near the park entrance, founded in 2003 by primatologist Dr Patricia Wright and run today by Malagasy and American researchers and staff — labs, ongoing lemur and reforestation projects, and the story of how the park came to be protected. The centre also hosts regular talks on its research.",
    tips: ["All visits must be arranged one day in advance", "Ask about the research talks", "More on visiting at the Centre ValBio website"],
    contact: { phone: "+261 34 13 581 71", email: "ask@valb.io", website: "https://www.stonybrook.edu/commcms/centre-valbio/", social: "https://www.facebook.com/CentreValBio" }
  },
  {
    slug: "studio-olonala",
    name: "Studio oloNala",
    category: "Art & culture",
    price: "Free to browse",
    rating: "5.0 (Tripadvisor)",
    duration: "30–60 minutes",
    status: "open",
    img: "images/studio-olonala-frontage.jpg",
    verified: true,
    photoNeeded: false,
    sourceNote: "Photos from Kyle, received 19 Oct 2026; the sign over the door reads 'oloNala Art Studio & Shop'.",
    gallery: [
      { src: "images/studio-olonala-frontage.jpg", alt: "The arched doorway of the oloNala Art Studio & Shop, in a wall painted to look like mossy stone" },
      { src: "images/studio-olonala-interior.jpg", alt: "A wall of framed wildlife paintings inside Studio oloNala" },
      { src: "images/studio-olonala-work.jpg", alt: "Carved wooden plants on a striped wooden wall, beside framed paintings, at Studio oloNala" },
      { src: "images/studio-olonala-desk.jpg", alt: "An artist's worktable under the window at Studio oloNala" },
      { src: "images/studio-olonala-gallery.jpg", alt: "A small gallery room hung with framed pictures at Studio oloNala" }
    ],
    desc: "Art studio and shop at the park entrance, and the public face of oloNala — Madagascar's first environmentally focused art residency, working with Malagasy artists on conservation themes. The building itself incorporates Zafimaniry woodwork.",
    tips: ["Original work and prints for sale", "Right by the park gate — easy to combine with a morning circuit"],
    contact: { phone: "", email: "", website: "https://www.olonala.org/", social: "" }
  },
  {
    slug: "park-entrance-craft-shop",
    name: "Park Entrance Craft Shop",
    category: "Market",
    price: "Free to browse",
    rating: "—",
    duration: "15–30 minutes",
    status: "open",
    img: "images/park-entrance-craft-shop-goods.jpg",
    verified: true,
    photoNeeded: false,
    sourceNote: "Photos from Kyle, received 19 Oct 2026; he confirmed it is a local shop by the park entrance, not Varibolo's shop. What it sells is described from the photos only. Its name, prices and opening hours are not known yet.",
    gallery: [
      { src: "images/park-entrance-craft-shop-goods.jpg", alt: "Vanilla, jars of honey, polished stones and woven bags for sale at the craft shop by the park entrance" },
      { src: "images/park-entrance-craft-shop-front.jpg", alt: "The open front of the craft shop by the park entrance, with the shopkeeper by the door" }
    ],
    desc: "A small local shop by the park entrance, selling Malagasy vanilla, jars of honey, polished stones, woven bags and baskets, and lemur paintings.",
    tips: ["Right by the park entrance — easy to combine with a circuit and a visit to Studio oloNala", "Bring small Ariary notes"],
    contact: { phone: "", email: "", website: "", social: "" }
  },
  {
    slug: "village-artisan-market",
    name: "Village Artisan Market",
    category: "Market",
    price: "Free entry",
    rating: "—",
    duration: "1–2 hours",
    status: "open",
    img: "images/placeholder-village-artisan-market.jpg",
    verified: false,
    photoNeeded: true,
    sourceNote: "No published source confirms a weekly artisan market or its day. Kambana Résidence lists 'village market exploration' as a local activity, but the day and location still need confirming on the ground. Map pin at the village marketplace on OpenStreetMap (checked 23 Oct 2026): a Google search for the name landed in Antananarivo.",
    mapPin: "-21.2601,47.4553",   // the village marketplace; the name search finds Antananarivo
    gallery: [
      { src: "images/village-artisan-market-stalls.jpg", fallback: "images/placeholder-village-artisan-market.jpg", alt: "Stalls at the Village Artisan Market" },
      { src: "images/village-artisan-market-crafts.jpg", fallback: "images/placeholder-village-artisan-market.jpg", alt: "Crafts at the Village Artisan Market" }
    ],
    desc: "Handwoven basketry, woodcarving, embroidery and local spices from producers around Ranomafana, sold at the village centre.",
    tips: ["Bring small Ariary notes", "Ask before photographing stallholders"],
    contact: { phone: "", email: "", website: "", social: "" }
  },
  {
    slug: "voi-ambohimagneva",
    name: "VOI Ambohimagneva Community Reserve",
    category: "Community conservation",
    price: "In development — contact for access",
    rating: "—",
    duration: "Half day",
    status: "coming-soon",
    img: "images/voi-ambohimagneva-waterfall-ambony.jpg",
    verified: false,
    photoNeeded: false,
    sourceNote: "Project in development, not yet a published visitor attraction. Replaces the earlier 'Reserve Ambohimaneva' entry. Photos added 2026-09-12 from a site visit, and four more waterfall photos on 2026-10-11 (Kyle confirmed they were taken here). Two tree-frog photos and a waterfall from Kyle on 2026-10-20; the frogs are not named. That visitor fees go directly to the village and its people is from Kyle, 20 Oct 2026. Spelling corrected to 'Ambohimagneva' 2026-09-12 per Kyle. Map pin from 'Ambohimaneva Reserve' on Google Maps (checked 23 Oct 2026): a park listing with its own photo and phone number, where the forest starts on the north edge of town, so probably the way in; 'roughly 3 km from town' may describe the walk to the circuits. A Google search for the listing's name pinned the national park offices. The phone (034 31 153 32) is that Google listing's; Kyle confirmed it is correct on 23 Oct 2026. Kyle also settled the size that day as 75 hectares; the VOI Ambohimagneva review pack in his source folder says 120.",
    mapPin: "-21.2563,47.4570",   // Google Maps "Ambohimaneva Reserve", the forest edge north of town
    gallery: [
      { src: "images/voi-ambohimagneva-waterfall-ambony.jpg", alt: "Tall waterfall inside the reserve at VOI Ambohimagneva" },
      { src: "images/voi-ambohimagneva-waterfall-ambany.jpg", alt: "Tall waterfall lower on the trail at VOI Ambohimagneva" },
      { src: "images/voi-ambohimagneva-waterfall-pool.jpg", alt: "Waterfall dropping into a deep pool at VOI Ambohimagneva" },
      { src: "images/voi-ambohimagneva-waterfall-1.jpg", alt: "Waterfall along the VOI Ambohimagneva trail" },
      { src: "images/voi-ambohimagneva-waterfall-visitor.jpg", alt: "A visitor with arms outstretched in front of a waterfall at VOI Ambohimagneva" },
      { src: "images/voi-ambohimagneva-waterfall-swim.jpg", alt: "A swimmer standing in the spray of a waterfall at VOI Ambohimagneva" },
      { src: "images/voi-ambohimagneva-waterfall-sunlit.jpg", alt: "Sunlight falling on a waterfall between dark rocks at VOI Ambohimagneva" },
      { src: "images/voi-ambohimagneva-cascade-pool.jpg", alt: "A mossy cascade spilling into a forest pool at VOI Ambohimagneva" },
      { src: "images/voi-ambohimagneva-waterfall-split.jpg", alt: "Water sliding down a mossy rock face in two streams at VOI Ambohimagneva" },
      { src: "images/voi-ambohimagneva-river-pool.jpg", alt: "A river pool at VOI Ambohimagneva" },
      { src: "images/voi-ambohimagneva-river-pool-2.jpg", alt: "Another river pool along the VOI Ambohimagneva trail" },
      { src: "images/voi-ambohimagneva-river.jpg", alt: "The river running through VOI Ambohimagneva" },
      { src: "images/voi-ambohimagneva-water-channel.jpg", alt: "A hand-cut wooden water channel on the VOI Ambohimagneva trail" },
      { src: "images/voi-ambohimagneva-forest-view.jpg", alt: "Rainforest interior at VOI Ambohimagneva" },
      { src: "images/voi-ambohimagneva-valley-view.jpg", alt: "View over the valley near VOI Ambohimagneva" },
      { src: "images/voi-ambohimagneva-leaf-tailed-gecko.jpg", alt: "Mossy leaf-tailed gecko camouflaged on a branch at VOI Ambohimagneva" },
      { src: "images/voi-ambohimagneva-frog-species.jpg", alt: "A frog species found at VOI Ambohimagneva" },
      { src: "images/voi-ambohimagneva-frog-species-2.jpg", alt: "A second frog species found at VOI Ambohimagneva" },
      { src: "images/voi-ambohimagneva-tree-frogs.jpg", alt: "Several tree frogs resting together on a branch in front of the waterfall at VOI Ambohimagneva" },
      { src: "images/voi-ambohimagneva-tree-frogs-2.jpg", alt: "The tree frogs' leafy roost in the sun at VOI Ambohimagneva" },
      { src: "images/voi-ambohimagneva-hiking-trail.jpg", alt: "Hiking the trail at VOI Ambohimagneva" },
      { src: "images/voi-ambohimagneva-guide-adrien.jpg", alt: "Guide Adrien on the boardwalk trail at VOI Ambohimagneva" }
    ],
    desc: "A 75-hectare community-managed reserve bordering the national park, governed through a VOI partnership under Madagascar's GELOSE framework, with MNP-certified guide access and Centre ValBio research collaboration. Trails and a river waterfall site are being opened to visitors. Visitor fees go directly to the village and the people who live there.",
    tips: ["Access on foot, roughly 3 km from town", "Contact ahead — visitor access is still being established"],
    contact: { phone: "+261 34 31 153 32", email: "", website: "", social: "" }
  }
];

/* ------------------------------------------------------- 4. ITINERARIES */
const itineraryData = [
  {
    slug: "one-day-highlights",
    badge: "1-DAY HIGHLIGHTS",
    title: "Rainforest & Thermal Bath Day",
    days: 1,
    level: "Easy",
    bestFor: "First visit, tight schedule, RN25 road-trippers",
    parkTicket: "Yes",
    costs: ["park", "guide:Talatakely", "do:station-thermale", "?do:night-walk"],
    desc: "The classic single day: mid-morning lemur tracking on the Talatakely circuit, lunch in the village, and an afternoon soak in the thermal pool.",
    stops: [
      "08:00 — Talatakely circuit with a certified guide (book the night before; the park opens at 07:00)",
      "12:30 — Lunch at Chez Gaspard or the park entrance restaurant",
      "14:30 — Station Thermale public pool",
      "18:30 — Optional guided night walk on the forest edge (you need a car)"
    ]
  },
  {
    slug: "two-day-classic",
    badge: "2-DAY CLASSIC",
    title: "Ranomafana in Two Days",
    days: 2,
    level: "Moderate",
    bestFor: "Most visitors — the recommended minimum stay",
    desc: "One short circuit and one deeper into primary forest, with the thermal springs, a night walk, and the arboretum in between.",
    parkTicket: "Yes, both days",
    costs: ["park", "park", "guide:Talatakely", "guide:Vatoharanana", "do:ranomafana-arboretum", "do:night-walk", "do:hotel-thermal-pools"],
    stops: [
      "Day 1 am — Talatakely circuit",
      "Day 1 pm — Ranomafana Arboretum",
      "Day 1 evening — Guided night walk",
      "Day 2 morning — Vatoharanana circuit into primary forest (3–4 hrs)",
      "Day 2 evening — A soak in Hotel Thermal’s hot-spring pools (book ahead), then dinner at Grenat or Setam Lodge"
    ]
  },
  {
    slug: "three-day-deep",
    badge: "3-DAY IMMERSION",
    title: "Deep Rainforest & Community",
    days: 3,
    level: "Demanding",
    bestFor: "Photographers, naturalists, slow travellers",
    parkTicket: "Yes, days 1–2",
    costs: ["park", "park", "guide:Talatakely", "guide:Valohoaka", "do:centre-valbio-tour", "?do:namorona-kayaking"],
    desc: "Three days lets you reach the quieter forest, meet the people doing the conservation work, and still have a rest afternoon.",
    stops: [
      "Day 1 — Talatakely circuit, then Centre ValBio campus tour (arrange a day ahead)",
      "Day 2 — The Valohoaka trek (5–7 hrs), or the two-day Vohiparara route to the sacred lake",
      "Day 3 am — Cascade Andriamamovoka or Namorona kayaking",
      "Day 3 pm — Studio oloNala and the village artisan market"
    ]
  },
  {
    slug: "birders-two-day",
    badge: "BIRDING",
    title: "Birders' Two Days",
    days: 2,
    level: "Moderate",
    bestFor: "Serious birders — ask for a birding specialist guide (220,000 Ar)",
    parkTicket: "Yes, both days",
    costs: ["park", "park", "specialist", "specialist"],
    desc: "Ranomafana holds most of the eastern rainforest endemics. Two days on the higher circuits gives you a realistic shot at the ground-rollers and asities.",
    stops: [
      "Day 1 — Vohiparara circuit from opening time (07:00), higher-altitude forest",
      "Day 1 pm — Marsh and forest-edge birding near the park boundary",
      "Day 2 — Sahamalaotra / long circuit with the same guide",
      "Both evenings — Early nights, to be at the gate when it opens"
    ]
  },
  {
    slug: "half-day-no-park",
    badge: "HALF DAY · NO PARK TICKET",
    title: "Village, Falls & Springs",
    days: 0.5,
    level: "Easy",
    bestFor: "Travellers passing through, or a rest day between circuits",
    parkTicket: "Not needed",
    costs: ["do:station-thermale", "?do:night-walk"],
    desc: "Everything worth doing in Ranomafana that needs no park entry fee and no certified guide — a good option if you arrive late or leave early.",
    stops: [
      "Morning — Jirama waterfall walk, upriver from the public pool",
      "Midday — Lunch at Manja or Coin d'or",
      "Afternoon — Station Thermale pool and Studio oloNala",
      "Evening — Night walk on the forest edge (no park ticket, but you need a car)"
    ]
  },
  {
    slug: "family-day",
    badge: "FAMILY FRIENDLY",
    title: "A Day With Children",
    days: 1,
    level: "Easy",
    bestFor: "Families with children who won't manage a six-hour circuit",
    parkTicket: "Yes",
    costs: ["park", "guide:Talatakely", "do:ranomafana-arboretum", "do:station-thermale", "do:night-walk"],
    desc: "Short walks, warm water, and animals you can actually count on seeing, sequenced so nobody is hiking through the hottest part of the day.",
    stops: [
      "08:00 — Short Talatakely loop (ask the guide for the two-hour version)",
      "11:00 — Ranomafana Arboretum (feed a chameleon)",
      "13:00 — Thermal pool",
      "18:30 — Night walk — the chameleons are the winner with kids"
    ]
  },
  {
    slug: "rainy-day",
    badge: "RAINY DAY · NO PARK TICKET",
    title: "When It Rains",
    days: 1,
    level: "Easy",
    bestFor: "Wet-season days when the trails are too wet to walk",
    parkTicket: "Not needed",
    costs: ["do:centre-valbio-tour", "do:station-thermale", "?do:thermal-massage", "do:hotel-thermal-pools"],
    desc: "Some wet-season days are too wet for the trails. Spend the morning at the park entrance, indoors with the researchers and artists, then take a taxi-brousse down to the village for the hot springs, warm in any weather.",
    stops: [
      "Morning — Centre ValBio research campus tour (arrange it a day ahead)",
      "Late morning — Studio oloNala and the craft shop by the park entrance",
      "Midday — Lunch at Varibolo Resto, by the park entrance, then a taxi-brousse down to the village",
      "Afternoon — Station Thermale pool, warm in any weather (closed on Tuesdays)",
      "Late afternoon — Optional massage, booked at the Station Thermale ticket counter",
      "Evening — Hotel Thermal’s private hot-spring pools (book ahead)"
    ]
  }
];

/* ----------------------------------------------------------- 5. EVENTS */
const eventData = [
  {
    slug: "artisan-market",
    title: "Weekly Village Artisan Market",
    dayBadge: "SAT",
    monthBadge: "Weekly",
    whenLabel: "Every Saturday · Ranomafana centre",
    recurring: true,
    verified: false,
    desc: "Handwoven basketry, woodcarvings, embroidery and local spices from producers around Ranomafana.",
    date: null
  },
  {
    slug: "cvb-conservation-series",
    title: "Centre ValBio Conservation Series",
    dayBadge: "WED",
    monthBadge: "Weekly",
    whenLabel: "Wednesday evenings · Centre ValBio campus",
    recurring: true,
    verified: false,
    desc: "Presentations on wildlife field research, reforestation and local ecology. Confirm with the campus before turning up.",
    date: null
  },
  {
    slug: "alahamady-be",
    title: "Alahamady Be — Malagasy New Year",
    dayBadge: "MAR",
    monthBadge: "Annual",
    whenLabel: "March · nationwide",
    recurring: true,
    months: [3],
    verified: true,
    desc: "The traditional Malagasy new year, marked with family ceremonies, drumming and communal meals.",
    date: null
  },
  {
    slug: "santabary",
    title: "Santabary — First Rice Harvest",
    dayBadge: "APR",
    monthBadge: "Annual",
    whenLabel: "April–May · highland villages",
    recurring: true,
    months: [4, 5],
    verified: true,
    desc: "The celebration of the first rice of the season, with church services and communal feasts across the surrounding countryside.",
    date: null
  },
  {
    slug: "fete-de-la-musique",
    title: "Fête de la Musique",
    dayBadge: "21",
    monthBadge: "JUN",
    whenLabel: "21 June · nationwide",
    recurring: true,
    months: [6],
    verified: true,
    desc: "Live music in bars, courtyards and public spaces across Madagascar.",
    date: "2027-06-21"
  },
  {
    slug: "independence-day",
    title: "Independence Day — Fetin'ny 26 Jiona",
    dayBadge: "26",
    monthBadge: "JUN",
    whenLabel: "26 June · nationwide",
    recurring: true,
    months: [6],
    verified: true,
    desc: "Madagascar's national day. Expect parades, lantern processions the night before, and most businesses closed.",
    date: "2027-06-26"
  },
  {
    slug: "famadihana-season",
    title: "Famadihana Season",
    dayBadge: "JUN",
    monthBadge: "–SEP",
    whenLabel: "June–September · highland families",
    recurring: true,
    months: [6, 7, 8, 9],
    verified: true,
    desc: "The highland ancestral turning-of-the-bones ceremonies. These are private family occasions — attend only by genuine invitation.",
    date: null
  },
  {
    slug: "world-lemur-festival",
    title: "World Lemur Festival",
    dayBadge: "30",
    monthBadge: "OCT",
    whenLabel: "Friday 30 October 2026 · park and village events",
    recurring: true,
    months: [10],
    verified: true,
    desc: "World Lemur Day, marked around Ranomafana with school programmes, guided walks and conservation events led by local organisations.",
    date: "2026-10-30"
  }
];

/* ------------------------------------------------------------- 6. BLOG */
const blogData = [
  {
    slug: "golden-bamboo-lemur",
    title: "Spotting the Golden Bamboo Lemur",
    category: "Wildlife",
    status: "published",
    img: "images/ranomafana-national-park-lemur-bamboo.jpg",
    excerpt: "The species that saved this forest. Where it lives, when it feeds, and how to give yourself a real chance of seeing one.",
    sample: true,
    body: [
      "In 1986 a lemur nobody had described before was found in the forests above Ranomafana: the golden bamboo lemur. Its discovery is the reason this forest is protected. Ranomafana became Madagascar’s fourth national park in 1991, and a UNESCO World Heritage Site in 2007.",
      "The golden bamboo lemur is critically endangered, and, as its name says, it lives on bamboo. That tells you where to look.",
      "## Where it lives",
      "The Talatakely circuit, the park’s main trail, passes through bamboo forest that is home to groups of golden and greater bamboo lemurs. It takes two to four hours, on a mix of clear paths and rougher cuts through the forest, with some steep climbs and descents.",
      "## When it feeds",
      "The park opens at 07:00. Mid-morning, when the lemurs are awake and settling in to feed, is usually the best time to go in.",
      "## Giving yourself a real chance",
      "Go with a certified guide (international visitors must) and tell them this is the species you most want to see. Animal spotters work the forest and phone your guide when they find lemurs, so you can walk straight to them. A Talatakely walk costs 90,000 Ar per group for the guide, plus park entry."
    ]
  },
  {
    slug: "what-park-fees-cover",
    title: "What Your Park Fees Actually Pay For",
    category: "Practical",
    status: "draft",
    img: "images/ranomafana-national-park-trail.jpg",
    excerpt: "Entry, community tax, guide fee — three separate payments, three different destinations. A plain breakdown of where the money goes.",
    sample: true,
    body: [
      "A day in Ranomafana National Park involves three separate payments, all in Ariary cash: the entry ticket, a community fee, and your guide.",
      "## The three payments",
      "Entry is 55,000 Ar per adult per day, 25,000 Ar for children aged 5 to 12, and free under 5. Malagasy citizens pay 2,000 Ar (adults) and 500 Ar (children). The 5,000 Ar community fee is paid at its own booth. The guide fee is paid once per group and depends on the circuit: 90,000 Ar for Talatakely or Sahamalaotra, 120,000 Ar for Vatoharanana, 150,000 Ar for the Valohoaka trek, and 220,000 Ar for a specialist guide on any circuit.",
      "## Where the money goes",
      "Madagascar National Parks has managed the park since 1991. Income from entrance fees, guided tours and other park activities is often reinvested in maintaining the park, protecting its wildlife and supporting biodiversity research. MNP sends rangers on patrol, builds and maintains boundary markers, firebreaks and watchtowers, and employs local people as guides, escorts, porters, cooks and labourers.",
      "## Why it matters now",
      "Before the COVID-19 pandemic the park welcomed close to 19,000 international visitors a year. Since then it has been closer to 3,500. Every ticket helps restore what was lost."
    ]
  },
  {
    slug: "getting-to-ranomafana",
    title: "Getting to Ranomafana: The RN25 in Plain Terms",
    category: "Practical",
    status: "draft",
    img: "images/voi-ambohimagneva-valley-view.jpg",
    excerpt: "From Fianarantsoa, from Tana, by taxi-brousse or chartered car — real journey times and what the road is like.",
    sample: true,
    body: [
      "Ranomafana sits on the RN25 in south-east Madagascar, 412 km from Antananarivo and 65 km from Fianarantsoa. The only way in is by road, so the question is how much of the journey you want to manage yourself.",
      "## By coach, via Fianarantsoa",
      "Cotisse runs day and night coaches from Antananarivo to Fianarantsoa for 40,000 Ar; the drive takes about 12 hours. The daytime coach arrives after the last buses to Ranomafana, so stay the night (Zomatel and Hotel Vannie are close to the station) and take a regional taxi-brousse in the morning: 7,000 Ar, about two and a half hours.",
      "## Straight through the night",
      "Soatrans’ 13:30 coach to Manakara (65,000 Ar) passes Ranomafana at around 03:00, and you can get off there. Staying at Setam Lodge, Forêt Australe, Au Domnatur or Karibotel? Ask to be dropped outside your hotel.",
      "## By car or by air",
      "A car and driver from Antananarivo costs roughly US$100–300 and takes about 12 hours, stopping where you like: Antsirabe and Ambositra are popular breaks. A charter flight to Fianarantsoa takes about an hour, booked through a travel agency."
    ]
  },
  {
    slug: "when-to-visit",
    title: "When to Visit: Ranomafana Season by Season",
    category: "Practical",
    status: "draft",
    img: "images/voi-ambohimagneva-forest-view.jpg",
    excerpt: "Open all year, but not the same all year: warm, wet months, cooler and drier ones, and the sweet spots in between.",
    sample: true,
    body: [
      "Ranomafana National Park is open all year. What changes with the months is the rain, the cold, and which animals are easiest to find.",
      "## November to April: warm and wet",
      "Daytime temperatures sit around 26°C and it is humid, with highs above 28°C from November to February. About 80% of the year’s rain falls in these months, and January to March is cyclone season, when some days are too wet for the trails.",
      "## May to October: cooler and drier",
      "Days are around 22°C and nights can drop to 10°C. June to August is the cold season, when reptiles and some other animals are harder to find. Drier is relative here: it still rains.",
      "## The sweet spots",
      "April, May, September and November bring mild weather and less rain, with animals active again after the cold months. In October and November many lemurs have babies.",
      "Whatever the month, bring a rain shell and sturdy shoes."
    ]
  },
  {
    slug: "hiring-a-guide",
    title: "Hiring a Guide: What MNP Certification Means",
    category: "Practical",
    status: "draft",
    img: "images/cvb-researcher-guide.jpg",
    excerpt: "Guides are mandatory in the park. How the certification works, what a fair rate is, and how to ask for a specialist.",
    sample: true,
    body: [
      "Nobody walks Ranomafana National Park alone. A certified Madagascar National Parks guide is required for international visitors, and they are the reason you will actually see the animals.",
      "## Finding one",
      "Ask your hotel to arrange a guide, or turn up at the park and choose from the guides working that day. Guides can’t be booked online.",
      "## What it costs",
      "The guide fee is paid once per group, so it costs less each with more people: 90,000 Ar for Talatakely or Sahamalaotra, 120,000 Ar for Vatoharanana and 150,000 Ar for the Valohoaka trek. One guide takes a group of one to four; groups of six or more need at least two. Travelling solo? Ask the park office to pair you with other visitors.",
      "## Specialists",
      "Specialist guides are experts in finding and explaining the park’s birds, plants, or reptiles and amphibians, and cost 220,000 Ar on any circuit. Birders should ask for one by name.",
      "Whoever you go with, tell them about your fitness and any worries: they will adapt the route to suit you."
    ]
  },
  {
    slug: "night-walk-etiquette",
    title: "Night Walk Etiquette",
    category: "Wildlife",
    status: "draft",
    img: "images/satanic-leaf-gecko.jpg",
    excerpt: "Red filters, flash discipline, and why crowding a mouse lemur costs you the sighting anyway.",
    sample: true,
    body: [
      "The park closes at 17:00, but the forest doesn’t. Night walks run along the RN25 at the forest edge, where brown mouse lemurs, chameleons, tree frogs and leaf-tailed geckos come out after dark.",
      "## Getting there",
      "Arrange a night walk with your daytime guide or your hotel. You will need a private car: taxi-brousses stop running regularly after dusk, and walking the road at night is not considered safe. Walks start around 18:30 and last about an hour; expect to pay about 40,000 Ar per person.",
      "## On the walk",
      "Bring a head torch with a red filter and wear long sleeves. Let your guide find the animals and show you where to look, keep your voice low, and give each animal space: a crowded mouse lemur simply disappears, and nobody sees it.",
      "Leaf-tailed geckos are the prize. They look exactly like dead leaves, so you will walk past one unless someone points it out."
    ]
  },
  {
    slug: "what-to-pack",
    title: "What to Pack for a Rainforest Circuit",
    category: "Practical",
    status: "draft",
    img: "images/voi-ambohimagneva-hiking-trail.jpg",
    excerpt: "Steep trails, rain in every season and a cash-only gate. The short list that matters.",
    sample: true,
    body: [
      "Ranomafana’s trails are steep, often wet, and a long way from a shop. The short list that matters:",
      "## For the forest",
      "A rain shell, in every season. Sturdy shoes, because the trails are steep and slippery when wet. Water, and on the long Valohoaka trek, lunch and two litres.",
      "## For after dark",
      "A head torch with a red filter, and long sleeves, for the night walk.",
      "## For the hot springs",
      "Your own towel, and soap if you take a private bath: only hot and cold water are provided. Everyone in the public pool needs a swim cap, which you can buy at the entrance.",
      "## Money",
      "Ariary in cash, in small notes. The park takes cash only, and so do most lodges."
    ]
  },
  {
    slug: "malagasy-dishes",
    title: "Eating in Ranomafana: Dishes Worth Ordering",
    category: "Food",
    status: "draft",
    img: "images/grenat-hotel-restaurant.jpg",
    excerpt: "Rice at every meal, romazava on a cool evening, voanjobory and zebu steak: what to order and what it costs.",
    sample: true,
    body: [
      "Rice comes with almost every meal in Ranomafana, served with a laoka: the dish that goes alongside it. Here is where to start.",
      "## Worth ordering",
      "Romazava, the classic meat-and-greens broth, on a cool evening after the rain. Voanjobory, a stew of Bambara groundnuts: the one at Hotel Manja’s restaurant is exceptional. Zebu steak, at Grenat Hotel’s restaurant among others.",
      "## What things cost",
      "At a local hotely, a plate costs around 10,000–30,000 Ar. Hotel restaurants are mostly 12,000–35,000 Ar for a main, and the set dinners at Chez Gaspard and Setam Lodge are 45,000–50,000 Ar.",
      "Some lodge kitchens cook to order, so ask ahead if you are eating where you are not staying."
    ]
  },
  {
    slug: "thermal-springs-explained",
    title: "The Thermal Springs, Explained",
    category: "Culture",
    status: "draft",
    img: "images/station-thermale-pool.jpg",
    excerpt: "Ranomafana means 'hot water'. Why the springs don't smell of sulphur, and three ways to get in.",
    sample: true,
    body: [
      "Ranomafana means “hot water” in Malagasy, and the village is named for its springs.",
      "## No sulphur smell",
      "The town sits above ancient geothermal vents. Their heat warms fresh water near the surface, rather than pumping hot water up from deep below, so the water you swim in has none of the sulphur smell of most hot springs.",
      "## Three ways in",
      "The public Station Thermale, across the Namorona from the football field, has an open-air pool and private bath rooms: 10,000 Ar each (residents 2,000 Ar). The pool is closed on Tuesdays. Massages are booked at the same ticket booth. For something closer to a familiar hot tub, Hotel Thermal, a separate business, rents three private hot-spring pools for 20,000 Ar per person, late evening included."
    ]
  },
  {
    slug: "how-voi-works",
    title: "Community Conservation: How a VOI Works",
    category: "Conservation",
    status: "draft",
    img: "images/voi-ambohimagneva-guide-adrien.jpg",
    excerpt: "Madagascar's GELOSE framework hands forest management to local associations. What that looks like on the ground near Ranomafana.",
    sample: true,
    body: [
      "A VOI is a local community association that has taken over the management of its forest from the state, under Madagascar’s community forest-management law, GELOSE. Around Ranomafana, two VOIs welcome visitors.",
      "## VOI Mitsinjo, Ambatolahy",
      "Run by VOI Ambatolahy, this community-managed forest reserve offers day and night walks with community guides, and the fees go straight to the village rather than to the national park. No park ticket is needed.",
      "## VOI Ambohimagneva",
      "A 75-hectare reserve bordering the national park, about 3 km from town on foot. Trails and a river waterfall are being opened to visitors, with guides certified by Madagascar National Parks and research links to Centre ValBio. Access is still being set up, so ask before you go.",
      "Visiting a community reserve puts money directly into the hands of the people who look after the forest."
    ]
  }
];

/* Expose everything as one object too, for anything that prefers a namespace
   (a future CMS import, a build script, or a second page). */
const RANOMAFANA_DATA = {
  stays: stayData,
  eat: eatData,
  do: doData,
  itineraries: itineraryData,
  events: eventData,
  blog: blogData
};
if (typeof window !== "undefined") window.RANOMAFANA_DATA = RANOMAFANA_DATA;
if (typeof module !== "undefined" && module.exports) module.exports = RANOMAFANA_DATA;
