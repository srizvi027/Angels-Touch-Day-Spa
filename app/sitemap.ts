import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.angelstouchdayspa.com.au";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#pamper-parties`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#gallery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/#testimonials`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/#contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
