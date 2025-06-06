/**
 * @returns {import("next").MetadataRoute.Sitemap}
 */
export default function sitemap() {
  return [
    {
      url: "http://localhost:3000/",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "http://localhost:3000/contactez-nous",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: "http://localhost:3000/contactez-nous/succes",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: "http://localhost:3000/evenements",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "http://localhost:3000/evenements/evenement1",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "http://localhost:3000/evenements/evenement2",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
