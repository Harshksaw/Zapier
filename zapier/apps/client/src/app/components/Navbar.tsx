// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-purple-600">
              ZapFlow
            </Link>
            
            <nav className="hidden md:flex ml-10 space-x-8">
              <Link href="#product" className="text-gray-600 hover:text-purple-600">
                Product
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-purple-600">
                Pricing
              </Link>
              <Link href="#solutions" className="text-gray-600 hover:text-purple-600">
                Solutions
              </Link>
              <Link href="#resources" className="text-gray-600 hover:text-purple-600">
                Resources
              </Link>
            </nav>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-purple-600">
              Log in
            </Link>
            <Link href="/signup" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Sign up free
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-purple-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link href="#product" className="text-gray-600 hover:text-purple-600">
                Product
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-purple-600">
                Pricing
              </Link>
              <Link href="#solutions" className="text-gray-600 hover:text-purple-600">
                Solutions
              </Link>
              <Link href="#resources" className="text-gray-600 hover:text-purple-600">
                Resources
              </Link>
              <div className="pt-4 border-t border-gray-200 flex flex-col space-y-4">
                <Link href="/login" className="text-gray-600 hover:text-purple-600">
                  Log in
                </Link>
                <Link href="/signup" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-center">
                  Sign up free
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}