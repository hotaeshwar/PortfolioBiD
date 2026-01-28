import React, { useEffect, useRef, useState } from 'react';
import { 
  Award,
  TrendingUp,
  Users,
  Zap,
  Target,
  Heart,
  Shield,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Star,
  Lightbulb,
  Headphones
} from 'lucide-react';

const WhyChooseUs = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [projectCount, setProjectCount] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [yearsExp, setYearsExp] = useState(0);
  const observerRef = useRef(null);

  // Counting animation on component mount
  useEffect(() => {
    let projectInterval, satisfactionInterval, clientInterval, yearsInterval;
    
    // Animate Projects (500+)
    let projectCounter = 0;
    projectInterval = setInterval(() => {
      projectCounter += 10;
      if (projectCounter >= 500) {
        setProjectCount(500);
        clearInterval(projectInterval);
      } else {
        setProjectCount(projectCounter);
      }
    }, 15);

    // Animate Satisfaction Rate (98%)
    let satisfactionCounter = 0;
    satisfactionInterval = setInterval(() => {
      satisfactionCounter += 2;
      if (satisfactionCounter >= 98) {
        setSatisfactionRate(98);
        clearInterval(satisfactionInterval);
      } else {
        setSatisfactionRate(satisfactionCounter);
      }
    }, 20);

    // Animate Clients (200+)
    let clientCounter = 0;
    clientInterval = setInterval(() => {
      clientCounter += 5;
      if (clientCounter >= 200) {
        setClientCount(200);
        clearInterval(clientInterval);
      } else {
        setClientCount(clientCounter);
      }
    }, 15);

    // Animate Years (12+)
    let yearsCounter = 0;
    yearsInterval = setInterval(() => {
      yearsCounter += 1;
      if (yearsCounter >= 12) {
        setYearsExp(12);
        clearInterval(yearsInterval);
      } else {
        setYearsExp(yearsCounter);
      }
    }, 100);

    return () => {
      clearInterval(projectInterval);
      clearInterval(satisfactionInterval);
      clearInterval(clientInterval);
      clearInterval(yearsInterval);
    };
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observerRef.current.observe(section));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const isVisible = (id) => visibleSections.has(id);

  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Track Record",
      description: "Over 500+ successful projects delivered with a 98% client satisfaction rate. Our portfolio speaks for itself with measurable results and happy clients across industries.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Industry Specialization",
      description: "Deep expertise in healthcare and hospitality marketing. We understand the unique challenges of clinics and resorts, creating campaigns that resonate with your target audience.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Result-Driven Approach",
      description: "We focus on metrics that matter—increased bookings, more patient inquiries, higher ROI. Every strategy is designed to deliver tangible business growth and measurable outcomes.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Excellence",
      description: "Our team creates scroll-stopping Instagram reels, engaging content, and stunning visuals that capture attention and drive engagement across all social media platforms.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Team",
      description: "Work with experienced professionals who are passionate about your success. From strategists to designers to developers—we're your complete digital growth partner.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Always available when you need us. Quick response times, proactive communication, and dedicated support ensure your campaigns run smoothly and issues are resolved instantly.",
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  const advantages = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Data-Driven Strategies",
      description: "Every decision backed by analytics and insights for optimal performance."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Transparent Reporting",
      description: "Clear metrics, detailed reports, and complete visibility into your campaigns."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Turnaround",
      description: "Quick project delivery without compromising on quality or attention to detail."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Latest Technologies",
      description: "Cutting-edge tools and platforms to keep you ahead of the competition."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Clinic Director",
      text: "Their digital marketing transformed our clinic. Patient inquiries increased by 300% within 3 months. The team understands healthcare marketing perfectly!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Resort Owner",
      text: "Outstanding work on our resort's social media! The reels they created went viral and our bookings doubled. Highly professional and creative team.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Restaurant Chain Owner",
      text: "The website and app they built exceeded our expectations. User-friendly, fast, and our online orders increased by 75%. Best investment we made!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />

      {/* Hero Section */}
      <section 
        id="hero"
        data-animate
        className={`relative z-10 px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20 transition-all duration-1000 ${
          isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm mb-6 md:mb-8 animate-pulse">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
            <span className="text-xs sm:text-sm font-medium text-orange-400">
              Trusted by 200+ Businesses
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
            Why Choose
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
              Building India Digital?
            </span>
          </h1>

          {/* Description */}
          <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
            We're not just another digital agency—we're your growth partner. With proven expertise in digital marketing and development, we deliver results that transform businesses and exceed expectations.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="p-8 md:p-12 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 text-center">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500 mb-4">
                {projectCount}+
              </div>
              <div className="text-base md:text-lg text-slate-400">Projects Completed</div>
            </div>

            <div className="p-8 md:p-12 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 text-center">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500 mb-4">
                {satisfactionRate}%
              </div>
              <div className="text-base md:text-lg text-slate-400">Client Satisfaction</div>
            </div>

            <div className="p-8 md:p-12 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 text-center">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500 mb-4">
                {clientCount}+
              </div>
              <div className="text-base md:text-lg text-slate-400">Happy Clients</div>
            </div>

            <div className="p-8 md:p-12 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 text-center">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500 mb-4">
                {yearsExp}+
              </div>
              <div className="text-base md:text-lg text-slate-400">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Reasons Section */}
      <section 
        id="reasons"
        data-animate
        className={`relative z-10 px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 transition-all duration-1000 delay-300 ${
          isVisible('reasons') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 text-center">
            What Sets Us Apart
          </h2>
          <p className="text-slate-400 text-center mb-10 md:mb-16 max-w-2xl mx-auto text-sm md:text-base">
            Discover the key advantages that make us the preferred choice for businesses looking to grow their digital presence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="group p-6 md:p-8 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${reason.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {reason.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Advantages */}
      <section 
        id="advantages"
        data-animate
        className={`relative z-10 px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 transition-all duration-1000 delay-500 ${
          isVisible('advantages') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-900/30 backdrop-blur-sm border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                  {advantage.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{advantage.title}</h4>
                <p className="text-sm text-slate-400">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        id="testimonials"
        data-animate
        className={`relative z-10 px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 transition-all duration-1000 delay-700 ${
          isVisible('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 text-center">
            What Our Clients Say
          </h2>
          <p className="text-slate-400 text-center mb-10 md:mb-16 max-w-2xl mx-auto text-sm md:text-base">
            Don't just take our word for it—hear from the businesses we've helped grow and succeed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 md:p-8 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-green-500/50 transition-all duration-300"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-300 mb-6 leading-relaxed text-sm md:text-base italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-slate-700/50">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        id="process"
        data-animate
        className={`relative z-10 px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 transition-all duration-1000 delay-900 ${
          isVisible('process') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 md:mb-16 text-center">
            Our Simple Process
          </h2>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "We understand your business goals, target audience, and competitive landscape to create a customized strategy."
              },
              {
                step: "02",
                title: "Creative Development",
                description: "Our team designs stunning visuals, engaging content, and powerful campaigns tailored to your brand."
              },
              {
                step: "03",
                title: "Launch & Optimize",
                description: "We launch your campaigns and continuously monitor, test, and optimize for maximum results."
              },
              {
                step: "04",
                title: "Scale & Grow",
                description: "As results improve, we scale successful strategies and explore new opportunities for growth."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex gap-6 items-start p-6 md:p-8 rounded-xl bg-slate-900/30 backdrop-blur-sm border border-slate-700/30 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="cta"
        data-animate
        className={`relative z-10 px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 transition-all duration-1000 delay-1000 ${
          isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 md:p-12 lg:p-16 rounded-2xl bg-gradient-to-r from-orange-500/10 to-blue-500/10 border border-orange-500/20 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Ready to Grow Your
              <span className="bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 bg-clip-text text-transparent"> Business?</span>
            </h2>
            <p className="text-slate-300 mb-8 md:mb-10 text-sm md:text-lg max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their digital presence with our expertise. Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://www.buildingindiadigital.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-bold text-base md:text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://www.buildingindiadigital.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 border-2 border-blue-500 text-blue-400 rounded-lg font-bold text-base md:text-lg hover:bg-blue-500/10 transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;