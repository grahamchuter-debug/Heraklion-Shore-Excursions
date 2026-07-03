import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerSnapshot } from "@/components/CruisePassengerSnapshot";
import { ExcursionLinks } from "@/components/ExcursionLinks";
import { FAQSection } from "@/components/FAQSection";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/heraklion-cruise-port-guide";

const faqs = [
  {
    question: "Where do cruise ships dock in Heraklion, Crete?",
    answer:
      "Cruise ships berth at the Heraklion cruise port on the eastern side of the harbour, near the Venetian Koules fortress. Berths are within the working commercial port, so most cruise lines run a shuttle to the port gate, from where the old town is a 10–15 minute walk.",
  },
  {
    question: "Can I walk into Heraklion town from the cruise port?",
    answer:
      "Yes — from the port gate the old town, harbour, and Archaeological Museum are roughly a 15–25 minute walk along the waterfront. Many passengers use the ship or port shuttle for the first stretch through the commercial port area.",
  },
  {
    question: "What currency and language are used in Heraklion?",
    answer:
      "The currency is the euro (EUR) and the language is Greek, though English is widely spoken in tourist areas. Cards are accepted in most places; carry some cash for small tavernas, kiosks, and tips.",
  },
  {
    question: "How far is Knossos from the Heraklion cruise port?",
    answer:
      "About 5 km — roughly 15–20 minutes by taxi or the number 2 public bus. It is the closest major attraction and the top priority for most cruise passengers.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Heraklion Cruise Port Guide — Crete",
  description:
    "Complete guide to the Heraklion, Crete cruise port — where ships dock, walking distances into town, shuttles, taxis, buses to Knossos, currency, weather, and the best excursions.",
  path,
  image: HERO_IMAGES.port.src,
  imageAlt: HERO_IMAGES.port.alt,
});

export default function PortGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Heraklion Cruise Port Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Heraklion Cruise Port Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Heraklion Cruise Port Guide" },
          ]}
        />
        <PageHero
          eyebrow="Port guide · Crete"
          title="Heraklion cruise port guide"
          subtitle="Where ships dock, how to reach the old town and Knossos, taxis and buses, currency, weather, and how to plan shore excursions in the capital of Crete."
          imageSrc={HERO_IMAGES.port.src}
          imageAlt={HERO_IMAGES.port.alt}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot intro="Heraklion is a busy, authentic Greek city and the gateway to Minoan Crete. Knossos and the Archaeological Museum are close and reliable; Spinalonga and the Lasithi Plateau are dramatic but need a full day. Know your berth and hours ashore before booking." />

          <GuideSection title="Where ships dock">
            <p>
              Cruise vessels call at the <strong>Heraklion cruise port</strong> on
              the eastern side of the harbour, alongside the historic Venetian{" "}
              <strong>Koules fortress</strong>. Because this is a working
              commercial port, the berths sit a little way from the centre and most
              cruise lines operate a shuttle bus to the port gate.
            </p>
            <p>
              From the gate, the old town, the old harbour, and the Archaeological
              Museum are an easy walk. See our{" "}
              <Link href="/heraklion-cruise-terminal" className="text-blue-800 hover:underline">
                cruise terminal information
              </Link>{" "}
              for shuttle and facility details.
            </p>
          </GuideSection>

          <GuideSection title="Walking into town">
            <p>
              The compact old town is flat and easy to explore on foot. From the
              port gate, allow roughly 15–25 minutes along the waterfront to reach
              the Morosini Lion Fountain, the 1866 market street, and the main
              squares. Our{" "}
              <Link href="/walking-heraklion-from-cruise-port" className="text-blue-800 hover:underline">
                walking from the cruise port
              </Link>{" "}
              guide maps the route and key stops.
            </p>
          </GuideSection>

          <GuideSection title="Taxis, buses, and transfers">
            <p>
              Taxis queue near the port during cruise calls — fares to Knossos or a
              nearby beach are modest. The public <strong>number 2 bus</strong>{" "}
              runs from near the port to Knossos and through the centre, an
              inexpensive independent option. For eastern Crete (Spinalonga) or the
              mountains (Lasithi), an organised coach excursion is the practical
              choice. See our{" "}
              <Link href="/heraklion-taxi-transport-guide" className="text-blue-800 hover:underline">
                taxi &amp; transport guide
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Weather, currency, and local tips">
            <p>
              Crete is hot and dry from June to September — carry water and sun
              protection, and start Knossos early to beat the midday heat. Spring
              and autumn are milder and ideal for sightseeing. The currency is the
              euro; tipping is appreciated but modest. See{" "}
              <Link href="/best-time-to-visit-heraklion" className="text-blue-800 hover:underline">
                best time to visit Heraklion
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Best excursions from this port">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Link href="/knossos-palace-shore-excursion" className="text-blue-800 hover:underline">
                  Knossos Palace
                </Link>{" "}
                — the Minoan labyrinth, 5 km from the port
              </li>
              <li>
                <Link href="/heraklion-archaeological-museum-tour" className="text-blue-800 hover:underline">
                  Archaeological Museum
                </Link>{" "}
                — the original frescoes and the Phaistos Disc
              </li>
              <li>
                <Link href="/heraklion-city-highlights-tour" className="text-blue-800 hover:underline">
                  City highlights
                </Link>{" "}
                — Koules fortress, Lion Fountain, market
              </li>
              <li>
                Full day:{" "}
                <Link href="/spinalonga-elounda-tour" className="text-blue-800 hover:underline">
                  Spinalonga &amp; Elounda
                </Link>{" "}
                or the{" "}
                <Link href="/lasithi-plateau-tour" className="text-blue-800 hover:underline">
                  Lasithi Plateau
                </Link>
              </li>
            </ul>
          </GuideSection>

          <ReturnToShipBlock confidence="High" note="Knossos, the museum, and the old town all keep an easy return margin. Long trips east to Spinalonga or up to the Lasithi Plateau need larger buffers — use our cruise planner." />

          <FAQSection faqs={faqs} />
          <ExcursionLinks />
          <GuideRelatedLinks
            guides={[
              { label: "One day in Heraklion", href: "/one-day-in-heraklion-from-a-cruise-ship" },
              { label: "Best time to visit", href: "/best-time-to-visit-heraklion" },
              { label: "Cruise ship schedules", href: "/cruise-ship-schedules" },
            ]}
            excursions={[
              { label: "Knossos Palace shore excursion", href: "/knossos-palace-shore-excursion" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
