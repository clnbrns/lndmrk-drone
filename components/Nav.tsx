'use client';

import Link from 'next/link';
import { useState } from 'react';
import { services } from '@/lib/services';

const LndmrkLogo = () => (
  <svg
    viewBox="0 0 100 130"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="w-9 h-auto flex-shrink-0"
  >
    <defs>
      <clipPath id="pin-clip-nav">
        <path d="M50 4 C24 4 4 24 4 50 C4 78 50 126 50 126 C50 126 96 78 96 50 C96 24 76 4 50 4 Z" />
      </clipPath>
    </defs>
    <path
      d="M50 4 C24 4 4 24 4 50 C4 78 50 126 50 126 C50 126 96 78 96 50 C96 24 76 4 50 4 Z"
      fill="#1c3a28"
    />
    <rect x="4" y="4" width="92" height="46" fill="#1e3d5c" clipPath="url(#pin-clip-nav)" />
    <circle cx="50" cy="50" r="20" fill="none" stroke="#4a9e74" strokeWidth="2.5" />
    <line x1="50" y1="50" x2="32" y2="33" stroke="#4a9e74" strokeWidth="1.8" />
    <line x1="50" y1="50" x2="68" y2="33" stroke="#4a9e74" strokeWidth="1.8" />
    <line x1="50" y1="50" x2="30" y2="58" stroke="#4a9e74" strokeWidth="1.8" />
    <line x1="50" y1="50" x2="70" y2="58" stroke="#4a9e74" strokeWidth="1.8" />
    <circle cx="32" cy="33" r="7" fill="#4a9e74" />
    <circle cx="68" cy="33" r="7" fill="#4a9e74" />
    <circle cx="30" cy="58" r="7" fill="#4a9e74" />
    <circle cx="70" cy="58" r="7" fill="#4a9e74" />
    <circle cx="50" cy="50" r="5.5" fill="#b8df3c" />
  </svg>
);

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-surface border-b border-brand-border">
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 flex-shrink-0"
          aria-label="LNDMRK Drone — home"
        >
          <LndmrkLogo />
          <span className="flex flex-col leading-none">
            <strong className="text-brand-text font-black text-base tracking-wider">LNDMRK</strong>
            <span className="text-brand-teal text-[0.5rem] font-semibold tracking-[0.3em] uppercase">
              DRONE
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          <li>
            <Link
              href="/"
              className="text-brand-muted hover:text-brand-text text-sm font-medium transition-colors"
            >
              Home
            </Link>
          </li>

          {/* Services dropdown */}
          <li className="relative group">
            <button
              className="flex items-center gap-1 text-brand-muted hover:text-brand-text text-sm font-medium transition-colors"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 hidden group-hover:block"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <div className="bg-brand-card border border-brand-border rounded-xl shadow-2xl overflow-hidden">
                <Link
                  href="/services"
                  className="block px-4 py-3 text-brand-accent text-sm font-semibold border-b border-brand-border hover:bg-brand-surface transition-colors"
                >
                  All Services →
                </Link>
                {services.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-brand-surface transition-colors"
                  >
                    <span className="text-lg flex-shrink-0">{svc.icon}</span>
                    <span className="text-brand-muted hover:text-brand-text text-sm">
                      {svc.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li>
            <Link
              href="/portfolio"
              className="text-brand-muted hover:text-brand-text text-sm font-medium transition-colors"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/locations"
              className="text-brand-muted hover:text-brand-text text-sm font-medium transition-colors"
            >
              Locations
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-brand-muted hover:text-brand-text text-sm font-medium transition-colors"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-brand-muted hover:text-brand-text text-sm font-medium transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="bg-brand-accent text-black text-sm font-semibold px-5 py-2 rounded-lg hover:bg-brand-accentdim transition-colors"
            >
              Get a Quote
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-0.5 bg-brand-text transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-brand-text transition-all ${mobileOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-brand-text transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-card border-t border-brand-border max-h-[80vh] overflow-y-auto">
          <ul className="px-6 py-4 space-y-1" role="list">
            <li>
              <Link
                href="/"
                className="block py-2.5 text-brand-muted hover:text-brand-text font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block py-2.5 text-brand-accent font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                All Services
              </Link>
              <ul className="pl-4 space-y-0.5 mt-1" role="list">
                {services.map((svc) => (
                  <li key={svc.slug}>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="flex items-center gap-2 py-2 text-brand-muted hover:text-brand-text text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span>{svc.icon}</span>
                      <span>{svc.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="block py-2.5 text-brand-muted hover:text-brand-text font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/locations"
                className="block py-2.5 text-brand-muted hover:text-brand-text font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block py-2.5 text-brand-muted hover:text-brand-text font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2.5 text-brand-muted hover:text-brand-text font-medium"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href="/contact"
                className="block bg-brand-accent text-black font-semibold px-5 py-3 rounded-lg text-center hover:bg-brand-accentdim transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
