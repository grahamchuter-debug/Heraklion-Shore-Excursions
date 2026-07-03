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

const path = "/heraklion-taxi-transport-guide";

const faqs = [
  {
    question: "Are taxis available at Heraklion cruise port?",
    answer:
      "Yes — taxis queue near the port gate during cruise calls. Agree the fare or confirm the meter before setting off, and keep the driver's card if you arrange a return pickup.",
  },
  {
    question: "How do I get to Knossos by public bus?",
    answer:
      "The city number 2 bus runs from near the port and through the centre out to Knossos (about 20 minutes). It is frequent and inexpensive — buy a ticket at a kiosk or on board.",
  },
  {
    question: "Should I hire a private driver for the day?",
    answer:
      "A private driver or organised excursion is the most reliable way to reach further sights such as Spinalonga or the Lasithi Plateau, and to guarantee a return-to-ship buffer. For Knossos and the old town, taxis and buses are usually enough.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Heraklion Taxi & Transport Guide for Cruise Passengers",
  description:
    "How to get around from Heraklion cruise port — taxis, the number 2 bus to Knossos, private drivers, car hire, and typical journey times to the top attractions.",
  path,
  image: HERO_IMAGES.port.src,
  imageAlt: HERO_IMAGES.port.alt,
});

export default function TransportGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Heraklion Taxi & Transport Guide", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Taxi & Transport Guide" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Taxi & Transport Guide" }]} />
        <PageHero
          eyebrow="Practical guide"
          title="Heraklion taxi & transport guide"
          subtitle="Taxis, the number 2 bus to Knossos, private drivers, and journey times — how to get where you want on your port day."
          imageSrc={HERO_IMAGES.port.src}
          imageAlt={HERO_IMAGES.port.alt}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            fields={{
              timeInPort: "Any length",
              bestFor: "Reaching Knossos, beaches, day trips",
              activityLevel: "Easy",
              familyFriendly: "Good",
              returnToShip: "High with taxis/bus; plan long trips carefully",
              popularTypes: "Taxi, public bus, private driver, coach tour",
            }}
            intro="Getting around Heraklion is easy for the main sights. Match your transport to the distance — walk or bus for the centre and Knossos, organised tours for far-flung Crete."
          />

          <GuideSection title="Taxis">
            <p>
              Taxis wait near the port gate during cruise calls. They are the
              quickest door-to-door option for Knossos, Amoudara beach, or the
              museum. Confirm the fare or that the meter is running before you set
              off, and take the driver&apos;s card if you want a return pickup.
            </p>
          </GuideSection>

          <GuideSection title="Public buses">
            <p>
              Heraklion&apos;s city buses are cheap and reliable. The{" "}
              <strong>number 2 bus</strong> is the key route for cruise passengers,
              linking the port area and centre with{" "}
              <Link href="/knossos-palace-guide" className="text-blue-800 hover:underline">
                Knossos
              </Link>{" "}
              in about 20 minutes. Buy tickets at kiosks or on board and keep small
              change.
            </p>
          </GuideSection>

          <GuideSection title="Private drivers and coach tours">
            <p>
              For longer distances — Spinalonga and Elounda in the east, or the
              Lasithi Plateau in the mountains — a private driver or an organised
              coach excursion is the sensible choice. These options handle the
              driving, add local knowledge, and, crucially, keep you to a schedule
              that protects your all-aboard time.
            </p>
          </GuideSection>

          <GuideSection title="Typical journey times from the port">
            <ul className="list-disc space-y-2 pl-5">
              <li>Old town / museum — 15–25 minutes on foot</li>
              <li>Knossos — 15–20 minutes by taxi or bus</li>
              <li>Amoudara beach — ~15 minutes by taxi</li>
              <li>Agia Pelagia — ~30 minutes by taxi</li>
              <li>Lasithi Plateau — ~1 hour 15 minutes by coach</li>
              <li>Elounda / Spinalonga — ~1 hour 15 minutes by coach + boat</li>
            </ul>
          </GuideSection>

          <ReturnToShipBlock confidence="Moderate" note="If you take a taxi or bus to a distant point, always plan how you will get back and leave a generous buffer — independent transport carries no return-to-ship guarantee." />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Cruise terminal information", href: "/heraklion-cruise-terminal" },
              { label: "Independent vs cruise line excursions", href: "/independent-vs-cruise-line-excursions" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
