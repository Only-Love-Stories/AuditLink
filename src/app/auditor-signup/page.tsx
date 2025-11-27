"use client";

import { useState } from "react";

export default function AuditorSignupPage() {
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
      firmName: formData.get("firmName"),
      contactPerson: formData.get("contactPerson"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      website: formData.get("website"),
      registrationType: formData.get("registrationType"),
      asicRegistrationNumber: formData.get("asicRegistrationNumber"),
      jurisdictions: formData.get("jurisdictions"),
      serviceAreas: formData.get("serviceAreas"),
      preferredClientTypes: formData.get("preferredClientTypes"),
      minimumFee: formData.get("minimumFee"),
      capacity: formData.get("capacity"),
      aboutFirm: formData.get("aboutFirm"),
      source: formData.get("source") || "Auditor signup page",
    };

    try {
      const res = await fetch("/api/auditor-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to submit auditor signup");
      }

      setSuccess(
        "Thanks – we’ve received your details. We’ll be in touch as Audit Link grows and as suitable engagements arise."
      );
      e.currentTarget.reset();
    } catch (err: any) {
      console.error(err);
      setError(
        "Sorry, something went wrong sending your details. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">
          Join the AuditLink panel
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl">
          Tell us a bit about your firm, registrations and ideal clients. We use this to
          match you with relevant engagements – not to create any obligation or listing
          on a public directory.
        </p>
      </div>

      <form
        className="space-y-5 rounded-xl border bg-white p-6 shadow-sm"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="source" value="Auditor signup page" />

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-800">
              Firm / practice name
            </label>
            <input
              required
              name="firmName"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Example Audit Pty Ltd"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-800">
              Primary contact
            </label>
            <input
              required
              name="contactPerson"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Jane Smith, Audit Partner"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-800">Email</label>
            <input
              required
              type="email"
              name="email"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="you@firm.com.au"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-800">Phone</label>
            <input
              required
              name="phone"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="+61 2 xxx xxxx"
            />
          </div>

          <div className="space-y-1.5 md:col-span-2">
            <label className="text-sm font-medium text-slate-800">
              Website (optional)
            </label>
            <input
              name="website"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="https://www.exampleaudit.com.au"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-800">
              Registration type
            </label>
            <select
              name="registrationType"
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="">Select...</option>
              <option>ASIC registered company auditor</option>
              <option>ASIC registered SMSF auditor</option>
              <option>AFSL / ACL audit specialist</option>
              <option>Registered scheme / RE auditor</option>
              <option>Other / mixed</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-800">
              ASIC registration number
            </label>
            <input
              name="asicRegistrationNumber"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Number as recorded with ASIC"
            />
          </div>

          <div className="space-y-1.5 md:col-span-2">
            <label className="text-sm font-medium text-slate-800">
              Jurisdictions / locations
            </label>
            <input
              name="jurisdictions"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="e.g. QLD, NSW; remote across Australia; APAC, etc."
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-800">
            Service areas (key focus)
          </label>
          <textarea
            name="serviceAreas"
            rows={3}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="e.g. statutory audit, AFSL client money, SMSF, not-for-profit, AUP, internal audit, etc."
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-800">
            Preferred client types / industries
          </label>
          <textarea
            name="preferredClientTypes"
            rows={3}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="e.g. tech scale-ups, NFPs, funds, credit providers, small listed entities, etc."
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-800">
              Indicative minimum annual fee
            </label>
            <input
              name="minimumFee"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="$ (ballpark for a typical new engagement)"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-800">
              Current capacity
            </label>
            <select
              name="capacity"
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="">Select...</option>
              <option>Actively seeking new recurring clients</option>
              <option>Open to selective opportunities</option>
              <option>Limited capacity / waitlist</option>
              <option>Not currently taking new clients</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-800">
            Firm profile / anything else we should know
          </label>
          <textarea
            name="aboutFirm"
            rows={4}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="Short overview, differentiators, ideal engagement size, key partners or practice areas, conflicts / independence considerations, etc."
          />
        </div>

        <button
          type="submit"
          className="btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit interest"}
        </button>

        {success && (
          <p className="mt-2 text-sm text-emerald-700">{success}</p>
        )}
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </form>

      <p className="text-xs text-slate-500">
        By submitting this form you&apos;re expressing interest in receiving relevant introductions
        from AuditLink. There is no guarantee of referrals, and no public directory listing is created.
        We may contact you to confirm details before including you in any matching.
      </p>
    </section>
  );
}
