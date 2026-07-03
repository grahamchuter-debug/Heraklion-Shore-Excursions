export type NavItem = { label: string; href: string };

export const PORT_GUIDE_PATH = "/heraklion-cruise-port-guide";
export const SCHEDULE_PATH = "/cruise-ship-schedules";

export const mainNav: NavItem[] = [
  { label: "Excursions", href: "/excursions" },
  { label: "Port Guide", href: PORT_GUIDE_PATH },
  { label: "Ship Schedules", href: SCHEDULE_PATH },
  { label: "Cruise Planner", href: "/cruise-planner" },
  { label: "FAQ", href: "/faq" },
  { label: "Enquire", href: "/enquire" },
];

export const guideLinks: NavItem[] = [
  { label: "Heraklion Cruise Port Guide", href: PORT_GUIDE_PATH },
  { label: "Best Heraklion Shore Excursions", href: "/best-heraklion-shore-excursions" },
  {
    label: "Things To Do From A Cruise Ship",
    href: "/things-to-do-in-heraklion-from-a-cruise-ship",
  },
  { label: "One Day In Heraklion", href: "/one-day-in-heraklion-from-a-cruise-ship" },
  { label: "Cruise Ship Schedules", href: SCHEDULE_PATH },
  { label: "Cruise Planner", href: "/cruise-planner" },
  { label: "Cruise Terminal Information", href: "/heraklion-cruise-terminal" },
  { label: "Taxi & Transport Guide", href: "/heraklion-taxi-transport-guide" },
  { label: "Best Time To Visit Heraklion", href: "/best-time-to-visit-heraklion" },
  { label: "Cruise Passenger Tips", href: "/heraklion-cruise-passenger-tips" },
  { label: "Independent vs Cruise Line", href: "/independent-vs-cruise-line-excursions" },
  { label: "FAQ", href: "/faq" },
];

export const destinationGuideLinks: NavItem[] = [
  { label: "Knossos Palace Guide", href: "/knossos-palace-guide" },
  { label: "Archaeological Museum Guide", href: "/heraklion-archaeological-museum-guide" },
  { label: "Heraklion Old Town Guide", href: "/heraklion-old-town-guide" },
  { label: "Beaches Near the Cruise Port", href: "/beaches-near-heraklion-cruise-port" },
  { label: "Walking From The Port", href: "/walking-heraklion-from-cruise-port" },
  { label: "Excursions For Families", href: "/best-heraklion-excursions-for-families" },
  { label: "Excursions For History Lovers", href: "/best-heraklion-excursions-for-history-lovers" },
];

export const excursionLinks: NavItem[] = [
  { label: "Knossos Palace Tour", href: "/knossos-palace-shore-excursion" },
  { label: "Archaeological Museum Tour", href: "/heraklion-archaeological-museum-tour" },
  { label: "Heraklion City Highlights", href: "/heraklion-city-highlights-tour" },
  { label: "Spinalonga & Elounda", href: "/spinalonga-elounda-tour" },
  { label: "Lasithi Plateau & Zeus Cave", href: "/lasithi-plateau-tour" },
  { label: "Cretan Wine Country Tour", href: "/cretan-wine-tour" },
  { label: "Cretan Villages & Countryside", href: "/cretan-villages-tour" },
  { label: "Heraklion Beaches & Coast", href: "/heraklion-beaches-tour" },
];

export const legalLinks: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Contact / Enquire", href: "/enquire" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];
