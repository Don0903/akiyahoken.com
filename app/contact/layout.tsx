
import { Inter } from "next/font/google";

export const metadata = {
  title: 'About',
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/profile.jpg" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
