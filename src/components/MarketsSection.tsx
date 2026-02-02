import React from 'react';
import Image from 'next/image';

const leftMarkets = [
  {
    name: 'Africa',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: 'Serving diverse markets across the African continent with quality products'
  },
  {
    name: 'Middle East',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    description: 'Established presence in Gulf and Middle Eastern markets'
  }
];

const rightMarkets = [
  {
    name: 'Europe',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: 'Growing operations in European markets with reliable supply chains'
  },
  {
    name: 'Asia Pacific',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: 'Expanding reach to emerging Asia Pacific markets'
  }
];

export default function MarketsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[15rem] font-bold text-gray-100 opacity-30 select-none whitespace-nowrap">
          MARKETS
        </h2>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary-700 font-semibold text-sm uppercase tracking-wider mb-2 block">Our Presence</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Global Markets We Serve
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Side - Markets */}
            <div className="space-y-12">
              {leftMarkets.map((market, index) => (
                <div key={index} className="flex items-start gap-4 justify-end text-right">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{market.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{market.description}</p>
                  </div>
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 border-2 border-primary-200">
                    {market.icon}
                  </div>
                </div>
              ))}
            </div>

            {/* Center - Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/images/01.webp"
                  alt="Professional Trading"
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Right Side - Markets */}
            <div className="space-y-12">
              {rightMarkets.map((market, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 border-2 border-primary-200">
                    {market.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{market.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{market.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
