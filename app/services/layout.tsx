import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Professional roofing services in Windsor: roof repairs, replacements, asphalt shingles, flat roofing, EPDM, TPO, and commercial roofing.',
  keywords: [
    'roof repair Windsor',
    'roof replacement Windsor',
    'flat roofing Windsor',
    'asphalt shingles',
    'EPDM roofing',
    'TPO roofing',
    'roofing services',
  ],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
