import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about AL-CAN Roofing - trusted roofing contractor with 14+ years of experience serving Windsor & Essex County, Ontario.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
