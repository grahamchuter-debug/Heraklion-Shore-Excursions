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

const path = "/beaches-near-heraklion-cruise-port";

const faqs = [
  {
    question: "What is the closest beach to Heraklion cruise port?",
    answer:
      "Amoudara, about 7 km west of the port (around 15 minutes by taxi), is the nearest organised beach — several kilometres of sand with sunbeds, tavernas, and shallow, family-friendly water.",
  },
  {
    question: "Is there a beach within walking distance of the port?",
    answer:
      "Not a good swimming beach. The immediate waterfront is a working harbour and city front, so a short taxi to Amoudara is the easiest way to reach proper sand and clean water.",
  },
  {
    question: "Which beach near Heraklion has the clearest water?",
    answer:
      "Agia Pelagia, around 20 km west, is a sheltered cove with especially clear, turquoise water and waterfront tavernas — a lovely half-day if you have the time.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Beaches Near Heraklion Cruise Port — Where to Swim",
  description:
    "The best beaches near Heraklion cruise port for a swim on your port day — Amoudara, Agia Pelagia, and more, with distances, transport, and return-to-ship timing.",
  path,
  image: HERO_IMAGES.beach.src,
  imageAlt: HERO_IMAGES.beach.alt,
});

export default function BeachesGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Beaches Near Heraklion Cruise Port", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Beaches Near the Cruise Port" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Beaches Near the Cruise Port" }]} />
        <PageHero
          eyebrow="Destination guide"
          title="Beaches near Heraklion cruise port"
          subtitle="Where to swim on a hot port day — the closest sand, the clearest coves, how to get there, and how to keep your return buffer."
          imageSrc={HERO_IMAGES.beach.src}
          imageAlt={HERO_IMAGES.beach.alt}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            fields={{
              timeInPort: "4+ hours for a relaxed swim",
              bestFor: "Swimming, families, relaxation",
              activityLevel: "Easy",
              familyFriendly: "Excellent",
              returnToShip: "High near Amoudara; plan pickups further out",
              popularTypes: "Beach transfers, beach + city combos",
            }}
            intro="Heraklion is a city rather than a resort, but good swimming is close. Amoudara is the easy nearby option; Agia Pelagia rewards a short extra drive."
          />

          <GuideSection title="Amoudara — the closest beach">
            <p>
              Just west of the city, <strong>Amoudara</strong> offers several
              kilometres of sand with sunbeds, umbrellas, tavernas, and shallow
              water that suits families. It is about 7 km from the port — roughly 15
              minutes by taxi — making it the simplest beach escape and easy to time
              against all-aboard.
            </p>
          </GuideSection>

          <GuideSection title="Agia Pelagia — the prettiest cove">
            <p>
              Around 20 km west, <strong>Agia Pelagia</strong> tucks into a
              sheltered bay with strikingly clear turquoise water and waterfront
              tavernas. It is a more scenic option for a half-day, about 30 minutes
              by taxi or transfer — agree a firm pickup time before you set off.
            </p>
          </GuideSection>

          <GuideSection title="Combining beach and city">
            <p>
              A relaxed formula: a morning in the{" "}
              <Link href="/heraklion-old-town-guide" className="text-blue-800 hover:underline">
                old town
              </Link>{" "}
              or the museum, then an afternoon swim at Amoudara. If you prefer a
              guided arrangement, see our{" "}
              <Link href="/heraklion-beaches-tour" className="text-blue-800 hover:underline">
                beaches &amp; coast excursion
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Beach-day tips">
            <ul className="list-disc space-y-2 pl-5">
              <li>Summer sun is fierce — bring water, sunscreen, and a hat.</li>
              <li>Afternoon <em>meltemi</em> winds can pick up in mid-summer.</li>
              <li>Carry euros for sunbeds and taverna bills.</li>
              <li>Fix a return time with your taxi, especially beyond Amoudara.</li>
            </ul>
          </GuideSection>

          <ReturnToShipBlock confidence="High" />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            excursions={[{ label: "Heraklion beaches & coast tour", href: "/heraklion-beaches-tour" }]}
            guides={[
              { label: "Taxi & transport guide", href: "/heraklion-taxi-transport-guide" },
              { label: "Best time to visit", href: "/best-time-to-visit-heraklion" },
            ]}
          />
          <NeedHelpCTA excursion="heraklion-beaches-tour" />
        </div>
      </div>
    </>
  );
}
