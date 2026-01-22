import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Code2, Palette, TrendingUp } from 'lucide-react';

const HeroPage = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  // Counting animation with cleanup
  useEffect(() => {
    let projectInterval, successInterval, clientInterval;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate Projects (500)
          let projectCounter = 0;
          projectInterval = setInterval(() => {
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
          successInterval = setInterval(() => {
            successCounter += 2;
            if (successCounter >= 98) {
              setSuccessRate(98);
              clearInterval(successInterval);
            } else {
              setSuccessRate(successCounter);
            }
          }, 20);

          // Animate Clients (200)
          let clientCounter = 0;
          clientInterval = setInterval(() => {
            clientCounter += 5;
            if (clientCounter >= 200) {
              setClientCount(200);
              clearInterval(clientInterval);
            } else {
              setClientCount(clientCounter);
            }
          }, 20);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
      clearInterval(projectInterval);
      clearInterval(successInterval);
      clearInterval(clientInterval);
    };
  }, [hasAnimated]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-start lg:items-center max-w-7xl mx-auto">
          
          {/* Left Content Section */}
          <div className="space-y-3 lg:space-y-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
              <span className="text-xs sm:text-sm font-medium text-orange-400">
                Award-Winning Digital Agency
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-1.5 lg:space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                <span className="block text-white">Building India's</span>
                <span className="block bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
                  Digital Future
                </span>
                <span className="block text-white">Together</span>
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl">
                We blend cutting-edge technology with creative brilliance to craft digital solutions that don't just reach audiences—they transform businesses and empower communities.
              </p>
            </div>

            {/* Stats with Counting Animation - Fixed height to prevent shift */}
            <div ref={statsRef} className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 py-2 lg:py-3">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 min-h-[2.5rem] sm:min-h-[3rem] lg:min-h-[3.5rem] flex items-center justify-center lg:justify-start">
                  {projectCount}+
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500 min-h-[2.5rem] sm:min-h-[3rem] lg:min-h-[3.5rem] flex items-center justify-center lg:justify-start">
                  {successRate}%
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">Success Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-500 min-h-[2.5rem] sm:min-h-[3rem] lg:min-h-[3.5rem] flex items-center justify-center lg:justify-start">
                  {clientCount}+
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">Happy Clients</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30">
                <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <a 
                href="https://www.buildingindiadigital.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-blue-600 rounded-lg sm:rounded-xl font-semibold hover:bg-blue-600/10 transition-all duration-300 text-sm sm:text-base inline-block text-center"
              >
                View Our Work
              </a>
            </div>

            {/* Service Icons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 pt-1">
              <div className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors cursor-pointer">
                <div className="p-1.5 sm:p-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm font-medium">Digital Marketing</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                <div className="p-1.5 sm:p-2 rounded-lg bg-blue-600/10 border border-blue-600/20">
                  <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm font-medium">Brand Design</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors cursor-pointer">
                <div className="p-1.5 sm:p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs sm:text-sm font-medium">Growth Strategy</span>
              </div>
            </div>
          </div>

          {/* Right Side - Code Visualization */}
          <div className="mt-4 lg:mt-0 lg:sticky lg:top-20">
            {/* Main code container */}
            <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl shadow-blue-500/10">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-700/50">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-2 sm:ml-4 text-[10px] sm:text-xs text-slate-500 font-mono">building-india-digital.js</div>
                <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] sm:text-xs text-slate-500">Running</span>
                </div>
              </div>

              {/* Code content */}
              <div className="font-mono text-xs sm:text-sm lg:text-base overflow-x-auto">
                <pre className="text-slate-300 leading-relaxed">
                  <code>
                    <span className="text-orange-400">const</span> <span className="text-blue-400">buildIndia</span> <span className="text-slate-400">=</span> <span className="text-green-400">{'() =>'}</span> <span className="text-slate-400">{'{'}</span>{'\n'}
                    <span className="text-orange-400">  const</span> <span className="text-white">vision</span> <span className="text-slate-400">=</span> <span className="text-green-400">createDigitalFuture</span><span className="text-slate-400">();</span>{'\n'}
                    <span className="text-orange-400">  const</span> <span className="text-white">innovation</span> <span className="text-slate-400">=</span> <span className="text-green-400">empowerBusiness</span><span className="text-slate-400">(</span><span className="text-white">vision</span><span className="text-slate-400">);</span>{'\n'}
                    <span className="text-orange-400">  const</span> <span className="text-white">impact</span> <span className="text-slate-400">=</span> <span className="text-green-400">transformIndia</span><span className="text-slate-400">(</span><span className="text-white">innovation</span><span className="text-slate-400">);</span>{'\n'}
                    {'\n'}
                    <span className="text-orange-400">  return</span> <span className="text-slate-400">{'{'}</span>{'\n'}
                    <span className="text-blue-400">    projects</span><span className="text-slate-400">:</span> <span className="text-orange-300">500</span><span className="text-slate-400">,</span>{'\n'}
                    <span className="text-blue-400">    success</span><span className="text-slate-400">:</span> <span className="text-orange-300">98</span><span className="text-slate-400">,</span>{'\n'}
                    <span className="text-blue-400">    clients</span><span className="text-slate-400">:</span> <span className="text-orange-300">200</span><span className="text-slate-400">,</span>{'\n'}
                    <span className="text-blue-400">    mission</span><span className="text-slate-400">:</span> <span className="text-green-300">'Digital India'</span>{'\n'}
                    <span className="text-slate-400">  {'}'}</span><span className="text-slate-400">;</span>{'\n'}
                    <span className="text-slate-400">{'}'}</span><span className="text-slate-400">;</span>{'\n'}
                    {'\n'}
                    <span className="text-slate-500">// Building tomorrow, today</span>{'\n'}
                    <span className="text-blue-400">buildIndia</span><span className="text-slate-400">().</span><span className="text-green-400">execute</span><span className="text-slate-400">();</span>
                  </code>
                </pre>
              </div>

              {/* Terminal output */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-700/50">
                <div className="flex items-start gap-2 text-xs sm:text-sm">
                  <span className="text-green-500">→</span>
                  <div className="space-y-1">
                    <div className="text-orange-400">✓ Vision initialized successfully</div>
                    <div className="text-blue-400">✓ Innovation deployed across India</div>
                    <div className="text-green-400">✓ Digital transformation complete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;