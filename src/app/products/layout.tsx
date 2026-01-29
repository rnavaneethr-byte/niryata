import type { Metadata } from "next";

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: "Products - Niryata Trading | Trading & Logistics Solutions",
  description: "Explore our comprehensive product categories including spare parts, cosmetics, raw materials, food products, textiles, and more.",
  keywords: "products, spare parts, cosmetics, raw materials, food products, textiles, trading",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
