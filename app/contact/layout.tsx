import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact AL-CAN Roofing for a free estimate. Call (519) 555-0123 or fill out our contact form. Serving Windsor & Essex County.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
