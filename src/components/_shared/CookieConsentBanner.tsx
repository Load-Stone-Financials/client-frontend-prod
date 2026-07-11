import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";
import { Switch } from "../ui/switch";
import Button from "../ui/Button";

const CONSENT_STORAGE_KEY = "cookie-consent";

interface CookiePreferences {
  analytics: boolean;
  marketing: boolean;
}

function loadStoredPreferences(): CookiePreferences | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookiePreferences;
  } catch {
    return null;
  }
}

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    if (!loadStoredPreferences()) setVisible(true);
  }, []);

  function persist(prefs: CookiePreferences) {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(prefs));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 sm:inset-x-8 sm:bottom-6">
      <div className="mx-auto max-w-[1100px] rounded-2xl border border-gray-100 bg-white/95 p-5 shadow-[0_8px_40px_rgba(96,47,204,0.18)] backdrop-blur sm:p-6">
        <div className="flex items-start gap-3">
          <div className="hidden shrink-0 rounded-full bg-[#F5EFF7] p-2.5 sm:flex">
            <Cookie className="h-5 w-5 text-brand-purple" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm text-gray-700">
              We take your privacy seriously and only process your personal information to make
              your experience better while you use this website. In accordance with NDPR/GDPR, and
              any applicable regulations, continuing to use this platform indicates your consent to
              the processing of your personal data by Loadstone Financials, its subsidiaries and partners as
              detailed in our{" "}
              <Link to="/privacy-policy" className="font-medium text-brand-purple underline hover:text-brand-purple-light">
                Privacy Policy
              </Link>
            </p>
            <p className="mt-2 text-sm text-gray-700">
              Our site also uses cookies to enhance your experience while you are here. You can
              modify your preference using the option below. For more detailed information about
              the cookies we use, see our{" "}
              <Link to="/cookie-policy" className="font-medium text-brand-purple underline hover:text-brand-purple-light">
                Cookie Policy
              </Link>
            </p>
          </div>
        </div>

        {showPreferences && (
          <div className="mt-4 space-y-3 rounded-xl bg-[#F5EFF7] p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-800">Necessary</p>
                <p className="text-xs text-gray-500">Required for the site to function. Always active.</p>
              </div>
              <Switch checked disabled />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-800">Analytics</p>
                <p className="text-xs text-gray-500">Helps us understand how visitors use the site.</p>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, analytics: checked }))}
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-800">Marketing</p>
                <p className="text-xs text-gray-500">Used to deliver relevant offers and content.</p>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, marketing: checked }))}
              />
            </div>
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-3 sm:justify-end">
          <Button
            classes="btn-sm !py-2 !px-5 text-gray-500 hover:text-gray-700"
            content="Reject Non-Essential"
            onClick={() => persist({ analytics: false, marketing: false })}
          />
          {showPreferences ? (
            <Button
              classes="btn-sm !py-2 !px-5 rounded-full border border-brand-purple text-brand-purple"
              content="Save Preferences"
              onClick={() => persist(preferences)}
            />
          ) : (
            <Button
              classes="btn-sm !py-2 !px-5 rounded-full border border-brand-purple text-brand-purple"
              content="Manage Preferences"
              onClick={() => setShowPreferences(true)}
            />
          )}
          <Button
            classes="primary-btn btn-sm !py-2 !px-6 rounded-full"
            content="Accept All"
            onClick={() => persist({ analytics: true, marketing: true })}
          />
        </div>
      </div>
    </div>
  );
}
