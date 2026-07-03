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
import { pageMetadata } from "@/lib/site";

const path = "/heraklion-cruise-passenger-tips";

const faqs = [
  {
    question: "What should I take ashore in Heraklion?",
    answer:
      "Water, sun protection, a hat, comfortable shoes for uneven ancient sites, some euros in cash, and your ship's all-aboard time noted clearly. Download an offline map before you leave the ship.",
  },
  {
    question: "What time should I aim to be back at the port?",
    answer:
      "Return at least 45–60 minutes before all-aboard, and earlier for long day trips. Remember to allow for the shuttle back across the commercial port.",
  },
  {
    question: "Do I need cash in Heraklion?",
    answer:
      "Cards are widely accepted, but carry some euros for small tavernas, kiosks, market stalls, bus tickets, and tips.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Heraklion Cruise Passenger Tips — Port Day Advice",
  description:
    "Practical tips for cruise passengers in Heraklion, Crete — what to pack ashore, beating the heat and crowds at Knossos, money, safety, timing, and return-to-ship advice.",
  path,
});

export default function TipsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Heraklion Cruise Passenger Tips", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Cruise Passenger Tips" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Cruise Passenger Tips" }]} />
        <PageHero
          eyebrow="Practical guide"
          title="Heraklion cruise passenger tips"
          subtitle="Small pieces of local know-how that make a Heraklion port day smoother, cooler, and less stressful."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Beat the heat and the crowds">
            <p>
              In summer, do{" "}
              <Link href="/knossos-palace-guide" className="text-blue-800 hover:underline">
                Knossos
              </Link>{" "}
              early — the site is largely unshaded and both temperatures and coach
              crowds climb through the morning. Carry water, wear a hat and
              sunscreen, and save the air-conditioned museum for the hottest part of
              the day.
            </p>
          </GuideSection>

          <GuideSection title="Wear the right shoes">
            <p>
              Ancient sites and old-town lanes mean uneven ground, marble, and
              cobbles. Comfortable, grippy shoes beat sandals for Knossos, the
              Lasithi cave, and Spinalonga&apos;s island paths.
            </p>
          </GuideSection>

          <GuideSection title="Money and language">
            <p>
              The currency is the euro; cards are widely accepted but keep cash for
              small vendors, the market, bus tickets, and tips. Greek is the local
              language, but English is common in tourist areas — a friendly{" "}
              <em>kaliméra</em> (good morning) goes a long way.
            </p>
          </GuideSection>

          <GuideSection title="Getting around efficiently">
            <p>
              Use the shuttle to the port gate, then walk into town or grab a taxi.
              The number 2 bus is a cheap way to reach Knossos. For distant sights,
              book an organised tour — see{" "}
              <Link href="/heraklion-taxi-transport-guide" className="text-blue-800 hover:underline">
                transport
              </Link>{" "}
              and{" "}
              <Link href="/independent-vs-cruise-line-excursions" className="text-blue-800 hover:underline">
                independent vs cruise-line tours
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Protect your return">
            <p>
              Note your all-aboard time, keep a watch on local time, and leave a
              generous buffer — especially for long day trips. The ship will not wait
              for independent travellers who run late.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="Moderate" />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "One day in Heraklion", href: "/one-day-in-heraklion-from-a-cruise-ship" },
              { label: "Best time to visit", href: "/best-time-to-visit-heraklion" },
              { label: "Cruise port guide", href: "/heraklion-cruise-port-guide" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
