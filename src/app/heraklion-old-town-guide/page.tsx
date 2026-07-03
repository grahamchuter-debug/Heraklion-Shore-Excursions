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

const path = "/heraklion-old-town-guide";

const faqs = [
  {
    question: "Is Heraklion old town walkable from the cruise port?",
    answer:
      "Yes — from the port gate the old town is a flat 15–25 minute walk along the waterfront. Many cruise lines also run a shuttle to shorten the walk through the commercial port.",
  },
  {
    question: "What are the main sights in the old town?",
    answer:
      "The Koules fortress on the old harbour, the Morosini Lion Fountain, the 1866 market street, the Basilica of St Mark, the Cathedral of Agios Minas, and the city walls with the tomb of Nikos Kazantzakis.",
  },
  {
    question: "Can I see the old town in a couple of hours?",
    answer:
      "Yes — the historic core is compact and flat. Two to three hours is enough for the main landmarks, a coffee, and some shopping, leaving time for the museum or a beach.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Heraklion Old Town Guide for Cruise Passengers",
  description:
    "Explore Heraklion's Venetian old town from the cruise port — the Koules fortress, Lion Fountain, market street, churches, city walls, and the best cafés and shopping.",
  path,
  image: HERO_IMAGES.oldTown.src,
  imageAlt: HERO_IMAGES.oldTown.alt,
});

export default function OldTownGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Heraklion Old Town Guide", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Heraklion Old Town Guide" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Heraklion Old Town Guide" }]} />
        <PageHero
          eyebrow="Destination guide"
          title="Heraklion old town guide"
          subtitle="A walkable Venetian harbour city — the Koules fortress, the Lion Fountain, the market, and Cretan café culture, minutes from your ship."
          imageSrc={HERO_IMAGES.oldTown.src}
          imageAlt={HERO_IMAGES.oldTown.alt}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            fields={{
              timeInPort: "3+ hours for the core sights",
              bestFor: "Venetian architecture, markets, café culture",
              activityLevel: "Easy — flat, walkable, some cobbles",
              familyFriendly: "Excellent",
              returnToShip: "Very high — you stay near the port",
              popularTypes: "Walking tours, self-guided strolls",
            }}
            intro="Heraklion's old town is the lowest-risk way to enjoy a port day close to the ship — flat, compact, and full of history and life."
          />

          <GuideSection title="The old harbour and Koules fortress">
            <p>
              The 16th-century Venetian <strong>Koules fortress</strong> guards the
              old harbour, where fishing boats still moor beneath its walls. You can
              usually walk through the restored fort and climb to the ramparts for
              views back over the port and city — a perfect first stop.
            </p>
          </GuideSection>

          <GuideSection title="Lion Fountain, market, and churches">
            <p>
              From the harbour, 25 August Street climbs to the{" "}
              <strong>Morosini Lion Fountain</strong> and the Basilica of St Mark on
              Lions Square, the city&apos;s social heart. Nearby, the lively{" "}
              <strong>1866 market street</strong> overflows with herbs, honey, olive
              oil, raki, and Cretan cheeses, while the Cathedral of Agios Minas and
              the church of Agios Titos add to the historic tapestry.
            </p>
          </GuideSection>

          <GuideSection title="Walls, Kazantzakis, and café culture">
            <p>
              Energetic walkers can climb the Venetian walls to the tomb of Cretan
              writer <strong>Nikos Kazantzakis</strong> (author of <em>Zorba the
              Greek</em>), with sweeping views. Between the sights, pause for a Greek
              coffee, a freddo espresso, or the local sweet cheese pastry{" "}
              <em>bougatsa</em> in one of the shaded squares.
            </p>
          </GuideSection>

          <GuideSection title="Making the most of your visit">
            <p>
              Combine the old town with the{" "}
              <Link href="/heraklion-archaeological-museum-guide" className="text-blue-800 hover:underline">
                Archaeological Museum
              </Link>{" "}
              (a few minutes&apos; walk away) or an afternoon at a{" "}
              <Link href="/beaches-near-heraklion-cruise-port" className="text-blue-800 hover:underline">
                nearby beach
              </Link>
              . Our{" "}
              <Link href="/walking-heraklion-from-cruise-port" className="text-blue-800 hover:underline">
                walking-from-the-port guide
              </Link>{" "}
              maps the route from your ship.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="High" />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            excursions={[{ label: "Heraklion city highlights tour", href: "/heraklion-city-highlights-tour" }]}
            guides={[
              { label: "Walking from the cruise port", href: "/walking-heraklion-from-cruise-port" },
              { label: "Archaeological Museum guide", href: "/heraklion-archaeological-museum-guide" },
            ]}
          />
          <NeedHelpCTA excursion="heraklion-city-highlights-tour" />
        </div>
      </div>
    </>
  );
}
