import '@/styles/globals.css';

export const metadata = {
  title: 'travel_agency_2-travel-wanderlust',
  description: 'travel_agency_2-travel-wanderlust',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
