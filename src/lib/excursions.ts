import { HERO_IMAGES } from "./site";

export type FitnessLevel = "Easy" | "Moderate" | "Difficult";
export type ReturnConfidence = "High" | "Moderate" | "Tight";

export type CruiseSnapshotFields = {
  timeInPort?: string;
  bestFor?: string;
  activityLevel?: string;
  familyFriendly?: string;
  returnToShip?: string;
  popularTypes?: string;
};

export type Excursion = {
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  summary: string;
  duration: string;
  fitness: FitnessLevel;
  distanceFromTerminal: string;
  transferRequired: boolean;
  transferNote: string;
  bestFor: string[];
  returnConfidence: ReturnConfidence;
  returnNote: string;
  weatherConsiderations: string;
  cruiseSnapshot: string;
  snapshotFields: CruiseSnapshotFields;
  description: string[];
  highlights: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  heroImage?: string;
  heroImageAlt?: string;
};

export const excursions: Excursion[] = [
  {
    slug: "knossos-palace-shore-excursion",
    path: "/knossos-palace-shore-excursion",
    title: "Knossos Palace Shore Excursion — Heraklion, Crete",
    shortTitle: "Knossos Palace",
    summary:
      "Europe's oldest city and the legendary labyrinth of King Minos — a guided visit to the restored Minoan Palace of Knossos, just minutes from the Heraklion cruise port.",
    duration: "3.5–4.5 hours (typical guided tour)",
    fitness: "Moderate",
    distanceFromTerminal:
      "Knossos sits about 5 km south of the Heraklion cruise terminal — roughly 15–20 minutes by taxi, coach, or the number 2 city bus.",
    transferRequired: true,
    transferNote:
      "Most tours include air-conditioned coach transfer with a licensed archaeological guide. The public bus and taxis are also straightforward for independent visitors.",
    bestFor: [
      "First-time visitors to Heraklion and Crete",
      "History and mythology enthusiasts",
      "Anyone with at least five hours ashore",
    ],
    returnConfidence: "High",
    returnNote:
      "Knossos is the single most reliable Heraklion excursion for timing — a short transfer, a predictable two-hour site visit, and operators who schedule around cruise all-aboard deadlines.",
    weatherConsiderations:
      "The site is open and largely unshaded. Summer midday heat can be intense — bring water, a hat, and sun protection, and prefer a morning slot. There is very little cover if it rains.",
    cruiseSnapshot:
      "Knossos is why most ships call at Heraklion. A licensed guide turns a maze of reconstructed walls and copies of famous frescoes into the story of Europe's first advanced civilisation — and you are back aboard with time to spare.",
    snapshotFields: {
      timeInPort: "5+ hours works comfortably",
      bestFor: "Ancient history, mythology, first-timers",
      activityLevel: "Moderate — uneven ground, gentle slopes, steps",
      familyFriendly: "Very good — the Minotaur myth captivates children",
      returnToShip: "High confidence on standard tours",
      popularTypes: "Guided Knossos tours, Knossos + Museum combos",
    },
    description: [
      "Knossos was the ceremonial and political heart of Minoan Crete, occupied from around 7000 BC and flourishing as a palace complex from roughly 1900 BC. This is the labyrinth of legend — home in myth to King Minos and the Minotaur — and, more importantly, the centre of Europe's earliest advanced civilisation. For cruise passengers it is the definitive Heraklion excursion.",
      "The site you walk today was partially reconstructed by British archaeologist Sir Arthur Evans in the early 1900s. His colourful concrete restorations of the throne room, grand staircase, and fresco-lined halls are debated by scholars but make the palace far easier to picture than a field of foundations. A good guide is essential to separate Minoan fact from Evans's imagination.",
      "Plan for around two hours on site plus transfer. Knossos pairs naturally with the Heraklion Archaeological Museum, where the original frescoes and the Phaistos Disc are displayed — many tours combine both. Independent visitors can taxi or take the number 2 bus, but a licensed guide adds enormous context to what can otherwise feel like a confusing ruin.",
    ],
    highlights: [
      "The reconstructed Throne Room with its gypsum throne",
      "Copies of the Prince of the Lilies, Dolphin, and Bull-Leaping frescoes",
      "The grand staircase and monumental storage magazines",
      "The mythology of the labyrinth, Minos, and the Minotaur",
    ],
    faqs: [
      {
        question: "How far is Knossos from the Heraklion cruise port?",
        answer:
          "About 5 km — roughly 15–20 minutes by taxi or coach. It is a short, reliable transfer, which makes Knossos comfortable even on a shorter port call.",
      },
      {
        question: "Do I need a guide for Knossos?",
        answer:
          "The site has limited signage and heavy reconstruction, so a licensed guide dramatically improves the visit. Independent visitors should download a good audio guide or study a map beforehand.",
      },
      {
        question: "Can I combine Knossos with the Archaeological Museum?",
        answer:
          "Yes — this is the classic Heraklion pairing and works well on a six-hour-plus call. The museum holds the original frescoes and finds from Knossos, so the two complement each other perfectly.",
      },
    ],
    relatedSlugs: [
      "heraklion-archaeological-museum-tour",
      "heraklion-city-highlights-tour",
      "cretan-wine-tour",
    ],
    heroImage: HERO_IMAGES.knossos.src,
    heroImageAlt: HERO_IMAGES.knossos.alt,
  },
  {
    slug: "heraklion-archaeological-museum-tour",
    path: "/heraklion-archaeological-museum-tour",
    title: "Heraklion Archaeological Museum Shore Excursion",
    shortTitle: "Archaeological Museum",
    summary:
      "One of the world's greatest collections of Minoan art — the original Knossos frescoes, the Phaistos Disc, and 5,500 years of Cretan history, a short walk from the port.",
    duration: "2–3 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "The museum is about 1.5 km from the cruise terminal in central Heraklion — a 20-minute walk or a short taxi ride.",
    transferRequired: false,
    transferNote:
      "Fit walkers can reach the museum on foot via the waterfront and old town. Guided tours include transfer and skip-the-queue entry with an archaeologist.",
    bestFor: [
      "Art lovers and serious history enthusiasts",
      "Rainy or very hot days when indoor time is welcome",
      "Passengers pairing it with Knossos for full context",
    ],
    returnConfidence: "High",
    returnNote:
      "Central location and flexible timing make the museum one of the safest excursions for return-to-ship confidence — you are never far from the harbour.",
    weatherConsiderations:
      "Fully indoor and air-conditioned — the ideal choice on a hot midday or a rare wet port day in Heraklion.",
    cruiseSnapshot:
      "If Knossos is the place, the Archaeological Museum is the treasure house. The original bull-leaping fresco, the snake goddesses, and the still-undeciphered Phaistos Disc are here — the finds that Knossos only shows in copy.",
    snapshotFields: {
      timeInPort: "4+ hours is plenty",
      bestFor: "Minoan art, indoor comfort, deeper history",
      activityLevel: "Easy — indoor galleries over two floors",
      familyFriendly: "Good — best with a guide to hold interest",
      returnToShip: "Very high — central and walkable",
      popularTypes: "Museum tours, Knossos + Museum combos",
    },
    description: [
      "The Heraklion Archaeological Museum is one of the most important museums in Europe and holds the finest collection of Minoan artefacts anywhere in the world. Its twenty-plus galleries span 5,500 years of Cretan history, but the Bronze Age Minoan rooms are the reason most cruise passengers come.",
      "This is where the originals live: the vivid bull-leaping and dolphin frescoes from Knossos, the faience snake goddesses, exquisite gold jewellery, carved stone rhyta, and the enigmatic Phaistos Disc — a clay disc stamped with symbols that remain undeciphered to this day. Seeing these after a visit to Knossos completes the picture in a way neither site manages alone.",
      "The museum is well laid out and fully air-conditioned, making it a smart choice for the hottest part of the day. Allow around 90 minutes to two hours; a guide or good audio commentary is worthwhile because the collection is vast and the labelling concise.",
    ],
    highlights: [
      "The original Knossos frescoes, including the Bull-Leaping scene",
      "The Phaistos Disc — one of archaeology's great mysteries",
      "The faience Snake Goddess figurines",
      "Minoan gold, seals, and the famous Bull's Head rhyton",
    ],
    faqs: [
      {
        question: "Is the Heraklion Archaeological Museum walkable from the port?",
        answer:
          "Yes — it is about 1.5 km from the cruise terminal, a pleasant 20-minute walk through the waterfront and old town, or a short taxi ride.",
      },
      {
        question: "Should I visit the museum before or after Knossos?",
        answer:
          "Either works, but many guides recommend Knossos first to see the setting, then the museum to see the original treasures. Combined tours usually sequence this for you.",
      },
      {
        question: "How long do I need at the museum?",
        answer:
          "Around 90 minutes to two hours covers the Minoan highlights comfortably. Enthusiasts could easily spend longer.",
      },
    ],
    relatedSlugs: [
      "knossos-palace-shore-excursion",
      "heraklion-city-highlights-tour",
      "cretan-villages-tour",
    ],
    heroImage: HERO_IMAGES.museum.src,
    heroImageAlt: HERO_IMAGES.museum.alt,
  },
  {
    slug: "heraklion-city-highlights-tour",
    path: "/heraklion-city-highlights-tour",
    title: "Heraklion City Highlights Shore Excursion",
    shortTitle: "City Highlights",
    summary:
      "The Venetian old town on foot — the Koules fortress, the Morosini Lion Fountain, the market street, and the harbour, minutes from where your ship docks.",
    duration: "2.5–3.5 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "The old town begins right beside the port — the Koules fortress and harbour are a 10–15 minute walk, and the main square around 20 minutes.",
    transferRequired: false,
    transferNote:
      "Heraklion's centre is compact and flat, so most city tours are walking tours starting at or near the terminal. No coach is needed.",
    bestFor: [
      "Shorter port calls and independent walkers",
      "First-time visitors wanting orientation",
      "Passengers who prefer to stay close to the ship",
    ],
    returnConfidence: "High",
    returnNote:
      "Because everything stays within the compact walled town beside the harbour, a city walk is the easiest Heraklion excursion to control against your all-aboard time.",
    weatherConsiderations:
      "Central streets offer cafés and covered arcades for shade or shelter. Summer afternoons are hot — carry water and pause in the shaded squares.",
    cruiseSnapshot:
      "Heraklion rewards walkers. Within the Venetian walls you get the Koules sea fortress, the Lion Fountain, a lively market, and Cretan café culture — all a short stroll from the gangway, with no transfer risk.",
    snapshotFields: {
      timeInPort: "3+ hours is enough for the core",
      bestFor: "Venetian architecture, markets, café culture",
      activityLevel: "Easy — flat, walkable, some cobbles",
      familyFriendly: "Excellent",
      returnToShip: "Very high — you stay near the port",
      popularTypes: "Guided walking tours, self-guided strolls",
    },
    description: [
      "Modern Heraklion grew inside a ring of massive Venetian walls, and its historic core is compact, flat, and easy to explore on foot straight from the port. A city highlights tour threads together the landmarks that tell Crete's Venetian, Ottoman, and modern story between the great archaeological sites.",
      "The photogenic Koules fortress guards the old harbour, where wooden fishing boats still tie up beneath the ramparts. From there, 25 August Street climbs to the Morosini Lion Fountain and the Basilica of St Mark, then on to the bustling 1866 market street with its herbs, honey, raki, and Cretan cheeses. The Cathedral of Agios Minas and the tomb of writer Nikos Kazantzakis on the walls round out the picture.",
      "A walking tour is the lowest-risk way to spend a port day when you want to stay near the ship, and it pairs easily with the Archaeological Museum or an afternoon at a nearby beach.",
    ],
    highlights: [
      "The Venetian Koules fortress and old harbour",
      "The Morosini Lion Fountain and Lions Square",
      "The 1866 covered market street",
      "Cretan café culture, bougatsa, and local produce",
    ],
    faqs: [
      {
        question: "Can I explore Heraklion old town without a tour?",
        answer:
          "Easily — the centre is flat, compact, and safe, and the main sights are within a 20-minute walk of the port. Pick up a map, set a firm return time, and see our walking-from-port guide.",
      },
      {
        question: "Is the Koules fortress open to visitors?",
        answer:
          "Yes, the restored fortress at the old harbour is usually open to walk through, with rooftop views over the port. Opening hours vary by season.",
      },
      {
        question: "Does the city tour include Knossos or the museum?",
        answer:
          "A pure city walk stays within the old town. Some combined tours add the Archaeological Museum; Knossos is normally a separate coach excursion. Confirm the itinerary when you enquire.",
      },
    ],
    relatedSlugs: [
      "heraklion-archaeological-museum-tour",
      "knossos-palace-shore-excursion",
      "heraklion-beaches-tour",
    ],
    heroImage: HERO_IMAGES.oldTown.src,
    heroImageAlt: HERO_IMAGES.oldTown.alt,
  },
  {
    slug: "spinalonga-elounda-tour",
    path: "/spinalonga-elounda-tour",
    title: "Spinalonga & Elounda Shore Excursion from Heraklion",
    shortTitle: "Spinalonga & Elounda",
    summary:
      "Eastern Crete's most atmospheric day — the Venetian island fortress and former leper colony of Spinalonga, reached by boat across the beautiful bay of Elounda.",
    duration: "7–8 hours (full day)",
    fitness: "Moderate",
    distanceFromTerminal:
      "Elounda is about 70 km east of Heraklion — roughly 1 hour 15 minutes by coach, plus a short boat crossing to the island.",
    transferRequired: true,
    transferNote:
      "This is a full-day coach excursion combined with a boat transfer to the island. It is only realistic with a well-organised tour on a long port call.",
    bestFor: [
      "Passengers with a full day ashore (8+ hours)",
      "History lovers and readers of 'The Island'",
      "Travellers who want dramatic scenery and a boat trip",
    ],
    returnConfidence: "Moderate",
    returnNote:
      "The distance and the boat crossing add variables. Choose an operator who tracks your all-aboard time and builds a comfortable buffer — this is not a tour to attempt independently on a tight call.",
    weatherConsiderations:
      "The boat crossing depends on sea conditions and can be affected by strong summer 'meltemi' winds. The island is exposed and hot; wear sturdy shoes for uneven paths.",
    cruiseSnapshot:
      "Spinalonga is one of the Mediterranean's most moving sites — a Venetian fortress that became Greece's last leper colony until 1957. Combined with the yachts and blue water of Elounda, it makes an unforgettable full day, but it needs the hours to do it justice.",
    snapshotFields: {
      timeInPort: "8+ hours strongly recommended",
      bestFor: "History, scenery, boat trips",
      activityLevel: "Moderate — uneven island paths and steps",
      familyFriendly: "Good for older children",
      returnToShip: "Moderate — long transfer plus boat",
      popularTypes: "Full-day coach + boat tours",
    },
    description: [
      "Spinalonga is a small, fortified island at the mouth of Elounda bay in eastern Crete. The Venetians built its formidable sea fortress in 1579; from 1903 to 1957 it served as a leper colony, a story brought to a wide audience by Victoria Hislop's novel 'The Island'. Walking its silent streets — the church, the ruined houses, the tunnel entrance — is a genuinely moving experience.",
      "The journey is part of the appeal. The coach follows the north coast east through Agios Nikolaos to Elounda, one of Crete's most glamorous resorts, where a short boat trip carries you across turquoise water to the island. Many tours allow time for photos, a swim, or a taverna lunch by the bay.",
      "Because Elounda is around 70 km from Heraklion, this excursion suits long port calls only. The reward is Crete at its most cinematic — but always confirm the operator's return-to-ship commitment before booking.",
    ],
    highlights: [
      "The Venetian fortress and former leper colony of Spinalonga",
      "A boat crossing over the blue Elounda bay",
      "The resort town of Elounda and views of Agios Nikolaos",
      "Dramatic eastern Crete coastal scenery",
    ],
    faqs: [
      {
        question: "How long does the Spinalonga tour take from Heraklion?",
        answer:
          "Plan for a full day — around 7 to 8 hours including roughly 1 hour 15 minutes each way by coach plus the boat crossing and time on the island.",
      },
      {
        question: "Is Spinalonga suitable for a short port call?",
        answer:
          "No. With around 70 km of driving each way plus a boat crossing, this tour needs at least eight hours ashore and is best avoided on tight calls.",
      },
      {
        question: "Can the boat to Spinalonga be cancelled?",
        answer:
          "Occasionally, in strong winds or rough seas. Reputable operators monitor conditions and will advise alternatives — another reason to book an organised tour rather than travel independently.",
      },
    ],
    relatedSlugs: [
      "lasithi-plateau-tour",
      "cretan-villages-tour",
      "knossos-palace-shore-excursion",
    ],
    heroImage: HERO_IMAGES.spinalonga.src,
    heroImageAlt: HERO_IMAGES.spinalonga.alt,
  },
  {
    slug: "lasithi-plateau-tour",
    path: "/lasithi-plateau-tour",
    title: "Lasithi Plateau & Zeus Cave Shore Excursion from Heraklion",
    shortTitle: "Lasithi Plateau",
    summary:
      "A fertile mountain plateau of windmills and orchards, plus the Dikteon Cave where myth says Zeus was born — a scenic full day into the heart of Crete.",
    duration: "6.5–8 hours (full day)",
    fitness: "Moderate",
    distanceFromTerminal:
      "The Lasithi Plateau lies about 55–60 km southeast of Heraklion — roughly 1 hour 15 minutes by coach on winding mountain roads.",
    transferRequired: true,
    transferNote:
      "A full-day coach tour is the practical way to visit. The mountain road is scenic but winding — good for a guided coach, tiring to self-drive on a port day.",
    bestFor: [
      "Passengers with a full day ashore",
      "Mythology fans and lovers of rural scenery",
      "Those wanting mountains and traditional villages over beaches",
    ],
    returnConfidence: "Moderate",
    returnNote:
      "Mountain driving and a cave visit add time. Book with an operator who guarantees a return buffer; the winding road makes independent timing risky on a port day.",
    weatherConsiderations:
      "The plateau is cooler and greener than the coast — pleasant in summer. The Dikteon Cave is cool, damp, and requires a steep walk with steps and uneven, sometimes slippery ground.",
    cruiseSnapshot:
      "The Lasithi Plateau is another Crete entirely — a ring of mountains around a green, fertile bowl once dotted with thousands of white-sailed windmills. Add the birthplace cave of Zeus and you have a full day of scenery and myth.",
    snapshotFields: {
      timeInPort: "8+ hours recommended",
      bestFor: "Mountain scenery, mythology, villages",
      activityLevel: "Moderate — steep cave walk with steps",
      familyFriendly: "Good for active families",
      returnToShip: "Moderate — winding mountain transfer",
      popularTypes: "Full-day coach tours",
    },
    description: [
      "Ringed by the Dikti mountains, the Lasithi Plateau is a broad, fertile upland famous for its orchards, potato fields, and the iconic white-sailed irrigation windmills that once numbered in the thousands. It offers a complete change from Heraklion's coast — cooler air, green fields, and sleepy stone villages where Cretan life moves slowly.",
      "The highlight for many is the Dikteon Cave above the village of Psychro, where Greek mythology places the birth of Zeus, hidden by his mother Rhea from his father Cronus. A path climbs to the cave mouth (donkeys are sometimes available), and steps lead down into a dramatic chamber of stalactites and still pools.",
      "Tours usually include a village stop for lunch or coffee and photo halts at mountain viewpoints. Because of the distance and winding roads, this is a long day best suited to extended port calls — but it rewards travellers who prefer Crete's interior to its beaches.",
    ],
    highlights: [
      "Panoramic views over the fertile Lasithi Plateau",
      "The Dikteon Cave, mythical birthplace of Zeus",
      "Traditional stone villages and mountain scenery",
      "The famous white-sailed Cretan windmills (seasonal)",
    ],
    faqs: [
      {
        question: "How hard is the walk to the Zeus Cave?",
        answer:
          "The approach path is steep and the cave interior involves steps and uneven, sometimes slippery ground. Sturdy shoes are essential and it is not ideal for those with mobility difficulties.",
      },
      {
        question: "Will I see the windmills turning?",
        answer:
          "Most of the historic cloth-sailed windmills are no longer in daily use, though restored examples and stone windmill ruins remain photogenic landmarks across the plateau.",
      },
      {
        question: "Is the Lasithi tour realistic on a short call?",
        answer:
          "No — with over an hour of mountain driving each way plus the cave visit, allow a full day of at least eight hours ashore.",
      },
    ],
    relatedSlugs: [
      "spinalonga-elounda-tour",
      "cretan-villages-tour",
      "cretan-wine-tour",
    ],
    heroImage: HERO_IMAGES.lasithi.src,
    heroImageAlt: HERO_IMAGES.lasithi.alt,
  },
  {
    slug: "cretan-wine-tour",
    path: "/cretan-wine-tour",
    title: "Cretan Wine Country Shore Excursion from Heraklion",
    shortTitle: "Cretan Wine Country",
    summary:
      "Half a day among the vineyards south of Heraklion — tastings of indigenous Cretan grapes, olive oil, and mezze in one of the oldest wine regions on earth.",
    duration: "4–5 hours (half day)",
    fitness: "Easy",
    distanceFromTerminal:
      "The Peza and Archanes wine region is about 15–25 km south of Heraklion — roughly 30–45 minutes by coach through the hills.",
    transferRequired: true,
    transferNote:
      "A guided coach tour with tastings is the sensible choice — you can enjoy the wine without worrying about driving back to the ship.",
    bestFor: [
      "Food and wine enthusiasts",
      "Couples and relaxed half-day travellers",
      "Passengers wanting countryside without a full-day commitment",
    ],
    returnConfidence: "High",
    returnNote:
      "The wine region is close to Heraklion, so a half-day tasting tour keeps a comfortable margin against all-aboard — one of the more relaxed excursion choices.",
    weatherConsiderations:
      "Vineyard visits are mostly outdoors with shaded tasting terraces. Summer is hot; the hills are a little cooler than the coast. Spring and autumn are especially pleasant.",
    cruiseSnapshot:
      "Crete has made wine for around 4,000 years, and the hills south of Heraklion are its heartland. A half-day tour pairs indigenous grapes like Vidiano and Kotsifali with olive oil, cheese, and Cretan hospitality — close enough to keep your day relaxed.",
    snapshotFields: {
      timeInPort: "5+ hours is comfortable",
      bestFor: "Wine, food, scenery, relaxed pace",
      activityLevel: "Easy — winery visits and tastings",
      familyFriendly: "Better for adults and couples",
      returnToShip: "High — short transfer",
      popularTypes: "Half-day winery tours with tastings",
    },
    description: [
      "The rolling hills of Peza, Archanes, and Dafnes south of Heraklion form one of Greece's most important wine regions, with a winemaking tradition stretching back to Minoan times — a 4,000-year-old wine press was found near Archanes. Today boutique wineries here work indigenous Cretan varieties such as Vidiano, Vilana, Kotsifali, and Mandilari alongside international grapes.",
      "A typical half-day tour visits one or two family wineries for guided tastings, often paired with local olive oil, cheeses, olives, and rusks. Winemakers explain how Crete's altitude, sunshine, and old vines produce distinctive wines you rarely find outside Greece. The scenery — vineyards, olive groves, and hilltop villages — is a reward in itself.",
      "Because the region sits only 15–25 km from the port, this is an easy, low-stress excursion with a generous return buffer. It also combines beautifully with a short stop in the historic village of Archanes.",
    ],
    highlights: [
      "Tastings of indigenous Cretan grape varieties",
      "Family-run boutique wineries in the Peza/Archanes hills",
      "Local olive oil, cheese, and mezze pairings",
      "Vineyard and hilltop-village scenery close to the port",
    ],
    faqs: [
      {
        question: "How far is the wine region from Heraklion port?",
        answer:
          "The main Peza and Archanes wineries are about 15–25 km south of the port — a 30–45 minute drive, which keeps this a relaxed half-day trip.",
      },
      {
        question: "What Cretan wines will I taste?",
        answer:
          "Expect indigenous varieties such as Vidiano and Vilana (whites) and Kotsifali and Mandilari (reds), often alongside olive oil and local mezze.",
      },
      {
        question: "Is a wine tour suitable if I don't drink much?",
        answer:
          "Yes — tastings are modest, and the scenery, olive oil, food, and village visits make it enjoyable even for light drinkers or designated non-drinkers.",
      },
    ],
    relatedSlugs: [
      "cretan-villages-tour",
      "knossos-palace-shore-excursion",
      "lasithi-plateau-tour",
    ],
    heroImage: HERO_IMAGES.wine.src,
    heroImageAlt: HERO_IMAGES.wine.alt,
  },
  {
    slug: "cretan-villages-tour",
    path: "/cretan-villages-tour",
    title: "Cretan Villages & Countryside Shore Excursion from Heraklion",
    shortTitle: "Cretan Villages",
    summary:
      "Traditional mountain villages, olive groves, and authentic Cretan life beyond the resorts — a relaxed half-day into the countryside around Heraklion.",
    duration: "4–6 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Villages such as Archanes, Zaros, and the Amari foothills lie roughly 20–45 km from Heraklion — typically 40–70 minutes by coach.",
    transferRequired: true,
    transferNote:
      "A guided coach or small-group tour is the practical option, with a driver who knows the winding rural roads.",
    bestFor: [
      "Travellers seeking authentic, uncrowded Crete",
      "Food lovers and photographers",
      "Passengers who have already seen Knossos",
    ],
    returnConfidence: "High",
    returnNote:
      "Village loops that stay within the near hills keep reliable timing. Confirm your route and return buffer, especially if a tour ventures further into the mountains.",
    weatherConsiderations:
      "The hill villages are a touch cooler than the coast and shaded by plane trees and vines. Comfortable walking shoes help on village lanes and the occasional cobbled square.",
    cruiseSnapshot:
      "For travellers who want the real Crete — kafeneia under plane trees, family bakeries, olive presses, and mountain views — a countryside tour delivers warmth and authenticity without the crowds, at a relaxed half-day pace.",
    snapshotFields: {
      timeInPort: "5+ hours ideal",
      bestFor: "Authentic culture, food, photography",
      activityLevel: "Easy — village strolls and short stops",
      familyFriendly: "Good",
      returnToShip: "High on near-village loops",
      popularTypes: "Small-group and coach village tours",
    },
    description: [
      "Away from the archaeological sites and the coast, the countryside around Heraklion is where Cretan traditions endure. Villages such as Archanes — beautifully restored and full of colour — Zaros with its spring water and gorge, and the stone hamlets of the foothills offer a gentler, more human side of the island.",
      "A typical tour blends short village walks with tastings and encounters — a family bakery, an olive-oil producer, a traditional kafeneio for Greek coffee and raki, and viewpoints over vineyards and the mountains. Guides share the customs, foods, and history that make Cretan village life famous for its longevity and hospitality.",
      "Distances are modest, so this excursion keeps a comfortable return buffer while still feeling a world away from the port. It is an excellent second-day choice for repeat visitors or anyone who prefers culture and food to ruins and beaches.",
    ],
    highlights: [
      "Restored villages such as Archanes and Zaros",
      "Olive oil, honey, cheese, and raki tastings",
      "Traditional kafeneia and family-run bakeries",
      "Mountain, vineyard, and gorge scenery",
    ],
    faqs: [
      {
        question: "Which villages will the tour visit?",
        answer:
          "Common stops include Archanes, Zaros, and smaller foothill hamlets, though itineraries vary by operator and season. Confirm the exact route when you enquire.",
      },
      {
        question: "Is this tour very active?",
        answer:
          "No — it is a relaxed half-day of short strolls and tastings, suitable for most fitness levels, with some cobbled village lanes.",
      },
      {
        question: "How is this different from the wine tour?",
        answer:
          "The wine tour focuses on wineries and tastings; the village tour is broader, blending food, culture, crafts, and scenery across one or more traditional villages.",
      },
    ],
    relatedSlugs: [
      "cretan-wine-tour",
      "lasithi-plateau-tour",
      "heraklion-city-highlights-tour",
    ],
    heroImage: HERO_IMAGES.countryside.src,
    heroImageAlt: HERO_IMAGES.countryside.alt,
  },
  {
    slug: "heraklion-beaches-tour",
    path: "/heraklion-beaches-tour",
    title: "Heraklion Beaches & Coast Shore Excursion",
    shortTitle: "Beaches & Coast",
    summary:
      "Swim and relax on Crete's clear water — from the long sands of Amoudara to the coves near Agia Pelagia, an easy beach day within reach of the port.",
    duration: "3–5 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Amoudara beach is about 7 km west of the port (15 minutes); Agia Pelagia's coves are around 20 km (30 minutes) by taxi or coach.",
    transferRequired: true,
    transferNote:
      "A short taxi or transfer reaches the main beaches. Independent visitors can taxi to Amoudara easily; further coves are simplest with an organised transfer.",
    bestFor: [
      "Families and swimmers",
      "Hot-weather port days and relaxed travellers",
      "Passengers who have already done the archaeology",
    ],
    returnConfidence: "High",
    returnNote:
      "Nearby beaches like Amoudara keep an easy return margin. If you head further west, agree a firm pickup time with your driver or tour and leave a comfortable buffer.",
    weatherConsiderations:
      "Best in warm months (May–October). Afternoon 'meltemi' winds can pick up in mid-summer; sun protection and water are essential on exposed sand.",
    cruiseSnapshot:
      "When the archaeology can wait, Crete's water is the draw. A short hop from the port puts you on clean sand or in a sheltered cove — an easy, family-friendly way to enjoy a hot port day and still be back aboard comfortably.",
    snapshotFields: {
      timeInPort: "4+ hours for a relaxed swim",
      bestFor: "Swimming, families, relaxation",
      activityLevel: "Easy",
      familyFriendly: "Excellent",
      returnToShip: "High near Amoudara; plan pickups further out",
      popularTypes: "Beach transfers, beach + city combos",
    },
    description: [
      "Heraklion is a working city rather than a beach resort, but good swimming is close at hand. Just west of the port, Amoudara offers several kilometres of sand with sunbeds, tavernas, and shallow water that suits families — reachable in about 15 minutes by taxi.",
      "For clearer coves and more dramatic scenery, Agia Pelagia sits around 20 km west, tucked into a sheltered bay with turquoise water and waterfront tavernas. Both make an easy half-day escape, and beach trips combine well with a morning of sightseeing in the old town.",
      "Beach days are the simplest excursions to control against your all-aboard time — but agree a firm return with your taxi or tour, especially if you venture beyond Amoudara, and always keep a comfortable buffer.",
    ],
    highlights: [
      "The long sandy beach of Amoudara, minutes from the port",
      "The sheltered turquoise cove of Agia Pelagia",
      "Family-friendly shallow water and beach tavernas",
      "An easy pairing with a morning in the old town",
    ],
    faqs: [
      {
        question: "Which is the closest beach to Heraklion cruise port?",
        answer:
          "Amoudara, about 7 km west of the port (around 15 minutes by taxi), is the nearest organised beach with sunbeds, tavernas, and family-friendly shallow water.",
      },
      {
        question: "Is there a beach within walking distance of the port?",
        answer:
          "Not a good swimming beach — the immediate waterfront is a working harbour and city front. A short taxi to Amoudara is the easiest option for a proper swim.",
      },
      {
        question: "Can I combine a beach with sightseeing?",
        answer:
          "Yes — a morning in the old town or museum followed by an afternoon swim at Amoudara is a popular, low-stress way to spend a Heraklion port day.",
      },
    ],
    relatedSlugs: [
      "heraklion-city-highlights-tour",
      "cretan-wine-tour",
      "knossos-palace-shore-excursion",
    ],
    heroImage: HERO_IMAGES.beach.src,
    heroImageAlt: HERO_IMAGES.beach.alt,
  },
];

export function getExcursion(slug: string): Excursion | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getExcursionByPath(path: string): Excursion | undefined {
  return excursions.find((e) => e.path === path);
}

export function getRelatedExcursions(slug: string): Excursion[] {
  const excursion = getExcursion(slug);
  if (!excursion) return [];
  return excursion.relatedSlugs
    .map((s) => getExcursion(s))
    .filter((e): e is Excursion => e !== undefined);
}

export const staticGuidePaths = [
  "/heraklion-cruise-port-guide",
  "/best-heraklion-shore-excursions",
  "/things-to-do-in-heraklion-from-a-cruise-ship",
  "/one-day-in-heraklion-from-a-cruise-ship",
  "/knossos-palace-guide",
  "/heraklion-archaeological-museum-guide",
  "/heraklion-old-town-guide",
  "/beaches-near-heraklion-cruise-port",
  "/walking-heraklion-from-cruise-port",
  "/heraklion-cruise-terminal",
  "/heraklion-taxi-transport-guide",
  "/independent-vs-cruise-line-excursions",
  "/heraklion-cruise-passenger-tips",
  "/best-heraklion-excursions-for-families",
  "/best-heraklion-excursions-for-history-lovers",
  "/best-time-to-visit-heraklion",
  "/cruise-ship-schedules",
  "/cruise-planner",
  "/faq",
  "/enquire",
  "/about",
  "/privacy",
  "/terms",
  "/excursions",
];
