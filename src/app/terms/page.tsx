export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="text-primary-100 mt-2">Last updated: January 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using the Niryata Trading website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. About Our Services</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Niryata Trading provides global trading and logistics services including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
              <li>Product sourcing and procurement</li>
              <li>Import and export solutions</li>
              <li>Logistics and supply chain management</li>
              <li>Trading services across multiple product categories</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Website Use</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You agree to use this website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the website. Prohibited behavior includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
              <li>Harassing or causing distress or inconvenience to any person</li>
              <li>Disrupting the normal flow of communication within our website</li>
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Using automated tools to access our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Service Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              All services provided by Niryata Trading are subject to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
              <li>Formal quote and agreement between parties</li>
              <li>Applicable international trading laws and regulations</li>
              <li>Customs and compliance requirements</li>
              <li>Payment terms agreed upon in writing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on this website, including text, graphics, logos, and images, is the property of Niryata Trading or its content suppliers and is protected by international copyright laws. You may not reproduce or distribute any content without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              Niryata Trading provides this website on an &quot;as-is&quot; basis. We are not liable for any direct, indirect, incidental, special, or consequential damages arising from your use of or inability to use the website or our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modifications to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following the posting of revised terms means that you accept and agree to the changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> Sales@niryatagroup.com</p>
              <p className="text-gray-700"><strong>Phone:</strong> +91 99611 13088</p>
              <p className="text-gray-700"><strong>Location:</strong> Shop No: 16/755, Vankulathvayal, Azhikode, Kannur – 670009, Kerala, India</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
