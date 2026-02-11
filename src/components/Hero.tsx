'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [stats, setStats] = useState({
    years: 0,
    partners: 0,
    quality: 0
  });

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    // Animate to 5
    intervals.push(setInterval(() => {
      setStats(prev => ({
        ...prev,
        years: Math.min(prev.years + 1, 5)
      }));
    }, 100));

    // Animate to 50
    intervals.push(setInterval(() => {
      setStats(prev => ({
        ...prev,
        partners: Math.min(prev.partners + 5, 50)
      }));
    }, 50));

    // Animate to 100
    intervals.push(setInterval(() => {
      setStats(prev => ({
        ...prev,
        quality: Math.min(prev.quality + 10, 100)
      }));
    }, 30));

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  return (
    <section 
      className="min-h-screen bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 text-white pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden"
    >
      {/* Optimized Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/heroback.webp"
          alt="Hero Background"
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-800/95 to-primary-700/90 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Text Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Global Trading & Logistics Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-100 mb-6 md:mb-8 leading-relaxed">
              Niryata Trading Private Limited delivers reliable sourcing, trading, and end-to-end logistics solutions across international markets with unmatched efficiency and professionalism.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
              <a href="/contact" className="bg-white text-primary-700 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center text-sm md:text-base">
                Get Started
              </a>
              <a href="/about" className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center text-sm md:text-base">
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              <div className="bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-lg border border-white/20">
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">{stats.years}+</div>
                <div className="text-xs md:text-sm text-primary-100">Years of Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-lg border border-white/20">
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">{stats.partners}+</div>
                <div className="text-xs md:text-sm text-primary-100">Global Partners</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-lg border border-white/20">
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">{stats.quality}%</div>
                <div className="text-xs md:text-sm text-primary-100">Quality Assured</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="hidden lg:block relative h-96">
            <Image
              src="/images/heroback.webp"
              alt="Trading Professional"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
