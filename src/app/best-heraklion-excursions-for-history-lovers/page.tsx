import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/best-heraklion-excursions-for-history-lovers";

const faqs = [
  {
    question: "What is the best historical excursion in Heraklion?",
    answer:
      "Knossos paired with the Archaeological Museum is the definitive combination — the Minoan palace on site, and its original frescoes and artefacts in the museum. Together they tell the story of Europe's earliest civilisation.",
  },
  {
    question: "Is there more history beyond the Minoans?",
    answer:
      "Yes — Heraklion's Venetian and Ottoman layers show in the Koules fortress, the city walls, and the churches, while Spinalonga's fortress and 20th-century leper colony add a poignant modern chapter.",
  },
  {
    question: "Can history lovers fill a full day?",
    answer:
      "Easily. Knossos plus the museum is a rich half day; add the old town's Venetian sights, or a full-day trip to Spinalonga, for a deep dive into Cretan history.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Best Heraklion Excursions for History Lovers",
  description:
    "The best history-focused shore excursions in Heraklion, Crete — Knossos, the Archaeological Museum, Venetian Heraklion, and Spinalonga — for cruise passengers who love the past.",
  path,
  image: HERO_IMAGES.knossos.src,
  imageAlt: HERO_IMAGES.knossos.alt,
});

export default function HistoryPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Best Heraklion Excursions for History Lovers", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Excursions For History Lovers" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Excursions For History Lovers" }]} />
        <PageHero
          eyebrow="Themed guide"
          title="Best Heraklion excursions for history lovers"
          subtitle="From Bronze Age Minoans to Venetian fortresses — the deepest historical experiences on a Heraklion port day."
          imageSrc={HERO_IMAGES.knossos.src}
          imageAlt={HERO_IMAGES.knossos.alt}
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Minoan Crete: Knossos + the museum">
            <p>
              Start where European civilisation began.{" "}
              <Link href="/knossos-palace-shore-excursion" className="text-blue-800 hover:underline">
                Knossos
              </Link>{" "}
              gives you the palace and the myth; the{" "}
              <Link href="/heraklion-archaeological-museum-tour" className="text-blue-800 hover:underline">
                Archaeological Museum
              </Link>{" "}
              gives you the originals — frescoes, the Snake Goddess, and the
              undeciphered Phaistos Disc. Together they are unmissable.
            </p>
          </GuideSection>

          <GuideSection title="Venetian and Ottoman Heraklion">
            <p>
              The{" "}
              <Link href="/heraklion-old-town-guide" className="text-blue-800 hover:underline">
                old town
              </Link>{" "}
              layers 800 years of history: the Venetian Koules fortress and mighty
              city walls, the Morosini Lion Fountain, Ottoman-era fountains, and
              churches like Agios Titos and Agios Minas. A city walk reads like a
              timeline.
            </p>
          </GuideSection>

          <GuideSection title="A modern chapter: Spinalonga">
            <p>
              For a moving contrast, the full-day{" "}
              <Link href="/spinalonga-elounda-tour" className="text-blue-800 hover:underline">
                Spinalonga
              </Link>{" "}
              trip visits a Venetian island fortress that served as Greece&apos;s last
              leper colony until 1957 — history you can walk through, made famous by
              Victoria Hislop&apos;s <em>The Island</em>.
            </p>
          </GuideSection>

          <GuideSection title="Suggested history day">
            <p>
              A superb history day: Knossos first thing, the Archaeological Museum
              mid-morning, then a Venetian old-town walk with lunch. With a long
              call, swap the afternoon for a Cretan drive or, if timing allows,
              commit the whole day to Spinalonga.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="High" note="The Minoan and Venetian core stays close to the port and keeps timing easy. Only the Spinalonga day trip needs a full day and a larger buffer." />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Knossos Palace guide", href: "/knossos-palace-guide" },
              { label: "Archaeological Museum guide", href: "/heraklion-archaeological-museum-guide" },
              { label: "Old town guide", href: "/heraklion-old-town-guide" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
