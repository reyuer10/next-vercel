import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const allowedServices = [
  "Custom web application",
  "Business system (HRIS, scoreboard, etc.)",
  "Website",
  "Mobile app",
  "Something else",
];

const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function rateLimited(ip: string) {
  const now = Date.now();

  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);

  recent.push(now);
  hits.set(ip, recent);

  return recent.length > MAX_HITS;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* ------------------------------------------------------------------ */
/*  Brand tokens (taken from the nXde site)                            */
/* ------------------------------------------------------------------ */
const BRAND = {
  navy: "#161e36",
  navyDeep: "#10172b",
  gold: "#b08d3c",
  goldLight: "#d6b765",
  ink: "#161e36",
  body: "#4a5266",
  muted: "#7b8497",
  line: "#e6e8ee",
  page: "#f4f5f8",
  panel: "#f8f8fa",
  font: "'Helvetica Neue', Helvetica, Arial, sans-serif",
};

/**
 * Emails can't load files from your computer, so the logo must come from your
 * live site. Files in Next.js /public are served from the site root, so
 * public/img/logo/nodex_dark.png becomes <site>/img/logo/nodex_dark.png.
 * Set NEXT_PUBLIC_SITE_URL (e.g. https://yourdomain.com) in your env.
 */
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nxdesystems.com/"
).replace(/\/$/, "");
const LOGO_URL = `${SITE_URL}/img/logo/nodex_dark.png`;

/** Text wordmark that mirrors the logo: n + gold X + de */
function wordmark(size: number, textColor: string) {
  return `<span style="font-family:${BRAND.font};font-size:${size}px;font-weight:700;letter-spacing:-0.5px;color:${textColor};">n<span style="color:${BRAND.gold};">X</span>de</span>`;
}

function createEmailTemplate({
  name,
  email,
  service,
  details,
}: {
  name: string;
  email: string;
  service: string;
  details: string;
}) {
  const safeName = escapeHtml(name);
  const safeFirstName = escapeHtml(name.split(/\s+/)[0] ?? name);
  const safeEmail = escapeHtml(email);
  const safeService = escapeHtml(service);
  const safeDetails = escapeHtml(details);

  const replyHref = escapeHtml(
    `mailto:${email}?subject=${encodeURIComponent(`Re: ${service}`)}`,
  );

  const submittedAt = new Date().toLocaleString("en-PH", {
    timeZone: "Asia/Manila",
    dateStyle: "long",
    timeStyle: "short",
  });

  const label = `margin:0 0 4px;font-family:${BRAND.font};font-size:12px;color:${BRAND.muted};`;
  const value = `margin:0;font-family:${BRAND.font};font-size:15px;line-height:1.5;color:${BRAND.ink};`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>New project inquiry from ${safeName}</title>
</head>

<body style="margin:0;padding:0;background-color:${BRAND.page};">

  <!-- Inbox preview text -->
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;font-size:1px;line-height:1px;color:${BRAND.page};">
    ${safeName} is asking about: ${safeService}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${BRAND.page}" style="background-color:${BRAND.page};">
    <tr>
      <td align="center" style="padding:36px 12px;">

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:#ffffff;border:1px solid ${BRAND.line};border-radius:12px;overflow:hidden;">

          <!-- Top rule (matches the site header) -->
          <tr>
            <td height="3" bgcolor="${BRAND.navy}" style="height:3px;line-height:3px;font-size:0;background-color:${BRAND.navy};">&nbsp;</td>
          </tr>

          <!-- Logo -->
          <tr>
            <td align="center" style="padding:44px 32px 8px;">
              <img
                src="${LOGO_URL}"
                alt="nXde"
                width="200"
                style="display:block;width:200px;max-width:100%;height:auto;margin:0 auto;border:0;outline:none;text-decoration:none;font-family:${BRAND.font};font-size:40px;font-weight:700;color:${BRAND.navy};"
              />
              <p style="margin:18px 0 0;font-family:${BRAND.font};font-size:11px;font-weight:400;letter-spacing:4px;color:${BRAND.body};">
                SYSTEMS &amp; IT SOLUTIONS
              </p>
            </td>
          </tr>

          <!-- Gold divider -->
          <tr>
            <td align="center" style="padding:26px 32px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="56" height="2" bgcolor="${BRAND.gold}" style="width:56px;height:2px;line-height:2px;font-size:0;background-color:${BRAND.gold};background-image:linear-gradient(90deg,${BRAND.gold},${BRAND.goldLight},${BRAND.gold});">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Headline -->
          <tr>
            <td align="center" style="padding:34px 40px 8px;">
              <h1 style="margin:0;font-family:${BRAND.font};font-size:26px;line-height:1.3;font-weight:700;color:${BRAND.ink};">
                ${safeName} sent you a project inquiry
              </h1>
              <p style="margin:12px 0 0;font-family:${BRAND.font};font-size:15px;line-height:1.7;color:${BRAND.body};">
                Here is what they shared through your website contact form.
              </p>
            </td>
          </tr>

          <!-- Contact details -->
          <tr>
            <td style="padding:30px 32px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${BRAND.line};border-radius:10px;">
                <tr>
                  <td style="padding:18px 22px;border-bottom:1px solid ${BRAND.line};">
                    <p style="${label}">Name</p>
                    <p style="${value}font-weight:700;">${safeName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px 22px;border-bottom:1px solid ${BRAND.line};">
                    <p style="${label}">Email</p>
                    <a href="mailto:${safeEmail}" style="font-family:${BRAND.font};font-size:15px;color:${BRAND.gold};text-decoration:none;word-break:break-word;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px 22px;">
                    <p style="${label}">Service</p>
                    <p style="${value}font-weight:700;">${safeService}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:24px 32px 0;">
              <p style="${label}margin-bottom:10px;">Their message</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${BRAND.panel}" style="background-color:${BRAND.panel};border-radius:10px;">
                <tr>
                  <td width="3" bgcolor="${BRAND.gold}" style="width:3px;background-color:${BRAND.gold};font-size:0;line-height:0;">&nbsp;</td>
                  <td style="padding:20px 22px;">
                    <p style="margin:0;font-family:${BRAND.font};font-size:15px;line-height:1.75;color:${BRAND.body};white-space:pre-wrap;overflow-wrap:anywhere;">${safeDetails}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Reply button -->
          <tr>
            <td align="center" style="padding:34px 32px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" bgcolor="${BRAND.navy}" style="background-color:${BRAND.navy};border-radius:8px;">
                    <a href="${replyHref}" style="display:inline-block;padding:14px 32px;font-family:${BRAND.font};font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:8px;">
                      Reply to ${safeFirstName}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Timestamp -->
          <tr>
            <td align="center" style="padding:26px 32px 36px;">
              <p style="margin:0;font-family:${BRAND.font};font-size:12px;line-height:1.6;color:${BRAND.muted};">
                Received ${escapeHtml(submittedAt)} (Philippine Time)
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" bgcolor="${BRAND.navyDeep}" style="background-color:${BRAND.navyDeep};padding:30px 32px;">
              ${wordmark(26, "#ffffff")}
              <p style="margin:10px 0 0;font-family:${BRAND.font};font-size:10px;letter-spacing:3px;color:${BRAND.goldLight};">
                SYSTEMS &amp; IT SOLUTIONS
              </p>
              <p style="margin:18px 0 0;font-family:${BRAND.font};font-size:12px;line-height:1.7;color:#9aa3b8;">
                Automated message from your website contact form.<br />
                You can also reply directly to this email.
              </p>
            </td>
          </tr>

        </table>

        <p style="margin:18px 0 0;font-family:${BRAND.font};font-size:11px;text-align:center;color:#98a0b1;">
          &copy; ${new Date().getFullYear()} nXde. All rights reserved.
        </p>

      </td>
    </tr>
  </table>

</body>
</html>`;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const service = String(body.service ?? "").trim();
  const details = String(body.details ?? "").trim();

  // Server-side validation
  if (!name || name.length > 100) {
    return NextResponse.json({ error: "Invalid name." }, { status: 400 });
  }

  if (!emailPattern.test(email) || email.length > 200) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  if (!allowedServices.includes(service)) {
    return NextResponse.json({ error: "Invalid service." }, { status: 400 });
  }

  if (details.length < 10 || details.length > 5000) {
    return NextResponse.json({ error: "Invalid details." }, { status: 400 });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_TO_EMAIL ?? user;

  if (!user || !pass || !to) {
    console.error("Missing Gmail environment variables.");

    return NextResponse.json(
      { error: "Server not configured." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user,
      pass,
    },
  });

  try {
    await transporter.sendMail({
      from: `"nXde Website" <${user}>`,
      to,
      replyTo: {
        name,
        address: email,
      },
      subject: `New Project Inquiry: ${service} - ${name}`,

      text: `
NEW PROJECT INQUIRY

Name: ${name}
Email: ${email}
Service: ${service}

PROJECT DETAILS:
${details}

Submitted: ${new Date().toLocaleString("en-PH", {
        timeZone: "Asia/Manila",
      })}
      `.trim(),

      html: createEmailTemplate({
        name,
        email,
        service,
        details,
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send email:", err);

    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 },
    );
  }
}
