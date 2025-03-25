// Metadata
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | M. Ramirez Landscaping',
  description:
    'Learn more about M. Ramirez Landscaping — our mission, values, and the team dedicated to transforming your outdoor spaces.',
  keywords:
    'landscaping services, professional landscapers, landscape design, garden maintenance, M. Ramirez Landscaping, outdoor transformation',
  openGraph: {
    title: 'About Us | M. Ramirez Landscaping',
    description:
      'Learn about our story, approach, and commitment to creating beautiful outdoor spaces.',
    url: 'https://mramirezlandscaping.com/about',
    siteName: 'M. Ramirez Landscaping',
    images: [
      {
        url: '/images/about-us-team.jpg',
        width: 1200,
        height: 630,
        alt: 'M. Ramirez Landscaping Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | M. Ramirez Landscaping',
    description:
      'Learn about our story, approach, and commitment to creating beautiful outdoor spaces.',
    images: ['/images/about-us-team.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://mramirezlandscaping.com/about',
  },
}
