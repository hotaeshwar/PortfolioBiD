import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? 'bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 shadow-lg shadow-orange-100/50 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Logo */}
            <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
              <img
                src="/images/bid-logo.png"
                alt="Building India Digital"
                className={`transition-all duration-500 ${
                  scrolled
                    ? 'h-10 sm:h-12 lg:h-14'
                    : 'h-12 sm:h-14 lg:h-16'
                } w-auto object-contain`}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="group relative px-5 py-2.5 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover background effect */}
                  <span
                    className={`absolute inset-0 w-0 transition-all duration-500 ease-out group-hover:w-full ${
                      scrolled
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500'
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                    }`}
                  />
                  
                  {/* Sliding underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 ease-out group-hover:w-full ${
                      scrolled ? 'bg-orange-600' : 'bg-white'
                    }`}
                  />

                  {/* Link text */}
                  <span
                    className={`relative z-10 font-semibold text-base tracking-wide transition-all duration-300 ${
                      scrolled
                        ? 'text-slate-800 group-hover:text-white'
                        : 'text-white group-hover:text-white'
                    }`}
                    style={{
                      textShadow: scrolled
                        ? 'none'
                        : '0 2px 10px rgba(0,0,0,0.3)',
                    }}
                  >
                    {link.name}
                  </span>

                  {/* Decorative dot */}
                  <span
                    className={`absolute -top-1 -right-1 w-2 h-2 rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-150 ${
                      scrolled ? 'bg-orange-500' : 'bg-blue-400'
                    }`}
                  />
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                scrolled
                  ? 'text-slate-800 hover:bg-orange-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div
            className={`px-4 pb-6 space-y-1 ${
              scrolled
                ? 'bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50'
                : 'bg-slate-900/95 backdrop-blur-lg'
            }`}
          >
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`group relative block px-6 py-4 rounded-xl overflow-hidden transition-all duration-300 ${
                  scrolled
                    ? 'hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100'
                    : 'hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-indigo-600/20'
                }`}
                style={{
                  animation: mobileMenuOpen
                    ? `slideIn 0.4s ease-out ${index * 0.1}s both`
                    : 'none',
                }}
              >
                {/* Mobile link background effect */}
                <span
                  className={`absolute left-0 top-0 h-full w-1 transition-all duration-300 ${
                    scrolled
                      ? 'bg-orange-500 group-hover:w-2'
                      : 'bg-blue-500 group-hover:w-2'
                  }`}
                />

                {/* Mobile link text */}
                <span
                  className={`relative z-10 font-semibold text-base transition-all duration-300 ${
                    scrolled
                      ? 'text-slate-800 group-hover:text-orange-600 group-hover:translate-x-2'
                      : 'text-white group-hover:text-blue-300 group-hover:translate-x-2'
                  } inline-block`}
                >
                  {link.name}
                </span>

                {/* Animated arrow */}
                <span
                  className={`absolute right-6 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2 ${
                    scrolled ? 'text-orange-500' : 'text-blue-400'
                  }`}
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;