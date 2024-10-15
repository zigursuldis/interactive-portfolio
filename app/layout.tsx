import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const departureMono = localFont({
  src: "./fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure-mono",
  preload: true,
  display: "swap",
});

export const metadata: Metadata = {
  title: "Uldis Zigurs frontend developer portfolio",
  description: "Interactive portfolio",
  keywords: "Uldis Zigurs, Uldis Žīgurs, frontend developer, portfolio",
  openGraph: {
    type: "website",
    url: "https://uldiszigurs.lv",
    title: "Uldis Zigurs frontend developer portfolio",
    description: "Interactive portfolio",
    siteName: "Uldis Zigurs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-bg-primary text-text-primary scroll-smooth">
      <body
        className={`${departureMono.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
