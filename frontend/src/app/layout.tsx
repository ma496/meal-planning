import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Meal Planner',
  description: 'Plan your weekly meals',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
