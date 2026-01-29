'use client';

import React, { useState, useEffect, memo } from 'react';
import Image from 'next/image';

const AboutPageClient = memo(function AboutPage() {
  const [visionText, setVisionText] = useState('');
  const [missionText, setMissionText] = useState('');
  const [showVision, setShowVision] = useState(false);
  const [showMission, setShowMission] = useState(false);

  const fullVisionText = 'To be a trusted global trading and logistics partner delivering sustainable value.';
  const fullMissionText = 'To provide high-quality products and efficient logistics solutions through integrity, professionalism, and innovation.';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'vision-section') {
              setShowVision(true);
            }
            if (entry.target.id === 'mission-section') {
              setShowMission(true);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const visionElement = document.getElementById('vision-section');
    const missionElement = document.getElementById('mission-section');

    if (visionElement) observer.observe(visionElement);
    if (missionElement) observer.observe(missionElement);

    return () => {
      if (visionElement) observer.unobserve(visionElement);
      if (missionElement) observer.unobserve(missionElement);
    };
  }, []);

  useEffect(() => {
    if (showVision && visionText.length < fullVisionText.length) {
      const timer = requestAnimationFrame(() => {
        setTimeout(() => {
          setVisionText(fullVisionText.slice(0, visionText.length + 1));
        }, 30);
      });
      return () => cancelAnimationFrame(timer);
    }
  }, [showVision, visionText]);

  useEffect(() => {
    if (showMission && missionText.length < fullMissionText.length) {
      const timer = requestAnimationFrame(() => {
        setTimeout(() => {
          setMissionText(fullMissionText.slice(0, missionText.length + 1));
        }, 30);
      });
      return () => cancelAnimationFrame(timer);
    }
  }, [showMission, missionText]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section 
        className="relative py-32 text-white overflow-hidden"
        style={{ minHeight: '600px' }}
      >
        {/* Optimized Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about.jpg"
            alt="About Us Background"
            fill
            priority
            quality={85}
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/85 to-primary-700/80 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary-200 font-semibold text-sm uppercase tracking-widest block mb-4">ABOUT US</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              The Best Choice For your Business
            </h1>
            <p className="text-primary-100 text-lg md:text-xl leading-relaxed mb-8">
              Niryata Trading Private Limited is a professionally managed Trading and Logistics company, delivering reliable sourcing, trading, and end-to-end logistics solutions across international markets. Our operations are driven by efficiency, compliance, and a strong commitment to customer satisfaction.
            </p>
            <div className="flex items-center gap-4">
              <a href="/contact" className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Niryata Trading Private Limited
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Niryata Trading Private Limited is a professionally managed Trading and Logistics company, 
                delivering reliable sourcing, trading, and end-to-end logistics solutions across international markets. 
                Our operations are driven by efficiency, compliance, and a strong commitment to customer satisfaction.
              </p>
              <p className="mb-6">
                With a growing global footprint, we serve clients across Africa, the Middle East, Europe, 
                and other emerging markets, ensuring seamless movement of goods from origin to destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision */}
              <div id="vision-section" className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary-200">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 min-h-[60px]">
                  {visionText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>

              {/* Mission */}
              <div id="mission-section" className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary-200">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 min-h-[80px]">
                  {missionText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We uphold the highest standards of integrity in all our actions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every service we deliver.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Partnership</h3>
                <p className="text-gray-600">
                  We build long-term relationships with our clients and partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default AboutPageClient;
