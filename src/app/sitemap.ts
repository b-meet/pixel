import { MetadataRoute } from 'next';
import { blogPosts, services, tattooStyles } from '@/lib/data';

export const dynamic = 'force-static';


const BASE_URL = 'https://pixeltattoos.in';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/about',
        '/tattoo-categories',
        '/faq',
        '/contact', // Assuming there is a contact section/page
        '/blog',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const serviceRoutes = services.map((service) => ({
        url: `${BASE_URL}/tattoo-categories/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    const styleRoutes = tattooStyles.map((style) => ({
        url: `${BASE_URL}/tattoo-categories/${style.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const blogRoutes = blogPosts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date), // Using post date as last modified
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...serviceRoutes, ...styleRoutes, ...blogRoutes];
}
