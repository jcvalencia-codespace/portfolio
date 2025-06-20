import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jairus Valencia | Portfolio ",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon as "JV" with gradient background */}
        <link
          rel="icon"
          href={`data:image/svg+xml,${encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#06b6d4"/>
                  <stop offset="100%" stop-color="#a21caf"/>
                </linearGradient>
              </defs>
              <rect width="64" height="64" rx="12" fill="url(#g)"/>
              <text x="50%" y="56%" text-anchor="middle" font-size="32" font-family="Arial, sans-serif" font-weight="bold" fill="#fff" dy=".1em">JV</text>
            </svg>
          `)}`}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
