import { MetadataRoute } from "next";

const BASE_URL = "https://www.dreamsolarenergy.co";

/**
 * Dynamic sitemap — Next.js reads this file and serves /sitemap.xml.
 * Add new route entries here whenever a new page is created and it will
 * automatically appear in the sitemap on the next build/request.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  /** Static routes — add new pages here as the site grows */
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/calculator`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  return staticRoutes;
}
