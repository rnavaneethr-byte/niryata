'use client';

import CategorySection from '@/components/CategorySection';

export default function ProductsPage() {
  const sparePartsProducts = [
    {
      icon: '�',
      image: '/images/products/aautomobile.webp',
      name: 'Automobile Spare Parts',
      description: 'High-quality automotive components and spare parts for various vehicle models.',
      features: ['OEM Quality', 'Multiple Brands', 'Warranty Backed', 'Global Sourcing']
    },
    {
      icon: '⚙️',
      image: '/images/products/industriaal.webp',
      name: 'Industrial & Machinery Components',
      description: 'Heavy-duty industrial equipment components for manufacturing and production.',
      features: ['Heavy Duty', 'Long Lasting', 'Custom Sizes', 'Expert Sourcing']
    },
    {
      icon: '✓',
      image: '/images/products/oem.webp',
      name: 'OEM & Quality-Assured Products',
      description: 'Certified OEM parts meeting international quality and safety standards.',
      features: ['Quality Certified', 'OEM Standards', 'Tested & Verified', 'Fast Delivery']
    }
  ];

  const garmentsProducts = [
    {
      icon: '👕',
      image: '/images/products/garments.webp',
      name: 'Readymade Garments',
      description: 'Quality readymade garments for men, women, and children across all categories.',
      features: ['Ready Stock', 'Multiple Sizes', 'Quality Fabrics', 'Affordable Pricing']
    },
    {
      icon: '👗',
      image: '/images/products/fashion.webp',
      name: 'Apparel & Fashion Products',
      description: 'Fashion-forward apparel and clothing solutions for retail and wholesale.',
      features: ['Latest Trends', 'Premium Quality', 'Various Styles', 'Seasonal Collections']
    },
    {
      icon: '🧵',
      image: '/images/products/bulk.webp',
      name: 'Bulk & Customized Sourcing',
      description: 'Bulk orders and customized sourcing solutions for businesses and retailers.',
      features: ['Bulk Orders', 'Custom Branding', 'Logo Printing', 'Wholesale Rates']
    }
  ];

  const foodProducts = [
    {
      icon: '🫘',
      image: '/images/products/grain.webp',
      name: 'Pulses & Grains',
      description: 'Premium quality pulses, lentils, and grain varieties meeting food standards.',
      features: ['Multiple Varieties', 'Quality Checked', 'Fresh Stock', 'Bulk Available']
    },
    {
      icon: '📦',
      image: '/images/products/packed.webp',
      name: 'Packaged Food Products',
      description: 'Ready-to-eat and packaged food items with quality assurance and certifications.',
      features: ['Quality Packaging', 'Long Shelf Life', 'Health Certified', 'Various Brands']
    },
    {
      icon: '🌾',
      image: '/images/products/agro.webp',
      name: 'Agro Commodities',
      description: 'Agricultural commodities including spices, rice, and other farm products.',
      features: ['Export Grade', 'Pure Quality', 'Wholesale Pricing', 'Timely Supply']
    }
  ];

  const otherProducts = [
    {
      icon: '🏭',
      image: '/images/products/machinery.webp',
      name: 'Machinery & Equipment',
      description: 'Industrial machinery, equipment, and tools for manufacturing and production.',
      features: ['Latest Technology', 'Warranty Backed', 'Installation Support', 'Technical Assistance']
    },
    {
      icon: '📦',
      image: '/images/products/generalgoods.webp',
      name: 'General Trading Goods',
      description: 'Wide range of trading goods across multiple categories and industries.',
      features: ['Multiple Categories', 'Quality Assured', 'Competitive Rates', 'Reliable Supply']
    },
    {
      icon: '🔍',
      image: '/images/products/custom.webp',
      name: 'Custom Sourcing on Request',
      description: 'Specialized custom sourcing services for unique business requirements and products.',
      features: ['Custom Orders', 'Dedicated Support', 'Global Network', 'Flexible Solutions']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-32 text-white overflow-hidden"
        style={{
          backgroundImage: 'url(/images/heroback.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '500px'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/85 to-primary-700/80"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-12 md:pt-20">
          <div className="max-w-3xl">
            <span className="text-primary-200 font-semibold text-xs md:text-sm uppercase tracking-widest block mb-3 md:mb-4">OUR PRODUCTS</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Our Product Portfolio
            </h1>
            <p className="text-primary-100 text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8">
              Comprehensive sourcing solutions across multiple industries with guaranteed quality, reliability, and competitive pricing. From automotive parts to garments, food, and industrial equipment.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
              <a href="/contact" className="inline-block bg-white text-primary-700 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-center text-sm md:text-base">
                ENQUIRE NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Spare Parts Section */}
      <CategorySection
        badge="CATEGORY 01"
        title="Spare Parts"
        description="High-quality automobile spare parts and industrial machinery components sourced from trusted manufacturers. We provide OEM and quality-assured products meeting international standards for automotive and industrial applications."
        products={sparePartsProducts}
      />

      {/* Garments Section */}
      <CategorySection
        badge="CATEGORY 02"
        title="Garments & Textiles"
        description="Quality readymade garments and apparel products for retailers and wholesalers. We offer bulk and customized sourcing solutions including custom branding, logo printing, and flexible order quantities to meet your business needs."
        products={garmentsProducts}
        alternateLayout
      />

      {/* Food & Agro Section */}
      <CategorySection
        badge="CATEGORY 03"
        title="Food & Agro Products"
        description="Quality pulses, grains, and packaged food products meeting food safety standards. We source agricultural commodities from reliable suppliers, ensuring quality assurance and timely delivery for retail and wholesale distribution."
        products={foodProducts}
      />

      {/* Other Products Section */}
      <CategorySection
        badge="CATEGORY 04"
        title="Other Trading Products"
        description="Industrial machinery, equipment, and general trading goods across multiple categories. We also provide custom sourcing services on request to help you find specialized products that meet your unique business requirements."
        products={otherProducts}
        alternateLayout
      />

      {/* Features Section */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: '🌍', title: 'Global Sourcing', text: 'Access to international suppliers and manufacturers' },
                { icon: '✓', title: 'Quality Assured', text: 'All products undergo rigorous quality checks' },
                { icon: '⚡', title: 'Fast Delivery', text: 'Efficient logistics for timely delivery' },
                { icon: '💰', title: 'Best Prices', text: 'Competitive pricing with bulk discounts' }
              ].map((feature, idx) => (
                <div key={idx} className="text-center group hover:bg-white/10 p-6 rounded-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-primary-100 text-sm">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Need Custom Sourcing?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Can&apos;t find exactly what you&apos;re looking for? Our dedicated sourcing team specializes in locating and procuring specialized products tailored to your unique requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors text-center"
              >
                Request Custom Quote
              </a>
              <a
                href="/contact"
                className="inline-block border-2 border-primary-700 text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 hover:text-white transition-colors text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
