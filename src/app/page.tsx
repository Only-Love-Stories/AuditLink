import Link from "next/link";

export default function Page() {
  return (
    <div className="grid gap-10 md:grid-cols-[3fr,2fr] items-start">
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Free audit job postings for Australian entities
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Find ASIC-registered, CPA, SMSF, ACNC and AFSL auditors — Australia-wide.
        </h1>
        <p className="text-base text-slate-600 md:text-lg">
          Post your audit engagement — company audit, SMSF audit, AFSL or ACNC audit, NFP audit,
          trust compliance or financial statement review — and receive targeted responses from
          qualified Australian auditors. No platforms, no bidding wars, just direct introductions.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/post-a-job" className="btn-primary">
            Post an audit job (free)
          </Link>
          <Link href="/auditor-signup" className="btn-outline">
            I&apos;m an auditor
          </Link>
        </div>
        <h2 className="text-lg font-semibold text-slate-800 mt-6">
          Auditors available on AuditLink include:
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700 mt-2">
          <li>✓ ASIC-registered company auditors (financial statement and Corporations Act audits)</li>
          <li>✓ CPA and CA-qualified auditors for SME and group audits</li>
          <li>✓ SMSF-approved auditors (self-managed super funds)</li>
          <li>✓ ACNC charity / not-for-profit financial statement auditors</li>
          <li>✓ AFSL client money and trust account compliance auditors</li>
          <li>✓ Government grant audits & acquittal reporting</li>
          <li>✓ Limited assurance / review engagements</li>
          <li>✓ Agreed-upon procedures (AUP) and compliance certifications</li>
        </ul>
      </section>
      <section className="space-y-4 rounded-xl border border-emerald-100 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-900">How AuditLink works</h2>
        <ol className="space-y-3 text-sm text-slate-700">
          <li>
            <span className="font-semibold text-emerald-700">1. Post your engagement</span>
            <div className="text-slate-600">
              Share a high-level brief: who you are, what needs auditing, timing and any regulatory requirements.
            </div>
          </li>
          <li>
            <span className="font-semibold text-emerald-700">2. We share it with auditors</span>
            <div className="text-slate-600">
              Your job is circulated to a curated pool of ASIC-registered auditors who match your profile.
            </div>
          </li>
          <li>
            <span className="font-semibold text-emerald-700">3. Auditors contact you directly</span>
            <div className="text-slate-600">
              Interested auditors respond straight to your nominated contact so you can shortlist, meet and appoint.
            </div>
          </li>
        </ol>
        <div className="rounded-lg bg-emerald-50 p-3 text-xs text-emerald-900">
          <div className="font-semibold">No platforms. No bidding wars.</div>
          <div>
            AuditLink is a simple connection service. We don&apos;t sit between you and your auditor and we don&apos;t clip success fees.
          </div>
        </div>
      </section>
    </div>
  );
}
