import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap", preload: true });
const poppins = Poppins({ weight: ["600", "700"], subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Niryata Trading Private Limited - Global Trading & Logistics Solutions",
  description: "Professionally managed Trading and Logistics company delivering reliable sourcing, trading, and end-to-end logistics solutions across international markets.",
  keywords: "trading, logistics, international, import export, freight forwarding, customs clearance, global markets",
  authors: [{ name: "Niryata Trading Private Limited" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
  openGraph: {
    title: "Niryata Trading Private Limited",
    description: "Global Trading & Logistics Solutions",
    url: "https://niryatatrading.com",
    siteName: "Niryata Trading",
    images: [{
      url: "/images/about.jpg",
      width: 1200,
      height: 630,
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niryata Trading Private Limited",
    description: "Global Trading & Logistics Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://niryatatrading.com" />
        <meta name="theme-color" content="#1a4d5c" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Niryata Trading Private Limited",
              "url": "https://niryatatrading.com",
              "logo": "https://niryatatrading.com/logo.png",
              "description": "Global Trading & Logistics Solutions",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop No: 16/755, Vankulathvayal",
                "addressLocality": "Azhikode",
                "addressRegion": "Kerala",
                "postalCode": "670009",
                "addressCountry": "IN"
              },
              "telephone": "+919961113088",
              "email": "Sales@niryatagroup.com",
              "sameAs": [],
              "foundingDate": "2020",
              "areaServed": ["Africa", "Middle East", "Europe"],
              "serviceType": ["International Trading", "Freight Forwarding", "Customs Clearance", "Warehousing"]
            })
          }}
        />
      </head>
      <body className={`${inter.className} ${poppins.className}`}>
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
