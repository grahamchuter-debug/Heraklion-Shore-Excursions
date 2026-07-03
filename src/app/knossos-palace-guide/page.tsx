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

const path = "/knossos-palace-guide";

const faqs = [
  {
    question: "How do I get to Knossos from the Heraklion cruise port?",
    answer:
      "Knossos is about 5 km south of the port. A taxi takes 15–20 minutes; the number 2 public bus runs from near the port through the centre to the site; or join a guided coach excursion with skip-the-line entry.",
  },
  {
    question: "How long do I need at Knossos?",
    answer:
      "Allow around two hours on site, plus transfer time. With a guide you can cover the highlights in 90 minutes to two hours; independent visitors may want a little longer to orient themselves.",
  },
  {
    question: "Is Knossos worth it, given the reconstructions?",
    answer:
      "Yes — it is one of the most significant archaeological sites in Europe. Arthur Evans's colourful restorations are debated, but they make the palace far easier to visualise. A good guide separates Minoan fact from modern reconstruction.",
  },
  {
    question: "Should I buy a combined Knossos and museum ticket?",
    answer:
      "A combined ticket covering Knossos and the Heraklion Archaeological Museum is available and good value if you plan to see both — which is the ideal pairing, since the museum holds the original finds.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Knossos Palace Guide from Heraklion Cruise Port",
  description:
    "Everything cruise passengers need to visit Knossos Palace from Heraklion — how to get there, what to see, tickets, timing, the Minotaur myth, and independent vs guided options.",
  path,
  image: HERO_IMAGES.knossos.src,
  imageAlt: HERO_IMAGES.knossos.alt,
});

export default function KnossosGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Knossos Palace Guide", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Knossos Palace Guide" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Knossos Palace Guide" }]} />
        <PageHero
          eyebrow="Destination guide"
          title="Knossos Palace guide"
          subtitle="The Minoan labyrinth of King Minos — how to visit Knossos from the Heraklion cruise port, what to see, and how to plan your time."
          imageSrc={HERO_IMAGES.knossos.src}
          imageAlt={HERO_IMAGES.knossos.alt}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            fields={{
              timeInPort: "5+ hours works comfortably",
              bestFor: "Ancient history, mythology, first-timers",
              activityLevel: "Moderate — uneven ground and steps",
              familyFriendly: "Very good — the Minotaur myth grips children",
              returnToShip: "High — short, reliable transfer",
              popularTypes: "Guided Knossos tours, Knossos + Museum combos",
            }}
            intro="Knossos is the single most important thing to see from Heraklion — close, reliable, and unforgettable. Go early in summer to beat the heat and the crowds."
          />

          <GuideSection title="Why Knossos matters">
            <p>
              Knossos was the largest Bronze Age site on Crete and the ceremonial
              and political centre of Minoan civilisation — Europe&apos;s earliest
              advanced culture. Occupied from around 7000 BC, it grew into a vast
              palace complex from roughly 1900 BC, with grand halls, workshops,
              storerooms, and sophisticated drainage. In legend it was the labyrinth
              built by Daedalus to hold the Minotaur.
            </p>
          </GuideSection>

          <GuideSection title="What you'll see">
            <p>
              The highlights include the reconstructed Throne Room with its alabaster
              throne, the grand staircase of the residential quarter, the great
              storage magazines lined with giant clay <em>pithoi</em>, and vivid
              copies of the palace frescoes — the Prince of the Lilies, the
              bull-leaping scene, and the dolphins. The original frescoes are in the
              Archaeological Museum in town.
            </p>
          </GuideSection>

          <GuideSection title="Getting there and tickets">
            <p>
              Knossos sits about 5 km south of the port. Independent visitors can
              taxi (15–20 minutes) or take the number 2 bus. Buy tickets online in
              advance in peak season to skip queues, or choose a guided excursion
              that includes entry. A combined ticket with the{" "}
              <Link href="/heraklion-archaeological-museum-guide" className="text-blue-800 hover:underline">
                Archaeological Museum
              </Link>{" "}
              is excellent value.
            </p>
          </GuideSection>

          <GuideSection title="Cruise passenger tips">
            <p>
              Go early: the site is largely unshaded and blazing hot by midday in
              summer, and coach crowds build through the morning. Wear sturdy shoes
              for uneven ground, bring water and sun protection, and allow a
              comfortable buffer before all-aboard. A licensed guide transforms the
              visit — see our{" "}
              <Link href="/knossos-palace-shore-excursion" className="text-blue-800 hover:underline">
                Knossos shore excursion
              </Link>
              .
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="High" />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            excursions={[
              { label: "Knossos Palace shore excursion", href: "/knossos-palace-shore-excursion" },
              { label: "Archaeological Museum tour", href: "/heraklion-archaeological-museum-tour" },
            ]}
            guides={[{ label: "Archaeological Museum guide", href: "/heraklion-archaeological-museum-guide" }]}
          />
          <NeedHelpCTA excursion="knossos-palace-shore-excursion" />
        </div>
      </div>
    </>
  );
}
