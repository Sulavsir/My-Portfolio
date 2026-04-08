import { site } from "@/lib/data";
import { getSiteUrl } from "@/lib/site-url";

export function JsonLd() {
  const url = getSiteUrl();

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${url}/#person`,
        name: site.name,
        url,
        jobTitle: site.title,
        email: site.email,
        telephone: site.phoneE164,
        sameAs: [
          site.github,
          site.linkedin,
          site.instagram,
          site.facebook,
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address,
          addressLocality: "Bhaktapur",
          addressRegion: "Bagmati Province",
          addressCountry: "NP",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: `${site.name} — Portfolio`,
        description:
          "Portfolio of Sulav Karki, full stack engineer focused on real-time systems, APIs, and production web applications.",
        author: { "@id": `${url}/#person` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
