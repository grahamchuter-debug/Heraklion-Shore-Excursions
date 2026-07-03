import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExcursionCard } from "@/components/ExcursionCard";
import { excursions } from "@/lib/excursions";
import { GEO_LABEL, HERO_IMAGES, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Heraklion Shore Excursions & Cruise Port Guide — Crete",
  description:
    "Plan the perfect day ashore in Heraklion, Crete — Knossos Palace, the Archaeological Museum, the Venetian old town, beaches, and independent shore excursions with confident return-to-ship timing.",
  path: "/",
  image: HERO_IMAGES.heraklion.src,
  imageAlt: HERO_IMAGES.heraklion.alt,
});

const trustPoints = [
  {
    title: "Independent & honest",
    desc: "Impartial guidance on the best excursions — not a single cruise line's upsell.",
  },
  {
    title: "Return-to-ship confidence",
    desc: "Every excursion rated for timing, transfers, and all-aboard buffers.",
  },
  {
    title: "Written for cruise passengers",
    desc: "Practical planning built around a single port day in Heraklion.",
  },
];

export default function HomePage() {
  const featured = excursions.slice(0, 4);

  return (
    <div>
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <Image
          src={HERO_IMAGES.heraklion.src}
          alt={HERO_IMAGES.heraklion.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl lg:grid-cols-2 lg:min-h-[34rem]">
          <div className="flex flex-col justify-center px-4 py-14 md:py-20 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
              {GEO_LABEL} · Greek Islands cruise port
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Shore excursions for Heraklion cruise passengers
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-200">
              Knossos Palace, the world-class Archaeological Museum, the Venetian
              old town, beaches, and unforgettable day trips across Crete —
              independent guidance with clear return-to-ship advice for your port
              day.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/excursions"
                className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-300"
              >
                Browse excursions
              </Link>
              <Link
                href="/heraklion-cruise-port-guide"
                className="rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold hover:border-white"
              >
                Heraklion port guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3">
          {trustPoints.map((point) => (
            <div key={point.title}>
              <p className="font-semibold text-slate-900">{point.title}</p>
              <p className="mt-1 text-sm text-slate-600">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-lg font-semibold text-amber-950">
            One port day, a whole ancient world
          </h2>
          <p className="mt-2 leading-relaxed text-amber-950/80">
            Heraklion is the gateway to Minoan Crete. With a little planning you
            can stand in the throne room of Knossos, see the original frescoes in
            the Archaeological Museum, wander a walled Venetian harbour, and still
            be back aboard in good time. Start with our{" "}
            <Link href="/one-day-in-heraklion-from-a-cruise-ship" className="font-semibold underline">
              one day in Heraklion
            </Link>{" "}
            itineraries.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900">Popular excursions</h2>
          <Link href="/excursions" className="text-sm font-semibold text-blue-800">
            View all →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((e) => (
            <ExcursionCard key={e.slug} excursion={e} />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-slate-900">Planning guides</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/knossos-palace-guide",
                label: "Knossos Palace guide",
                desc: "The labyrinth of Minos, from the cruise port",
              },
              {
                href: "/heraklion-archaeological-museum-guide",
                label: "Archaeological Museum guide",
                desc: "The Phaistos Disc and the original frescoes",
              },
              {
                href: "/things-to-do-in-heraklion-from-a-cruise-ship",
                label: "Best things to do",
                desc: "Ranked by port time and return confidence",
              },
              {
                href: "/beaches-near-heraklion-cruise-port",
                label: "Beaches near the port",
                desc: "Where to swim on a hot port day",
              },
              {
                href: "/heraklion-cruise-terminal",
                label: "Cruise terminal information",
                desc: "Where ships dock and how to get into town",
              },
              {
                href: "/cruise-ship-schedules",
                label: "Cruise ship schedules",
                desc: "See which ships are in port by month",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:bg-blue-50/40"
              >
                <p className="font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-xl bg-slate-900 px-8 py-10 text-center text-white">
          <h2 className="text-2xl font-bold">Need help choosing?</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Enquiry-only — tell us your ship schedule and we&apos;ll recommend
            Heraklion excursions with realistic return timing.
          </p>
          <Link
            href="/enquire"
            className="mt-6 inline-block rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-300"
          >
            Send an enquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
