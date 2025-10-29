// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Space_Grotesk, Poppins, Arizonia } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const arizonia = Arizonia({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-arizonia",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Trupti Warjurkar - Become the communiucator you were meant to be",
  description:
    "Helping you unlock your true potential through impactful communication and leadership skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Meta Pixel script - loads after the page becomes interactive */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1711575312859558');
fbq('track', 'PageView');`}
      </Script>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${poppins.variable} ${arizonia.variable} antialiased`}
      >
        {/* noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1711575312859558&ev=PageView&noscript=1"
            alt="fb-pixel-noscript"
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
