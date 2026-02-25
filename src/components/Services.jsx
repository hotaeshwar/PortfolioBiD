import React, { useEffect, useRef, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Code2, Palette, Megaphone, TrendingUp, Smartphone, Globe, ArrowRight } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <Code2 className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: 'Web Development',
      description: 'Crafting responsive, high-performance websites that convert visitors into customers',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10',
      delay: '0s'
    },
    {
      icon: <Palette className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: 'Brand Design',
      description: 'Creating memorable visual identities that resonate with your target audience',
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-blue-500/10 to-indigo-500/10',
      delay: '0.1s'
    },
    {
      icon: <Megaphone className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: 'Digital Marketing',
      description: 'Data-driven strategies that amplify your reach and maximize ROI',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      delay: '0.2s'
    },
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: 'Growth Strategy',
      description: 'Strategic planning and execution to scale your business exponentially',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      delay: '0.3s'
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform applications that deliver seamless experiences',
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-500/10 to-blue-500/10',
      delay: '0.4s'
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: 'SEO & Analytics',
      description: 'Optimize your online presence and track what matters for growth',
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-500/10 to-orange-500/10',
      delay: '0.5s'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-12 sm:py-16 lg:py-20 pt-24 sm:pt-28 lg:pt-32 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Lottie Animation */}
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} style={{ transitionDelay: '0.1s' }}>
            <div className="relative">
              {/* Decorative elements behind lottie */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-orange-500/30 rounded-3xl rotate-12" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border-4 border-blue-500/30 rounded-3xl -rotate-12" />
              
              {/* Lottie container with transparent background */}
              <div className="relative rounded-3xl p-6 sm:p-8 lg:p-10">
                <div className="relative">
                  <DotLottieReact
                    src="https://lottie.host/d01012cf-13f8-4078-ad1b-ac3058bab491/hDu5r616GW.lottie"
                    loop
                    autoplay
                    className="w-full h-auto scale-110"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full shadow-lg shadow-orange-500/40 font-bold text-sm sm:text-base animate-bounce">
                500+ Projects
              </div>
            </div>
          </div>

          {/* Right Side - Services Content */}
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{ transitionDelay: '0.2s' }}>
            {/* Section Header */}
            <div className="mb-4 lg:mb-5">
              <div 
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm mb-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.2s' }}
              >
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-sm font-medium text-orange-400">Our Services</span>
              </div>

              <h2 
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.3s' }}
              >
                <span className="block text-white">Empowering Your</span>
                <span className="block bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
                  Digital Success
                </span>
              </h2>
              
              <p 
                className={`text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.4s' }}
              >
                From concept to execution, we deliver comprehensive digital solutions that drive measurable results and accelerate your business growth.
              </p>
            </div>

            {/* Services Grid */}
            <div 
              className={`grid sm:grid-cols-2 gap-3 sm:gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0.5s' }}
            >
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`group relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden`}
                  style={{
                    animation: isVisible ? `slideInUp 0.6s ease-out ${service.delay} both` : 'none'
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon container */}
                  <div className={`relative inline-flex p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-2 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className={`absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1`}>
                    <ArrowRight className={`w-5 h-5 text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text`} strokeWidth={3} />
                  </div>

                  {/* Corner decoration */}
                  <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-full`} />
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div 
              className={`mt-5 lg:mt-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '1.1s' }}
            >
              <a 
                href="https://www.buildingindiadigital.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 inline-flex items-center gap-2"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;