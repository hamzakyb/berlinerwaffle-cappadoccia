import type { Metadata } from "next";
import { Hanken_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Berliner Waffle Cappadocia - Mutluluğun En Tatlı Hali",
  description: "Taptaze hamur, bol malzeme ve sınır tanımayan soslar. Kutuda ya da bardakta, sokağın en premium hali!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${hankenGrotesk.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Material Symbols Outlined */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Custom Favicon Logo */}
        <link rel="icon" type="image/png" href="/logowaffle.png" />
      </head>
      <body className="text-neutral-ink font-body-md antialiased selection:bg-black selection:text-honey-glaze overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
