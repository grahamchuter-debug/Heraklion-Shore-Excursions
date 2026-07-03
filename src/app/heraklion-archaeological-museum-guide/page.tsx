import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerSnapshot } from "@/components/CruisePassengerSnapshot";
import { FAQSection } from "@/components/FAQSection";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/heraklion-archaeological-museum-guide";

const faqs = [
  {
    question: "Where is the Heraklion Archaeological Museum?",
    answer:
      "It sits in the centre of Heraklion, about 1.5 km from the cruise port — a 20-minute walk via the waterfront and old town, or a short taxi ride.",
  },
  {
    question: "What are the museum's must-see exhibits?",
    answer:
      "The original Knossos frescoes (including the bull-leaping scene), the faience Snake Goddess figurines, the Bull's Head rhyton, Minoan gold jewellery, and the mysterious Phaistos Disc.",
  },
  {
    question: "How long should I spend at the museum?",
    answer:
      "Around 90 minutes to two hours covers the Minoan highlights comfortably; enthusiasts could stay longer across its twenty-plus galleries.",
  },
  {
    question: "Is the museum a good rainy-day or hot-day option?",
    answer:
      "Yes — it is fully indoor and air-conditioned, making it ideal for the hottest part of the day or the rare wet port day.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Heraklion Archaeological Museum Guide for Cruise Passengers",
  description:
    "A cruise passenger's guide to the Heraklion Archaeological Museum — the Phaistos Disc, the original Knossos frescoes, the Snake Goddess, location, timing, and tickets.",
  path,
  image: HERO_IMAGES.museum.src,
  imageAlt: HERO_IMAGES.museum.alt,
});

export default function MuseumGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Heraklion Archaeological Museum Guide", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Archaeological Museum Guide" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Archaeological Museum Guide" }]} />
        <PageHero
          eyebrow="Destination guide"
          title="Heraklion Archaeological Museum guide"
          subtitle="One of the world's greatest collections of Minoan art — how to visit from the cruise port, what to see, and how to pair it with Knossos."
          imageSrc={HERO_IMAGES.museum.src}
          imageAlt={HERO_IMAGES.museum.alt}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            fields={{
              timeInPort: "4+ hours is plenty",
              bestFor: "Minoan art, indoor comfort, deeper history",
              activityLevel: "Easy — indoor galleries over two floors",
              familyFriendly: "Good — best with a guide to hold interest",
              returnToShip: "Very high — central and walkable",
              popularTypes: "Museum tours, Knossos + Museum combos",
            }}
            intro="The museum holds the treasures that Knossos only shows in copy. Air-conditioned and central, it is the perfect complement to the palace and a smart hot-day choice."
          />

          <GuideSection title="A world-class Minoan collection">
            <p>
              The Heraklion Archaeological Museum is among the most important
              museums in Europe and holds the finest collection of Minoan artefacts
              anywhere. Its galleries span 5,500 years of Cretan history, but the
              Bronze Age Minoan rooms — filled with objects from Knossos, Phaistos,
              Malia, and Zakros — are the reason most cruise passengers visit.
            </p>
          </GuideSection>

          <GuideSection title="The highlights">
            <p>
              Don&apos;t miss the original palace frescoes, including the famous
              bull-leaping scene; the delicate faience Snake Goddesses; the carved
              stone Bull&apos;s Head rhyton; exquisite Minoan gold and seal stones;
              and the{" "}
              <strong>Phaistos Disc</strong>, a fired-clay disc stamped with 45
              distinct symbols that has never been deciphered.
            </p>
          </GuideSection>

          <GuideSection title="Visiting from the cruise port">
            <p>
              The museum is about 1.5 km from the port — a pleasant 20-minute walk
              through the waterfront and old town, or a short taxi ride. It pairs
              perfectly with{" "}
              <Link href="/knossos-palace-guide" className="text-blue-800 hover:underline">
                Knossos
              </Link>
              : see the setting at the palace, then the originals here. A combined
              ticket covers both.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="High" />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            excursions={[
              { label: "Archaeological Museum tour", href: "/heraklion-archaeological-museum-tour" },
              { label: "Knossos Palace shore excursion", href: "/knossos-palace-shore-excursion" },
            ]}
            guides={[{ label: "Heraklion old town guide", href: "/heraklion-old-town-guide" }]}
          />
          <NeedHelpCTA excursion="heraklion-archaeological-museum-tour" />
        </div>
      </div>
    </>
  );
}
