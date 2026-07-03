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

const path = "/heraklion-cruise-terminal";

const faqs = [
  {
    question: "Do big cruise ships dock or tender at Heraklion?",
    answer:
      "Heraklion is a docking (alongside) port — ships berth at the quays rather than tendering. Occasionally, on very busy days, a ship may anchor, but berthing is the norm.",
  },
  {
    question: "Is there a shuttle from the ship to the port gate?",
    answer:
      "Most cruise lines run a shuttle across the commercial port to the gate near the old harbour, because passengers cannot walk freely through the working port area. From the gate, the old town is a short walk.",
  },
  {
    question: "What facilities are at the Heraklion cruise terminal?",
    answer:
      "Facilities are functional rather than extensive — expect taxis, tour meeting points, and basic services near the gate, with cafés, shops, ATMs, and pharmacies a short walk into town.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Heraklion Cruise Terminal Information",
  description:
    "Practical Heraklion cruise terminal information — where ships dock, shuttles to the port gate, facilities, taxis, buses, and how to get into the old town and to Knossos.",
  path,
  image: HERO_IMAGES.port.src,
  imageAlt: HERO_IMAGES.port.alt,
});

export default function TerminalGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Heraklion Cruise Terminal Information", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Cruise Terminal Information" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Cruise Terminal Information" }]} />
        <PageHero
          eyebrow="Practical guide"
          title="Heraklion cruise terminal information"
          subtitle="Where ships dock, how the port shuttle works, facilities on the quay, and the quickest ways into town and out to Knossos."
          imageSrc={HERO_IMAGES.port.src}
          imageAlt={HERO_IMAGES.port.alt}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            fields={{
              timeInPort: "6–10 hours typical",
              bestFor: "Orientation on arrival",
              activityLevel: "Easy",
              familyFriendly: "Good",
              returnToShip: "Very high near the port",
              popularTypes: "Shuttle + walk, taxi, coach tours",
            }}
            intro="Heraklion is a docking port with a working commercial harbour. Knowing how the shuttle and gate work saves time when you step ashore."
          />

          <GuideSection title="Where ships dock">
            <p>
              Cruise ships berth at the quays of Heraklion&apos;s commercial port on
              the eastern side of the harbour, beside the Venetian{" "}
              <strong>Koules fortress</strong>. Because this is an active cargo and
              ferry port, passengers are shuttled to the port gate rather than
              walking through the operational areas.
            </p>
          </GuideSection>

          <GuideSection title="Getting from ship to town">
            <p>
              From the gate, the old town is a flat 15–25 minute walk — see our{" "}
              <Link href="/walking-heraklion-from-cruise-port" className="text-blue-800 hover:underline">
                walking guide
              </Link>
              . Taxis wait near the gate, and the public number 2 bus runs to Knossos
              and through the centre. For distances and fares, see the{" "}
              <Link href="/heraklion-taxi-transport-guide" className="text-blue-800 hover:underline">
                taxi &amp; transport guide
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Facilities and practicalities">
            <ul className="list-disc space-y-2 pl-5">
              <li>Taxi rank and tour meeting points near the gate</li>
              <li>Cafés, shops, ATMs, and pharmacies a short walk into town</li>
              <li>Euro currency; cards widely accepted</li>
              <li>Free or paid Wi-Fi is limited — download maps offline</li>
            </ul>
          </GuideSection>

          <ReturnToShipBlock confidence="High" note="Factor in the shuttle back across the port when timing your return — allow for a short wait at peak disembarkation and re-boarding times." />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Walking from the port", href: "/walking-heraklion-from-cruise-port" },
              { label: "Taxi & transport guide", href: "/heraklion-taxi-transport-guide" },
              { label: "Cruise ship schedules", href: "/cruise-ship-schedules" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
