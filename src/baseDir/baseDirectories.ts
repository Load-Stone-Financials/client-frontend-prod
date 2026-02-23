function normalizeApiBaseUrl(value: string | undefined): string {
  const url = (value ?? "").trim();
  if (!url) return "";
  // Ensure full URL so requests go to the API server, not the current origin
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://${url}`;
}

// In dev, use relative path so Vite proxy forwards to API (avoids CORS)
const rawApiBase = (import.meta.env.VITE_APP_API_BASEURL ?? "").trim();
const API_BASE_URL =
  import.meta.env.DEV
    ? "/api/v1"
    : normalizeApiBaseUrl(rawApiBase);

const BaseDirectories = {
  BASE_URL: import.meta.env.VITE_BASE_URL,
  API_BASE_URL,

  FCP: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiJXLXN0ZXJpbCIsImRldGFpbHMiOltdLCJtZXRhZGF0YSI6IiIsImlhdCI6MTcyODUyMTYzMH0.EzakdN4T3IKrRZcCzaZJ2YW3x5E49cl5P4VJ_O4fv-w",

  headers: {
    accept: "application/json",
    Authorization: `Bearer ${window.sessionStorage.getItem("accessToken")}`,
    "Content-Type": "application/json",
  },

  /** Directories and folders. */
  IMAGES_DIR: "/images",
  LOGOS_DIR: "/images/logos",
  ICONS_DIR: "/images/icons",
  LANDING_DIR: "/images/landing",
  ABOUT_US_DIR: "/images/landing/AboutUs",
  CONTACT_US_DIR: "/images/landing/ContactUs",
  BLOG_MAIN_DIR: "images/landing/BlogMain",
};

export default BaseDirectories;
