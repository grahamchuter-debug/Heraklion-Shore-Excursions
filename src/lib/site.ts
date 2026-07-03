export const SITE_NAME = "Heraklion Shore Excursions";
export const SITE_URL = "https://heraklionshoreexcursions.com";
export const SITE_DESCRIPTION =
  "Independent shore excursion guides for cruise passengers visiting Heraklion, Crete — Knossos Palace, the Archaeological Museum, the Venetian old town, beaches, and confident return-to-ship planning.";
export const GEO_LABEL = "Heraklion, Crete";
export const REGION_LABEL = "Crete · Greek Islands";

export const DEFAULT_HERO_IMAGE = "/images/heraklion-hero.jpg";
export const DEFAULT_HERO_ALT =
  "Heraklion harbour with the Venetian Koules fortress and cruise port, Crete";

export const HERO_IMAGES = {
  heraklion: {
    src: DEFAULT_HERO_IMAGE,
    alt: DEFAULT_HERO_ALT,
  },
  knossos: {
    src: "/images/knossos-hero.jpg",
    alt: "The restored Minoan Palace of Knossos near Heraklion, Crete",
  },
  oldTown: {
    src: "/images/old-town-hero.jpg",
    alt: "The Morosini Lion Fountain and Venetian old town streets of Heraklion, Crete",
  },
  museum: {
    src: "/images/museum-hero.jpg",
    alt: "Minoan frescoes and artefacts in the Heraklion Archaeological Museum, Crete",
  },
  port: {
    src: "/images/port-hero.jpg",
    alt: "Cruise ships and the Koules fortress at the Heraklion cruise port, Crete",
  },
  beach: {
    src: "/images/beach-hero.jpg",
    alt: "Clear turquoise water at a sandy beach near Heraklion, Crete",
  },
  spinalonga: {
    src: "/images/spinalonga-hero.jpg",
    alt: "Spinalonga island fortress and the blue bay of Elounda, eastern Crete",
  },
  lasithi: {
    src: "/images/lasithi-hero.jpg",
    alt: "Stone windmills and green fields on the Lasithi Plateau, Crete",
  },
  wine: {
    src: "/images/wine-hero.jpg",
    alt: "Vineyards in the Cretan wine country south of Heraklion",
  },
  countryside: {
    src: "/images/countryside-hero.jpg",
    alt: "Traditional Cretan mountain village with olive groves near Heraklion",
  },
} as const;

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageTitle(title: string): string {
  return title;
}

export function pageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}) {
  const url = absoluteUrl(path);
  const ogImages = image
    ? [{ url: absoluteUrl(image), alt: imageAlt ?? title }]
    : undefined;
  return {
    title: pageTitle(title),
    description,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle(title),
      description,
      url,
      type: "website" as const,
      siteName: SITE_NAME,
      locale: "en_GB",
      ...(ogImages ? { images: ogImages } : {}),
    },
    twitter: {
      card: "summary_large_image" as const,
      title: pageTitle(title),
      description,
      ...(ogImages ? { images: ogImages.map((i) => i.url) } : {}),
    },
  };
}
