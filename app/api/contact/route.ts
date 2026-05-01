import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { createHash } from 'crypto';

const resend = new Resend(process.env.RESEND_API_KEY);

// ---------- Allowed service values (must match ContactForm.tsx) ----------

const ALLOWED_SERVICES = new Set([
  'Real Estate Aerial Photography',
  'Construction Drone Photography',
  'Film & Media Cinematography',
  'Drone Inspection Services',
  'Event Drone Coverage',
  'Government & Public Safety',
  'Other / Not Sure',
]);

// ---------- HTML escaping (prevents injection via email client) ----------

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ---------- Meta CAPI helpers ----------

function hashData(value: string): string {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
}

function hashPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  const normalized = digits.length === 10 ? `1${digits}` : digits;
  return hashData(normalized);
}

interface CapiPayload {
  eventID: string;
  email: string;
  phone?: string;
  fbp?: string;
  fbc?: string;
  service: string;
  sourceUrl: string;
}

async function sendCapiLeadEvent(payload: CapiPayload): Promise<void> {
  const pixelId = process.env.META_PIXEL_ID;
  const token = process.env.META_CAPI_TOKEN;

  if (!pixelId || !token) {
    console.warn('CAPI: META_PIXEL_ID or META_CAPI_TOKEN not set — skipping');
    return;
  }

  const userData: Record<string, string> = {
    em: hashData(payload.email),
  };

  if (payload.phone) userData.ph = hashPhone(payload.phone);
  if (payload.fbp)   userData.fbp = payload.fbp;
  if (payload.fbc)   userData.fbc = payload.fbc;

  const body = JSON.stringify({
    data: [
      {
        event_name: 'Lead',
        event_time: Math.floor(Date.now() / 1000),
        event_id: payload.eventID,
        event_source_url: payload.sourceUrl,
        action_source: 'website',
        user_data: userData,
        custom_data: { content_name: payload.service },
      },
    ],
  });

  const url = `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${token}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  });

  if (!res.ok) {
    const text = await res.text();
    console.error('CAPI error:', res.status, text);
  } else {
    console.info('CAPI Lead event sent, event_id:', payload.eventID);
  }
}

// ---------- Route handler ----------

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, eventID, fbp, fbc } = body;

    // Required field presence check
    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Validate service against allowed values — prevents injection via arbitrary strings
    if (!ALLOWED_SERVICES.has(service)) {
      return NextResponse.json({ error: 'Invalid service selection.' }, { status: 400 });
    }

    // Escape all user input before interpolating into email HTML
    const safeName    = escapeHtml(String(name));
    const safeEmail   = escapeHtml(String(email));
    const safePhone   = phone ? escapeHtml(String(phone)) : '—';
    const safeService = escapeHtml(String(service));
    const safeMessage = escapeHtml(String(message));

    // 1. Send notification email (blocking — we need this to succeed)
    const { error } = await resend.emails.send({
      from: 'LNDMRK Drone <onboarding@resend.dev>',
      to: ['colinmburns@gmail.com'],
      replyTo: email,
      subject: `New Quote Request: ${safeService} — ${safeName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #1a3520; border-bottom: 2px solid #b8df3c; padding-bottom: 12px;">
            New Quote Request — LNDMRK Drone
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold; width: 140px;">Name</td>
              <td style="padding: 8px 12px;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold;">Email</td>
              <td style="padding: 8px 12px;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold;">Phone</td>
              <td style="padding: 8px 12px;">${safePhone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold;">Service</td>
              <td style="padding: 8px 12px;">${safeService}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #f9f9f9; border-left: 4px solid #b8df3c;">
            <p style="font-weight: bold; margin: 0 0 8px;">Project Details</p>
            <p style="margin: 0; white-space: pre-wrap;">${safeMessage}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Hit Reply to respond directly to ${safeName} at ${safeEmail}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    // 2. Fire CAPI Lead event (non-blocking — CAPI failure never breaks the form)
    if (eventID) {
      const sourceUrl =
        request.headers.get('referer') ?? 'https://lndmrkdrone.com/contact';

      void sendCapiLeadEvent({
        eventID,
        email,
        phone: phone || undefined,
        fbp: fbp || undefined,
        fbc: fbc || undefined,
        service,
        sourceUrl,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
