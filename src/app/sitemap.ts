import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://your-domain.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://your-domain.com/posts',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://your-domain.com/posts/what-is-cafe24',
      lastModified: new Date('2024-01-15'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://your-domain.com/posts/ai-service-planning',
      lastModified: new Date('2024-01-20'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://your-domain.com/posts/cursor-ai-guide',
      lastModified: new Date('2024-01-25'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}