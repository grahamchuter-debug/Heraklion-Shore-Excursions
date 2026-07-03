import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/about";

export const metadata: Metadata = pageMetadata({
  title: "About Heraklion Shore Excursions",
  description:
    "About Heraklion Shore Excursions — an independent planning resource helping cruise passengers make the most of a day ashore in Heraklion, Crete.",
  path,
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "About", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "About" }]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} />
        <PageHero
          eyebrow="About us"
          title="About Heraklion Shore Excursions"
          subtitle="An independent planning resource built specifically for cruise passengers spending a day ashore in Heraklion, Crete."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="What we do">
            <p>
              Heraklion Shore Excursions is an independent guide to spending a
              cruise port day in Heraklion, the capital of Crete. We help
              passengers understand what is realistic in the hours they have
              ashore — from the Palace of Knossos and the Archaeological Museum to
              the Venetian old town, beaches, and day trips across the island.
            </p>
            <p>
              We are not a cruise line and we do not sell a single fixed programme.
              Our goal is to give clear, honest, practical information so you can
              choose the right excursion for your interests, mobility, and
              all-aboard time — and get back to your ship with confidence.
            </p>
          </GuideSection>

          <GuideSection title="Why independent guidance matters">
            <p>
              Ship-sold tours are convenient and carry a return-to-ship guarantee,
              but they are often larger, busier, and more expensive than
              independent alternatives. Local operators can offer smaller groups,
              more flexibility, and better value — provided you plan sensibly
              around your port timing. We explain the trade-offs so you can decide
              what suits you, including our guide to{" "}
              <a href="/independent-vs-cruise-line-excursions" className="text-blue-800 hover:underline">
                independent vs cruise line excursions
              </a>
              .
            </p>
          </GuideSection>

          <GuideSection title="How we make recommendations">
            <p>
              Every excursion on this site is assessed for duration, transfer
              time, activity level, family suitability, and return-to-ship
              confidence. We are upfront when a trip is only realistic on a long
              port call, or when weather and sea conditions can affect a plan.
              Where you book is your choice — we simply help you plan well.
            </p>
          </GuideSection>

          <GuideSection title="Enquiries">
            <p>
              This site is currently enquiry-only, with no online checkout. If you
              would like tailored suggestions for your sailing, use the{" "}
              <a href="/enquire" className="text-blue-800 hover:underline">
                enquiry form
              </a>{" "}
              with your ship, port date, and hours ashore.
            </p>
          </GuideSection>

          <GuideRelatedLinks
            guides={[
              { label: "Cruise port guide", href: "/heraklion-cruise-port-guide" },
              { label: "Cruise passenger tips", href: "/heraklion-cruise-passenger-tips" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
