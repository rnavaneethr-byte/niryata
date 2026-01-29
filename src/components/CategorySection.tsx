'use client';

import React from 'react';
import ProductCard from './ProductCard';

interface CategorySectionProps {
  badge: string;
  title: string;
  description: string;
  products: Array<{
    icon?: string;
    image?: string;
    name: string;
    description: string;
    features: string[];
  }>;
  alternateLayout?: boolean;
}

export default function CategorySection({ 
  badge,
  title, 
  description, 
  products,
  alternateLayout = false 
}: CategorySectionProps) {
  return (
    <section className={`py-20 ${alternateLayout ? 'bg-white' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Category Header */}
          <div className="mb-16">
            <span className="text-primary-700 font-semibold text-sm uppercase tracking-widest block mb-3">{badge}</span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h2>
            
            <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
              {description}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <ProductCard
                key={idx}
                {...product}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
