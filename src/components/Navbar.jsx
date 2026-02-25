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
    { name: 'Intro', href: '#hero' },
    { name: 'Clients', href: '#clients' },
    { name: 'Our Work', href: '#our-work' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          scrolled
            ? 'bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 shadow-2xl shadow-orange-200/50 backdrop-blur-lg border-b border-orange-200'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Logo */}
            <div className="flex-shrink-0 transition-transform duration-500 hover:scale-110">
              <img
                src="/images/bid-logo.png"
                alt="Building India Digital"
                className={`transition-all duration-700 ${
                  scrolled
                    ? 'h-10 sm:h-12 lg:h-14'
                    : 'h-12 sm:h-14 lg:h-16'
                } w-auto object-contain drop-shadow-lg`}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="group relative px-6 py-3 overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Animated background blob */}
                  <span
                    className={`absolute inset-0 w-0 transition-all duration-700 ease-out group-hover:w-full rounded-2xl ${
                      scrolled
                        ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600'
                        : 'bg-gradient-to-r from-gray-800 via-gray-900 to-black'
                    }`}
                  />
                  
                  {/* Pulsing glow effect */}
                  <span
                    className={`absolute inset-0 rounded-2xl opacity-0 transition-all duration-700 group-hover:opacity-100 blur-xl ${
                      scrolled
                        ? 'bg-gradient-to-r from-orange-400 to-amber-400'
                        : 'bg-gradient-to-r from-gray-600 to-gray-800'
                    }`}
                  />

                  {/* Top sliding border */}
                  <span
                    className={`absolute top-0 left-0 w-0 h-1 transition-all duration-500 ease-out group-hover:w-full ${
                      scrolled ? 'bg-orange-600' : 'bg-black'
                    }`}
                  />

                  {/* Bottom sliding border */}
                  <span
                    className={`absolute bottom-0 right-0 w-0 h-1 transition-all duration-500 delay-100 ease-out group-hover:w-full ${
                      scrolled ? 'bg-amber-600' : 'bg-gray-800'
                    }`}
                  />

                  {/* Link text - Always black and bold */}
                  <span
                    className="relative z-10 font-bold text-lg tracking-wide transition-all duration-500 text-black group-hover:text-white group-hover:scale-110 inline-block"
                  >
                    {link.name}
                  </span>

                  {/* Decorative sparkle */}
                  <span
                    className={`absolute top-0 right-0 w-3 h-3 rounded-full opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-150 group-hover:rotate-180 ${
                      scrolled ? 'bg-orange-400' : 'bg-gray-700'
                    }`}
                  />

                  {/* Bottom decorative sparkle */}
                  <span
                    className={`absolute bottom-0 left-0 w-3 h-3 rounded-full opacity-0 transition-all duration-700 delay-200 group-hover:opacity-100 group-hover:scale-150 group-hover:rotate-180 ${
                      scrolled ? 'bg-amber-400' : 'bg-gray-600'
                    }`}
                  />

                  {/* Expanding circle effect */}
                  <span className="absolute inset-0 rounded-full opacity-0 transition-all duration-700 group-hover:opacity-20 scale-0 group-hover:scale-150 bg-white" />
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-3 rounded-xl transition-all duration-500 transform hover:scale-110 hover:rotate-180 ${
                scrolled
                  ? 'text-black bg-orange-100 hover:bg-orange-200 shadow-lg'
                  : 'text-black bg-gray-100 hover:bg-gray-200'
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
          className={`lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div
            className={`px-4 pb-6 space-y-2 ${
              scrolled
                ? 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50'
                : 'bg-white/95 backdrop-blur-lg'
            }`}
          >
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`group relative block px-6 py-5 rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 ${
                  scrolled
                    ? 'hover:bg-gradient-to-r hover:from-orange-100 hover:to-amber-100 hover:shadow-xl'
                    : 'hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 hover:shadow-lg'
                }`}
                style={{
                  animation: mobileMenuOpen
                    ? `slideInBounce 0.6s ease-out ${index * 0.15}s both`
                    : 'none',
                }}
              >
                {/* Mobile link animated border */}
                <span
                  className={`absolute left-0 top-0 h-full w-2 transition-all duration-500 rounded-r-full ${
                    scrolled
                      ? 'bg-gradient-to-b from-orange-500 to-amber-500 group-hover:w-3'
                      : 'bg-gradient-to-b from-gray-800 to-black group-hover:w-3'
                  }`}
                />

                {/* Expanding background */}
                <span
                  className={`absolute inset-0 w-0 transition-all duration-700 ease-out group-hover:w-full ${
                    scrolled
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500'
                      : 'bg-gradient-to-r from-gray-800 to-black'
                  }`}
                />

                {/* Mobile link text - Always black and bold */}
                <span
                  className="relative z-10 font-bold text-lg transition-all duration-500 text-black group-hover:text-white group-hover:translate-x-3 inline-block"
                >
                  {link.name}
                </span>

                {/* Animated arrow with bounce */}
                <span
                  className={`absolute right-6 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2 text-2xl font-bold ${
                    scrolled ? 'text-orange-600 group-hover:text-white' : 'text-gray-800 group-hover:text-white'
                  }`}
                  style={{
                    animation: mobileMenuOpen ? 'arrowBounce 1s ease-in-out infinite' : 'none'
                  }}
                >
                  →
                </span>

                {/* Sparkle effect */}
                <span
                  className={`absolute top-2 right-4 w-2 h-2 rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-150 ${
                    scrolled ? 'bg-amber-400' : 'bg-gray-600'
                  }`}
                />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Enhanced animations */}
      <style jsx>{`
        @keyframes slideInBounce {
          0% {
            opacity: 0;
            transform: translateX(-50px) scale(0.8);
          }
          60% {
            opacity: 1;
            transform: translateX(10px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes arrowBounce {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(8px);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;