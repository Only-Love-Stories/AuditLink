import Link from "next/link";
import { CheckCircle2, ShieldCheck, Briefcase, Globe2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="grid gap-10 md:grid-cols-[3fr,2fr] items-start">
        {/* Left column – headline & CTAs */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 border border-emerald-100">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Free audit job postings for Australian entities
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Find ASIC-registered, CPA, SMSF, ACNC and AFSL auditors —
            Australia-wide.
          </h1>

          <p className="text-base md:text-lg text-slate-600 max-w-xl">
            Post your audit engagement — company audit, SMSF audit, AFSL or ACNC
            audit, NFP audit, trust compliance or financial statement review —
            and receive targeted responses from qualified Australian auditors.
            No platforms, no bidding wars, just direct introductions.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/post-a-job" className="btn-primary">
              Post an audit job (free)
            </Link>
            <Link href="/auditor-signup" className="btn-outline">
              I&apos;m an auditor
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>ASIC, CPA, CA & SMSF auditors</span>
            </div>
            <<div className="flex items-center gap-2">
  <Briefcase className="h-4 w-4 text-emerald-600" />
  <span>SME, NFP, AFSL & trust engagements</span>
</div>
            <div className="flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-emerald-600" />
              <span>Remote or on-site across Australia</span>
            </div>
          </div>
        </div>

        {/* Right column – “How it works” card */}
        <div className="space-y-4 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">
            How AuditLink works
          </h2>
          <ol className="space-y-4 text-sm text-slate-700">
            <li className="flex gap-3">
              <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
                1
              </div>
              <div>
                <div className="font-semibold text-slate-900">
                  Post your engagement
                </div>
                <div className="text-slate-600">
                  Share a high-level brief: entity type, audit or review
                  required, reporting framework and deadlines.
                </div>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
                2
              </div>
              <div>
                <div className="font-semibold text-slate-900">
                  We share it with auditors
                </div>
                <div className="text-slate-600">
                  Your job is circulated to a curated pool of ASIC-registered,
                  CPA / CA auditors who match your profile.
                </div>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
                3
              </div>
              <div>
                <div className="font-semibold text-slate-900">
                  Auditors contact you directly
                </div>
                <div className="text-slate-600">
                  Interested auditors respond straight to your nominated contact
                  so you can shortlist, meet and appoint.
                </div>
              </div>
            </li>
          </ol>

          <div className="rounded-xl bg-emerald-50 p-4 text-xs text-emerald-900 border border-emerald-100">
            <div className="font-semibold mb-1">
              No platforms. No bidding wars.
            </div>
            <div>
              AuditLink is a simple connection service. We don&apos;t sit
              between you and your auditor and we don&apos;t clip success fees.
            </div>
          </div>
        </div>
      </section>

      {/* AUDITOR TYPES / SERVICES */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          Auditors available on AuditLink include:
        </h2>
        <p className="text-sm text-slate-600 max-w-3xl">
          Whether you need a{" "}
          <strong>CPA auditor, ACNC auditor, NFP auditor, SMSF auditor</strong>{" "}
          or AFSL / trust account specialist, AuditLink helps you reach
          appropriately qualified firms without sending a mass email to your
          network.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "ASIC-registered company auditors (financial statement and Corporations Act audits)",
            "CPA and CA-qualified auditors for SME and group audits",
            "SMSF-approved auditors (self-managed super funds)",
            "ACNC charity / not-for-profit financial statement auditors",
            "AFSL client money and trust account compliance auditors",
            "Government grant audits & acquittal reporting",
            "Limited assurance / review engagements",
            "Agreed-upon procedures (AUP) and compliance certifications",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
            >
              <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-600" />
              <p className="text-sm text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="rounded-2xl bg-slate-900 text-slate-50 px-6 py-8 md:px-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h2 className="text-xl md:text-2xl font-semibold">
            Ready to find your next auditor?
          </h2>
          <p className="text-sm md:text-base text-slate-200">
            Share a brief once, and connect with auditors who understand ASIC,
            ACNC, SMSF and AFSL requirements — without running a full tender
            process.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/post-a-job"
            className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-emerald-400"
          >
            Post an audit job (free)
          </Link>
          <Link
            href="/auditor-signup"
            className="inline-flex items-center justify-center rounded-md border border-slate-500 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-800"
          >
            Join as an auditor
          </Link>
        </div>
      </section>
    </div>
  );
}
