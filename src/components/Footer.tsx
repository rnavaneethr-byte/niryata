import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center text-white font-bold">
                N
              </div>
              <span className="font-bold text-white">NIRYATA</span>
            </div>
            <p className="text-sm text-gray-400">
              Global Trading & Logistics solutions for international markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-primary-400 transition-colors">Products</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">International Trading</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Freight Forwarding</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Customs Clearance</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Warehousing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm">
              <p>Email: <a href="mailto:Sales@niryatagroup.com" className="hover:text-primary-400 transition-colors">Sales@niryatagroup.com</a></p>
              <p>Phone: <a href="tel:+919961113088" className="hover:text-primary-400 transition-colors">+91 99611 13088</a></p>
              <p>Location: Kannur, Kerala, India</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; 2026 Niryata Trading Private Limited. All rights reserved.
            </p>
            <div className="flex gap-4 flex-wrap justify-center md:justify-end">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Privacy Policy</Link>
              <span className="text-gray-600">|</span>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Terms of Service</Link>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="https://maithri-portfolio-amber.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-primary-400 transition-colors">
              Built by Maithri
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
