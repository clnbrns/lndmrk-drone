import Link from 'next/link';
import { services } from '@/lib/services';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-surface border-t border-brand-border">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="flex flex-col leading-none">
                <strong className="text-brand-text font-black text-lg tracking-wider">LNDMRK</strong>
                <span className="text-brand-teal text-[0.55rem] font-semibold tracking-[0.3em] uppercase">
                  DRONE
                </span>
              </span>
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed max-w-xs">
              Professional aerial photography and videography. FAA Part 107 certified. Fully insured.
              Serving [PLACEHOLDER: region].
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-brand-text font-semibold text-sm uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="space-y-2" role="list">
              {services.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-brand-muted hover:text-brand-text text-sm transition-colors"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-brand-text font-semibold text-sm uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="space-y-2" role="list">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
                { label: 'Sitemap', href: '/sitemap.xml' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-muted hover:text-brand-text text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-brand-text font-semibold text-sm uppercase tracking-widest mb-4">
              Contact
            </h3>
            <address className="not-italic space-y-2 text-sm text-brand-muted">
              <p>[PLACEHOLDER: City, State ZIP]</p>
              <p>
                <a href="tel:+15550000000" className="hover:text-brand-text transition-colors">
                  [PLACEHOLDER: Phone]
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@lndmrkdrone.com"
                  className="hover:text-brand-text transition-colors"
                >
                  hello@lndmrkdrone.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-brand-border pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-brand-faint text-sm">
            &copy; {year} LNDMRK Drone. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-brand-faint hover:text-brand-muted transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-brand-faint hover:text-brand-muted transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
