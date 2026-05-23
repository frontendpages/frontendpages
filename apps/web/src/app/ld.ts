import { links, site } from "@repo/config/app";
import type { Organization, WebSite, WithContext } from "@repo/config/seo";

export const websiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${links.base}/#website`,
  name: site.name,
  url: links.base,
  description: site.description,
  inLanguage: "en",
};

export const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${links.base}/#organization`,
  name: site.name,
  url: links.base,
  logo: links.logo,
  sameAs: [links.github, links.x, links.bluesky, links.linkedin, links.instagram, links.facebook],
};
