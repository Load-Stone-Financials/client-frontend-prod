import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import LandingLayout from "./LandingLayout";

interface TocEntry {
  id: string;
  label: string;
}

interface LegalPageLayoutProps {
  icon: LucideIcon;
  title: string;
  lastUpdated?: string;
  intro?: string;
  toc: TocEntry[];
  children: ReactNode;
}

export default function LegalPageLayout({
  icon: Icon,
  title,
  lastUpdated,
  intro,
  toc,
  children,
}: LegalPageLayoutProps) {
  return (
    <LandingLayout>
      <div className="mx-auto max-w-[1150px] px-4 py-16 text-left sm:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F5EFF7]">
                <Icon className="h-6 w-6 text-brand-purple" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h1>
            </div>
            {lastUpdated && (
              <span className="rounded-full bg-[#F5EFF7] px-4 py-1.5 text-xs font-medium text-brand-purple">
                Last Updated: {lastUpdated}
              </span>
            )}
          </div>
          {intro && <p className="mt-6 text-gray-700 leading-relaxed">{intro}</p>}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
          <nav className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl bg-white p-5 shadow-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
                On this page
              </p>
              <ul className="space-y-1">
                {toc.map((entry) => (
                  <li key={entry.id}>
                    <a
                      href={`#${entry.id}`}
                      className="block rounded-lg px-3 py-1.5 text-sm text-gray-600 transition hover:bg-[#F5EFF7] hover:text-brand-purple"
                    >
                      {entry.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <details className="rounded-2xl bg-white p-5 shadow-sm lg:hidden">
            <summary className="cursor-pointer text-sm font-semibold text-brand-purple">
              On this page
            </summary>
            <ul className="mt-3 space-y-1">
              {toc.map((entry) => (
                <li key={entry.id}>
                  <a href={`#${entry.id}`} className="block rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-[#F5EFF7] hover:text-brand-purple">
                    {entry.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>

          <article className="min-w-0 rounded-2xl bg-white p-8 shadow-sm sm:p-10 [&_h2]:scroll-mt-28 [&_h3]:scroll-mt-28">
            {children}
          </article>
        </div>
      </div>
    </LandingLayout>
  );
}
