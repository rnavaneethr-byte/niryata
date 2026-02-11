'use client';

import React, { useState, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NavBar = memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:bg-primary-600 focus:text-white focus:p-2 focus:z-50">
        Skip to main content
      </a>
      
      <nav className="fixed w-full bg-white shadow-md z-50" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Niryata Trading Logo" 
              width={180} 
              height={60}
              priority
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`font-semibold transition-colors ${
                isActive('/') ? 'text-primary-700' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-semibold transition-colors ${
                isActive('/about') ? 'text-primary-700' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              About
            </Link>
            <Link
              href="/products"
              className={`font-semibold transition-colors ${
                isActive('/products') ? 'text-primary-700' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className={`h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
            <div className={`h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 bg-white">
            <Link href="/" className="block py-3 px-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors font-medium" onClick={closeMenu}>Home</Link>
            <Link href="/about" className="block py-3 px-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors font-medium" onClick={closeMenu}>About</Link>
            <Link href="/products" className="block py-3 px-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors font-medium" onClick={closeMenu}>Products</Link>
            <Link href="/contact" className="block py-3 px-2 bg-primary-700 text-white rounded-md mt-3 font-semibold hover:bg-primary-800 transition-colors" onClick={closeMenu}>Contact Us</Link>
          </div>
        )}
      </div>
    </nav>
    </>
  );
});

export default NavBar;
