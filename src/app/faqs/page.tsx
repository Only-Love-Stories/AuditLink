const faqs = [
  {
    question: "Do I need an ASIC-registered auditor for my company?",
    answer:
      "If your company is large or reporting under Chapter 2M of the Corporations Act, or you hold an AFSL/ACL licence, you generally require an ASIC-registered company auditor. AuditLink can connect you with auditors based on your licence type, industry and turnover.",
  },
  {
    question: "Who can perform an ACNC or charity audit?",
    answer:
      "For large charities registered with the ACNC, your auditor must be either a Registered Company Auditor, a CPA/CA-qualified auditor or a member of certain approved professional accounting bodies. AuditLink connects charities to auditors with ACNC and not-for-profit experience.",
  },
  {
    question: "Do SMSF auditors need special registration?",
    answer:
      "Yes. SMSF audits must be performed by an auditor who is separately registered with ASIC as an SMSF auditor and meets ongoing CPD and competency requirements. AuditLink can match you with SMSF-approved ASIC auditors.",
  },
  {
    question: "How much does a typical AFSL or trust account audit cost?",
    answer:
      "Pricing varies depending on complexity, entity size, trust account volume and reporting deadlines. AuditLink helps you connect directly with auditors, allowing you to receive tailored proposals instead of generic price lists.",
  },
  {
    question: "What is the difference between a review and an audit?",
    answer:
      "An audit provides reasonable assurance and usually includes testing, confirmations and analytical procedures. A review provides limited assurance only. AuditLink includes both statutory audits and limited assurance review engagements.",
  },
];

export default function FAQsPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">FAQs</h1>
        <p className="text-sm text-slate-600 max-w-2xl">
          Common questions about ASIC auditors, SMSF audits, ACNC audits and how AuditLink works.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-lg border bg-white p-4 shadow-sm"
          >
            <h2 className="text-sm font-semibold text-slate-900">
              {faq.question}
            </h2>
            <p className="mt-2 text-sm text-slate-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
