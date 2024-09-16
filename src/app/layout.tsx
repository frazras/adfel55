import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Advent Fellowship 55th Anniversary",
  description: "Celebrate 55 years of Advent Fellowship - Renewed by His Grace, Sustained by His Spirit",
  keywords: "Advent Fellowship, 55th Anniversary, Church Celebration, Chapel Day, Singspiration, Brunch, Potluck, Hike, Blue Mountains, 55th Anniversary Celebration",
    openGraph: {
    title: "Advent Fellowship 55th Anniversary",
    description: "Join us in celebrating 55 years of faith and community",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Advent Fellowship 55th Anniversary",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
