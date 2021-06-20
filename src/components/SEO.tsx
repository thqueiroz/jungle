import Head from 'next/head';

interface SEOProps {
    title: string;
    description?: string;
    image?: string;
}

export function SEO({ title, description, image }: SEOProps) {
    const pageTitle = `${title} | Hapu`;
    const pageImage = image ? image : null;  
    return (
        <Head>
            <title>{pageTitle}</title>
            {description && <meta name="description" content={description} />}
            {pageImage && <meta name="image" content={pageImage} />}
        </Head>
    )
}