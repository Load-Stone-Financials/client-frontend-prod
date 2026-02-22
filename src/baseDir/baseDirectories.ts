const BaseDirectories = {
  BASE_URL: import.meta.env.VITE_BASE_URL,
  APP_API_BASE_URL: import.meta.env.VITE_APP_API_BASEURL,

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
