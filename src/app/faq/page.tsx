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

const path = "/faq";

const faqs = [
  {
    question: "Where do cruise ships dock in Heraklion, Crete?",
    answer:
      "Ships dock at the Heraklion cruise port on the eastern side of the harbour, beside the Venetian Koules fortress. Larger ships berth at the commercial quays; the old town is a short shuttle or 15–20 minute walk away. See our cruise terminal guide for details.",
  },
  {
    question: "What is the number one thing to see in Heraklion?",
    answer:
      "The Palace of Knossos, about 5 km from the port, is the must-see — the centre of Minoan civilisation and the legendary labyrinth. Pair it with the Archaeological Museum for the original artefacts.",
  },
  {
    question: "Can I visit Knossos independently from the cruise port?",
    answer:
      "Yes — a taxi takes 15–20 minutes, or the number 2 public bus runs from near the port. A licensed guide, however, greatly improves the visit given the site's heavy reconstruction and limited signage.",
  },
  {
    question: "Can I book excursions on this website?",
    answer:
      "Not yet — use the enquiry form and we'll recommend options matched to your ship schedule. Enquiry-only, with no online checkout.",
  },
  {
    question: "How much buffer should I leave before all-aboard?",
    answer:
      "Build at least 45–60 minutes beyond your tour's stated return time, and more for long day trips to eastern Crete (Spinalonga) or the Lasithi Plateau that involve distance or boat crossings.",
  },
  {
    question: "Is Heraklion walkable from the ship?",
    answer:
      "The old town, harbour, and Archaeological Museum are all walkable in 15–25 minutes, though many lines run a shuttle to the port gate. For Knossos, beaches, and day trips you'll need a taxi or coach.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "FAQ — Heraklion Shore Excursions, Crete",
  description:
    "Frequently asked questions about Heraklion, Crete cruise port visits — where ships dock, Knossos, the Archaeological Museum, timing, walking, and booking enquiries.",
  path,
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "FAQ", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "FAQ" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />
        <PageHero
          eyebrow="Help centre"
          title="Frequently asked questions"
          subtitle="Heraklion, Crete cruise port and shore excursion answers for cruise passengers."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Planning your Heraklion port day">
            <p>
              Heraklion is the capital of Crete and one of the busiest cruise
              ports in the Greek islands. Most passengers come for Minoan
              archaeology — start with our{" "}
              <Link href="/heraklion-cruise-port-guide" className="text-blue-800 hover:underline">
                cruise port guide
              </Link>{" "}
              and{" "}
              <Link href="/one-day-in-heraklion-from-a-cruise-ship" className="text-blue-800 hover:underline">
                one-day itineraries
              </Link>
              .
            </p>
          </GuideSection>

          <FAQSection faqs={faqs} title="Common questions" />
          <ReturnToShipBlock />
          <GuideRelatedLinks
            guides={[
              { label: "Port guide", href: "/heraklion-cruise-port-guide" },
              { label: "Cruise planner", href: "/cruise-planner" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
