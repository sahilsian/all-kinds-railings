import { NextRequest, NextResponse } from 'next/server';
import { siteConfig } from '@/lib/siteConfig';

/**
 * Receives quote-form submissions from <QuoteForm />.
 *
 * BY DEFAULT it just logs to the server console and returns 200 — so the funnel
 * works out of the box on Vercel even before you configure email.
 *
 * To deliver leads via email, set RESEND_API_KEY + LEADS_TO_EMAIL in your Vercel
 * project settings (Settings → Environment Variables). The Resend SDK call below
 * will start working automatically.
 *
 *   npm install resend
 *   # then uncomment the Resend block.
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Body = Record<string, unknown>;

function honeypotPassed(_body: Body) {
  // Add bot trap fields here later if spam picks up. For now, always pass.
  return true;
}

function formatPlainText(body: Body) {
  const lines = [
    `--- New Lead from ${siteConfig.url} ---`,
    `Submitted: ${new Date().toISOString()}`,
    '',
    ...Object.entries(body).map(([k, v]) => `${k}: ${String(v ?? '')}`)
  ];
  return lines.join('\n');
}

function formatHtml(body: Body) {
  const rows = Object.entries(body)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#666;font-size:13px;text-transform:capitalize;">${k}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#111;font-size:14px;">${String(v ?? '')}</td></tr>`
    )
    .join('');
  return `<!doctype html><html><body style="font-family:Arial,sans-serif;background:#fafafa;padding:24px;">
    <h2 style="color:#B0182B;margin:0 0 8px;">New Quote Request</h2>
    <p style="color:#666;margin:0 0 16px;font-size:13px;">From ${siteConfig.url}</p>
    <table style="border-collapse:collapse;width:100%;background:white;border:1px solid #eee;border-radius:8px;overflow:hidden;">${rows}</table>
  </body></html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Body;

    if (!honeypotPassed(body)) {
      return NextResponse.json({ ok: true }); // silently drop spam
    }

    // ---- ALWAYS log to server output (visible in `vercel logs`) ----
    // eslint-disable-next-line no-console
    console.log('[quote-lead]', JSON.stringify(body, null, 2));

    // ---- OPTIONAL: send email via Resend ----
    // 1) `npm install resend`
    // 2) Set RESEND_API_KEY + LEADS_TO_EMAIL in Vercel env vars
    // 3) Uncomment:
    //
    // const { Resend } = await import('resend');
    // const apiKey = process.env.RESEND_API_KEY;
    // const to = process.env.LEADS_TO_EMAIL;
    // if (apiKey && to) {
    //   const resend = new Resend(apiKey);
    //   await resend.emails.send({
    //     from: `All Kinds Railings <leads@${new URL(siteConfig.url).host}>`,
    //     to: to.split(',').map(s => s.trim()),
    //     subject: `New quote request — ${String(body.name ?? 'Unknown')} (${String(body.city ?? '')})`,
    //     text: formatPlainText(body),
    //     html: formatHtml(body),
    //     reply_to: String(body.email ?? '')
    //   });
    // }

    // Suppress unused-warnings until enabled
    void formatPlainText; void formatHtml;

    return NextResponse.json({ ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[quote-lead] error', err);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}
