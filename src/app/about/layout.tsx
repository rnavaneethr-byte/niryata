import type { Metadata } from "next";

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: "About Us - Niryata Trading | Global Trading Company",
  description: "Learn about Niryata Trading Private Limited, our vision, mission, core values, and commitment to global trading and logistics excellence.",
  keywords: "about us, trading company, logistics, niryata trading, global trading",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
