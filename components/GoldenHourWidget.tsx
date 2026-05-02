'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Fort Worth, TX
const LAT = 32.7555;
const LON = -97.3308;
const DEG = Math.PI / 180;

interface SunTimes {
  goldenMorningStart: Date;
  goldenMorningEnd: Date;
  goldenEveningStart: Date;
  goldenEveningEnd: Date;
}

function calcSunTimes(date: Date): SunTimes | null {
  const year = date.getFullYear();
  const startOfYear = Date.UTC(year, 0, 0);
  const D = Math.floor((Date.UTC(year, date.getMonth(), date.getDate()) - startOfYear) / 86400000);

  // Solar declination (degrees)
  const dec = -23.45 * Math.cos(DEG * (360 / 365) * (D + 10));

  // Equation of time (minutes)
  const B = DEG * (360 / 365) * (D - 81);
  const eot = 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);

  // Hour angle at sunrise/sunset (-0.8333° accounts for atmospheric refraction)
  const cosHA =
    (Math.sin(-0.8333 * DEG) - Math.sin(LAT * DEG) * Math.sin(dec * DEG)) /
    (Math.cos(LAT * DEG) * Math.cos(dec * DEG));

  if (Math.abs(cosHA) > 1) return null; // polar day/night (won't happen in Texas)

  const ha = Math.acos(cosHA) / DEG; // hour angle in degrees

  // Solar noon in UTC hours
  const solarNoonUTC = 12 - LON / 15 - eot / 60;
  const sunriseUTC = solarNoonUTC - ha / 15;
  const sunsetUTC  = solarNoonUTC + ha / 15;

  const toDate = (utcHours: number): Date => {
    const d = new Date(date);
    d.setUTCHours(0, 0, 0, 0);
    d.setTime(d.getTime() + utcHours * 3_600_000);
    return d;
  };

  return {
    goldenMorningStart: toDate(sunriseUTC),
    goldenMorningEnd:   toDate(sunriseUTC + 1),
    goldenEveningStart: toDate(sunsetUTC - 1),
    goldenEveningEnd:   toDate(sunsetUTC),
  };
}

function fmt(d: Date): string {
  return d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}

export function GoldenHourWidget() {
  const [times, setTimes] = useState<SunTimes | null>(null);

  useEffect(() => {
    setTimes(calcSunTimes(new Date()));
  }, []);

  return (
    <div className="mt-8 bg-brand-card border border-brand-border rounded-xl p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <svg
          className="w-5 h-5 text-brand-accent flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
        <div>
          <p className="text-brand-text font-semibold text-sm">Golden Hour</p>
          <p className="text-brand-faint text-xs">Fort Worth, TX — Today</p>
        </div>
      </div>

      {times ? (
        <div className="space-y-3">
          {/* Morning */}
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" aria-hidden="true" />
            <div>
              <p className="text-brand-muted text-xs uppercase tracking-widest mb-0.5">Morning</p>
              <p className="text-brand-text text-sm font-semibold">
                {fmt(times.goldenMorningStart)} – {fmt(times.goldenMorningEnd)}
              </p>
            </div>
          </div>

          {/* Evening */}
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 flex-shrink-0" aria-hidden="true" />
            <div>
              <p className="text-brand-muted text-xs uppercase tracking-widest mb-0.5">Evening</p>
              <p className="text-brand-text text-sm font-semibold">
                {fmt(times.goldenEveningStart)} – {fmt(times.goldenEveningEnd)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Skeleton while calculating */
        <div className="space-y-3">
          {[0, 1].map((i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-border mt-1.5 flex-shrink-0" />
              <div className="flex-1 space-y-1.5">
                <div className="shimmer h-2.5 w-16 rounded" />
                <div className="shimmer h-4 w-32 rounded" />
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="text-brand-faint text-xs mt-4 leading-relaxed">
        Golden hour light is ideal for aerial photography — warm tones, long shadows, maximum depth.
      </p>

      <Link
        href="#contact-form"
        className="mt-4 block text-center text-brand-accent text-xs font-semibold uppercase tracking-wide hover:text-brand-accentdim transition-colors"
      >
        Schedule a golden hour shoot →
      </Link>
    </div>
  );
}
