export default function TermsPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Terms of use</h1>
        <p className="text-sm text-slate-600 max-w-2xl">
          High-level terms for using AuditLink. These are not formal legal terms and should
          be refined with legal advice before production use.
        </p>
      </div>

      <div className="space-y-4 rounded-xl border bg-white p-6 shadow-sm text-sm text-slate-700">
        <p>
          AuditLink is a connection service intended to introduce Australian entities to auditors
          who may be suitable for their needs. We do not provide audit, assurance, financial, legal
          or taxation advice.
        </p>
        <p>
          Any engagement for audit or assurance services is entered into directly between the entity
          and the appointed auditor. AuditLink is not a party to engagement letters, does not review
          audit work and does not guarantee the suitability, availability or performance of any auditor.
        </p>
        <p>
          Entities are responsible for performing their own due diligence, including confirming
          ASIC registration, professional memberships, independence requirements and competence
          for the engagement.
        </p>
        <p>
          By using AuditLink you agree that we are not liable for any loss, claim or damage arising
          from introductions made via the platform. If you have questions about these terms or require
          a formal legal agreement, please seek appropriate advice.
        </p>
      </div>
    </section>
  );
}
