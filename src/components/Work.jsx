import React, { useEffect, useRef, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ExternalLink, Award, Users, Rocket, Zap, TrendingUp } from 'lucide-react';

const Work = () => {
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

  const portfolioStats = [
    { icon: <Award className="w-5 h-5" />, value: '50+', label: 'Awards Won', color: 'from-yellow-500 to-orange-500' },
    { icon: <Users className="w-5 h-5" />, value: '200+', label: 'Happy Clients', color: 'from-blue-500 to-cyan-500' },
    { icon: <Rocket className="w-5 h-5" />, value: '500+', label: 'Projects Launched', color: 'from-purple-500 to-pink-500' },
    { icon: <TrendingUp className="w-5 h-5" />, value: '98%', label: 'Success Rate', color: 'from-green-500 to-emerald-500' },
  ];

  const projects = [
    {
      title: 'E-Commerce Revolution',
      category: 'Web Development',
      description: 'Transformed online shopping experience with cutting-edge technology',
      gradient: 'from-orange-500 to-red-500',
      delay: '0s'
    },
    {
      title: 'Brand Identity Suite',
      category: 'Design & Branding',
      description: 'Complete visual identity system for Fortune 500 company',
      gradient: 'from-blue-500 to-indigo-500',
      delay: '0.1s'
    },
    {
      title: 'Digital Marketing Campaign',
      category: 'Marketing Strategy',
      description: 'Multi-channel campaign that increased ROI by 300%',
      gradient: 'from-green-500 to-emerald-500',
      delay: '0.2s'
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="work" 
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white py-12 sm:py-16 lg:py-20 pt-24 sm:pt-28 lg:pt-32 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
      
      {/* Glowing orbs */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Lottie Animation */}
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} style={{ transitionDelay: '0.1s' }}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-purple-500/40 rounded-2xl rotate-45" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-cyan-500/40 rounded-2xl -rotate-45" />
              
              {/* Lottie container */}
              <div className="relative rounded-3xl p-6 sm:p-8 lg:p-10">
                <div className="relative">
                  <DotLottieReact
                    src="https://lottie.host/1f01cde4-53b0-4670-91df-0b9a83b866bc/yFxUUDqSBu.lottie"
                    loop
                    autoplay
                    className="w-full h-auto scale-110"
                  />
                </div>
              </div>

              {/* Floating achievement badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg shadow-purple-500/40 font-bold text-sm sm:text-base animate-bounce">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  <span>Top Rated</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{ transitionDelay: '0.2s' }}>
            {/* Section Header */}
            <div className="mb-6 lg:mb-8">
              <div 
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.3s' }}
              >
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                <span className="text-sm font-medium text-purple-400">Our Portfolio</span>
              </div>

              <h2 
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.4s' }}
              >
                <span className="block text-white">Transforming Ideas</span>
                <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                  Into Digital Reality
                </span>
              </h2>
              
              <p 
                className={`text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.5s' }}
              >
                We've partnered with industry leaders and innovative startups to deliver exceptional digital experiences that drive real business results and exceed expectations.
              </p>
            </div>

            {/* Portfolio Stats Grid */}
            <div 
              className={`grid grid-cols-2 gap-3 sm:gap-4 mb-6 lg:mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0.6s' }}
            >
              {portfolioStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 hover:shadow-xl overflow-hidden"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${stat.color} text-white mb-2 group-hover:scale-110 transition-transform duration-500`}>
                    {stat.icon}
                  </div>

                  {/* Stats */}
                  <div className="relative">
                    <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>

                  {/* Corner glow */}
                  <div className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full`} />
                </div>
              ))}
            </div>

            {/* Featured Projects */}
            <div 
              className={`space-y-3 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0.7s' }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className={`group relative bg-gradient-to-r from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:translate-x-2 overflow-hidden cursor-pointer`}
                  style={{
                    animation: isVisible ? `slideInRight 0.6s ease-out ${project.delay} both` : 'none'
                  }}
                >
                  {/* Gradient line on left */}
                  <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${project.gradient} transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500`} />
                  
                  {/* Content */}
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Arrow icon */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1">
                      <ExternalLink className={`w-5 h-5 text-transparent bg-gradient-to-r ${project.gradient} bg-clip-text`} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div 
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0.8s' }}
            >
              <a 
                href="https://www.buildingindiadigital.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 inline-flex items-center gap-2"
              >
                <span>View Full Portfolio</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes slideInRight {
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
    </section>
  );
};

export default Work;