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

const path = "/walking-heraklion-from-cruise-port";

const faqs = [
  {
    question: "How long is the walk from Heraklion cruise port to the old town?",
    answer:
      "From the port gate, allow 15–25 minutes on flat ground along the waterfront to reach the old harbour and old town. Many cruise lines run a shuttle across the commercial port area, shortening the walk.",
  },
  {
    question: "Is the walk from the port safe and easy?",
    answer:
      "Yes — it is flat and straightforward, but the first stretch passes through a working commercial port, so follow signage or take the shuttle to the gate before walking into town.",
  },
  {
    question: "Can I walk to Knossos from the port?",
    answer:
      "No — Knossos is about 5 km away. Take a taxi, the number 2 bus, or a guided excursion instead.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Walking From Heraklion Cruise Port — Routes & Times",
  description:
    "A step-by-step walking guide from Heraklion cruise port into the old town — the route, distances, walking times, shuttle advice, and what you can reach on foot.",
  path,
  image: HERO_IMAGES.port.src,
  imageAlt: HERO_IMAGES.port.alt,
});

export default function WalkingGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Walking From Heraklion Cruise Port", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Walking From The Port" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Walking From The Port" }]} />
        <PageHero
          eyebrow="Practical guide"
          title="Walking from Heraklion cruise port"
          subtitle="What you can reach on foot, how long it takes, and the simple route from your ship into the Venetian old town."
          imageSrc={HERO_IMAGES.port.src}
          imageAlt={HERO_IMAGES.port.alt}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            fields={{
              timeInPort: "Any length — walking suits short calls",
              bestFor: "Old town, harbour, museum on foot",
              activityLevel: "Easy — flat waterfront route",
              familyFriendly: "Good — use the shuttle with young children",
              returnToShip: "Very high — you control the timing",
              popularTypes: "Self-guided walks, walking tours",
            }}
            intro="Heraklion is one of the more walkable Greek-island cruise stops. The old town, harbour, and museum are all within easy reach on flat ground."
          />

          <GuideSection title="From the ship to the port gate">
            <p>
              Cruise ships dock within Heraklion&apos;s working commercial port, so
              the first stretch — from your berth to the port gate — is best covered
              by the shuttle bus most cruise lines provide, especially in the heat.
              The gate sits beside the old Venetian harbour and the Koules fortress.
            </p>
          </GuideSection>

          <GuideSection title="From the gate into the old town">
            <p>
              From the port gate it is a flat 15–25 minute walk along the waterfront
              to the heart of the old town. Aim first for the{" "}
              <strong>Koules fortress</strong> and the old harbour, then head inland
              up 25 August Street to the <strong>Lion Fountain</strong>, the market,
              and the main squares.
            </p>
          </GuideSection>

          <GuideSection title="What you can reach on foot">
            <ul className="list-disc space-y-2 pl-5">
              <li>Koules fortress &amp; old harbour — ~15 minutes</li>
              <li>Morosini Lion Fountain &amp; Lions Square — ~20 minutes</li>
              <li>1866 market street — ~20 minutes</li>
              <li>Heraklion Archaeological Museum — ~20 minutes</li>
              <li>City walls &amp; Kazantzakis tomb — ~30 minutes</li>
            </ul>
            <p>
              For everything else — Knossos, beaches, and day trips — see our{" "}
              <Link href="/heraklion-taxi-transport-guide" className="text-blue-800 hover:underline">
                taxi &amp; transport guide
              </Link>
              .
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="High" note="Walking keeps you in full control of your timing. Still, note the return walk plus shuttle wait, and leave a comfortable buffer before all-aboard." />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Old town guide", href: "/heraklion-old-town-guide" },
              { label: "Cruise terminal information", href: "/heraklion-cruise-terminal" },
            ]}
            excursions={[{ label: "Heraklion city highlights tour", href: "/heraklion-city-highlights-tour" }]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
