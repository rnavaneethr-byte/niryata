import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - World Map */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[600px]">
              {/* World Map Image */}
              <div className="relative">
                <Image
                  src="/images/about.jpg"
                  alt="Global Market Presence"
                  width={600}
                  height={350}
                  className="w-full h-auto"
                />
                
                {/* Market Overlays */}
                {/* Africa Market - 41% */}
                <div className="absolute top-[65%] left-[28%] flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse shadow-lg"></div>
                  <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-primary-200">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-primary-500">41%</span>
                      <span className="text-primary-500 text-xl font-bold">»</span>
                    </div>
                    <p className="text-xs text-gray-600 font-medium">Africa Market</p>
                  </div>
                </div>

                {/* Middle East - 35% */}
                <div className="absolute top-[40%] left-[55%] flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse shadow-lg"></div>
                  <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-primary-200">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-primary-500">35%</span>
                      <span className="text-primary-500 text-xl font-bold">»</span>
                    </div>
                    <p className="text-xs text-gray-600 font-medium">Middle East</p>
                  </div>
                </div>

                {/* Europe - 17% */}
                <div className="absolute top-[18%] left-[45%] flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse shadow-lg"></div>
                  <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-primary-200">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-primary-500">17%</span>
                      <span className="text-primary-500 text-xl font-bold">»</span>
                    </div>
                    <p className="text-xs text-gray-600 font-medium">Europe</p>
                  </div>
                </div>

                {/* Asia Pacific - 7% */}
                <div className="absolute top-[48%] right-[18%] flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse shadow-lg"></div>
                  <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-primary-200">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-primary-500">7%</span>
                      <span className="text-primary-500 text-xl font-bold">»</span>
                    </div>
                    <p className="text-xs text-gray-600 font-medium">Asia Pacific</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <span className="text-primary-700 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4 leading-tight">
                The Best Choice For<br />your Business.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Niryata Trading Private Limited is a professionally managed Trading and Logistics company, 
                delivering reliable sourcing, trading, and end-to-end logistics solutions across international 
                markets. Our operations are driven by efficiency, compliance, and a strong commitment to 
                customer satisfaction.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center border-2 border-primary-600">
                    <svg className="w-7 h-7 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Global Trading Expert</h3>
                      <p className="text-gray-600 mt-1">Multi-product trading expertise across continents</p>
                    </div>
                    <div className="hidden sm:block flex-shrink-0 w-32 h-24 relative rounded-lg overflow-hidden">
                      <Image
                        src="/images/about.jpg"
                        alt="Global Trading"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center border-2 border-primary-600">
                    <svg className="w-7 h-7 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">End-to-End Logistics</h3>
                  <p className="text-gray-600 mt-1">Comprehensive logistics and supply chain solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
