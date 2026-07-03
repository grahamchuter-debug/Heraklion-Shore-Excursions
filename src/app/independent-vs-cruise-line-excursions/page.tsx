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

const path = "/independent-vs-cruise-line-excursions";

const faqs = [
  {
    question: "Are independent excursions in Heraklion safe for cruise passengers?",
    answer:
      "Yes, provided you plan sensibly. Reputable local operators run tours specifically for cruise passengers and track all-aboard times. The key difference is that only ship-sold tours carry a formal guarantee that the ship will wait.",
  },
  {
    question: "Are independent tours cheaper than the cruise line's?",
    answer:
      "Usually yes — local operators and small-group tours are often noticeably cheaper than the equivalent ship excursion, and can offer smaller groups and more flexibility.",
  },
  {
    question: "When should I book with the cruise line instead?",
    answer:
      "Choose the ship's tour for long, distant, or weather-dependent trips (such as far eastern Crete) where the return guarantee gives peace of mind, or on a tight port call.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Independent vs Cruise Line Excursions in Heraklion",
  description:
    "Should you book a Heraklion shore excursion independently or through your cruise line? The pros, cons, costs, and return-to-ship trade-offs explained for cruise passengers.",
  path,
});

export default function IndependentVsCruiseLinePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Independent vs Cruise Line Excursions", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Independent vs Cruise Line" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Independent vs Cruise Line" }]} />
        <PageHero
          eyebrow="Planning guide"
          title="Independent vs cruise line excursions"
          subtitle="The honest trade-offs between booking a Heraklion tour yourself and buying through your cruise line — cost, flexibility, and the return-to-ship guarantee."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="The core trade-off">
            <p>
              The single biggest difference is the return-to-ship guarantee. If a{" "}
              <strong>cruise-line excursion</strong> runs late, the ship waits (or
              the line gets you to the next port). With an{" "}
              <strong>independent tour</strong>, you are responsible for getting back
              on time. Everything else — price, group size, flexibility — usually
              favours independent options, so it comes down to how much that safety
              net is worth for a given trip.
            </p>
          </GuideSection>

          <GuideSection title="When independent wins">
            <ul className="list-disc space-y-2 pl-5">
              <li>Close, reliable sights like Knossos, the museum, and the old town</li>
              <li>Smaller groups and more personal, flexible guiding</li>
              <li>Better value — often significantly cheaper</li>
              <li>Doing things at your own pace, or building a custom day</li>
            </ul>
          </GuideSection>

          <GuideSection title="When the cruise line wins">
            <ul className="list-disc space-y-2 pl-5">
              <li>Long or distant trips (far eastern Crete, mountain routes)</li>
              <li>Weather- or boat-dependent excursions such as Spinalonga</li>
              <li>Tight port calls where any delay is risky</li>
              <li>Travellers who simply prefer the guaranteed peace of mind</li>
            </ul>
          </GuideSection>

          <GuideSection title="How to book independently with confidence">
            <p>
              Choose established operators who explicitly cater to cruise passengers
              and state their return-to-ship policy. Share your ship, all-aboard
              time, and hours ashore, and always build a 45–60 minute buffer (more
              for long transfers). For Knossos and the centre, taxis and the number
              2 bus make independent visits genuinely easy — see the{" "}
              <Link href="/heraklion-taxi-transport-guide" className="text-blue-800 hover:underline">
                transport guide
              </Link>
              .
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="Moderate" />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Cruise passenger tips", href: "/heraklion-cruise-passenger-tips" },
              { label: "Taxi & transport guide", href: "/heraklion-taxi-transport-guide" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
