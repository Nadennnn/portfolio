import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://ynadennnporto.vercel.app',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1.0,
		},
		{
			url: 'https://ynadennnporto.vercel.app/mail',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
	];
}
