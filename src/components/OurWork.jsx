import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Instagram, Facebook, Globe, Smartphone, Sparkles, Award, CheckCircle, TrendingUp, Star, Camera, Zap } from 'lucide-react';

const OurWork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkVisibility = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
        if (isInView && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
  }, [isVisible]);

  const featuredProjects = [
    {
      id: 1,
      title: "Action Car Detailing",
      category: "Website Development",
      type: "E-Commerce & Service Website",
      description: "Professional car detailing service website with online booking system, service packages, and customer portal",
      url: "https://actioncardetailing.ca",
      icon: Globe,
      gradient: "from-[#63c000] via-[#f98e09] to-[#012869]",
      glowColor: "shadow-[#63c000]/50",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(99,192,0,0.3)]",
      highlights: [
        "Responsive Design",
        "SEO Optimized",
        "Online Booking",
        "Payment Integration"
      ],
      stats: {
        performance: "98%",
        seo: "95+",
        traffic: "+250%"
      }
    },
    {
      id: 2,
      title: "Mobile App Portfolio",
      category: "App Development",
      type: "iOS & Android Applications",
      description: "Custom mobile applications with native performance, seamless UX, and scalable backend solutions for diverse industries",
      icon: Smartphone,
      gradient: "from-[#012869] via-[#63c000] to-[#f98e09]",
      glowColor: "shadow-[#012869]/50",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(1,40,105,0.3)]",
      highlights: [
        "Native Performance",
        "Cross-Platform",
        "Push Notifications",
        "Offline Support"
      ],
      stats: {
        apps: "25+",
        downloads: "100K+",
        rating: "4.8★"
      }
    }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100087588905846",
      icon: Facebook,
      gradient: "from-[#012869] to-[#63c000]",
      glowColor: "group-hover:shadow-[0_0_25px_rgba(1,40,105,0.3)]",
      followers: "2K+"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/buildingindiadigital/",
      icon: Instagram,
      gradient: "from-[#f98e09] via-[#63c000] to-[#012869]",
      glowColor: "group-hover:shadow-[0_0_25px_rgba(249,142,9,0.3)]",
      followers: "5K+"
    }
  ];

  const services = [
    { 
      icon: TrendingUp, 
      title: "Google Ads PPC", 
      desc: "ROI-focused PPC campaigns with conversion tracking", 
      stats: "95% Success",
      gradient: "from-[#63c000] to-[#f98e09]",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(99,192,0,0.2)]"
    },
    { 
      icon: Globe, 
      title: "GMB Optimization", 
      desc: "Local SEO & review management services", 
      stats: "+180% Visibility",
      gradient: "from-[#012869] to-[#63c000]",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(1,40,105,0.2)]"
    },
    { 
      icon: Instagram, 
      title: "Social Media", 
      desc: "Instagram, Facebook & YouTube marketing", 
      stats: "+250% Engagement",
      gradient: "from-[#f98e09] to-[#012869]",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(249,142,9,0.2)]"
    },
    { 
      icon: Camera, 
      title: "Organic Photoshoot", 
      desc: "Professional brand photography & lifestyle shoots", 
      stats: "Premium Quality",
      gradient: "from-[#63c000] to-[#012869]",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(99,192,0,0.2)]"
    },
    { 
      icon: Star, 
      title: "Viral Reels", 
      desc: "Instagram & Facebook reels creation", 
      stats: "50K+ Avg Views",
      gradient: "from-[#f98e09] to-[#63c000]",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(249,142,9,0.2)]"
    },
    { 
      icon: Sparkles, 
      title: "Graphic Design", 
      desc: "Custom social media graphics & brand assets", 
      stats: "100+ Monthly",
      gradient: "from-[#012869] to-[#f98e09]",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(1,40,105,0.2)]"
    }
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* SEO Headers */}
      <h1 className="sr-only">Our Work - Website Development, Mobile App Development & Digital Marketing Portfolio</h1>
      <h2 className="sr-only">Professional Website Design, SEO-Optimized Web Development, Custom Mobile App Development, Social Media Marketing</h2>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#63c000]/10 rounded-full blur-3xl -top-32 sm:-top-48 -left-32 sm:-left-48"></div>
        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#012869]/10 rounded-full blur-3xl -bottom-32 sm:-bottom-48 -right-32 sm:-right-48"></div>
        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-[#f98e09]/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          {/* Logo */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <img 
              src="/images/LOGO.png" 
              alt="Building India Digital Logo" 
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(99,192,0,0.2)]"
            />
          </div>

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-gradient-to-r from-[#63c000]/10 to-[#f98e09]/10 border border-[#63c000] rounded-full mb-4 sm:mb-6 hover:scale-105 transition-transform duration-300 shadow-sm">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#012869]" />
            <span className="text-[#012869] font-semibold text-sm sm:text-base">Portfolio Showcase</span>
          </div>

          {/* Main Heading */}
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#012869] via-[#63c000] to-[#f98e09] bg-clip-text text-transparent px-4">
            Our Featured Work
          </h3>

          {/* Description */}
          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 px-4">
            <p className="text-sm sm:text-base lg:text-lg text-[#012869] leading-relaxed">
              At Building India Digital, we deliver comprehensive digital solutions that transform businesses. Our expertise spans custom website development with advanced SEO optimization, mobile app development for iOS and Android, and complete digital marketing services.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-[#012869]/80 leading-relaxed">
              We create engaging social media content featuring professional organic photoshoots, viral reels, and custom graphic design. Our data-driven approach delivers measurable results.
            </p>
          </div>
        </div>

        {/* Featured Projects - Glowing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24">
          {featuredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Outer Glow Container */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700 ${project.borderGlow}`}></div>
                
                {/* Main Card */}
                <div className="relative bg-white rounded-2xl sm:rounded-3xl border-2 border-[#63c000]/20 group-hover:border-[#63c000] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#63c000]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  <div className="relative p-6 sm:p-8 lg:p-10">
                    
                    {/* Header Section */}
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
                      <div className="flex-1 w-full sm:w-auto">
                        <span className={`inline-block px-4 py-1.5 bg-gradient-to-r ${project.gradient} text-white text-xs sm:text-sm font-bold rounded-full mb-3 shadow-md`}>
                          {project.category}
                        </span>
                        <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#012869] mb-2 group-hover:bg-gradient-to-r group-hover:from-[#012869] group-hover:to-[#63c000] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {project.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#f98e09] font-medium">{project.type}</p>
                      </div>
                      
                      {/* Icon */}
                      <div className={`p-3 sm:p-4 bg-gradient-to-br ${project.gradient} rounded-xl sm:rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg ${project.glowColor}`}>
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#012869]/70 mb-6 leading-relaxed">{project.description}</p>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm bg-[#63c000]/5 px-3 py-2 rounded-lg border border-[#63c000]/20 hover:border-[#63c000] transition-colors duration-300">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#63c000] flex-shrink-0" />
                          <span className="text-[#012869]">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats Section */}
                    <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 pb-6 border-b border-[#63c000]/20">
                      {Object.entries(project.stats).map(([key, value], idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-[#f98e09]/5 px-3 py-2 rounded-lg border border-[#f98e09]/20 text-xs sm:text-sm">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#f98e09] flex-shrink-0" />
                          <span className="text-[#012869]/70">
                            {key.charAt(0).toUpperCase() + key.slice(1)}: <span className="font-bold text-[#012869]">{value}</span>
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative inline-flex items-center gap-2 px-5 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r ${project.gradient} text-white font-bold rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 text-sm sm:text-base group/btn w-full sm:w-auto justify-center`}
                      >
                        <span className="relative z-10">Visit Live Website</span>
                        <ExternalLink className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-5 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#012869] to-[#63c000] text-white font-bold rounded-xl border border-[#63c000] w-full sm:w-auto justify-center text-sm sm:text-base">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Multiple Apps Delivered</span>
                      </div>
                    )}

                  </div>

                  {/* Corner Glow Effects */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition-opacity duration-700`}></div>
                  <div className={`absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr ${project.gradient} opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition-opacity duration-700`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Digital Marketing Services */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-gradient-to-r from-[#012869]/10 to-[#63c000]/10 border border-[#012869] rounded-full mb-4 sm:mb-6 hover:scale-105 transition-transform duration-300 shadow-sm">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#012869]" />
              <span className="text-[#012869] font-semibold text-sm sm:text-base">Digital Marketing Services</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#012869] to-[#63c000] bg-clip-text text-transparent px-4">
              Complete Digital Marketing Solutions
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-[#012869]/80 max-w-3xl mx-auto px-4">
              Google Ads PPC campaigns, GMB optimization, organic photoshoots, viral reels, and social media marketing that drives real ROI
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <div 
                  key={idx} 
                  className={`group relative bg-white p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border-2 border-[#63c000]/20 hover:border-[#63c000] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${service.glowColor}`}
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  <div className="relative">
                    {/* Icon Container */}
                    <div className={`bg-gradient-to-br ${service.gradient} w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <ServiceIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#012869] mb-2 sm:mb-3 group-hover:bg-gradient-to-r group-hover:from-[#012869] group-hover:to-[#63c000] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {service.title}
                    </h4>
                    <p className="text-xs sm:text-sm lg:text-base text-[#012869]/70 mb-3 sm:mb-4 leading-relaxed">{service.desc}</p>
                    
                    <div className="flex items-center gap-2 bg-[#f98e09]/10 px-3 py-2 rounded-lg border border-[#f98e09]/30 w-fit">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-[#f98e09]" />
                      <span className="text-xs sm:text-sm font-bold text-[#012869]">{service.stats}</span>
                    </div>
                  </div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#63c000]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl sm:rounded-2xl"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-[#63c000] to-transparent mb-10 sm:mb-12"></div>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#f98e09] to-[#012869] bg-clip-text text-transparent px-4">
            Follow Our Digital Journey
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-[#012869]/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Stay updated with our latest projects, SEO tips, and digital marketing insights
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
            {socialLinks.map((social) => {
              const SocialIcon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full sm:w-auto"
                >
                  {/* Outer Glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${social.gradient} rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500 ${social.glowColor}`}></div>
                  
                  {/* Button */}
                  <div className={`relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r ${social.gradient} text-white font-bold rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <SocialIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="text-sm sm:text-base">Follow on {social.name}</span>
                      <span className="text-xs opacity-90 hidden sm:inline">{social.followers}</span>
                    </div>
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurWork;
