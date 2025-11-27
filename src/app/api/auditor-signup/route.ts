import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firmName,
      contactPerson,
      email,
      phone,
      registrationType,
      asicRegistrationNumber,
      jurisdictions,
      serviceAreas,
      minimumFee,
      preferredClientTypes,
      capacity,
      aboutFirm,
      website,
      source,
    } = body;

    if (!email || !firmName) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const toEmail = process.env.AUDITLINK_TO_EMAIL;
    const fromEmail = process.env.AUDITLINK_FROM_EMAIL;

    if (!toEmail || !fromEmail) {
      console.error("Email env vars not configured");
      return NextResponse.json(
        { ok: false, error: "Email configuration missing" },
        { status: 500 }
      );
    }

    const submittedAt = new Date().toLocaleString("en-AU", {
      timeZone: "Australia/Sydney",
      dateStyle: "full",
      timeStyle: "short",
    });

    const subject = `Audit Link – New auditor signup: ${firmName}`;

    const safeAboutFirm = (aboutFirm || "").toString().trim();
    const aboutFirmHtml = safeAboutFirm
      ? safeAboutFirm.replace(/\n/g, "<br/>")
      : "<em>No additional firm profile provided.</em>";

    const safeServiceAreas = (serviceAreas || "").toString().trim();
    const serviceAreasHtml = safeServiceAreas
      ? safeServiceAreas.replace(/\n/g, "<br/>")
      : "-";

    const safePreferredClients = (preferredClientTypes || "").toString().trim();
    const preferredClientsHtml = safePreferredClients
      ? safePreferredClients.replace(/\n/g, "<br/>")
      : "-";

    const safeJurisdictions = (jurisdictions || "").toString().trim();

    const html = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; color: #0f172a; background-color: #f8fafc; padding: 24px;">
        <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 10px 30px rgba(15,23,42,0.08); overflow: hidden;">

          <div style="padding: 16px 20px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; background: linear-gradient(to right, #ecfdf3, #f0fdf4);">
            <div style="display: flex; align-items: center; gap: 10px;">
              <div style="height: 32px; width: 32px; border-radius: 999px; background-color: #059669; color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px;">
                AL
              </div>
              <div>
                <div style="font-size: 13px; font-weight: 600; color: #064e3b;">AuditLink</div>
                <div style="font-size: 11px; color: #64748b;">New auditor signup</div>
              </div>
            </div>
            <div style="font-size: 11px; color: #64748b; text-align: right;">
              <div style="font-weight: 500;">Submitted</div>
              <div>${submittedAt}</div>
            </div>
          </div>

          <div style="padding: 20px;">
            <h2 style="margin: 0 0 12px 0; font-size: 18px; font-weight: 600; color: #0f172a;">
              New auditor signup – ${firmName}
            </h2>
            <p style="margin: 0 0 18px 0; font-size: 13px; color: #475569;">
              This auditor expressed interest in receiving engagements via AuditLink. You can reply directly to progress a conversation or vet them further.
            </p>

            <p style="margin: 0 0 16px 0; font-size: 11px; color: #94a3b8;">
              Source: <strong>${source || "Auditor signup page"}</strong>
            </p>

            <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600; color: #0f172a;">Contact details</h3>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; margin-bottom: 16px; font-size: 13px;">
              <tbody>
                <tr>
                  <td style="padding: 6px 8px; width: 35%; color: #64748b;">Firm / practice name</td>
                  <td style="padding: 6px 8px; font-weight: 500; color: #0f172a;">${firmName || "-"}</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 6px 8px; color: #64748b;">Contact person</td>
                  <td style="padding: 6px 8px;">${contactPerson || "-"}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 8px; color: #64748b;">Email</td>
                  <td style="padding: 6px 8px;">
                    <a href="mailto:${email}" style="color: #059669; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 6px 8px; color: #64748b;">Phone</td>
                  <td style="padding: 6px 8px;">${phone || "-"}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 8px; color: #64748b;">Website</td>
                  <td style="padding: 6px 8px;">
                    ${
                      website
                        ? `<a href="${website}" style="color:#059669; text-decoration:none;" target="_blank" rel="noopener noreferrer">${website}</a>`
                        : "-"
                    }
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 style="margin: 12px 0 8px 0; font-size: 14px; font-weight: 600; color: #0f172a;">Registration & coverage</h3>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; margin-bottom: 16px; font-size: 13px;">
              <tbody>
                <tr>
                  <td style="padding: 6px 8px; width: 35%; color: #64748b;">Registration type</td>
                  <td style="padding: 6px 8px;">${registrationType || "-"}</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 6px 8px; color: #64748b;">ASIC registration no.</td>
                  <td style="padding: 6px 8px;">${asicRegistrationNumber || "-"}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 8px; color: #64748b;">Jurisdictions</td>
                  <td style="padding: 6px 8px;">${safeJurisdictions || "-"}</td>
                </tr>
              </tbody>
            </table>

            <h3 style="margin: 12px 0 8px 0; font-size: 14px; font-weight: 600; color: #0f172a;">Services & preferences</h3>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; margin-bottom: 16px; font-size: 13px;">
              <tbody>
                <tr>
                  <td style="padding: 6px 8px; width: 35%; color: #64748b;">Service areas</td>
                  <td style="padding: 6px 8px;">${serviceAreasHtml}</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 6px 8px; color: #64748b;">Preferred client types</td>
                  <td style="padding: 6px 8px;">${preferredClientsHtml}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 8px; color: #64748b;">Indicative minimum fee</td>
                  <td style="padding: 6px 8px;">${minimumFee || "-"}</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 6px 8px; color: #64748b;">Capacity</td>
                  <td style="padding: 6px 8px;">${capacity || "-"}</td>
                </tr>
              </tbody>
            </table>

            <h3 style="margin: 12px 0 8px 0; font-size: 14px; font-weight: 600; color: #0f172a;">Firm profile / notes</h3>
            <div style="padding: 10px 12px; border-radius: 8px; border: 1px dashed #cbd5f5; background-color: #f8fafc; font-size: 13px; color: #1f2933;">
              ${aboutFirmHtml}
            </div>

            <p style="margin-top: 18px; font-size: 11px; color: #94a3b8;">
              Tip: reply directly to this email to contact the firm. This notification was generated automatically by the AuditLink website.
            </p>
          </div>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      reply_to: email,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error in /api/auditor-signup:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
