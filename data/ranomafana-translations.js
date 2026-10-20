/* =========================================================================
   Ranomafana — listing text in French, German and Malagasy
   -------------------------------------------------------------------------
   index.html loads this after ranomafana-data.js. When a visitor picks
   Français, Deutsch or Malagasy, each listing's text below replaces the
   English from the data file. Interface text (buttons, headings, page text)
   is not here: it lives in the translations dictionary in index.html.

   LISTING_TRANSLATIONS[collection][slug][field] = { en, fr, de, mg }

   "en" is the English the translation was made from. If the English in
   ranomafana-data.js changes (a new price, say), it no longer matches, and
   the site shows the new English in every language until the translations
   are updated. npm run check lists any field in that state. To update one,
   copy the new English into "en" and rewrite fr, de and mg to match.

   A listing or field with no entry here simply shows its English.
   The Malagasy was written without a native speaker and should be checked.
   ========================================================================= */

const LISTING_TRANSLATIONS = {
  "stays": {
    "centre-valbio": {
      "desc": {
        "en": "Modern research-station lodging beside Ranomafana National Park: 48 dorm beds (quad and six-bed rooms) plus 3 en-suite private rooms, Starlink Wi-Fi, and three-course meals. All visits arranged at least one day in advance.",
        "fr": "Hébergement moderne de station de recherche, à côté du parc national de Ranomafana : 48 lits en dortoir (chambres de quatre et de six) et 3 chambres privées avec salle de bain, Wi-Fi Starlink et repas de trois plats. Toutes les visites se réservent au moins un jour à l’avance.",
        "de": "Moderne Unterkunft einer Forschungsstation direkt am Nationalpark Ranomafana: 48 Schlafsaalbetten (Vier- und Sechsbettzimmer) und 3 Privatzimmer mit eigenem Bad, Starlink-WLAN und Drei-Gänge-Menüs. Alle Besuche mindestens einen Tag im Voraus vereinbaren.",
        "mg": "Toeram-pandraisana vahiny maoderina ao amin'ny foibem-pikarohana, eo akaikin'ny valan-javaboahary Ranomafana: fandriana 48 ao amin'ny efitrano iombonana (efitrano efatra sy enina olona) ary efitrano manokana 3 misy efitra fandroana, Wi-Fi Starlink, ary sakafo misy lovia telo. Tsy maintsy alahatra iray andro mialoha farafahakeliny ny fitsidihana rehetra."
      },
      "price": {
        "en": "Contact for research / guest rates",
        "fr": "Nous contacter pour les tarifs chercheurs / visiteurs",
        "de": "Preise für Forschende / Gäste auf Anfrage",
        "mg": "Mifandraisa aminay ho an'ny saran'ny mpikaroka / vahiny"
      },
      "contact.note": {
        "en": "US office +1 (631) 632-3273. Arrange all tours and stays one day ahead.",
        "fr": "Bureau aux États-Unis : +1 (631) 632-3273. Réservez visites et séjours un jour à l’avance.",
        "de": "Büro in den USA: +1 (631) 632-3273. Touren und Aufenthalte einen Tag im Voraus vereinbaren.",
        "mg": "Birao any Etazonia: +1 (631) 632-3273. Alaharo iray andro mialoha ny fitsangatsanganana sy ny fijanonana rehetra."
      },
      "gallery[].alt": {
        "en": [
          "Aerial view of Centre ValBio",
          "The Centre ValBio buildings from the air, beside the road with the forest behind",
          "Tables on the terrace outside the conference room at dusk, Centre ValBio",
          "Visitors at the Centre ValBio entrance",
          "Centre ValBio researcher and guide",
          "Community event at Centre ValBio",
          "Centre ValBio team",
          "Centre ValBio staff in green team shirts beside a Centre ValBio sign",
          "World Lemur Day with Centre ValBio: staff and guests with a ruffed lemur mascot",
          "Satanic leaf-tailed gecko near Centre ValBio"
        ],
        "fr": [
          "Centre ValBio vu du ciel",
          "Les bâtiments du Centre ValBio vus du ciel, au bord de la route, la forêt derrière",
          "Des tables sur la terrasse devant la salle de conférence, au crépuscule, Centre ValBio",
          "Des visiteurs à l’entrée du Centre ValBio",
          "Un membre de l’équipe de recherche et un guide du Centre ValBio",
          "Un événement communautaire au Centre ValBio",
          "L’équipe du Centre ValBio",
          "Le personnel du Centre ValBio en polos verts, à côté d’un panneau du Centre ValBio",
          "La Journée mondiale des lémuriens avec le Centre ValBio : personnel et invités avec une mascotte de vari",
          "Un uroplate fantastique près du Centre ValBio"
        ],
        "de": [
          "Centre ValBio aus der Luft",
          "Die Gebäude des Centre ValBio aus der Luft, an der Straße, dahinter der Wald",
          "Tische auf der Terrasse vor dem Konferenzraum in der Abenddämmerung, Centre ValBio",
          "Besucher am Eingang des Centre ValBio",
          "Ein Mitglied des Forschungsteams und ein Guide des Centre ValBio",
          "Gemeindeveranstaltung im Centre ValBio",
          "Das Team des Centre ValBio",
          "Mitarbeitende des Centre ValBio in grünen Teamshirts neben einem Centre-ValBio-Schild",
          "Welt-Lemuren-Tag mit dem Centre ValBio: Mitarbeitende und Gäste mit einem Vari-Maskottchen",
          "Satanischer Plattschwanzgecko nahe dem Centre ValBio"
        ],
        "mg": [
          "Centre ValBio jerena avy eny ambony",
          "Ireo tranon'ny Centre ValBio jerena avy eny ambony, eo amoron-dalana, misy ala ao ambadika",
          "Latabatra eo amin'ny lavarangana eo anoloan'ny efitrano fivoriana, amin'ny takariva, Centre ValBio",
          "Mpitsidika eo amin'ny fidirana ao amin'ny Centre ValBio",
          "Mpikaroka sy mpitari-dalana ao amin'ny Centre ValBio",
          "Hetsika iarahan'ny fiaraha-monina ao amin'ny Centre ValBio",
          "Ny ekipan'ny Centre ValBio",
          "Mpiasan'ny Centre ValBio manao akanjo maitso, eo akaikin'ny takelaka Centre ValBio",
          "Andro iraisam-pirenena ho an'ny gidro niaraka tamin'ny Centre ValBio: mpiasa sy vahiny miaraka amin'ny saribakoly varikandana",
          "Androngo rambo ravina (Uroplatus phantasticus) akaikin'ny Centre ValBio"
        ]
      }
    },
    "setam-lodge": {
      "desc": {
        "en": "Twenty bungalows on a ridge an 800 m walk from the park entrance — the closest place to stay — each looking out over the rainforest canopy, with private hot-water bathrooms and a 70-seat bar and restaurant. The largest and most established lodge in Ranomafana.",
        "fr": "Vingt bungalows sur une crête, à 800 m à pied de l’entrée du parc — l’hébergement le plus proche —, chacun avec vue sur la canopée, salle de bain privée avec eau chaude, et un bar-restaurant de 70 couverts. Le lodge le plus grand et le plus ancien de Ranomafana.",
        "de": "Zwanzig Bungalows auf einem Bergrücken, 800 m zu Fuß vom Parkeingang – die nächstgelegene Unterkunft –, jeder mit Blick über das Blätterdach des Regenwalds, eigenem Bad mit Warmwasser und einem Bar-Restaurant mit 70 Plätzen. Die größte und etablierteste Lodge in Ranomafana.",
        "mg": "Bungalow roapolo eo ambony havoana, 800 m an-tongotra avy amin'ny fidirana amin'ny valan-javaboahary — ny toerana hatoriana akaiky indrindra —, samy manana fijery ny tampon'ny ala mando, efitra fandroana manokana misy rano mafana, ary bar sy trano fisakafoana misy toerana 70. Ny lodge lehibe indrindra sady efa ela indrindra eto Ranomafana."
      },
      "price": {
        "en": "160,000–200,000 Ar / night",
        "fr": "160 000–200 000 Ar / nuit",
        "de": "160.000–200.000 Ar / Nacht",
        "mg": "160 000–200 000 Ar / alina"
      },
      "wifiNote": {
        "en": "In the restaurant",
        "fr": "Au restaurant",
        "de": "Im Restaurant",
        "mg": "Ao amin'ny trano fisakafoana"
      },
      "rooms": {
        "en": [
          { "type": "Double", "price": "160,000 Ar" },
          { "type": "Twin", "price": "160,000 Ar" },
          { "type": "Triple (1 double + 1 single bed)", "price": "180,000 Ar" },
          { "type": "Family (1 double + 2 single beds)", "price": "200,000 Ar" }
        ],
        "fr": [
          { "type": "Double", "price": "160 000 Ar" },
          { "type": "Lits jumeaux", "price": "160 000 Ar" },
          { "type": "Triple (1 lit double + 1 lit simple)", "price": "180 000 Ar" },
          { "type": "Familiale (1 lit double + 2 lits simples)", "price": "200 000 Ar" }
        ],
        "de": [
          { "type": "Doppelzimmer", "price": "160.000 Ar" },
          { "type": "Zweibettzimmer", "price": "160.000 Ar" },
          { "type": "Dreibettzimmer (1 Doppelbett + 1 Einzelbett)", "price": "180.000 Ar" },
          { "type": "Familienzimmer (1 Doppelbett + 2 Einzelbetten)", "price": "200.000 Ar" }
        ],
        "mg": [
          { "type": "Fandriana roa olona", "price": "160 000 Ar" },
          { "type": "Fandriana kely roa", "price": "160 000 Ar" },
          { "type": "Telo olona (fandriana roa olona 1 + fandriana kely 1)", "price": "180 000 Ar" },
          { "type": "Fianakaviana (fandriana roa olona 1 + fandriana kely 2)", "price": "200 000 Ar" }
        ]
      },
      "meals": {
        "en": ["Breakfast: 25,000 Ar continental, 30,000 Ar American", "Lunch or dinner: 50,000 Ar set price"],
        "fr": [
          "Petit-déjeuner : 25 000 Ar continental, 30 000 Ar américain",
          "Déjeuner ou dîner : menu à 50 000 Ar"
        ],
        "de": [
          "Frühstück: 25.000 Ar kontinental, 30.000 Ar amerikanisch",
          "Mittag- oder Abendessen: Menü für 50.000 Ar"
        ],
        "mg": [
          "Sakafo maraina: 25 000 Ar kaontinantaly, 30 000 Ar amerikanina",
          "Sakafo antoandro na hariva: sakafo voalamina 50 000 Ar"
        ]
      },
      "features": {
        "en": [
          "Closest stay to the park entrance, an 800 m walk",
          "Fan or heater in the rooms",
          "Look for giraffe-necked weevils in the grounds"
        ],
        "fr": [
          "L’hébergement le plus proche de l’entrée du parc, à 800 m à pied",
          "Ventilateur ou chauffage dans les chambres",
          "Cherchez les charançons girafes dans le jardin"
        ],
        "de": [
          "Die nächstgelegene Unterkunft zum Parkeingang, 800 m zu Fuß",
          "Ventilator oder Heizung in den Zimmern",
          "Halten Sie auf dem Gelände Ausschau nach Giraffenhalskäfern"
        ],
        "mg": [
          "Ny toerana hatoriana akaiky indrindra ny fidirana amin'ny valan-javaboahary, 800 m an-tongotra",
          "Vantilatera na fanafanana ao amin'ny efitrano",
          "Tadiavo eny an-tokotany ireo voangory girafy"
        ]
      },
      "contact.note": {
        "en": "Same number on WhatsApp. Reservations Monday–Friday, 08:00–17:00.",
        "fr": "Même numéro sur WhatsApp. Réservations du lundi au vendredi, 08:00–17:00.",
        "de": "Dieselbe Nummer auch über WhatsApp. Reservierungen Montag–Freitag, 08:00–17:00.",
        "mg": "Io ihany koa ny laharana WhatsApp. Famandrihana Alatsinainy–Zoma, 08:00–17:00."
      },
      "gallery[].alt": {
        "en": [
          "Aerial view of Setam Lodge",
          "Entrance path at Setam Lodge",
          "Dining hall at Setam Lodge",
          "Terrace view at Setam Lodge"
        ],
        "fr": [
          "Setam Lodge vu du ciel",
          "Setam Lodge : l’allée d’entrée",
          "Setam Lodge : la salle à manger",
          "Setam Lodge : la vue depuis la terrasse"
        ],
        "de": [
          "Setam Lodge aus der Luft",
          "Setam Lodge: der Weg zum Eingang",
          "Setam Lodge: der Speisesaal",
          "Setam Lodge: Blick von der Terrasse"
        ],
        "mg": [
          "Setam Lodge jerena avy eny ambony",
          "Setam Lodge: ny lalana fidirana",
          "Setam Lodge: ny efitrano fisakafoana",
          "Setam Lodge: ny fijery avy eo amin'ny terasy"
        ]
      }
    },
    "foret-australe": {
      "desc": {
        "en": "Eco-lodge at Ambatolahy immersed in nature, with rustic bungalows along the Namorona River near Ranomafana National Park, a private walking circuit, and lemurs in the hotel's own trees.",
        "fr": "Écolodge à Ambatolahy en pleine nature, avec des bungalows rustiques au bord de la Namorona près du parc national de Ranomafana, un circuit de promenade privé et des lémuriens dans les arbres de l’hôtel.",
        "de": "Öko-Lodge in Ambatolahy mitten in der Natur, mit rustikalen Bungalows am Fluss Namorona nahe dem Nationalpark Ranomafana, einem eigenen Rundweg und Lemuren in den Bäumen des Hotels.",
        "mg": "Eco-lodge ao Ambatolahy eo afovoan'ny zavaboary, misy bungalow tsotra eo amoron'ny renirano Namorona akaikin'ny valan-javaboahary Ranomafana, lalana fitsangatsanganana manokana, ary gidro eny amin'ireo hazon'ny hotely."
      },
      "price": {
        "en": "60,000–80,000 Ar / night",
        "fr": "60 000–80 000 Ar / nuit",
        "de": "60.000–80.000 Ar / Nacht",
        "mg": "60 000–80 000 Ar / alina"
      },
      "wifiNote": { "en": "In the rooms", "fr": "Dans les chambres", "de": "In den Zimmern", "mg": "Ao amin'ny efitrano" },
      "rooms": {
        "en": [
          { "type": "Double", "price": "60,000 Ar" },
          { "type": "Family (1 double + 2 single beds)", "price": "80,000 Ar" }
        ],
        "fr": [
          { "type": "Double", "price": "60 000 Ar" },
          { "type": "Familiale (1 lit double + 2 lits simples)", "price": "80 000 Ar" }
        ],
        "de": [
          { "type": "Doppelzimmer", "price": "60.000 Ar" },
          { "type": "Familienzimmer (1 Doppelbett + 2 Einzelbetten)", "price": "80.000 Ar" }
        ],
        "mg": [
          { "type": "Fandriana roa olona", "price": "60 000 Ar" },
          { "type": "Fianakaviana (fandriana roa olona 1 + fandriana kely 2)", "price": "80 000 Ar" }
        ]
      },
      "meals": {
        "en": ["Breakfast: 10,000 Ar", "Lunch or dinner: 20,000–25,000 Ar"],
        "fr": ["Petit-déjeuner : 10 000 Ar", "Déjeuner ou dîner : 20 000–25 000 Ar"],
        "de": ["Frühstück: 10.000 Ar", "Mittag- oder Abendessen: 20.000–25.000 Ar"],
        "mg": ["Sakafo maraina: 10 000 Ar", "Sakafo antoandro na hariva: 20 000–25 000 Ar"]
      },
      "features": {
        "en": ["Private walking circuit in the grounds", "Lemurs in the hotel's trees"],
        "fr": ["Circuit de promenade privé dans le domaine", "Des lémuriens dans les arbres de l’hôtel"],
        "de": ["Eigener Rundweg auf dem Gelände", "Lemuren in den Bäumen des Hotels"],
        "mg": ["Lalana fitsangatsanganana manokana ao an-tokotany", "Gidro eny amin'ireo hazon'ny hotely"]
      },
      "gallery[].alt": {
        "en": [
          "Forêt Australe exterior",
          "Room at Forêt Australe",
          "Landscaping at Forêt Australe",
          "Reception at Forêt Australe"
        ],
        "fr": [
          "Forêt Australe : vue extérieure",
          "Forêt Australe : une chambre",
          "Forêt Australe : les jardins",
          "Forêt Australe : la réception"
        ],
        "de": [
          "Forêt Australe: Außenansicht",
          "Forêt Australe: ein Zimmer",
          "Forêt Australe: die Gartenanlage",
          "Forêt Australe: die Rezeption"
        ],
        "mg": [
          "Forêt Australe: ny ivelany",
          "Forêt Australe: efitrano iray",
          "Forêt Australe: ny zaridaina",
          "Forêt Australe: ny fandraisana vahiny"
        ]
      }
    },
    "au-domnatur": {
      "desc": {
        "en": "Quiet nature lodge 2 km above Ranomafana, with comfortable bungalows and rooms amid lush vegetation, canopy views, waterfalls in the grounds, a bar and an on-site restaurant. Previously known as Domaine Nature.",
        "fr": "Lodge nature au calme, 2 km au-dessus de Ranomafana, avec des bungalows et des chambres confortables dans une végétation luxuriante, vue sur la canopée, des cascades dans le domaine, un bar et un restaurant sur place. Anciennement Domaine Nature.",
        "de": "Ruhige Natur-Lodge 2 km oberhalb von Ranomafana, mit komfortablen Bungalows und Zimmern inmitten üppiger Vegetation, Blick auf das Blätterdach, Wasserfällen auf dem Gelände, einer Bar und einem eigenen Restaurant. Früher bekannt als Domaine Nature.",
        "mg": "Lodge mangina eo afovoan'ny zavaboary, 2 km ambonin'i Ranomafana, misy bungalow sy efitrano mahafinaritra eo anivon'ny zava-maniry maitso, fijery ny tampon'ny ala, riandrano ao an-tokotany, bar ary trano fisakafoana. Domaine Nature no anarany taloha."
      },
      "price": {
        "en": "120,000–210,000 Ar / night",
        "fr": "120 000–210 000 Ar / nuit",
        "de": "120.000–210.000 Ar / Nacht",
        "mg": "120 000–210 000 Ar / alina"
      },
      "wifiNote": {
        "en": "In the restaurant",
        "fr": "Au restaurant",
        "de": "Im Restaurant",
        "mg": "Ao amin'ny trano fisakafoana"
      },
      "rooms": {
        "en": [
          { "type": "Single", "price": "120,000–140,000 Ar" },
          { "type": "Double", "price": "160,000–180,000 Ar" },
          { "type": "Double suite", "price": "180,000–210,000 Ar" },
          { "type": "Family (1 double + 1 single bed)", "price": "160,000–190,000 Ar" },
          { "type": "Family (1 double + 2 single beds)", "price": "180,000–210,000 Ar" }
        ],
        "fr": [
          { "type": "Simple", "price": "120 000–140 000 Ar" },
          { "type": "Double", "price": "160 000–180 000 Ar" },
          { "type": "Suite double", "price": "180 000–210 000 Ar" },
          { "type": "Familiale (1 lit double + 1 lit simple)", "price": "160 000–190 000 Ar" },
          { "type": "Familiale (1 lit double + 2 lits simples)", "price": "180 000–210 000 Ar" }
        ],
        "de": [
          { "type": "Einzelzimmer", "price": "120.000–140.000 Ar" },
          { "type": "Doppelzimmer", "price": "160.000–180.000 Ar" },
          { "type": "Doppelsuite", "price": "180.000–210.000 Ar" },
          { "type": "Familienzimmer (1 Doppelbett + 1 Einzelbett)", "price": "160.000–190.000 Ar" },
          { "type": "Familienzimmer (1 Doppelbett + 2 Einzelbetten)", "price": "180.000–210.000 Ar" }
        ],
        "mg": [
          { "type": "Olona iray", "price": "120 000–140 000 Ar" },
          { "type": "Fandriana roa olona", "price": "160 000–180 000 Ar" },
          { "type": "Suite roa olona", "price": "180 000–210 000 Ar" },
          { "type": "Fianakaviana (fandriana roa olona 1 + fandriana kely 1)", "price": "160 000–190 000 Ar" },
          { "type": "Fianakaviana (fandriana roa olona 1 + fandriana kely 2)", "price": "180 000–210 000 Ar" }
        ]
      },
      "meals": {
        "en": ["Breakfast: 20,000 Ar continental, 25,000–30,000 Ar American", "Lunch or dinner: 40,000–50,000 Ar"],
        "fr": [
          "Petit-déjeuner : 20 000 Ar continental, 25 000–30 000 Ar américain",
          "Déjeuner ou dîner : 40 000–50 000 Ar"
        ],
        "de": [
          "Frühstück: 20.000 Ar kontinental, 25.000–30.000 Ar amerikanisch",
          "Mittag- oder Abendessen: 40.000–50.000 Ar"
        ],
        "mg": [
          "Sakafo maraina: 20 000 Ar kaontinantaly, 25 000–30 000 Ar amerikanina",
          "Sakafo antoandro na hariva: 40 000–50 000 Ar"
        ]
      },
      "features": {
        "en": ["Waterfalls in the grounds", "Bar", "A swimming pool is nearly finished"],
        "fr": ["Des cascades dans le domaine", "Bar", "Une piscine presque terminée"],
        "de": ["Wasserfälle auf dem Gelände", "Bar", "Ein Schwimmbad ist fast fertig"],
        "mg": ["Riandrano ao an-tokotany", "Bar", "Efa ho vita ny dobo filomanosana"]
      },
      "contact.note": {
        "en": "The first two numbers are on WhatsApp. Also bookable on Hotels.com and Expedia.",
        "fr": "Les deux premiers numéros sont sur WhatsApp. Réservable aussi sur Hotels.com et Expedia.",
        "de": "Die ersten beiden Nummern sind auf WhatsApp. Auch über Hotels.com und Expedia buchbar.",
        "mg": "Ao amin'ny WhatsApp ireo laharana roa voalohany. Azo amandrihana ihany koa amin'ny Hotels.com sy Expedia."
      },
      "gallery[].alt": {
        "en": [
          "Au Domnatur exterior",
          "Restaurant at Au Domnatur",
          "Room at Au Domnatur",
          "Forest view from Au Domnatur",
          "Nature view at Au Domnatur"
        ],
        "fr": [
          "Au Domnatur : vue extérieure",
          "Au Domnatur : le restaurant",
          "Au Domnatur : une chambre",
          "Au Domnatur : vue sur la forêt",
          "Au Domnatur : la nature alentour"
        ],
        "de": [
          "Au Domnatur: Außenansicht",
          "Au Domnatur: das Restaurant",
          "Au Domnatur: ein Zimmer",
          "Au Domnatur: Blick auf den Wald",
          "Au Domnatur: die Natur ringsum"
        ],
        "mg": [
          "Au Domnatur: ny ivelany",
          "Au Domnatur: ny trano fisakafoana",
          "Au Domnatur: efitrano iray",
          "Au Domnatur: fijery ny ala",
          "Au Domnatur: ny zavaboary manodidina"
        ]
      }
    },
    "hotel-thermal": {
      "desc": {
        "en": "Three-star hotel beside the thermal springs, run by Association Le Relais Madagascar. Twenty-one air-conditioned rooms (2 single, 7 twin, 12 double) with hot water, satellite TV, Wi-Fi and safes, a 60-seat restaurant terrace, and three private hot-spring tubs of its own, plus a spa, gym and bar.",
        "fr": "Hôtel trois étoiles à côté des sources thermales, géré par l’Association Le Relais Madagascar. Vingt et une chambres climatisées (2 simples, 7 à lits jumeaux, 12 doubles) avec eau chaude, télévision par satellite, Wi-Fi et coffre-fort, une terrasse-restaurant de 60 couverts et trois bassins privés d’eau thermale, ainsi qu’un spa, une salle de sport et un bar.",
        "de": "Drei-Sterne-Hotel neben den Thermalquellen, betrieben von der Association Le Relais Madagascar. Einundzwanzig klimatisierte Zimmer (2 Einzel-, 7 Zweibett-, 12 Doppelzimmer) mit Warmwasser, Satelliten-TV, WLAN und Safe, eine Restaurantterrasse mit 60 Plätzen und drei eigene Thermalbecken, dazu Spa, Fitnessraum und Bar.",
        "mg": "Hotely kintana telo eo akaikin'ny loharano mafana, tantanan'ny Association Le Relais Madagascar. Efitrano 21 misy mpanamory rivotra (2 ho an'olona iray, 7 misy fandriana kely roa, 12 misy fandriana roa olona) misy rano mafana, fahitalavitra zanabolana, Wi-Fi ary kitapom-bola fiarovana, terasy fisakafoana misy toerana 60, ary dobo rano mafana manokana telo, miampy spa, efitrano fanatanjahantena ary bar."
      },
      "price": {
        "en": "270,000–350,000 Ar / night",
        "fr": "270 000–350 000 Ar / nuit",
        "de": "270.000–350.000 Ar / Nacht",
        "mg": "270 000–350 000 Ar / alina"
      },
      "wifiNote": { "en": "In the rooms", "fr": "Dans les chambres", "de": "In den Zimmern", "mg": "Ao amin'ny efitrano" },
      "rooms": {
        "en": [
          { "type": "Single", "price": "270,000 Ar low season · 300,000 Ar high season" },
          { "type": "Double or twin", "price": "300,000 Ar low season · 350,000 Ar high season" },
          { "type": "Extra bed", "price": "50,000 Ar" }
        ],
        "fr": [
          { "type": "Simple", "price": "270 000 Ar en basse saison · 300 000 Ar en haute saison" },
          {
            "type": "Double ou lits jumeaux",
            "price": "300 000 Ar en basse saison · 350 000 Ar en haute saison"
          },
          { "type": "Lit supplémentaire", "price": "50 000 Ar" }
        ],
        "de": [
          { "type": "Einzelzimmer", "price": "270.000 Ar Nebensaison · 300.000 Ar Hauptsaison" },
          {
            "type": "Doppel- oder Zweibettzimmer",
            "price": "300.000 Ar Nebensaison · 350.000 Ar Hauptsaison"
          },
          { "type": "Zusatzbett", "price": "50.000 Ar" }
        ],
        "mg": [
          {
            "type": "Olona iray",
            "price": "270 000 Ar amin'ny fotoana tsy be mpizahatany · 300 000 Ar amin'ny fotoana be mpizahatany"
          },
          {
            "type": "Fandriana roa olona na fandriana kely roa",
            "price": "300 000 Ar amin'ny fotoana tsy be mpizahatany · 350 000 Ar amin'ny fotoana be mpizahatany"
          },
          { "type": "Fandriana fanampiny", "price": "50 000 Ar" }
        ]
      },
      "features": {
        "en": [
          "Three hot-spring tubs for up to 8 people each, open to non-residents by booking",
          "Spa with massages, and a gym",
          "Bar with a wide choice of rhum arrangé",
          "Nature walk and river access"
        ],
        "fr": [
          "Trois bassins d’eau thermale pour 8 personnes chacun, ouverts aux non-résidents sur réservation",
          "Spa avec massages, et salle de sport",
          "Bar avec un grand choix de rhums arrangés",
          "Sentier nature et accès à la rivière"
        ],
        "de": [
          "Drei Thermalbecken für je bis zu 8 Personen, nach Reservierung auch für externe Gäste",
          "Spa mit Massagen und ein Fitnessraum",
          "Bar mit großer Auswahl an Rhum arrangé",
          "Naturpfad und Zugang zum Fluss"
        ],
        "mg": [
          "Dobo rano mafana telo, samy ho an'olona 8 hatramin'ny farany, misokatra ho an'ny vahiny tsy mipetraka eo raha mamandrika",
          "Spa misy fanorana, ary efitrano fanatanjahantena",
          "Bar misy karazana rhum arrangé maro",
          "Lalana an'ala sy fidinana amin'ny renirano"
        ]
      },
      "ratesNote": {
        "en": "High season runs April to November.",
        "fr": "La haute saison va d’avril à novembre.",
        "de": "Die Hauptsaison dauert von April bis November.",
        "mg": "Manomboka amin'ny Aprily ka hatramin'ny Novambra ny fotoana be mpizahatany."
      },
      "contact.note": {
        "en": "63 km from Fianarantsoa.",
        "fr": "À 63 km de Fianarantsoa.",
        "de": "63 km von Fianarantsoa.",
        "mg": "63 km miala an'i Fianarantsoa."
      },
      "gallery[].alt": {
        "en": [
          "Hotel Thermal exterior",
          "Aerial view of Hotel Thermal and the thermal complex",
          "Bedroom at Hotel Thermal",
          "Garden at Hotel Thermal",
          "Landscaping at Hotel Thermal"
        ],
        "fr": [
          "Hotel Thermal : vue extérieure",
          "L’Hôtel Thermal et le complexe thermal vus du ciel",
          "Hotel Thermal : une chambre",
          "Hotel Thermal : le jardin",
          "Hotel Thermal : les jardins"
        ],
        "de": [
          "Hotel Thermal: Außenansicht",
          "Hotel Thermal und die Thermalanlage aus der Luft",
          "Hotel Thermal: ein Zimmer",
          "Hotel Thermal: der Garten",
          "Hotel Thermal: die Gartenanlage"
        ],
        "mg": [
          "Hotel Thermal: ny ivelany",
          "Ny Hotel Thermal sy ny toeram-pandroana rano mafana jerena avy eny ambony",
          "Hotel Thermal: efitrano iray",
          "Hotel Thermal: ny zaridaina",
          "Hotel Thermal: ny zaridaina"
        ]
      }
    },
    "centrest-sejour": {
      "desc": {
        "en": "Mid-range hotel at the entrance to Ranomafana village, with spacious rooms, private bungalows, a swimming pool, sports courts and Malagasy and French dining. Registered with the Ministry of Tourism.",
        "fr": "Hôtel de milieu de gamme à l’entrée du village de Ranomafana, avec des chambres spacieuses, des bungalows privés, une piscine, des terrains de sport et une cuisine malgache et française. Enregistré auprès du ministère du Tourisme.",
        "de": "Mittelklassehotel am Ortseingang von Ranomafana, mit geräumigen Zimmern, eigenen Bungalows, Schwimmbad, Sportplätzen und madagassischer und französischer Küche. Beim Tourismusministerium registriert.",
        "mg": "Hotely antonony eo amin'ny fidirana ao an-tanànan'i Ranomafana, misy efitrano malalaka, bungalow manokana, dobo filomanosana, kianja fanatanjahantena, ary sakafo malagasy sy frantsay. Voasoratra ao amin'ny Minisiteran'ny Fizahantany."
      },
      "price": {
        "en": "165,000–220,000 Ar / night",
        "fr": "165 000–220 000 Ar / nuit",
        "de": "165.000–220.000 Ar / Nacht",
        "mg": "165 000–220 000 Ar / alina"
      },
      "wifiNote": {
        "en": "In the restaurant",
        "fr": "Au restaurant",
        "de": "Im Restaurant",
        "mg": "Ao amin'ny trano fisakafoana"
      },
      "rooms": {
        "en": [
          { "type": "Double", "price": "165,000 Ar" },
          { "type": "Double bungalow", "price": "170,000 Ar" },
          { "type": "Triple", "price": "190,000 Ar" },
          { "type": "Family (1 double + 2 single beds)", "price": "220,000 Ar" }
        ],
        "fr": [
          { "type": "Double", "price": "165 000 Ar" },
          { "type": "Bungalow double", "price": "170 000 Ar" },
          { "type": "Triple", "price": "190 000 Ar" },
          { "type": "Familiale (1 lit double + 2 lits simples)", "price": "220 000 Ar" }
        ],
        "de": [
          { "type": "Doppelzimmer", "price": "165.000 Ar" },
          { "type": "Doppelbungalow", "price": "170.000 Ar" },
          { "type": "Dreibettzimmer", "price": "190.000 Ar" },
          { "type": "Familienzimmer (1 Doppelbett + 2 Einzelbetten)", "price": "220.000 Ar" }
        ],
        "mg": [
          { "type": "Fandriana roa olona", "price": "165 000 Ar" },
          { "type": "Bungalow roa olona", "price": "170 000 Ar" },
          { "type": "Telo olona", "price": "190 000 Ar" },
          { "type": "Fianakaviana (fandriana roa olona 1 + fandriana kely 2)", "price": "220 000 Ar" }
        ]
      },
      "meals": {
        "en": ["Breakfast: 25,000–30,000 Ar (continental or American)", "Lunch or dinner: from 40,000 Ar"],
        "fr": [
          "Petit-déjeuner : 25 000–30 000 Ar (continental ou américain)",
          "Déjeuner ou dîner : à partir de 40 000 Ar"
        ],
        "de": [
          "Frühstück: 25.000–30.000 Ar (kontinental oder amerikanisch)",
          "Mittag- oder Abendessen: ab 40.000 Ar"
        ],
        "mg": [
          "Sakafo maraina: 25 000–30 000 Ar (kaontinantaly na amerikanina)",
          "Sakafo antoandro na hariva: manomboka amin'ny 40 000 Ar"
        ]
      },
      "features": {
        "en": ["Swimming pool and pool area", "Basketball and bocce courts", "Billiards"],
        "fr": ["Piscine et espace piscine", "Terrains de basket et de pétanque", "Billard"],
        "de": ["Schwimmbad mit Liegebereich", "Basketball- und Boccia-Platz", "Billard"],
        "mg": ["Dobo filomanosana sy ny manodidina azy", "Kianja basikety sy petanka", "Biliara"]
      },
      "ratesNote": {
        "en": "Breakfast is included.",
        "fr": "Petit-déjeuner inclus.",
        "de": "Frühstück inklusive.",
        "mg": "Tafiditra ao ny sakafo maraina."
      },
      "gallery[].alt": {
        "en": [
          "Centrest Sejour Hotel exterior",
          "Room at Centrest Sejour Hotel",
          "Lounge at Centrest Sejour Hotel",
          "Restaurant at Centrest Sejour Hotel",
          "Landscaping at Centrest Sejour Hotel"
        ],
        "fr": [
          "Centrest Sejour Hotel : vue extérieure",
          "Centrest Sejour Hotel : une chambre",
          "Centrest Sejour Hotel : le salon",
          "Centrest Sejour Hotel : le restaurant",
          "Centrest Sejour Hotel : les jardins"
        ],
        "de": [
          "Centrest Sejour Hotel: Außenansicht",
          "Centrest Sejour Hotel: ein Zimmer",
          "Centrest Sejour Hotel: die Lounge",
          "Centrest Sejour Hotel: das Restaurant",
          "Centrest Sejour Hotel: die Gartenanlage"
        ],
        "mg": [
          "Centrest Sejour Hotel: ny ivelany",
          "Centrest Sejour Hotel: efitrano iray",
          "Centrest Sejour Hotel: ny efitrano fandraisana",
          "Centrest Sejour Hotel: ny trano fisakafoana",
          "Centrest Sejour Hotel: ny zaridaina"
        ]
      }
    },
    "cristo-hotel": {
      "desc": {
        "en": "Mid-range rooms and bungalows in a lush Namorona River landscape 5 km from Ranomafana, with dining, a bar, and kayaking or local excursions on request.",
        "fr": "Chambres et bungalows de milieu de gamme dans un paysage luxuriant au bord de la Namorona, à 5 km de Ranomafana, avec restaurant, bar, et kayak ou excursions locales sur demande.",
        "de": "Mittelklassezimmer und Bungalows in der üppigen Flusslandschaft der Namorona, 5 km von Ranomafana, mit Restaurant, Bar und auf Wunsch Kajakfahren oder Ausflügen in der Umgebung.",
        "mg": "Efitrano sy bungalow antonony eo anivon'ny tontolo maitso amoron'ny renirano Namorona, 5 km miala an'i Ranomafana, misy trano fisakafoana, bar, ary kayak na fitsangatsanganana manodidina raha angatahina."
      },
      "price": {
        "en": "Contact property for rates",
        "fr": "Contacter l’établissement pour les tarifs",
        "de": "Preise beim Haus erfragen",
        "mg": "Anontanio amin'ny tompony ny vidiny"
      },
      "gallery[].alt": {
        "en": [
          "Cristo Hotel exterior",
          "Room at Cristo Hotel",
          "Second room at Cristo Hotel",
          "View of Cristo Hotel"
        ],
        "fr": [
          "Cristo Hotel : vue extérieure",
          "Cristo Hotel : une chambre",
          "Cristo Hotel : une autre chambre",
          "Cristo Hotel : vue d’ensemble"
        ],
        "de": [
          "Cristo Hotel: Außenansicht",
          "Cristo Hotel: ein Zimmer",
          "Cristo Hotel: ein weiteres Zimmer",
          "Cristo Hotel: Gesamtansicht"
        ],
        "mg": [
          "Cristo Hotel: ny ivelany",
          "Cristo Hotel: efitrano iray",
          "Cristo Hotel: efitrano iray hafa",
          "Cristo Hotel: fijery ankapobeny"
        ]
      }
    },
    "grenat-hotel": {
      "desc": {
        "en": "Comfortable mid-range accommodation on the main road at the edge of the village, with river and rainforest views, private en-suite rooms, guarded private parking, and one of the better-reviewed restaurants in Ranomafana.",
        "fr": "Hébergement confortable de milieu de gamme sur la route principale, en bordure du village, avec vue sur la rivière et la forêt, chambres privées avec salle de bain, parking privé gardé et l’un des restaurants les mieux notés de Ranomafana.",
        "de": "Komfortable Mittelklasseunterkunft an der Hauptstraße am Ortsrand, mit Blick auf Fluss und Regenwald, Privatzimmern mit eigenem Bad, bewachtem Privatparkplatz und einem der am besten bewerteten Restaurants in Ranomafana.",
        "mg": "Toerana hatoriana antonony sady mahafinaritra eo amin'ny lalana lehibe amin'ny sisin-tanàna, misy fijery ny renirano sy ny ala, efitrano manokana misy efitra fandroana, toeram-piantsonana manokana voaambina, ary iray amin'ireo trano fisakafoana tsara laza indrindra eto Ranomafana."
      },
      "price": {
        "en": "80,000–120,000 Ar / night",
        "fr": "80 000–120 000 Ar / nuit",
        "de": "80.000–120.000 Ar / Nacht",
        "mg": "80 000–120 000 Ar / alina"
      },
      "wifiNote": { "en": "In the rooms", "fr": "Dans les chambres", "de": "In den Zimmern", "mg": "Ao amin'ny efitrano" },
      "rooms": {
        "en": [
          { "type": "Single", "price": "80,000 Ar" },
          { "type": "Double", "price": "80,000 Ar" },
          { "type": "Triple", "price": "120,000 Ar" },
          { "type": "Family (1 double + 3 single beds)", "price": "120,000 Ar" }
        ],
        "fr": [
          { "type": "Simple", "price": "80 000 Ar" },
          { "type": "Double", "price": "80 000 Ar" },
          { "type": "Triple", "price": "120 000 Ar" },
          { "type": "Familiale (1 lit double + 3 lits simples)", "price": "120 000 Ar" }
        ],
        "de": [
          { "type": "Einzelzimmer", "price": "80.000 Ar" },
          { "type": "Doppelzimmer", "price": "80.000 Ar" },
          { "type": "Dreibettzimmer", "price": "120.000 Ar" },
          { "type": "Familienzimmer (1 Doppelbett + 3 Einzelbetten)", "price": "120.000 Ar" }
        ],
        "mg": [
          { "type": "Olona iray", "price": "80 000 Ar" },
          { "type": "Fandriana roa olona", "price": "80 000 Ar" },
          { "type": "Telo olona", "price": "120 000 Ar" },
          { "type": "Fianakaviana (fandriana roa olona 1 + fandriana kely 3)", "price": "120 000 Ar" }
        ]
      },
      "meals": {
        "en": ["Breakfast: from 10,000 Ar", "Lunch or dinner: 15,000–30,000 Ar"],
        "fr": ["Petit-déjeuner : à partir de 10 000 Ar", "Déjeuner ou dîner : 15 000–30 000 Ar"],
        "de": ["Frühstück: ab 10.000 Ar", "Mittag- oder Abendessen: 15.000–30.000 Ar"],
        "mg": ["Sakafo maraina: manomboka amin'ny 10 000 Ar", "Sakafo antoandro na hariva: 15 000–30 000 Ar"]
      },
      "features": {
        "en": ["River view", "Private parking, watched from a guard tower"],
        "fr": ["Vue sur la rivière", "Parking privé, surveillé depuis une tour de garde"],
        "de": ["Flussblick", "Privatparkplatz, von einem Wachturm aus bewacht"],
        "mg": ["Fijery ny renirano", "Toeram-piantsonana manokana, ambenana avy amin'ny tilikambo fiambenana"]
      },
      "gallery[].alt": {
        "en": [
          "Grenat Hotel exterior",
          "Bungalow at Grenat Hotel",
          "Room at Grenat Hotel",
          "Restaurant at Grenat Hotel",
          "Grenat Hotel sign"
        ],
        "fr": [
          "Grenat Hotel : vue extérieure",
          "Grenat Hotel : un bungalow",
          "Grenat Hotel : une chambre",
          "Grenat Hotel : le restaurant",
          "Grenat Hotel : l’enseigne"
        ],
        "de": [
          "Grenat Hotel: Außenansicht",
          "Grenat Hotel: ein Bungalow",
          "Grenat Hotel: ein Zimmer",
          "Grenat Hotel: das Restaurant",
          "Grenat Hotel: das Schild"
        ],
        "mg": [
          "Grenat Hotel: ny ivelany",
          "Grenat Hotel: bungalow iray",
          "Grenat Hotel: efitrano iray",
          "Grenat Hotel: ny trano fisakafoana",
          "Grenat Hotel: ny takelaka famantarana"
        ]
      }
    },
    "chez-gaspard": {
      "desc": {
        "en": "Budget-friendly guest house and restaurant behind the Catholic church, run by the Priests of the Sacred Heart of Jesus — a long-standing favourite with backpackers and guided tour groups, with a garden gazebo and water feature and a bar showing sport.",
        "fr": "Maison d’hôtes et restaurant à petit prix derrière l’église catholique, tenus par les Prêtres du Sacré-Cœur de Jésus — une adresse appréciée de longue date des routards et des groupes accompagnés, avec un kiosque et un bassin dans le jardin, et un bar qui diffuse le sport.",
        "de": "Günstiges Gästehaus mit Restaurant hinter der katholischen Kirche, geführt von den Priestern vom Heiligsten Herzen Jesu – seit Langem beliebt bei Rucksackreisenden und geführten Gruppen, mit Gartenpavillon und Wasserspiel und einer Bar, in der Sport läuft.",
        "mg": "Trano fandraisana vahiny sy trano fisakafoana mora vidy ao ambadiky ny fiangonana katolika, tantanan'ireo Pretra ao amin'ny Fo Masin'i Jesoa — efa ela no tian'ny mpizahatany mitondra kitapo sy ny vondrona miaraka amin'ny mpitari-dalana, misy trano kely sy dobo kely ao an-jaridaina, ary bar mampiseho fanatanjahantena."
      },
      "price": {
        "en": "70,000–140,000 Ar / night",
        "fr": "70 000–140 000 Ar / nuit",
        "de": "70.000–140.000 Ar / Nacht",
        "mg": "70 000–140 000 Ar / alina"
      },
      "wifiNote": {
        "en": "In the restaurant",
        "fr": "Au restaurant",
        "de": "Im Restaurant",
        "mg": "Ao amin'ny trano fisakafoana"
      },
      "rooms": {
        "en": [
          { "type": "Double", "price": "70,000 Ar" },
          { "type": "Twin", "price": "70,000 Ar" },
          { "type": "Family (1 double + 2 single beds)", "price": "120,000 Ar" },
          { "type": "Family (1 double + 3 single beds)", "price": "140,000 Ar" },
          { "type": "Extra bed", "price": "25,000 Ar" }
        ],
        "fr": [
          { "type": "Double", "price": "70 000 Ar" },
          { "type": "Lits jumeaux", "price": "70 000 Ar" },
          { "type": "Familiale (1 lit double + 2 lits simples)", "price": "120 000 Ar" },
          { "type": "Familiale (1 lit double + 3 lits simples)", "price": "140 000 Ar" },
          { "type": "Lit supplémentaire", "price": "25 000 Ar" }
        ],
        "de": [
          { "type": "Doppelzimmer", "price": "70.000 Ar" },
          { "type": "Zweibettzimmer", "price": "70.000 Ar" },
          { "type": "Familienzimmer (1 Doppelbett + 2 Einzelbetten)", "price": "120.000 Ar" },
          { "type": "Familienzimmer (1 Doppelbett + 3 Einzelbetten)", "price": "140.000 Ar" },
          { "type": "Zusatzbett", "price": "25.000 Ar" }
        ],
        "mg": [
          { "type": "Fandriana roa olona", "price": "70 000 Ar" },
          { "type": "Fandriana kely roa", "price": "70 000 Ar" },
          { "type": "Fianakaviana (fandriana roa olona 1 + fandriana kely 2)", "price": "120 000 Ar" },
          { "type": "Fianakaviana (fandriana roa olona 1 + fandriana kely 3)", "price": "140 000 Ar" },
          { "type": "Fandriana fanampiny", "price": "25 000 Ar" }
        ]
      },
      "meals": {
        "en": [
          "Breakfast: 12,000–15,000 Ar",
          "Lunch or dinner: 12,000–35,000 Ar à la carte, or a 45,000 Ar set menu"
        ],
        "fr": [
          "Petit-déjeuner : 12 000–15 000 Ar",
          "Déjeuner ou dîner : 12 000–35 000 Ar à la carte, ou un menu à 45 000 Ar"
        ],
        "de": [
          "Frühstück: 12.000–15.000 Ar",
          "Mittag- oder Abendessen: 12.000–35.000 Ar à la carte oder ein Menü für 45.000 Ar"
        ],
        "mg": [
          "Sakafo maraina: 12 000–15 000 Ar",
          "Sakafo antoandro na hariva: 12 000–35 000 Ar araka ny safidy, na sakafo voalamina 45 000 Ar"
        ]
      },
      "features": {
        "en": ["Gazebo and water feature in the garden", "Bar with sport on TV"],
        "fr": ["Kiosque et bassin dans le jardin", "Bar avec le sport à la télévision"],
        "de": ["Pavillon und Wasserspiel im Garten", "Bar mit Sport im Fernsehen"],
        "mg": ["Trano kely sy dobo kely ao an-jaridaina", "Bar mampiseho fanatanjahantena amin'ny fahitalavitra"]
      },
      "gallery[].alt": {
        "en": [
          "Chez Gaspard exterior",
          "Bungalow at Chez Gaspard",
          "Restaurant at Chez Gaspard",
          "Chez Gaspard logo"
        ],
        "fr": [
          "Chez Gaspard : vue extérieure",
          "Chez Gaspard : un bungalow",
          "Chez Gaspard : le restaurant",
          "Chez Gaspard : le logo"
        ],
        "de": [
          "Chez Gaspard: Außenansicht",
          "Chez Gaspard: ein Bungalow",
          "Chez Gaspard: das Restaurant",
          "Chez Gaspard: das Logo"
        ],
        "mg": [
          "Chez Gaspard: ny ivelany",
          "Chez Gaspard: bungalow iray",
          "Chez Gaspard: ny trano fisakafoana",
          "Chez Gaspard: ny sary famantarana"
        ]
      }
    },
    "karibotel": {
      "desc": {
        "en": "Hotel and restaurant at Tsararano, just before the village, on the hillside above the river, with a swimming pool. Doubles 143,000 Ar and family rooms 168,000 Ar, breakfast included.",
        "fr": "Hôtel-restaurant à Tsararano, juste avant le village, à flanc de colline au-dessus de la rivière, avec piscine. Chambres doubles à 143 000 Ar et familiales à 168 000 Ar, petit-déjeuner inclus.",
        "de": "Hotel mit Restaurant in Tsararano, kurz vor dem Ort, am Hang über dem Fluss, mit Schwimmbad. Doppelzimmer 143.000 Ar und Familienzimmer 168.000 Ar, Frühstück inklusive.",
        "mg": "Hotely sy trano fisakafoana ao Tsararano, alohan'ny tanàna, eo amin'ny tehezan-tendrombohitra ambonin'ny renirano, misy dobo filomanosana. Efitrano roa olona 143 000 Ar ary efitrano fianakaviana 168 000 Ar, tafiditra ny sakafo maraina."
      },
      "price": {
        "en": "143,000–168,000 Ar / night",
        "fr": "143 000–168 000 Ar / nuit",
        "de": "143.000–168.000 Ar / Nacht",
        "mg": "143 000–168 000 Ar / alina"
      },
      "wifiNote": { "en": "In the rooms", "fr": "Dans les chambres", "de": "In den Zimmern", "mg": "Ao amin'ny efitrano" },
      "rooms": {
        "en": [
          { "type": "Double", "price": "143,000 Ar" },
          { "type": "Family (1 double + 1 single bed)", "price": "168,000 Ar" }
        ],
        "fr": [
          { "type": "Double", "price": "143 000 Ar" },
          { "type": "Familiale (1 lit double + 1 lit simple)", "price": "168 000 Ar" }
        ],
        "de": [
          { "type": "Doppelzimmer", "price": "143.000 Ar" },
          { "type": "Familienzimmer (1 Doppelbett + 1 Einzelbett)", "price": "168.000 Ar" }
        ],
        "mg": [
          { "type": "Fandriana roa olona", "price": "143 000 Ar" },
          { "type": "Fianakaviana (fandriana roa olona 1 + fandriana kely 1)", "price": "168 000 Ar" }
        ]
      },
      "meals": {
        "en": ["Breakfast: from 8,000 Ar", "Lunch or dinner: from 45,000 Ar"],
        "fr": ["Petit-déjeuner : à partir de 8 000 Ar", "Déjeuner ou dîner : à partir de 45 000 Ar"],
        "de": ["Frühstück: ab 8.000 Ar", "Mittag- oder Abendessen: ab 45.000 Ar"],
        "mg": [
          "Sakafo maraina: manomboka amin'ny 8 000 Ar",
          "Sakafo antoandro na hariva: manomboka amin'ny 45 000 Ar"
        ]
      },
      "features": {
        "en": ["Swimming pool and pool area"],
        "fr": ["Piscine et espace piscine"],
        "de": ["Schwimmbad mit Liegebereich"],
        "mg": ["Dobo filomanosana sy ny manodidina azy"]
      },
      "ratesNote": {
        "en": "Breakfast is included.",
        "fr": "Petit-déjeuner inclus.",
        "de": "Frühstück inklusive.",
        "mg": "Tafiditra ao ny sakafo maraina."
      },
      "contact.note": {
        "en": "Tsararano, Ranomafana — just before the village on the RN25.",
        "fr": "Tsararano, Ranomafana — juste avant le village sur la RN25.",
        "de": "Tsararano, Ranomafana – kurz vor dem Ort an der RN25.",
        "mg": "Tsararano, Ranomafana — alohan'ny tanàna eo amin'ny RN25."
      },
      "gallery[].alt": {
        "en": [
          "Karibotel exterior",
          "Room at Karibotel",
          "Restaurant or common area at Karibotel",
          "View from Karibotel"
        ],
        "fr": [
          "Karibotel : vue extérieure",
          "Karibotel : une chambre",
          "Karibotel : restaurant ou espace commun",
          "Karibotel : la vue"
        ],
        "de": [
          "Karibotel: Außenansicht",
          "Karibotel: ein Zimmer",
          "Karibotel: Restaurant oder Gemeinschaftsbereich",
          "Karibotel: die Aussicht"
        ],
        "mg": [
          "Karibotel: ny ivelany",
          "Karibotel: efitrano iray",
          "Karibotel: trano fisakafoana na toerana iombonana",
          "Karibotel: ny fijery"
        ]
      }
    },
    "kambana-residence": {
      "desc": {
        "en": "Self-catering apartments at Tsararano, 2 km from the village and 8 km from the park, overlooking the rocky Namorona gorge. Three units (Laguna, Tequila, Vinho) or the whole apartment for up to 15. Solar electricity, hot water, 24-hour reception; meals with two hours' notice.",
        "fr": "Appartements avec cuisine à Tsararano, à 2 km du village et 8 km du parc, surplombant les gorges rocheuses de la Namorona. Trois logements (Laguna, Tequila, Vinho) ou l’appartement entier jusqu’à 15 personnes. Électricité solaire, eau chaude, réception 24 h/24 ; repas sur demande deux heures à l’avance.",
        "de": "Ferienwohnungen mit Küche in Tsararano, 2 km vom Ort und 8 km vom Park, mit Blick auf die felsige Schlucht der Namorona. Drei Einheiten (Laguna, Tequila, Vinho) oder die ganze Wohnung für bis zu 15 Personen. Solarstrom, Warmwasser, Rezeption rund um die Uhr; Mahlzeiten mit zwei Stunden Vorlauf.",
        "mg": "Trano fonenana misy lakozia ao Tsararano, 2 km miala ny tanàna ary 8 km miala ny valan-javaboahary, manatrika ny hantsana vatoin'ny Namorona. Trano telo (Laguna, Tequila, Vinho) na ny trano manontolo ho an'olona 15 hatramin'ny farany. Herinaratra avy amin'ny masoandro, rano mafana, fandraisana vahiny 24 ora; sakafo raha angatahina adiny roa mialoha."
      },
      "price": {
        "en": "From about €21 / night",
        "fr": "À partir d’environ 21 € / nuit",
        "de": "Ab etwa 21 € / Nacht",
        "mg": "Manomboka amin'ny 21 € eo ho eo / alina"
      },
      "contact.note": {
        "en": "WhatsApp +261 34 36 588 09. Staff arrange transport and park entry reservations.",
        "fr": "WhatsApp +261 34 36 588 09. L’équipe organise le transport et les réservations d’entrée au parc.",
        "de": "WhatsApp +261 34 36 588 09. Das Team organisiert Transport und Reservierungen für den Parkeintritt.",
        "mg": "WhatsApp +261 34 36 588 09. Ny mpiasa no mikarakara ny fitaterana sy ny famandrihana fidirana amin'ny valan-javaboahary."
      },
      "gallery[].alt": {
        "en": [
          "Kambana Résidence exterior",
          "Room at Kambana Résidence",
          "Restaurant or common area at Kambana Résidence",
          "View from Kambana Résidence"
        ],
        "fr": [
          "Kambana Résidence : vue extérieure",
          "Kambana Résidence : une chambre",
          "Kambana Résidence : restaurant ou espace commun",
          "Kambana Résidence : la vue"
        ],
        "de": [
          "Kambana Résidence: Außenansicht",
          "Kambana Résidence: ein Zimmer",
          "Kambana Résidence: Restaurant oder Gemeinschaftsbereich",
          "Kambana Résidence: die Aussicht"
        ],
        "mg": [
          "Kambana Résidence: ny ivelany",
          "Kambana Résidence: efitrano iray",
          "Kambana Résidence: trano fisakafoana na toerana iombonana",
          "Kambana Résidence: ny fijery"
        ]
      }
    },
    "soa-lodge": {
      "desc": {
        "en": "The best-rated place to stay in Ranomafana. A small family-run lodge with three hand-painted bungalows on a hillside, panoramic views, a restaurant and bar, laundry, and packed lunches for park days. Expect a lot of steps.",
        "fr": "L’hébergement le mieux noté de Ranomafana. Un petit lodge familial avec trois bungalows peints à la main sur une colline, une vue panoramique, un restaurant et un bar, une blanchisserie et des paniers-repas pour les journées au parc. Prévoyez beaucoup de marches.",
        "de": "Die am besten bewertete Unterkunft in Ranomafana. Eine kleine, familiengeführte Lodge mit drei handbemalten Bungalows am Hang, Panoramablick, Restaurant und Bar, Wäscheservice und Lunchpaketen für Parktage. Rechnen Sie mit vielen Stufen.",
        "mg": "Ny toerana hatoriana tsara laza indrindra eto Ranomafana. Lodge kely tantanan'ny fianakaviana iray, misy bungalow telo voaloko tanana eo amin'ny havoana, fijery manodidina, trano fisakafoana sy bar, fanasana lamba, ary sakafo entina ho an'ny andro any amin'ny valan-javaboahary. Tohatra maro no hiakarana."
      },
      "price": {
        "en": "100,000–180,000 Ar / night",
        "fr": "100 000–180 000 Ar / nuit",
        "de": "100.000–180.000 Ar / Nacht",
        "mg": "100 000–180 000 Ar / alina"
      },
      "wifiNote": {
        "en": "Available, but poor",
        "fr": "Disponible, mais faible",
        "de": "Vorhanden, aber schwach",
        "mg": "Misy, saingy malemy"
      },
      "rooms": {
        "en": [
          { "type": "Double", "price": "100,000 Ar" },
          { "type": "Triple", "price": "130,000 Ar" },
          { "type": "Triple with loft bed", "price": "160,000 Ar" },
          { "type": "Family with loft bed (1 double + 3 single beds)", "price": "180,000 Ar" }
        ],
        "fr": [
          { "type": "Double", "price": "100 000 Ar" },
          { "type": "Triple", "price": "130 000 Ar" },
          { "type": "Triple avec lit en mezzanine", "price": "160 000 Ar" },
          { "type": "Familiale avec lit en mezzanine (1 lit double + 3 lits simples)", "price": "180 000 Ar" }
        ],
        "de": [
          { "type": "Doppelzimmer", "price": "100.000 Ar" },
          { "type": "Dreibettzimmer", "price": "130.000 Ar" },
          { "type": "Dreibettzimmer mit Hochbett", "price": "160.000 Ar" },
          { "type": "Familienzimmer mit Hochbett (1 Doppelbett + 3 Einzelbetten)", "price": "180.000 Ar" }
        ],
        "mg": [
          { "type": "Fandriana roa olona", "price": "100 000 Ar" },
          { "type": "Telo olona", "price": "130 000 Ar" },
          { "type": "Telo olona misy fandriana ambony rihana", "price": "160 000 Ar" },
          {
            "type": "Fianakaviana misy fandriana ambony rihana (fandriana roa olona 1 + fandriana kely 3)",
            "price": "180 000 Ar"
          }
        ]
      },
      "meals": {
        "en": [
          "Meals are cooked to order — ask ahead",
          "Breakfast: 15,000 Ar continental, 20,000 Ar American",
          "Lunch or dinner: 25,000–40,000 Ar"
        ],
        "fr": [
          "Les repas sont préparés à la commande — demandez à l’avance",
          "Petit-déjeuner : 15 000 Ar continental, 20 000 Ar américain",
          "Déjeuner ou dîner : 25 000–40 000 Ar"
        ],
        "de": [
          "Die Mahlzeiten werden auf Bestellung gekocht – vorher Bescheid geben",
          "Frühstück: 15.000 Ar kontinental, 20.000 Ar amerikanisch",
          "Mittag- oder Abendessen: 25.000–40.000 Ar"
        ],
        "mg": [
          "Masaka araka ny baiko ny sakafo — anontanio mialoha",
          "Sakafo maraina: 15 000 Ar kaontinantaly, 20 000 Ar amerikanina",
          "Sakafo antoandro na hariva: 25 000–40 000 Ar"
        ]
      },
      "features": {
        "en": ["Sister hotel in Antsirabe"],
        "fr": ["Hôtel jumeau à Antsirabe"],
        "de": ["Schwesterhotel in Antsirabe"],
        "mg": ["Manana hotely mpiray tampo any Antsirabe"]
      },
      "contact.note": {
        "en": "Wi-Fi can be intermittent.",
        "fr": "Le Wi-Fi peut être irrégulier.",
        "de": "Das WLAN kann unzuverlässig sein.",
        "mg": "Mety tapatapaka ny Wi-Fi."
      },
      "gallery[].alt": {
        "en": [
          "Soa Lodge exterior",
          "Room at Soa Lodge",
          "Restaurant or common area at Soa Lodge",
          "View from Soa Lodge"
        ],
        "fr": [
          "Soa Lodge : vue extérieure",
          "Soa Lodge : une chambre",
          "Soa Lodge : restaurant ou espace commun",
          "Soa Lodge : la vue"
        ],
        "de": [
          "Soa Lodge: Außenansicht",
          "Soa Lodge: ein Zimmer",
          "Soa Lodge: Restaurant oder Gemeinschaftsbereich",
          "Soa Lodge: die Aussicht"
        ],
        "mg": [
          "Soa Lodge: ny ivelany",
          "Soa Lodge: efitrano iray",
          "Soa Lodge: trano fisakafoana na toerana iombonana",
          "Soa Lodge: ny fijery"
        ]
      }
    },
    "minerva-apart": {
      "desc": {
        "en": "Spacious 50 m² self-catering apartments on the RN25 opposite Centrest, with private entrances, balconies, kitchenettes and garden or mountain views. The owner, Jeannot, arranges guides and park transport. Cash only.",
        "fr": "Appartements spacieux de 50 m² avec cuisine, sur la RN25 en face du Centrest, avec entrée privée, balcon, kitchenette et vue sur le jardin ou la montagne. Le propriétaire, Jeannot, organise guides et transport vers le parc. Espèces uniquement.",
        "de": "Geräumige Ferienwohnungen mit 50 m² an der RN25 gegenüber dem Centrest, mit eigenem Eingang, Balkon, Kochnische und Blick auf Garten oder Berge. Der Besitzer Jeannot vermittelt Guides und Transport zum Park. Nur Barzahlung.",
        "mg": "Trano fonenana malalaka 50 m² misy lakozia, eo amin'ny RN25 tandrifin'ny Centrest, misy varavarana fidirana manokana, lavarangana, lakozia kely ary fijery ny zaridaina na ny tendrombohitra. Ny tompony, Jeannot, no mikarakara mpitari-dalana sy fitaterana mankany amin'ny valan-javaboahary. Vola an-tanana ihany no raisina."
      },
      "price": {
        "en": "Around $35 / night",
        "fr": "Environ 35 $ / nuit",
        "de": "Etwa 35 $ / Nacht",
        "mg": "Manodidina ny 35 $ / alina"
      },
      "contact.note": {
        "en": "Book via Booking.com. Check-in 13:00, check-out 11:00. Cash payment only; pets by prior arrangement.",
        "fr": "Réservation sur Booking.com. Arrivée à 13:00, départ à 11:00. Paiement en espèces uniquement ; animaux sur accord préalable.",
        "de": "Buchung über Booking.com. Check-in 13:00, Check-out 11:00. Nur Barzahlung; Haustiere nach Absprache.",
        "mg": "Famandrihana amin'ny Booking.com. Fidirana 13:00, fivoahana 11:00. Vola an-tanana ihany; biby fiompy raha nifanarahana mialoha."
      },
      "gallery[].alt": {
        "en": [
          "Minerva Apart exterior",
          "Room at Minerva Apart",
          "Restaurant or common area at Minerva Apart",
          "View from Minerva Apart"
        ],
        "fr": [
          "Minerva Apart : vue extérieure",
          "Minerva Apart : une chambre",
          "Minerva Apart : restaurant ou espace commun",
          "Minerva Apart : la vue"
        ],
        "de": [
          "Minerva Apart: Außenansicht",
          "Minerva Apart: ein Zimmer",
          "Minerva Apart: Restaurant oder Gemeinschaftsbereich",
          "Minerva Apart: die Aussicht"
        ],
        "mg": [
          "Minerva Apart: ny ivelany",
          "Minerva Apart: efitrano iray",
          "Minerva Apart: trano fisakafoana na toerana iombonana",
          "Minerva Apart: ny fijery"
        ]
      }
    },
    "la-palmeraie": {
      "desc": {
        "en": "Six budget rooms with shared toilets in the middle of the village, behind the market. Mosquito nets, outdoor hot showers, European-style toilets and a night watchman. A restaurant sits across the street.",
        "fr": "Six chambres à petit prix avec toilettes partagées, au cœur du village, derrière le marché. Moustiquaires, douches chaudes à l’extérieur, toilettes à l’européenne et gardien de nuit. Un restaurant se trouve en face.",
        "de": "Sechs günstige Zimmer mit Gemeinschaftstoiletten mitten im Ort, hinter dem Markt. Moskitonetze, warme Außenduschen, Toiletten nach europäischer Art und ein Nachtwächter. Gegenüber liegt ein Restaurant.",
        "mg": "Efitrano mora vidy enina misy kabone iombonana, eo afovoan'ny tanàna ao ambadiky ny tsena. Lay, fandroana rano mafana any ivelany, kabone maoderina ary mpiambina alina. Misy trano fisakafoana eo ampitan'ny lalana."
      },
      "price": {
        "en": "Double 20,000 Ar · triple 30,000 Ar · family 40,000 Ar",
        "fr": "Double 20 000 Ar · triple 30 000 Ar · familiale 40 000 Ar",
        "de": "Doppelzimmer 20.000 Ar · Dreibettzimmer 30.000 Ar · Familienzimmer 40.000 Ar",
        "mg": "Roa olona 20 000 Ar · telo olona 30 000 Ar · fianakaviana 40 000 Ar"
      },
      "contact.note": {
        "en": "Au centre du village, derrière le marché.",
        "fr": "Au centre du village, derrière le marché.",
        "de": "Mitten im Ort, hinter dem Markt.",
        "mg": "Eo afovoan'ny tanàna, ao ambadiky ny tsena."
      },
      "gallery[].alt": {
        "en": [
          "La Palmeraie exterior",
          "Room at La Palmeraie",
          "Restaurant or common area at La Palmeraie",
          "View from La Palmeraie"
        ],
        "fr": [
          "La Palmeraie : vue extérieure",
          "La Palmeraie : une chambre",
          "La Palmeraie : restaurant ou espace commun",
          "La Palmeraie : la vue"
        ],
        "de": [
          "La Palmeraie: Außenansicht",
          "La Palmeraie: ein Zimmer",
          "La Palmeraie: Restaurant oder Gemeinschaftsbereich",
          "La Palmeraie: die Aussicht"
        ],
        "mg": [
          "La Palmeraie: ny ivelany",
          "La Palmeraie: efitrano iray",
          "La Palmeraie: trano fisakafoana na toerana iombonana",
          "La Palmeraie: ny fijery"
        ]
      }
    },
    "manja-hotel": {
      "desc": {
        "en": "Hillside bungalows overlooking the village, 4 km from the park, with a bar and one of Ranomafana's busiest restaurants. Rooms are dated but clean — hot water, mosquito net, fan. A steep climb to the rooms, with porter help available.",
        "fr": "Bungalows à flanc de colline surplombant le village, à 4 km du parc, avec un bar et l’un des restaurants les plus fréquentés de Ranomafana. Chambres datées mais propres — eau chaude, moustiquaire, ventilateur. Montée raide jusqu’aux chambres, avec porteurs disponibles.",
        "de": "Bungalows am Hang über dem Ort, 4 km vom Park, mit Bar und einem der belebtesten Restaurants von Ranomafana. Die Zimmer sind in die Jahre gekommen, aber sauber – Warmwasser, Moskitonetz, Ventilator. Steiler Aufstieg zu den Zimmern, Träger helfen mit dem Gepäck.",
        "mg": "Bungalow eo amin'ny havoana manatrika ny tanàna, 4 km miala ny valan-javaboahary, misy bar ary iray amin'ireo trano fisakafoana be mpanjifa indrindra eto Ranomafana. Efa antitra ny efitrano saingy madio — rano mafana, lay, vantilatera. Mideza ny fiakarana mankany amin'ny efitrano, misy mpitondra entana manampy."
      },
      "price": {
        "en": "70,000–90,000 Ar / night",
        "fr": "70 000–90 000 Ar / nuit",
        "de": "70.000–90.000 Ar / Nacht",
        "mg": "70 000–90 000 Ar / alina"
      },
      "wifiNote": {
        "en": "In the restaurant",
        "fr": "Au restaurant",
        "de": "Im Restaurant",
        "mg": "Ao amin'ny trano fisakafoana"
      },
      "rooms": {
        "en": [
          { "type": "Double", "price": "70,000–80,000 Ar" },
          { "type": "Twin", "price": "70,000–80,000 Ar" },
          { "type": "Triple", "price": "80,000–90,000 Ar" }
        ],
        "fr": [
          { "type": "Double", "price": "70 000–80 000 Ar" },
          { "type": "Lits jumeaux", "price": "70 000–80 000 Ar" },
          { "type": "Triple", "price": "80 000–90 000 Ar" }
        ],
        "de": [
          { "type": "Doppelzimmer", "price": "70.000–80.000 Ar" },
          { "type": "Zweibettzimmer", "price": "70.000–80.000 Ar" },
          { "type": "Dreibettzimmer", "price": "80.000–90.000 Ar" }
        ],
        "mg": [
          { "type": "Fandriana roa olona", "price": "70 000–80 000 Ar" },
          { "type": "Fandriana kely roa", "price": "70 000–80 000 Ar" },
          { "type": "Telo olona", "price": "80 000–90 000 Ar" }
        ]
      },
      "meals": {
        "en": [
          "Breakfast: from 8,000 Ar",
          "Lunch or dinner: 12,000–25,000 Ar",
          "The voanjobory (Bambara groundnut stew) is exceptional"
        ],
        "fr": [
          "Petit-déjeuner : à partir de 8 000 Ar",
          "Déjeuner ou dîner : 12 000–25 000 Ar",
          "Le voanjobory (ragoût de pois bambara) est exceptionnel"
        ],
        "de": [
          "Frühstück: ab 8.000 Ar",
          "Mittag- oder Abendessen: 12.000–25.000 Ar",
          "Das Voanjobory (Eintopf aus Bambara-Erdnüssen) ist hervorragend"
        ],
        "mg": [
          "Sakafo maraina: manomboka amin'ny 8 000 Ar",
          "Sakafo antoandro na hariva: 12 000–25 000 Ar",
          "Tsara mihoatra ny voanjobory eto"
        ]
      },
      "contact.note": {
        "en": "If one number doesn't answer, try the others.",
        "fr": "Si un numéro ne répond pas, essayez les autres.",
        "de": "Wenn eine Nummer nicht antwortet, versuchen Sie die anderen.",
        "mg": "Raha tsy mamaly ny laharana iray, andramo ireo hafa."
      },
      "gallery[].alt": {
        "en": [
          "Manja Hotel exterior",
          "Room at Manja Hotel",
          "Restaurant or common area at Manja Hotel",
          "View from Manja Hotel"
        ],
        "fr": [
          "Manja Hotel : vue extérieure",
          "Manja Hotel : une chambre",
          "Manja Hotel : restaurant ou espace commun",
          "Manja Hotel : la vue"
        ],
        "de": [
          "Manja Hotel: Außenansicht",
          "Manja Hotel: ein Zimmer",
          "Manja Hotel: Restaurant oder Gemeinschaftsbereich",
          "Manja Hotel: die Aussicht"
        ],
        "mg": [
          "Manja Hotel: ny ivelany",
          "Manja Hotel: efitrano iray",
          "Manja Hotel: trano fisakafoana na toerana iombonana",
          "Manja Hotel: ny fijery"
        ]
      }
    },
    "ihary-hotel": {
      "desc": {
        "en": "Twenty-two rooms on the bank of the Namorona, a few kilometres from the park entrance, with river access, a swimming pool and a riverside restaurant. Basic and ageing, with mosquito nets in the bungalows, but the river-facing rooms have the best view in the village.",
        "fr": "Vingt-deux chambres au bord de la Namorona, à quelques kilomètres de l’entrée du parc, avec accès à la rivière, piscine et restaurant au bord de l’eau. Simple et vieillissant, avec des moustiquaires dans les bungalows, mais les chambres côté rivière ont la plus belle vue du village.",
        "de": "Zweiundzwanzig Zimmer am Ufer der Namorona, wenige Kilometer vom Parkeingang, mit Zugang zum Fluss, Schwimmbad und Restaurant am Wasser. Einfach und in die Jahre gekommen, mit Moskitonetzen in den Bungalows, aber die Zimmer zum Fluss haben die schönste Aussicht im Ort.",
        "mg": "Efitrano roa amby roapolo eo amoron'ny Namorona, kilaometatra vitsivitsy miala ny fidirana amin'ny valan-javaboahary, misy fidinana amin'ny renirano, dobo filomanosana ary trano fisakafoana amoron-drano. Tsotra sady efa antitra, misy lay ao amin'ny bungalow, saingy ireo efitrano manatrika ny renirano no manana fijery tsara indrindra ao an-tanàna."
      },
      "price": {
        "en": "70,000–120,000 Ar / night",
        "fr": "70 000–120 000 Ar / nuit",
        "de": "70.000–120.000 Ar / Nacht",
        "mg": "70 000–120 000 Ar / alina"
      },
      "wifiNote": {
        "en": "In the restaurant",
        "fr": "Au restaurant",
        "de": "Im Restaurant",
        "mg": "Ao amin'ny trano fisakafoana"
      },
      "rooms": {
        "en": [
          { "type": "Double", "price": "70,000–120,000 Ar" },
          { "type": "Family (1 double + 2 single beds)", "price": "120,000 Ar" }
        ],
        "fr": [
          { "type": "Double", "price": "70 000–120 000 Ar" },
          { "type": "Familiale (1 lit double + 2 lits simples)", "price": "120 000 Ar" }
        ],
        "de": [
          { "type": "Doppelzimmer", "price": "70.000–120.000 Ar" },
          { "type": "Familienzimmer (1 Doppelbett + 2 Einzelbetten)", "price": "120.000 Ar" }
        ],
        "mg": [
          { "type": "Fandriana roa olona", "price": "70 000–120 000 Ar" },
          { "type": "Fianakaviana (fandriana roa olona 1 + fandriana kely 2)", "price": "120 000 Ar" }
        ]
      },
      "meals": {
        "en": ["Breakfast, lunch or dinner: 10,000–30,000 Ar"],
        "fr": ["Petit-déjeuner, déjeuner ou dîner : 10 000–30 000 Ar"],
        "de": ["Frühstück, Mittag- oder Abendessen: 10.000–30.000 Ar"],
        "mg": ["Sakafo maraina, antoandro na hariva: 10 000–30 000 Ar"]
      },
      "features": {
        "en": ["River access"],
        "fr": ["Accès à la rivière"],
        "de": ["Zugang zum Fluss"],
        "mg": ["Fidinana amin'ny renirano"]
      },
      "contact.note": {
        "en": "16 Poste, Ranomafana 312. Free accommodation for drivers; packed lunches for park visitors.",
        "fr": "16 Poste, Ranomafana 312. Hébergement gratuit pour les chauffeurs ; paniers-repas pour les visiteurs du parc.",
        "de": "16 Poste, Ranomafana 312. Kostenlose Unterkunft für Fahrer; Lunchpakete für Parkbesucher.",
        "mg": "16 Poste, Ranomafana 312. Maimaim-poana ny fandriana ho an'ny mpamily; sakafo entina ho an'ny mpitsidika ny valan-javaboahary."
      },
      "gallery[].alt": {
        "en": [
          "Ihary Hotel exterior",
          "Room at Ihary Hotel",
          "Restaurant or common area at Ihary Hotel",
          "View from Ihary Hotel"
        ],
        "fr": [
          "Ihary Hotel : vue extérieure",
          "Ihary Hotel : une chambre",
          "Ihary Hotel : restaurant ou espace commun",
          "Ihary Hotel : la vue"
        ],
        "de": [
          "Ihary Hotel: Außenansicht",
          "Ihary Hotel: ein Zimmer",
          "Ihary Hotel: Restaurant oder Gemeinschaftsbereich",
          "Ihary Hotel: die Aussicht"
        ],
        "mg": [
          "Ihary Hotel: ny ivelany",
          "Ihary Hotel: efitrano iray",
          "Ihary Hotel: trano fisakafoana na toerana iombonana",
          "Ihary Hotel: ny fijery"
        ]
      }
    },
    "ny-tanana-hotel": {
      "desc": {
        "en": "Small hotel and restaurant at Ankevoevo offering authentic Malagasy hospitality, budget rooms and simple home-style meals.",
        "fr": "Petit hôtel-restaurant à Ankevoevo offrant une hospitalité malgache authentique, des chambres à petit prix et une cuisine simple et familiale.",
        "de": "Kleines Hotel mit Restaurant in Ankevoevo, mit echter madagassischer Gastfreundschaft, günstigen Zimmern und einfacher Hausmannskost.",
        "mg": "Hotely sy trano fisakafoana kely ao Ankevoevo, manolotra fandraisana malagasy tena izy, efitrano mora vidy ary sakafo tsotra sahala amin'ny an-trano."
      },
      "price": {
        "en": "Budget — contact for rates",
        "fr": "Petit budget — nous contacter pour les tarifs",
        "de": "Günstig – Preise auf Anfrage",
        "mg": "Mora vidy — anontanio ny vidiny"
      },
      "contact.note": {
        "en": "Ankevoevo, Ranomafana.",
        "fr": "Ankevoevo, Ranomafana.",
        "de": "Ankevoevo, Ranomafana.",
        "mg": "Ankevoevo, Ranomafana."
      },
      "gallery[].alt": {
        "en": [
          "Ny Tanàna Hotel exterior",
          "Room at Ny Tanàna Hotel",
          "Restaurant or common area at Ny Tanàna Hotel",
          "View from Ny Tanàna Hotel"
        ],
        "fr": [
          "Ny Tanàna Hotel : vue extérieure",
          "Ny Tanàna Hotel : une chambre",
          "Ny Tanàna Hotel : restaurant ou espace commun",
          "Ny Tanàna Hotel : la vue"
        ],
        "de": [
          "Ny Tanàna Hotel: Außenansicht",
          "Ny Tanàna Hotel: ein Zimmer",
          "Ny Tanàna Hotel: Restaurant oder Gemeinschaftsbereich",
          "Ny Tanàna Hotel: die Aussicht"
        ],
        "mg": [
          "Ny Tanàna Hotel: ny ivelany",
          "Ny Tanàna Hotel: efitrano iray",
          "Ny Tanàna Hotel: trano fisakafoana na toerana iombonana",
          "Ny Tanàna Hotel: ny fijery"
        ]
      }
    },
    "lemur-coffee-hotel": {
      "desc": {
        "en": "A hybrid address combining accommodation, a specialty coffee house and a meeting space — the newest opening in Ranomafana, aimed at travellers who want a proper coffee and somewhere to sit and work.",
        "fr": "Une adresse hybride qui réunit hébergement, café de spécialité et espace de réunion — la plus récente ouverture de Ranomafana, pensée pour les voyageurs qui veulent un vrai café et un endroit où s’asseoir pour travailler.",
        "de": "Eine Mischung aus Unterkunft, Spezialitätenkaffee und Treffpunkt – die neueste Eröffnung in Ranomafana, gedacht für Reisende, die einen guten Kaffee und einen Platz zum Arbeiten suchen.",
        "mg": "Toerana mitambatra misy fandriana, trano fisotroana kafe manokana ary efitrano fivoriana — ny vao nisokatra farany teto Ranomafana, natao ho an'ny mpizahatany mila kafe tsara sy toerana hipetrahana hiasa."
      },
      "price": {
        "en": "Contact property for rates",
        "fr": "Contacter l’établissement pour les tarifs",
        "de": "Preise beim Haus erfragen",
        "mg": "Anontanio amin'ny tompony ny vidiny"
      },
      "gallery[].alt": {
        "en": [
          "Lemur Coffee Hotel exterior",
          "Room at Lemur Coffee Hotel",
          "Restaurant or common area at Lemur Coffee Hotel",
          "View from Lemur Coffee Hotel"
        ],
        "fr": [
          "Lemur Coffee Hotel : vue extérieure",
          "Lemur Coffee Hotel : une chambre",
          "Lemur Coffee Hotel : restaurant ou espace commun",
          "Lemur Coffee Hotel : la vue"
        ],
        "de": [
          "Lemur Coffee Hotel: Außenansicht",
          "Lemur Coffee Hotel: ein Zimmer",
          "Lemur Coffee Hotel: Restaurant oder Gemeinschaftsbereich",
          "Lemur Coffee Hotel: die Aussicht"
        ],
        "mg": [
          "Lemur Coffee Hotel: ny ivelany",
          "Lemur Coffee Hotel: efitrano iray",
          "Lemur Coffee Hotel: trano fisakafoana na toerana iombonana",
          "Lemur Coffee Hotel: ny fijery"
        ]
      }
    },
    "chez-jose": {
      "desc": {
        "en": "Centrally located, low-cost Catholic guest house in Ranomafana village — simple overnight lodging within walking distance of the thermal baths, with a bar and coffee but no meals.",
        "fr": "Maison d’hôtes catholique bon marché, au centre du village de Ranomafana — un hébergement simple pour la nuit, à distance de marche des bains thermaux, avec bar et café mais sans repas.",
        "de": "Zentral gelegenes, günstiges katholisches Gästehaus im Ort Ranomafana – einfache Übernachtung in Gehweite der Thermalbäder, mit Bar und Kaffee, aber ohne Mahlzeiten.",
        "mg": "Trano fandraisana vahiny katolika mora vidy eo afovoan'ny tanànan'i Ranomafana — toerana tsotra hatoriana, azo andehanana an-tongotra mankany amin'ny fandroana rano mafana, misy bar sy kafe fa tsy misy sakafo."
      },
      "price": {
        "en": "45,000–60,000 Ar / night",
        "fr": "45 000–60 000 Ar / nuit",
        "de": "45.000–60.000 Ar / Nacht",
        "mg": "45 000–60 000 Ar / alina"
      },
      "wifiNote": {
        "en": "In some rooms",
        "fr": "Dans certaines chambres",
        "de": "In manchen Zimmern",
        "mg": "Ao amin'ny efitrano sasany"
      },
      "rooms": {
        "en": [
          { "type": "Double", "price": "60,000 Ar" },
          { "type": "Twin", "price": "60,000 Ar" },
          { "type": "Twin with shared bathroom", "price": "45,000 Ar" }
        ],
        "fr": [
          { "type": "Double", "price": "60 000 Ar" },
          { "type": "Lits jumeaux", "price": "60 000 Ar" },
          { "type": "Lits jumeaux, salle de bain partagée", "price": "45 000 Ar" }
        ],
        "de": [
          { "type": "Doppelzimmer", "price": "60.000 Ar" },
          { "type": "Zweibettzimmer", "price": "60.000 Ar" },
          { "type": "Zweibettzimmer mit Gemeinschaftsbad", "price": "45.000 Ar" }
        ],
        "mg": [
          { "type": "Fandriana roa olona", "price": "60 000 Ar" },
          { "type": "Fandriana kely roa", "price": "60 000 Ar" },
          { "type": "Fandriana kely roa, efitra fandroana iombonana", "price": "45 000 Ar" }
        ]
      },
      "meals": {
        "en": ["No meals served — coffee and the bar only"],
        "fr": ["Pas de repas — seulement le café et le bar"],
        "de": ["Keine Mahlzeiten – nur Kaffee und die Bar"],
        "mg": ["Tsy misy sakafo — kafe sy bar ihany"]
      },
      "features": {
        "en": ["Run by the Catholic Church (ECAR)", "Conference room for 18, 70,000 Ar per day"],
        "fr": ["Tenu par l’Église catholique (ECAR)", "Salle de conférence pour 18 personnes, 70 000 Ar par jour"],
        "de": ["Betrieben von der katholischen Kirche (ECAR)", "Konferenzraum für 18 Personen, 70.000 Ar pro Tag"],
        "mg": ["Tantanan'ny Fiangonana Katolika (ECAR)", "Efitrano fivoriana ho an'olona 18, 70 000 Ar isan'andro"]
      },
      "gallery[].alt": {
        "en": [
          "Chez Jose exterior",
          "Room at Chez Jose",
          "Reception at Chez Jose",
          "Second exterior view of Chez Jose"
        ],
        "fr": [
          "Chez Jose : vue extérieure",
          "Chez Jose : une chambre",
          "Chez Jose : la réception",
          "Chez Jose : autre vue extérieure"
        ],
        "de": [
          "Chez Jose: Außenansicht",
          "Chez Jose: ein Zimmer",
          "Chez Jose: die Rezeption",
          "Chez Jose: weitere Außenansicht"
        ],
        "mg": [
          "Chez Jose: ny ivelany",
          "Chez Jose: efitrano iray",
          "Chez Jose: ny fandraisana vahiny",
          "Chez Jose: ny ivelany, fijery hafa"
        ]
      }
    },
    "coin-dor": {
      "desc": {
        "en": "Small, charming, centrally located hotely — a village hostel with shared bathrooms and hot water — above its own restaurant, with karaoke and hearty local food.",
        "fr": "Petit hotely charmant et central — une auberge de village avec salles de bain partagées et eau chaude — au-dessus de son propre restaurant, avec karaoké et cuisine locale copieuse.",
        "de": "Kleines, charmantes, zentral gelegenes Hotely – eine einfache Dorfherberge mit Gemeinschaftsbädern und Warmwasser – über dem eigenen Restaurant, mit Karaoke und herzhafter lokaler Küche.",
        "mg": "Hotely kely mahafinaritra eo afovoan-tanàna — toerana tsotra hatoriana misy efitra fandroana iombonana sy rano mafana — eo ambonin'ny trano fisakafoany manokana, misy karaoke sy sakafo malagasy matsiro sady be."
      },
      "price": {
        "en": "About 20,000–50,000 Ar / night",
        "fr": "Environ 20 000–50 000 Ar / nuit",
        "de": "Etwa 20.000–50.000 Ar / Nacht",
        "mg": "Eo ho eo amin'ny 20 000–50 000 Ar / alina"
      },
      "features": {
        "en": ["Shared bathrooms", "No Wi-Fi", "Meals at the hotely (local restaurant) downstairs"],
        "fr": ["Salles de bain partagées", "Pas de Wi-Fi", "Repas au hotely (restaurant local) du rez-de-chaussée"],
        "de": ["Gemeinschaftsbäder", "Kein WLAN", "Mahlzeiten im Hotely (einfaches Lokal) im Erdgeschoss"],
        "mg": [
          "Efitra fandroana iombonana",
          "Tsy misy Wi-Fi",
          "Sakafo ao amin'ny hotely (trano fisakafoana tsotra) ambany rihana"
        ]
      },
      "gallery[].alt": {
        "en": [
          "Coin d’or exterior",
          "Room at Coin d’or",
          "Restaurant or common area at Coin d’or",
          "View from Coin d’or"
        ],
        "fr": [
          "Coin d’or : vue extérieure",
          "Coin d’or : une chambre",
          "Coin d’or : restaurant ou espace commun",
          "Coin d’or : la vue"
        ],
        "de": [
          "Coin d’or: Außenansicht",
          "Coin d’or: ein Zimmer",
          "Coin d’or: Restaurant oder Gemeinschaftsbereich",
          "Coin d’or: die Aussicht"
        ],
        "mg": [
          "Coin d'or: ny ivelany",
          "Coin d'or: efitrano iray",
          "Coin d'or: trano fisakafoana na toerana iombonana",
          "Coin d'or: ny fijery"
        ]
      }
    },
    "akamasoa-guest-house": {
      "desc": {
        "en": "Simple, community-focused dormitory accommodation for park visitors, with basic clean rooms, local hospitality, and kitchen facilities.",
        "fr": "Hébergement simple en dortoir, tourné vers la communauté, pour les visiteurs du parc : chambres basiques et propres, accueil local et cuisine à disposition.",
        "de": "Einfache, gemeinschaftlich geführte Schlafsaalunterkunft für Parkbesucher, mit schlichten, sauberen Zimmern, herzlicher Gastfreundschaft und Küchenbenutzung.",
        "mg": "Toerana hatoriana tsotra ao amin'ny efitrano iombonana, mifantoka amin'ny fiaraha-monina, ho an'ny mpitsidika ny valan-javaboahary: efitrano tsotra sady madio, fandraisana mafana avy amin'ny mponina, ary lakozia azo ampiasaina."
      },
      "price": {
        "en": "Budget — contact for rates",
        "fr": "Petit budget — nous contacter pour les tarifs",
        "de": "Günstig – Preise auf Anfrage",
        "mg": "Mora vidy — anontanio ny vidiny"
      },
      "gallery[].alt": {
        "en": [
          "Akamasoa Guest House exterior",
          "Room at Akamasoa Guest House",
          "Restaurant or common area at Akamasoa Guest House",
          "View from Akamasoa Guest House"
        ],
        "fr": [
          "Akamasoa Guest House : vue extérieure",
          "Akamasoa Guest House : une chambre",
          "Akamasoa Guest House : restaurant ou espace commun",
          "Akamasoa Guest House : la vue"
        ],
        "de": [
          "Akamasoa Guest House: Außenansicht",
          "Akamasoa Guest House: ein Zimmer",
          "Akamasoa Guest House: Restaurant oder Gemeinschaftsbereich",
          "Akamasoa Guest House: die Aussicht"
        ],
        "mg": [
          "Akamasoa Guest House: ny ivelany",
          "Akamasoa Guest House: efitrano iray",
          "Akamasoa Guest House: trano fisakafoana na toerana iombonana",
          "Akamasoa Guest House: ny fijery"
        ]
      }
    },
    "chez-liantsoa": {
      "desc": {
        "en": "Cosy, budget-friendly inn with clean rooms and warm local hospitality, close to the village centre and to guides and transport.",
        "fr": "Auberge chaleureuse et bon marché, aux chambres propres et à l’accueil local attentionné, près du centre du village, des guides et des transports.",
        "de": "Gemütliche, günstige Herberge mit sauberen Zimmern und herzlicher Gastfreundschaft, nahe dem Ortszentrum, den Guides und den Verkehrsmitteln.",
        "mg": "Trano fandraisana vahiny mafana sady mora vidy, misy efitrano madio sy fandraisana tsara avy amin'ny mponina, akaikin'ny afovoan-tanàna, ny mpitari-dalana ary ny fitaterana."
      },
      "price": {
        "en": "Budget — contact for rates",
        "fr": "Petit budget — nous contacter pour les tarifs",
        "de": "Günstig – Preise auf Anfrage",
        "mg": "Mora vidy — anontanio ny vidiny"
      },
      "gallery[].alt": {
        "en": [
          "Chez Liantsoa exterior",
          "Room at Chez Liantsoa",
          "Restaurant or common area at Chez Liantsoa",
          "View from Chez Liantsoa"
        ],
        "fr": [
          "Chez Liantsoa : vue extérieure",
          "Chez Liantsoa : une chambre",
          "Chez Liantsoa : restaurant ou espace commun",
          "Chez Liantsoa : la vue"
        ],
        "de": [
          "Chez Liantsoa: Außenansicht",
          "Chez Liantsoa: ein Zimmer",
          "Chez Liantsoa: Restaurant oder Gemeinschaftsbereich",
          "Chez Liantsoa: die Aussicht"
        ],
        "mg": [
          "Chez Liantsoa: ny ivelany",
          "Chez Liantsoa: efitrano iray",
          "Chez Liantsoa: trano fisakafoana na toerana iombonana",
          "Chez Liantsoa: ny fijery"
        ]
      }
    },
    "mirary-hotel": {
      "desc": {
        "en": "Peaceful hotel with standalone garden bungalows and double rooms, private bathrooms, river access, a hotely-style restaurant, and easy access to local trekking start points.",
        "fr": "Hôtel paisible avec des bungalows indépendants dans le jardin et des chambres doubles, salles de bain privées, accès à la rivière, un restaurant de type hotely, et un accès facile aux points de départ des randonnées.",
        "de": "Ruhiges Hotel mit freistehenden Gartenbungalows und Doppelzimmern, eigenen Bädern, Zugang zum Fluss, einem Restaurant im Hotely-Stil und kurzen Wegen zu den Startpunkten der Wanderungen.",
        "mg": "Hotely milamina misy bungalow mitokana ao an-jaridaina sy efitrano roa olona, efitra fandroana manokana, fidinana amin'ny renirano, trano fisakafoana tahaka ny hotely malagasy, ary akaiky ireo toerana fiaingana amin'ny dia an-tongotra."
      },
      "price": {
        "en": "50,000–80,000 Ar / night",
        "fr": "50 000–80 000 Ar / nuit",
        "de": "50.000–80.000 Ar / Nacht",
        "mg": "50 000–80 000 Ar / alina"
      },
      "wifiNote": { "en": "In the rooms", "fr": "Dans les chambres", "de": "In den Zimmern", "mg": "Ao amin'ny efitrano" },
      "rooms": {
        "en": [
          { "type": "Double", "price": "50,000 Ar" },
          { "type": "Triple (1 double + 1 single bed)", "price": "80,000 Ar" }
        ],
        "fr": [
          { "type": "Double", "price": "50 000 Ar" },
          { "type": "Triple (1 lit double + 1 lit simple)", "price": "80 000 Ar" }
        ],
        "de": [
          { "type": "Doppelzimmer", "price": "50.000 Ar" },
          { "type": "Dreibettzimmer (1 Doppelbett + 1 Einzelbett)", "price": "80.000 Ar" }
        ],
        "mg": [
          { "type": "Fandriana roa olona", "price": "50 000 Ar" },
          { "type": "Telo olona (fandriana roa olona 1 + fandriana kely 1)", "price": "80 000 Ar" }
        ]
      },
      "meals": {
        "en": ["Hotely-style restaurant: simple Malagasy plates"],
        "fr": ["Restaurant de type hotely : plats malgaches simples"],
        "de": ["Restaurant im Hotely-Stil: einfache madagassische Gerichte"],
        "mg": ["Trano fisakafoana tahaka ny hotely: sakafo malagasy tsotra"]
      },
      "features": {
        "en": ["River access"],
        "fr": ["Accès à la rivière"],
        "de": ["Zugang zum Fluss"],
        "mg": ["Fidinana amin'ny renirano"]
      },
      "gallery[].alt": {
        "en": [
          "Mirary Hotel exterior",
          "Room at Mirary Hotel",
          "Restaurant or common area at Mirary Hotel",
          "View from Mirary Hotel"
        ],
        "fr": [
          "Mirary Hotel : vue extérieure",
          "Mirary Hotel : une chambre",
          "Mirary Hotel : restaurant ou espace commun",
          "Mirary Hotel : la vue"
        ],
        "de": [
          "Mirary Hotel: Außenansicht",
          "Mirary Hotel: ein Zimmer",
          "Mirary Hotel: Restaurant oder Gemeinschaftsbereich",
          "Mirary Hotel: die Aussicht"
        ],
        "mg": [
          "Mirary Hotel: ny ivelany",
          "Mirary Hotel: efitrano iray",
          "Mirary Hotel: trano fisakafoana na toerana iombonana",
          "Mirary Hotel: ny fijery"
        ]
      }
    },
    "chez-rose": {
      "desc": {
        "en": "A village hotely — the local word for a simple hostel — with basic rooms, hot water and shared bathrooms. No Wi-Fi, and no meals unless there is a hotely restaurant downstairs.",
        "fr": "Un hotely de village — le mot local pour une auberge simple — avec des chambres basiques, eau chaude et salles de bain partagées. Pas de Wi-Fi, et pas de repas sauf s’il y a un restaurant hotely au rez-de-chaussée.",
        "de": "Ein Hotely im Ort – das einheimische Wort für eine einfache Herberge – mit schlichten Zimmern, Warmwasser und Gemeinschaftsbädern. Kein WLAN und keine Mahlzeiten, außer es gibt unten ein Hotely-Restaurant.",
        "mg": "Hotely ao an-tanàna — toerana tsotra hatoriana — misy efitrano tsotra, rano mafana ary efitra fandroana iombonana. Tsy misy Wi-Fi, ary tsy misy sakafo raha tsy misy hotely fisakafoana eo ambany rihana."
      },
      "price": {
        "en": "About 20,000–50,000 Ar / night",
        "fr": "Environ 20 000–50 000 Ar / nuit",
        "de": "Etwa 20.000–50.000 Ar / Nacht",
        "mg": "Eo ho eo amin'ny 20 000–50 000 Ar / alina"
      },
      "features": {
        "en": ["Shared bathrooms", "No Wi-Fi"],
        "fr": ["Salles de bain partagées", "Pas de Wi-Fi"],
        "de": ["Gemeinschaftsbäder", "Kein WLAN"],
        "mg": ["Efitra fandroana iombonana", "Tsy misy Wi-Fi"]
      },
      "gallery[].alt": {
        "en": [
          "Chez Rose exterior",
          "Room at Chez Rose",
          "Restaurant or common area at Chez Rose",
          "View from Chez Rose"
        ],
        "fr": [
          "Chez Rose : vue extérieure",
          "Chez Rose : une chambre",
          "Chez Rose : restaurant ou espace commun",
          "Chez Rose : la vue"
        ],
        "de": [
          "Chez Rose: Außenansicht",
          "Chez Rose: ein Zimmer",
          "Chez Rose: Restaurant oder Gemeinschaftsbereich",
          "Chez Rose: die Aussicht"
        ],
        "mg": [
          "Chez Rose: ny ivelany",
          "Chez Rose: efitrano iray",
          "Chez Rose: trano fisakafoana na toerana iombonana",
          "Chez Rose: ny fijery"
        ]
      }
    },
    "hotel-in-kavana": {
      "desc": {
        "en": "A village hotely — the local word for a simple hostel — with basic rooms, hot water and shared bathrooms. No Wi-Fi, and no meals unless there is a hotely restaurant downstairs.",
        "fr": "Un hotely de village — le mot local pour une auberge simple — avec des chambres basiques, eau chaude et salles de bain partagées. Pas de Wi-Fi, et pas de repas sauf s’il y a un restaurant hotely au rez-de-chaussée.",
        "de": "Ein Hotely im Ort – das einheimische Wort für eine einfache Herberge – mit schlichten Zimmern, Warmwasser und Gemeinschaftsbädern. Kein WLAN und keine Mahlzeiten, außer es gibt unten ein Hotely-Restaurant.",
        "mg": "Hotely ao an-tanàna — toerana tsotra hatoriana — misy efitrano tsotra, rano mafana ary efitra fandroana iombonana. Tsy misy Wi-Fi, ary tsy misy sakafo raha tsy misy hotely fisakafoana eo ambany rihana."
      },
      "price": {
        "en": "About 20,000–50,000 Ar / night",
        "fr": "Environ 20 000–50 000 Ar / nuit",
        "de": "Etwa 20.000–50.000 Ar / Nacht",
        "mg": "Eo ho eo amin'ny 20 000–50 000 Ar / alina"
      },
      "features": {
        "en": ["Shared bathrooms", "No Wi-Fi"],
        "fr": ["Salles de bain partagées", "Pas de Wi-Fi"],
        "de": ["Gemeinschaftsbäder", "Kein WLAN"],
        "mg": ["Efitra fandroana iombonana", "Tsy misy Wi-Fi"]
      },
      "gallery[].alt": {
        "en": [
          "Hotel In-Kavana exterior",
          "Room at Hotel In-Kavana",
          "Restaurant or common area at Hotel In-Kavana",
          "View from Hotel In-Kavana"
        ],
        "fr": [
          "Hotel In-Kavana : vue extérieure",
          "Hotel In-Kavana : une chambre",
          "Hotel In-Kavana : restaurant ou espace commun",
          "Hotel In-Kavana : la vue"
        ],
        "de": [
          "Hotel In-Kavana: Außenansicht",
          "Hotel In-Kavana: ein Zimmer",
          "Hotel In-Kavana: Restaurant oder Gemeinschaftsbereich",
          "Hotel In-Kavana: die Aussicht"
        ],
        "mg": [
          "Hotel In-Kavana: ny ivelany",
          "Hotel In-Kavana: efitrano iray",
          "Hotel In-Kavana: trano fisakafoana na toerana iombonana",
          "Hotel In-Kavana: ny fijery"
        ]
      }
    }
  },
  "eat": {
    "varibolo-resto": {
      "desc": {
        "en": "Riverside restaurant beside the Namorona serving Malagasy and American dishes for breakfast, lunch and dinner — run by Varibolo, Ranomafana's kayak operator, which rents kayaks for self-guided trips down the river.",
        "fr": "Restaurant au bord de la Namorona servant des plats malgaches et américains au petit-déjeuner, au déjeuner et au dîner — tenu par Varibolo, le loueur de kayaks de Ranomafana, qui loue des kayaks pour descendre la rivière en autonomie.",
        "de": "Restaurant am Ufer der Namorona mit madagassischen und amerikanischen Gerichten zum Frühstück, Mittag- und Abendessen – betrieben von Varibolo, dem Kajakanbieter von Ranomafana, der Kajaks für Flussfahrten auf eigene Faust vermietet.",
        "mg": "Trano fisakafoana eo amoron'ny Namorona, manome sakafo malagasy sy amerikanina amin'ny maraina, antoandro ary hariva — tantanan'ny Varibolo, mpandraharaha kayak eto Ranomafana, izay manofa kayak ho an'izay te hidina amin'ny renirano tsy misy mpitari-dalana."
      },
      "highlights": {
        "en": ["Malagasy and American menu", "Breakfast, lunch and dinner", "Kayak trips arranged by the same team"],
        "fr": [
          "Carte malgache et américaine",
          "Petit-déjeuner, déjeuner et dîner",
          "Sorties en kayak organisées par la même équipe"
        ],
        "de": [
          "Madagassische und amerikanische Karte",
          "Frühstück, Mittag- und Abendessen",
          "Kajaktouren vom selben Team"
        ],
        "mg": [
          "Sakafo malagasy sy amerikanina",
          "Sakafo maraina, antoandro ary hariva",
          "Dia an-kayak alahatry ny ekipa iray ihany"
        ]
      },
      "contact.note": {
        "en": "Staff speak English, French and Malagasy. US number: +1 516 479 1889. The restaurant's banner also gives variboloresto72@gmail.com.",
        "fr": "L’équipe parle anglais, français et malgache. Numéro aux États-Unis : +1 516 479 1889. La banderole du restaurant indique aussi variboloresto72@gmail.com.",
        "de": "Das Team spricht Englisch, Französisch und Madagassisch. US-Nummer: +1 516 479 1889. Auf dem Banner des Restaurants steht außerdem variboloresto72@gmail.com.",
        "mg": "Miteny anglisy, frantsay ary malagasy ny mpiasa. Laharana any Etazonia: +1 516 479 1889. Misy ihany koa variboloresto72@gmail.com eo amin'ny sora-baventin'ny trano fisakafoanana."
      },
      "gallery[].alt": {
        "en": [
          "Varibolo's green-painted restaurant and kayak shop, with its Kayak Ranomafana banner",
          "The covered dining terrace at Varibolo Resto, with red-checked tablecloths and a view over banana plants to the forest",
          "A dish at Varibolo Resto"
        ],
        "fr": [
          "Le restaurant et la boutique de kayak de Varibolo, peints en vert, avec la banderole Kayak Ranomafana",
          "La terrasse couverte de Varibolo Resto, avec ses nappes à carreaux rouges et une vue sur les bananiers et la forêt",
          "Varibolo Resto : un plat"
        ],
        "de": [
          "Das grün gestrichene Restaurant mit Kajakladen von Varibolo und dem Banner „Kayak Ranomafana“",
          "Die überdachte Terrasse von Varibolo Resto mit rot karierten Tischdecken und Blick über Bananenstauden auf den Wald",
          "Varibolo Resto: ein Gericht"
        ],
        "mg": [
          "Ny trano fisakafoanana sy fivarotana kayak an'i Varibolo, voaloko maitso, misy ny sora-baventy Kayak Ranomafana",
          "Ny lavarangana misy tafo ao amin'ny Varibolo Resto, misy lamba latabatra misy efajoro mena, mijery ny akondro sy ny ala",
          "Varibolo Resto: sakafo iray"
        ]
      }
    },
    "chez-gaspard-restaurant": {
      "name": {
        "en": "Chez Gaspard Restaurant",
        "fr": "Restaurant Chez Gaspard",
        "de": "Restaurant Chez Gaspard",
        "mg": "Trano fisakafoana Chez Gaspard"
      },
      "desc": {
        "en": "The dining room at Chez Gaspard, behind the Catholic church and run by the Priests of the Sacred Heart — the village's best-known sit-down meal and a standard stop for guided groups, with a bar showing sport.",
        "fr": "La salle à manger de Chez Gaspard, derrière l’église catholique, tenue par les Prêtres du Sacré-Cœur — le restaurant le plus connu du village et une étape classique des groupes accompagnés, avec un bar qui diffuse le sport.",
        "de": "Der Speisesaal von Chez Gaspard hinter der katholischen Kirche, geführt von den Priestern vom Heiligsten Herzen – das bekannteste Restaurant im Ort und fester Halt geführter Gruppen, mit einer Bar, in der Sport läuft.",
        "mg": "Ny efitrano fisakafoana ao Chez Gaspard, ao ambadiky ny fiangonana katolika, tantanan'ireo Pretra ao amin'ny Fo Masina — ny trano fisakafoana malaza indrindra ao an-tanàna ary fijanonana mahazatra ho an'ny vondrona miaraka amin'ny mpitari-dalana, misy bar mampiseho fanatanjahantena."
      },
      "highlights": {
        "en": ["Set three-course dinners", "Zebu dishes", "Vegetarian on request"],
        "fr": ["Dîners en menu trois plats", "Plats de zébu", "Végétarien sur demande"],
        "de": ["Drei-Gänge-Abendmenüs", "Zebu-Gerichte", "Vegetarisch auf Wunsch"],
        "mg": [
          "Sakafo hariva voalamina misy lovia telo",
          "Sakafo vita amin'ny hen'omby",
          "Sakafo tsy misy hena raha angatahina"
        ]
      },
      "meals": {
        "en": ["Breakfast: 12,000–15,000 Ar", "Lunch or dinner: 12,000–35,000 Ar à la carte", "Set menu: 45,000 Ar"],
        "fr": [
          "Petit-déjeuner : 12 000–15 000 Ar",
          "Déjeuner ou dîner : 12 000–35 000 Ar à la carte",
          "Menu : 45 000 Ar"
        ],
        "de": [
          "Frühstück: 12.000–15.000 Ar",
          "Mittag- oder Abendessen: 12.000–35.000 Ar à la carte",
          "Menü: 45.000 Ar"
        ],
        "mg": [
          "Sakafo maraina: 12 000–15 000 Ar",
          "Sakafo antoandro na hariva: 12 000–35 000 Ar araka ny safidy",
          "Sakafo voalamina: 45 000 Ar"
        ]
      }
    },
    "grenat-hotel-dining": {
      "name": {
        "en": "Grenat Hotel Restaurant",
        "fr": "Restaurant du Grenat Hotel",
        "de": "Restaurant des Grenat Hotel",
        "mg": "Trano fisakafoan'ny Grenat Hotel"
      },
      "desc": {
        "en": "Hotel restaurant with rainforest views on the main road at the village exit, serving traditional rice dishes alongside French-influenced plates. The best-rated restaurant in Ranomafana.",
        "fr": "Restaurant d’hôtel avec vue sur la forêt, sur la route principale à la sortie du village, servant des plats de riz traditionnels et des assiettes d’inspiration française. Le restaurant le mieux noté de Ranomafana.",
        "de": "Hotelrestaurant mit Blick auf den Regenwald an der Hauptstraße am Ortsausgang, mit traditionellen Reisgerichten und französisch inspirierten Tellern. Das am besten bewertete Restaurant in Ranomafana.",
        "mg": "Trano fisakafoana ao amin'ny hotely manana fijery ny ala, eo amin'ny lalana lehibe amin'ny fivoahana ny tanàna, manome vary sy laoka nentim-paharazana sy sakafo misy fitaomana frantsay. Ny trano fisakafoana tsara laza indrindra eto Ranomafana."
      },
      "highlights": {
        "en": ["Zebu steak", "Rice and laoka", "Terrace seating"],
        "fr": ["Steak de zébu", "Riz et laoka", "Terrasse"],
        "de": ["Zebusteak", "Reis und Laoka", "Terrasse"],
        "mg": ["Hen'omby natono", "Vary sy laoka", "Toerana fisakafoana any ivelany"]
      },
      "meals": {
        "en": ["Breakfast: from 10,000 Ar", "Lunch or dinner: 15,000–30,000 Ar"],
        "fr": ["Petit-déjeuner : à partir de 10 000 Ar", "Déjeuner ou dîner : 15 000–30 000 Ar"],
        "de": ["Frühstück: ab 10.000 Ar", "Mittag- oder Abendessen: 15.000–30.000 Ar"],
        "mg": ["Sakafo maraina: manomboka amin'ny 10 000 Ar", "Sakafo antoandro na hariva: 15 000–30 000 Ar"]
      }
    },
    "manja-restaurant": {
      "name": {
        "en": "Hotel Manja Restaurant",
        "fr": "Restaurant de l’Hôtel Manja",
        "de": "Restaurant des Hotel Manja",
        "mg": "Trano fisakafoan'ny Hotel Manja"
      },
      "desc": {
        "en": "Busy, inexpensive hillside restaurant — the most-reviewed place to eat in Ranomafana and a reliable budget option, with an exceptional voanjobory. Wi-Fi reaches the restaurant, which is more than can be said for the rooms.",
        "fr": "Restaurant animé et bon marché à flanc de colline — l’endroit le plus commenté de Ranomafana et une valeur sûre pour les petits budgets, avec un voanjobory exceptionnel. Le Wi-Fi atteint le restaurant, ce qui n’est pas le cas des chambres.",
        "de": "Belebtes, günstiges Restaurant am Hang – das meistbewertete Lokal in Ranomafana und eine verlässliche Wahl für kleines Budget, mit hervorragendem Voanjobory. Das WLAN reicht bis ins Restaurant, was man von den Zimmern nicht sagen kann.",
        "mg": "Trano fisakafoana be mpanjifa sady mora vidy eo amin'ny havoana — ilay be fanehoan-kevitra indrindra eto Ranomafana ary safidy azo antoka ho an'ny tsy manam-bola be, misy voanjobory tsara mihoatra. Tonga hatrany amin'ny trano fisakafoana ny Wi-Fi, fa tsy hatrany amin'ny efitrano."
      },
      "highlights": {
        "en": ["Voanjobory (Bambara groundnut stew)", "Malagasy set plates", "Wi-Fi in the dining room"],
        "fr": ["Voanjobory (ragoût de pois bambara)", "Assiettes malgaches", "Wi-Fi dans la salle"],
        "de": ["Voanjobory (Eintopf aus Bambara-Erdnüssen)", "Madagassische Tellergerichte", "WLAN im Speisesaal"],
        "mg": ["Voanjobory", "Sakafo malagasy voalamina", "Wi-Fi ao amin'ny efitrano fisakafoana"]
      },
      "meals": {
        "en": ["Breakfast: from 8,000 Ar", "Lunch or dinner: 12,000–25,000 Ar"],
        "fr": ["Petit-déjeuner : à partir de 8 000 Ar", "Déjeuner ou dîner : 12 000–25 000 Ar"],
        "de": ["Frühstück: ab 8.000 Ar", "Mittag- oder Abendessen: 12.000–25.000 Ar"],
        "mg": ["Sakafo maraina: manomboka amin'ny 8 000 Ar", "Sakafo antoandro na hariva: 12 000–25 000 Ar"]
      },
      "gallery[].alt": {
        "en": [
          "Hotel Manja Restaurant frontage",
          "Dining room at Hotel Manja Restaurant",
          "A dish at Hotel Manja Restaurant"
        ],
        "fr": [
          "Restaurant de l’Hôtel Manja : la devanture",
          "Restaurant de l’Hôtel Manja : la salle",
          "Restaurant de l’Hôtel Manja : un plat"
        ],
        "de": [
          "Restaurant des Hotel Manja: von außen",
          "Restaurant des Hotel Manja: der Gastraum",
          "Restaurant des Hotel Manja: ein Gericht"
        ],
        "mg": [
          "Trano fisakafoan'ny Hotel Manja: ny ivelany",
          "Trano fisakafoan'ny Hotel Manja: ny efitrano fisakafoana",
          "Trano fisakafoan'ny Hotel Manja: sakafo iray"
        ]
      }
    },
    "hotel-thermal-restaurant": {
      "desc": {
        "en": "The 60-seat restaurant terrace at Hotel Thermal, serving French and seafood-leaning dishes beside the thermal complex. The most comfortable lunch stop between the park and the pool.",
        "fr": "La terrasse-restaurant de 60 couverts de l’Hôtel Thermal, avec une cuisine française tournée vers les produits de la mer, à côté du complexe thermal. La halte déjeuner la plus confortable entre le parc et la piscine.",
        "de": "Die Restaurantterrasse des Hotel Thermal mit 60 Plätzen, mit französischer Küche und viel Fisch und Meeresfrüchten, direkt neben der Thermalanlage. Der bequemste Mittagshalt zwischen Park und Thermalbad.",
        "mg": "Ny terasy fisakafoana misy toerana 60 ao amin'ny Hotel Thermal, manome sakafo frantsay sy hazan-dranomasina, eo akaikin'ny toeram-pandroana rano mafana. Ny toerana mahafinaritra indrindra hisakafoana antoandro eo anelanelan'ny valan-javaboahary sy ny dobo."
      },
      "highlights": {
        "en": ["French classics", "Seafood", "Outdoor terrace"],
        "fr": ["Classiques français", "Produits de la mer", "Terrasse en plein air"],
        "de": ["Französische Klassiker", "Fisch und Meeresfrüchte", "Terrasse im Freien"],
        "mg": ["Sakafo frantsay mahazatra", "Hazan-dranomasina", "Terasy any ivelany"]
      }
    },
    "rianala-gite-restaurant": {
      "name": {
        "en": "Rianala Gite Restaurant",
        "fr": "Restaurant du gîte Rianala",
        "de": "Restaurant im Gîte Rianala",
        "mg": "Trano fisakafoan'ny Gîte Rianala"
      },
      "desc": {
        "en": "Home cooking at the small gîte by the park entrance. Only one review exists, but it called dinner here the best meal of a Madagascar trip. Worth booking ahead if you are staying elsewhere.",
        "fr": "Cuisine maison au petit gîte près de l’entrée du parc. Il n’existe qu’un seul avis, mais il qualifie le dîner pris ici de meilleur repas de tout un voyage à Madagascar. Mieux vaut réserver si vous logez ailleurs.",
        "de": "Hausmannskost im kleinen Gîte am Parkeingang. Es gibt nur eine Bewertung, doch sie nennt das Abendessen hier das beste Essen einer ganzen Madagaskarreise. Wer anderswo wohnt, sollte vorher reservieren.",
        "mg": "Sakafo masaka an-trano ao amin'ilay gîte kely akaikin'ny fidirana amin'ny valan-javaboahary. Fanehoan-kevitra iray monja no misy, saingy nilaza izy fa ny sakafo hariva teto no sakafo tsara indrindra nandritra ny diany rehetra teto Madagasikara. Tsara ny mamandrika mialoha raha any an-toeran-kafa ianao no matory."
      },
      "highlights": {
        "en": ["Home-cooked Malagasy dishes", "Right at the park entrance", "Call ahead"],
        "fr": ["Plats malgaches faits maison", "Juste à l’entrée du parc", "Appelez avant de venir"],
        "de": ["Hausgemachte madagassische Gerichte", "Direkt am Parkeingang", "Vorher anrufen"],
        "mg": ["Sakafo malagasy masaka an-trano", "Eo amin'ny fidirana amin'ny valan-javaboahary", "Antsoy mialoha"]
      },
      "contact.note": {
        "en": "By the entrance of Ranomafana National Park, Ambatolahy.",
        "fr": "À l’entrée du parc national de Ranomafana, Ambatolahy.",
        "de": "Am Eingang des Nationalparks Ranomafana, Ambatolahy.",
        "mg": "Eo akaikin'ny fidirana amin'ny valan-javaboahary Ranomafana, Ambatolahy."
      },
      "gallery[].alt": {
        "en": [
          "Rianala Gite Restaurant frontage",
          "Dining room at Rianala Gite Restaurant",
          "A dish at Rianala Gite Restaurant"
        ],
        "fr": [
          "Restaurant du gîte Rianala : la devanture",
          "Restaurant du gîte Rianala : la salle",
          "Restaurant du gîte Rianala : un plat"
        ],
        "de": [
          "Restaurant im Gîte Rianala: von außen",
          "Restaurant im Gîte Rianala: der Gastraum",
          "Restaurant im Gîte Rianala: ein Gericht"
        ],
        "mg": [
          "Trano fisakafoan'ny Gîte Rianala: ny ivelany",
          "Trano fisakafoan'ny Gîte Rianala: ny efitrano fisakafoana",
          "Trano fisakafoan'ny Gîte Rianala: sakafo iray"
        ]
      }
    },
    "karibotel-restaurant": {
      "name": {
        "en": "Karibotel Restaurant",
        "fr": "Restaurant du Karibotel",
        "de": "Restaurant des Karibotel",
        "mg": "Trano fisakafoan'ny Karibotel"
      },
      "desc": {
        "en": "Restaurant at Karibotel, Tsararano, just before the village, on the hillside above the river.",
        "fr": "Le restaurant du Karibotel, à Tsararano, juste avant le village, à flanc de colline au-dessus de la rivière.",
        "de": "Das Restaurant des Karibotel in Tsararano, kurz vor dem Ort, am Hang über dem Fluss.",
        "mg": "Trano fisakafoana ao amin'ny Karibotel, Tsararano, alohan'ny tanàna, eo amin'ny tehezan-tendrombohitra ambonin'ny renirano."
      },
      "highlights": {
        "en": ["Terrace above the river", "Breakfast from 8,000 Ar"],
        "fr": ["Terrasse au-dessus de la rivière", "Petit-déjeuner à partir de 8 000 Ar"],
        "de": ["Terrasse über dem Fluss", "Frühstück ab 8.000 Ar"],
        "mg": ["Terasy ambonin'ny renirano", "Sakafo maraina manomboka amin'ny 8 000 Ar"]
      },
      "meals": {
        "en": ["Breakfast: from 8,000 Ar", "Lunch or dinner: from 45,000 Ar"],
        "fr": ["Petit-déjeuner : à partir de 8 000 Ar", "Déjeuner ou dîner : à partir de 45 000 Ar"],
        "de": ["Frühstück: ab 8.000 Ar", "Mittag- oder Abendessen: ab 45.000 Ar"],
        "mg": [
          "Sakafo maraina: manomboka amin'ny 8 000 Ar",
          "Sakafo antoandro na hariva: manomboka amin'ny 45 000 Ar"
        ]
      },
      "gallery[].alt": {
        "en": [
          "Karibotel Restaurant frontage",
          "Dining room at Karibotel Restaurant",
          "A dish at Karibotel Restaurant"
        ],
        "fr": [
          "Restaurant du Karibotel : la devanture",
          "Restaurant du Karibotel : la salle",
          "Restaurant du Karibotel : un plat"
        ],
        "de": [
          "Restaurant des Karibotel: von außen",
          "Restaurant des Karibotel: der Gastraum",
          "Restaurant des Karibotel: ein Gericht"
        ],
        "mg": [
          "Trano fisakafoan'ny Karibotel: ny ivelany",
          "Trano fisakafoan'ny Karibotel: ny efitrano fisakafoana",
          "Trano fisakafoan'ny Karibotel: sakafo iray"
        ]
      }
    },
    "centrest-restaurant": {
      "name": {
        "en": "Centrest Sejour Restaurant",
        "fr": "Restaurant du Centrest Séjour",
        "de": "Restaurant des Centrest Sejour",
        "mg": "Trano fisakafoan'ny Centrest Sejour"
      },
      "desc": {
        "en": "Hotel restaurant at the village entrance serving both Malagasy and French cuisine, open to non-residents.",
        "fr": "Restaurant d’hôtel à l’entrée du village, avec une cuisine malgache et française, ouvert aux clients extérieurs.",
        "de": "Hotelrestaurant am Ortseingang mit madagassischer und französischer Küche, auch für Gäste, die nicht im Hotel wohnen.",
        "mg": "Trano fisakafoana ao amin'ny hotely eo amin'ny fidirana ao an-tanàna, manome sakafo malagasy sy frantsay, misokatra ho an'ny vahiny tsy matory ao."
      },
      "highlights": {
        "en": ["Malagasy and French menu", "Village entrance"],
        "fr": ["Carte malgache et française", "À l’entrée du village"],
        "de": ["Madagassische und französische Karte", "Am Ortseingang"],
        "mg": ["Sakafo malagasy sy frantsay", "Eo amin'ny fidirana ao an-tanàna"]
      },
      "meals": {
        "en": ["Breakfast: 25,000–30,000 Ar (continental or American)", "Lunch or dinner: from 40,000 Ar"],
        "fr": [
          "Petit-déjeuner : 25 000–30 000 Ar (continental ou américain)",
          "Déjeuner ou dîner : à partir de 40 000 Ar"
        ],
        "de": [
          "Frühstück: 25.000–30.000 Ar (kontinental oder amerikanisch)",
          "Mittag- oder Abendessen: ab 40.000 Ar"
        ],
        "mg": [
          "Sakafo maraina: 25 000–30 000 Ar (kaontinantaly na amerikanina)",
          "Sakafo antoandro na hariva: manomboka amin'ny 40 000 Ar"
        ]
      }
    },
    "au-domnatur-restaurant": {
      "name": {
        "en": "Au Domnatur Restaurant",
        "fr": "Restaurant Au Domnatur",
        "de": "Restaurant Au Domnatur",
        "mg": "Trano fisakafoan'ny Au Domnatur"
      },
      "desc": {
        "en": "On-site restaurant at the forest-edge lodge 2 km above town, with canopy views from the dining terrace.",
        "fr": "Le restaurant du lodge en lisière de forêt, 2 km au-dessus du village, avec vue sur la canopée depuis la terrasse.",
        "de": "Das Restaurant der Lodge am Waldrand, 2 km oberhalb des Orts, mit Blick auf das Blätterdach von der Terrasse.",
        "mg": "Trano fisakafoana ao amin'ilay lodge eo amoron'ny ala, 2 km ambonin'ny tanàna, manana fijery ny tampon'ny ala avy eo amin'ny terasy."
      },
      "highlights": {
        "en": ["Canopy views", "Order ahead"],
        "fr": ["Vue sur la canopée", "Commander à l’avance"],
        "de": ["Blick auf das Blätterdach", "Vorher bestellen"],
        "mg": ["Fijery ny tampon'ny ala", "Mandidia mialoha"]
      },
      "meals": {
        "en": ["Breakfast: 20,000 Ar continental, 25,000–30,000 Ar American", "Lunch or dinner: 40,000–50,000 Ar"],
        "fr": [
          "Petit-déjeuner : 20 000 Ar continental, 25 000–30 000 Ar américain",
          "Déjeuner ou dîner : 40 000–50 000 Ar"
        ],
        "de": [
          "Frühstück: 20.000 Ar kontinental, 25.000–30.000 Ar amerikanisch",
          "Mittag- oder Abendessen: 40.000–50.000 Ar"
        ],
        "mg": [
          "Sakafo maraina: 20 000 Ar kaontinantaly, 25 000–30 000 Ar amerikanina",
          "Sakafo antoandro na hariva: 40 000–50 000 Ar"
        ]
      }
    },
    "cristo-bar-restaurant": {
      "name": {
        "en": "Cristo Hotel Bar & Restaurant",
        "fr": "Bar-restaurant du Cristo Hotel",
        "de": "Bar & Restaurant des Cristo Hotel",
        "mg": "Bar sy trano fisakafoan'ny Cristo Hotel"
      },
      "desc": {
        "en": "Riverside bar and dining room 5 km from the village, often combined with the hotel's kayaking and excursion offers.",
        "fr": "Bar et salle à manger au bord de la rivière, à 5 km du village, souvent combinés avec les sorties en kayak et les excursions de l’hôtel.",
        "de": "Bar und Speisesaal am Fluss, 5 km vom Ort, oft kombiniert mit den Kajak- und Ausflugsangeboten des Hotels.",
        "mg": "Bar sy efitrano fisakafoana eo amoron'ny renirano, 5 km miala ny tanàna, matetika ampiarahina amin'ny kayak sy ny fitsangatsanganana atolotry ny hotely."
      },
      "highlights": {
        "en": ["River setting", "Bar", "Excursions on request"],
        "fr": ["Cadre au bord de la rivière", "Bar", "Excursions sur demande"],
        "de": ["Lage am Fluss", "Bar", "Ausflüge auf Wunsch"],
        "mg": ["Eo amoron'ny renirano", "Bar", "Fitsangatsanganana raha angatahina"]
      }
    },
    "setam-lodge-dining": {
      "name": {
        "en": "Setam Lodge Dining Hall",
        "fr": "Salle à manger du Setam Lodge",
        "de": "Speisesaal der Setam Lodge",
        "mg": "Efitrano fisakafoan'ny Setam Lodge"
      },
      "desc": {
        "en": "A 70-seat bar and restaurant above the canopy — the largest and most formal dining room in the area. Reserve ahead if you are not staying at the lodge.",
        "fr": "Un bar-restaurant de 70 couverts au-dessus de la canopée — la salle la plus grande et la plus élégante des environs. Réservez si vous ne logez pas au lodge.",
        "de": "Ein Bar-Restaurant mit 70 Plätzen über dem Blätterdach – der größte und eleganteste Speisesaal der Gegend. Wer nicht in der Lodge wohnt, sollte reservieren.",
        "mg": "Bar sy trano fisakafoana misy toerana 70 ambonin'ny tampon'ny ala — ny efitrano fisakafoana lehibe indrindra sady manetriketrika indrindra amin'ny manodidina. Mamandriha mialoha raha tsy matory ao amin'ny lodge ianao."
      },
      "highlights": {
        "en": ["Set menus", "Canopy views", "70 seats — groups welcome"],
        "fr": ["Menus", "Vue sur la canopée", "70 couverts — groupes bienvenus"],
        "de": ["Menüs", "Blick auf das Blätterdach", "70 Plätze – Gruppen willkommen"],
        "mg": ["Sakafo voalamina", "Fijery ny tampon'ny ala", "Toerana 70 — tongasoa ny vondrona"]
      },
      "meals": {
        "en": ["Breakfast: 25,000 Ar continental, 30,000 Ar American", "Lunch or dinner: 50,000 Ar set price"],
        "fr": [
          "Petit-déjeuner : 25 000 Ar continental, 30 000 Ar américain",
          "Déjeuner ou dîner : menu à 50 000 Ar"
        ],
        "de": [
          "Frühstück: 25.000 Ar kontinental, 30.000 Ar amerikanisch",
          "Mittag- oder Abendessen: Menü für 50.000 Ar"
        ],
        "mg": [
          "Sakafo maraina: 25 000 Ar kaontinantaly, 30 000 Ar amerikanina",
          "Sakafo antoandro na hariva: sakafo voalamina 50 000 Ar"
        ]
      }
    },
    "ihary-restaurant": {
      "name": {
        "en": "Ihary Hotel Restaurant",
        "fr": "Restaurant de l’Ihary Hotel",
        "de": "Restaurant des Ihary Hotel",
        "mg": "Trano fisakafoan'ny Ihary Hotel"
      },
      "desc": {
        "en": "Riverside restaurant on the bank of the Namorona serving Malagasy cuisine. Quality is acceptable and prices low; service can be slow, so it is not the place to eat before an early park start.",
        "fr": "Restaurant au bord de la Namorona servant une cuisine malgache. Qualité correcte et prix bas ; le service peut être lent, ce n’est donc pas l’endroit où manger avant un départ matinal pour le parc.",
        "de": "Restaurant am Ufer der Namorona mit madagassischer Küche. Ordentliche Qualität und niedrige Preise; der Service kann langsam sein, also nicht der richtige Ort vor einem frühen Parkstart.",
        "mg": "Trano fisakafoana eo amoron'ny Namorona manome sakafo malagasy. Antonony ny kalitao ary mora ny vidiny; mety ho miadana ny fanompoana, ka tsy toerana tokony hisakafoana alohan'ny fiaingana maraina be mankany amin'ny valan-javaboahary."
      },
      "highlights": {
        "en": ["River views", "Packed lunches for the park", "Allow extra time"],
        "fr": ["Vue sur la rivière", "Paniers-repas pour le parc", "Prévoyez du temps"],
        "de": ["Flussblick", "Lunchpakete für den Park", "Zeit einplanen"],
        "mg": ["Fijery ny renirano", "Sakafo entina ho an'ny valan-javaboahary", "Omeo fotoana bebe kokoa"]
      },
      "meals": {
        "en": ["Breakfast, lunch or dinner: 10,000–30,000 Ar"],
        "fr": ["Petit-déjeuner, déjeuner ou dîner : 10 000–30 000 Ar"],
        "de": ["Frühstück, Mittag- oder Abendessen: 10.000–30.000 Ar"],
        "mg": ["Sakafo maraina, antoandro na hariva: 10 000–30 000 Ar"]
      },
      "gallery[].alt": {
        "en": [
          "Ihary Hotel Restaurant frontage",
          "Dining room at Ihary Hotel Restaurant",
          "A dish at Ihary Hotel Restaurant"
        ],
        "fr": [
          "Restaurant de l’Ihary Hotel : la devanture",
          "Restaurant de l’Ihary Hotel : la salle",
          "Restaurant de l’Ihary Hotel : un plat"
        ],
        "de": [
          "Restaurant des Ihary Hotel: von außen",
          "Restaurant des Ihary Hotel: der Gastraum",
          "Restaurant des Ihary Hotel: ein Gericht"
        ],
        "mg": [
          "Trano fisakafoan'ny Ihary Hotel: ny ivelany",
          "Trano fisakafoan'ny Ihary Hotel: ny efitrano fisakafoana",
          "Trano fisakafoan'ny Ihary Hotel: sakafo iray"
        ]
      }
    },
    "coin-dor-restaurant": {
      "desc": {
        "en": "Central hotel-restaurant serving hearty local plates, with karaoke most evenings — the closest thing the village has to a night out.",
        "fr": "Hôtel-restaurant central aux assiettes locales copieuses, avec karaoké la plupart des soirs — ce qui se rapproche le plus d’une sortie nocturne au village.",
        "de": "Zentral gelegenes Hotel-Restaurant mit herzhaften lokalen Gerichten und fast jeden Abend Karaoke – das, was im Ort einem Ausgehabend am nächsten kommt.",
        "mg": "Hotely sy trano fisakafoana eo afovoan-tanàna, manome sakafo malagasy matsiro sady be, misy karaoke saika isan-kariva — ny akaiky indrindra amin'ny fialam-boly amin'ny alina ao an-tanàna."
      },
      "highlights": {
        "en": ["Local plates", "Karaoke", "Late opening"],
        "fr": ["Assiettes locales", "Karaoké", "Ouvert tard"],
        "de": ["Lokale Gerichte", "Karaoke", "Lange geöffnet"],
        "mg": ["Sakafo malagasy", "Karaoke", "Misokatra hatramin'ny alina"]
      },
      "gallery[].alt": {
        "en": ["Coin d’or frontage", "Dining room at Coin d’or", "A dish at Coin d’or"],
        "fr": ["Coin d’or : la devanture", "Coin d’or : la salle", "Coin d’or : un plat"],
        "de": ["Coin d’or: von außen", "Coin d’or: der Gastraum", "Coin d’or: ein Gericht"],
        "mg": ["Coin d'or: ny ivelany", "Coin d'or: ny efitrano fisakafoana", "Coin d'or: sakafo iray"]
      }
    },
    "park-entrance-restaurant": {
      "name": {
        "en": "Park Entrance Restaurant",
        "fr": "Restaurant de l’entrée du parc",
        "de": "Restaurant am Parkeingang",
        "mg": "Trano fisakafoana eo am-bavahadin'ny valan-javaboahary"
      },
      "desc": {
        "en": "Simple restaurant beside the national park reception — the practical lunch stop between a morning and an afternoon circuit. Expect around 15,000 Ar for a main dish.",
        "fr": "Restaurant simple à côté de l’accueil du parc national — la halte pratique pour déjeuner entre un circuit du matin et un circuit de l’après-midi. Comptez environ 15 000 Ar pour un plat.",
        "de": "Einfaches Restaurant neben dem Empfang des Nationalparks – der praktische Mittagshalt zwischen einem Rundweg am Vormittag und einem am Nachmittag. Rechnen Sie mit etwa 15.000 Ar für ein Hauptgericht.",
        "mg": "Trano fisakafoana tsotra eo akaikin'ny fandraisana vahiny ao amin'ny valan-javaboahary — toerana mety hisakafoana antoandro eo anelanelan'ny lalana maraina sy ny lalana tolakandro. Eo amin'ny 15 000 Ar eo ho eo ny sakafo iray."
      },
      "highlights": {
        "en": ["Walk-in lunch", "Cold drinks", "Right at the trailhead"],
        "fr": ["Déjeuner sans réservation", "Boissons fraîches", "Au départ des sentiers"],
        "de": ["Mittagessen ohne Reservierung", "Kalte Getränke", "Direkt am Ausgangspunkt der Wege"],
        "mg": [
          "Sakafo antoandro tsy mila famandrihana",
          "Zava-pisotro mangatsiaka",
          "Eo amin'ny fiaingan'ny lalana"
        ]
      },
      "gallery[].alt": {
        "en": [
          "Park Entrance Restaurant frontage",
          "Dining room at Park Entrance Restaurant",
          "A dish at Park Entrance Restaurant"
        ],
        "fr": [
          "Restaurant de l’entrée du parc : la devanture",
          "Restaurant de l’entrée du parc : la salle",
          "Restaurant de l’entrée du parc : un plat"
        ],
        "de": [
          "Restaurant am Parkeingang: von außen",
          "Restaurant am Parkeingang: der Gastraum",
          "Restaurant am Parkeingang: ein Gericht"
        ],
        "mg": [
          "Trano fisakafoana eo am-bavahadin'ny valan-javaboahary: ny ivelany",
          "Trano fisakafoana eo am-bavahadin'ny valan-javaboahary: ny efitrano fisakafoana",
          "Trano fisakafoana eo am-bavahadin'ny valan-javaboahary: sakafo iray"
        ]
      }
    },
    "centre-valbio-dining": {
      "name": {
        "en": "Centre ValBio Dining",
        "fr": "Repas au Centre ValBio",
        "de": "Essen im Centre ValBio",
        "mg": "Sakafo ao amin'ny Centre ValBio"
      },
      "desc": {
        "en": "Three-course meals at the research station. Not a walk-in restaurant — meals must be arranged with the campus at least a day in advance.",
        "fr": "Repas de trois plats à la station de recherche. Ce n’est pas un restaurant ouvert à tous — les repas se réservent auprès du campus au moins un jour à l’avance.",
        "de": "Drei-Gänge-Menüs in der Forschungsstation. Kein Restaurant zum Hineinspazieren – Mahlzeiten müssen mindestens einen Tag vorher mit dem Campus vereinbart werden.",
        "mg": "Sakafo misy lovia telo ao amin'ny foibem-pikarohana. Tsy trano fisakafoana misokatra ho an'ny rehetra — tsy maintsy alahatra amin'ny campus iray andro mialoha farafahakeliny ny sakafo."
      },
      "highlights": {
        "en": ["Three-course set meals", "Arrange one day ahead", "Researcher and visitor dining"],
        "fr": ["Menus de trois plats", "Réserver la veille", "Repas des chercheurs et des visiteurs"],
        "de": ["Drei-Gänge-Menüs", "Einen Tag vorher vereinbaren", "Essen für Forschende und Besucher"],
        "mg": [
          "Sakafo voalamina misy lovia telo",
          "Alaharo iray andro mialoha",
          "Sakafon'ny mpikaroka sy ny mpitsidika"
        ]
      }
    },
    "ellies-snack": {
      "desc": {
        "en": "Local snack bar for samosas, coconut cakes, coffee and fresh fruit juices.",
        "fr": "Snack local pour les samoussas, les gâteaux à la noix de coco, le café et les jus de fruits frais.",
        "de": "Einheimische Snackbar mit Samosas, Kokoskuchen, Kaffee und frischen Fruchtsäften.",
        "mg": "Toerana fivarotana sakafo maivana: sambosy, mofo voanio, kafe ary ranom-boankazo vaovao."
      },
      "highlights": {
        "en": ["Samosas", "Coconut cake", "Fresh juice"],
        "fr": ["Samoussas", "Gâteau à la noix de coco", "Jus frais"],
        "de": ["Samosas", "Kokoskuchen", "Frischer Saft"],
        "mg": ["Sambosy", "Mofo voanio", "Ranom-boankazo vaovao"]
      },
      "gallery[].alt": {
        "en": ["Ellie’s Snack frontage", "Dining room at Ellie’s Snack", "A dish at Ellie’s Snack"],
        "fr": ["Ellie’s Snack : la devanture", "Ellie’s Snack : la salle", "Ellie’s Snack : un plat"],
        "de": ["Ellie’s Snack: von außen", "Ellie’s Snack: der Gastraum", "Ellie’s Snack: ein Gericht"],
        "mg": ["Ellie's Snack: ny ivelany", "Ellie's Snack: ny efitrano fisakafoana", "Ellie's Snack: sakafo iray"]
      }
    }
  },
  "do": {
    "ranomafana-national-park": {
      "name": {
        "en": "Ranomafana National Park",
        "fr": "Parc national de Ranomafana",
        "de": "Nationalpark Ranomafana",
        "mg": "Valan-javaboahary Ranomafana"
      },
      "desc": {
        "en": "UNESCO World Heritage montane rainforest holding fourteen lemur species, including the critically endangered golden bamboo lemur. A certified guide is mandatory for international visitors — arrange one through your hotel, or choose from the guides working that day when you arrive.",
        "fr": "Forêt tropicale de montagne inscrite au patrimoine mondial de l’UNESCO, abritant quatorze espèces de lémuriens, dont l’hapalémur doré, en danger critique d’extinction. Un guide agréé est obligatoire pour les visiteurs étrangers — réservez-le par votre hôtel, ou choisissez parmi les guides présents ce jour-là à votre arrivée.",
        "de": "Bergregenwald und UNESCO-Welterbe mit vierzehn Lemurenarten, darunter der vom Aussterben bedrohte Goldene Bambuslemur. Für internationale Besucher ist ein zertifizierter Guide Pflicht – über das Hotel vermitteln lassen oder bei Ankunft unter den Guides wählen, die an dem Tag arbeiten.",
        "mg": "Ala mando an-tendrombohitra voasoratra ho lova iraisan'izao tontolo izao ao amin'ny UNESCO, onenan'ny karazana gidro efatra ambin'ny folo, anisan'izany ny gidro volamena mpihinam-bolo, izay atahorana ho lany tamingana tanteraka. Tsy maintsy miaraka amin'ny mpitari-dalana nahazo fahazoan-dalana ny mpitsidika vahiny — alaharo amin'ny alalan'ny hotelinao, na misafidiana amin'ireo mpitari-dalana miasa amin'io andro io rehefa tonga ianao."
      },
      "price": {
        "en": "55,000 Ar adult/day · 25,000 Ar ages 5–12 · under 5 free · 5,000 Ar community fee · guide 90,000–150,000 Ar per group, by circuit",
        "fr": "55 000 Ar adulte/jour · 25 000 Ar de 5 à 12 ans · gratuit avant 5 ans · taxe communautaire 5 000 Ar · guide 90 000–150 000 Ar par groupe, selon le circuit",
        "de": "55.000 Ar Erwachsene/Tag · 25.000 Ar 5–12 Jahre · unter 5 frei · 5.000 Ar Gemeindeabgabe · Guide 90.000–150.000 Ar pro Gruppe, je nach Rundweg",
        "mg": "55 000 Ar olon-dehibe/andro · 25 000 Ar ho an'ny 5–12 taona · maimaim-poana latsaky ny 5 taona · saran'ny fiaraha-monina 5 000 Ar · mpitari-dalana 90 000–150 000 Ar isaky ny vondrona, arakaraka ny lalana"
      },
      "duration": {
        "en": "2 hours to 2 days, depending on circuit",
        "fr": "De 2 heures à 2 jours, selon le circuit",
        "de": "2 Stunden bis 2 Tage, je nach Rundweg",
        "mg": "Adiny 2 ka hatramin'ny andro 2, arakaraka ny lalana"
      },
      "tips": {
        "en": [
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
        "fr": [
          "Ouvert de 07:00 à 17:00. Le milieu de matinée est généralement le meilleur moment, quand les lémuriens sont réveillés et commencent à se nourrir",
          "Espèces en ariary uniquement à l’entrée — ni carte, ni euros, ni dollars",
          "Prévoyez des petites coupures ; le bureau n’a souvent pas de monnaie sur les gros billets",
          "La taxe communautaire de 5 000 Ar se paie à un guichet distinct du billet d’entrée",
          "Un guide pour un groupe de une à quatre personnes ; à partir de six, il en faut au moins deux",
          "Parlez à votre guide de votre forme physique et de vos éventuelles craintes — il adaptera l’itinéraire",
          "Vous voyagez seul ? Demandez au bureau de vous associer à d’autres visiteurs pour partager le prix du guide",
          "Les tarifs des guides augmentent en janvier 2027 : 120 000 Ar pour Talatakely ou Sahamalaotra, 150 000 Ar pour Vatoharanana, 180 000 Ar pour Valohoaka et 250 000 Ar pour un guide spécialisé",
          "Pour y aller : prenez un taxi-brousse en direction de Fianarantsoa depuis la gare routière du centre et demandez l’entrée du parc — 20 à 25 minutes, 1 000–2 000 Ar. En voiture, c’est à 7 km en montant",
          "Si le temps le permet, redescendez à pied : une belle heure de descente jusqu’au village, et l’on voit parfois des lémuriens près de la route",
          "Les citoyens malgaches paient 2 000 Ar (adultes) et 500 Ar (5 à 12 ans)",
          "Prévoyez une veste de pluie en toute saison"
        ],
        "de": [
          "Geöffnet 07:00–17:00. Am besten meist am Vormittag, wenn die Lemuren wach sind und zu fressen beginnen",
          "Am Eingang nur Bargeld in Ariary – keine Karten, keine Euro oder Dollar",
          "Kleine Scheine mitbringen; das Büro hat für große Scheine oft kein Wechselgeld",
          "Die Gemeindeabgabe von 5.000 Ar wird an einem eigenen Schalter bezahlt, getrennt vom Parkticket",
          "Ein Guide für eine Gruppe von einer bis vier Personen; ab sechs Personen mindestens zwei",
          "Sagen Sie Ihrem Guide, wie fit Sie sind und was Sie beschäftigt – er passt die Route an",
          "Allein unterwegs? Bitten Sie das Büro, Sie mit anderen zusammenzubringen, um die Guidegebühr zu teilen",
          "Ab Januar 2027 steigen die Guidepreise: 120.000 Ar für Talatakely oder Sahamalaotra, 150.000 Ar für Vatoharanana, 180.000 Ar für Valohoaka und 250.000 Ar für einen Fachguide",
          "Anfahrt: Ein Taxi-Brousse Richtung Fianarantsoa vom Busbahnhof im Zentrum nehmen und nach dem Parkeingang fragen – 20–25 Minuten, 1.000–2.000 Ar. Mit dem Auto sind es 7 km bergauf",
          "Bei gutem Wetter zurück zu Fuß: eine wunderschöne Stunde bergab in den Ort, und manchmal sieht man Lemuren nahe der Straße",
          "Madagassische Staatsbürger zahlen 2.000 Ar (Erwachsene) und 500 Ar (5–12 Jahre)",
          "Zu jeder Jahreszeit eine Regenjacke mitbringen"
        ],
        "mg": [
          "Misokatra 07:00–17:00. Matetika ny antoandro maraina no tsara indrindra, rehefa mifoha ny gidro ary manomboka mihinana",
          "Vola ariary an-tanana ihany no raisina eo am-bavahady — tsy misy karatra, tsy euro na dolara",
          "Mitondrà vola madinika; matetika tsy manana famerenam-bola ho an'ny vola be ny birao",
          "Aloa amin'ny varavarankely hafa, tsy miaraka amin'ny tapakila fidirana, ny saran'ny fiaraha-monina 5 000 Ar",
          "Mpitari-dalana iray ho an'ny vondrona olona iray ka hatramin'ny efatra; roa farafahakeliny ho an'ny vondrona olona enina na mihoatra",
          "Lazao amin'ny mpitari-dalana ny herinao sy izay manahiana anao — hampifanaraka ny lalana aminao izy",
          "Irery ve ianao? Angataho amin'ny birao ny hampiarahana anao amin'ny mpitsidika hafa mba hizarana ny saran'ny mpitari-dalana",
          "Hiakatra ny saran'ny mpitari-dalana manomboka amin'ny volana janoary 2027: 120 000 Ar ho an'i Talatakely na Sahamalaotra, 150 000 Ar ho an'i Vatoharanana, 180 000 Ar ho an'i Valohoaka ary 250 000 Ar ho an'ny mpitari-dalana manam-pahaizana manokana",
          "Fandehanana: mandehana taxi-brousse mankany Fianarantsoa avy eo amin'ny fiantsonana eo afovoan-tanàna ary angataho ny fidirana amin'ny valan-javaboahary — 20–25 minitra, 1 000–2 000 Ar. Raha fiara, 7 km miakatra amin'ny lalana",
          "Raha mamela ny toetr'andro, miverena an-tongotra: adiny iray mahafinaritra midina mankany an-tanàna, ary indraindray misy gidro hita eo akaikin'ny lalana",
          "Ny olom-pirenena malagasy dia mandoa 2 000 Ar (olon-dehibe) sy 500 Ar (5–12 taona)",
          "Mitondrà akanjo fiarovana amin'ny orana na inona na inona vanim-potoana"
        ]
      },
      "intro": {
        "en": [
          "Ranomafana became Madagascar’s fourth national park in 1991 and a UNESCO World Heritage Site in 2007. It protects 43,550 hectares of mountainous rainforest and is one of the island’s most important conservation sites, a treasure trove of plants and animals found nowhere else. It is the fourth most visited national park in Madagascar by international tourists, and for good reason.",
          "Every visitor buys an entry ticket and pays for a local guide to show them the forest. What you spend depends on the circuit, the guide and what you hope to see. Arrange a guide through your hotel, or turn up at the park and choose from the guides working that day."
        ],
        "fr": [
          "Ranomafana est devenu le quatrième parc national de Madagascar en 1991 et un site du patrimoine mondial de l’UNESCO en 2007. Il protège 43 550 hectares de forêt tropicale de montagne et compte parmi les sites de conservation les plus importants de l’île, un trésor de plantes et d’animaux qui n’existent nulle part ailleurs. C’est le quatrième parc national de Madagascar le plus visité par les touristes étrangers, et pour cause.",
          "Chaque visiteur achète un billet d’entrée et paie un guide local pour lui faire découvrir la forêt. Le budget dépend du circuit, du guide et de ce que vous espérez voir. Réservez un guide par votre hôtel, ou présentez-vous au parc et choisissez parmi les guides présents ce jour-là."
        ],
        "de": [
          "Ranomafana wurde 1991 Madagaskars vierter Nationalpark und 2007 UNESCO-Welterbe. Er schützt 43.550 Hektar Bergregenwald und gehört zu den wichtigsten Schutzgebieten der Insel, eine Schatzkammer voller Pflanzen und Tiere, die es nirgendwo sonst gibt. Er ist der von internationalen Reisenden am vierthäufigsten besuchte Nationalpark Madagaskars – und das zu Recht.",
          "Jeder Besucher kauft ein Eintrittsticket und bezahlt einen einheimischen Guide, der ihm den Wald zeigt. Was Sie ausgeben, hängt vom Rundweg, vom Guide und davon ab, was Sie sehen möchten. Lassen Sie sich einen Guide über das Hotel vermitteln, oder kommen Sie zum Park und wählen Sie unter den Guides, die an dem Tag arbeiten."
        ],
        "mg": [
          "Lasa valan-javaboahary fahefatra teto Madagasikara i Ranomafana tamin'ny 1991, ary voasoratra ho lova iraisan'izao tontolo izao ao amin'ny UNESCO tamin'ny 2007. Miaro ala mando an-tendrombohitra 43 550 hektara izy, ary iray amin'ireo toerana fiarovana zava-boahary manan-danja indrindra eto amin'ny nosy, harena misy zava-maniry sy biby tsy hita na aiza na aiza hafa. Izy no valan-javaboahary fahefatra be mpitsidika vahiny indrindra eto Madagasikara, ary tsy tsy misy antony izany.",
          "Mividy tapakila fidirana ny mpitsidika tsirairay ary mandoa mpitari-dalana eto an-toerana hampiseho azy ny ala. Miankina amin'ny lalana, ny mpitari-dalana ary izay tianao ho hita ny vola holanianao. Alaharo amin'ny alalan'ny hotelinao ny mpitari-dalana, na mankanesa any amin'ny valan-javaboahary ary misafidiana amin'ireo mpitari-dalana miasa amin'io andro io."
        ]
      },
      "wildlife": {
        "en": [
          {
            "group": "Lemurs",
            "note": "Fourteen species live here, among them:",
            "photo": {
              "src": "images/ranomafana-national-park-ruffed-lemur.jpg",
              "alt": "A black-and-white ruffed lemur looking down from a branch, Ranomafana National Park"
            },
            "species": [
              "Golden bamboo lemur",
              "Greater bamboo lemur",
              "Ranomafana grey bamboo lemur",
              "Milne-Edwards’ sifaka",
              "Southern black-and-white ruffed lemur",
              "Red-bellied lemur",
              "Red-fronted brown lemur",
              "Aye-aye",
              "Brown mouse lemur",
              "Crossley’s dwarf lemur",
              "Small-toothed sportive lemur",
              "Sibree’s dwarf lemur",
              "Peyrieras’ woolly lemur"
            ]
          },
          {
            "group": "Birds",
            "note": "125 species, many found only in Madagascar. Look for:",
            "photo": {
              "src": "images/ranomafana-national-park-paradise-flycatcher.jpg",
              "alt": "A Madagascar paradise flycatcher sitting on its mossy nest, Ranomafana National Park"
            },
            "species": ["Forest ibis", "Ground-rollers", "Blue vanga"]
          },
          {
            "group": "Reptiles",
            "note": "Well camouflaged, so let your guide point them out:",
            "photo": {
              "src": "images/ranomafana-national-park-chameleon-branch.jpg",
              "alt": "A chameleon with blue legs and an orange-banded tail on a branch, Ranomafana National Park"
            },
            "species": ["Satanic leaf-tailed gecko", "Mossy leaf-tailed gecko", "Madagascar boa", "Chameleons"]
          },
          {
            "group": "Other mammals",
            "note": "Look down as well as up:",
            "photo": {
              "src": "images/ranomafana-national-park-mongoose.jpg",
              "alt": "A ring-tailed mongoose crossing a stone path in Ranomafana National Park"
            },
            "species": ["Ring-tailed mongoose"]
          }
        ],
        "fr": [
          {
            "group": "Lémuriens",
            "note": "Quatorze espèces vivent ici, parmi lesquelles :",
            "photo": {
              "src": "images/ranomafana-national-park-ruffed-lemur.jpg",
              "alt": "Un vari noir et blanc qui regarde depuis une branche, parc national de Ranomafana"
            },
            "species": [
              "Hapalémur doré",
              "Grand hapalémur",
              "Hapalémur gris de Ranomafana",
              "Propithèque de Milne-Edwards",
              "Vari noir et blanc du Sud",
              "Lémur à ventre roux",
              "Lémur à front roux",
              "Aye-aye",
              "Microcèbe roux",
              "Cheirogale de Crossley",
              "Lépilémur à petites dents",
              "Cheirogale de Sibree",
              "Avahi de Peyriéras"
            ]
          },
          {
            "group": "Oiseaux",
            "note": "125 espèces, dont beaucoup n’existent qu’à Madagascar. Cherchez :",
            "photo": {
              "src": "images/ranomafana-national-park-paradise-flycatcher.jpg",
              "alt": "Un tchitrec malgache posé sur son nid de mousse, parc national de Ranomafana"
            },
            "species": ["Ibis huppé", "Brachyptérolles", "Vanga bleu"]
          },
          {
            "group": "Reptiles",
            "note": "Bien camouflés : laissez votre guide vous les montrer :",
            "photo": {
              "src": "images/ranomafana-national-park-chameleon-branch.jpg",
              "alt": "Un caméléon aux pattes bleues et à la queue annelée d’orange sur une branche, parc national de Ranomafana"
            },
            "species": ["Uroplate fantastique", "Uroplate de Sikora", "Boa de Madagascar", "Caméléons"]
          },
          {
            "group": "Autres mammifères",
            "note": "Regardez vers le sol autant que vers la cime :",
            "photo": {
              "src": "images/ranomafana-national-park-mongoose.jpg",
              "alt": "Une galidie à queue annelée traversant un chemin de pierre dans le parc national de Ranomafana"
            },
            "species": ["Galidie à queue annelée"]
          }
        ],
        "de": [
          {
            "group": "Lemuren",
            "note": "Vierzehn Arten leben hier, darunter:",
            "photo": {
              "src": "images/ranomafana-national-park-ruffed-lemur.jpg",
              "alt": "Ein Schwarzweißer Vari blickt von einem Ast herab, Nationalpark Ranomafana"
            },
            "species": [
              "Goldener Bambuslemur",
              "Großer Bambuslemur",
              "Grauer Bambuslemur von Ranomafana",
              "Milne-Edwards-Sifaka",
              "Südlicher Schwarzweißer Vari",
              "Rotbauchmaki",
              "Rotstirnmaki",
              "Fingertier (Aye-Aye)",
              "Brauner Mausmaki",
              "Crossley-Katzenmaki",
              "Kleinzahn-Wieselmaki",
              "Sibree-Katzenmaki",
              "Peyrieras-Wollmaki"
            ]
          },
          {
            "group": "Vögel",
            "note": "125 Arten, viele davon nur auf Madagaskar. Achten Sie auf:",
            "photo": {
              "src": "images/ranomafana-national-park-paradise-flycatcher.jpg",
              "alt": "Ein Madagaskar-Paradiesschnäpper auf seinem moosigen Nest, Nationalpark Ranomafana"
            },
            "species": ["Schopfibis", "Erdracken", "Blauvanga"]
          },
          {
            "group": "Reptilien",
            "note": "Gut getarnt – lassen Sie sie sich von Ihrem Guide zeigen:",
            "photo": {
              "src": "images/ranomafana-national-park-chameleon-branch.jpg",
              "alt": "Ein Chamäleon mit blauen Beinen und orange gebändertem Schwanz auf einem Ast, Nationalpark Ranomafana"
            },
            "species": ["Satanischer Plattschwanzgecko", "Moosiger Plattschwanzgecko", "Madagaskar-Boa", "Chamäleons"]
          },
          {
            "group": "Weitere Säugetiere",
            "note": "Schauen Sie nach unten wie nach oben:",
            "photo": {
              "src": "images/ranomafana-national-park-mongoose.jpg",
              "alt": "Ein Ringelschwanzmungo überquert einen Steinweg im Nationalpark Ranomafana"
            },
            "species": ["Ringelschwanzmungo"]
          }
        ],
        "mg": [
          {
            "group": "Gidro",
            "note": "Karazany efatra ambin'ny folo no miaina eto, anisan'izany:",
            "photo": {
              "src": "images/ranomafana-national-park-ruffed-lemur.jpg",
              "alt": "Varikandana (gidro mainty sy fotsy) mijery avy eo amin'ny sampan-kazo, valan-javaboahary Ranomafana"
            },
            "species": [
              "Gidro volamena mpihinam-bolo",
              "Gidro lehibe mpihinam-bolo",
              "Gidro volondavenona mpihinam-bolo",
              "Simpona (Milne-Edwards)",
              "Varikandana mainty sy fotsy",
              "Gidro kibo mena",
              "Gidro handrina mena",
              "Aiay",
              "Tsidy mena",
              "Matavirambo (Crossley)",
              "Fitiliky nify kely",
              "Matavirambo (Sibree)",
              "Avahy (Peyriéras)"
            ]
          },
          {
            "group": "Vorona",
            "note": "Karazany 125, ny ankamaroany tsy hita afa-tsy eto Madagasikara. Tadiavo:",
            "photo": {
              "src": "images/ranomafana-national-park-paradise-flycatcher.jpg",
              "alt": "Vorona rambo lava (Terpsiphone mutata) mipetraka eo amin'ny akaniny vita amin'ny volon-ketsa, valan-javaboahary Ranomafana"
            },
            "species": ["Akohonala", "Vorona mandeha an-tany (ground-roller)", "Vanga manga"]
          },
          {
            "group": "Biby mandady",
            "note": "Mahay miafina tsara izy ireo, ka avelao ny mpitari-dalana hanondro azy:",
            "photo": {
              "src": "images/ranomafana-national-park-chameleon-branch.jpg",
              "alt": "Tana manana tongotra manga sy rambo misy tsipika volom-boasary eo amin'ny sampan-kazo, valan-javaboahary Ranomafana"
            },
            "species": [
              "Androngo rambo ravina (Uroplatus phantasticus)",
              "Androngo rambo ravina (Uroplatus sikorae)",
              "Do",
              "Tana"
            ]
          },
          {
            "group": "Biby mampinono hafa",
            "note": "Jereo koa ny tany fa tsy ny ambony ihany:",
            "photo": {
              "src": "images/ranomafana-national-park-mongoose.jpg",
              "alt": "Vontsira mena miampita lalana vato ao amin'ny valan-javaboahary Ranomafana"
            },
            "species": ["Vontsira mena"]
          }
        ]
      },
      "circuits": {
        "en": [
          {
            "name": "Talatakely (Aureus)",
            "duration": "2–4 hours",
            "level": "Easy to moderate",
            "desc": "The park’s main circuit, on a mix of clear paths and rougher cuts through secondary forest, with some steep climbs and descents. It passes through bamboo forest home to golden and greater bamboo lemur groups and climbs to a lookout where red-bellied and red-fronted lemurs like to hang out. Side paths lead to the Sakaroa waterfall, good for a dip on a hot day. Reachable on foot from the gate."
          },
          {
            "name": "Sahamalaotra",
            "duration": "About 2 hours",
            "level": "Easy",
            "desc": "A short circuit with its own entrance at Sahamalaotra, priced the same as Talatakely."
          },
          {
            "name": "Vatoharanana",
            "duration": "3–4 hours",
            "level": "Moderate",
            "desc": "Into primary rainforest beyond Talatakely, with a camping area en route. Fewer visitors, more intact forest, and the best chance at Milne-Edwards’ sifaka. Wear proper footwear and carry water."
          },
          {
            "name": "Valohoaka",
            "duration": "5–7 hours",
            "level": "Demanding",
            "desc": "The longest trek on the guide price list. Plan on most of a day: carry lunch and two litres of water, and wear serious footwear."
          },
          {
            "name": "Vohiparara",
            "duration": "Full day, or 2 days to the sacred lake",
            "level": "Moderate",
            "desc": "Higher-altitude forest at the park’s western edge — the birders’ circuit, and the route towards the sacred lake on the two-day version. Cooler and wetter than Talatakely; ask specifically for a birding guide."
          }
        ],
        "fr": [
          {
            "name": "Talatakely (Aureus)",
            "duration": "2 à 4 heures",
            "level": "Facile à modéré",
            "desc": "Le circuit principal du parc, sur des sentiers dégagés et des passages plus rudes à travers la forêt secondaire, avec quelques montées et descentes raides. Il traverse une forêt de bambous où vivent des groupes d’hapalémurs dorés et de grands hapalémurs, et grimpe jusqu’à un belvédère où aiment se tenir les lémurs à ventre roux et à front roux. Des sentiers secondaires mènent à la cascade de Sakaroa, idéale pour une baignade par temps chaud. Accessible à pied depuis l’entrée."
          },
          {
            "name": "Sahamalaotra",
            "duration": "Environ 2 heures",
            "level": "Facile",
            "desc": "Un circuit court avec sa propre entrée à Sahamalaotra, au même prix que Talatakely."
          },
          {
            "name": "Vatoharanana",
            "duration": "3 à 4 heures",
            "level": "Modéré",
            "desc": "Dans la forêt primaire au-delà de Talatakely, avec une aire de camping en chemin. Moins de visiteurs, une forêt plus intacte et les meilleures chances de voir le propithèque de Milne-Edwards. Portez de bonnes chaussures et emportez de l’eau."
          },
          {
            "name": "Valohoaka",
            "duration": "5 à 7 heures",
            "level": "Difficile",
            "desc": "La plus longue randonnée de la grille tarifaire des guides. Prévoyez la majeure partie de la journée : emportez un déjeuner et deux litres d’eau, et portez de vraies chaussures de marche."
          },
          {
            "name": "Vohiparara",
            "duration": "Une journée, ou 2 jours jusqu’au lac sacré",
            "level": "Modéré",
            "desc": "Une forêt d’altitude à la lisière ouest du parc — le circuit des ornithologues, et la route vers le lac sacré dans sa version de deux jours. Plus frais et plus humide que Talatakely ; demandez expressément un guide spécialisé en oiseaux."
          }
        ],
        "de": [
          {
            "name": "Talatakely (Aureus)",
            "duration": "2–4 Stunden",
            "level": "Leicht bis mittel",
            "desc": "Der Hauptrundweg des Parks, teils auf gut ausgebauten Wegen, teils auf raueren Pfaden durch Sekundärwald, mit einigen steilen Auf- und Abstiegen. Er führt durch Bambuswald, in dem Gruppen von Goldenen und Großen Bambuslemuren leben, und steigt zu einem Aussichtspunkt an, an dem sich Rotbauch- und Rotstirnmakis gern aufhalten. Abzweige führen zum Sakaroa-Wasserfall, ideal für ein Bad an heißen Tagen. Vom Eingang zu Fuß erreichbar."
          },
          {
            "name": "Sahamalaotra",
            "duration": "Etwa 2 Stunden",
            "level": "Leicht",
            "desc": "Ein kurzer Rundweg mit eigenem Eingang in Sahamalaotra, zum selben Preis wie Talatakely."
          },
          {
            "name": "Vatoharanana",
            "duration": "3–4 Stunden",
            "level": "Mittel",
            "desc": "In den Primärregenwald hinter Talatakely, mit einem Zeltplatz unterwegs. Weniger Besucher, ursprünglicherer Wald und die besten Chancen auf den Milne-Edwards-Sifaka. Festes Schuhwerk tragen und Wasser mitnehmen."
          },
          {
            "name": "Valohoaka",
            "duration": "5–7 Stunden",
            "level": "Anspruchsvoll",
            "desc": "Die längste Wanderung auf der Preisliste der Guides. Planen Sie fast einen ganzen Tag ein: Mittagessen und zwei Liter Wasser mitnehmen und richtige Wanderschuhe tragen."
          },
          {
            "name": "Vohiparara",
            "duration": "Ganzer Tag, oder 2 Tage bis zum heiligen See",
            "level": "Mittel",
            "desc": "Höher gelegener Wald am Westrand des Parks – der Rundweg für Vogelbeobachter und in der zweitägigen Variante der Weg zum heiligen See. Kühler und feuchter als Talatakely; fragen Sie ausdrücklich nach einem Vogel-Guide."
          }
        ],
        "mg": [
          {
            "name": "Talatakely (Aureus)",
            "duration": "Adiny 2–4",
            "level": "Mora ka hatramin'ny antonony",
            "desc": "Ny lalana lehibe ao amin'ny valan-javaboahary, misy lalana mazava sy lalana sarotra kokoa mamakivaky ala faharoa, misy fiakarana sy fidinana mideza. Mamakivaky ala volo onenan'ny vondrona gidro volamena sy gidro lehibe mpihinam-bolo izy, ary miakatra mankany amin'ny toerana fijerena izay tian'ny gidro kibo mena sy handrina mena. Misy lalana kely mitondra mankany amin'ny riandranon'i Sakaroa, tsara hilomanosana amin'ny andro mafana. Azo andehanana an-tongotra avy eo am-bavahady."
          },
          {
            "name": "Sahamalaotra",
            "duration": "Adiny 2 eo ho eo",
            "level": "Mora",
            "desc": "Lalana fohy manana fidirana manokana ao Sahamalaotra, mitovy vidy amin'ny Talatakely."
          },
          {
            "name": "Vatoharanana",
            "duration": "Adiny 3–4",
            "level": "Antonony",
            "desc": "Miditra ao amin'ny ala mando voalohany any ankoatr'i Talatakely, misy toerana filasiana eny an-dalana. Vitsy kokoa ny mpitsidika, mbola tsy simba kokoa ny ala, ary eto no misy vintana tsara indrindra hahitana ny simpona. Mitafy kiraro mety ary mitondrà rano."
          },
          {
            "name": "Valohoaka",
            "duration": "Adiny 5–7",
            "level": "Sarotra",
            "desc": "Ny dia an-tongotra lavitra indrindra amin'ny lisitry ny saran'ny mpitari-dalana. Andro iray saika manontolo: mitondrà sakafo antoandro sy rano roa litatra, ary mitafy kiraro matanjaka."
          },
          {
            "name": "Vohiparara",
            "duration": "Andro iray manontolo, na andro 2 mankany amin'ny farihy masina",
            "level": "Antonony",
            "desc": "Ala any amin'ny toerana avo kokoa eo amin'ny sisiny andrefan'ny valan-javaboahary — ny lalan'ireo mpijery vorona, ary ny lalana mankany amin'ny farihy masina raha andro roa. Mangatsiatsiaka sy mando kokoa noho i Talatakely; angataho manokana ny mpitari-dalana manampahaizana momba ny vorona."
          }
        ]
      },
      "guideFees": {
        "en": [
          { "walk": "Talatakely (Aureus)", "hours": "2–4", "price": "90,000 Ar" },
          { "walk": "Sahamalaotra", "hours": "2", "price": "90,000 Ar" },
          { "walk": "Vatoharanana", "hours": "3–4", "price": "120,000 Ar" },
          { "walk": "Valohoaka trek", "hours": "5–7", "price": "150,000 Ar" }
        ],
        "fr": [
          { "walk": "Talatakely (Aureus)", "hours": "2–4", "price": "90 000 Ar" },
          { "walk": "Sahamalaotra", "hours": "2", "price": "90 000 Ar" },
          { "walk": "Vatoharanana", "hours": "3–4", "price": "120 000 Ar" },
          { "walk": "Valohoaka (randonnée)", "hours": "5–7", "price": "150 000 Ar" }
        ],
        "de": [
          { "walk": "Talatakely (Aureus)", "hours": "2–4", "price": "90.000 Ar" },
          { "walk": "Sahamalaotra", "hours": "2", "price": "90.000 Ar" },
          { "walk": "Vatoharanana", "hours": "3–4", "price": "120.000 Ar" },
          { "walk": "Valohoaka-Wanderung", "hours": "5–7", "price": "150.000 Ar" }
        ],
        "mg": [
          { "walk": "Talatakely (Aureus)", "hours": "2–4", "price": "90 000 Ar" },
          { "walk": "Sahamalaotra", "hours": "2", "price": "90 000 Ar" },
          { "walk": "Vatoharanana", "hours": "3–4", "price": "120 000 Ar" },
          { "walk": "Valohoaka (dia lavitra)", "hours": "5–7", "price": "150 000 Ar" }
        ]
      },
      "gallery[].alt": {
        "en": [
          "A golden bamboo lemur feeding on bamboo leaves, Ranomafana National Park",
          "A greater bamboo lemur, with its white ear tufts, clinging to a bamboo stem, Ranomafana National Park",
          "A small cascade tumbling over mossy boulders in the rainforest, Ranomafana National Park",
          "A waterfall pouring into a forest pool, Ranomafana National Park",
          "A tiny leaf chameleon (Brookesia) on a mossy twig, Ranomafana National Park",
          "A comet moth resting on a leaf, Ranomafana National Park",
          "The Namorona River winding through its forested gorge",
          "A lemur clinging to a tree trunk among the bamboo, Ranomafana National Park",
          "The forest campsite inside Ranomafana National Park, with a wooden rack and a fire pit",
          "Looking up a giant rainforest tree into the canopy, Ranomafana National Park",
          "A brown lemur clinging to a trunk in the forest, Ranomafana National Park",
          "Walkers on a forest trail in Ranomafana National Park",
          "A greater bamboo lemur chewing a strip of bamboo, Ranomafana National Park",
          "A green chameleon on a branch, Ranomafana National Park",
          "A lemur on a mossy branch high in the canopy, Ranomafana National Park",
          "A lemur in the bamboo, Ranomafana National Park",
          "A lemur walking along a branch high in the trees, Ranomafana National Park",
          "A lemur on a hanging vine, its long bushy tail curled below, Ranomafana National Park",
          "A lemur looking out from a mossy trunk in the canopy, Ranomafana National Park",
          "A ring-tailed mongoose crossing a stone path in Ranomafana National Park",
          "A leaf-tailed gecko disguised as a dead leaf, Ranomafana National Park",
          "A bird perched in the understory, Ranomafana National Park",
          "A young chameleon held up for a closer look, Ranomafana National Park",
          "A black-and-white ruffed lemur looking down from a branch, Ranomafana National Park",
          "A Madagascar paradise flycatcher sitting on its mossy nest, Ranomafana National Park",
          "A chameleon with blue legs and an orange-banded tail on a branch, Ranomafana National Park",
          "A scaly ground-roller, one of the shy birds of the forest floor, in close-up, Ranomafana National Park",
          "Hungry nestlings calling from their nest hole, Ranomafana National Park",
          "A hairy black-and-orange caterpillar under a leaf, Ranomafana National Park",
          "Bamboo forest, home of the park's bamboo lemurs",
          "A stone-paved path through the bamboo forest, Ranomafana National Park",
          "Walkers following a trail under arching bamboo, Ranomafana National Park",
          "Moss-covered tree trunks in the rainforest, Ranomafana National Park",
          "A stream running over mossy rocks under the forest canopy, Ranomafana National Park",
          "A stream tumbling over rocks between ferns and mossy trees, Ranomafana National Park",
          "A stream cascading over lichen-covered boulders in the sun, Ranomafana National Park",
          "A rocky stream stepping down through the forest, Ranomafana National Park",
          "A tall waterfall falling into a pool behind a mossy tree, Ranomafana National Park",
          "The Namorona River rushing through the rainforest",
          "Walkers crossing a wooden footbridge over a forest stream, Ranomafana National Park",
          "Walkers crossing the yellow footbridge over the Namorona into the forest, Ranomafana National Park",
          "A group of visitors at the Parc National Ranomafana sign",
          "The sign at the park's interpretation centre, topped by a wooden lemur: “Veloma — Good bye — Au revoir”",
          "Inside the park's interpretation centre: a display of a Tanala village",
          "The board mapping the park's walking circuits"
        ],
        "fr": [
          "Un hapalémur doré mangeant des feuilles de bambou, parc national de Ranomafana",
          "Un grand hapalémur, reconnaissable à ses touffes blanches aux oreilles, agrippé à une tige de bambou, parc national de Ranomafana",
          "Une petite cascade dévalant des rochers moussus dans la forêt tropicale, parc national de Ranomafana",
          "Une cascade qui se jette dans un bassin en pleine forêt, parc national de Ranomafana",
          "Un minuscule caméléon-feuille (Brookesia) sur une brindille moussue, parc national de Ranomafana",
          "Un papillon comète posé sur une feuille, parc national de Ranomafana",
          "La Namorona qui serpente au fond de sa gorge boisée",
          "Un lémurien agrippé à un tronc parmi les bambous, parc national de Ranomafana",
          "Le camping en forêt du parc national de Ranomafana, avec un séchoir en bois et un foyer",
          "Vers la canopée, le long d’un arbre géant de la forêt, parc national de Ranomafana",
          "Un lémur brun agrippé à un tronc dans la forêt, parc national de Ranomafana",
          "Des marcheurs sur un sentier forestier du parc national de Ranomafana",
          "Un grand hapalémur qui mâche un éclat de bambou, parc national de Ranomafana",
          "Un caméléon vert sur une branche, parc national de Ranomafana",
          "Un lémurien sur une branche moussue, haut dans la canopée, parc national de Ranomafana",
          "Un lémurien dans les bambous, parc national de Ranomafana",
          "Un lémurien qui avance le long d’une branche, haut dans les arbres, parc national de Ranomafana",
          "Un lémurien sur une liane, sa longue queue touffue recourbée en dessous, parc national de Ranomafana",
          "Un lémurien qui observe depuis un tronc moussu dans la canopée, parc national de Ranomafana",
          "Une galidie à queue annelée traversant un chemin de pierre dans le parc national de Ranomafana",
          "Un uroplate déguisé en feuille morte, parc national de Ranomafana",
          "Un oiseau perché dans le sous-bois, parc national de Ranomafana",
          "Un jeune caméléon présenté de près, parc national de Ranomafana",
          "Un vari noir et blanc qui regarde depuis une branche, parc national de Ranomafana",
          "Un tchitrec malgache posé sur son nid de mousse, parc national de Ranomafana",
          "Un caméléon aux pattes bleues et à la queue annelée d’orange sur une branche, parc national de Ranomafana",
          "Un brachyptérolle écaillé, l’un des oiseaux discrets du sol forestier, en gros plan, parc national de Ranomafana",
          "Des oisillons affamés qui réclament au fond de leur cavité, parc national de Ranomafana",
          "Une chenille velue noire et orange sous une feuille, parc national de Ranomafana",
          "La forêt de bambous, domaine des hapalémurs du parc",
          "Un sentier pavé de pierres à travers la forêt de bambous, parc national de Ranomafana",
          "Des marcheurs sur un sentier sous une voûte de bambous, parc national de Ranomafana",
          "Des troncs couverts de mousse dans la forêt tropicale, parc national de Ranomafana",
          "Un ruisseau sur des rochers moussus sous la canopée, parc national de Ranomafana",
          "Un torrent qui dévale les rochers entre fougères et arbres moussus, parc national de Ranomafana",
          "Un torrent qui cascade sur des rochers couverts de lichens, au soleil, parc national de Ranomafana",
          "Un torrent rocailleux qui descend en gradins à travers la forêt, parc national de Ranomafana",
          "Une haute cascade qui tombe dans un bassin, derrière un arbre moussu, parc national de Ranomafana",
          "La Namorona qui dévale à travers la forêt tropicale",
          "Des marcheurs franchissent une passerelle en bois au-dessus d’un ruisseau forestier, parc national de Ranomafana",
          "Des marcheurs traversent la passerelle jaune au-dessus de la Namorona pour entrer dans la forêt, parc national de Ranomafana",
          "Un groupe de visiteurs devant le panneau du Parc National Ranomafana",
          "Le panneau du centre d’interprétation du parc, surmonté d’un lémurien en bois : « Veloma — Good bye — Au revoir »",
          "Dans le centre d’interprétation du parc : la reconstitution d’un village tanala",
          "Le panneau qui présente la carte des circuits de randonnée du parc"
        ],
        "de": [
          "Ein Goldener Bambuslemur frisst Bambusblätter, Nationalpark Ranomafana",
          "Ein Großer Bambuslemur mit seinen weißen Ohrbüscheln klammert sich an einen Bambusstamm, Nationalpark Ranomafana",
          "Eine kleine Kaskade stürzt über moosige Felsblöcke im Regenwald, Nationalpark Ranomafana",
          "Ein Wasserfall stürzt in ein Becken mitten im Wald, Nationalpark Ranomafana",
          "Ein winziges Stummelschwanzchamäleon (Brookesia) auf einem moosigen Zweig, Nationalpark Ranomafana",
          "Ein Kometenfalter ruht auf einem Blatt, Nationalpark Ranomafana",
          "Die Namorona windet sich durch ihre bewaldete Schlucht",
          "Ein Lemur klammert sich zwischen Bambus an einen Baumstamm, Nationalpark Ranomafana",
          "Der Zeltplatz im Wald des Nationalparks Ranomafana, mit Holzgestell und Feuerstelle",
          "Blick an einem Urwaldriesen hinauf ins Blätterdach, Nationalpark Ranomafana",
          "Ein Brauner Maki klammert sich im Wald an einen Stamm, Nationalpark Ranomafana",
          "Wanderer auf einem Waldweg im Nationalpark Ranomafana",
          "Ein Großer Bambuslemur kaut an einem Stück Bambus, Nationalpark Ranomafana",
          "Ein grünes Chamäleon auf einem Ast, Nationalpark Ranomafana",
          "Ein Lemur auf einem moosigen Ast hoch im Blätterdach, Nationalpark Ranomafana",
          "Ein Lemur im Bambus, Nationalpark Ranomafana",
          "Ein Lemur läuft hoch in den Bäumen einen Ast entlang, Nationalpark Ranomafana",
          "Ein Lemur an einer Liane, den langen buschigen Schwanz nach unten gebogen, Nationalpark Ranomafana",
          "Ein Lemur schaut von einem moosigen Stamm im Blätterdach herab, Nationalpark Ranomafana",
          "Ein Ringelschwanzmungo überquert einen Steinweg im Nationalpark Ranomafana",
          "Ein Plattschwanzgecko, getarnt als welkes Blatt, Nationalpark Ranomafana",
          "Ein Vogel im Unterholz, Nationalpark Ranomafana",
          "Ein junges Chamäleon, zum genaueren Hinsehen hochgehalten, Nationalpark Ranomafana",
          "Ein Schwarzweißer Vari blickt von einem Ast herab, Nationalpark Ranomafana",
          "Ein Madagaskar-Paradiesschnäpper auf seinem moosigen Nest, Nationalpark Ranomafana",
          "Ein Chamäleon mit blauen Beinen und orange gebändertem Schwanz auf einem Ast, Nationalpark Ranomafana",
          "Eine Schuppenerdracke, einer der scheuen Vögel des Waldbodens, in Nahaufnahme, Nationalpark Ranomafana",
          "Hungrige Nestlinge betteln in ihrer Bruthöhle, Nationalpark Ranomafana",
          "Eine behaarte schwarz-orange Raupe unter einem Blatt, Nationalpark Ranomafana",
          "Bambuswald, Heimat der Bambuslemuren des Parks",
          "Ein mit Steinen gepflasterter Weg durch den Bambuswald, Nationalpark Ranomafana",
          "Wanderer auf einem Pfad unter überhängendem Bambus, Nationalpark Ranomafana",
          "Moosbewachsene Baumstämme im Regenwald, Nationalpark Ranomafana",
          "Ein Bach über moosigen Felsen unter dem Blätterdach, Nationalpark Ranomafana",
          "Ein Bach stürzt zwischen Farnen und moosigen Bäumen über Felsen, Nationalpark Ranomafana",
          "Ein Bach stürzt in der Sonne über flechtenbedeckte Felsblöcke, Nationalpark Ranomafana",
          "Ein felsiger Bach fließt stufenweise durch den Wald hinab, Nationalpark Ranomafana",
          "Ein hoher Wasserfall stürzt hinter einem moosigen Baum in ein Becken, Nationalpark Ranomafana",
          "Die Namorona rauscht durch den Regenwald",
          "Wanderer überqueren eine Holzbrücke über einen Waldbach, Nationalpark Ranomafana",
          "Wanderer überqueren die gelbe Fußgängerbrücke über die Namorona in den Wald, Nationalpark Ranomafana",
          "Eine Besuchergruppe am Schild des Parc National Ranomafana",
          "Das Schild am Informationszentrum des Parks, mit einem Holzlemur obendrauf: „Veloma – Good bye – Au revoir“",
          "Im Informationszentrum des Parks: eine Ausstellung über ein Tanala-Dorf",
          "Die Tafel mit der Karte der Rundwege des Parks"
        ],
        "mg": [
          "Gidro volamena mpihinam-bolo mihinana ravim-bolo, valan-javaboahary Ranomafana",
          "Gidro mpihinam-bolo lehibe (greater bamboo lemur, Prolemur simus), manana volo fotsy eo amin'ny sofiny, mihantona amin'ny tahom-bolo, valan-javaboahary Ranomafana",
          "Riandrano kely mikoriana eo ambonin'ny vato misy volon-ketsa ao anaty ala mando, valan-javaboahary Ranomafana",
          "Riandrano milatsaka ao anaty dobo ao an'ala, valan-javaboahary Ranomafana",
          "Tana kely bitika mitovy amin'ny ravina (Brookesia) eo amin'ny rantsan-kazo misy volon-ketsa, valan-javaboahary Ranomafana",
          "Lolo goavana mavo (comet moth, Argema mittrei) mipetraka eo amin'ny ravina, valan-javaboahary Ranomafana",
          "Ny renirano Namorona mikolaka mamakivaky ny hantsana rakotra ala",
          "Gidro mihantona amin'ny vatan-kazo eo anivon'ny volo, valan-javaboahary Ranomafana",
          "Ny toerana filasiana ao anaty ala ao amin'ny valan-javaboahary Ranomafana, misy fanaovana hazo sy fatana",
          "Mijery ny tampon'ny ala manaraka hazo goavana iray, valan-javaboahary Ranomafana",
          "Gidro volontany mihantona amin'ny vatan-kazo ao an'ala, valan-javaboahary Ranomafana",
          "Mpandeha an-tongotra eny amin'ny lalan'ala ao amin'ny valan-javaboahary Ranomafana",
          "Gidro mpihinam-bolo lehibe mitsako tapa-bolo, valan-javaboahary Ranomafana",
          "Tana maitso eo amin'ny sampan-kazo, valan-javaboahary Ranomafana",
          "Gidro eo amin'ny sampana misy volon-ketsa ambony be ao amin'ny tampon'ny ala, valan-javaboahary Ranomafana",
          "Gidro iray ao anaty volo, valan-javaboahary Ranomafana",
          "Gidro mandeha eny amin'ny sampan-kazo ambony be, valan-javaboahary Ranomafana",
          "Gidro eo amin'ny vahy mihantona, miolika eny ambany ny rambony lava sy matevim-bolo, valan-javaboahary Ranomafana",
          "Gidro mijery avy eo amin'ny vatan-kazo misy volon-ketsa ao amin'ny tampon'ny ala, valan-javaboahary Ranomafana",
          "Vontsira mena miampita lalana vato ao amin'ny valan-javaboahary Ranomafana",
          "Androngo rambo ravina mitovy amin'ny ravina maina, valan-javaboahary Ranomafana",
          "Vorona iray mipetraka ao ambanin'ny ala, valan-javaboahary Ranomafana",
          "Zanaka tana atsangana mba hojerena akaiky, valan-javaboahary Ranomafana",
          "Varikandana (gidro mainty sy fotsy) mijery avy eo amin'ny sampan-kazo, valan-javaboahary Ranomafana",
          "Vorona rambo lava (Terpsiphone mutata) mipetraka eo amin'ny akaniny vita amin'ny volon-ketsa, valan-javaboahary Ranomafana",
          "Tana manana tongotra manga sy rambo misy tsipika volom-boasary eo amin'ny sampan-kazo, valan-javaboahary Ranomafana",
          "Vorona saro-kenatra miaina eny amin'ny tany ao an'ala (scaly ground-roller, Geobiastes squamiger), jerena akaiky, valan-javaboahary Ranomafana",
          "Zana-borona noana mitabataba ao anaty lavaka akaniny, valan-javaboahary Ranomafana",
          "Fanday volony mainty sy volom-boasary eo ambanin'ny ravina, valan-javaboahary Ranomafana",
          "Ala volo, fonenan'ireo gidro mpihinam-bolo ao amin'ny valan-javaboahary",
          "Lalana rarafana vato mamakivaky ny ala volo, valan-javaboahary Ranomafana",
          "Mpandeha an-tongotra manaraka lalana eo ambanin'ny volo miondrika, valan-javaboahary Ranomafana",
          "Vatan-kazo rakotra volon-ketsa ao amin'ny ala mando, valan-javaboahary Ranomafana",
          "Rano mikoriana eo ambonin'ny vato misy volon-ketsa ambanin'ny tampon'ny ala, valan-javaboahary Ranomafana",
          "Rano mikoriana mafy eo ambonin'ny vato, eo anelanelan'ny fanjana sy hazo misy volon-ketsa, valan-javaboahary Ranomafana",
          "Rano mikoriana mafy eo ambonin'ny vato lehibe rakotra lichen, amin'ny masoandro, valan-javaboahary Ranomafana",
          "Renirano feno vato midina tsikelikely mamakivaky ny ala, valan-javaboahary Ranomafana",
          "Riandrano avo milatsaka ao anaty dobo, ao ambadiky ny hazo misy volon-ketsa, valan-javaboahary Ranomafana",
          "Ny renirano Namorona mikoriana mafy mamakivaky ny ala mando",
          "Mpandeha an-tongotra mita tetezana hazo ambonin'ny renirano kely ao an'ala, valan-javaboahary Ranomafana",
          "Mpandeha an-tongotra mita ny tetezana mavo ambonin'ny Namorona mankany an'ala, valan-javaboahary Ranomafana",
          "Vondrona mpitsidika eo anoloan'ny takelaka Parc National Ranomafana",
          "Ny takelaka eo amin'ny foibe fanazavana ao amin'ny valan-javaboahary, misy gidro vita amin'ny hazo eo amboniny: « Veloma — Good bye — Au revoir »",
          "Ao anatin'ny foibe fanazavana ao amin'ny valan-javaboahary: fampisehoana tanàna Tanala",
          "Ny takelaka misy ny sarintanin'ny lalana fitsangatsanganana ao amin'ny valan-javaboahary"
        ]
      }
    },
    "voi-mitsinjo": {
      "name": {
        "en": "VOI Mitsinjo Reserve",
        "fr": "Réserve VOI Mitsinjo",
        "de": "Reservat VOI Mitsinjo",
        "mg": "Tahiry VOI Mitsinjo"
      },
      "desc": {
        "en": "Community-managed forest reserve at Ambatolahy, run by VOI Ambatolahy — the local community association that holds the forest management transfer. Guided day and night walks with community guides, with fees going directly to the village rather than to the national park. The reserve's twin waterfall is a 30-minute walk from Ambatolahy village, or a four-hour hike through the forest.",
        "fr": "Réserve forestière gérée par la communauté à Ambatolahy, administrée par le VOI Ambatolahy — l’association communautaire locale titulaire du transfert de gestion de la forêt. Balades de jour et de nuit avec des guides communautaires ; les droits vont directement au village et non au parc national. Sa double cascade est à 30 minutes à pied du village d’Ambatolahy, ou à quatre heures de randonnée à travers la forêt.",
        "de": "Von der Gemeinde verwaltetes Waldreservat in Ambatolahy, geführt von VOI Ambatolahy – dem örtlichen Gemeindeverein, dem die Verwaltung des Waldes übertragen wurde. Geführte Tag- und Nachtwanderungen mit Gemeinde-Guides; die Gebühren gehen direkt an das Dorf statt an den Nationalpark. Der doppelte Wasserfall des Reservats liegt 30 Gehminuten vom Dorf Ambatolahy entfernt, oder vier Stunden Wanderung durch den Wald.",
        "mg": "Ala tahiry tantanan'ny fiaraha-monina ao Ambatolahy, tantanan'ny VOI Ambatolahy — ny fikambanan'ny fiaraha-monina eo an-toerana nomena ny fitantanana ny ala. Fitsangatsanganana atoandro sy alina miaraka amin'ny mpitari-dalana avy amin'ny fiaraha-monina; mankany amin'ny tanàna mivantana ny sarany fa tsy any amin'ny valan-javaboahary. Azo tratrarina amin'ny dia an-tongotra 30 minitra avy ao an-tanànan'Ambatolahy ny riandrano kambana ao amin'ny tahiry, na amin'ny dia an-tongotra adiny efatra mamakivaky ny ala."
      },
      "price": {
        "en": "Contact VOI Ambatolahy for entry and guide rates",
        "fr": "Contacter le VOI Ambatolahy pour les tarifs d’entrée et de guide",
        "de": "Eintritt und Guidepreise bei VOI Ambatolahy erfragen",
        "mg": "Mifandraisa amin'ny VOI Ambatolahy momba ny saram-pidirana sy ny mpitari-dalana"
      },
      "duration": { "en": "2–4 hours", "fr": "2 à 4 heures", "de": "2–4 Stunden", "mg": "Adiny 2–4" },
      "tips": {
        "en": [
          "Arrange through VOI Ambatolahy — ask at Ambatolahy village or through your hotel",
          "No national park ticket needed; this is a separate community reserve",
          "Good option for a night walk, and for a day when the park circuits are full"
        ],
        "fr": [
          "À organiser avec le VOI Ambatolahy — renseignez-vous au village d’Ambatolahy ou auprès de votre hôtel",
          "Pas besoin de billet du parc national : c’est une réserve communautaire distincte",
          "Une bonne option pour une balade de nuit, ou un jour où les circuits du parc sont complets"
        ],
        "de": [
          "Über VOI Ambatolahy organisieren – im Dorf Ambatolahy oder über das Hotel fragen",
          "Kein Nationalparkticket nötig; dies ist ein eigenes Gemeindereservat",
          "Gut für eine Nachtwanderung oder an Tagen, an denen die Parkrundwege ausgebucht sind"
        ],
        "mg": [
          "Alaharo amin'ny alalan'ny VOI Ambatolahy — manontania ao an-tanànan'Ambatolahy na amin'ny hotelinao",
          "Tsy ilaina ny tapakilan'ny valan-javaboahary; tahiry tsy miankina tantanan'ny fiaraha-monina ity",
          "Safidy tsara ho an'ny fitsangatsanganana amin'ny alina, na amin'ny andro feno ny lalana ao amin'ny valan-javaboahary"
        ]
      },
      "contact.note": {
        "en": "Managed by VOI Ambatolahy.",
        "fr": "Gérée par le VOI Ambatolahy.",
        "de": "Verwaltet von VOI Ambatolahy.",
        "mg": "Tantanan'ny VOI Ambatolahy."
      },
      "gallery[].alt": {
        "en": [
          "A man standing at the pool below the reserve's twin waterfall, VOI Mitsinjo Reserve",
          "The twin waterfall pouring into its pool, VOI Mitsinjo Reserve",
          "The covered viewing shelter, with its yellow railings, above the waterfall, VOI Mitsinjo Reserve",
          "A group in the viewing shelter, with the waterfall behind them, VOI Mitsinjo Reserve",
          "The twin waterfall seen from above, falling over dark rock into a pool, VOI Mitsinjo Reserve",
          "Walking through forest and banana plants on the way to the waterfall, VOI Mitsinjo Reserve",
          "Three men clearing the path down to the waterfall, VOI Mitsinjo Reserve",
          "Wildlife at VOI Mitsinjo Reserve"
        ],
        "fr": [
          "Un homme au bord du bassin, sous la double cascade de la réserve, réserve VOI Mitsinjo",
          "La double cascade qui se jette dans son bassin, réserve VOI Mitsinjo",
          "L’abri couvert aux balustrades jaunes, au-dessus de la cascade, réserve VOI Mitsinjo",
          "Un groupe dans l’abri d’observation, avec la cascade derrière lui, réserve VOI Mitsinjo",
          "La double cascade vue d’en haut, qui dévale la roche sombre jusqu’à un bassin, réserve VOI Mitsinjo",
          "En marche à travers la forêt et les bananiers vers la cascade, réserve VOI Mitsinjo",
          "Trois hommes dégagent le sentier qui descend vers la cascade, réserve VOI Mitsinjo",
          "La faune de la réserve VOI Mitsinjo"
        ],
        "de": [
          "Ein Mann steht am Becken unter dem doppelten Wasserfall des Reservats, Reservat VOI Mitsinjo",
          "Der doppelte Wasserfall stürzt in sein Becken, Reservat VOI Mitsinjo",
          "Der überdachte Aussichtsunterstand mit gelbem Geländer oberhalb des Wasserfalls, Reservat VOI Mitsinjo",
          "Eine Gruppe im Aussichtsunterstand, hinter ihr der Wasserfall, Reservat VOI Mitsinjo",
          "Der doppelte Wasserfall von oben, über dunklen Fels in ein Becken stürzend, Reservat VOI Mitsinjo",
          "Unterwegs zum Wasserfall durch Wald und Bananenstauden, Reservat VOI Mitsinjo",
          "Drei Männer räumen den Pfad zum Wasserfall frei, Reservat VOI Mitsinjo",
          "Tiere im Reservat VOI Mitsinjo"
        ],
        "mg": [
          "Lehilahy mijoro eo amoron'ny dobo eo ambanin'ny riandrano kambana ao amin'ny tahiry, Tahiry VOI Mitsinjo",
          "Ny riandrano kambana milatsaka ao anaty doboany, Tahiry VOI Mitsinjo",
          "Ny fialofana misy tafo sy fefy mavo, eo ambonin'ny riandrano, fijerena ny toerana, Tahiry VOI Mitsinjo",
          "Vondron'olona ao amin'ny fialofana fijerena, ary ny riandrano ao ambadik'izy ireo, Tahiry VOI Mitsinjo",
          "Ny riandrano kambana jerena avy any ambony, milatsaka eo ambonin'ny vato mainty mankany anaty dobo, Tahiry VOI Mitsinjo",
          "Mandeha mamakivaky ala sy akondro mankany amin'ny riandrano, Tahiry VOI Mitsinjo",
          "Lehilahy telo manadio ny lalana midina mankany amin'ny riandrano, Tahiry VOI Mitsinjo",
          "Biby ao amin'ny tahiry VOI Mitsinjo"
        ]
      }
    },
    "night-walk": {
      "name": {
        "en": "Guided Night Walk",
        "fr": "Balade nocturne guidée",
        "de": "Geführte Nachtwanderung",
        "mg": "Fitsangatsanganana amin'ny alina"
      },
      "desc": {
        "en": "After-dark walk along the RN25 at the forest edge — the park itself closes at 17:00 — for brown mouse lemurs and many kinds of chameleon, with tree frogs and leaf-tailed geckos too. No park ticket is needed. Arrange it through your daytime park guide or your hotel.",
        "fr": "Balade à la nuit tombée le long de la RN25, en lisière de forêt — le parc lui-même ferme à 17:00 — pour voir des microcèbes roux et de nombreuses espèces de caméléons, ainsi que des rainettes et des uroplates. Pas besoin de billet du parc. À organiser avec votre guide de la journée ou votre hôtel.",
        "de": "Wanderung nach Einbruch der Dunkelheit entlang der RN25 am Waldrand – der Park selbst schließt um 17:00 – zu Braunen Mausmakis und vielen Chamäleonarten, dazu Laubfrösche und Plattschwanzgeckos. Kein Parkticket nötig. Über den Guide vom Tag oder das Hotel organisieren.",
        "mg": "Fitsangatsanganana rehefa maizina eo amoron'ny RN25 eo amin'ny sisin'ala — mihidy amin'ny 17:00 ny valan-javaboahary — hijerena tsidy mena sy karazana tana maro, ary koa sahona an-kazo sy androngo rambo ravina. Tsy ilaina ny tapakilan'ny valan-javaboahary. Alaharo amin'ny mpitari-dalana niarahanao tamin'ny antoandro na amin'ny hotelinao."
      },
      "price": {
        "en": "About 40,000 Ar per person",
        "fr": "Environ 40 000 Ar par personne",
        "de": "Etwa 40.000 Ar pro Person",
        "mg": "Eo amin'ny 40 000 Ar eo ho eo isan'olona"
      },
      "duration": { "en": "About 1 hour", "fr": "Environ 1 heure", "de": "Etwa 1 Stunde", "mg": "Adiny 1 eo ho eo" },
      "tips": {
        "en": [
          "You need a private car: taxi-brousses stop running regularly after dusk, and walking the road at night is not considered safe",
          "Arrange it with your daytime guide or your hotel",
          "Bring a head torch with a red filter",
          "Starts around 18:30",
          "Wear long sleeves"
        ],
        "fr": [
          "Il faut une voiture privée : les taxis-brousses ne circulent plus régulièrement après la tombée de la nuit, et marcher sur la route la nuit n’est pas considéré comme sûr",
          "À organiser avec votre guide de la journée ou votre hôtel",
          "Emportez une lampe frontale avec un filtre rouge",
          "Départ vers 18:30",
          "Portez des manches longues"
        ],
        "de": [
          "Sie brauchen ein privates Auto: Taxi-Brousses fahren nach Einbruch der Dunkelheit nicht mehr regelmäßig, und nachts an der Straße entlangzulaufen gilt als nicht sicher",
          "Mit dem Guide vom Tag oder dem Hotel organisieren",
          "Eine Stirnlampe mit Rotfilter mitbringen",
          "Beginn gegen 18:30",
          "Lange Ärmel tragen"
        ],
        "mg": [
          "Mila fiara manokana ianao: tsy mandeha matetika intsony ny taxi-brousse rehefa maizina, ary tsy heverina ho azo antoka ny mandeha an-tongotra amin'ny lalana amin'ny alina",
          "Alaharo amin'ny mpitari-dalanao antoandro na amin'ny hotelinao",
          "Mitondrà jiro an-doha misy sivana mena",
          "Manomboka amin'ny 18:30 eo ho eo",
          "Mitafy akanjo lava tanana"
        ]
      },
      "gallery[].alt": {
        "en": [
          "A green tree frog with red-rimmed eyes on a mossy twig at night",
          "Satanic leaf-tailed gecko",
          "A chameleon asleep on a twig, lit by torchlight on the night walk",
          "A mouse lemur in the branches at night",
          "A Madagascar pygmy kingfisher perched on a twig after dark"
        ],
        "fr": [
          "Une grenouille arboricole verte aux yeux cerclés de rouge sur une brindille moussue, la nuit",
          "Uroplate fantastique",
          "Un caméléon endormi sur une brindille, éclairé à la lampe pendant la balade nocturne",
          "Un microcèbe dans les branches, la nuit",
          "Un martin-chasseur malgache perché sur une brindille, à la nuit tombée"
        ],
        "de": [
          "Ein grüner Baumfrosch mit rot umrandeten Augen nachts auf einem moosigen Zweig",
          "Satanischer Plattschwanzgecko",
          "Ein schlafendes Chamäleon auf einem Zweig im Schein der Taschenlampe bei der Nachtwanderung",
          "Ein Mausmaki nachts im Geäst",
          "Ein Madagaskar-Zwergfischer sitzt nach Einbruch der Dunkelheit auf einem Zweig"
        ],
        "mg": [
          "Sahona maitso manana maso voahodidin'ny mena eo amin'ny rantsan-kazo misy volon-ketsa amin'ny alina",
          "Androngo rambo ravina (Uroplatus phantasticus)",
          "Tana matory eo amin'ny rantsan-kazo kely, hazavain'ny jiro mandritra ny fitsangatsanganana amin'ny alina",
          "Tsidy eny amin'ny sampan-kazo amin'ny alina",
          "Vintsiala mipetraka eo amin'ny rantsan-kazo kely rehefa maizina ny andro"
        ]
      }
    },
    "station-thermale": {
      "name": {
        "en": "Station Thermale (Thermal Pool & Baths)",
        "fr": "Station Thermale (piscine et bains thermaux)",
        "de": "Station Thermale (Thermalbad und Badekabinen)",
        "mg": "Station Thermale (dobo sy fandroana rano mafana)"
      },
      "desc": {
        "en": "The public pool and bathhouse that give Ranomafana — \"hot water\" in Malagasy — its name, across the Namorona from the football field and no more than 20 minutes' walk from any hotel in town. Ancient geothermal vents heat fresh water near the surface rather than pumping it up from deep below, so there is none of the sulphur smell of most hot springs. The pool ticket includes thermal showers, changing rooms and a toilet. At the same booth you can take a private bath room: a tiled tub with a thermal tap and a cold tap, cleaned after every visitor.",
        "fr": "La piscine publique et les bains qui ont donné son nom à Ranomafana — « eau chaude » en malgache —, de l’autre côté de la Namorona par rapport au terrain de football, à 20 minutes à pied au plus de n’importe quel hôtel du village. D’anciennes cheminées géothermiques chauffent de l’eau douce près de la surface au lieu de la faire remonter des profondeurs : aucune odeur de soufre, contrairement à la plupart des sources chaudes. Le billet de la piscine comprend les douches thermales, les vestiaires et des toilettes. Au même guichet, vous pouvez prendre une cabine de bain privée : une baignoire carrelée avec un robinet d’eau thermale et un d’eau froide, nettoyée après chaque visiteur.",
        "de": "Das öffentliche Schwimmbad und Badehaus, denen Ranomafana – madagassisch für „heißes Wasser“ – seinen Namen verdankt, gegenüber dem Fußballplatz auf der anderen Seite der Namorona und höchstens 20 Minuten zu Fuß von jedem Hotel im Ort. Uralte geothermische Spalten erwärmen Süßwasser nahe der Oberfläche, statt es aus großer Tiefe nach oben zu drücken, daher fehlt der Schwefelgeruch der meisten heißen Quellen. Das Badeticket umfasst Thermalduschen, Umkleiden und eine Toilette. Am selben Schalter gibt es private Badekabinen: eine geflieste Wanne mit einem Thermal- und einem Kaltwasserhahn, nach jedem Gast gereinigt.",
        "mg": "Ny dobo sy ny trano fandroana ho an'ny besinimaro izay nanomezana ny anarany an'i Ranomafana — \"rano mafana\" —, ampitan'ny Namorona manoloana ny kianja baolina kitra, ary 20 minitra an-tongotra farafahabetsany avy amin'ny hotely rehetra ao an-tanàna. Lavaka geotermaly taloha no manafana rano madio eo akaikin'ny ambony, fa tsy manintona azy avy any amin'ny lalina, ka tsy misy fofona solifara tahaka ny ankamaroan'ny loharano mafana. Tafiditra ao amin'ny tapakilan'ny dobo ny fandroana rano mafana, ny efitrano fanovana akanjo ary ny kabone. Eo amin'io varavarankely io ihany dia afaka maka efitra fandroana manokana ianao: koveta misy robine rano mafana sy rano mangatsiaka, diovina isaky ny avy nampiasain'olona."
      },
      "price": {
        "en": "Pool 10,000 Ar (residents 2,000 Ar) · private bath 10,000 Ar per person (residents 2,000 Ar)",
        "fr": "Piscine 10 000 Ar (résidents 2 000 Ar) · bain privé 10 000 Ar par personne (résidents 2 000 Ar)",
        "de": "Becken 10.000 Ar (Einheimische 2.000 Ar) · Badekabine 10.000 Ar pro Person (Einheimische 2.000 Ar)",
        "mg": "Dobo 10 000 Ar (mponina 2 000 Ar) · fandroana manokana 10 000 Ar isan'olona (mponina 2 000 Ar)"
      },
      "duration": { "en": "1–2 hours", "fr": "1 à 2 heures", "de": "1–2 Stunden", "mg": "Adiny 1–2" },
      "tips": {
        "en": [
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
        "fr": [
          "La piscine est fermée toute la journée le mardi",
          "Piscine 06:00–12:00 et 13:30–16:30 ; bains privés 07:00–11:30 et 14:00–16:00",
          "Bonnet de bain obligatoire pour tous — en vente à l’entrée pour 1 000–3 000 Ar. Tout maillot de bain convient",
          "Apportez votre serviette, et du savon pour les bains privés — seules l’eau chaude et l’eau froide sont fournies",
          "Plusieurs personnes peuvent partager une cabine de bain privée si chacune achète un billet",
          "Ni nourriture, ni boisson, ni animaux autour de la piscine ; la pelouse au bord de la rivière, juste à côté, sert d’aire de pique-nique",
          "Les sacs restent sur des étagères ouvertes, en vue de la piscine. Les vols sont rares, mais laissez vos objets de valeur à l’hôtel les jours d’affluence",
          "Réservez un massage au même guichet : un massage relaxant coûte 40 000 Ar (résidents 20 000 Ar)",
          "Aussi sur le panneau des tarifs : une cure thermale à 5 000 Ar, l’hébergement des curistes à 2 000 Ar et des lits en gîte à 10 000 Ar par personne et par nuit pour les résidents. Le prix pour les visiteurs étrangers s’est effacé du panneau : demandez au guichet"
        ],
        "de": [
          "Das Becken ist dienstags den ganzen Tag geschlossen",
          "Becken 06:00–12:00 und 13:30–16:30; Badekabinen 07:00–11:30 und 14:00–16:00",
          "Badekappe für alle Pflicht – am Eingang für 1.000–3.000 Ar erhältlich. Jede Badekleidung ist in Ordnung",
          "Eigenes Handtuch mitbringen, und Seife für die Badekabinen – es gibt nur warmes und kaltes Wasser",
          "Mehrere Personen können sich eine Badekabine teilen, wenn jede ein Ticket kauft",
          "Kein Essen, keine Getränke und keine Tiere am Becken; die Wiese am Fluss nebenan ist der Picknickplatz",
          "Taschen liegen auf offenen Regalen in Sichtweite des Beckens. Diebstahl ist selten, aber lassen Sie Wertsachen an vollen Tagen im Hotel",
          "Massagen am selben Schalter buchen: eine Entspannungsmassage kostet 40.000 Ar (Einheimische 20.000 Ar)",
          "Außerdem auf der Preistafel: eine Thermalkur für 5.000 Ar, Unterkunft für Kurgäste für 2.000 Ar und Gîte-Betten für 10.000 Ar pro Person und Nacht für Einheimische. Der Preis für ausländische Gäste ist auf der Tafel verblasst – am Schalter fragen"
        ],
        "mg": [
          "Mihidy mandritra ny andro manontolo ny dobo isaky ny Talata",
          "Dobo 06:00–12:00 sy 13:30–16:30; fandroana manokana 07:00–11:30 sy 14:00–16:00",
          "Tsy maintsy manao satroka filomanosana ny rehetra — amidy eo am-baravarana 1 000–3 000 Ar. Mety daholo ny akanjo filomanosana rehetra",
          "Mitondrà ny lambanao, ary savony ho an'ny fandroana manokana — rano mafana sy mangatsiaka ihany no omena",
          "Olona maromaro no afaka mizara efitra fandroana manokana raha samy mividy tapakila",
          "Tsy azo atao ny mitondra sakafo, zava-pisotro na biby eo amin'ny manodidina ny dobo; ny ahitra eo amoron'ny renirano eo akaiky eo no toerana fisakafoana",
          "Apetraka eo amin'ny talantalana misokatra tazana avy eo amin'ny dobo ny kitapo. Tsy fahita ny halatra, fa avelao any amin'ny hotely ny zavatra sarobidy amin'ny andro be olona",
          "Mamandriha fanorana eo amin'io varavarankely io ihany: 40 000 Ar ny fanorana fialan-tsasatra (mponina 20 000 Ar)",
          "Hita koa eo amin'ny takelaka vidiny: fitsaboana amin'ny rano mafana 5 000 Ar, fandriana ho an'ny olona manaraka fitsaboana 2 000 Ar, ary fandriana ao amin'ny gîte 10 000 Ar isan'olona isan-alina ho an'ny mponina. Efa voafafa amin'ny takelaka ny vidiny ho an'ny vahiny, ka manontania eo amin'ny varavarankely"
        ]
      },
      "contact.note": {
        "en": "Pay at the ticket booth at the entrance. Not part of Hotel Thermal.",
        "fr": "Paiement au guichet à l’entrée. Ne fait pas partie de l’Hôtel Thermal.",
        "de": "Bezahlt wird am Ticketschalter am Eingang. Gehört nicht zum Hotel Thermal.",
        "mg": "Aloa eo amin'ny varavarankely fivarotana tapakila eo am-baravarana. Tsy anisan'ny Hotel Thermal."
      },
      "gallery[].alt": {
        "en": [
          "The open-air thermal pool at Station Thermale, with the forested hills behind",
          "The Station Thermale ticket booth, with its welcome sign, opening hours and prices",
          "Signposts at Station Thermale pointing to the massage room, pool, baths, restaurant and vaporium",
          "Stone steps down through the gardens to the Station Thermale buildings",
          "The Ranomafana emblem on the stone wall beside the pool",
          "Bins under a cleanliness sign, with the mountains beyond, at Station Thermale",
          "The site plan board at Station Thermale",
          "Private bath rooms at Station Thermale"
        ],
        "fr": [
          "La piscine thermale en plein air de la Station Thermale, avec les collines boisées derrière",
          "Le guichet de la Station Thermale, avec son panneau d’accueil, ses horaires et ses tarifs",
          "Les panneaux de la Station Thermale indiquant la salle de massage, la piscine, les bains, le restaurant et le vaporium",
          "Des marches de pierre descendant à travers les jardins vers les bâtiments de la Station Thermale",
          "L’emblème de Ranomafana sur le mur de pierre près de la piscine",
          "Des poubelles sous un panneau sur la propreté, avec les montagnes au loin, à la Station Thermale",
          "Le plan du site affiché à la Station Thermale",
          "Les cabines de bain privées de la Station Thermale"
        ],
        "de": [
          "Das Thermal-Freibecken der Station Thermale, dahinter die bewaldeten Hügel",
          "Der Ticketschalter der Station Thermale mit Willkommensschild, Öffnungszeiten und Preisen",
          "Wegweiser in der Station Thermale zu Massageraum, Becken, Badekabinen, Restaurant und Dampfbad",
          "Steinstufen führen durch die Gärten hinunter zu den Gebäuden der Station Thermale",
          "Das Wappen von Ranomafana an der Steinmauer neben dem Becken",
          "Mülleimer unter einem Sauberkeitsschild, dahinter die Berge, in der Station Thermale",
          "Die Lageplan-Tafel der Station Thermale",
          "Private Badekabinen in der Station Thermale"
        ],
        "mg": [
          "Ny dobo rano mafana any ivelany ao amin'ny Station Thermale, miaraka amin'ny havoana feno ala ao ambadika",
          "Ny varavarankely fivarotana tapakila ao amin'ny Station Thermale, misy takelaka fandraisana, ora fisokafana ary vidiny",
          "Takelaka fanoroana lalana ao amin'ny Station Thermale mankany amin'ny efitrano fanorana, ny dobo, ny fandroana, ny trano fisakafoana ary ny vaporium",
          "Tohatra vato midina mamakivaky ny zaridaina mankany amin'ireo tranon'ny Station Thermale",
          "Ny tandindon'i Ranomafana eo amin'ny rindrina vato akaikin'ny dobo",
          "Fanariam-pako eo ambanin'ny takelaka momba ny fahadiovana, miaraka amin'ny tendrombohitra any lavitra, ao amin'ny Station Thermale",
          "Ny takelaka misy ny drafitry ny toerana ao amin'ny Station Thermale",
          "Efitra fandroana manokana ao amin'ny Station Thermale"
        ]
      }
    },
    "thermal-massage": {
      "name": { "en": "Thermal Massage", "fr": "Massage thermal", "de": "Massage im Thermalbad", "mg": "Fanorana" },
      "desc": {
        "en": "Massage in a room set aside within the Station Thermale's private baths — the standard reward after a long circuit. Book at the same ticket counter as the pool and baths.",
        "fr": "Massage dans une salle aménagée au sein des bains privés de la Station Thermale — la récompense classique après un long circuit. Réservation au même guichet que la piscine et les bains.",
        "de": "Massage in einem eigenen Raum bei den Badekabinen der Station Thermale – die übliche Belohnung nach einem langen Rundweg. Buchung am selben Schalter wie Becken und Badekabinen.",
        "mg": "Fanorana ao amin'ny efitrano natokana ao amin'ny fandroana manokana ao amin'ny Station Thermale — valisoa mahazatra aorian'ny lalana lava. Mamandriha eo amin'ny varavarankely iray amin'ny dobo sy ny fandroana."
      },
      "price": {
        "en": "Relaxing massage 40,000 Ar (residents 20,000 Ar)",
        "fr": "Massage relaxant 40 000 Ar (résidents 20 000 Ar)",
        "de": "Entspannungsmassage 40.000 Ar (Einheimische 20.000 Ar)",
        "mg": "Fanorana fialan-tsasatra 40 000 Ar (mponina 20 000 Ar)"
      },
      "duration": { "en": "45–60 minutes", "fr": "45 à 60 minutes", "de": "45–60 Minuten", "mg": "45–60 minitra" },
      "tips": {
        "en": [
          "Book at the Station Thermale ticket counter",
          "Bring your own massage oil — the centre does not supply it",
          "Hotel Thermal's spa, a separate business, also offers massages"
        ],
        "fr": [
          "Réservez au guichet de la Station Thermale",
          "Apportez votre huile de massage — le centre n’en fournit pas",
          "Le spa de l’Hôtel Thermal, une entreprise distincte, propose aussi des massages"
        ],
        "de": [
          "Am Schalter der Station Thermale buchen",
          "Eigenes Massageöl mitbringen – das Bad stellt keins",
          "Das Spa des Hotel Thermal, ein eigener Betrieb, bietet ebenfalls Massagen an"
        ],
        "mg": [
          "Mamandriha eo amin'ny varavarankelin'ny Station Thermale",
          "Mitondrà ny menaka fanoranao — tsy manome izany ny foibe",
          "Manolotra fanorana koa ny spa ao amin'ny Hotel Thermal, orinasa hafa"
        ]
      },
      "contact.note": {
        "en": "Book at the Station Thermale ticket booth. Not part of Hotel Thermal.",
        "fr": "Réservation au guichet de la Station Thermale. Ne fait pas partie de l’Hôtel Thermal.",
        "de": "Buchung am Ticketschalter der Station Thermale. Gehört nicht zum Hotel Thermal.",
        "mg": "Mamandriha eo amin'ny varavarankelin'ny Station Thermale. Tsy anisan'ny Hotel Thermal."
      },
      "gallery[].alt": {
        "en": ["The massage room at Station Thermale"],
        "fr": ["La salle de massage de la Station Thermale"],
        "de": ["Der Massageraum der Station Thermale"],
        "mg": ["Ny efitrano fanorana ao amin'ny Station Thermale"]
      }
    },
    "hotel-thermal-pools": {
      "name": {
        "en": "Hotel Thermal Hot-Spring Pools",
        "fr": "Bassins thermaux de l’Hôtel Thermal",
        "de": "Thermalbecken des Hotel Thermal",
        "mg": "Dobo rano mafana ao amin'ny Hotel Thermal"
      },
      "desc": {
        "en": "The closest thing in Ranomafana to a familiar hot tub, with poolside drinks. Hotel Thermal has three small thermal pools, each seating up to eight, that anyone can book — at any time, late evening included. Changing rooms, toilets, cold showers and towels are provided, and you can order drinks, with or without alcohol, to enjoy in the pool.",
        "fr": "Ce qui ressemble le plus, à Ranomafana, à un jacuzzi classique, avec boissons au bord du bassin. L’Hôtel Thermal possède trois petits bassins d’eau thermale de huit places chacun, que tout le monde peut réserver — à toute heure, y compris tard le soir. Vestiaires, toilettes, douches froides et serviettes sont fournis, et vous pouvez commander des boissons, avec ou sans alcool, à déguster dans le bassin.",
        "de": "Das, was in Ranomafana einem vertrauten Whirlpool am nächsten kommt, mit Getränken am Beckenrand. Das Hotel Thermal hat drei kleine Thermalbecken für je bis zu acht Personen, die jeder buchen kann – zu jeder Zeit, auch spätabends. Umkleiden, Toiletten, kalte Duschen und Handtücher sind vorhanden, und Sie können Getränke mit oder ohne Alkohol bestellen und im Becken genießen.",
        "mg": "Ny akaiky indrindra eto Ranomafana amin'ny dobo rano mafana mahazatra, misy zava-pisotro eo amoron'ny dobo. Manana dobo rano mafana kely telo ny Hotel Thermal, samy ho an'olona valo hatramin'ny farany, azon'ny rehetra amandrihana — na amin'ny ora inona na inona, eny fa na dia alina be aza. Misy efitrano fanovana akanjo, kabone, fandroana rano mangatsiaka ary lamba famaohana, ary afaka manafatra zava-pisotro misy toaka na tsy misy ianao hosotroina ao anaty dobo."
      },
      "price": {
        "en": "20,000 Ar per person for several hours",
        "fr": "20 000 Ar par personne pour plusieurs heures",
        "de": "20.000 Ar pro Person für mehrere Stunden",
        "mg": "20 000 Ar isan'olona ho an'ny ora maromaro"
      },
      "duration": {
        "en": "Several hours, day or evening",
        "fr": "Plusieurs heures, de jour comme de nuit",
        "de": "Mehrere Stunden, tagsüber oder abends",
        "mg": "Ora maromaro, antoandro na hariva"
      },
      "tips": {
        "en": [
          "Book in advance at the Hotel Thermal front desk",
          "Good for a group, or an evening soak after the public pool has closed",
          "Towels provided — unlike the public pool"
        ],
        "fr": [
          "Réservez à l’avance à la réception de l’Hôtel Thermal",
          "Idéal en groupe, ou pour un bain du soir après la fermeture de la piscine publique",
          "Serviettes fournies — contrairement à la piscine publique"
        ],
        "de": [
          "Vorab an der Rezeption des Hotel Thermal buchen",
          "Gut für Gruppen oder für ein Abendbad, wenn das öffentliche Bad schon geschlossen hat",
          "Handtücher inklusive – anders als im öffentlichen Bad"
        ],
        "mg": [
          "Mamandriha mialoha eo amin'ny fandraisana vahiny ao amin'ny Hotel Thermal",
          "Tsara ho an'ny vondrona, na fandroana hariva rehefa mihidy ny dobo ho an'ny besinimaro",
          "Omena lamba famaohana — tsy toy ny ao amin'ny dobo ho an'ny besinimaro"
        ]
      },
      "gallery[].alt": {
        "en": [
          "Aerial view of Hotel Thermal and the thermal complex",
          "Garden at Hotel Thermal",
          "Hotel Thermal exterior"
        ],
        "fr": [
          "L’Hôtel Thermal et le complexe thermal vus du ciel",
          "Hotel Thermal : le jardin",
          "Hotel Thermal : vue extérieure"
        ],
        "de": [
          "Hotel Thermal und die Thermalanlage aus der Luft",
          "Hotel Thermal: der Garten",
          "Hotel Thermal: Außenansicht"
        ],
        "mg": [
          "Ny Hotel Thermal sy ny toeram-pandroana rano mafana jerena avy eny ambony",
          "Hotel Thermal: ny zaridaina",
          "Hotel Thermal: ny ivelany"
        ]
      }
    },
    "cascade-andriamamovoka": {
      "desc": {
        "en": "The big falls on the Namorona River below the park, reached on a scenic riverside walk. The most photographed waterfall in the Ranomafana area.",
        "fr": "Les grandes chutes de la Namorona en contrebas du parc, accessibles par une belle promenade au bord de la rivière. La cascade la plus photographiée de la région de Ranomafana.",
        "de": "Die großen Fälle der Namorona unterhalb des Parks, erreichbar über einen schönen Weg am Fluss. Der meistfotografierte Wasserfall der Gegend um Ranomafana.",
        "mg": "Ny riandrano lehibe amin'ny renirano Namorona ambanin'ny valan-javaboahary, tratrarina amin'ny dia mahafinaritra eo amoron'ny renirano. Ny riandrano be maka sary indrindra amin'ny faritr'i Ranomafana."
      },
      "price": {
        "en": "Free access; local guide recommended",
        "fr": "Accès libre ; guide local recommandé",
        "de": "Freier Zugang; ortskundiger Guide empfohlen",
        "mg": "Maimaim-poana ny fidirana; tsara raha misy mpitari-dalana eto an-toerana"
      },
      "duration": { "en": "Half day", "fr": "Une demi-journée", "de": "Halber Tag", "mg": "Antsasak'andro" },
      "tips": {
        "en": ["Rocks are slippery — this is not a handrail trail", "Go with a village guide"],
        "fr": ["Les rochers sont glissants — ce n’est pas un sentier aménagé", "Partez avec un guide du village"],
        "de": ["Die Felsen sind rutschig – kein Weg mit Geländer", "Mit einem Guide aus dem Ort gehen"],
        "mg": [
          "Malama ny vato — tsy lalana misy fihazonana",
          "Mandehana miaraka amin'ny mpitari-dalana avy ao an-tanàna"
        ]
      },
      "gallery[].alt": {
        "en": ["Cascade Andriamamovoka", "Trail to Cascade Andriamamovoka", "River below Cascade Andriamamovoka"],
        "fr": [
          "La cascade Andriamamovoka",
          "Le sentier vers la cascade Andriamamovoka",
          "La rivière en contrebas de la cascade Andriamamovoka"
        ],
        "de": [
          "Der Wasserfall Andriamamovoka",
          "Weg zum Wasserfall Andriamamovoka",
          "Der Fluss unterhalb des Wasserfalls Andriamamovoka"
        ],
        "mg": [
          "Ny riandranon'Andriamamovoka",
          "Ny lalana mankany amin'ny riandranon'Andriamamovoka",
          "Ny renirano ambanin'ny riandranon'Andriamamovoka"
        ]
      }
    },
    "jirama-waterfall-hike": {
      "name": {
        "en": "Jirama Waterfall Hike",
        "fr": "Randonnée à la cascade de la Jirama",
        "de": "Wanderung zum Jirama-Wasserfall",
        "mg": "Dia an-tongotra mankany amin'ny riandranon'i Jirama"
      },
      "desc": {
        "en": "A short walk popular with locals, to the biggest waterfall on the Namorona, which you can't see from the road. Start at the public swimming pool (the piscine) and follow the main path past it up the river, through a small village, along narrow dirt paths and across rice paddies. About halfway you'll see the big waterfall in the distance. No park ticket needed.",
        "fr": "Une courte balade appréciée des habitants, jusqu’à la plus grande cascade de la Namorona, invisible depuis la route. Partez de la piscine publique (la « piscine ») et suivez le chemin principal qui la dépasse en remontant la rivière, à travers un petit village, le long d’étroits sentiers de terre et à travers les rizières. À mi-chemin environ, vous apercevrez la grande cascade au loin. Pas besoin de billet du parc.",
        "de": "Eine kurze, bei Einheimischen beliebte Wanderung zum größten Wasserfall der Namorona, der von der Straße aus nicht zu sehen ist. Starten Sie am öffentlichen Schwimmbad (der „piscine“) und folgen Sie dem Hauptweg daran vorbei flussaufwärts, durch ein kleines Dorf, über schmale Erdpfade und durch Reisfelder. Etwa auf halber Strecke sehen Sie den großen Wasserfall in der Ferne. Kein Parkticket nötig.",
        "mg": "Dia an-tongotra fohy tian'ny mponina, mankany amin'ny riandrano lehibe indrindra amin'ny Namorona, izay tsy hita avy eo amin'ny lalana. Manomboka eo amin'ny dobo ho an'ny besinimaro (ny \"piscine\") ary araho ny lalana lehibe mandalo azy miakatra manaraka ny renirano, mamakivaky tanàna kely, amin'ny lalan-tany tery ary mamakivaky tanimbary. Eo amin'ny antsasaky ny lalana eo ho eo dia ho hitanao lavitra ny riandrano lehibe. Tsy ilaina ny tapakilan'ny valan-javaboahary."
      },
      "price": {
        "en": "Free access; local guide recommended",
        "fr": "Accès libre ; guide local recommandé",
        "de": "Freier Zugang; ortskundiger Guide empfohlen",
        "mg": "Maimaim-poana ny fidirana; tsara raha misy mpitari-dalana eto an-toerana"
      },
      "duration": {
        "en": "About 1 hour each way",
        "fr": "Environ 1 heure dans chaque sens",
        "de": "Etwa 1 Stunde pro Richtung",
        "mg": "Adiny 1 eo ho eo isaky ny mandeha"
      },
      "tips": {
        "en": [
          "About an hour each way from the pool",
          "Not sure of the way? Ask anyone for the 'cascade'",
          "Doable before an afternoon circuit",
          "Paths are narrow and muddy after rain"
        ],
        "fr": [
          "Environ une heure dans chaque sens depuis la piscine",
          "Vous hésitez sur le chemin ? Demandez « la cascade » à n’importe qui",
          "Faisable avant un circuit de l’après-midi",
          "Les sentiers sont étroits et boueux après la pluie"
        ],
        "de": [
          "Etwa eine Stunde pro Richtung vom Schwimmbad",
          "Unsicher, wo es langgeht? Fragen Sie irgendjemanden nach der „cascade“",
          "Vor einem Rundweg am Nachmittag machbar",
          "Die Pfade sind schmal und nach Regen schlammig"
        ],
        "mg": [
          "Adiny iray eo ho eo isaky ny mandeha avy eo amin'ny dobo",
          "Tsy azonao antoka ny lalana? Anontanio amin'ny olona rehetra ny \"cascade\"",
          "Azo atao alohan'ny lalana tolakandro",
          "Tery sy fotaka ny lalana aorian'ny orana"
        ]
      },
      "gallery[].alt": {
        "en": [
          "The big waterfall on the Namorona, stepping down over granite at the end of the walk from the public pool",
          "The big waterfall running high and brown under a blue sky",
          "The falls and the boulder-strewn pool below them, under a cloudy sky",
          "The waterfall seen across the fields and banana plants on the way",
          "Water pouring between granite boulders at the falls"
        ],
        "fr": [
          "La grande cascade de la Namorona, qui descend en gradins sur le granite au bout de la balade depuis la piscine publique",
          "La grande cascade en crue, aux eaux brunes, sous un ciel bleu",
          "Les chutes et le bassin parsemé de rochers à leur pied, sous un ciel nuageux",
          "La cascade vue au-delà des champs et des bananiers, en chemin",
          "L’eau qui jaillit entre les blocs de granite de la cascade"
        ],
        "de": [
          "Der große Wasserfall der Namorona stürzt stufenweise über Granit, am Ende der Wanderung vom öffentlichen Bad",
          "Der große Wasserfall mit hohem, braunem Wasser unter blauem Himmel",
          "Die Fälle und das felsübersäte Becken darunter, unter bewölktem Himmel",
          "Der Wasserfall unterwegs, über Felder und Bananenstauden hinweg gesehen",
          "Wasser stürzt am Wasserfall zwischen Granitblöcken hindurch"
        ],
        "mg": [
          "Ny riandrano lehibe amin'ny Namorona, midina amin'ny vato granita, eo amin'ny faran'ny dia avy eo amin'ny dobo ho an'ny besinimaro",
          "Ny riandrano lehibe be rano sy mena tany, eo ambanin'ny lanitra manga",
          "Ny riandrano sy ny dobo feno vato lehibe eo ambaniny, eo ambanin'ny lanitra rakotra rahona",
          "Ny riandrano hita eny ampitan'ny saha sy ny akondro eny an-dalana",
          "Rano mikoriana eo anelanelan'ny vato granita lehibe eo amin'ny riandrano"
        ]
      }
    },
    "namorona-kayaking": {
      "name": {
        "en": "Namorona River Kayaking",
        "fr": "Kayak sur la Namorona",
        "de": "Kajakfahren auf der Namorona",
        "mg": "Kayak eny amin'ny renirano Namorona"
      },
      "desc": {
        "en": "Paddle yourself down the Namorona in an inflatable kayak from Varibolo, which has a shop near the park entrance. You usually meet the staff at the little island in the middle of the river by the thermal pool, where they give you a briefing and the kayak (with paddle, life jacket and helmet). The river loosely follows the RN25: you may pass people panning for gold, and can stop at a toaka gasy (local rum) still. No rapids are difficult or dangerous, but you will get wet.",
        "fr": "Descendez vous-même la Namorona en kayak gonflable avec Varibolo, qui a une boutique près de l’entrée du parc. Le rendez-vous se fait généralement sur le petit îlot au milieu de la rivière, près de la piscine thermale, où l’équipe vous donne les consignes et le kayak (avec pagaie, gilet de sauvetage et casque). La rivière suit à peu près la RN25 : vous croiserez peut-être des orpailleurs et pourrez vous arrêter à une distillerie de toaka gasy (rhum local). Aucun rapide n’est difficile ni dangereux, mais vous serez mouillé.",
        "de": "Paddeln Sie selbst im Schlauchkajak die Namorona hinunter, mit Varibolo, das einen Laden nahe dem Parkeingang hat. Treffpunkt ist meist die kleine Insel mitten im Fluss beim Thermalbad, wo Sie eine Einweisung und das Kajak bekommen (mit Paddel, Schwimmweste und Helm). Der Fluss folgt grob der RN25: Vielleicht kommen Sie an Goldwäschern vorbei und können an einer Brennerei für Toaka gasy (einheimischen Rum) anhalten. Keine Stromschnelle ist schwierig oder gefährlich, aber Sie werden nass.",
        "mg": "Midina irery amin'ny Namorona amin'ny kayak tsofina miaraka amin'ny Varibolo, izay manana fivarotana akaikin'ny fidirana amin'ny valan-javaboahary. Matetika dia eo amin'ny nosy kely eo afovoan'ny renirano akaikin'ny dobo rano mafana no ihaonana amin'ny mpiasa, izay manome toromarika sy ny kayak (miaraka amin'ny fivoy, akanjo famonjena aina ary satroka fiarovana). Manaraka ny RN25 eo ho eo ny renirano: mety handalo olona mitrandraka volamena ianao, ary afaka mijanona eo amin'ny toerana fanaovana toaka gasy. Tsy misy rianaky sarotra na mampidi-doza, fa ho lena ianao."
      },
      "price": {
        "en": "60,000 Ar per person",
        "fr": "60 000 Ar par personne",
        "de": "60.000 Ar pro Person",
        "mg": "60 000 Ar isan'olona"
      },
      "duration": { "en": "About 2 hours", "fr": "Environ 2 heures", "de": "Etwa 2 Stunden", "mg": "Adiny 2 eo ho eo" },
      "tips": {
        "en": [
          "No guide goes with you — you're on your own",
          "There's no set finish: when you've had enough, get out, deflate the kayak and flag down a taxi-brousse back to town",
          "Book in person at the shop, by phone or by email; they will confirm the meeting point",
          "Water levels are highest December to March",
          "A dry bag is worth bringing",
          "Cristo Hotel also arranges kayaking on request"
        ],
        "fr": [
          "Aucun guide ne vous accompagne — vous êtes autonome",
          "Pas d’arrivée fixe : quand vous en avez assez, sortez, dégonflez le kayak et arrêtez un taxi-brousse pour rentrer au village",
          "Réservez en personne à la boutique, par téléphone ou par e-mail ; l’équipe vous confirmera le point de rendez-vous",
          "Les eaux sont les plus hautes de décembre à mars",
          "Un sac étanche est utile",
          "Le Cristo Hotel organise aussi du kayak sur demande"
        ],
        "de": [
          "Kein Guide begleitet Sie – Sie sind auf sich gestellt",
          "Es gibt kein festes Ziel: Wenn Sie genug haben, steigen Sie aus, lassen die Luft aus dem Kajak und halten ein Taxi-Brousse zurück in den Ort an",
          "Persönlich im Laden, telefonisch oder per E-Mail buchen; das Team bestätigt den Treffpunkt",
          "Der Wasserstand ist von Dezember bis März am höchsten",
          "Ein wasserdichter Packsack lohnt sich",
          "Auch das Cristo Hotel organisiert auf Wunsch Kajaktouren"
        ],
        "mg": [
          "Tsy misy mpitari-dalana miaraka aminao — irery ianao",
          "Tsy misy toerana farany voafaritra: rehefa ampy ianao dia miakara, esory ny rivotra ao amin'ny kayak ary ajanony ny taxi-brousse hiverina an-tanàna",
          "Mamandriha mivantana ao amin'ny fivarotana, amin'ny telefaona na amin'ny mailaka; hamafisin'izy ireo ny toerana fihaonana",
          "Avo indrindra ny rano manomboka amin'ny Desambra ka hatramin'ny Martsa",
          "Tsara ny mitondra kitapo tsy idiran-drano",
          "Manao kayak koa ny Cristo Hotel raha angatahina"
        ]
      },
      "gallery[].alt": {
        "en": [
          "The Namorona River winding through the valley near Ranomafana",
          "Varibolo's shop and restaurant, where you can book a kayak",
          "A woman pointing to Varibolo's Kayak Ranomafana banner",
          "Launch point for Namorona River Kayaking",
          "Paddlers on the Namorona River Kayaking"
        ],
        "fr": [
          "La Namorona qui serpente dans la vallée près de Ranomafana",
          "La boutique-restaurant de Varibolo, où l’on peut réserver un kayak",
          "Une femme montre la banderole Kayak Ranomafana de Varibolo",
          "Le point de mise à l’eau pour le kayak sur la Namorona",
          "Des kayakistes sur la Namorona"
        ],
        "de": [
          "Die Namorona windet sich durch das Tal bei Ranomafana",
          "Laden und Restaurant von Varibolo, wo man ein Kajak buchen kann",
          "Eine Frau zeigt auf das Banner „Kayak Ranomafana“ von Varibolo",
          "Einstiegsstelle für das Kajakfahren auf der Namorona",
          "Kajakfahrer auf der Namorona"
        ],
        "mg": [
          "Ny renirano Namorona mikiaradia ao amin'ny lohasaha akaikin'i Ranomafana",
          "Ny fivarotana sy trano fisakafoanan'i Varibolo, ahafahana mamandrika kayak",
          "Vehivavy manondro ny sora-baventy Kayak Ranomafana an'i Varibolo",
          "Ny toerana fiaingan'ny kayak eny amin'ny renirano Namorona",
          "Mpivoy kayak eny amin'ny renirano Namorona"
        ]
      }
    },
    "ranomafana-arboretum": {
      "name": {
        "en": "Ranomafana Arboretum",
        "fr": "Arboretum de Ranomafana",
        "de": "Arboretum Ranomafana",
        "mg": "Arboretum Ranomafana"
      },
      "desc": {
        "en": "A hidden gem just east of town on the RN25, founded by Dan Turk: more than 50 kinds of tree, some native to south-east Madagascar and some brought to the island by trade centuries ago, plus a young baobab. A guide speaking English, French and Malagasy leads a loop of the grounds, with stunning views of the valley, unusual fruits to try, and lowland streaked tenrecs, chameleons, butterflies and frogs along the way.",
        "fr": "Un trésor caché juste à l’est du village sur la RN25, fondé par Dan Turk : plus de 50 espèces d’arbres, certaines originaires du sud-est de Madagascar, d’autres apportées sur l’île par le commerce il y a des siècles, et un jeune baobab. Un guide parlant anglais, français et malgache vous fait faire le tour du domaine, avec des vues splendides sur la vallée, des fruits insolites à goûter, et en chemin des tenrecs rayés, des caméléons, des papillons et des grenouilles.",
        "de": "Ein verstecktes Juwel gleich östlich des Orts an der RN25, gegründet von Dan Turk: mehr als 50 Baumarten, manche heimisch im Südosten Madagaskars, andere vor Jahrhunderten über den Handel auf die Insel gekommen, dazu ein junger Baobab. Ein Guide, der Englisch, Französisch und Madagassisch spricht, führt eine Runde über das Gelände, mit herrlichem Blick ins Tal, ungewöhnlichen Früchten zum Probieren und unterwegs Streifentanreks, Chamäleons, Schmetterlingen und Fröschen.",
        "mg": "Harena miafina eo atsinanan'ny tanàna eo amin'ny RN25, naorin'i Dan Turk: karazan-kazo mihoatra ny 50, ny sasany teratany avy any atsimo atsinanan'i Madagasikara ary ny sasany nentin'ny varotra teto amin'ny nosy taonjato maro lasa izay, ary koa reniala tanora iray. Mpitari-dalana miteny anglisy, frantsay ary malagasy no mitondra anao manodidina ny toerana, misy fijery mahavariana ny lohasaha, voankazo hafahafa azo andramana, ary sora, tana, lolo ary sahona eny an-dalana."
      },
      "price": {
        "en": "10,000 Ar per person (non-Malagasy), guide included",
        "fr": "10 000 Ar par personne (non-Malgaches), guide compris",
        "de": "10.000 Ar pro Person (Nicht-Madagassen), Guide inklusive",
        "mg": "10 000 Ar isan'olona (tsy Malagasy), tafiditra ny mpitari-dalana"
      },
      "duration": { "en": "About 1 hour", "fr": "Environ 1 heure", "de": "Etwa 1 Stunde", "mg": "Adiny 1 eo ho eo" },
      "tips": {
        "en": [
          "A two-minute drive, or an easy 20-minute walk, from town",
          "Expect the guided loop to take an hour or more",
          "Be ready to feed a giant Parson's chameleon an insect snack",
          "Gentle walking — suits varied mobility",
          "Good option in heavy rain or on a rest day"
        ],
        "fr": [
          "À deux minutes en voiture, ou à 20 minutes de marche facile, du village",
          "Comptez une heure ou plus pour la boucle guidée",
          "Préparez-vous à donner un insecte à un caméléon de Parson géant",
          "Marche facile — convient à des niveaux de mobilité variés",
          "Une bonne option sous une forte pluie ou un jour de repos"
        ],
        "de": [
          "Zwei Minuten mit dem Auto oder ein leichter Spaziergang von 20 Minuten vom Ort",
          "Rechnen Sie mit einer Stunde oder mehr für die geführte Runde",
          "Seien Sie bereit, einem riesigen Parson-Chamäleon einen Insektensnack zu füttern",
          "Leichtes Gehen – geeignet für unterschiedliche Mobilität",
          "Gut bei starkem Regen oder an einem Ruhetag"
        ],
        "mg": [
          "Roa minitra amin'ny fiara, na 20 minitra an-tongotra mora, avy ao an-tanàna",
          "Adiny iray na mihoatra no maharitra ny fitsidihana miaraka amin'ny mpitari-dalana",
          "Miomàna hanome bibikely ho sakafon'ny tana lehibe Parson",
          "Dia mora — mety amin'ny olona samihafa ny fahaizany mandeha",
          "Safidy tsara rehefa be orana na amin'ny andro fialan-tsasatra"
        ]
      },
      "gallery[].alt": {
        "en": [
          "Ranomafana Arboretum entrance",
          "Path through Ranomafana Arboretum",
          "Endemic flora at Ranomafana Arboretum"
        ],
        "fr": [
          "L’entrée de l’arboretum de Ranomafana",
          "Un sentier à travers l’arboretum de Ranomafana",
          "La flore endémique de l’arboretum de Ranomafana"
        ],
        "de": [
          "Eingang des Arboretums Ranomafana",
          "Weg durch das Arboretum Ranomafana",
          "Endemische Pflanzen im Arboretum Ranomafana"
        ],
        "mg": [
          "Ny fidirana ao amin'ny Arboretum Ranomafana",
          "Lalana mamakivaky ny Arboretum Ranomafana",
          "Zava-maniry tsy hita afa-tsy eto ao amin'ny Arboretum Ranomafana"
        ]
      }
    },
    "centre-valbio-tour": {
      "name": {
        "en": "Centre ValBio Research Campus Tour",
        "fr": "Visite du campus de recherche Centre ValBio",
        "de": "Führung durch den Forschungscampus Centre ValBio",
        "mg": "Fitsidihana ny foibem-pikarohana Centre ValBio"
      },
      "desc": {
        "en": "Guided tour of the research station near the park entrance, founded in 2003 by primatologist Dr Patricia Wright and run today by Malagasy and American researchers and staff — labs, ongoing lemur and reforestation projects, and the story of how the park came to be protected. The centre also hosts regular talks on its research.",
        "fr": "Visite guidée de la station de recherche près de l’entrée du parc, fondée en 2003 par la primatologue Patricia Wright et dirigée aujourd’hui par des chercheurs et des équipes malgaches et américains — laboratoires, projets en cours sur les lémuriens et le reboisement, et l’histoire de la protection du parc. Le centre organise aussi régulièrement des conférences sur ses recherches.",
        "de": "Führung durch die Forschungsstation nahe dem Parkeingang, 2003 von der Primatologin Dr. Patricia Wright gegründet und heute von madagassischen und amerikanischen Forschenden und Mitarbeitenden geführt – Labore, laufende Projekte zu Lemuren und Wiederaufforstung und die Geschichte, wie der Park unter Schutz kam. Das Zentrum veranstaltet auch regelmäßig Vorträge über seine Forschung.",
        "mg": "Fitsidihana miaraka amin'ny mpitari-dalana ny foibem-pikarohana akaikin'ny fidirana amin'ny valan-javaboahary, naorin'ny Dr Patricia Wright, manam-pahaizana momba ny gidro, tamin'ny 2003, ary tantanan'ny mpikaroka sy mpiasa malagasy sy amerikanina ankehitriny — laboratoara, tetikasa momba ny gidro sy ny fambolen-kazo, ary ny tantaran'ny nanaovana ny valan-javaboahary ho voaaro. Manao lahateny tsy tapaka momba ny fikarohany koa ny foibe."
      },
      "price": {
        "en": "Contact for visit rates",
        "fr": "Nous contacter pour les tarifs de visite",
        "de": "Preise für Besuche auf Anfrage",
        "mg": "Mifandraisa aminay momba ny saran'ny fitsidihana"
      },
      "duration": { "en": "1–2 hours", "fr": "1 à 2 heures", "de": "1–2 Stunden", "mg": "Adiny 1–2" },
      "tips": {
        "en": [
          "All visits must be arranged one day in advance",
          "Ask about the research talks",
          "More on visiting at the Centre ValBio website"
        ],
        "fr": [
          "Toutes les visites se réservent un jour à l’avance",
          "Renseignez-vous sur les conférences",
          "Plus d’informations sur les visites sur le site du Centre ValBio"
        ],
        "de": [
          "Alle Besuche müssen einen Tag im Voraus vereinbart werden",
          "Nach den Forschungsvorträgen fragen",
          "Mehr zum Besuch auf der Website des Centre ValBio"
        ],
        "mg": [
          "Tsy maintsy alahatra iray andro mialoha ny fitsidihana rehetra",
          "Manontania momba ny lahateny momba ny fikarohana",
          "Fanazavana fanampiny ao amin'ny tranonkalan'ny Centre ValBio"
        ]
      }
    },
    "studio-olonala": {
      "desc": {
        "en": "Art studio and shop at the park entrance, and the public face of oloNala — Madagascar's first environmentally focused art residency, working with Malagasy artists on conservation themes. The building itself incorporates Zafimaniry woodwork.",
        "fr": "Atelier d’art et boutique à l’entrée du parc, et vitrine d’oloNala — la première résidence d’artistes de Madagascar consacrée à l’environnement, qui travaille avec des artistes malgaches sur les thèmes de la conservation. Le bâtiment intègre des boiseries zafimaniry.",
        "de": "Kunstatelier und Laden am Parkeingang und das öffentliche Gesicht von oloNala – Madagaskars erster Künstlerresidenz mit Umweltschwerpunkt, die mit madagassischen Kunstschaffenden zu Naturschutzthemen arbeitet. Das Gebäude selbst enthält Holzarbeiten der Zafimaniry.",
        "mg": "Atelier kanto sy fivarotana eo amin'ny fidirana amin'ny valan-javaboahary, ary tarehin'ny oloNala eo imason'ny besinimaro — ny toeram-ponenan'ny mpanakanto voalohany eto Madagasikara mifantoka amin'ny tontolo iainana, miara-miasa amin'ny mpanakanto malagasy momba ny fiarovana ny zava-boahary. Misy asa hazo zafimaniry ao amin'ilay trano mihitsy."
      },
      "price": {
        "en": "Free to browse",
        "fr": "Entrée libre",
        "de": "Stöbern kostenlos",
        "mg": "Maimaim-poana ny mijery"
      },
      "duration": { "en": "30–60 minutes", "fr": "30 à 60 minutes", "de": "30–60 Minuten", "mg": "30–60 minitra" },
      "tips": {
        "en": [
          "Original work and prints for sale",
          "Right by the park gate — easy to combine with a morning circuit"
        ],
        "fr": [
          "Œuvres originales et tirages en vente",
          "Juste à l’entrée du parc — facile à combiner avec un circuit du matin"
        ],
        "de": [
          "Originale und Drucke zu kaufen",
          "Direkt am Parktor – leicht mit einem Rundweg am Vormittag zu verbinden"
        ],
        "mg": [
          "Misy asa tany am-boalohany sy sary natonta amidy",
          "Eo akaikin'ny vavahadin'ny valan-javaboahary — mora ampiarahina amin'ny lalana maraina"
        ]
      },
      "gallery[].alt": {
        "en": [
          "The arched doorway of the oloNala Art Studio & Shop, in a wall painted to look like mossy stone",
          "A wall of framed wildlife paintings inside Studio oloNala",
          "Carved wooden plants on a striped wooden wall, beside framed paintings, at Studio oloNala",
          "An artist's worktable under the window at Studio oloNala",
          "A small gallery room hung with framed pictures at Studio oloNala"
        ],
        "fr": [
          "La porte en arc de l’oloNala Art Studio & Shop, dans un mur peint comme de la pierre moussue",
          "Un mur de peintures animalières encadrées dans le Studio oloNala",
          "Des plantes sculptées dans le bois sur un mur rayé, à côté de tableaux encadrés, au Studio oloNala",
          "La table de travail d’un artiste sous la fenêtre, au Studio oloNala",
          "Une petite salle d’exposition aux murs couverts de tableaux encadrés, au Studio oloNala"
        ],
        "de": [
          "Der Bogeneingang des oloNala Art Studio & Shop, in einer Wand, die wie bemooster Stein bemalt ist",
          "Eine Wand mit gerahmten Tierbildern im Studio oloNala",
          "Holzgeschnitzte Pflanzen an einer gestreiften Holzwand neben gerahmten Bildern, Studio oloNala",
          "Ein Arbeitstisch für Künstler unter dem Fenster im Studio oloNala",
          "Ein kleiner Ausstellungsraum mit gerahmten Bildern im Studio oloNala"
        ],
        "mg": [
          "Ny varavarana miendrika andohalambo an'ny oloNala Art Studio & Shop, amin'ny rindrina voaloko ho toy ny vato misy volon-ketsa",
          "Rindrina feno sary hosodoko misy biby, voafefy, ao anatin'ny Studio oloNala",
          "Zavamaniry voasokitra amin'ny hazo eo amin'ny rindrina hazo misy tsipika, eo akaikin'ny sary hosodoko voafefy, ao amin'ny Studio oloNala",
          "Latabatra fiasan'ny mpanakanto eo ambanin'ny varavarankely, ao amin'ny Studio oloNala",
          "Efitrano fampirantiana kely misy sary voafefy, ao amin'ny Studio oloNala"
        ]
      }
    },
    "park-entrance-craft-shop": {
      "name": {
        "en": "Park Entrance Craft Shop",
        "fr": "Boutique d’artisanat de l’entrée du parc",
        "de": "Kunsthandwerksladen am Parkeingang",
        "mg": "Fivarotana asa-tanana eo am-pidirana amin'ny valan-javaboahary"
      },
      "desc": {
        "en": "A small local shop by the park entrance, selling Malagasy vanilla, jars of honey, polished stones, woven bags and baskets, and lemur paintings.",
        "fr": "Une petite boutique locale à l’entrée du parc, qui vend de la vanille de Madagascar, des pots de miel, des pierres polies, des sacs et paniers tressés et des peintures de lémuriens.",
        "de": "Ein kleiner einheimischer Laden am Parkeingang mit madagassischer Vanille, Honig im Glas, polierten Steinen, geflochtenen Taschen und Körben und Lemurenbildern.",
        "mg": "Fivarotana kely eo an-toerana, eo am-pidirana amin'ny valan-javaboahary, mivarotra lavanila malagasy, tantely anaty siny kely, vato voadio sy mamirapiratra, kitapo sy harona tenona, ary sary hosodoko misy gidro."
      },
      "price": {
        "en": "Free to browse",
        "fr": "Entrée libre",
        "de": "Stöbern kostenlos",
        "mg": "Maimaim-poana ny mijery"
      },
      "duration": {
        "en": "15–30 minutes",
        "fr": "15 à 30 minutes",
        "de": "15–30 Minuten",
        "mg": "15–30 minitra"
      },
      "tips": {
        "en": [
          "Right by the park entrance — easy to combine with a circuit and a visit to Studio oloNala",
          "Bring small Ariary notes"
        ],
        "fr": [
          "Juste à l’entrée du parc — facile à combiner avec un circuit et une visite du Studio oloNala",
          "Prévoyez des petites coupures en ariary"
        ],
        "de": [
          "Direkt am Parkeingang – leicht mit einem Rundweg und einem Besuch im Studio oloNala zu verbinden",
          "Kleine Ariary-Scheine mitbringen"
        ],
        "mg": [
          "Eo akaikin'ny fidirana amin'ny valan-javaboahary — mora ampiarahina amin'ny lalana iray sy fitsidihana ny Studio oloNala",
          "Mitondrà vola ariary madinika"
        ]
      },
      "gallery[].alt": {
        "en": [
          "Vanilla, jars of honey, polished stones and woven bags for sale at the craft shop by the park entrance",
          "The open front of the craft shop by the park entrance, with the shopkeeper by the door"
        ],
        "fr": [
          "Vanille, pots de miel, pierres polies et sacs tressés en vente à la boutique d’artisanat de l’entrée du parc",
          "La devanture ouverte de la boutique d’artisanat de l’entrée du parc, avec la vendeuse près de la porte"
        ],
        "de": [
          "Vanille, Honig im Glas, polierte Steine und geflochtene Taschen im Kunsthandwerksladen am Parkeingang",
          "Die offene Front des Kunsthandwerksladens am Parkeingang, mit der Verkäuferin an der Tür"
        ],
        "mg": [
          "Lavanila, tantely anaty siny kely, vato voadio ary kitapo tenona amidy ao amin'ny fivarotana asa-tanana eo am-pidirana amin'ny valan-javaboahary",
          "Ny tavan'ny fivarotana asa-tanana misokatra eo am-pidirana amin'ny valan-javaboahary, miaraka amin'ny mpivarotra eo akaikin'ny varavarana"
        ]
      }
    },
    "village-artisan-market": {
      "name": {
        "en": "Village Artisan Market",
        "fr": "Marché artisanal du village",
        "de": "Kunsthandwerksmarkt im Ort",
        "mg": "Tsenan'ny asa-tanana ao an-tanàna"
      },
      "desc": {
        "en": "Handwoven basketry, woodcarving, embroidery and local spices from producers around Ranomafana, sold at the village centre.",
        "fr": "Vannerie tissée à la main, sculpture sur bois, broderie et épices locales de producteurs des environs de Ranomafana, vendues au centre du village.",
        "de": "Handgeflochtene Körbe, Holzschnitzereien, Stickereien und lokale Gewürze von Erzeugern rund um Ranomafana, verkauft im Ortszentrum.",
        "mg": "Harona tenona tanana, sokitra hazo, peta-kofehy ary zava-manitra avy amin'ireo mpamokatra manodidina an'i Ranomafana, amidy eo afovoan-tanàna."
      },
      "price": { "en": "Free entry", "fr": "Entrée libre", "de": "Eintritt frei", "mg": "Maimaim-poana ny fidirana" },
      "duration": { "en": "1–2 hours", "fr": "1 à 2 heures", "de": "1–2 Stunden", "mg": "Adiny 1–2" },
      "tips": {
        "en": ["Bring small Ariary notes", "Ask before photographing stallholders"],
        "fr": ["Prévoyez des petites coupures en ariary", "Demandez avant de photographier les marchands"],
        "de": ["Kleine Ariary-Scheine mitbringen", "Fragen Sie, bevor Sie Standbetreiber fotografieren"],
        "mg": ["Mitondrà vola ariary madinika", "Angataho alalana alohan'ny haka sary ny mpivarotra"]
      },
      "gallery[].alt": {
        "en": ["Stalls at the Village Artisan Market", "Crafts at the Village Artisan Market"],
        "fr": ["Les étals du marché artisanal du village", "L’artisanat du marché artisanal du village"],
        "de": ["Stände auf dem Kunsthandwerksmarkt im Ort", "Kunsthandwerk auf dem Markt im Ort"],
        "mg": [
          "Ireo toeram-pivarotana ao amin'ny tsenan'ny asa-tanana ao an-tanàna",
          "Asa-tanana ao amin'ny tsenan'ny asa-tanana ao an-tanàna"
        ]
      }
    },
    "voi-ambohimagneva": {
      "name": {
        "en": "VOI Ambohimagneva Community Reserve",
        "fr": "Réserve communautaire VOI Ambohimagneva",
        "de": "Gemeindereservat VOI Ambohimagneva",
        "mg": "Tahirin'ny fiaraha-monina VOI Ambohimagneva"
      },
      "desc": {
        "en": "A 75-hectare community-managed reserve bordering the national park, governed through a VOI partnership under Madagascar's GELOSE framework, with MNP-certified guide access and Centre ValBio research collaboration. Trails and a river waterfall site are being opened to visitors.",
        "fr": "Une réserve de 75 hectares gérée par la communauté, en bordure du parc national, administrée par un VOI dans le cadre de la loi malgache GELOSE, avec des guides agréés par MNP et des recherches menées avec le Centre ValBio. Des sentiers et une cascade sur la rivière sont en cours d’ouverture aux visiteurs.",
        "de": "Ein 75 Hektar großes, von der Gemeinde verwaltetes Reservat am Rand des Nationalparks, geführt über eine VOI-Partnerschaft nach Madagaskars GELOSE-Gesetz, mit von MNP zertifizierten Guides und Forschungszusammenarbeit mit dem Centre ValBio. Wege und ein Wasserfall am Fluss werden für Besucher geöffnet.",
        "mg": "Tahiry 75 hektara tantanan'ny fiaraha-monina, mifanila amin'ny valan-javaboahary, tantanana amin'ny alalan'ny fiaraha-miasa amin'ny VOI araka ny lalàna GELOSE eto Madagasikara, misy mpitari-dalana nahazo fahazoan-dalana avy amin'ny MNP ary fiaraha-miasa amin'ny Centre ValBio amin'ny fikarohana. Efa sokafana ho an'ny mpitsidika ny lalana sy riandrano iray eo amin'ny renirano."
      },
      "price": {
        "en": "In development — contact for access",
        "fr": "En cours d’aménagement — nous contacter pour l’accès",
        "de": "Im Aufbau – Zugang auf Anfrage",
        "mg": "Mbola eo am-panomanana — mifandraisa aminay momba ny fidirana"
      },
      "duration": { "en": "Half day", "fr": "Une demi-journée", "de": "Halber Tag", "mg": "Antsasak'andro" },
      "tips": {
        "en": [
          "Access on foot, roughly 3 km from town",
          "Contact ahead — visitor access is still being established"
        ],
        "fr": [
          "Accès à pied, à environ 3 km du village",
          "Prenez contact avant de venir — l’accueil des visiteurs est encore en cours de mise en place"
        ],
        "de": [
          "Zu Fuß erreichbar, etwa 3 km vom Ort",
          "Vorher Kontakt aufnehmen – der Besucherbetrieb wird noch aufgebaut"
        ],
        "mg": [
          "Azo andehanana an-tongotra, 3 km eo ho eo miala ny tanàna",
          "Mifandraisa mialoha — mbola eo am-panomanana ny fandraisana mpitsidika"
        ]
      },
      "gallery[].alt": {
        "en": [
          "Tall waterfall inside the reserve at VOI Ambohimagneva",
          "Tall waterfall lower on the trail at VOI Ambohimagneva",
          "Waterfall dropping into a deep pool at VOI Ambohimagneva",
          "Waterfall along the VOI Ambohimagneva trail",
          "A visitor with arms outstretched in front of a waterfall at VOI Ambohimagneva",
          "A swimmer standing in the spray of a waterfall at VOI Ambohimagneva",
          "Sunlight falling on a waterfall between dark rocks at VOI Ambohimagneva",
          "A mossy cascade spilling into a forest pool at VOI Ambohimagneva",
          "Water sliding down a mossy rock face in two streams at VOI Ambohimagneva",
          "A river pool at VOI Ambohimagneva",
          "Another river pool along the VOI Ambohimagneva trail",
          "The river running through VOI Ambohimagneva",
          "A hand-cut wooden water channel on the VOI Ambohimagneva trail",
          "Rainforest interior at VOI Ambohimagneva",
          "View over the valley near VOI Ambohimagneva",
          "Mossy leaf-tailed gecko camouflaged on a branch at VOI Ambohimagneva",
          "A frog species found at VOI Ambohimagneva",
          "A second frog species found at VOI Ambohimagneva",
          "Several tree frogs resting together on a branch in front of the waterfall at VOI Ambohimagneva",
          "The tree frogs' leafy roost in the sun at VOI Ambohimagneva",
          "Hiking the trail at VOI Ambohimagneva",
          "Guide Adrien on the boardwalk trail at VOI Ambohimagneva"
        ],
        "fr": [
          "Une haute cascade dans la réserve VOI Ambohimagneva",
          "Une haute cascade plus bas sur le sentier, VOI Ambohimagneva",
          "Une cascade plongeant dans un bassin profond, VOI Ambohimagneva",
          "Une cascade le long du sentier de VOI Ambohimagneva",
          "Une personne, bras grands ouverts, devant une cascade à VOI Ambohimagneva",
          "Une personne qui se baigne, debout dans les embruns d’une cascade à VOI Ambohimagneva",
          "Le soleil sur une cascade entre des rochers sombres, VOI Ambohimagneva",
          "Une cascade moussue qui se déverse dans un bassin en forêt, VOI Ambohimagneva",
          "L’eau glisse en deux filets sur une paroi rocheuse moussue, à VOI Ambohimagneva",
          "Un bassin de rivière à VOI Ambohimagneva",
          "Un autre bassin de rivière le long du sentier de VOI Ambohimagneva",
          "La rivière qui traverse VOI Ambohimagneva",
          "Une rigole en bois taillée à la main sur le sentier de VOI Ambohimagneva",
          "Au cœur de la forêt tropicale, VOI Ambohimagneva",
          "Vue sur la vallée près de VOI Ambohimagneva",
          "Un uroplate de Sikora camouflé sur une branche, VOI Ambohimagneva",
          "Une espèce de grenouille de VOI Ambohimagneva",
          "Une autre espèce de grenouille de VOI Ambohimagneva",
          "Plusieurs rainettes qui se reposent ensemble sur une branche devant la cascade, à VOI Ambohimagneva",
          "Le perchoir feuillu des rainettes, au soleil, à VOI Ambohimagneva",
          "Randonnée sur le sentier de VOI Ambohimagneva",
          "Le guide Adrien sur la passerelle du sentier de VOI Ambohimagneva"
        ],
        "de": [
          "Hoher Wasserfall im Reservat VOI Ambohimagneva",
          "Hoher Wasserfall weiter unten am Weg, VOI Ambohimagneva",
          "Wasserfall, der in ein tiefes Becken stürzt, VOI Ambohimagneva",
          "Wasserfall am Weg durch VOI Ambohimagneva",
          "Eine Person mit ausgebreiteten Armen vor einem Wasserfall, VOI Ambohimagneva",
          "Eine badende Person steht in der Gischt eines Wasserfalls, VOI Ambohimagneva",
          "Sonnenlicht auf einem Wasserfall zwischen dunklen Felsen, VOI Ambohimagneva",
          "Eine moosige Kaskade ergießt sich in ein Waldbecken, VOI Ambohimagneva",
          "Wasser gleitet in zwei Strömen über eine moosige Felswand, VOI Ambohimagneva",
          "Ein Flussbecken in VOI Ambohimagneva",
          "Ein weiteres Flussbecken am Weg durch VOI Ambohimagneva",
          "Der Fluss, der durch VOI Ambohimagneva fließt",
          "Eine handgeschnitzte Holzrinne am Weg durch VOI Ambohimagneva",
          "Im Inneren des Regenwalds, VOI Ambohimagneva",
          "Blick über das Tal bei VOI Ambohimagneva",
          "Moosiger Plattschwanzgecko, getarnt auf einem Ast, VOI Ambohimagneva",
          "Eine Froschart aus VOI Ambohimagneva",
          "Eine zweite Froschart aus VOI Ambohimagneva",
          "Mehrere Laubfrösche ruhen gemeinsam auf einem Zweig vor dem Wasserfall, VOI Ambohimagneva",
          "Der belaubte Ruheplatz der Laubfrösche in der Sonne, VOI Ambohimagneva",
          "Wandern auf dem Weg durch VOI Ambohimagneva",
          "Guide Adrien auf dem Bohlenweg in VOI Ambohimagneva"
        ],
        "mg": [
          "Riandrano avo ao anatin'ny tahiry VOI Ambohimagneva",
          "Riandrano avo any ambany kokoa amin'ny lalana, VOI Ambohimagneva",
          "Riandrano milatsaka ao anaty dobo lalina, VOI Ambohimagneva",
          "Riandrano eo amoron'ny lalan'ny VOI Ambohimagneva",
          "Mpitsidika manitatra ny sandriny eo anoloan'ny riandrano iray ao VOI Ambohimagneva",
          "Mpilomano mijoro eo amin'ny tsiranoka avy amin'ny riandrano ao VOI Ambohimagneva",
          "Taratry ny masoandro amin'ny riandrano eo anelanelan'ny vato maizina, VOI Ambohimagneva",
          "Riandrano misy volon-ketsa milatsaka ao anaty dobo an'ala, VOI Ambohimagneva",
          "Rano mikoriana roa sakana eo amin'ny hantsam-bato misy volon-ketsa, ao amin'ny VOI Ambohimagneva",
          "Dobo eo amin'ny renirano ao VOI Ambohimagneva",
          "Dobo iray hafa eo amin'ny renirano manaraka ny lalan'ny VOI Ambohimagneva",
          "Ny renirano mamakivaky ny VOI Ambohimagneva",
          "Lakan-drano hazo voasokitra tanana eo amin'ny lalan'ny VOI Ambohimagneva",
          "Ao afovoan'ny ala mando, VOI Ambohimagneva",
          "Fijery ny lohasaha akaikin'ny VOI Ambohimagneva",
          "Androngo rambo ravina (Uroplatus sikorae) miafina eo amin'ny sampan-kazo, VOI Ambohimagneva",
          "Karazana sahona iray hita ao VOI Ambohimagneva",
          "Karazana sahona iray hafa hita ao VOI Ambohimagneva",
          "Sahona maromaro mipetraka miaraka eo amin'ny sampan-kazo eo anoloan'ny riandrano, ao amin'ny VOI Ambohimagneva",
          "Ny toerana fialan-tsasatry ny sahona eo anivon'ny ravina, amin'ny masoandro, ao amin'ny VOI Ambohimagneva",
          "Dia an-tongotra eo amin'ny lalan'ny VOI Ambohimagneva",
          "Adrien, mpitari-dalana, eo amin'ny tetezana hazo ao VOI Ambohimagneva"
        ]
      }
    }
  },
  "itineraries": {
    "one-day-highlights": {
      "badge": {
        "en": "1-DAY HIGHLIGHTS",
        "fr": "L’ESSENTIEL EN 1 JOUR",
        "de": "HÖHEPUNKTE AN 1 TAG",
        "mg": "NY TSARA INDRINDRA AO ANATIN'NY ANDRO 1"
      },
      "title": {
        "en": "Rainforest & Thermal Bath Day",
        "fr": "Forêt tropicale et bain thermal",
        "de": "Regenwald und Thermalbad an einem Tag",
        "mg": "Ala mando sy fandroana rano mafana"
      },
      "level": { "en": "Easy", "fr": "Facile", "de": "Leicht", "mg": "Mora" },
      "bestFor": {
        "en": "First visit, tight schedule, RN25 road-trippers",
        "fr": "Première visite, emploi du temps serré, voyageurs de la RN25",
        "de": "Erster Besuch, knapper Zeitplan, Reisende auf der RN25",
        "mg": "Fitsidihana voalohany, fotoana fohy, mpandeha amin'ny RN25"
      },
      "parkTicket": { "en": "Yes", "fr": "Oui", "de": "Ja", "mg": "Eny" },
      "desc": {
        "en": "The classic single day: mid-morning lemur tracking on the Talatakely circuit, lunch in the village, and an afternoon soak in the thermal pool.",
        "fr": "La journée classique : à la recherche des lémuriens en milieu de matinée sur le circuit Talatakely, déjeuner au village et bain dans la piscine thermale l’après-midi.",
        "de": "Der klassische Tag: am Vormittag Lemuren auf dem Talatakely-Rundweg suchen, Mittagessen im Ort und am Nachmittag ein Bad im Thermalbecken.",
        "mg": "Ilay andro iray mahazatra: mitady gidro amin'ny antoandro maraina eo amin'ny lalana Talatakely, misakafo antoandro ao an-tanàna, ary milomano ao amin'ny dobo rano mafana amin'ny tolakandro."
      },
      "stops": {
        "en": [
          "08:00 — Talatakely circuit with a certified guide (book the night before; the park opens at 07:00)",
          "12:30 — Lunch at Chez Gaspard or the park entrance restaurant",
          "14:30 — Station Thermale public pool",
          "18:30 — Optional guided night walk on the forest edge (you need a car)"
        ],
        "fr": [
          "08:00 — Circuit Talatakely avec un guide agréé (réservez la veille ; le parc ouvre à 07:00)",
          "12:30 — Déjeuner chez Gaspard ou au restaurant de l’entrée du parc",
          "14:30 — Piscine publique de la Station Thermale",
          "18:30 — En option, balade nocturne guidée en lisière de forêt (il faut une voiture)"
        ],
        "de": [
          "08:00 — Talatakely-Rundweg mit einem zertifizierten Guide (am Vorabend buchen; der Park öffnet um 07:00)",
          "12:30 — Mittagessen bei Chez Gaspard oder im Restaurant am Parkeingang",
          "14:30 — Öffentliches Becken der Station Thermale",
          "18:30 — Optional: geführte Nachtwanderung am Waldrand (Auto nötig)"
        ],
        "mg": [
          "08:00 — Lalana Talatakely miaraka amin'ny mpitari-dalana nahazo fahazoan-dalana (mamandriha ny alina teo aloha; misokatra amin'ny 07:00 ny valan-javaboahary)",
          "12:30 — Sakafo antoandro ao Chez Gaspard na ao amin'ny trano fisakafoana eo am-bavahadin'ny valan-javaboahary",
          "14:30 — Dobo ho an'ny besinimaro ao amin'ny Station Thermale",
          "18:30 — Raha tianao, fitsangatsanganana amin'ny alina eo amin'ny sisin'ala (ilaina ny fiara)"
        ]
      }
    },
    "two-day-classic": {
      "badge": {
        "en": "2-DAY CLASSIC",
        "fr": "LE CLASSIQUE EN 2 JOURS",
        "de": "KLASSIKER IN 2 TAGEN",
        "mg": "NY MAHAZATRA AO ANATIN'NY ANDRO 2"
      },
      "title": {
        "en": "Ranomafana in Two Days",
        "fr": "Ranomafana en deux jours",
        "de": "Ranomafana in zwei Tagen",
        "mg": "Ranomafana ao anatin'ny andro roa"
      },
      "level": { "en": "Moderate", "fr": "Modéré", "de": "Mittel", "mg": "Antonony" },
      "bestFor": {
        "en": "Most visitors — the recommended minimum stay",
        "fr": "La plupart des visiteurs — la durée minimale conseillée",
        "de": "Die meisten Besucher – der empfohlene Mindestaufenthalt",
        "mg": "Ny ankamaroan'ny mpitsidika — ny faharetana kely indrindra atoro"
      },
      "parkTicket": {
        "en": "Yes, both days",
        "fr": "Oui, les deux jours",
        "de": "Ja, an beiden Tagen",
        "mg": "Eny, andro roa"
      },
      "desc": {
        "en": "One short circuit and one deeper into primary forest, with the thermal springs, a night walk, and the arboretum in between.",
        "fr": "Un circuit court et un autre plus loin dans la forêt primaire, avec entre les deux les sources thermales, une balade nocturne et l’arboretum.",
        "de": "Ein kurzer Rundweg und einer tiefer in den Primärwald, dazwischen die Thermalquellen, eine Nachtwanderung und das Arboretum.",
        "mg": "Lalana fohy iray sy lalana iray miditra lalina kokoa ao amin'ny ala voalohany, miaraka amin'ny loharano mafana, fitsangatsanganana amin'ny alina ary ny arboretum eo anelanelany."
      },
      "stops": {
        "en": [
          "Day 1 am — Talatakely circuit",
          "Day 1 pm — Ranomafana Arboretum",
          "Day 1 evening — Guided night walk",
          "Day 2 morning — Vatoharanana circuit into primary forest (3–4 hrs)",
          "Day 2 evening — A soak in Hotel Thermal’s hot-spring pools (book ahead), then dinner at Grenat or Setam Lodge"
        ],
        "fr": [
          "Jour 1, matin — Circuit Talatakely",
          "Jour 1, après-midi — Arboretum de Ranomafana",
          "Jour 1, soir — Balade nocturne guidée",
          "Jour 2, matin — Circuit Vatoharanana dans la forêt primaire (3 à 4 h)",
          "Jour 2, soir — Bain dans les bassins thermaux de l’Hôtel Thermal (sur réservation), puis dîner au Grenat ou au Setam Lodge"
        ],
        "de": [
          "Tag 1 vormittags — Talatakely-Rundweg",
          "Tag 1 nachmittags — Arboretum Ranomafana",
          "Tag 1 abends — Geführte Nachtwanderung",
          "Tag 2 vormittags — Vatoharanana-Rundweg in den Primärwald (3–4 Std.)",
          "Tag 2 abends — Bad in den Thermalbecken des Hotel Thermal (vorher buchen), dann Abendessen im Grenat oder in der Setam Lodge"
        ],
        "mg": [
          "Andro 1 maraina — Lalana Talatakely",
          "Andro 1 tolakandro — Arboretum Ranomafana",
          "Andro 1 hariva — Fitsangatsanganana amin'ny alina miaraka amin'ny mpitari-dalana",
          "Andro 2 maraina — Lalana Vatoharanana ao amin'ny ala voalohany (adiny 3–4)",
          "Andro 2 hariva — Fandroana ao amin'ny dobo rano mafana ao amin'ny Hotel Thermal (mamandriha mialoha), avy eo sakafo hariva ao Grenat na Setam Lodge"
        ]
      }
    },
    "three-day-deep": {
      "badge": {
        "en": "3-DAY IMMERSION",
        "fr": "IMMERSION EN 3 JOURS",
        "de": "3 TAGE EINTAUCHEN",
        "mg": "FILENTEHANA ANDRO 3"
      },
      "title": {
        "en": "Deep Rainforest & Community",
        "fr": "Forêt profonde et communautés",
        "de": "Tiefer Regenwald und Gemeinden",
        "mg": "Ala lalina sy fiaraha-monina"
      },
      "level": { "en": "Demanding", "fr": "Difficile", "de": "Anspruchsvoll", "mg": "Sarotra" },
      "bestFor": {
        "en": "Photographers, naturalists, slow travellers",
        "fr": "Photographes, naturalistes, voyageurs qui prennent leur temps",
        "de": "Fotografen, Naturkundler, Reisende mit Zeit",
        "mg": "Mpaka sary, mpandinika ny zava-boahary, mpandeha tsy maika"
      },
      "parkTicket": { "en": "Yes, days 1–2", "fr": "Oui, jours 1 et 2", "de": "Ja, Tag 1–2", "mg": "Eny, andro 1–2" },
      "desc": {
        "en": "Three days lets you reach the quieter forest, meet the people doing the conservation work, and still have a rest afternoon.",
        "fr": "Trois jours permettent d’atteindre la forêt la plus calme, de rencontrer ceux qui font le travail de conservation et de garder un après-midi de repos.",
        "de": "In drei Tagen erreichen Sie den ruhigeren Wald, lernen die Menschen hinter der Naturschutzarbeit kennen und haben trotzdem einen freien Nachmittag.",
        "mg": "Ny andro telo dia ahafahanao mahatratra ny ala mangina kokoa, mihaona amin'ireo olona manao ny asa fiarovana, ary mbola manana tolakandro fialan-tsasatra."
      },
      "stops": {
        "en": [
          "Day 1 — Talatakely circuit, then Centre ValBio campus tour (arrange a day ahead)",
          "Day 2 — The Valohoaka trek (5–7 hrs), or the two-day Vohiparara route to the sacred lake",
          "Day 3 am — Cascade Andriamamovoka or Namorona kayaking",
          "Day 3 pm — Studio oloNala and the village artisan market"
        ],
        "fr": [
          "Jour 1 — Circuit Talatakely, puis visite du campus du Centre ValBio (à réserver la veille)",
          "Jour 2 — La randonnée de Valohoaka (5 à 7 h), ou l’itinéraire de deux jours par Vohiparara jusqu’au lac sacré",
          "Jour 3, matin — Cascade Andriamamovoka ou kayak sur la Namorona",
          "Jour 3, après-midi — Studio oloNala et le marché artisanal du village"
        ],
        "de": [
          "Tag 1 — Talatakely-Rundweg, dann Führung über den Campus des Centre ValBio (einen Tag vorher vereinbaren)",
          "Tag 2 — Die Valohoaka-Wanderung (5–7 Std.) oder die zweitägige Route über Vohiparara zum heiligen See",
          "Tag 3 vormittags — Cascade Andriamamovoka oder Kajakfahren auf der Namorona",
          "Tag 3 nachmittags — Studio oloNala und der Kunsthandwerksmarkt im Ort"
        ],
        "mg": [
          "Andro 1 — Lalana Talatakely, avy eo fitsidihana ny campus Centre ValBio (alaharo iray andro mialoha)",
          "Andro 2 — Ny dia lavitra Valohoaka (adiny 5–7), na ny lalana andro roa amin'ny Vohiparara mankany amin'ny farihy masina",
          "Andro 3 maraina — Cascade Andriamamovoka na kayak eny amin'ny Namorona",
          "Andro 3 tolakandro — Studio oloNala sy ny tsenan'ny asa-tanana ao an-tanàna"
        ]
      }
    },
    "birders-two-day": {
      "badge": { "en": "BIRDING", "fr": "ORNITHOLOGIE", "de": "VOGELBEOBACHTUNG", "mg": "FIJERENA VORONA" },
      "title": {
        "en": "Birders' Two Days",
        "fr": "Deux jours pour les ornithologues",
        "de": "Zwei Tage für Vogelbeobachter",
        "mg": "Andro roa ho an'ny mpijery vorona"
      },
      "level": { "en": "Moderate", "fr": "Modéré", "de": "Mittel", "mg": "Antonony" },
      "bestFor": {
        "en": "Serious birders — ask for a birding specialist guide (220,000 Ar)",
        "fr": "Ornithologues passionnés — demandez un guide spécialisé en oiseaux (220 000 Ar)",
        "de": "Ernsthafte Vogelbeobachter – nach einem Vogel-Guide fragen (220.000 Ar)",
        "mg": "Mpijery vorona tena mazoto — angataho ny mpitari-dalana manampahaizana momba ny vorona (220 000 Ar)"
      },
      "parkTicket": {
        "en": "Yes, both days",
        "fr": "Oui, les deux jours",
        "de": "Ja, an beiden Tagen",
        "mg": "Eny, andro roa"
      },
      "desc": {
        "en": "Ranomafana holds most of the eastern rainforest endemics. Two days on the higher circuits gives you a realistic shot at the ground-rollers and asities.",
        "fr": "Ranomafana abrite la plupart des espèces endémiques de la forêt humide de l’Est. Deux jours sur les circuits d’altitude vous donnent de vraies chances de voir les brachyptérolles et les philépittes.",
        "de": "In Ranomafana leben die meisten Endemiten des östlichen Regenwalds. Zwei Tage auf den höher gelegenen Rundwegen geben Ihnen eine realistische Chance auf Erdracken und Lappenpittas.",
        "mg": "Ao Ranomafana no misy ny ankamaroan'ny vorona tsy hita afa-tsy ao amin'ny ala mando atsinanana. Ny andro roa amin'ireo lalana avo dia manome vintana tena izy hahitana ireo vorona mandeha an-tany sy ny asity."
      },
      "stops": {
        "en": [
          "Day 1 — Vohiparara circuit from opening time (07:00), higher-altitude forest",
          "Day 1 pm — Marsh and forest-edge birding near the park boundary",
          "Day 2 — Sahamalaotra / long circuit with the same guide",
          "Both evenings — Early nights, to be at the gate when it opens"
        ],
        "fr": [
          "Jour 1 — Circuit Vohiparara dès l’ouverture (07:00), forêt d’altitude",
          "Jour 1, après-midi — Observation au marais et en lisière de forêt, près de la limite du parc",
          "Jour 2 — Sahamalaotra / long circuit avec le même guide",
          "Les deux soirs — Couchez-vous tôt pour être à l’entrée à l’ouverture"
        ],
        "de": [
          "Tag 1 — Vohiparara-Rundweg ab Öffnung (07:00), höher gelegener Wald",
          "Tag 1 nachmittags — Vögel im Sumpf und am Waldrand nahe der Parkgrenze",
          "Tag 2 — Sahamalaotra / langer Rundweg mit demselben Guide",
          "Beide Abende — Früh schlafen gehen, um bei Öffnung am Tor zu sein"
        ],
        "mg": [
          "Andro 1 — Lalana Vohiparara manomboka amin'ny fisokafana (07:00), ala any amin'ny toerana avo",
          "Andro 1 tolakandro — Fijerena vorona eny amin'ny honahona sy ny sisin'ala akaikin'ny fefin'ny valan-javaboahary",
          "Andro 2 — Sahamalaotra / lalana lava miaraka amin'ny mpitari-dalana iray ihany",
          "Hariva roa — Matory aloha, mba ho eo am-bavahady rehefa misokatra"
        ]
      }
    },
    "half-day-no-park": {
      "badge": {
        "en": "HALF DAY · NO PARK TICKET",
        "fr": "DEMI-JOURNÉE · SANS BILLET DU PARC",
        "de": "HALBER TAG · OHNE PARKTICKET",
        "mg": "ANTSASAK'ANDRO · TSY MILA TAPAKILAN'NY VALAN-JAVABOAHARY"
      },
      "title": {
        "en": "Village, Falls & Springs",
        "fr": "Village, cascades et sources",
        "de": "Ort, Wasserfälle und Quellen",
        "mg": "Tanàna, riandrano ary loharano"
      },
      "level": { "en": "Easy", "fr": "Facile", "de": "Leicht", "mg": "Mora" },
      "bestFor": {
        "en": "Travellers passing through, or a rest day between circuits",
        "fr": "Voyageurs de passage, ou jour de repos entre deux circuits",
        "de": "Durchreisende oder ein Ruhetag zwischen Rundwegen",
        "mg": "Mpandeha mandalo fotsiny, na andro fialan-tsasatra eo anelanelan'ny lalana"
      },
      "parkTicket": { "en": "Not needed", "fr": "Pas nécessaire", "de": "Nicht nötig", "mg": "Tsy ilaina" },
      "desc": {
        "en": "Everything worth doing in Ranomafana that needs no park entry fee and no certified guide — a good option if you arrive late or leave early.",
        "fr": "Tout ce qui vaut la peine à Ranomafana sans droit d’entrée ni guide agréé — une bonne option si vous arrivez tard ou partez tôt.",
        "de": "Alles Sehenswerte in Ranomafana, das weder Parkeintritt noch zertifizierten Guide braucht – gut, wenn Sie spät ankommen oder früh abreisen.",
        "mg": "Izay rehetra mendrika atao eto Ranomafana nefa tsy mila saram-pidirana amin'ny valan-javaboahary na mpitari-dalana nahazo fahazoan-dalana — safidy tsara raha tara ianao vao tonga na hiala aloha."
      },
      "stops": {
        "en": [
          "Morning — Jirama waterfall walk, upriver from the public pool",
          "Midday — Lunch at Manja or Coin d'or",
          "Afternoon — Station Thermale pool and Studio oloNala",
          "Evening — Night walk on the forest edge (no park ticket, but you need a car)"
        ],
        "fr": [
          "Matin — Balade jusqu’à la cascade de la Jirama, en amont de la piscine publique",
          "Midi — Déjeuner au Manja ou au Coin d’or",
          "Après-midi — Piscine de la Station Thermale et Studio oloNala",
          "Soir — Balade nocturne en lisière de forêt (sans billet du parc, mais il faut une voiture)"
        ],
        "de": [
          "Vormittags — Wanderung zum Jirama-Wasserfall, flussaufwärts vom öffentlichen Bad",
          "Mittags — Mittagessen im Manja oder im Coin d’or",
          "Nachmittags — Becken der Station Thermale und Studio oloNala",
          "Abends — Nachtwanderung am Waldrand (kein Parkticket, aber Auto nötig)"
        ],
        "mg": [
          "Maraina — Dia an-tongotra mankany amin'ny riandranon'i Jirama, miakatra avy eo amin'ny dobo ho an'ny besinimaro",
          "Mitataovovonana — Sakafo antoandro ao Manja na Coin d'or",
          "Tolakandro — Dobon'ny Station Thermale sy Studio oloNala",
          "Hariva — Fitsangatsanganana amin'ny alina eo amin'ny sisin'ala (tsy mila tapakila, fa ilaina ny fiara)"
        ]
      }
    },
    "family-day": {
      "badge": {
        "en": "FAMILY FRIENDLY",
        "fr": "EN FAMILLE",
        "de": "FAMILIENFREUNDLICH",
        "mg": "HO AN'NY FIANAKAVIANA"
      },
      "title": {
        "en": "A Day With Children",
        "fr": "Une journée avec des enfants",
        "de": "Ein Tag mit Kindern",
        "mg": "Andro iray miaraka amin'ny ankizy"
      },
      "level": { "en": "Easy", "fr": "Facile", "de": "Leicht", "mg": "Mora" },
      "bestFor": {
        "en": "Families with children who won't manage a six-hour circuit",
        "fr": "Familles avec des enfants qui ne tiendront pas un circuit de six heures",
        "de": "Familien mit Kindern, die keinen sechsstündigen Rundweg schaffen",
        "mg": "Fianakaviana misy ankizy tsy hahavita lalana adiny enina"
      },
      "parkTicket": { "en": "Yes", "fr": "Oui", "de": "Ja", "mg": "Eny" },
      "desc": {
        "en": "Short walks, warm water, and animals you can actually count on seeing, sequenced so nobody is hiking through the hottest part of the day.",
        "fr": "Des balades courtes, de l’eau chaude et des animaux qu’on est presque sûr de voir, dans un ordre qui évite de marcher aux heures les plus chaudes.",
        "de": "Kurze Wege, warmes Wasser und Tiere, die man so gut wie sicher sieht – so geplant, dass niemand in der größten Mittagshitze wandert.",
        "mg": "Dia fohy, rano mafana, ary biby saika azo antoka fa ho hita, nalahatra mba tsy hisy handeha an-tongotra amin'ny fotoana mafana indrindra amin'ny andro."
      },
      "stops": {
        "en": [
          "08:00 — Short Talatakely loop (ask the guide for the two-hour version)",
          "11:00 — Ranomafana Arboretum (feed a chameleon)",
          "13:00 — Thermal pool",
          "18:30 — Night walk — the chameleons are the winner with kids"
        ],
        "fr": [
          "08:00 — Petite boucle de Talatakely (demandez au guide la version de deux heures)",
          "11:00 — Arboretum de Ranomafana (nourrir un caméléon)",
          "13:00 — Piscine thermale",
          "18:30 — Balade nocturne — les caméléons font l’unanimité chez les enfants"
        ],
        "de": [
          "08:00 — Kurze Talatakely-Runde (den Guide nach der zweistündigen Variante fragen)",
          "11:00 — Arboretum Ranomafana (ein Chamäleon füttern)",
          "13:00 — Thermalbecken",
          "18:30 — Nachtwanderung – bei Kindern gewinnen die Chamäleons"
        ],
        "mg": [
          "08:00 — Lalana fohy Talatakely (angataho amin'ny mpitari-dalana ilay adiny roa)",
          "11:00 — Arboretum Ranomafana (manome sakafo tana)",
          "13:00 — Dobo rano mafana",
          "18:30 — Fitsangatsanganana amin'ny alina — ny tana no tian'ny ankizy indrindra"
        ]
      }
    }
  },
  "events": {
    "artisan-market": {
      "title": {
        "en": "Weekly Village Artisan Market",
        "fr": "Marché artisanal hebdomadaire du village",
        "de": "Wöchentlicher Kunsthandwerksmarkt im Ort",
        "mg": "Tsenan'ny asa-tanana isan-kerinandro ao an-tanàna"
      },
      "dayBadge": { "en": "SAT", "fr": "SAM", "de": "SA", "mg": "SAB" },
      "monthBadge": { "en": "Weekly", "fr": "Hebdo", "de": "Wöchentlich", "mg": "Isan-kerinandro" },
      "whenLabel": {
        "en": "Every Saturday · Ranomafana centre",
        "fr": "Tous les samedis · centre de Ranomafana",
        "de": "Jeden Samstag · Ortszentrum Ranomafana",
        "mg": "Isaky ny Sabotsy · afovoan-tanànan'i Ranomafana"
      },
      "desc": {
        "en": "Handwoven basketry, woodcarvings, embroidery and local spices from producers around Ranomafana.",
        "fr": "Vannerie tissée à la main, sculptures sur bois, broderies et épices locales de producteurs des environs de Ranomafana.",
        "de": "Handgeflochtene Körbe, Holzschnitzereien, Stickereien und lokale Gewürze von Erzeugern rund um Ranomafana.",
        "mg": "Harona tenona tanana, sokitra hazo, peta-kofehy ary zava-manitra avy amin'ireo mpamokatra manodidina an'i Ranomafana."
      }
    },
    "cvb-conservation-series": {
      "title": {
        "en": "Centre ValBio Conservation Series",
        "fr": "Conférences conservation du Centre ValBio",
        "de": "Naturschutz-Vorträge im Centre ValBio",
        "mg": "Lahateny momba ny fiarovana ao amin'ny Centre ValBio"
      },
      "dayBadge": { "en": "WED", "fr": "MER", "de": "MI", "mg": "ALA" },
      "monthBadge": { "en": "Weekly", "fr": "Hebdo", "de": "Wöchentlich", "mg": "Isan-kerinandro" },
      "whenLabel": {
        "en": "Wednesday evenings · Centre ValBio campus",
        "fr": "Le mercredi soir · campus du Centre ValBio",
        "de": "Mittwochabends · Campus des Centre ValBio",
        "mg": "Alarobia hariva · campus Centre ValBio"
      },
      "desc": {
        "en": "Presentations on wildlife field research, reforestation and local ecology. Confirm with the campus before turning up.",
        "fr": "Présentations sur la recherche de terrain sur la faune, le reboisement et l’écologie locale. Vérifiez auprès du campus avant de venir.",
        "de": "Vorträge über Feldforschung zu Wildtieren, Wiederaufforstung und lokale Ökologie. Vorher beim Campus nachfragen.",
        "mg": "Fampisehoana momba ny fikarohana an-tsaha momba ny biby, ny fambolen-kazo ary ny tontolo iainana eto an-toerana. Hamafiso amin'ny campus alohan'ny handehananao."
      }
    },
    "alahamady-be": {
      "title": {
        "en": "Alahamady Be — Malagasy New Year",
        "fr": "Alahamady Be — Nouvel An malgache",
        "de": "Alahamady Be – Madagassisches Neujahr",
        "mg": "Alahamady Be — Taom-baovao malagasy"
      },
      "dayBadge": { "en": "MAR", "fr": "MARS", "de": "MÄR", "mg": "MAR" },
      "monthBadge": { "en": "Annual", "fr": "Annuel", "de": "Jährlich", "mg": "Isan-taona" },
      "whenLabel": {
        "en": "March · nationwide",
        "fr": "Mars · dans tout le pays",
        "de": "März · landesweit",
        "mg": "Martsa · manerana ny nosy"
      },
      "desc": {
        "en": "The traditional Malagasy new year, marked with family ceremonies, drumming and communal meals.",
        "fr": "Le Nouvel An malgache traditionnel, célébré par des cérémonies familiales, des tambours et des repas partagés.",
        "de": "Das traditionelle madagassische Neujahr, gefeiert mit Familienzeremonien, Trommeln und gemeinsamen Mahlzeiten.",
        "mg": "Ny taom-baovao malagasy nentim-paharazana, ankalazaina amin'ny lanonana ara-pianakaviana, amponga ary sakafo iraisana."
      }
    },
    "santabary": {
      "title": {
        "en": "Santabary — First Rice Harvest",
        "fr": "Santabary — Première récolte du riz",
        "de": "Santabary – Erste Reisernte",
        "mg": "Santabary — Fijinjana vary voalohany"
      },
      "dayBadge": { "en": "APR", "fr": "AVR", "de": "APR", "mg": "APR" },
      "monthBadge": { "en": "Annual", "fr": "Annuel", "de": "Jährlich", "mg": "Isan-taona" },
      "whenLabel": {
        "en": "April–May · highland villages",
        "fr": "Avril–mai · villages des hautes terres",
        "de": "April–Mai · Dörfer im Hochland",
        "mg": "Aprily–Mey · tanàna any afovoan-tany"
      },
      "desc": {
        "en": "The celebration of the first rice of the season, with church services and communal feasts across the surrounding countryside.",
        "fr": "La fête du premier riz de la saison, avec des offices religieux et des repas partagés dans les campagnes alentour.",
        "de": "Das Fest des ersten Reises der Saison, mit Gottesdiensten und gemeinsamen Festessen im ganzen Umland.",
        "mg": "Ny fankalazana ny vary voalohany amin'ny taona, misy fotoam-pivavahana sy fanasana iraisana manerana ny ambanivohitra manodidina."
      }
    },
    "fete-de-la-musique": {
      "title": {
        "en": "Fête de la Musique",
        "fr": "Fête de la Musique",
        "de": "Fête de la Musique",
        "mg": "Fetin'ny Mozika"
      },
      "dayBadge": { "en": "21", "fr": "21", "de": "21", "mg": "21" },
      "monthBadge": { "en": "JUN", "fr": "JUIN", "de": "JUN", "mg": "JON" },
      "whenLabel": {
        "en": "21 June · nationwide",
        "fr": "21 juin · dans tout le pays",
        "de": "21. Juni · landesweit",
        "mg": "21 Jona · manerana ny nosy"
      },
      "desc": {
        "en": "Live music in bars, courtyards and public spaces across Madagascar.",
        "fr": "Musique live dans les bars, les cours et les espaces publics de tout Madagascar.",
        "de": "Livemusik in Bars, Innenhöfen und auf öffentlichen Plätzen in ganz Madagaskar.",
        "mg": "Mozika mivantana ao amin'ny bar, ny tokotany ary ny toerana ho an'ny besinimaro manerana an'i Madagasikara."
      }
    },
    "independence-day": {
      "title": {
        "en": "Independence Day — Fetin'ny 26 Jiona",
        "fr": "Fête de l’Indépendance — Fetin’ny 26 Jiona",
        "de": "Unabhängigkeitstag – Fetin’ny 26 Jiona",
        "mg": "Fetin'ny Fahaleovantena — Fetin'ny 26 Jiona"
      },
      "dayBadge": { "en": "26", "fr": "26", "de": "26", "mg": "26" },
      "monthBadge": { "en": "JUN", "fr": "JUIN", "de": "JUN", "mg": "JON" },
      "whenLabel": {
        "en": "26 June · nationwide",
        "fr": "26 juin · dans tout le pays",
        "de": "26. Juni · landesweit",
        "mg": "26 Jona · manerana ny nosy"
      },
      "desc": {
        "en": "Madagascar's national day. Expect parades, lantern processions the night before, and most businesses closed.",
        "fr": "La fête nationale de Madagascar. Défilés, retraites aux lampions la veille au soir, et la plupart des commerces fermés.",
        "de": "Madagaskars Nationalfeiertag. Paraden, Laternenumzüge am Vorabend, und die meisten Geschäfte haben geschlossen.",
        "mg": "Ny fetim-pirenen'i Madagasikara. Misy filaharana, fitondrana jiro (arendrina) ny alina teo aloha, ary mihidy ny ankamaroan'ny toeram-pivarotana."
      }
    },
    "famadihana-season": {
      "title": {
        "en": "Famadihana Season",
        "fr": "Saison du famadihana",
        "de": "Famadihana-Saison",
        "mg": "Vanim-potoanan'ny famadihana"
      },
      "dayBadge": { "en": "JUN", "fr": "JUIN", "de": "JUN", "mg": "JON" },
      "monthBadge": { "en": "–SEP", "fr": "–SEPT", "de": "–SEP", "mg": "–SEP" },
      "whenLabel": {
        "en": "June–September · highland families",
        "fr": "Juin–septembre · familles des hautes terres",
        "de": "Juni–September · Familien im Hochland",
        "mg": "Jona–Septambra · fianakaviana any afovoan-tany"
      },
      "desc": {
        "en": "The highland ancestral turning-of-the-bones ceremonies. These are private family occasions — attend only by genuine invitation.",
        "fr": "Les cérémonies ancestrales de retournement des morts des hautes terres. Ce sont des événements familiaux privés — n’y assistez que sur véritable invitation.",
        "de": "Die Ahnenzeremonien des Hochlands, bei denen die Gebeine der Toten umgebettet werden. Es sind private Familienfeste – gehen Sie nur hin, wenn Sie wirklich eingeladen sind.",
        "mg": "Ny lanonana famadihana razana any afovoan-tany. Fotoana ara-pianakaviana manokana ireo — aza manatrika raha tsy tena nasaina."
      }
    },
    "world-lemur-festival": {
      "title": {
        "en": "World Lemur Festival",
        "fr": "Festival mondial des lémuriens",
        "de": "Welt-Lemuren-Festival",
        "mg": "Fetin'ny gidro eran-tany"
      },
      "dayBadge": { "en": "30", "fr": "30", "de": "30", "mg": "30" },
      "monthBadge": { "en": "OCT", "fr": "OCT", "de": "OKT", "mg": "OKT" },
      "whenLabel": {
        "en": "Friday 30 October 2026 · park and village events",
        "fr": "Vendredi 30 octobre 2026 · événements au parc et au village",
        "de": "Freitag, 30. Oktober 2026 · Veranstaltungen im Park und im Ort",
        "mg": "Zoma 30 Oktobra 2026 · hetsika ao amin'ny valan-javaboahary sy ao an-tanàna"
      },
      "desc": {
        "en": "World Lemur Day, marked around Ranomafana with school programmes, guided walks and conservation events led by local organisations.",
        "fr": "La Journée mondiale des lémuriens, célébrée autour de Ranomafana avec des programmes scolaires, des balades guidées et des événements de conservation menés par des organisations locales.",
        "de": "Der Welt-Lemurentag, rund um Ranomafana gefeiert mit Schulprogrammen, geführten Wanderungen und Naturschutzveranstaltungen örtlicher Organisationen.",
        "mg": "Ny Andron'ny gidro eran-tany, ankalazaina manodidina an'i Ranomafana amin'ny fandaharan'asa any an-tsekoly, fitsangatsanganana miaraka amin'ny mpitari-dalana ary hetsika fiarovana tarihin'ny fikambanana eto an-toerana."
      }
    }
  },
  "blog": {
    "golden-bamboo-lemur": {
      "title": {
        "en": "Spotting the Golden Bamboo Lemur",
        "fr": "Observer l’hapalémur doré",
        "de": "Den Goldenen Bambuslemur entdecken",
        "mg": "Mitady ny gidro volamena mpihinam-bolo"
      },
      "excerpt": {
        "en": "The species that saved this forest. Where it lives, when it feeds, and how to give yourself a real chance of seeing one.",
        "fr": "L’espèce qui a sauvé cette forêt. Où il vit, quand il se nourrit, et comment vous donner une vraie chance d’en voir un.",
        "de": "Die Art, die diesen Wald gerettet hat. Wo sie lebt, wann sie frisst und wie Sie eine echte Chance bekommen, sie zu sehen.",
        "mg": "Ilay karazana namonjy ity ala ity. Aiza no onenany, rahoviana no mihinana izy, ary ahoana no hanomezanao vintana tena izy hahitana azy."
      },
      "body": {
        "en": [
          "In 1986 a lemur nobody had described before was found in the forests above Ranomafana: the golden bamboo lemur. Its discovery is the reason this forest is protected. Ranomafana became Madagascar’s fourth national park in 1991, and a UNESCO World Heritage Site in 2007.",
          "The golden bamboo lemur is critically endangered, and, as its name says, it lives on bamboo. That tells you where to look.",
          "## Where it lives",
          "The Talatakely circuit, the park’s main trail, passes through bamboo forest that is home to groups of golden and greater bamboo lemurs. It takes two to four hours, on a mix of clear paths and rougher cuts through the forest, with some steep climbs and descents.",
          "## When it feeds",
          "The park opens at 07:00. Mid-morning, when the lemurs are awake and settling in to feed, is usually the best time to go in.",
          "## Giving yourself a real chance",
          "Go with a certified guide (international visitors must) and tell them this is the species you most want to see. Animal spotters work the forest and phone your guide when they find lemurs, so you can walk straight to them. A Talatakely walk costs 90,000 Ar per group for the guide, plus park entry."
        ],
        "fr": [
          "En 1986, un lémurien que personne n’avait encore décrit a été découvert dans les forêts au-dessus de Ranomafana : l’hapalémur doré. C’est grâce à cette découverte que la forêt est protégée. Ranomafana est devenu le quatrième parc national de Madagascar en 1991, et un site du patrimoine mondial de l’UNESCO en 2007.",
          "L’hapalémur doré est en danger critique d’extinction et, comme son nom anglais l’indique (« golden bamboo lemur »), il vit de bambou. Voilà qui vous dit où chercher.",
          "## Où il vit",
          "Le circuit Talatakely, le sentier principal du parc, traverse une forêt de bambous où vivent des groupes d’hapalémurs dorés et de grands hapalémurs. Il dure de deux à quatre heures, sur des sentiers dégagés et des passages plus rudes à travers la forêt, avec quelques montées et descentes raides.",
          "## Quand il se nourrit",
          "Le parc ouvre à 07:00. Le milieu de matinée, quand les lémuriens sont réveillés et commencent à se nourrir, est généralement le meilleur moment pour entrer.",
          "## Vous donner une vraie chance",
          "Partez avec un guide agréé (obligatoire pour les visiteurs étrangers) et dites-lui que c’est l’espèce que vous voulez voir avant tout. Des pisteurs parcourent la forêt et appellent votre guide quand ils trouvent des lémuriens, pour que vous puissiez aller droit vers eux. Une balade sur Talatakely coûte 90 000 Ar par groupe pour le guide, plus l’entrée du parc."
        ],
        "de": [
          "1986 wurde in den Wäldern oberhalb von Ranomafana ein Lemur gefunden, den noch niemand beschrieben hatte: der Goldene Bambuslemur. Seine Entdeckung ist der Grund, warum dieser Wald geschützt ist. Ranomafana wurde 1991 Madagaskars vierter Nationalpark und 2007 UNESCO-Welterbe.",
          "Der Goldene Bambuslemur ist vom Aussterben bedroht und lebt, wie sein Name sagt, von Bambus. Das verrät Ihnen, wo Sie suchen müssen.",
          "## Wo er lebt",
          "Der Talatakely-Rundweg, der Hauptweg des Parks, führt durch Bambuswald, in dem Gruppen von Goldenen und Großen Bambuslemuren leben. Er dauert zwei bis vier Stunden, teils auf gut ausgebauten Wegen, teils auf raueren Pfaden durch den Wald, mit einigen steilen Auf- und Abstiegen.",
          "## Wann er frisst",
          "Der Park öffnet um 07:00. Der Vormittag, wenn die Lemuren wach sind und zu fressen beginnen, ist meist die beste Zeit.",
          "## So haben Sie eine echte Chance",
          "Gehen Sie mit einem zertifizierten Guide (für internationale Besucher Pflicht) und sagen Sie ihm, dass dies die Art ist, die Sie am liebsten sehen möchten. Spotter durchstreifen den Wald und rufen Ihren Guide an, wenn sie Lemuren finden, sodass Sie direkt zu ihnen gehen können. Eine Talatakely-Wanderung kostet 90.000 Ar pro Gruppe für den Guide, plus Parkeintritt."
        ],
        "mg": [
          "Tamin'ny 1986 dia nisy gidro mbola tsy nofaritan'olona hita tany amin'ny ala ambonin'i Ranomafana: ny gidro volamena mpihinam-bolo. Ny nahitana azy no antony iarovana ity ala ity. Lasa valan-javaboahary fahefatra teto Madagasikara i Ranomafana tamin'ny 1991, ary voasoratra ho lova iraisan'izao tontolo izao ao amin'ny UNESCO tamin'ny 2007.",
          "Atahorana ho lany tamingana tanteraka ny gidro volamena mpihinam-bolo, ary araka ny anarany, volo no iainany. Izany no milaza aminao hoe aiza no hitadiavana azy.",
          "## Aiza no onenany",
          "Ny lalana Talatakely, lalana lehibe ao amin'ny valan-javaboahary, dia mamakivaky ala volo onenan'ny vondrona gidro volamena sy gidro lehibe mpihinam-bolo. Adiny roa ka hatramin'ny efatra no maharitra azy, amin'ny lalana mazava sy lalana sarotra kokoa mamakivaky ala, misy fiakarana sy fidinana mideza.",
          "## Rahoviana izy no mihinana",
          "Misokatra amin'ny 07:00 ny valan-javaboahary. Ny antoandro maraina, rehefa mifoha ny gidro ary manomboka mihinana, no matetika fotoana tsara indrindra hidirana.",
          "## Manome vintana tena izy ho anao",
          "Mandehana miaraka amin'ny mpitari-dalana nahazo fahazoan-dalana (tsy maintsy atao izany ho an'ny vahiny) ary lazao aminy fa io karazana io no tena tianao ho hita. Misy mpitady biby mandehandeha ao an'ala ary miantso ny mpitari-dalanao rehefa mahita gidro, ka afaka mandeha mivantana any aminy ianao. 90 000 Ar isaky ny vondrona ny saran'ny mpitari-dalana amin'ny lalana Talatakely, miampy ny saram-pidirana."
        ]
      }
    },
    "what-park-fees-cover": {
      "title": {
        "en": "What Your Park Fees Actually Pay For",
        "fr": "Ce que paient vraiment vos droits d’entrée",
        "de": "Wofür Ihre Parkgebühren wirklich bezahlen",
        "mg": "Inona marina no aloan'ny saram-pidiranao?"
      },
      "excerpt": {
        "en": "Entry, community tax, guide fee — three separate payments, three different destinations. A plain breakdown of where the money goes.",
        "fr": "Entrée, taxe communautaire, guide — trois paiements distincts, trois destinations différentes. Où va l’argent, simplement expliqué.",
        "de": "Eintritt, Gemeindeabgabe, Guidegebühr – drei getrennte Zahlungen, drei verschiedene Empfänger. Einfach erklärt, wohin das Geld geht.",
        "mg": "Fidirana, saran'ny fiaraha-monina, saran'ny mpitari-dalana — fandoavana telo samihafa, toerana telo samihafa no alehany. Fanazavana tsotra momba izay alehan'ny vola."
      },
      "body": {
        "en": [
          "A day in Ranomafana National Park involves three separate payments, all in Ariary cash: the entry ticket, a community fee, and your guide.",
          "## The three payments",
          "Entry is 55,000 Ar per adult per day, 25,000 Ar for children aged 5 to 12, and free under 5. Malagasy citizens pay 2,000 Ar (adults) and 500 Ar (children). The 5,000 Ar community fee is paid at its own booth. The guide fee is paid once per group and depends on the circuit: 90,000 Ar for Talatakely or Sahamalaotra, 120,000 Ar for Vatoharanana, 150,000 Ar for the Valohoaka trek, and 220,000 Ar for a specialist guide on any circuit.",
          "## Where the money goes",
          "Madagascar National Parks has managed the park since 1991. Income from entrance fees, guided tours and other park activities is often reinvested in maintaining the park, protecting its wildlife and supporting biodiversity research. MNP sends rangers on patrol, builds and maintains boundary markers, firebreaks and watchtowers, and employs local people as guides, escorts, porters, cooks and labourers.",
          "## Why it matters now",
          "Before the COVID-19 pandemic the park welcomed close to 19,000 international visitors a year. Since then it has been closer to 3,500. Every ticket helps restore what was lost."
        ],
        "fr": [
          "Une journée dans le parc national de Ranomafana implique trois paiements distincts, tous en ariary et en espèces : le billet d’entrée, une taxe communautaire et votre guide.",
          "## Les trois paiements",
          "L’entrée coûte 55 000 Ar par adulte et par jour, 25 000 Ar pour les enfants de 5 à 12 ans, et elle est gratuite avant 5 ans. Les citoyens malgaches paient 2 000 Ar (adultes) et 500 Ar (enfants). La taxe communautaire de 5 000 Ar se paie à un guichet séparé. Le guide se paie une fois par groupe et son prix dépend du circuit : 90 000 Ar pour Talatakely ou Sahamalaotra, 120 000 Ar pour Vatoharanana, 150 000 Ar pour la randonnée de Valohoaka, et 220 000 Ar pour un guide spécialisé, quel que soit le circuit.",
          "## Où va l’argent",
          "Madagascar National Parks gère le parc depuis 1991. Les recettes des droits d’entrée, des visites guidées et des autres activités du parc sont souvent réinvesties dans son entretien, la protection de sa faune et la recherche sur la biodiversité. MNP envoie des agents en patrouille, construit et entretient bornes, pare-feux et tours de guet, et emploie des habitants comme guides, accompagnateurs, porteurs, cuisiniers et ouvriers.",
          "## Pourquoi c’est important aujourd’hui",
          "Avant la pandémie de COVID-19, le parc accueillait près de 19 000 visiteurs étrangers par an. Depuis, c’est plutôt 3 500. Chaque billet aide à reconstruire ce qui a été perdu."
        ],
        "de": [
          "Ein Tag im Nationalpark Ranomafana bedeutet drei getrennte Zahlungen, alle bar in Ariary: das Eintrittsticket, eine Gemeindeabgabe und Ihr Guide.",
          "## Die drei Zahlungen",
          "Der Eintritt kostet 55.000 Ar pro Erwachsenem und Tag, 25.000 Ar für Kinder von 5 bis 12 Jahren und ist unter 5 Jahren frei. Madagassische Staatsbürger zahlen 2.000 Ar (Erwachsene) und 500 Ar (Kinder). Die Gemeindeabgabe von 5.000 Ar wird an einem eigenen Schalter bezahlt. Die Guidegebühr wird einmal pro Gruppe bezahlt und hängt vom Rundweg ab: 90.000 Ar für Talatakely oder Sahamalaotra, 120.000 Ar für Vatoharanana, 150.000 Ar für die Valohoaka-Wanderung und 220.000 Ar für einen Spezial-Guide auf jedem Rundweg.",
          "## Wohin das Geld geht",
          "Madagascar National Parks verwaltet den Park seit 1991. Einnahmen aus Eintritt, Führungen und anderen Parkangeboten werden oft in den Unterhalt des Parks, den Schutz seiner Tiere und die Biodiversitätsforschung reinvestiert. MNP schickt Ranger auf Patrouille, baut und pflegt Grenzmarkierungen, Brandschneisen und Wachtürme und beschäftigt Menschen aus der Gegend als Guides, Begleiter, Träger, Köche und Arbeiter.",
          "## Warum das gerade jetzt zählt",
          "Vor der COVID-19-Pandemie kamen jedes Jahr fast 19.000 internationale Besucher in den Park. Seitdem sind es eher 3.500. Jedes Ticket hilft, das Verlorene wieder aufzubauen."
        ],
        "mg": [
          "Ny andro iray ao amin'ny valan-javaboahary Ranomafana dia mitaky fandoavana telo samihafa, samy amin'ny vola ariary an-tanana: ny tapakila fidirana, ny saran'ny fiaraha-monina, ary ny mpitari-dalanao.",
          "## Ireo fandoavana telo",
          "55 000 Ar isan'olon-dehibe isan'andro ny fidirana, 25 000 Ar ho an'ny ankizy 5 ka hatramin'ny 12 taona, ary maimaim-poana ho an'ny latsaky ny 5 taona. Ny olom-pirenena malagasy dia mandoa 2 000 Ar (olon-dehibe) sy 500 Ar (ankizy). Aloa amin'ny varavarankely manokana ny saran'ny fiaraha-monina 5 000 Ar. Aloa indray mandeha isaky ny vondrona ny saran'ny mpitari-dalana ary miankina amin'ny lalana: 90 000 Ar ho an'ny Talatakely na Sahamalaotra, 120 000 Ar ho an'ny Vatoharanana, 150 000 Ar ho an'ny dia lavitra Valohoaka, ary 220 000 Ar ho an'ny mpitari-dalana manampahaizana manokana na inona na inona lalana.",
          "## Aiza no alehan'ny vola",
          "Ny Madagascar National Parks no mitantana ny valan-javaboahary nanomboka tamin'ny 1991. Matetika ny vola miditra avy amin'ny saram-pidirana, ny fitsangatsanganana miaraka amin'ny mpitari-dalana ary ny asa hafa ao amin'ny valan-javaboahary dia ampiasaina indray amin'ny fikarakarana ny valan-javaboahary, ny fiarovana ny biby ao aminy ary ny fikarohana momba ny zava-boahary. Mandefa mpiambina hanao fisafoana ny MNP, manorina sy mikarakara ny famantarana sisintany, ny lalana fiarovana amin'ny afo ary ny tilikambo fiambenana, ary mampiasa olona eto an-toerana ho mpitari-dalana, mpanaraka, mpitondra entana, mpahandro ary mpiasa.",
          "## Nahoana no zava-dehibe izany ankehitriny",
          "Talohan'ny areti-mifindra COVID-19 dia mpitsidika vahiny efa ho 19 000 isan-taona no noraisin'ny valan-javaboahary. Hatramin'izay dia eo amin'ny 3 500 eo ho eo. Manampy amin'ny famerenana izay very ny tapakila tsirairay."
        ]
      }
    },
    "getting-to-ranomafana": {
      "title": {
        "en": "Getting to Ranomafana: The RN25 in Plain Terms",
        "fr": "Venir à Ranomafana : la RN25 simplement expliquée",
        "de": "Anreise nach Ranomafana: die RN25 einfach erklärt",
        "mg": "Mankany Ranomafana: ny RN25 amin'ny teny tsotra"
      },
      "excerpt": {
        "en": "From Fianarantsoa, from Tana, by taxi-brousse or chartered car — real journey times and what the road is like.",
        "fr": "Depuis Fianarantsoa, depuis Tana, en taxi-brousse ou en voiture de location — les vrais temps de trajet et l’état de la route.",
        "de": "Von Fianarantsoa, von Tana, mit dem Taxi-Brousse oder dem Mietwagen – echte Fahrzeiten und wie die Straße ist.",
        "mg": "Avy any Fianarantsoa, avy any Tana, amin'ny taxi-brousse na fiara karamaina — ny faharetan'ny dia marina sy ny toetry ny lalana."
      },
      "body": {
        "en": [
          "Ranomafana sits on the RN25 in south-east Madagascar, 412 km from Antananarivo and 65 km from Fianarantsoa. The only way in is by road, so the question is how much of the journey you want to manage yourself.",
          "## By coach, via Fianarantsoa",
          "Cotisse runs day and night coaches from Antananarivo to Fianarantsoa for 40,000 Ar; the drive takes about 12 hours. The daytime coach arrives after the last buses to Ranomafana, so stay the night (Zomatel and Hotel Vannie are close to the station) and take a regional taxi-brousse in the morning: 7,000 Ar, about two and a half hours.",
          "## Straight through the night",
          "Soatrans’ 13:30 coach to Manakara (65,000 Ar) passes Ranomafana at around 03:00, and you can get off there. Staying at Setam Lodge, Forêt Australe, Au Domnatur or Karibotel? Ask to be dropped outside your hotel.",
          "## By car or by air",
          "A car and driver from Antananarivo costs roughly US$100–300 and takes about 12 hours, stopping where you like: Antsirabe and Ambositra are popular breaks. A charter flight to Fianarantsoa takes about an hour, booked through a travel agency."
        ],
        "fr": [
          "Ranomafana se trouve sur la RN25, dans le sud-est de Madagascar, à 412 km d’Antananarivo et à 65 km de Fianarantsoa. On n’y accède que par la route : la question est de savoir quelle part du trajet vous voulez organiser vous-même.",
          "## En car, via Fianarantsoa",
          "Cotisse assure des cars de jour et de nuit d’Antananarivo à Fianarantsoa pour 40 000 Ar ; le trajet dure environ 12 heures. Le car de jour arrive après les derniers bus pour Ranomafana : passez la nuit sur place (le Zomatel et l’Hôtel Vannie sont près de la gare) et prenez un taxi-brousse régional le matin : 7 000 Ar, environ deux heures et demie.",
          "## D’une traite, de nuit",
          "Le car Soatrans de 13:30 pour Manakara (65 000 Ar) passe à Ranomafana vers 03:00, et vous pouvez y descendre. Vous logez au Setam Lodge, à Forêt Australe, à Au Domnatur ou au Karibotel ? Demandez à être déposé devant votre hôtel.",
          "## En voiture ou en avion",
          "Une voiture avec chauffeur depuis Antananarivo coûte environ 100 à 300 dollars américains et met environ 12 heures, avec des arrêts où vous voulez : Antsirabe et Ambositra sont des étapes appréciées. Un vol charter jusqu’à Fianarantsoa dure environ une heure, à réserver auprès d’une agence de voyages."
        ],
        "de": [
          "Ranomafana liegt an der RN25 im Südosten Madagaskars, 412 km von Antananarivo und 65 km von Fianarantsoa. Man kommt nur über die Straße hin, die Frage ist also, wie viel der Reise Sie selbst organisieren möchten.",
          "## Mit dem Reisebus über Fianarantsoa",
          "Cotisse fährt tagsüber und nachts von Antananarivo nach Fianarantsoa für 40.000 Ar; die Fahrt dauert etwa 12 Stunden. Der Tagesbus kommt erst nach den letzten Bussen nach Ranomafana an, also übernachten Sie dort (Zomatel und Hotel Vannie liegen nahe am Busbahnhof) und nehmen morgens ein regionales Taxi-Brousse: 7.000 Ar, etwa zweieinhalb Stunden.",
          "## Durch die Nacht",
          "Der Soatrans-Bus nach Manakara um 13:30 (65.000 Ar) kommt gegen 03:00 durch Ranomafana, und Sie können dort aussteigen. Sie wohnen in der Setam Lodge, in Forêt Australe, im Au Domnatur oder im Karibotel? Lassen Sie sich direkt vor Ihrem Hotel absetzen.",
          "## Mit dem Auto oder dem Flugzeug",
          "Ein Auto mit Fahrer ab Antananarivo kostet etwa 100–300 US-Dollar und braucht rund 12 Stunden, mit Stopps, wo Sie möchten: Antsirabe und Ambositra sind beliebte Pausen. Ein Charterflug nach Fianarantsoa dauert etwa eine Stunde und wird über ein Reisebüro gebucht."
        ],
        "mg": [
          "Eo amin'ny RN25 any atsimo atsinanan'i Madagasikara i Ranomafana, 412 km miala an'Antananarivo ary 65 km miala an'i Fianarantsoa. Amin'ny lalana ihany no ahatongavana, ka ny fanontaniana dia hoe ohatrinona amin'ny dia no tianao hokarakaraina samirery.",
          "## Amin'ny fiara fitateram-bahoaka, mandalo an'i Fianarantsoa",
          "Ny Cotisse dia manana fiara mandeha antoandro sy alina avy any Antananarivo mankany Fianarantsoa amin'ny 40 000 Ar; adiny 12 eo ho eo ny dia. Tonga aorian'ny fiara farany mankany Ranomafana ilay fiara antoandro, ka matory any (akaikin'ny fiantsonana ny Zomatel sy ny Hotel Vannie) ary mandehana taxi-brousse amin'ny maraina: 7 000 Ar, adiny roa sy sasany eo ho eo.",
          "## Mivantana mandritra ny alina",
          "Ny fiaran'ny Soatrans mankany Manakara amin'ny 13:30 (65 000 Ar) dia mandalo an'i Ranomafana amin'ny 03:00 eo ho eo, ary afaka midina eo ianao. Matory ao Setam Lodge, Forêt Australe, Au Domnatur na Karibotel ve ianao? Angataho ny hampidinana anao eo anoloan'ny hotelinao.",
          "## Amin'ny fiara na amin'ny fiaramanidina",
          "Ny fiara miaraka amin'ny mpamily avy any Antananarivo dia mitentina 100–300 dolara amerikanina eo ho eo ary adiny 12 eo ho eo, mijanona amin'izay tianao: tian'ny maro ny mijanona any Antsirabe sy Ambositra. Adiny iray eo ho eo ny sidina manokana mankany Fianarantsoa, amandrihana amin'ny alalan'ny masoivoho fitsangatsanganana."
        ]
      }
    },
    "when-to-visit": {
      "title": {
        "en": "When to Visit: Ranomafana Season by Season",
        "fr": "Quand venir : Ranomafana saison par saison",
        "de": "Reisezeit: Ranomafana Jahreszeit für Jahreszeit",
        "mg": "Rahoviana no tsara ho avy: Ranomafana isaky ny vanim-potoana"
      },
      "excerpt": {
        "en": "It rains here roughly 2,300 mm a year. What each season actually means for trails, wildlife activity and crowds.",
        "fr": "Il tombe ici environ 2 300 mm de pluie par an. Ce que chaque saison change pour les sentiers, l’activité des animaux et l’affluence.",
        "de": "Hier fallen rund 2.300 mm Regen im Jahr. Was jede Jahreszeit für Wege, Tieraktivität und Andrang bedeutet.",
        "mg": "Eo amin'ny 2 300 mm eo ho eo ny orana eto isan-taona. Inona no dikan'ny vanim-potoana tsirairay ho an'ny lalana, ny fihetsiky ny biby ary ny hamaroan'ny olona."
      },
      "body": {
        "en": [
          "Ranomafana National Park is open all year. What changes with the months is the rain, the cold, and which animals are easiest to find.",
          "## November to April: warm and wet",
          "Daytime temperatures sit around 26°C and it is humid, with highs above 28°C from November to February. About 80% of the year’s rain falls in these months, and January to March is cyclone season, when some days are too wet for the trails.",
          "## May to October: cooler and drier",
          "Days are around 22°C and nights can drop to 10°C. June to August is the cold season, when reptiles and some other animals are harder to find. Drier is relative here: it still rains.",
          "## The sweet spots",
          "April, May, September and November bring mild weather and less rain, with animals active again after the cold months. In October and November many lemurs have babies.",
          "Whatever the month, bring a rain shell and sturdy shoes."
        ],
        "fr": [
          "Le parc national de Ranomafana est ouvert toute l’année. Ce qui change avec les mois, c’est la pluie, le froid et les animaux les plus faciles à voir.",
          "## De novembre à avril : chaud et humide",
          "En journée, il fait environ 26 °C et l’air est humide, avec des maximales au-dessus de 28 °C de novembre à février. Environ 80 % de la pluie de l’année tombe pendant ces mois, et de janvier à mars c’est la saison des cyclones, où certains jours sont trop pluvieux pour les sentiers.",
          "## De mai à octobre : plus frais et plus sec",
          "Il fait environ 22 °C en journée et les nuits peuvent descendre à 10 °C. De juin à août, c’est la saison froide, où les reptiles et d’autres animaux sont plus difficiles à trouver. « Plus sec » est relatif ici : il pleut quand même.",
          "## Les meilleures périodes",
          "Avril, mai, septembre et novembre offrent un temps doux et moins de pluie, avec des animaux de nouveau actifs après les mois froids. En octobre et novembre, beaucoup de lémuriens ont des petits.",
          "Quel que soit le mois, prévoyez une veste de pluie et de bonnes chaussures."
        ],
        "de": [
          "Der Nationalpark Ranomafana ist das ganze Jahr geöffnet. Was sich mit den Monaten ändert, sind der Regen, die Kälte und welche Tiere am leichtesten zu finden sind.",
          "## November bis April: warm und nass",
          "Tagsüber hat es etwa 26 °C bei hoher Luftfeuchtigkeit, von November bis Februar über 28 °C. Etwa 80 % des Jahresregens fallen in diesen Monaten, und von Januar bis März ist Zyklonsaison, wenn manche Tage für die Wege zu nass sind.",
          "## Mai bis Oktober: kühler und trockener",
          "Tagsüber etwa 22 °C, nachts bis zu 10 °C. Juni bis August ist die kalte Jahreszeit, in der Reptilien und einige andere Tiere schwerer zu finden sind. Trockener ist hier relativ: Es regnet trotzdem.",
          "## Die besten Monate",
          "April, Mai, September und November bringen mildes Wetter und weniger Regen, und nach den kalten Monaten sind die Tiere wieder aktiv. Im Oktober und November bekommen viele Lemuren Junge.",
          "Egal in welchem Monat: Nehmen Sie eine Regenjacke und festes Schuhwerk mit."
        ],
        "mg": [
          "Misokatra mandavan-taona ny valan-javaboahary Ranomafana. Ny miova arakaraka ny volana dia ny orana, ny hatsiaka, ary ny biby mora hita indrindra.",
          "## Novambra ka hatramin'ny Aprily: mafana sy mando",
          "Eo amin'ny 26°C eo ho eo ny hafanana amin'ny antoandro ary mando ny rivotra, mihoatra ny 28°C manomboka amin'ny Novambra ka hatramin'ny Febroary. Eo amin'ny 80% eo ho eo amin'ny oran'ny taona no milatsaka amin'ireo volana ireo, ary ny Janoary ka hatramin'ny Martsa no vanim-potoanan'ny rivo-doza, izay misy andro be orana loatra ho an'ny lalana.",
          "## Mey ka hatramin'ny Oktobra: mangatsiatsiaka sy maina kokoa",
          "Eo amin'ny 22°C eo ho eo ny antoandro ary mety hidina hatramin'ny 10°C ny alina. Ny Jona ka hatramin'ny Aogositra no vanim-potoana mangatsiaka, izay sarotra kokoa ny hahitana ny biby mandady sy biby hafa. Tsy dia maina loatra eto: mbola misy orana ihany.",
          "## Ireo volana tsara indrindra",
          "Ny Aprily, Mey, Septambra ary Novambra dia mitondra andro mafana antonony sy orana vitsy kokoa, ary mihetsika indray ny biby aorian'ny volana mangatsiaka. Amin'ny Oktobra sy Novambra dia maro ny gidro miteraka.",
          "Na inona na inona volana, mitondrà akanjo fiarovana amin'ny orana sy kiraro matanjaka."
        ]
      }
    },
    "hiring-a-guide": {
      "title": {
        "en": "Hiring a Guide: What MNP Certification Means",
        "fr": "Engager un guide : ce que signifie l’agrément MNP",
        "de": "Einen Guide nehmen: Was die MNP-Zertifizierung bedeutet",
        "mg": "Manakarama mpitari-dalana: inona no dikan'ny fahazoan-dalana avy amin'ny MNP"
      },
      "excerpt": {
        "en": "Guides are mandatory in the park. How the certification works, what a fair rate is, and how to ask for a specialist.",
        "fr": "Les guides sont obligatoires dans le parc. Comment fonctionne l’agrément, quel est un tarif juste, et comment demander un spécialiste.",
        "de": "Guides sind im Park Pflicht. Wie die Zertifizierung funktioniert, was ein fairer Preis ist und wie Sie nach einem Spezialisten fragen.",
        "mg": "Tsy maintsy misy mpitari-dalana ao amin'ny valan-javaboahary. Ahoana no fiasan'ny fahazoan-dalana, inona no vidiny rariny, ary ahoana no hangatahana manampahaizana manokana."
      },
      "body": {
        "en": [
          "Nobody walks Ranomafana National Park alone. A certified Madagascar National Parks guide is required for international visitors, and they are the reason you will actually see the animals.",
          "## Finding one",
          "Ask your hotel to arrange a guide, or turn up at the park and choose from the guides working that day. Guides can’t be booked online.",
          "## What it costs",
          "The guide fee is paid once per group, so it costs less each with more people: 90,000 Ar for Talatakely or Sahamalaotra, 120,000 Ar for Vatoharanana and 150,000 Ar for the Valohoaka trek. One guide takes a group of one to four; groups of six or more need at least two. Travelling solo? Ask the park office to pair you with other visitors.",
          "## Specialists",
          "Specialist guides are experts in finding and explaining the park’s birds, plants, or reptiles and amphibians, and cost 220,000 Ar on any circuit. Birders should ask for one by name.",
          "Whoever you go with, tell them about your fitness and any worries: they will adapt the route to suit you."
        ],
        "fr": [
          "Personne ne parcourt seul le parc national de Ranomafana. Un guide agréé par Madagascar National Parks est obligatoire pour les visiteurs étrangers, et c’est grâce à lui que vous verrez vraiment les animaux.",
          "## En trouver un",
          "Demandez à votre hôtel d’organiser un guide, ou présentez-vous au parc et choisissez parmi les guides présents ce jour-là. On ne peut pas réserver de guide en ligne.",
          "## Combien ça coûte",
          "Le guide se paie une fois par groupe, donc plus vous êtes nombreux, moins c’est cher par personne : 90 000 Ar pour Talatakely ou Sahamalaotra, 120 000 Ar pour Vatoharanana et 150 000 Ar pour la randonnée de Valohoaka. Un guide prend un groupe de une à quatre personnes ; à partir de six, il en faut au moins deux. Vous voyagez seul ? Demandez au bureau du parc de vous associer à d’autres visiteurs.",
          "## Les spécialistes",
          "Les guides spécialisés sont experts pour trouver et expliquer les oiseaux, les plantes ou les reptiles et amphibiens du parc, et coûtent 220 000 Ar sur n’importe quel circuit. Les ornithologues ont intérêt à en demander un nommément.",
          "Quel que soit votre guide, parlez-lui de votre forme physique et de vos éventuelles craintes : il adaptera l’itinéraire."
        ],
        "de": [
          "Niemand geht allein durch den Nationalpark Ranomafana. Für internationale Besucher ist ein zertifizierter Guide von Madagascar National Parks Pflicht, und er ist der Grund, warum Sie die Tiere tatsächlich zu sehen bekommen.",
          "## Einen finden",
          "Lassen Sie sich über Ihr Hotel einen Guide vermitteln, oder kommen Sie zum Park und wählen Sie unter den Guides, die an dem Tag arbeiten. Online lassen sich Guides nicht buchen.",
          "## Was es kostet",
          "Die Guidegebühr wird einmal pro Gruppe bezahlt, mit mehr Leuten wird es also für jeden günstiger: 90.000 Ar für Talatakely oder Sahamalaotra, 120.000 Ar für Vatoharanana und 150.000 Ar für die Valohoaka-Wanderung. Ein Guide nimmt eine Gruppe von einer bis vier Personen; ab sechs Personen braucht es mindestens zwei. Allein unterwegs? Bitten Sie das Parkbüro, Sie mit anderen Besuchern zusammenzubringen.",
          "## Spezialisten",
          "Spezial-Guides sind Experten darin, die Vögel, Pflanzen oder Reptilien und Amphibien des Parks zu finden und zu erklären, und kosten auf jedem Rundweg 220.000 Ar. Vogelbeobachter sollten gezielt nach einem fragen.",
          "Mit wem Sie auch gehen: Sagen Sie, wie fit Sie sind und was Sie beschäftigt – der Guide passt die Route an."
        ],
        "mg": [
          "Tsy misy mandeha irery ao amin'ny valan-javaboahary Ranomafana. Tsy maintsy miaraka amin'ny mpitari-dalana nahazo fahazoan-dalana avy amin'ny Madagascar National Parks ny vahiny, ary izy ireo no antony hahitanao marina ny biby.",
          "## Hitady iray",
          "Angataho amin'ny hotelinao ny handahatra mpitari-dalana, na mankanesa any amin'ny valan-javaboahary ary misafidiana amin'ireo mpitari-dalana miasa amin'io andro io. Tsy azo amandrihana amin'ny aterineto ny mpitari-dalana.",
          "## Ohatrinona",
          "Aloa indray mandeha isaky ny vondrona ny saran'ny mpitari-dalana, ka arakaraka ny hamaroan'ny olona no hihenan'ny anjaran'ny tsirairay: 90 000 Ar ho an'ny Talatakely na Sahamalaotra, 120 000 Ar ho an'ny Vatoharanana ary 150 000 Ar ho an'ny dia lavitra Valohoaka. Mpitari-dalana iray no mitondra vondrona olona iray ka hatramin'ny efatra; roa farafahakeliny ho an'ny vondrona olona enina na mihoatra. Irery ve ianao? Angataho amin'ny biraon'ny valan-javaboahary ny hampiarahana anao amin'ny mpitsidika hafa.",
          "## Manampahaizana manokana",
          "Ireo mpitari-dalana manampahaizana manokana dia mahay mitady sy manazava ny vorona, ny zava-maniry, na ny biby mandady sy ny amfibiana ao amin'ny valan-javaboahary, ary 220 000 Ar ny sarany na inona na inona lalana. Tokony hangataka iray amin'ny anarany ny mpijery vorona.",
          "Na iza na iza miaraka aminao, lazao aminy ny herinao sy izay manahiana anao: hampifanaraka ny lalana aminao izy."
        ]
      }
    },
    "night-walk-etiquette": {
      "title": {
        "en": "Night Walk Etiquette",
        "fr": "Les bonnes manières de la balade nocturne",
        "de": "Benimmregeln für die Nachtwanderung",
        "mg": "Fitondran-tena amin'ny fitsangatsanganana amin'ny alina"
      },
      "excerpt": {
        "en": "Red filters, flash discipline, and why crowding a mouse lemur costs you the sighting anyway.",
        "fr": "Filtres rouges, discipline du flash, et pourquoi encercler un microcèbe vous fait de toute façon rater l’observation.",
        "de": "Rotfilter, Disziplin beim Blitz und warum ein umringter Mausmaki Sie die Sichtung ohnehin kostet.",
        "mg": "Sivana mena, fifehezana ny tselatra, ary nahoana no tsy hahita na inona na inona ianao raha manodidina tsidy iray."
      },
      "body": {
        "en": [
          "The park closes at 17:00, but the forest doesn’t. Night walks run along the RN25 at the forest edge, where brown mouse lemurs, chameleons, tree frogs and leaf-tailed geckos come out after dark.",
          "## Getting there",
          "Arrange a night walk with your daytime guide or your hotel. You will need a private car: taxi-brousses stop running regularly after dusk, and walking the road at night is not considered safe. Walks start around 18:30 and last about an hour; expect to pay about 40,000 Ar per person.",
          "## On the walk",
          "Bring a head torch with a red filter and wear long sleeves. Let your guide find the animals and show you where to look, keep your voice low, and give each animal space: a crowded mouse lemur simply disappears, and nobody sees it.",
          "Leaf-tailed geckos are the prize. They look exactly like dead leaves, so you will walk past one unless someone points it out."
        ],
        "fr": [
          "Le parc ferme à 17:00, mais pas la forêt. Les balades nocturnes se font le long de la RN25, en lisière de forêt, où microcèbes roux, caméléons, rainettes et uroplates sortent à la nuit tombée.",
          "## Pour y aller",
          "Organisez une balade nocturne avec votre guide de la journée ou votre hôtel. Il vous faudra une voiture privée : les taxis-brousses ne circulent plus régulièrement après la tombée de la nuit, et marcher sur la route la nuit n’est pas considéré comme sûr. Les balades commencent vers 18:30 et durent environ une heure ; comptez environ 40 000 Ar par personne.",
          "## Pendant la balade",
          "Emportez une lampe frontale avec un filtre rouge et portez des manches longues. Laissez votre guide trouver les animaux et vous montrer où regarder, parlez à voix basse et laissez de l’espace à chaque animal : un microcèbe encerclé disparaît tout simplement, et personne ne le voit.",
          "Les uroplates sont le trophée. Ils ressemblent exactement à des feuilles mortes : vous passerez à côté sans les voir si personne ne vous les montre."
        ],
        "de": [
          "Der Park schließt um 17:00, der Wald aber nicht. Nachtwanderungen führen an der RN25 entlang am Waldrand, wo Braune Mausmakis, Chamäleons, Laubfrösche und Plattschwanzgeckos nach Einbruch der Dunkelheit herauskommen.",
          "## Hinkommen",
          "Organisieren Sie eine Nachtwanderung über Ihren Guide vom Tag oder Ihr Hotel. Sie brauchen ein privates Auto: Taxi-Brousses fahren nach Einbruch der Dunkelheit nicht mehr regelmäßig, und nachts an der Straße entlangzulaufen gilt als nicht sicher. Die Wanderungen beginnen gegen 18:30 und dauern etwa eine Stunde; rechnen Sie mit etwa 40.000 Ar pro Person.",
          "## Unterwegs",
          "Nehmen Sie eine Stirnlampe mit Rotfilter mit und tragen Sie lange Ärmel. Lassen Sie Ihren Guide die Tiere finden und Ihnen zeigen, wo Sie hinschauen sollen, sprechen Sie leise und lassen Sie jedem Tier Raum: Ein umringter Mausmaki verschwindet einfach, und niemand sieht ihn.",
          "Plattschwanzgeckos sind der Hauptgewinn. Sie sehen genau aus wie welke Blätter, also gehen Sie an einem vorbei, wenn ihn niemand zeigt."
        ],
        "mg": [
          "Mihidy amin'ny 17:00 ny valan-javaboahary, fa tsy ny ala. Ny fitsangatsanganana amin'ny alina dia atao eo amoron'ny RN25 eo amin'ny sisin'ala, izay ivoahan'ny tsidy mena, tana, sahona an-kazo ary androngo rambo ravina rehefa maizina.",
          "## Fandehanana",
          "Alaharo amin'ny mpitari-dalanao antoandro na amin'ny hotelinao ny fitsangatsanganana amin'ny alina. Mila fiara manokana ianao: tsy mandeha matetika intsony ny taxi-brousse rehefa maizina, ary tsy heverina ho azo antoka ny mandeha an-tongotra amin'ny lalana amin'ny alina. Manomboka amin'ny 18:30 eo ho eo ny fitsangatsanganana ary adiny iray eo ho eo no maharitra azy; eo amin'ny 40 000 Ar eo ho eo isan'olona.",
          "## Mandritra ny dia",
          "Mitondrà jiro an-doha misy sivana mena ary mitafy akanjo lava tanana. Avelao ny mpitari-dalanao hitady ny biby sy hanoro anao izay hojerena, mitenena moramora, ary omeo toerana ny biby tsirairay: manjavona fotsiny ny tsidy iray voahodidina, ka tsy misy mahita azy.",
          "Ny androngo rambo ravina no tena loka. Mitovy tanteraka amin'ny ravina maina izy ireo, ka handalo eo akaikiny ianao raha tsy misy manondro azy."
        ]
      }
    },
    "what-to-pack": {
      "title": {
        "en": "What to Pack for a Rainforest Circuit",
        "fr": "Que mettre dans son sac pour un circuit en forêt",
        "de": "Was in den Rucksack gehört für einen Regenwald-Rundweg",
        "mg": "Inona no entina amin'ny dia an'ala"
      },
      "excerpt": {
        "en": "Leeches, mud, and a 600-metre altitude swing in one morning. The short list that matters.",
        "fr": "Sangsues, boue et 600 mètres de dénivelé en une matinée. La courte liste qui compte.",
        "de": "Blutegel, Schlamm und 600 Höhenmeter an einem Vormittag. Die kurze Liste, auf die es ankommt.",
        "mg": "Dintana, fotaka, ary fiakarana 600 metatra ao anatin'ny maraina iray. Ilay lisitra fohy tena ilaina."
      },
      "body": {
        "en": [
          "Ranomafana’s trails are steep, often wet, and a long way from a shop. The short list that matters:",
          "## For the forest",
          "A rain shell, in every season. Sturdy shoes, because the trails are steep and slippery when wet. Water, and on the long Valohoaka trek, lunch and two litres.",
          "## For after dark",
          "A head torch with a red filter, and long sleeves, for the night walk.",
          "## For the hot springs",
          "Your own towel, and soap if you take a private bath: only hot and cold water are provided. Everyone in the public pool needs a swim cap, which you can buy at the entrance.",
          "## Money",
          "Ariary in cash, in small notes. The park takes cash only, and so do most lodges."
        ],
        "fr": [
          "Les sentiers de Ranomafana sont raides, souvent mouillés et loin de toute boutique. La courte liste qui compte :",
          "## Pour la forêt",
          "Une veste de pluie, en toute saison. De bonnes chaussures, car les sentiers sont raides et glissants quand ils sont mouillés. De l’eau et, pour la longue randonnée de Valohoaka, un déjeuner et deux litres.",
          "## Pour la nuit",
          "Une lampe frontale avec un filtre rouge, et des manches longues, pour la balade nocturne.",
          "## Pour les sources chaudes",
          "Votre serviette, et du savon si vous prenez un bain privé : seules l’eau chaude et l’eau froide sont fournies. Dans la piscine publique, tout le monde doit porter un bonnet de bain, en vente à l’entrée.",
          "## L’argent",
          "Des ariary en espèces, en petites coupures. Le parc n’accepte que les espèces, comme la plupart des hébergements."
        ],
        "de": [
          "Die Wege in Ranomafana sind steil, oft nass und weit weg von jedem Laden. Die kurze Liste, auf die es ankommt:",
          "## Für den Wald",
          "Eine Regenjacke, zu jeder Jahreszeit. Festes Schuhwerk, weil die Wege steil und bei Nässe rutschig sind. Wasser und auf der langen Valohoaka-Wanderung Mittagessen und zwei Liter.",
          "## Für die Nacht",
          "Eine Stirnlampe mit Rotfilter und lange Ärmel für die Nachtwanderung.",
          "## Für die heißen Quellen",
          "Ein eigenes Handtuch und Seife, falls Sie eine Badekabine nehmen: Es gibt nur warmes und kaltes Wasser. Im öffentlichen Becken braucht jeder eine Badekappe, die Sie am Eingang kaufen können.",
          "## Geld",
          "Ariary in bar, in kleinen Scheinen. Der Park nimmt nur Bargeld, die meisten Unterkünfte ebenso."
        ],
        "mg": [
          "Mideza, matetika lena ary lavitra ny fivarotana ny lalana ao Ranomafana. Ilay lisitra fohy tena ilaina:",
          "## Ho an'ny ala",
          "Akanjo fiarovana amin'ny orana, na inona na inona vanim-potoana. Kiraro matanjaka, satria mideza ny lalana ary malama rehefa lena. Rano, ary sakafo antoandro sy rano roa litatra ho an'ny dia lavitra Valohoaka.",
          "## Ho an'ny alina",
          "Jiro an-doha misy sivana mena, ary akanjo lava tanana, ho an'ny fitsangatsanganana amin'ny alina.",
          "## Ho an'ny loharano mafana",
          "Ny lambanao, ary savony raha maka fandroana manokana ianao: rano mafana sy mangatsiaka ihany no omena. Tsy maintsy manao satroka filomanosana ny rehetra ao amin'ny dobo ho an'ny besinimaro, azo vidiana eo am-baravarana.",
          "## Vola",
          "Vola ariary an-tanana, madinika. Vola an-tanana ihany no raisin'ny valan-javaboahary, ary toy izany koa ny ankamaroan'ny toerana hatoriana."
        ]
      }
    },
    "malagasy-dishes": {
      "title": {
        "en": "Eating in Ranomafana: Dishes Worth Ordering",
        "fr": "Manger à Ranomafana : les plats à commander",
        "de": "Essen in Ranomafana: Gerichte, die sich lohnen",
        "mg": "Misakafo eto Ranomafana: sakafo mendrika haniana"
      },
      "excerpt": {
        "en": "Romazava, ravitoto, river crayfish and rice at every meal — what to order and what things should cost.",
        "fr": "Romazava, ravitoto, écrevisses de rivière et riz à chaque repas — que commander et combien ça doit coûter.",
        "de": "Romazava, Ravitoto, Flusskrebse und Reis zu jeder Mahlzeit – was Sie bestellen sollten und was es kosten sollte.",
        "mg": "Romazava, ravitoto, orana an-drano ary vary isaky ny sakafo — inona no hanafarana ary ohatrinona no tokony ho vidiny."
      },
      "body": {
        "en": [
          "Rice comes with almost every meal in Ranomafana, served with a laoka: the dish that goes alongside it. Here is where to start.",
          "## Worth ordering",
          "Romazava, the classic meat-and-greens broth, on a cool evening after the rain. Voanjobory, a stew of Bambara groundnuts: the one at Hotel Manja’s restaurant is exceptional. Zebu steak, at Grenat Hotel’s restaurant among others.",
          "## What things cost",
          "At a local hotely, a plate costs around 10,000–30,000 Ar. Hotel restaurants are mostly 12,000–35,000 Ar for a main, and the set dinners at Chez Gaspard and Setam Lodge are 45,000–50,000 Ar.",
          "Some lodge kitchens cook to order, so ask ahead if you are eating where you are not staying."
        ],
        "fr": [
          "À Ranomafana, le riz accompagne presque chaque repas, servi avec un laoka : le plat qui va avec. Voici par où commencer.",
          "## À commander",
          "Le romazava, le bouillon classique de viande et de brèdes, par une soirée fraîche après la pluie. Le voanjobory, un ragoût de pois bambara : celui du restaurant de l’Hôtel Manja est exceptionnel. Le steak de zébu, entre autres au restaurant du Grenat Hotel.",
          "## Combien ça coûte",
          "Dans un hotely local, une assiette coûte environ 10 000–30 000 Ar. Dans les restaurants d’hôtel, un plat coûte le plus souvent 12 000–35 000 Ar, et les dîners en menu chez Gaspard et au Setam Lodge 45 000–50 000 Ar.",
          "Certaines cuisines de lodge préparent à la commande : prévenez à l’avance si vous mangez là où vous ne logez pas."
        ],
        "de": [
          "Reis gehört in Ranomafana zu fast jeder Mahlzeit, serviert mit einem Laoka: dem Gericht, das dazu gegessen wird. Hier ein Anfang.",
          "## Lohnt sich",
          "Romazava, die klassische Brühe aus Fleisch und Blattgemüse, an einem kühlen Abend nach dem Regen. Voanjobory, ein Eintopf aus Bambara-Erdnüssen: Der im Restaurant des Hotel Manja ist hervorragend. Zebusteak, unter anderem im Restaurant des Grenat Hotel.",
          "## Was es kostet",
          "In einem einfachen Hotely kostet ein Teller etwa 10.000–30.000 Ar. In Hotelrestaurants kostet ein Hauptgericht meist 12.000–35.000 Ar, die Abendmenüs bei Chez Gaspard und in der Setam Lodge 45.000–50.000 Ar.",
          "Manche Lodge-Küchen kochen auf Bestellung – sagen Sie also vorher Bescheid, wenn Sie dort essen, wo Sie nicht wohnen."
        ],
        "mg": [
          "Saika isaky ny sakafo no misy vary eto Ranomafana, miaraka amin'ny laoka. Ireto no tokony hanombohana.",
          "## Mendrika hanafarana",
          "Romazava, ilay ro hena sy anana mahazatra, amin'ny hariva mangatsiatsiaka aorian'ny orana. Voanjobory: tsara mihoatra ilay ao amin'ny trano fisakafoan'ny Hotel Manja. Hen'omby natono, ao amin'ny trano fisakafoan'ny Grenat Hotel sy any an-kafa.",
          "## Ohatrinona",
          "Ao amin'ny hotely eto an-toerana dia eo amin'ny 10 000–30 000 Ar eo ho eo ny lovia iray. Ao amin'ny trano fisakafoan'ny hotely dia matetika 12 000–35 000 Ar ny sakafo iray, ary 45 000–50 000 Ar ny sakafo hariva voalamina ao Chez Gaspard sy Setam Lodge.",
          "Misy lakozian'ny lodge mahandro araka ny baiko, ka manontania mialoha raha hisakafo any amin'ny toerana tsy hatoriana ianao."
        ]
      }
    },
    "thermal-springs-explained": {
      "title": {
        "en": "The Thermal Springs, Explained",
        "fr": "Les sources thermales, expliquées",
        "de": "Die Thermalquellen, erklärt",
        "mg": "Ny loharano mafana, hazavaina"
      },
      "excerpt": {
        "en": "Ranomafana means 'hot water'. The geology behind the springs, and how the colonial-era baths became a village.",
        "fr": "Ranomafana signifie « eau chaude ». La géologie derrière les sources, et comment les bains de l’époque coloniale sont devenus un village.",
        "de": "Ranomafana bedeutet „heißes Wasser“. Die Geologie hinter den Quellen und wie aus den Bädern der Kolonialzeit ein Ort wurde.",
        "mg": "\"Rano mafana\" no dikan'i Ranomafana. Ny jeolojia ao ambadiky ny loharano, ary ny nahatonga ny fandroana tamin'ny vanim-potoanan'ny fanjanahantany ho tanàna."
      },
      "body": {
        "en": [
          "Ranomafana means “hot water” in Malagasy, and the village is named for its springs.",
          "## No sulphur smell",
          "The town sits above ancient geothermal vents. Their heat warms fresh water near the surface, rather than pumping hot water up from deep below, so the water you swim in has none of the sulphur smell of most hot springs.",
          "## Three ways in",
          "The public Station Thermale, across the Namorona from the football field, has an open-air pool and private bath rooms: 10,000 Ar each (residents 2,000 Ar). The pool is closed on Tuesdays. Massages are booked at the same ticket booth. For something closer to a familiar hot tub, Hotel Thermal, a separate business, rents three private hot-spring pools for 20,000 Ar per person, late evening included."
        ],
        "fr": [
          "Ranomafana signifie « eau chaude » en malgache, et le village tire son nom de ses sources.",
          "## Pas d’odeur de soufre",
          "La ville est bâtie au-dessus d’anciennes cheminées géothermiques. Leur chaleur réchauffe de l’eau douce près de la surface au lieu de faire remonter de l’eau chaude des profondeurs : l’eau dans laquelle vous vous baignez n’a donc aucune odeur de soufre, contrairement à la plupart des sources chaudes.",
          "## Trois façons d’en profiter",
          "La Station Thermale publique, de l’autre côté de la Namorona par rapport au terrain de football, a une piscine en plein air et des cabines de bain privées : 10 000 Ar chacune (résidents 2 000 Ar). La piscine est fermée le mardi. Les massages se réservent au même guichet. Pour quelque chose de plus proche d’un jacuzzi classique, l’Hôtel Thermal, une entreprise distincte, loue trois bassins thermaux privés pour 20 000 Ar par personne, y compris tard le soir."
        ],
        "de": [
          "Ranomafana bedeutet auf Madagassisch „heißes Wasser“, und der Ort ist nach seinen Quellen benannt.",
          "## Kein Schwefelgeruch",
          "Der Ort liegt über uralten geothermischen Spalten. Ihre Wärme erhitzt Süßwasser nahe der Oberfläche, statt heißes Wasser aus großer Tiefe nach oben zu drücken, daher fehlt dem Wasser, in dem Sie baden, der Schwefelgeruch der meisten heißen Quellen.",
          "## Drei Möglichkeiten",
          "Die öffentliche Station Thermale, gegenüber dem Fußballplatz auf der anderen Seite der Namorona, hat ein Freibecken und private Badekabinen: je 10.000 Ar (Einheimische 2.000 Ar). Das Becken ist dienstags geschlossen. Massagen bucht man am selben Schalter. Wer es eher wie einen vertrauten Whirlpool mag: Das Hotel Thermal, ein eigener Betrieb, vermietet drei private Thermalbecken für 20.000 Ar pro Person, auch spätabends."
        ],
        "mg": [
          "Ny hoe Ranomafana dia midika hoe \"rano mafana\", ary ny loharanony no nanomezana anarana ny tanàna.",
          "## Tsy misy fofona solifara",
          "Eo ambonin'ny lavaka geotermaly taloha ny tanàna. Ny hafanan'ireo no manafana rano madio eo akaikin'ny ambony, fa tsy manintona rano mafana avy any amin'ny lalina, ka tsy misy fofona solifara tahaka ny ankamaroan'ny loharano mafana ny rano ilomanosanao.",
          "## Fomba telo",
          "Ny Station Thermale ho an'ny besinimaro, ampitan'ny Namorona manoloana ny kianja baolina kitra, dia manana dobo any ivelany sy efitra fandroana manokana: 10 000 Ar avy (mponina 2 000 Ar). Mihidy isaky ny Talata ny dobo. Eo amin'io varavarankely io ihany no amandrihana fanorana. Raha tianao kokoa ny dobo rano mafana mahazatra, ny Hotel Thermal, orinasa hafa, dia manofa dobo rano mafana manokana telo amin'ny 20 000 Ar isan'olona, eny fa na dia alina be aza."
        ]
      }
    },
    "how-voi-works": {
      "title": {
        "en": "Community Conservation: How a VOI Works",
        "fr": "Conservation communautaire : comment fonctionne un VOI",
        "de": "Naturschutz durch Gemeinden: wie ein VOI funktioniert",
        "mg": "Fiarovana ataon'ny fiaraha-monina: ahoana no fiasan'ny VOI"
      },
      "excerpt": {
        "en": "Madagascar's GELOSE framework hands forest management to local associations. What that looks like on the ground near Ranomafana.",
        "fr": "La loi malgache GELOSE confie la gestion des forêts à des associations locales. Ce que cela donne sur le terrain autour de Ranomafana.",
        "de": "Madagaskars GELOSE-Gesetz überträgt die Waldverwaltung an örtliche Vereine. Wie das rund um Ranomafana vor Ort aussieht.",
        "mg": "Ny lalàna GELOSE eto Madagasikara dia manome ny fitantanana ny ala ho an'ny fikambanana eto an-toerana. Ny endriny eny an-tsaha manodidina an'i Ranomafana."
      },
      "body": {
        "en": [
          "A VOI is a local community association that has taken over the management of its forest from the state, under Madagascar’s community forest-management law, GELOSE. Around Ranomafana, two VOIs welcome visitors.",
          "## VOI Mitsinjo, Ambatolahy",
          "Run by VOI Ambatolahy, this community-managed forest reserve offers day and night walks with community guides, and the fees go straight to the village rather than to the national park. No park ticket is needed.",
          "## VOI Ambohimagneva",
          "A 75-hectare reserve bordering the national park, about 3 km from town on foot. Trails and a river waterfall are being opened to visitors, with guides certified by Madagascar National Parks and research links to Centre ValBio. Access is still being set up, so ask before you go.",
          "Visiting a community reserve puts money directly into the hands of the people who look after the forest."
        ],
        "fr": [
          "Un VOI est une association communautaire locale qui a repris à l’État la gestion de sa forêt, dans le cadre de la loi malgache sur la gestion communautaire des forêts, la GELOSE. Autour de Ranomafana, deux VOI accueillent des visiteurs.",
          "## VOI Mitsinjo, Ambatolahy",
          "Gérée par le VOI Ambatolahy, cette réserve forestière communautaire propose des balades de jour et de nuit avec des guides communautaires, et les droits vont directement au village plutôt qu’au parc national. Pas besoin de billet du parc.",
          "## VOI Ambohimagneva",
          "Une réserve de 75 hectares en bordure du parc national, à environ 3 km du village à pied. Des sentiers et une cascade sur la rivière sont en cours d’ouverture aux visiteurs, avec des guides agréés par Madagascar National Parks et des liens de recherche avec le Centre ValBio. L’accueil est encore en cours de mise en place : renseignez-vous avant de partir.",
          "Visiter une réserve communautaire, c’est mettre de l’argent directement entre les mains de ceux qui prennent soin de la forêt."
        ],
        "de": [
          "Ein VOI ist ein örtlicher Gemeindeverein, der die Verwaltung seines Waldes vom Staat übernommen hat, nach Madagaskars Gesetz über die gemeinschaftliche Waldverwaltung, GELOSE. Rund um Ranomafana empfangen zwei VOIs Besucher.",
          "## VOI Mitsinjo, Ambatolahy",
          "Dieses gemeindeverwaltete Waldreservat wird von VOI Ambatolahy geführt und bietet Tag- und Nachtwanderungen mit Gemeinde-Guides an; die Gebühren gehen direkt an das Dorf statt an den Nationalpark. Ein Parkticket ist nicht nötig.",
          "## VOI Ambohimagneva",
          "Ein 75 Hektar großes Reservat am Rand des Nationalparks, etwa 3 km zu Fuß vom Ort. Wege und ein Wasserfall am Fluss werden für Besucher geöffnet, mit von Madagascar National Parks zertifizierten Guides und Forschungsverbindungen zum Centre ValBio. Der Zugang wird noch eingerichtet, also fragen Sie vorher.",
          "Wer ein Gemeindereservat besucht, gibt das Geld direkt den Menschen, die sich um den Wald kümmern."
        ],
        "mg": [
          "Ny VOI dia fikambanan'ny fiaraha-monina eto an-toerana izay nandray tamin'ny fanjakana ny fitantanana ny alany, araka ny lalàna malagasy momba ny fitantanana ny ala ataon'ny fiaraha-monina, ny GELOSE. Manodidina an'i Ranomafana dia VOI roa no mandray mpitsidika.",
          "## VOI Mitsinjo, Ambatolahy",
          "Tantanan'ny VOI Ambatolahy, ity ala tahiry tantanan'ny fiaraha-monina ity dia manolotra fitsangatsanganana atoandro sy alina miaraka amin'ny mpitari-dalana avy amin'ny fiaraha-monina, ary mankany amin'ny tanàna mivantana ny sarany fa tsy any amin'ny valan-javaboahary. Tsy ilaina ny tapakilan'ny valan-javaboahary.",
          "## VOI Ambohimagneva",
          "Tahiry 75 hektara mifanila amin'ny valan-javaboahary, 3 km eo ho eo an-tongotra miala ny tanàna. Efa sokafana ho an'ny mpitsidika ny lalana sy riandrano iray eo amin'ny renirano, miaraka amin'ny mpitari-dalana nahazo fahazoan-dalana avy amin'ny Madagascar National Parks ary fifandraisana amin'ny Centre ValBio amin'ny fikarohana. Mbola eo am-panomanana ny fidirana, ka manontania alohan'ny handehananao.",
          "Ny fitsidihana tahirin'ny fiaraha-monina dia mametraka vola mivantana eo an-tanan'ireo olona mikarakara ny ala."
        ]
      }
    }
  }
};

if (typeof window !== "undefined") window.LISTING_TRANSLATIONS = LISTING_TRANSLATIONS;
