import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AuditLink – Connect with ASIC, SMSF, ACNC, AFSL and NFP Auditors",
  description:
    "Find ASIC-registered auditors across Australia. Post audit jobs for SMSF audits, AFSL compliance audits, ACNC charity audits, NFP audits, trust audits and more. Free to post and receive responses from qualified auditors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-50 flex flex-col">
          <header className="border-b bg-white">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Image
                    src="/auditlink-logo.png"
                    alt="AuditLink logo – connect with ASIC and CPA auditors"
                    width={40}
                    height={40}
                    className="h-10 w-auto"
                  />
                  <div>
                    <div className="text-base font-semibold text-slate-900">
                      AuditLink
                    </div>
                    <div className="text-xs text-slate-500">
                      Auditors. Connected.
                    </div>
                  </div>
                </div>
              </Link>
              <nav className="flex items-center gap-4">
                <Link href="/post-a-job" className="link-nav">
                  Post a job
                </Link>
                <Link href="/auditor-signup" className="link-nav">
                  For auditors
                </Link>
                <Link href="/pricing" className="link-nav">
                  Pricing
                </Link>
                <Link href="/faqs" className="link-nav">
                  FAQs
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1 mx-auto w-full max-w-5xl px-4 py-10">
            {children}
          </main>
          <footer className="border-t bg-white">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-6 text-xs text-slate-500">
              <span>
                © {new Date().getFullYear()} AuditLink. All rights reserved.
              </span>
              <div className="flex gap-4">
                <Link href="/terms" className="hover:text-emerald-700">
                  Terms
                </Link>
                <Link href="/pricing" className="hover:text-emerald-700">
                  Pricing
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
