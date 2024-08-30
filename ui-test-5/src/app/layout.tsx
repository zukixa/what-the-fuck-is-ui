import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "zukijourney-bots v2.9",
  description: "the documentation for zukijourney-bots, the #1 AI bots!",
  openGraph: {
    title: "zukijourney-bots v2.9",
    description: "the documentation for zukijourney-bots, the #1 AI bots!",
    url: 'https://bots.xyzbot.net',
    siteName: 'Zukijourney Bots',
    images: [
      {
        url: 'https://files.catbox.moe/st5hu3.png', 
        width: 1200,
        height: 630,
        alt: 'Zukijourney Bots',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "zukijourney-bots v2.9",
    description: "the documentation for zukijourney-bots, the #1 AI bots!",
    images: ['https://files.catbox.moe/st5hu3.png'],
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