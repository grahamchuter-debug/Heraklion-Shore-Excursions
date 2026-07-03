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

const path = "/one-day-in-heraklion-from-a-cruise-ship";

const faqs = [
  {
    question: "Can I see Knossos and the museum in one day?",
    answer:
      "Yes — this is the classic Heraklion port day and works well on a call of six hours or more. Do Knossos first, then the Archaeological Museum in town, and you'll still have time for lunch.",
  },
  {
    question: "What if I only have four hours in Heraklion?",
    answer:
      "Stay close to the port. Choose either Knossos (a quick, reliable transfer) or a walk through the old town plus the museum. Avoid long day trips on a short call.",
  },
  {
    question: "What should I do with a long port day?",
    answer:
      "With eight hours or more you can add a Cretan day trip — Spinalonga and Elounda, or the Lasithi Plateau — or combine morning sightseeing with an afternoon beach.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "One Day in Heraklion from a Cruise Ship — Itineraries",
  description:
    "Sample one-day Heraklion itineraries for cruise passengers by hours ashore — 4, 6, and 8+ hour plans covering Knossos, the museum, the old town, beaches, and day trips.",
  path,
  image: HERO_IMAGES.heraklion.src,
  imageAlt: HERO_IMAGES.heraklion.alt,
});

export default function OneDayPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "One Day in Heraklion from a Cruise Ship", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "One Day In Heraklion" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "One Day In Heraklion" }]} />
        <PageHero
          eyebrow="Itinerary planner"
          title="One day in Heraklion from a cruise ship"
          subtitle="Ready-made port-day plans by hours ashore — make the most of Heraklion whether you have four hours or a full day."
          imageSrc={HERO_IMAGES.heraklion.src}
          imageAlt={HERO_IMAGES.heraklion.alt}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot intro="The right Heraklion plan depends entirely on your hours ashore. Here are three tried-and-tested itineraries, each built around a comfortable return-to-ship buffer." />

          <GuideSection title="About 4 hours ashore">
            <p>
              Keep it close and simple. Either take a quick taxi or bus to{" "}
              <Link href="/knossos-palace-guide" className="text-blue-800 hover:underline">
                Knossos
              </Link>{" "}
              for a focused visit, <em>or</em> walk into the{" "}
              <Link href="/heraklion-old-town-guide" className="text-blue-800 hover:underline">
                old town
              </Link>{" "}
              and the{" "}
              <Link href="/heraklion-archaeological-museum-guide" className="text-blue-800 hover:underline">
                Archaeological Museum
              </Link>
              . Trying to do both on a four-hour call is tight — pick one and enjoy
              it properly.
            </p>
          </GuideSection>

          <GuideSection title="About 6 hours ashore">
            <p>
              The classic combination: Knossos first thing (before the heat and
              crowds), then back into town for the Archaeological Museum and a stroll
              through the old town — Koules fortress, Lion Fountain, and the market —
              with time for a Cretan lunch. This is the ideal Heraklion day for
              first-time visitors.
            </p>
          </GuideSection>

          <GuideSection title="8+ hours ashore">
            <p>
              With a full day you have real choice. Either pair Knossos and the
              museum with an afternoon swim at{" "}
              <Link href="/beaches-near-heraklion-cruise-port" className="text-blue-800 hover:underline">
                Amoudara
              </Link>
              , or commit to a Cretan day trip —{" "}
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
              </Link>
              . For long transfers, book an organised tour that guarantees your
              return.
            </p>
          </GuideSection>

          <GuideSection title="Plan around your ship">
            <p>
              Use the{" "}
              <Link href="/cruise-planner" className="text-blue-800 hover:underline">
                cruise planner
              </Link>{" "}
              to match excursions to your exact hours, and check the{" "}
              <Link href="/cruise-ship-schedules" className="text-blue-800 hover:underline">
                ship schedule
              </Link>{" "}
              to see how busy the port — and Knossos — will be on your date.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="Moderate" />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Cruise planner", href: "/cruise-planner" },
              { label: "Best things to do", href: "/things-to-do-in-heraklion-from-a-cruise-ship" },
              { label: "Cruise passenger tips", href: "/heraklion-cruise-passenger-tips" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
