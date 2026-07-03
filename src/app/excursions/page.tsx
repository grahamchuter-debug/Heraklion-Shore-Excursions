import type { Metadata } from "next";
import Link from "next/link";
import { ExcursionCard } from "@/components/ExcursionCard";
import { excursions } from "@/lib/excursions";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Heraklion Shore Excursions — Browse All Tours",
  description:
    "Browse independent shore excursions for cruise passengers in Heraklion, Crete — Knossos Palace, the Archaeological Museum, the old town, Spinalonga, Lasithi Plateau, wine, villages, and beaches.",
  path: "/excursions",
});

export default function ExcursionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Heraklion shore excursions</h1>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
        Independent excursion guides for cruise passengers visiting Heraklion,
        Crete. Every listing includes return-to-ship guidance, honest timing, and
        enquiry-based booking — no online checkout yet.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {excursions.map((e) => (
          <ExcursionCard key={e.slug} excursion={e} />
        ))}
      </div>
      <p className="mt-10 text-sm text-slate-600">
        Planning your day? See the{" "}
        <Link href="/heraklion-cruise-port-guide" className="text-blue-800 hover:underline">
          cruise port guide
        </Link>{" "}
        and{" "}
        <Link href="/cruise-planner" className="text-blue-800 hover:underline">
          cruise planner
        </Link>
        .
      </p>
    </div>
  );
}
