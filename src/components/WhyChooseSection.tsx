'use client';

import React, { useState } from 'react';

export default function WhyChooseSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      title: 'Strong International Presence',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Multi-Product Expertise',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: 'Integrated Solutions',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    },
    {
      title: 'Quality Assurance',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Timely Delivery',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Long-term Partnerships',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider block mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Niryata Trading?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for global trading and logistics excellence
          </p>
        </div>

        {/* Features Flow */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-2">
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                <div 
                  className="flex flex-col items-center text-center w-full md:w-48"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Circle with Icon - Sequential Filling Effect */}
                  <div className={`relative w-32 h-32 md:w-36 md:h-36 rounded-full border-4 shadow-lg flex items-center justify-center mb-6 transition-all duration-500 ease-in-out overflow-hidden ${
                    hoveredIndex !== null && index <= hoveredIndex
                      ? 'border-primary-600' 
                      : 'border-gray-200'
                  }`}>
                    {/* Background fill effect - cascading */}
                    <div 
                      className={`absolute inset-0 bg-primary-600 rounded-full transition-all ease-in-out ${
                        hoveredIndex !== null && index <= hoveredIndex ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                      }`}
                      style={{
                        transitionDuration: '500ms',
                        transitionDelay: hoveredIndex !== null && index <= hoveredIndex ? `${index * 150}ms` : '0ms'
                      }}
                    ></div>
                    
                    {/* Icon */}
                    <div className={`relative z-10 transition-all duration-500 ${
                      hoveredIndex !== null && index <= hoveredIndex ? 'text-white scale-110' : 'text-primary-600'
                    }`}
                    style={{
                      transitionDelay: hoveredIndex !== null && index <= hoveredIndex ? `${index * 150}ms` : '0ms'
                    }}>
                      {feature.icon}
                    </div>
                  </div>

                  {/* Title only */}
                  <div className="px-4">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                {/* Arrow between items */}
                {index < features.length - 1 && (
                  <div className="hidden md:flex items-start pt-16">
                    <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

