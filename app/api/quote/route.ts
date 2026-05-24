import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { siteConfig } from '@/lib/siteConfig';

/**
 * Receives quote-form submissions from <QuoteForm /> and emails them via Resend.
 *
 * Required env vars (set in Vercel → Project Settings → Environment Variables):
 *   RESEND_API_KEY      — your Resend API key (https://resend.com)
 *   LEADS_TO_EMAIL      — primary inbox that should receive every lead
 *   RESEND_FROM_EMAIL   — verified "from" address (e.g. leads@allkindsrailings.com)
 *
 * Optional:
 *   LEADS_CC_EMAIL      — comma-separated list of CC recipients
 *                         (e.g. "sarb@allkindsrailings.com, sales@allkindsrailings.com")
 *   LEADS_BCC_EMAIL     — comma-separated list of BCC recipients
 *
 * Leads are also logged to the server console regardless of email config,
 * so submissions are never lost.
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Body = Record<string, unknown>;

function honeypotPassed(_body: Body) {
  // Add bot trap fields here later if spam picks up. For now, always pass.
  return true;
}

function splitList(value: string | undefined): string[] {
  if (!value) return [];
  return value
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);
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
        `<tr><td style="padding:8px 14px;border-bottom:1px solid #eee;color:#666;font-size:13px;text-transform:capitalize;white-space:nowrap;">${escapeHtml(k)}</td><td style="padding:8px 14px;border-bottom:1px solid #eee;color:#111;font-size:14px;">${escapeHtml(String(v ?? ''))}</td></tr>`
    )
    .join('');
  return `<!doctype html><html><body style="font-family:Arial,Helvetica,sans-serif;background:#fafafa;padding:24px;margin:0;">
    <div style="max-width:640px;margin:0 auto;">
      <h2 style="color:#B0182B;margin:0 0 6px;font-family:Georgia,serif;">New Quote Request</h2>
      <p style="color:#666;margin:0 0 18px;font-size:13px;">From <a href="${siteConfig.url}" style="color:#B0182B;text-decoration:none;">${siteConfig.url}</a></p>
      <table style="border-collapse:collapse;width:100%;background:white;border:1px solid #eee;border-radius:8px;overflow:hidden;">${rows}</table>
      <p style="color:#999;margin:18px 0 0;font-size:12px;">Reply directly to this email to respond to the customer.</p>
    </div>
  </body></html>`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Body;

    if (!honeypotPassed(body)) {
      return NextResponse.json({ ok: true }); // silently drop spam
    }

    // Always log so leads are never lost (visible via `vercel logs`).
    // eslint-disable-next-line no-console
    console.log('[quote-lead]', JSON.stringify(body, null, 2));

    const apiKey = process.env.RESEND_API_KEY;
    const to = splitList(process.env.LEADS_TO_EMAIL);
    const cc = splitList(process.env.LEADS_CC_EMAIL);
    const bcc = splitList(process.env.LEADS_BCC_EMAIL);
    const fromAddress =
      process.env.RESEND_FROM_EMAIL ||
      `All Kinds Railings <leads@${new URL(siteConfig.url).host}>`;

    if (apiKey && to.length > 0) {
      const resend = new Resend(apiKey);
      const subject = `New quote request — ${String(body.name ?? 'Unknown')}${
        body.city ? ` (${String(body.city)})` : ''
      }`;

      const result = await resend.emails.send({
        from: fromAddress,
        to,
        cc: cc.length ? cc : undefined,
        bcc: bcc.length ? bcc : undefined,
        replyTo: typeof body.email === 'string' ? body.email : undefined,
        subject,
        text: formatPlainText(body),
        html: formatHtml(body)
      });

      if (result.error) {
        // eslint-disable-next-line no-console
        console.error('[quote-lead] resend error', result.error);
        // Don't fail the user — we already logged the lead.
      }
    } else {
      // eslint-disable-next-line no-console
      console.warn(
        '[quote-lead] email not sent — missing RESEND_API_KEY or LEADS_TO_EMAIL env var.'
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[quote-lead] error', err);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}
