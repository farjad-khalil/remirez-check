import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | M. Ramirez Landscaping',
  description:
    "Get in touch with M. Ramirez Landscaping for a free estimate or to schedule your landscaping service. We're ready to assist you with all your outdoor needs.",
  keywords:
    'contact landscaper, landscaping quote, free estimate, schedule landscaping, M. Ramirez Landscaping contact',
  openGraph: {
    title: 'Contact M. Ramirez Landscaping',
    description:
      'Reach out for free estimates, service scheduling, and all your landscaping inquiries.',
    url: 'https://mramirezlandscaping.com/contact',
    siteName: 'M. Ramirez Landscaping',
    images: [
      {
        url: '/images/contact-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact M. Ramirez Landscaping',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact M. Ramirez Landscaping',
    description:
      'Reach out for free estimates, service scheduling, and all your landscaping inquiries.',
    images: ['/images/contact-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://mramirezlandscaping.com/contact',
  },
  other: {
    'format-detection': 'telephone=yes',
  },
}
