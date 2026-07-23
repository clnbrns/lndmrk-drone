import Image from 'next/image';
import Link from 'next/link';
import { HeroBackgroundVideo } from './HeroBackgroundVideo';

interface HeroSectionProps {
  /** Small pill badge above the eyebrow — e.g. "FAA Part 107 Certified" */
  badge?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  /** Optional full-bleed background photo. Path relative to /public */
  bgImage?: string;
  /** Alt text for bgImage */
  bgImageAlt?: string;
  /** Optional looping background video. Path relative to /public (e.g. "/videos/reel-2.mp4").
   *  When both bgVideo and bgImage are set, the image is used as the video poster (shown while video loads). */
  bgVideo?: string;
}

function DroneVisual() {
  return (
    <div className="relative w-full h-full min-h-72 flex items-center justify-center select-none">
      {/* Aerial grid lines suggesting a drone's-eye view */}
      <svg
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-sm md:max-w-none opacity-90"
        aria-hidden="true"
      >
        {/* Perspective grid */}
        <g stroke="#263c28" strokeWidth="1">
          {/* Horizontal lines */}
          {[0.18, 0.3, 0.42, 0.54, 0.66, 0.78].map((t, i) => {
            const y = 480 * t;
            const lx = 240 - (240 * t);
            const rx = 240 + (240 * t);
            return <line key={`h${i}`} x1={lx} y1={y} x2={rx} y2={y} />;
          })}
          {/* Vertical / radial lines from vanishing point */}
          {[-3, -2, -1, 0, 1, 2, 3].map((n, i) => (
            <line key={`v${i}`} x1={240} y1={86} x2={240 + n * 80} y2={374} />
          ))}
        </g>

        {/* Outer ring */}
        <circle cx="240" cy="240" r="160" stroke="#263c28" strokeWidth="1" strokeDasharray="6 6" />

        {/* Mid ring */}
        <circle cx="240" cy="240" r="90" stroke="#3e5a3a" strokeWidth="1" />

        {/* Crosshair arms */}
        <line x1="240" y1="80" x2="240" y2="160" stroke="#4a9e74" strokeWidth="1.5" />
        <line x1="240" y1="320" x2="240" y2="400" stroke="#4a9e74" strokeWidth="1.5" />
        <line x1="80" y1="240" x2="160" y2="240" stroke="#4a9e74" strokeWidth="1.5" />
        <line x1="320" y1="240" x2="400" y2="240" stroke="#4a9e74" strokeWidth="1.5" />

        {/* Corner tick marks */}
        {[[-1,-1],[1,-1],[1,1],[-1,1]].map(([sx, sy], i) => (
          <g key={i} transform={`translate(${240 + sx * 90}, ${240 + sy * 90})`}>
            <line x1={sx * -14} y1="0" x2="0" y2="0" stroke="#4a9e74" strokeWidth="2" />
            <line x1="0" y1={sy * -14} x2="0" y2="0" stroke="#4a9e74" strokeWidth="2" />
          </g>
        ))}

        {/* Drone arms */}
        <line x1="240" y1="240" x2="176" y2="176" stroke="#4a9e74" strokeWidth="2" opacity="0.7" />
        <line x1="240" y1="240" x2="304" y2="176" stroke="#4a9e74" strokeWidth="2" opacity="0.7" />
        <line x1="240" y1="240" x2="176" y2="304" stroke="#4a9e74" strokeWidth="2" opacity="0.7" />
        <line x1="240" y1="240" x2="304" y2="304" stroke="#4a9e74" strokeWidth="2" opacity="0.7" />

        {/* Rotor circles */}
        {[[176,176],[304,176],[176,304],[304,304]].map(([cx,cy],i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="26" stroke="#4a9e74" strokeWidth="1.5" fill="#142016" />
            <circle cx={cx} cy={cy} r="6" fill="#4a9e74" opacity="0.6" />
          </g>
        ))}

        {/* Center body */}
        <rect x="218" y="218" width="44" height="44" rx="8" fill="#1c2e1e" stroke="#4a9e74" strokeWidth="1.5" />
        {/* Accent center dot */}
        <circle cx="240" cy="240" r="7" fill="#b8df3c" />

        {/* Altitude readout - stylized HUD text */}
        <text x="256" y="228" fill="#b8df3c" fontSize="9" fontFamily="monospace" opacity="0.8">ALT</text>
        <text x="256" y="238" fill="#4a9e74" fontSize="8" fontFamily="monospace" opacity="0.6">400ft</text>

        {/* Signal lines top-right */}
        <g transform="translate(370,110)" stroke="#b8df3c" strokeWidth="1" opacity="0.5">
          <path d="M0,16 A22,22 0 0 1 22,0" fill="none" />
          <path d="M0,28 A34,34 0 0 1 34,0" fill="none" />
          <path d="M0,40 A46,46 0 0 1 46,0" fill="none" />
          <circle cx="0" cy="0" r="3" fill="#b8df3c" opacity="0.8" />
        </g>

        {/* Compass cardinal labels */}
        <text x="234" y="70" fill="#7aaa6e" fontSize="11" fontFamily="monospace" fontWeight="bold" opacity="0.7">N</text>
        <text x="234" y="422" fill="#7aaa6e" fontSize="11" fontFamily="monospace" fontWeight="bold" opacity="0.7">S</text>
        <text x="62" y="245" fill="#7aaa6e" fontSize="11" fontFamily="monospace" fontWeight="bold" opacity="0.7">W</text>
        <text x="408" y="245" fill="#7aaa6e" fontSize="11" fontFamily="monospace" fontWeight="bold" opacity="0.7">E</text>

        {/* Scanning arc animation suggestion (static) */}
        <path
          d="M240,240 L240,150 A90,90 0 0 1 303.64,276.36 Z"
          fill="rgba(184,223,60,0.04)"
          stroke="rgba(184,223,60,0.15)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

export function HeroSection({
  badge,
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref = '/contact',
  secondaryCtaLabel,
  secondaryCtaHref,
  bgImage,
  bgImageAlt = 'Aerial drone photography',
  bgVideo,
}: HeroSectionProps) {
  const hasBackground = !!(bgImage || bgVideo);

  return (
    <section className="relative bg-brand-bg overflow-hidden">
      {/* Background photo — also serves as the visible frame while bgVideo loads.
          Rendered with priority so it (not the video) is what LCP measures. */}
      {bgImage && (
        <Image
          src={bgImage}
          alt={bgImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      )}

      {/* Looping background video — loads in after first paint, see HeroBackgroundVideo */}
      {bgVideo && <HeroBackgroundVideo src={bgVideo} />}

      {/* Dark overlay — shown whenever there's a photo or video background */}
      {hasBackground && (
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(12,27,13,0.92) 40%, rgba(12,27,13,0.60) 100%)' }}
          aria-hidden="true"
        />
      )}

      {/* Background glow (shown when no photo) */}
      {!bgImage && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 55% 60% at 75% 50%, rgba(74,158,116,0.06) 0%, transparent 65%), radial-gradient(ellipse 40% 40% at 20% 60%, rgba(30,61,92,0.12) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div>
            {badge && (
              <div className="inline-flex items-center gap-2 border border-brand-teal/40 text-brand-teal text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal inline-block" aria-hidden="true" />
                {badge}
              </div>
            )}
            {eyebrow && (
              <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-5">
                {eyebrow}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-text leading-tight tracking-tight mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-brand-muted text-lg max-w-md mb-10 leading-relaxed">{subtitle}</p>
            )}
            {(ctaLabel || secondaryCtaLabel) && (
              <div className="flex flex-wrap gap-4">
                {ctaLabel && (
                  <Link
                    href={ctaHref}
                    className="bg-brand-accent text-black font-bold px-7 py-3.5 rounded-lg hover:bg-brand-accentdim transition-colors text-sm uppercase tracking-wide"
                  >
                    {ctaLabel}
                  </Link>
                )}
                {secondaryCtaLabel && secondaryCtaHref && (
                  <Link
                    href={secondaryCtaHref}
                    className="border border-brand-teal text-brand-teal font-semibold px-7 py-3.5 rounded-lg hover:bg-brand-teal hover:text-black transition-colors text-sm uppercase tracking-wide"
                  >
                    {secondaryCtaLabel}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Visual column — drone HUD graphic (hidden when bg photo or video fills this role) */}
          {!hasBackground && (
            <div className="hidden lg:block">
              <DroneVisual />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
