import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary-700 to-primary-900 text-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base md:text-xl text-primary-100 mb-8 md:mb-12 leading-relaxed">
            Connect with our team of experts and discover how Niryata Trading can deliver 
            efficient, reliable solutions for your global trading and logistics needs.
          </p>

          <div className="flex justify-center mb-12 md:mb-16">
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 md:px-10 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-all duration-300 text-center shadow-lg text-sm md:text-base"
            >
              Learn More
            </Link>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {/* Email */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm font-semibold mb-2 text-primary-200">Email</p>
              <a href="mailto:Sales@niryatagroup.com" className="text-white font-medium hover:text-primary-200 transition-colors">
                Sales@niryatagroup.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="text-sm font-semibold mb-2 text-primary-200">Phone</p>
              <a href="tel:+919961113088" className="text-white font-medium hover:text-primary-200 transition-colors">
                +91 99611 13088
              </a>
            </div>

            {/* Location */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-sm font-semibold mb-2 text-primary-200">Location</p>
              <p className="text-white font-medium">Kannur, Kerala, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

