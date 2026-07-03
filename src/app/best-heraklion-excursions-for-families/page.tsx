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
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/best-heraklion-excursions-for-families";

const faqs = [
  {
    question: "Is Knossos good for children?",
    answer:
      "Yes — the myth of the labyrinth and the Minotaur brings the site to life for kids. Go early to avoid heat, keep them hydrated, and a family-friendly guide can turn it into a real adventure.",
  },
  {
    question: "What is the best family excursion on a hot day?",
    answer:
      "A beach trip to Amoudara has shallow, calm water and sunbeds close to the port, ideal for younger children — often best combined with a short morning of sightseeing.",
  },
  {
    question: "Are long day trips suitable for kids?",
    answer:
      "Full-day trips like Spinalonga or the Lasithi Plateau suit older children who enjoy history and scenery, but involve long coach journeys. For young families, stay closer to the port.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Best Heraklion Excursions for Families",
  description:
    "Family-friendly shore excursions in Heraklion, Crete — Knossos and the Minotaur myth, hands-on museum highlights, easy beaches, and tips for keeping kids happy on a port day.",
  path,
  image: HERO_IMAGES.beach.src,
  imageAlt: HERO_IMAGES.beach.alt,
});

export default function FamiliesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Best Heraklion Excursions for Families", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Excursions For Families" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Excursions For Families" }]} />
        <PageHero
          eyebrow="Family guide"
          title="Best Heraklion excursions for families"
          subtitle="Myths, monsters, and beaches — how to plan a Heraklion port day that keeps children engaged and parents relaxed."
          imageSrc={HERO_IMAGES.beach.src}
          imageAlt={HERO_IMAGES.beach.alt}
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Knossos and the Minotaur">
            <p>
              Few archaeological sites capture young imaginations like{" "}
              <Link href="/knossos-palace-shore-excursion" className="text-blue-800 hover:underline">
                Knossos
              </Link>
              . Framing the visit around the labyrinth, King Minos, and the Minotaur
              turns ruins into a story. Go early, bring water, and consider a
              family-friendly guide.
            </p>
          </GuideSection>

          <GuideSection title="Beaches for all ages">
            <p>
              A swim at{" "}
              <Link href="/heraklion-beaches-tour" className="text-blue-800 hover:underline">
                Amoudara
              </Link>{" "}
              — shallow, calm, and close to the port — is a reliable hit with
              younger children and pairs well with a short sightseeing morning.
            </p>
          </GuideSection>

          <GuideSection title="An easy, walkable city">
            <p>
              The flat{" "}
              <Link href="/heraklion-old-town-guide" className="text-blue-800 hover:underline">
                old town
              </Link>{" "}
              is stroller-friendly, with the Koules fortress to explore, ice cream
              and <em>bougatsa</em> to sample, and short distances that suit small
              legs. The Archaeological Museum works in shorter bursts with a guide.
            </p>
          </GuideSection>

          <GuideSection title="Family planning tips">
            <ul className="list-disc space-y-2 pl-5">
              <li>Prioritise mornings for sightseeing, afternoons for the beach.</li>
              <li>Pack sun protection, water, and snacks.</li>
              <li>Keep long coach day trips for older, road-hardy children.</li>
              <li>Build a generous return buffer with kids in tow.</li>
            </ul>
          </GuideSection>

          <ReturnToShipBlock confidence="High" note="Family days that stay near the port — Knossos, museum, old town, Amoudara — keep timing easy and stress low." />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Beaches near the port", href: "/beaches-near-heraklion-cruise-port" },
              { label: "One day in Heraklion", href: "/one-day-in-heraklion-from-a-cruise-ship" },
            ]}
            excursions={[{ label: "Knossos Palace shore excursion", href: "/knossos-palace-shore-excursion" }]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
