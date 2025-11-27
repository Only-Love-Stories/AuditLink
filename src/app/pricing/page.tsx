export default function PricingPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Pricing</h1>
        <p className="text-sm text-slate-600 max-w-2xl">
          AuditLink is designed to be simple and transparent. There are no success fees or
          percentage-based commissions on audit engagements.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">
            For entities posting audit jobs
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Free to post audit, review or assurance engagements.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Post unlimited audit jobs at no cost.</li>
            <li>Connect directly with auditors – no platform messaging.</li>
            <li>No success fees or commissions on engagements.</li>
            <li>You appoint and contract with your chosen auditor directly.</li>
          </ul>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">
            For auditors and firms
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            During the early stage of AuditLink, there is no charge to register interest or
            receive introductions.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>No listing fee while the panel is being established.</li>
            <li>No percentage-of-fee commissions on successful engagements.</li>
            <li>You remain independent in setting scope, fees and terms with clients.</li>
            <li>Future pricing may include a modest subscription for panel visibility.</li>
          </ul>
        </div>
      </div>

      <p className="text-xs text-slate-500">
        AuditLink is not a party to any engagement letters or fee arrangements between entities
        and auditors. Our role is limited to introductions based on the information you provide.
      </p>
    </section>
  );
}
