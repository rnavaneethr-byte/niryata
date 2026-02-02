'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductCardProps {
  icon?: string;
  name: string;
  description: string;
  features: string[];
  badge?: string;
  image?: string;
}

export default function ProductCard({ 
  icon, 
  name, 
  description, 
  features,
  badge,
  image
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-primary-300 transition-all duration-300 hover:shadow-xl h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      {image && (
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={name}
            fill
            className={`object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          {/* Overlay */}
          <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isHovered ? 'opacity-10' : 'opacity-0'
          }`} />
        </div>
      )}

      {/* Icon or Fallback */}
      {!image && icon && (
        <div className="h-40 bg-gradient-to-br from-primary-50 to-gray-50 flex items-center justify-center border-b border-gray-200">
          <div className={`text-6xl transition-transform duration-300 ${
            isHovered ? 'scale-125 -rotate-12' : ''
          }`}>
            {icon}
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors line-clamp-2">
          {name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary-700 flex items-center justify-center mt-1">
                <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-gray-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="w-full py-2.5 px-4 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-all duration-300 text-sm group-hover:shadow-lg">
          Enquire Now
        </button>
      </div>
    </div>
  );
}
