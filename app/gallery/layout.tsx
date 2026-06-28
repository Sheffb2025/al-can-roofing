import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'View AL-CAN Roofing before & after gallery showcasing our roofing projects in Windsor & Essex County.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
