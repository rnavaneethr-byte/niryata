import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
const MarketsSection = dynamic(() => import("@/components/MarketsSection"), { loading: () => <div className="h-64 md:h-96 bg-gradient-to-b from-gray-50 to-white" /> });
const CTASection = dynamic(() => import("@/components/CTASection"), { loading: () => <div className="h-64 md:h-96 bg-gradient-to-br from-primary-700 to-primary-900" /> });

export const metadata: Metadata = {
  title: "Home - Niryata Trading | Global Trading & Logistics Solutions",
  description: "Discover Niryata Trading's comprehensive global trading and logistics solutions. With international presence across Africa, Middle East, and Europe.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection/>
      <MarketsSection />
      <CTASection />
    </main>
  );
}
