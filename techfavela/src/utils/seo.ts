import Head from 'next/head'
import { env } from '../config/env'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function SEO({
  title,
  description = 'TechFavela - Sua loja de tecnologia na quebrada. Produtos de qualidade e serviços especializados para seu PC.',
  image = '/images/og-image.jpg',
  url = env.siteUrl
}: SEOProps) {
  const pageTitle = title ? `${title} | ${env.siteName}` : env.siteName

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
} 