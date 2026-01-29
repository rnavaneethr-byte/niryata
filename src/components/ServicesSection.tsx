'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'International Trading',
    description: 'We source and supply a diverse range of products, meeting international quality standards and client-specific requirements.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    image: '/images/internationaltrading.jpg'
  },
  {
    title: 'Freight Forwarding',
    description: 'International freight forwarding services ensuring your goods reach their destination safely and on time.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    image: '/images/freight.jpg'
  },
  {
    title: 'Customs Clearance',
    description: 'Expert customs clearance support to ensure smooth and compliant international trade operations.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    image: '/images/customclearence.jpg'
  },
  {
    title: 'Warehousing & Distribution',
    description: 'Comprehensive warehousing and distribution solutions to manage your supply chain efficiently.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    image: '/images/warehouse.jpg'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-primary-100 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary-700 font-semibold text-sm uppercase tracking-wider mb-2 block">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What You Can Do<br />with Niryata Trading
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Default State - White Card with Icon */}
              <div className="absolute inset-0 bg-white p-8 flex flex-col justify-between transition-opacity duration-500 group-hover:opacity-0">
                <div>
                  <div className="text-primary-700 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
                <div>
                  <Link href="/products" className="text-primary-600 font-semibold inline-flex items-center gap-2">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Hover State - Image Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-800/70 to-primary-900/70"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                  <div>
                    <div className="mb-4 text-white">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="leading-relaxed opacity-95">{service.description}</p>
                  </div>
                  <div>
                    <Link href="/products" className="text-white font-semibold inline-flex items-center gap-2">
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
