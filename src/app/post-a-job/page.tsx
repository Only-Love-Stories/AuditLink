"use client";

import { useState } from "react";

export default function PostJobPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(null);
    setError(null);

    const formData = new FormData(e.currentTarget);

    const payload = {
      entityName: formData.get("entityName"),
      contactPerson: formData.get("contactPerson"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      entityType: formData.get("entityType"),
      reportingFramework: formData.get("reportingFramework"),
      yearEnd: formData.get("yearEnd"),
      scope: formData.get("scope"),
      regulator: formData.get("regulator"),
      size: formData.get("size"),
      timing: formData.get("timing"),
      additionalInfo: formData.get("additionalInfo"),
      source: formData.get("source") || "Post a Job page",
    };

    try {
      const res = await fetch("/api/post-job", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to submit job");
      }

      setSuccess("Thanks – your job has been submitted. We’ll be in touch soon.");
      e.currentTarget.reset();
    } catch (err: any) {
      console.error(err);
      setError(
        "Sorry, something went wrong sending your job. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Post an audit job</h1>
        <p className="text-sm text-slate-600 max-w-2xl">
          You can post requests for any type of audit — including ASIC financial statement audit, SMSF audit,
          ACNC charity audit, AFSL compliance audit, NFP audit, trust audit, grant acquittal, review engagement
          or agreed-upon procedures. Your job is shared only with auditors who meet your criteria.
        </p>
      </div>

      <form
        className="space-y-5 rounded-xl border bg-white p-6 shadow-sm"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="source" value="Post a Job page" />

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-800">
              Entity / group name
            </label>
            <input
              required
              name="entityName"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Example Group Pty Ltd"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-800">
              Contact person
            </label>
            <input
              required
              name="contactPerson"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Jane Smith, CFO"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-800">Email</label>
            <input
              required
              type="email"
              name="email"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-800">Phone</label>
            <input
              required
              name="phone"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="+61 4xx xxx xxx"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-800">Entity type</label>
            <select
              name="entityType"
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="">Select...</option>
              <option>Company – large / reporting entity</option>
              <option>Company – small / non-reporting</option>
              <option>Registered scheme / managed investment</option>
              <option>AFSL / ACL holder</option>
              <option>Not-for-profit / charity</option>
              <option>Trust / fund</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-800">
              Reporting framework
            </label>
            <select
              name="reportingFramework"
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="">Select...</option>
              <option>Australian Accounting Standards – Tier 1</option>
              <option>Australian Accounting Standards – Tier 2 (SDS)</option>
              <option>Special purpose financial statements</option>
              <option>Cash basis / other framework</option>
              <option>Unsure</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-800">Year end</label>
            <input
              name="yearEnd"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="30 June 2025"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-800">
              Regulator / licence (if applicable)
            </label>
            <input
              name="regulator"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="ASIC, ACNC, APRA, AFSL no., etc."
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-800">
              Size / scale (approx.)
            </label>
            <input
              name="size"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Revenue, assets, number of entities, etc."
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-800">Timing</label>
            <select
              name="timing"
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="">Select...</option>
              <option>Immediately / urgent</option>
              <option>Within 1 month</option>
              <option>Within 3 months</option>
              <option>Within 6 months</option>
              <option>Longer-term / exploratory</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-800">
            Scope / engagement
          </label>
          <textarea
            name="scope"
            rows={4}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="e.g. Statutory audit of consolidated group and subsidiaries, AFSL client money audit, ACNC audit/review, agreed-upon procedures, etc."
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-800">
            Additional context (optional)
          </label>
          <textarea
            name="additionalInfo"
            rows={4}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="Anything that would help an auditor quickly assess fit: group structure, industry, complex areas, deadlines, why you’re changing auditors, etc."
          />
        </div>

        <button type="submit" className="btn-primary" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit job"}
        </button>

        {success && (
          <p className="mt-2 text-sm text-emerald-700">{success}</p>
        )}
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </form>

      <p className="text-xs text-slate-500">
        By submitting this form you agree that we may share these details with ASIC-registered auditors
        for the purpose of connecting you with a suitable firm. No engagement is formed until you appoint
        an auditor directly.
      </p>
    </section>
  );
}
