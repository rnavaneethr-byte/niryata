'use client';

import React, { useState, memo } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const NavBar = memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => pathname === path;

  const handleNavClick = (path: string) => {
    router.prefetch(path);
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
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary-700">
            <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center text-white font-bold">
              N
            </div>
            <span>NIRYATA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              onMouseEnter={() => handleNavClick('/')}
              className={`font-semibold transition-colors ${
                isActive('/') ? 'text-primary-700' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onMouseEnter={() => handleNavClick('/about')}
              className={`font-semibold transition-colors ${
                isActive('/about') ? 'text-primary-700' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              About
            </Link>
            <Link
              href="/products"
              onMouseEnter={() => handleNavClick('/products')}
              className={`font-semibold transition-colors ${
                isActive('/products') ? 'text-primary-700' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Products
            </Link>
            <Link
              href="/contact"
              onMouseEnter={() => handleNavClick('/contact')}
              className={`font-semibold transition-colors ${
                isActive('/contact') ? 'text-primary-700' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
            >
              Call Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1 w-8 h-8"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`h-1 w-full bg-gray-700 transition-transform ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
            <div className={`h-1 w-full bg-gray-700 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`h-1 w-full bg-gray-700 transition-transform ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <Link href="/" className="block py-2 text-gray-700 hover:text-primary-600" onClick={() => handleNavClick('/')}>Home</Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-primary-600" onClick={() => handleNavClick('/about')}>About</Link>
            <Link href="/products" className="block py-2 text-gray-700 hover:text-primary-600" onClick={() => handleNavClick('/products')}>Products</Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-primary-600" onClick={() => handleNavClick('/contact')}>Contact</Link>
            <Link href="/contact" className="block py-2 bg-primary-700 text-white rounded px-4 mt-2 font-semibold">Call Now</Link>
          </div>
        )}
      </div>
    </nav>
    </>
  );
});

export default NavBar;
