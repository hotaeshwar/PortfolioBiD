import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram, ExternalLink } from 'lucide-react';

const ClientsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [clientCount, setClientCount] = useState(0);
  const [industryCount, setIndustryCount] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hoveredClient, setHoveredClient] = useState(null);
  const [modalPos, setModalPos] = useState({ x: 0, y: 0 });
  const carouselRef = useRef(null);
  const statsRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const clients = [
    {
      id: 1,
      name: 'Oren Kasauli',
      logo: '/images/orenkasauli-logo.png',
      instagramUrl: 'https://www.instagram.com/orenkasauli/',
      instagramHandle: '@orenkasauli',
      thumbnail: '/images/orenthumb.png',
    },
    {
      id: 2,
      name: 'Lord of the Drinks',
      logo: '/images/lotd2.png',
      instagramUrl: 'https://www.instagram.com/lordofthedrinksjabli/',
      instagramHandle: '@lordofthedrinksjabli',
      thumbnail: '/images/lodthumb.png',
    },
    {
      id: 3,
      name: 'Lavaang - DumokMII',
      logo: '/images/Lavaang -DumokMII.png',
      instagramUrl: 'https://www.instagram.com/lavaang__dental/',
      instagramHandle: '@lavaang__dental',
      thumbnail: '/images/lavangthumb.png',
    },
    {
      id: 4,
      name: 'IHG Hotels',
      logo: '/images/ihg-logo-nav.png',
      instagramUrl: 'https://www.instagram.com/ihghotels/',
      instagramHandle: '@ihghotels',
      thumbnail: '/images/IHGthumb.png',
    },
    {
      id: 5,
      name: 'Antaraal Resort',
      logo: '/images/antral.png',
      instagramUrl: 'https://www.instagram.com/antaraal_resort',
      instagramHandle: '@antaraal_resort',
      thumbnail: '/images/Antaraalthumb.png',
    },
  ];

  const duplicatedClients = [...clients, ...clients, ...clients];

  // Counting animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const targetValues = { clients: 200, industries: 15, satisfaction: 98 };
          const duration = 1500;

          const animate = (setter, target, startTime) => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuad = (t) => t * (2 - t);
            setter(Math.floor(easeOutQuad(progress) * target));
            if (progress < 1) requestAnimationFrame(() => animate(setter, target, startTime));
            else setter(target);
          };

          const now = Date.now();
          requestAnimationFrame(() => animate(setClientCount, targetValues.clients, now));
          requestAnimationFrame(() => animate(setIndustryCount, targetValues.industries, now));
          requestAnimationFrame(() => animate(setSatisfactionRate, targetValues.satisfaction, now));
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => { if (statsRef.current) observer.unobserve(statsRef.current); };
  }, [hasAnimated]);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, clients.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  const goToPrevious = () => goToSlide(currentIndex === 0 ? clients.length - 1 : currentIndex - 1);
  const goToNext = () => goToSlide((currentIndex + 1) % clients.length);

  const handleMouseEnter = (client, e) => {
    clearTimeout(hoverTimeoutRef.current);
    const rect = e.currentTarget.getBoundingClientRect();
    const modalWidth = 260;
    const modalHeight = 300;

    // Detect navbar height dynamically, fallback to 80px
    const navbar = document.querySelector('nav') || document.querySelector('header');
    const navbarHeight = navbar ? navbar.getBoundingClientRect().bottom : 80;
    const SAFE_TOP = navbarHeight + 8; // 8px breathing room below navbar

    let x = rect.left + rect.width / 2 - modalWidth / 2;

    // Try to place modal ABOVE the card
    let y = rect.top - modalHeight - 16;
    let showBelow = false;

    // If it would overlap the navbar, force it BELOW the card instead
    if (y < SAFE_TOP) {
      y = rect.bottom + 16;
      showBelow = true;
      // If even below placement is off screen, clamp to safe top
      y = Math.max(SAFE_TOP, y);
    }

    // Clamp horizontally within viewport
    x = Math.max(8, Math.min(x, window.innerWidth - modalWidth - 8));

    setModalPos({ x, y, showBelow });
    hoverTimeoutRef.current = setTimeout(() => setHoveredClient(client), 100);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setHoveredClient(null), 220);
  };

  const handleModalEnter = () => clearTimeout(hoverTimeoutRef.current);
  const handleModalLeave = () => {
    clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setHoveredClient(null), 150);
  };

  // Card
  const ClientCard = ({ client }) => (
    <div
      className="relative h-full w-full cursor-pointer group"
      onMouseEnter={(e) => handleMouseEnter(client, e)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-white rounded-xl lg:rounded-2xl border-2 border-[#63c000]/30 group-hover:border-[#63c000] transition-all duration-400 group-hover:shadow-xl group-hover:shadow-[#63c000]/20 group-hover:scale-105 flex items-center justify-center p-6 lg:p-8 h-full w-full">
        <img
          src={client.logo}
          alt={client.name}
          className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
        />
      </div>
      {/* Instagram badge */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
        <div className="bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] p-1.5 rounded-lg shadow-md">
          <Instagram className="w-3 h-3 text-white" />
        </div>
      </div>
    </div>
  );

  return (
    <section id="clients" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-[#012869]/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,192,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,192,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-[#f98e09]/10 to-[#63c000]/10 border-2 border-[#63c000] mb-4 sm:mb-6">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#f98e09] animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-[#012869]">Trusted by Leading Brands</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012869] mb-3 sm:mb-4">
            Our Valued Clients
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-[#012869]/80 max-w-2xl mx-auto">
            Partnering with industry leaders to deliver exceptional digital solutions
          </p>
        </div>

        {/* Desktop Infinite Scroll */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden">
            <div className="flex gap-6 lg:gap-8 animate-scroll-continuous" style={{ width: 'fit-content' }}>
              {duplicatedClients.map((client, index) => (
                <div key={`${client.id}-${index}`} className="flex-shrink-0 w-48 lg:w-56 xl:w-64 h-32 lg:h-36 xl:h-40">
                  <ClientCard client={client} />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-l from-[#012869]/5 to-transparent pointer-events-none z-10" />
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden" ref={carouselRef}>
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {clients.map((client) => (
                <div key={client.id} className="w-full flex-shrink-0 px-4">
                  <div className="h-40"><ClientCard client={client} /></div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={goToPrevious} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white border-2 border-[#63c000] text-[#63c000] rounded-full p-2 shadow-lg hover:bg-[#63c000] hover:text-white transition-all duration-300 z-10" aria-label="Previous client">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={goToNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white border-2 border-[#63c000] text-[#63c000] rounded-full p-2 shadow-lg hover:bg-[#63c000] hover:text-white transition-all duration-300 z-10" aria-label="Next client">
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="flex justify-center gap-2 mt-6">
            {clients.map((_, index) => (
              <button key={index} onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${currentIndex === index ? 'w-8 h-2 bg-[#63c000]' : 'w-2 h-2 bg-gray-300 hover:bg-[#63c000]/50'}`}
                aria-label={`Go to slide ${index + 1}`} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-white rounded-2xl sm:rounded-3xl border-2 border-[#63c000]/30 px-6 sm:px-10 py-4 sm:py-6 shadow-xl">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f98e09] min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center">{clientCount}+</div>
              <div className="text-xs sm:text-sm lg:text-base font-semibold text-[#012869] mt-1 sm:mt-2">Happy Clients</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-[#63c000]/30" />
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#012869] min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center">{industryCount}+</div>
              <div className="text-xs sm:text-sm lg:text-base font-semibold text-[#012869] mt-1 sm:mt-2">Industries Served</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-[#63c000]/30" />
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#63c000] min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center">{satisfactionRate}%</div>
              <div className="text-xs sm:text-sm lg:text-base font-semibold text-[#012869] mt-1 sm:mt-2">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Instagram Modal Popup (fixed, floats above everything) ── */}
      {hoveredClient && (
        <div
          className="instagram-modal"
          style={{
            position: 'fixed',
            left: modalPos.x,
            top: modalPos.y,
            width: 260,
            zIndex: 9999,
          }}
          onMouseEnter={handleModalEnter}
          onMouseLeave={handleModalLeave}
        >
          {/* Arrow tip */}
          {!modalPos.showBelow && (
            <div style={{
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '10px solid white',
              filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.1))',
            }} />
          )}
          {modalPos.showBelow && (
            <div style={{
              position: 'absolute',
              top: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderBottom: '10px solid white',
              filter: 'drop-shadow(0 -2px 3px rgba(0,0,0,0.08))',
            }} />
          )}

          <div
            className="rounded-2xl overflow-hidden cursor-pointer"
            style={{ boxShadow: '0 25px 60px rgba(1,40,105,0.22), 0 8px 20px rgba(0,0,0,0.12)', border: '1px solid rgba(99,192,0,0.15)' }}
            onClick={() => window.open(hoveredClient.instagramUrl, '_blank', 'noopener,noreferrer')}
          >
            {/* Thumbnail */}
            <div className="relative h-44 overflow-hidden">
              <img
                src={hoveredClient.thumbnail}
                alt={hoveredClient.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* Instagram-style top bar */}
              <div className="absolute top-0 left-0 right-0 flex items-center gap-2 px-3 py-2.5"
                style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.65), transparent)' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
                  <Instagram className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold leading-none">{hoveredClient.instagramHandle}</p>
                  <p className="text-xs leading-none mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>Instagram · Tap to visit</p>
                </div>
              </div>
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-10"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
            </div>

            {/* Bottom action bar */}
            <div className="bg-white px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold leading-tight" style={{ color: '#012869' }}>{hoveredClient.name}</p>
                <p className="text-xs mt-0.5" style={{ color: '#9ca3af' }}>Click to open profile →</p>
              </div>
              <div
                className="flex items-center gap-1.5 text-white text-xs font-bold px-3 py-1.5 rounded-full"
                style={{ background: 'linear-gradient(135deg, #f09433, #dc2743, #bc1888)' }}
              >
                <ExternalLink className="w-3 h-3" />
                <span>Visit</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll-continuous {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll-continuous {
          animation: scroll-continuous 20s linear infinite;
        }
        .animate-scroll-continuous:hover {
          animation-play-state: paused;
        }

        @keyframes modalPop {
          0% { opacity: 0; transform: translateY(10px) scale(0.93); }
          70% { transform: translateY(-2px) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .instagram-modal {
          animation: modalPop 0.25s cubic-bezier(0.34, 1.4, 0.64, 1) forwards;
          transform-origin: bottom center;
        }
      `}</style>
    </section>
  );
};

export default ClientsCarousel;