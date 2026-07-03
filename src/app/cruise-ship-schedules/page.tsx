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
import { ScheduleHubView } from "@/components/ScheduleHubView";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";
import { getScheduleEntryCount } from "@/lib/schedule";

const path = "/cruise-ship-schedules";

const faqs = [
  {
    question: "How accurate are these Heraklion cruise ship schedules?",
    answer:
      "Schedules are compiled from published cruise timetables and updated periodically. Times and vessels can change, so always confirm your ship's exact arrival and all-aboard times with your cruise line before booking excursions.",
  },
  {
    question: "How many ships visit Heraklion on a typical day?",
    answer:
      "In peak season (May–October) Heraklion can host one to three ships on busier days. Checking the schedule helps you anticipate crowds at Knossos and the museum and book popular excursions early.",
  },
  {
    question: "When is the Heraklion cruise season?",
    answer:
      "The main season runs from April to October, peaking in summer. A small number of ships call in the shoulder months, with very few in winter.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Heraklion Cruise Ship Schedule 2026 & 2027",
  description:
    "Heraklion, Crete cruise ship schedule for 2026 and 2027 — see which ships are in port by year and month, with arrival and departure times, to plan your shore excursions.",
  path,
});

export default function ScheduleHubPage() {
  const count = getScheduleEntryCount();
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Cruise Ship Schedules" },
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Heraklion Cruise Ship Schedule",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema(breadcrumbs),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={breadcrumbs} />
        <PageHero
          eyebrow="Planning hub"
          title="Heraklion cruise ship schedule"
          subtitle="See which ships call at Heraklion, Crete by year and month — then plan your shore excursions around your port day."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Which ships are in port?">
            <p>
              Heraklion is one of the busiest cruise ports in the Greek islands.
              Knowing how many ships share your port day helps you time visits to
              Knossos and the Archaeological Museum, and book popular independent
              excursions before they fill.{" "}
              {count > 0
                ? `We currently list ${count} scheduled calls across 2026 and 2027.`
                : "Verified calls are being imported."}
            </p>
            <p>
              Always confirm your ship&apos;s exact arrival and all-aboard times
              with your cruise line — see our{" "}
              <Link href="/heraklion-cruise-port-guide" className="text-blue-800 hover:underline">
                port guide
              </Link>{" "}
              and{" "}
              <Link href="/cruise-planner" className="text-blue-800 hover:underline">
                cruise planner
              </Link>{" "}
              to turn your hours ashore into an excursion plan.
            </p>
          </GuideSection>

          <ScheduleHubView />

          <ReturnToShipBlock confidence="Moderate" note="However quiet or busy the port, set a personal turnaround 45–60 minutes before all-aboard — more for long day trips across Crete." />
          <FAQSection faqs={faqs} title="Schedule FAQs" />
          <GuideRelatedLinks
            guides={[{ label: "Port guide", href: "/heraklion-cruise-port-guide" }]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
