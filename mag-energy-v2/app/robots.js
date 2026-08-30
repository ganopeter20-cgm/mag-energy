export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mag-energy.vercel.app/sitemap.xml",
  };
}