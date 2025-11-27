import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      entityName,
      contactPerson,
      email,
      phone,
      entityType,
      reportingFramework,
      yearEnd,
      scope,
      regulator,
      size,
      timing,
      additionalInfo,
      source,
    } = body;

    if (!email || !entityName) {
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

    const subject = `Audit Link – New audit job: ${entityName}`;

    const safeAdditionalInfo = (additionalInfo || "").toString().trim();
    const additionalInfoHtml = safeAdditionalInfo
      ? safeAdditionalInfo.replace(/\n/g, "<br/>")
      : "<em>No additional context provided.</em>";

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
                <div style="font-size: 11px; color: #64748b;">New audit job submission</div>
              </div>
            </div>
            <div style="font-size: 11px; color: #64748b; text-align: right;">
              <div style="font-weight: 500;">Submitted</div>
              <div>${submittedAt}</div>
            </div>
          </div>

          <div style="padding: 20px;">
            <h2 style="margin: 0 0 12px 0; font-size: 18px; font-weight: 600; color: #0f172a;">
              New audit job – ${entityName}
            </h2>
            <p style="margin: 0 0 18px 0; font-size: 13px; color: #475569;">
              This job was submitted via the AuditLink website. You can reply directly to the contact to progress next steps.
            </p>

            <p style="margin: 0 0 16px 0; font-size: 11px; color: #94a3b8;">
              Source: <strong>${source || "Post a Job page"}</strong>
            </p>

            <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600; color: #0f172a;">Contact details</h3>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; margin-bottom: 16px; font-size: 13px;">
              <tbody>
                <tr>
                  <td style="padding: 6px 8px; width: 35%; color: #64748b;">Entity / group</td>
                  <td style="padding: 6px 8px; font-weight: 500; color: #0f172a;">${entityName || "-"}</td>
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
              </tbody>
            </table>

            <h3 style="margin: 12px 0 8px 0; font-size: 14px; font-weight: 600; color: #0f172a;">Engagement details</h3>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; margin-bottom: 16px; font-size: 13px;">
              <tbody>
                <tr>
                  <td style="padding: 6px 8px; width: 35%; color: #64748b;">Entity type</td>
                  <td style="padding: 6px 8px;">${entityType || "-"}</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 6px 8px; color: #64748b;">Reporting framework</td>
                  <td style="padding: 6px 8px;">${reportingFramework || "-"}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 8px; color: #64748b;">Year end</td>
                  <td style="padding: 6px 8px;">${yearEnd || "-"}</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 6px 8px; color: #64748b;">Scope / engagement</td>
                  <td style="padding: 6px 8px;">${scope || "-"}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 8px; color: #64748b;">Regulator / licence</td>
                  <td style="padding: 6px 8px;">${regulator || "-"}</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 6px 8px; color: #64748b;">Size / scale</td>
                  <td style="padding: 6px 8px;">${size || "-"}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 8px; color: #64748b;">Timing</td>
                  <td style="padding: 6px 8px;">${timing || "-"}</td>
                </tr>
              </tbody>
            </table>

            <h3 style="margin: 12px 0 8px 0; font-size: 14px; font-weight: 600; color: #0f172a;">Additional context</h3>
            <div style="padding: 10px 12px; border-radius: 8px; border: 1px dashed #cbd5f5; background-color: #f8fafc; font-size: 13px; color: #1f2933;">
              ${additionalInfoHtml}
            </div>

            <p style="margin-top: 18px; font-size: 11px; color: #94a3b8;">
              Tip: reply directly to this email to contact the submitter. This notification was generated automatically by the AuditLink website.
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
    console.error("Error in /api/post-job:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
