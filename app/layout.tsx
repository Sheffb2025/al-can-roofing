import type { Metadata, Viewport } from 'next';
import { Providers } from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const businessName = 'AL-CAN Roofing';
const businessDescription =
  'Premium roofing contractor in Windsor & Essex County, Ontario. Roof repairs, replacements, and installations for residential & commercial properties.';
const businessPhone = '(519) 555-0123';
const businessEmail = 'info@alcanroofing.com';
const businessUrl = 'https://alcanroofing.com';
const businessAddress = {
  street: '123 Main Street',
  city: 'Windsor',
  province: 'Ontario',
  postalCode: 'N8X 1Y1',
  country: 'Canada',
};

const localAreas = [
  'Windsor',
  'Essex County',
  'LaSalle',
  'Tecumseh',
  'Amherstburg',
  'Lakeshore',
  'Essex',
  'Kingsville',
  'Leamington',
  'Belle River',
];

export const metadata: Metadata = {
  metadataBase: new URL(businessUrl),
  title: {
    template: '%s | AL-CAN Roofing - Windsor & Essex County',
    default: 'AL-CAN Roofing | Professional Roofing in Windsor & Essex County, Ontario',
  },
  description: businessDescription,
  keywords: [
    'roofing Windsor',
    'roof repair Windsor',
    'roof replacement Windsor',
    'flat roofing Windsor',
    'roofing Essex County',
    'residential roofing',
    'commercial roofing',
    'EPDM roofing',
    'TPO roofing',
    'asphalt shingles',
    ...localAreas,
  ].join(', '),
  authors: [{ name: 'AL-CAN Roofing' }],
  creator: 'AL-CAN Roofing',
  publisher: 'AL-CAN Roofing',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    url: businessUrl,
    siteName: businessName,
    title: 'AL-CAN Roofing | Professional Roofing Services',
    description: businessDescription,
    images: [
      {
        url: `${businessUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'AL-CAN Roofing',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AL-CAN Roofing',
    description: businessDescription,
    images: [`${businessUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: businessUrl,
    languages: {
      'en-CA': `${businessUrl}/en-CA`,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#DC2626',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${businessUrl}/#business`,
        name: businessName,
        description: businessDescription,
        url: businessUrl,
        email: businessEmail,
        telephone: businessPhone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: businessAddress.street,
          addressLocality: businessAddress.city,
          addressRegion: businessAddress.province,
          postalCode: businessAddress.postalCode,
          addressCountry: businessAddress.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 42.3149,
          longitude: -83.0364,
        },
        areaServed: localAreas.map((area) => ({
          '@type': 'City',
          name: area,
        })),
        priceRange: '$$',
        image: {
          '@type': 'ImageObject',
          url: `${businessUrl}/logo.png`,
          width: 300,
          height: 300,
        },
        sameAs: [
          'https://www.google.com/maps/place/AL-CAN+Roofing',
          'https://www.facebook.com/alcanroofing',
        ],
      },
      {
        '@type': 'RoofingContractor',
        '@id': `${businessUrl}/#roofing`,
        name: businessName,
        knowsAbout: [
          'Roof Repairs',
          'Roof Replacement',
          'Asphalt Shingles',
          'Flat Roofing',
          'EPDM',
          'TPO',
          'Modified Bitumen',
          'Residential Roofing',
          'Commercial Roofing',
        ],
        areaServed: localAreas,
      },
      {
        '@type': 'Organization',
        '@id': `${businessUrl}/#org`,
        name: businessName,
        url: businessUrl,
        logo: `${businessUrl}/logo.png`,
        sameAs: [
          'https://www.google.com/maps/place/AL-CAN+Roofing',
          'https://www.facebook.com/alcanroofing',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          telephone: businessPhone,
          email: businessEmail,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${businessUrl}/#website`,
        url: businessUrl,
        name: businessName,
        description: businessDescription,
        publisher: {
          '@id': `${businessUrl}/#org`,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${businessUrl}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
