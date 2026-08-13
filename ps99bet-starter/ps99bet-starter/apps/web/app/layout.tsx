import React from 'react';

export const metadata = {
  title: 'PS99BET',
  description: 'PS99 Gambling Site'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
