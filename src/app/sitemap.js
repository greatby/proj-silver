// app/sitemap.js

export default function sitemap() {
  const base = 'https://yourdomain.com';

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
    },
    {
      url: `${base}/collections`,
      lastModified: new Date(),
    },
    {
      url: `${base}/customize`,
      lastModified: new Date(),
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${base}/faq`,
      lastModified: new Date(),
    },

    // Dynamic product pages (add more slugs as your catalog grows)
    {
      url: `${base}/product/lakshmi-ganesh-10g`,
      lastModified: new Date(),
    },
    {
      url: `${base}/product/plain-10g`,
      lastModified: new Date(),
    },
    {
      url: `${base}/product/balaji-20g`,
      lastModified: new Date(),
    },
    {
      url: `${base}/product/bar-50g`,
      lastModified: new Date(),
    },

    // Optional Policy pages — uncomment when created
    // { url: `${base}/shipping`, lastModified: new Date() },
    // { url: `${base}/returns`, lastModified: new Date() },
    // { url: `${base}/privacy`, lastModified: new Date() },
    // { url: `${base}/terms`, lastModified: new Date() },
  ];
}
