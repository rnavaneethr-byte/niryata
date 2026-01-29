export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-primary-100 mt-2">Last updated: January 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We collect information you voluntarily provide through our contact forms, including your name, email address, phone number, and business inquiries. This information is used solely to respond to your requests and provide our trading and logistics services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Your information is used to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
              <li>Process and respond to your inquiries</li>
              <li>Provide trading and logistics solutions</li>
              <li>Send updates about our services</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We take reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Sharing</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, rent, or share your personal information with third parties without your explicit consent, except where required by law or necessary to provide our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may use cookies to enhance your browsing experience. You can disable cookies through your browser settings if you prefer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              If you have any questions about this Privacy Policy, please contact us:
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
