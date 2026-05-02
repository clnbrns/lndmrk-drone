'use client';

import { useState } from 'react';

/** Read a browser cookie by name. Returns '' if not found. */
function getCookie(name: string): string {
  if (typeof document === 'undefined') return '';
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : '';
}

/** Fire a Meta Pixel event safely (guards against ad blockers). */
function trackMetaEvent(eventName: string, params: Record<string, unknown>, eventID: string) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fbq = typeof window !== 'undefined' ? (window as any).fbq : undefined;
    if (typeof fbq === 'function') {
      fbq('track', eventName, params, { eventID });
    }
  } catch {
    // Silently fail — ad blockers or SSR environments
  }
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const name    = (form.elements.namedItem('name')    as HTMLInputElement).value;
    const email   = (form.elements.namedItem('email')   as HTMLInputElement).value;
    const phone   = (form.elements.namedItem('phone')   as HTMLInputElement).value;
    const service = (form.elements.namedItem('service') as HTMLSelectElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    // Generate a unique event ID for deduplication between browser pixel and CAPI
    const eventID = crypto.randomUUID();

    // Capture Meta attribution cookies for server-side CAPI forwarding
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, service, message, eventID, fbp, fbc }),
      });

      if (res.ok) {
        // Fire browser-side Lead event — event_id matches the CAPI call for deduplication
        trackMetaEvent('Lead', { content_name: service }, eventID);
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-brand-card border border-brand-teal rounded-xl p-10 text-center">
        <div className="mb-4 flex justify-center">
          <svg className="w-12 h-12 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <polyline points="9 12 11 14 15 10" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-brand-text mb-2">Message Sent!</h2>
        <p className="text-brand-muted">
          Thanks — we&apos;ll get back to you within one business day with a custom quote.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-brand-teal text-sm hover:text-brand-accent transition-colors"
        >
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      aria-label="Contact and quote request form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-brand-muted text-sm font-medium mb-2">
            Full Name <span className="text-brand-accent" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className="w-full bg-brand-card border border-brand-border rounded-lg px-4 py-3 text-brand-text placeholder:text-brand-faint focus:outline-none focus:border-brand-teal transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-brand-muted text-sm font-medium mb-2">
            Email Address <span className="text-brand-accent" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className="w-full bg-brand-card border border-brand-border rounded-lg px-4 py-3 text-brand-text placeholder:text-brand-faint focus:outline-none focus:border-brand-teal transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-brand-muted text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            placeholder="+1 (555) 000-0000"
            className="w-full bg-brand-card border border-brand-border rounded-lg px-4 py-3 text-brand-text placeholder:text-brand-faint focus:outline-none focus:border-brand-teal transition-colors"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-brand-muted text-sm font-medium mb-2">
            Service Needed <span className="text-brand-accent" aria-hidden="true">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full bg-brand-card border border-brand-border rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-teal transition-colors"
          >
            <option value="" disabled>Select a service…</option>
            <option value="Real Estate Aerial Photography">Real Estate Aerial Photography</option>
            <option value="Construction Drone Photography">Construction Drone Photography</option>
            <option value="Film & Media Cinematography">Film &amp; Media Cinematography</option>
            <option value="Drone Inspection Services">Drone Inspection Services</option>
            <option value="Event Drone Coverage">Event Drone Coverage</option>
            <option value="Government & Public Safety">Government &amp; Public Safety</option>
            <option value="Other / Not Sure">Other / Not Sure</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-brand-muted text-sm font-medium mb-2">
          Project Details <span className="text-brand-accent" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Location, project date, deliverables needed, timeline, any special requirements…"
          className="w-full bg-brand-card border border-brand-border rounded-lg px-4 py-3 text-brand-text placeholder:text-brand-faint focus:outline-none focus:border-brand-teal transition-colors resize-y"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm">
          Something went wrong — please try again or email us directly at colinmburns@gmail.com.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-brand-accent text-black font-semibold px-8 py-3.5 rounded-lg hover:bg-brand-accentdim transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
