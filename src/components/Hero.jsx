import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Sparkles, Code2, Palette, TrendingUp, Users, Award, Target } from 'lucide-react';

const HeroPage = ({ scrollToClients }) => {
  const [projectCount, setProjectCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  // Animate counters function
  const animateCounters = () => {
    if (hasAnimated) return;
    setHasAnimated(true);

    // Animate Projects (500+)
    let projectCounter = 0;
    const projectInterval = setInterval(() => {
      projectCounter += 10;
      if (projectCounter >= 500) {
        setProjectCount(500);
        clearInterval(projectInterval);
      } else {
        setProjectCount(projectCounter);
      }
    }, 20);

    // Animate Success Rate (98%)
    let successCounter = 0;
    const successInterval = setInterval(() => {
      successCounter += 2;
      if (successCounter >= 98) {
        setSuccessRate(98);
        clearInterval(successInterval);
      } else {
        setSuccessRate(successCounter);
      }
    }, 20);

    // Animate Clients (200+)
    let clientCounter = 0;
    const clientInterval = setInterval(() => {
      clientCounter += 5;
      if (clientCounter >= 200) {
        setClientCount(200);
        clearInterval(clientInterval);
      } else {
        setClientCount(clientCounter);
      }
    }, 20);
  };

  // Trigger animation on mount
  useEffect(() => {
    animateCounters();
  }, []);

  // Handle Our Clients button click
  const handleClientsClick = (e) => {
    e.preventDefault();
    if (scrollToClients) {
      scrollToClients();
    } else {
      const clientsSection = document.getElementById('clients');
      if (clientsSection) {
        clientsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle View Our Work button click
  const handleWorkClick = (e) => {
    e.preventDefault();
    const workSection = document.getElementById('our-work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden py-12">
      {/* SEO-Optimized Header Section */}
      <header className="sr-only">
        <h1>Leading Website & App Development Agency in India | Building India Digital</h1>
        <p>Expert SEO-Friendly Website Development, Mobile App Development & Digital Marketing Services</p>
      </header>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content Section */}
          <div className="space-y-6 z-10">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-blue-100">
              <Sparkles className="w-4 h-4" style={{ color: '#63c000' }} />
              <span className="text-sm font-semibold" style={{ color: '#012869' }}>
                India's Trusted Digital Partner
              </span>
            </div>

            {/* SEO-Optimized Main Heading */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{ color: '#012869' }}>
                We Build{' '}
                <span className="bg-gradient-to-r from-[#63c000] to-[#f98e09] bg-clip-text text-transparent">
                  Websites, Apps
                </span>{' '}
                & Digital Success For Your Business Growth
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#012869' }}>
                Building India Digital specializes in creating SEO-optimized websites, 
                high-performance mobile apps, and result-driven digital marketing campaigns 
                that help businesses scale online and achieve measurable growth.
              </p>
            </div>

            {/* Key Services - SEO Keywords */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Code2, text: 'Website Development' },
                { icon: Sparkles, text: 'App Development' },
                { icon: TrendingUp, text: 'SEO Services' },
                { icon: Palette, text: 'Digital Marketing' }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <service.icon className="w-4 h-4" style={{ color: '#63c000' }} />
                  <span className="text-sm font-medium" style={{ color: '#012869' }}>{service.text}</span>
                </div>
              ))}
            </div>

            {/* Stats with Counting Animation */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#63c000] to-[#f98e09] bg-clip-text text-transparent">
                  {projectCount}+
                </div>
                <div className="text-sm mt-1" style={{ color: '#012869' }}>Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#63c000] to-[#f98e09] bg-clip-text text-transparent">
                  {successRate}%
                </div>
                <div className="text-sm mt-1" style={{ color: '#012869' }}>Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#63c000] to-[#f98e09] bg-clip-text text-transparent">
                  {clientCount}+
                </div>
                <div className="text-sm mt-1" style={{ color: '#012869' }}>Happy Clients</div>
              </div>
            </div>

            {/* CTA Buttons with Enhanced Hover Animations */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={handleWorkClick}
                className="group relative px-8 py-3 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                style={{ background: 'linear-gradient(to right, #63c000, #f98e09)' }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                <span className="relative flex items-center">
                  View Our Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button 
                onClick={handleClientsClick}
                className="group relative px-8 py-3 bg-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 overflow-hidden"
                style={{ color: '#012869', borderColor: '#63c000' }}
              >
                <span className="relative flex items-center">
                  Our Clients
                  <Users className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </span>
                {/* Background slide effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-orange-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10"></div>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" style={{ color: '#63c000' }} />
                <div>
                  <div className="text-sm font-semibold" style={{ color: '#012869' }}>200+ Brands Trust Us</div>
                  <div className="text-xs" style={{ color: '#f98e09' }}>Across 15+ Industries</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" style={{ color: '#f98e09' }} />
                <div>
                  <div className="text-sm font-semibold" style={{ color: '#012869' }}>Expert Team</div>
                  <div className="text-xs" style={{ color: '#63c000' }}>Delivering Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Success Dashboard */}
          <div className="relative lg:pl-8 z-10">
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 max-w-lg mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold" style={{ color: '#012869' }}>Our Growth Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#63c000' }}></div>
                  <span className="text-sm font-medium" style={{ color: '#012869' }}>Live</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 animate-slideInLeft">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium" style={{ color: '#012869' }}>Website Traffic</span>
                    <TrendingUp className="w-4 h-4" style={{ color: '#63c000' }} />
                  </div>
                  <div className="text-2xl font-bold" style={{ color: '#63c000' }}>+245%</div>
                  <div className="text-xs text-gray-600 mt-1">vs last month</div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-3 animate-slideInRight">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium" style={{ color: '#012869' }}>Conversions</span>
                    <Target className="w-4 h-4" style={{ color: '#f98e09' }} />
                  </div>
                  <div className="text-2xl font-bold" style={{ color: '#f98e09' }}>+180%</div>
                  <div className="text-xs text-gray-600 mt-1">organic growth</div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3 animate-slideInLeft animation-delay-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium" style={{ color: '#012869' }}>Revenue</span>
                    <TrendingUp className="w-4 h-4" style={{ color: '#63c000' }} />
                  </div>
                  <div className="text-2xl font-bold" style={{ color: '#63c000' }}>+320%</div>
                  <div className="text-xs text-gray-600 mt-1">business growth</div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-3 animate-slideInRight animation-delay-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium" style={{ color: '#012869' }}>ROI</span>
                    <Award className="w-4 h-4" style={{ color: '#f98e09' }} />
                  </div>
                  <div className="text-2xl font-bold" style={{ color: '#f98e09' }}>5.2x</div>
                  <div className="text-xs text-gray-600 mt-1">return average</div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-3 mb-5 animate-fadeInUp animation-delay-300">
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-medium" style={{ color: '#012869' }}>SEO Score</span>
                    <span className="font-semibold" style={{ color: '#63c000' }}>95/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div className="h-2 rounded-full animate-progressBar" style={{ width: '95%', background: 'linear-gradient(to right, #63c000, #63c000)' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-medium" style={{ color: '#012869' }}>Performance</span>
                    <span className="font-semibold" style={{ color: '#012869' }}>92/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div className="h-2 rounded-full animate-progressBar animation-delay-200" style={{ width: '92%', background: 'linear-gradient(to right, #012869, #012869)' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-medium" style={{ color: '#012869' }}>User Experience</span>
                    <span className="font-semibold" style={{ color: '#f98e09' }}>98/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div className="h-2 rounded-full animate-progressBar animation-delay-400" style={{ width: '98%', background: 'linear-gradient(to right, #f98e09, #f98e09)' }}></div>
                  </div>
                </div>
              </div>

              {/* Bottom notification */}
              <div className="rounded-xl p-4 text-white animate-fadeInUp animation-delay-500" style={{ background: 'linear-gradient(to right, #63c000, #f98e09)' }}>
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1 text-sm">Our Success Story!</div>
                    <div className="text-xs opacity-90">Join 200+ businesses achieving exceptional growth with us</div>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-10 blur-2xl animate-pulse" style={{ backgroundColor: '#63c000' }}></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-10 blur-3xl animate-pulse" style={{ backgroundColor: '#f98e09', animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progressBar {
          from {
            width: 0%;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-progressBar {
          animation: progressBar 1.5s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      {/* SEO-Optimized Footer Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Building India Digital",
          "description": "Leading Website & App Development Agency in India",
          "url": "https://buildingindia.digital"
        })}
      </script>
    </div>
  );
};

export default HeroPage;
