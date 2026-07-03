"use client";

import { useState } from "react";
import Link from "next/link";
import { excursions } from "@/lib/excursions";

type Hours = "4" | "5" | "6" | "8" | "10";

const recommendations: Record<Hours, string[]> = {
  "4": [
    "heraklion-city-highlights-tour",
    "heraklion-archaeological-museum-tour",
    "heraklion-beaches-tour",
  ],
  "5": [
    "knossos-palace-shore-excursion",
    "heraklion-archaeological-museum-tour",
    "heraklion-city-highlights-tour",
  ],
  "6": [
    "knossos-palace-shore-excursion",
    "cretan-wine-tour",
    "heraklion-city-highlights-tour",
  ],
  "8": [
    "knossos-palace-shore-excursion",
    "lasithi-plateau-tour",
    "cretan-villages-tour",
  ],
  "10": [
    "spinalonga-elounda-tour",
    "lasithi-plateau-tour",
    "knossos-palace-shore-excursion",
  ],
};

export function CruisePlanner() {
  const [hours, setHours] = useState<Hours | "">("");

  const matches =
    hours !== ""
      ? recommendations[hours]
          .map((slug) => excursions.find((e) => e.slug === slug))
          .filter((e): e is (typeof excursions)[number] => e !== undefined)
      : [];

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">
            How many hours do you have ashore in Heraklion, Crete?
          </span>
          <select
            value={hours}
            onChange={(e) => setHours(e.target.value as Hours | "")}
            className="mt-2 w-full max-w-md rounded-lg border border-slate-300 px-3 py-2"
          >
            <option value="">Select port time…</option>
            <option value="4">About 4 hours</option>
            <option value="5">About 5 hours</option>
            <option value="6">About 6 hours</option>
            <option value="8">8+ hours</option>
            <option value="10">10+ hours</option>
          </select>
        </label>
        {hours === "4" && (
          <p className="mt-4 text-sm text-amber-800 bg-amber-50 rounded-lg p-3">
            Short turnaround — stay close to the port. The old town, the
            Archaeological Museum, and a quick beach at Amoudara all work well.
            Avoid long day trips to eastern or mountain Crete.
          </p>
        )}
        {hours === "10" && (
          <p className="mt-4 text-sm text-blue-800 bg-blue-50 rounded-lg p-3">
            Extended day — a full-day trip to Spinalonga &amp; Elounda or the
            Lasithi Plateau becomes realistic. Confirm the operator&apos;s
            return-to-ship commitment for the long transfer.
          </p>
        )}
      </div>

      {matches.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Suggested excursions for your port day
          </h2>
          <ul className="mt-4 space-y-3">
            {matches.map((excursion) => (
              <li
                key={excursion.slug}
                className="rounded-lg border border-slate-200 bg-white p-4"
              >
                <Link
                  href={excursion.path}
                  className="font-semibold text-blue-800 hover:text-blue-950"
                >
                  {excursion.title}
                </Link>
                <p className="mt-1 text-sm text-slate-600">{excursion.summary}</p>
                <p className="mt-2 text-xs text-slate-500">
                  {excursion.duration} · Return confidence:{" "}
                  {excursion.returnConfidence}
                </p>
              </li>
            ))}
          </ul>
          <Link
            href={`/enquire?hours=${hours}`}
            className="mt-6 inline-block rounded-full bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-900"
          >
            Enquire with these preferences
          </Link>
        </div>
      )}
    </div>
  );
}
