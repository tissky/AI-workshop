import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

const toolIds = [
  'background-replace',
  'product-image',
  'image-enhance',
  'remove-watermark',
  'remove-people',
  'image-deduplication',
  'video-watermark',
  'video-to-image',
  'video-batch-watermark',
  'video-frame-extract',
  'text-generation',
  'handwriting',
  'sop-template',
  'emoji-generator',
  'ai减视频',
  'sketch',
  'ai-product',
  'trained-models',
  'quote-image',
  'fashion-creative',
  'privacy',
  'local-recommend',
  'material-creation',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  const staticRoutes = [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/tools`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/models`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/technology`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/company`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  const toolRoutes = toolIds.map((toolId) => ({
    url: `${siteUrl}/tools/${toolId}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...toolRoutes]
}
