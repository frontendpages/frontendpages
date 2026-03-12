import { config } from "@repo/seo";
import type { Organization, WebSite, WithContext } from "@repo/seo";

export const organizationId = `${config.url.base}#organization`;

export const websiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${config.url.base}#website`,
  name: config.app,
  url: config.url.base,
  description: config.description,
  publisher: {
    "@id": organizationId,
  },
};

export const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: config.app,
  url: config.url.base,
  logo: {
    "@type": "ImageObject",
    url: config.url.logo,
  },
  founder: {
    "@type": "Person",
    name: "Powenel",
    sameAs: "https://x.com/powenel",
  },
  sameAs: Object.values(config.url.platform),
};
