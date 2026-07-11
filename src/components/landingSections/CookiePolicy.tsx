import { Cookie } from "lucide-react";
import LegalPageLayout from "../_shared/LegalPageLayout";

const TOC = [
  { id: "introduction", label: "Introduction" },
  { id: "what-are-cookies", label: "What Are Cookies?" },
  { id: "how-we-use-cookies", label: "How We Use Cookies" },
  { id: "legal-basis", label: "Legal Basis for Processing" },
  { id: "third-party-cookies", label: "Third-Party Cookies" },
  { id: "managing-preferences", label: "Managing Your Preferences" },
];

const COOKIE_CATEGORIES = [
  {
    category: "Strictly Necessary Cookies",
    purpose:
      "Essential for enabling core site functionality, such as security, network management, and accessibility.",
    example: "Login authentication, secure access areas.",
  },
  {
    category: "Performance & Analytics Cookies",
    purpose:
      "Help us understand how visitors interact with our site by collecting information anonymously.",
    example: "Google Analytics, internal performance tracking.",
  },
  {
    category: "Functional Cookies",
    purpose: "Allow the site to remember your preferences and provide enhanced features.",
    example: "Language selection, personalized settings.",
  },
  {
    category: "Advertising & Targeting Cookies",
    purpose: "Used to deliver relevant advertisements and measure their effectiveness.",
    example: "Google Ads, Facebook Pixel.",
  },
];

const sectionClasses = "border-t border-gray-100 pt-8 mt-8 first:mt-0 first:border-0 first:pt-0";
const h2Classes = "text-2xl font-semibold text-gray-900";
const h3Classes = "mt-8 text-lg font-semibold text-brand-purple";
const pClasses = "mt-3 leading-relaxed text-gray-700";
const ulClasses = "mt-3 list-disc space-y-1.5 pl-6 leading-relaxed text-gray-700 marker:text-brand-purple-light";

export default function CookiePolicy() {
  return (
    <LegalPageLayout
      icon={Cookie}
      title="Cookie Policy"
      lastUpdated="May 1st, 2026"
      toc={TOC}
    >
      <section id="introduction" className={sectionClasses}>
        <h2 className={h2Classes}>Introduction</h2>
        <p className={pClasses}>
          This Cookie Policy explains how Loadstone Financials uses cookies. It outlines what
          cookies are, the types we use, the purposes for which we use them, and how you can manage
          your cookie preferences. We are committed to protecting your privacy and ensuring
          compliance with the Nigeria Data Protection Act (NDPA) 2023, the General Data Protection
          Regulation (GDPR), and other applicable data protection laws.
        </p>
      </section>

      <section id="what-are-cookies" className={sectionClasses}>
        <h2 className={h2Classes}>What Are Cookies?</h2>
        <p className={pClasses}>
          Cookies are small text files that are placed on your computer, smartphone, or other
          devices when you visit a website. They help us remember your preferences, analyze how our
          site is used, and improve your overall experience. Cookies may be session cookies (which
          expire when you close your browser) or persistent cookies (which remain on your device
          for a defined period or until deleted).
        </p>
      </section>

      <section id="how-we-use-cookies" className={sectionClasses}>
        <h2 className={h2Classes}>How We Use Cookies</h2>
        <p className={pClasses}>We use cookies for the following purposes:</p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm text-gray-700">
            <thead>
              <tr className="bg-[#F5EFF7]">
                <th className="p-3 font-semibold text-gray-900">Category</th>
                <th className="p-3 font-semibold text-gray-900">Purpose</th>
                <th className="p-3 font-semibold text-gray-900">Example</th>
              </tr>
            </thead>
            <tbody>
              {COOKIE_CATEGORIES.map((row) => (
                <tr key={row.category} className="border-t border-gray-100 align-top even:bg-gray-50/60">
                  <td className="p-3 font-medium text-gray-800">{row.category}</td>
                  <td className="p-3">{row.purpose}</td>
                  <td className="p-3">{row.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="legal-basis" className={sectionClasses}>
        <h2 className={h2Classes}>Legal Basis for Processing</h2>
        <p className={pClasses}>
          The use of non-essential cookies is based on your consent, in line with the NDPA and
          GDPR. Essential cookies are processed under our legitimate interest to ensure the website
          functions properly.
        </p>
      </section>

      <section id="third-party-cookies" className={sectionClasses}>
        <h2 className={h2Classes}>Third-Party Cookies</h2>
        <p className={pClasses}>
          Some cookies are placed by third-party services that appear on our website. These may
          include analytics tools, embedded videos, or social media integrations. We do not control
          these cookies and recommend reviewing the privacy or cookie policies of such third
          parties for more details.
        </p>
      </section>

      <section id="managing-preferences" className={sectionClasses}>
        <h2 className={h2Classes}>Managing Your Cookie Preferences</h2>
        <p className={pClasses}>You can manage your cookie preferences by:</p>
        <ul className={ulClasses}>
          <li>Adjusting your browser settings to block or delete cookies; or</li>
          <li>
            Using our Cookie Consent Banner/Settings Panel, accessible at the bottom of our
            website.
          </li>
        </ul>
        <p className={pClasses}>
          Please note that disabling certain cookies may affect the functionality and user
          experience of our website.
        </p>

        <h3 className={h3Classes}>Browser Controls</h3>
        <p className={pClasses}>
          You can typically find cookie management settings in your browser&rsquo;s
          &ldquo;Options&rdquo; or &ldquo;Preferences&rdquo; menu.
        </p>
        <p className={pClasses}>For more detailed guidance, refer to your browser&rsquo;s help documentation:</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["Chrome", "Firefox", "Edge", "Safari"].map((browser) => (
            <span key={browser} className="rounded-full bg-[#F5EFF7] px-4 py-1.5 text-sm text-gray-700">
              {browser}
            </span>
          ))}
        </div>
      </section>
    </LegalPageLayout>
  );
}
