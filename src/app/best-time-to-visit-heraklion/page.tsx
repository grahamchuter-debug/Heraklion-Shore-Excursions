import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";
import { heraklionMonthGuide } from "@/lib/seasonality";

const path = "/best-time-to-visit-heraklion";

const faqs = [
  {
    question: "When is the best time to cruise to Heraklion?",
    answer:
      "May, September, and early October offer the best balance — warm weather, a warm sea, and slightly gentler heat and crowds than the July–August peak. April and late October are excellent for sightseeing if you don't mind cooler swimming.",
  },
  {
    question: "How hot does Heraklion get in summer?",
    answer:
      "July and August regularly reach the low 30s °C, with strong midday sun and occasional meltemi winds. Exposed sites like Knossos feel especially hot — visit early and carry water.",
  },
  {
    question: "Is the sea warm enough to swim?",
    answer:
      "The sea is comfortable for swimming from roughly June to October, warmest in August and September (around 24–25 °C). Spring swimming is bracing.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Best Time to Visit Heraklion on a Cruise — Month by Month",
  description:
    "A month-by-month guide to visiting Heraklion, Crete on a cruise — temperatures, sea conditions, crowds, and the cruise season, to help you plan the perfect port day.",
  path,
});

export default function BestTimePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Best Time to Visit Heraklion", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Best Time To Visit Heraklion" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Best Time To Visit Heraklion" }]} />
        <PageHero
          eyebrow="Seasonal guide"
          title="Best time to visit Heraklion"
          subtitle="Month-by-month weather, sea conditions, and cruise-season notes to help you plan the perfect day ashore in Crete."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="The short answer">
            <p>
              The Heraklion cruise season runs from roughly April to October. For
              the best all-round experience, aim for <strong>May</strong>,{" "}
              <strong>September</strong>, or early <strong>October</strong>: warm
              days, a warm sea, and slightly gentler heat and crowds than the peak of
              high summer. <strong>July and August</strong> are hottest and busiest —
              still wonderful, but start Knossos early and hydrate.
            </p>
          </GuideSection>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Month-by-month</h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Month</th>
                    <th className="px-4 py-3 text-left font-semibold">Air temp</th>
                    <th className="px-4 py-3 text-left font-semibold">Sea</th>
                    <th className="px-4 py-3 text-left font-semibold">Conditions</th>
                    <th className="px-4 py-3 text-left font-semibold">Cruise activity</th>
                    <th className="px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {heraklionMonthGuide.map((m) => (
                    <tr key={m.month}>
                      <td className="px-4 py-3 font-medium text-slate-900">{m.month}</td>
                      <td className="px-4 py-3 text-slate-600">{m.temp}</td>
                      <td className="px-4 py-3 text-slate-600">{m.sea}</td>
                      <td className="px-4 py-3 text-slate-600">{m.conditions}</td>
                      <td className="px-4 py-3 text-slate-600">{m.cruiseActivity}</td>
                      <td className="px-4 py-3 text-slate-600">{m.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <GuideSection title="Planning around the season">
            <p>
              Whatever month you sail, check the{" "}
              <Link href="/cruise-ship-schedules" className="text-blue-800 hover:underline">
                ship schedule
              </Link>{" "}
              to see how busy the port will be, and use the{" "}
              <Link href="/cruise-planner" className="text-blue-800 hover:underline">
                cruise planner
              </Link>{" "}
              to match excursions to your hours ashore.
            </p>
          </GuideSection>

          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Cruise passenger tips", href: "/heraklion-cruise-passenger-tips" },
              { label: "Cruise port guide", href: "/heraklion-cruise-port-guide" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
