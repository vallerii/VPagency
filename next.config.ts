import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old service addresses from the previous site lead to their new pages,
  // so links and search results that point to them keep working.
  async redirects() {
    return [
      { source: "/leistungen/ecommerce", destination: "/leistungen/online-shops", permanent: true },
      { source: "/leistungen/custom-software", destination: "/leistungen/systeme-und-portale", permanent: true },
      { source: "/leistungen/automation", destination: "/leistungen/automatisierung", permanent: true },
      { source: "/leistungen/support", destination: "/leistungen/betreuung", permanent: true },
      { source: "/neu", destination: "/", permanent: true },
      { source: "/neu/:path*", destination: "/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
