'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-cream-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-coffee-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="font-display font-semibold text-xl text-coffee-900">
              V60 Recipe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/recipes"
              className="text-coffee-700 hover:text-coffee-900 font-medium transition-colors"
            >
              All Recipes
            </Link>
            <Link
              href="/guides"
              className="text-coffee-700 hover:text-coffee-900 font-medium transition-colors"
            >
              Brewing Guides
            </Link>
            <Link
              href="/equipment"
              className="text-coffee-700 hover:text-coffee-900 font-medium transition-colors"
            >
              Equipment
            </Link>
            <Link
              href="/about"
              className="text-coffee-700 hover:text-coffee-900 font-medium transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-coffee-700 hover:bg-cream-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-cream-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/recipes"
                className="text-coffee-700 hover:text-coffee-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                All Recipes
              </Link>
              <Link
                href="/guides"
                className="text-coffee-700 hover:text-coffee-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Brewing Guides
              </Link>
              <Link
                href="/equipment"
                className="text-coffee-700 hover:text-coffee-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Equipment
              </Link>
              <Link
                href="/about"
                className="text-coffee-700 hover:text-coffee-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}