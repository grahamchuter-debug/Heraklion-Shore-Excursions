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

const path = "/things-to-do-in-heraklion-from-a-cruise-ship";

const faqs = [
  {
    question: "What is there to do in Heraklion on a cruise stop?",
    answer:
      "The big draws are Knossos and the Archaeological Museum, but you can also explore the walkable Venetian old town, visit the Koules fortress, shop the market, swim at a nearby beach, or take a day trip across Crete.",
  },
  {
    question: "What can I do in Heraklion for free?",
    answer:
      "Wandering the old town, the old harbour, the Lion Fountain, the market street, and walking the Venetian walls to the Kazantzakis tomb are all free. Beaches like Amoudara are free to access (sunbeds are paid).",
  },
  {
    question: "Is one day enough in Heraklion?",
    answer:
      "One day is enough for the essentials — typically Knossos plus the museum or old town. To add a beach or a Cretan day trip you'll want a longer port call.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Best Things to Do in Heraklion from a Cruise Ship",
  description:
    "The best things to do in Heraklion, Crete on a cruise stop — Knossos, the Archaeological Museum, the Venetian old town, the market, beaches, and Cretan day trips, with timing advice.",
  path,
  image: HERO_IMAGES.oldTown.src,
  imageAlt: HERO_IMAGES.oldTown.alt,
});

export default function ThingsToDoPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Things to Do in Heraklion from a Cruise Ship", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Things To Do From A Cruise Ship" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Things To Do From A Cruise Ship" }]} />
        <PageHero
          eyebrow="Authority guide"
          title="Best things to do in Heraklion from a cruise ship"
          subtitle="From the labyrinth of Knossos to the Venetian harbour, beaches, and Cretan day trips — the full menu for your port day, with honest timing."
          imageSrc={HERO_IMAGES.oldTown.src}
          imageAlt={HERO_IMAGES.oldTown.alt}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot intro="Heraklion offers far more than most cruise passengers expect: world-class archaeology, a lively walled city, and dramatic day trips across Crete. Choose according to your hours ashore." />

          <GuideSection title="1. Stand in the labyrinth of Knossos">
            <p>
              The reconstructed Minoan palace of{" "}
              <Link href="/knossos-palace-guide" className="text-blue-800 hover:underline">
                Knossos
              </Link>{" "}
              is Heraklion&apos;s headline act — the throne room, the frescoes, and
              the myth of the Minotaur, just 5 km from the port.
            </p>
          </GuideSection>

          <GuideSection title="2. See the treasures in the Archaeological Museum">
            <p>
              The{" "}
              <Link href="/heraklion-archaeological-museum-guide" className="text-blue-800 hover:underline">
                Archaeological Museum
              </Link>{" "}
              holds the original frescoes, the Snake Goddess, and the Phaistos Disc.
              Air-conditioned and central, it&apos;s the ideal partner to Knossos.
            </p>
          </GuideSection>

          <GuideSection title="3. Explore the Venetian old town">
            <p>
              Walk the{" "}
              <Link href="/heraklion-old-town-guide" className="text-blue-800 hover:underline">
                old town
              </Link>
              : the Koules fortress and old harbour, the Lion Fountain, the 1866
              market, and shaded squares for a coffee or <em>bougatsa</em>.
            </p>
          </GuideSection>

          <GuideSection title="4. Swim at a nearby beach">
            <p>
              On a hot day, head to{" "}
              <Link href="/beaches-near-heraklion-cruise-port" className="text-blue-800 hover:underline">
                Amoudara or Agia Pelagia
              </Link>{" "}
              for a swim — an easy escape that pairs well with a morning of
              sightseeing.
            </p>
          </GuideSection>

          <GuideSection title="5. Take a Cretan day trip">
            <p>
              With a long call, venture further:{" "}
              <Link href="/spinalonga-elounda-tour" className="text-blue-800 hover:underline">
                Spinalonga &amp; Elounda
              </Link>
              , the{" "}
              <Link href="/lasithi-plateau-tour" className="text-blue-800 hover:underline">
                Lasithi Plateau
              </Link>
              , or the{" "}
              <Link href="/cretan-wine-tour" className="text-blue-800 hover:underline">
                wine country
              </Link>{" "}
              and{" "}
              <Link href="/cretan-villages-tour" className="text-blue-800 hover:underline">
                traditional villages
              </Link>
              .
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="Moderate" />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "One day in Heraklion", href: "/one-day-in-heraklion-from-a-cruise-ship" },
              { label: "Best shore excursions", href: "/best-heraklion-shore-excursions" },
              { label: "Excursions for families", href: "/best-heraklion-excursions-for-families" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
