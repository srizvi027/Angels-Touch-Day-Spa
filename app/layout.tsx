import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import StickyBookButton from "@/components/StickyBookButton";
import RecaptchaProvider from "@/components/RecaptchaProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

const siteUrl = "https://www.angelstouchdayspa.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Angel's Touch Day Spa | Avondale NSW — Massage, Facials & Pamper Parties",
    template: "%s | Angel's Touch Day Spa",
  },
  description:
    "A sanctuary for your body, mind & soul. Personalised massage, facial and body treatments in Avondale, NSW. Book your experience or enquire about our Hens & Kids Pamper Parties.",
  keywords: [
    "day spa Avondale NSW",
    "mobile spa NSW",
    "massage Avondale",
    "facial treatments NSW",
    "hens pamper party",
    "kids pamper party",
    "in-home spa treatments",
  ],
  openGraph: {
    title: "Angel's Touch Day Spa | A Sanctuary for Your Body, Mind & Soul",
    description:
      "Personalised massage, facial and body treatments plus unforgettable Pamper Parties in Avondale, NSW.",
    url: siteUrl,
    siteName: "Angel's Touch Day Spa",
    images: [{ url: "/images/logo.png", width: 512, height: 512 }],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel's Touch Day Spa",
    description: "A sanctuary for your body, mind & soul in Avondale, NSW.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  name: "Angel's Touch Day Spa",
  image: `${siteUrl}/images/logo.png`,
  "@id": siteUrl,
  url: siteUrl,
  telephone: "+61413356910",
  email: "angelstouchdayspa22@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Avondale",
    addressRegion: "NSW",
    postalCode: "2530",
    addressCountry: "AU",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"], opens: "09:30", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:30", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "15:00" },
  ],
  sameAs: ["https://www.instagram.com/angels_touchdayspa"],
  priceRange: "$$",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Spa Treatments & Pamper Parties",
  provider: { "@type": "DaySpa", name: "Angel's Touch Day Spa" },
  areaServed: "Avondale, NSW, Australia",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Spa Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Massage Therapy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Facial Treatment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Body Treatment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ultimate Rituals" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hair Treatments" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hens Pamper Party" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kids Pamper Party" } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable} font-body bg-cream antialiased`}
      >
        <RecaptchaProvider>{children}</RecaptchaProvider>
        <StickyBookButton />
      </body>
    </html>
  );
}
