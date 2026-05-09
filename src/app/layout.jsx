import '@/styles/globals.css';
import { Analytics } from '@/components/analytics/Analytics';

export const metadata = {
  title: 'Gallant Travel Agency',
  description: 'Gallant Travel Agency creates colorful, curated travel packages with expert planning and personal service.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}