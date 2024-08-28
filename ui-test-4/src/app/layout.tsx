import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "zukijourney-api v2.9",
  description: "the documentation for zukijourney-api v2.9, the #1 multi-ai api",
  openGraph: {
    title: "zukijourney-api v2.9",
    description: "The documentation for zukijourney-api v2.9, the #1 multi-ai api",
    url: 'https://docs.xyzbot.net',
    siteName: 'Zukijourney API',
    images: [
      {
        url: 'https://files.catbox.moe/6x0p48.png', 
        width: 1200,
        height: 630,
        alt: 'Zukijourney API',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "zukijourney-api v2.9",
    description: "The documentation for zukijourney-api v2.9, the #1 multi-ai api",
    images: ['https://files.catbox.moe/6x0p48.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}