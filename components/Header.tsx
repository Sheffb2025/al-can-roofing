'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg py-3'
            : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AC</span>
            </div>
            <span className="hidden sm:block font-bold text-lg text-brand-secondary group-hover:text-brand-primary transition-colors">
              AL-CAN Roofing
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-brand-primary hover:bg-gray-100 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+15195550123" className="flex items-center gap-2 text-brand-primary hover:text-brand-secondary transition-colors">
              <Phone size={18} />
              <span className="font-semibold">(519) 555-0123</span>
            </a>
            <Link href="/contact" className="btn-primary gap-2">
              Get Free Estimate
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-white lg:hidden pt-24"
          >
            <div className="section-container flex flex-col gap-4 pb-20">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-lg bg-gray-100 text-brand-secondary hover:bg-brand-primary hover:text-white transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t pt-4 mt-4 flex flex-col gap-3">
                <a href="tel:+15195550123" className="flex items-center gap-2 text-brand-primary font-semibold">
                  <Phone size={18} />
                  (519) 555-0123
                </a>
                <Link href="/contact" className="btn-primary w-full justify-center gap-2">
                  Get Free Estimate
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200 p-3 shadow-lg">
        <div className="flex gap-3">
          <a href="tel:+15195550123" className="btn-secondary flex-1 gap-2 justify-center">
            <Phone size={18} />
            Call Now
          </a>
          <Link href="/contact" className="btn-primary flex-1 gap-2 justify-center">
            Estimate
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Mobile bottom padding */}
      <div className="lg:hidden h-20" />
    </>
  );
}
