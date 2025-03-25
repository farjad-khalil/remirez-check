import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work | Gallery | M. Ramirez Landscaping',
  description:
    'View our landscaping transformations. Explore a curated gallery of lawns, gardens, and outdoor spaces beautifully designed and maintained by our team.',
  keywords:
    'landscaping portfolio, garden gallery, landscape design examples, yard transformations, before and after landscaping, M. Ramirez projects',
  openGraph: {
    title: 'Our Landscaping Portfolio | M. Ramirez Landscaping',
    description:
      'Browse our gallery of stunning landscape transformations and outdoor living spaces.',
    url: 'https://mramirezlandscaping.com/gallery',
    siteName: 'M. Ramirez Landscaping',
    images: [
      {
        url: '/images/gallery-showcase.jpg',
        width: 1200,
        height: 630,
        alt: 'M. Ramirez Landscaping Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Landscaping Portfolio | M. Ramirez Landscaping',
    description:
      'Browse our gallery of stunning landscape transformations and outdoor living spaces.',
    images: ['/images/gallery-showcase.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://mramirezlandscaping.com/gallery',
  },
  other: {
    'pinterest-rich-pin': 'true',
  },
}
