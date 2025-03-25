import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | M. Ramirez Landscaping',
  description:
    'Explore our professional landscaping services including garden design, sod installation, seasonal cleanup, and tree trimming. Quality service, guaranteed results.',
  keywords:
    'landscaping services, garden design, sod installation, lawn care, tree trimming, seasonal cleanup, professional landscapers, outdoor maintenance',
  openGraph: {
    title: 'Professional Landscaping Services | M. Ramirez Landscaping',
    description:
      'Comprehensive landscaping solutions for your home or business - from design to maintenance.',
    url: 'https://mramirezlandscaping.com/services',
    siteName: 'M. Ramirez Landscaping',
    images: [
      {
        url: '/images/services-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'M. Ramirez Landscaping Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Landscaping Services | M. Ramirez Landscaping',
    description:
      'Comprehensive landscaping solutions for your home or business - from design to maintenance.',
    images: ['/images/services-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://mramirezlandscaping.com/services',
  },
  other: {
    'og:price:amount': 'Contact for pricing',
    'og:price:currency': 'USD',
  },
}
