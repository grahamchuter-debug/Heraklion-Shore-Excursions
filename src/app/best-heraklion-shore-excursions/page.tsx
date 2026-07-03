import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExcursionCard } from "@/components/ExcursionCard";
import { FAQSection } from "@/components/FAQSection";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { excursions } from "@/lib/excursions";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/best-heraklion-shore-excursions";

const faqs = [
  {
    question: "What is the best shore excursion in Heraklion?",
    answer:
      "For most cruise passengers it is Knossos Palace, ideally paired with the Archaeological Museum. It is close, reliable, and captures the essence of Minoan Crete in a comfortable half day.",
  },
  {
    question: "What is the best excursion for a short port call?",
    answer:
      "Stay close to the port: the old town, the Archaeological Museum, or Knossos (a short, reliable transfer). Save Spinalonga and the Lasithi Plateau for calls of eight hours or more.",
  },
  {
    question: "Which excursion is best for scenery?",
    answer:
      "The Spinalonga & Elounda day trip and the Lasithi Plateau tour offer the most dramatic scenery, while the Cretan wine and village tours combine gentle countryside with food and culture.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Best Heraklion Shore Excursions for Cruise Passengers",
  description:
    "The best shore excursions in Heraklion, Crete ranked for cruise passengers — Knossos, the Archaeological Museum, the old town, Spinalonga, Lasithi, wine, villages, and beaches, with return-to-ship guidance.",
  path,
  image: HERO_IMAGES.knossos.src,
  imageAlt: HERO_IMAGES.knossos.alt,
});

export default function BestExcursionsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Best Heraklion Shore Excursions", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Best Heraklion Shore Excursions" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Best Heraklion Shore Excursions" }]} />
        <PageHero
          eyebrow="Curated ranking"
          title="Best Heraklion shore excursions"
          subtitle="The excursions worth your port day in Heraklion, Crete — ranked for interest, timing, and return-to-ship confidence."
          imageSrc={HERO_IMAGES.knossos.src}
          imageAlt={HERO_IMAGES.knossos.alt}
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="How we rank excursions">
            <p>
              We weigh what makes a Heraklion port day memorable — world-class
              archaeology, walkable Venetian streets, clear water, and dramatic
              scenery — against the practicalities of a single day ashore: transfer
              time, activity level, and how confidently you can get back to your
              ship. Here is how the options stack up.
            </p>
          </GuideSection>

          <GuideSection title="The short list">
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                <Link href="/knossos-palace-shore-excursion" className="font-medium text-blue-800 hover:underline">
                  Knossos Palace
                </Link>{" "}
                — the essential Minoan site, close and reliable.
              </li>
              <li>
                <Link href="/heraklion-archaeological-museum-tour" className="font-medium text-blue-800 hover:underline">
                  Archaeological Museum
                </Link>{" "}
                — the original frescoes and the Phaistos Disc; perfect with Knossos.
              </li>
              <li>
                <Link href="/heraklion-city-highlights-tour" className="font-medium text-blue-800 hover:underline">
                  City highlights
                </Link>{" "}
                — the walkable old town, ideal for shorter calls.
              </li>
              <li>
                <Link href="/spinalonga-elounda-tour" className="font-medium text-blue-800 hover:underline">
                  Spinalonga &amp; Elounda
                </Link>{" "}
                — the most atmospheric full-day trip (long calls only).
              </li>
              <li>
                <Link href="/lasithi-plateau-tour" className="font-medium text-blue-800 hover:underline">
                  Lasithi Plateau &amp; Zeus Cave
                </Link>{" "}
                — mountains, myth, and villages.
              </li>
            </ol>
          </GuideSection>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">All excursions</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {excursions.map((e) => (
                <ExcursionCard key={e.slug} excursion={e} />
              ))}
            </div>
          </section>

          <ReturnToShipBlock confidence="Moderate" note="Match the excursion to your hours ashore. Anything east of Agios Nikolaos or up in the mountains needs a full day and a generous buffer." />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Things to do from a cruise ship", href: "/things-to-do-in-heraklion-from-a-cruise-ship" },
              { label: "One day in Heraklion", href: "/one-day-in-heraklion-from-a-cruise-ship" },
              { label: "Cruise planner", href: "/cruise-planner" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
