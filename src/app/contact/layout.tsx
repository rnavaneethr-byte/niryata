import type { Metadata } from "next";

export const revalidate = 86400; // Revalidate every 24 hours

export const metadata: Metadata = {
  title: "Contact Us - Niryata Trading | Get in Touch",
  description: "Contact Niryata Trading for enquiries about our trading and logistics services. Reach us via email, phone, or visit our office in Kannur, Kerala.",
  keywords: "contact us, niryata trading, customer support, enquiries",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
