import React, { useState, useEffect, useRef } from "react";
import { User, Phone, Mail, MessageSquare, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [filledFields, setFilledFields] = useState({});
  const [animatedElements, setAnimatedElements] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            
            const elements = [
              'header',
              'map',
              'contact-info',
              'form-header',
              'name-field',
              'phone-field',
              'email-field',
              'message-field',
              'submit-button'
            ];
            
            elements.forEach((element, index) => {
              setTimeout(() => {
                setAnimatedElements(prev => [...prev, element]);
              }, index * 100);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const isAnimated = (element) => animatedElements.includes(element);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phone || !phonePattern.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.message) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateCustomerUUID = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (!validateForm()) {
      return;
    }

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const customerUUID = generateCustomerUUID();
      const formElement = document.createElement('form');
      formElement.action = 'https://formsubmit.co/himanshukhanegwal@gmail.com';
      formElement.method = 'POST';
      formElement.style.display = 'none';

      const fields = {
        'Customer ID': customerUUID,
        'Name': formData.name,
        'Phone': formData.phone,
        'Email': formData.email,
        'Message': formData.message,
        'Timestamp': new Date().toLocaleString(),
        '_subject': `New Contact Form Submission - Customer ID: ${customerUUID}`,
        '_next': window.location.href,
        '_captcha': 'false'
      };

      Object.entries(fields).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        formElement.appendChild(input);
      });

      document.body.appendChild(formElement);
      formElement.submit();

      setTimeout(() => {
        if (document.body.contains(formElement)) {
          document.body.removeChild(formElement);
        }
      }, 1000);

      setShowPopup(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setFilledFields({});

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);

    } catch (error) {
      console.error('Submission error:', error);
      setErrors({
        submit: "Failed to submit form. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    setFilledFields(prev => ({
      ...prev,
      [name]: value.length > 0
    }));
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <div ref={sectionRef} className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-8 sm:py-10 md:py-12 pt-20 sm:pt-24 md:pt-28 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-10 left-10 w-48 h-48 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-48 h-48 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-48 h-48 bg-green-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Header */}
        <div className={`text-center mb-6 sm:mb-8 transition-all duration-700 ${
          isAnimated('header') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="inline-block mb-2">
            <span className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-lg">
              Let's Connect
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-semibold text-slate-300 max-w-2xl mx-auto">
            Transform Your Digital Presence Today!
          </p>
        </div>

        {/* Main Content Grid - More Compact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Left Side - Map and Contact Info */}
          <div className="space-y-4">
            {/* Compact Google Map */}
            <div className={`relative group transition-all duration-700 ${
              isAnimated('map') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-green-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-xl overflow-hidden border border-slate-700/50">
                <div className="h-40 sm:h-48 md:h-56 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-green-500/10 pointer-events-none"></div>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.8114143873245!2d76.81275617575406!3d30.639271990143207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390febeead57d017%3A0xd3f7576846418b80!2sBUILDING%20INDIA%20DIGITAL!5e0!3m2!1sen!2sin!4v1768288100482!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Building India Digital Location"
                    className="grayscale-[50%] hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <p className="text-white font-semibold text-xs sm:text-sm flex items-center">
                    <MapPin className="w-4 h-4 mr-1.5" />
                    Zirakpur, Punjab, India
                  </p>
                </div>
              </div>
            </div>

            {/* Compact Contact Information Card */}
            <div className={`relative group transition-all duration-700 ${
              isAnimated('contact-info') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-green-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-lg sm:rounded-xl shadow-xl p-4 sm:p-5 border border-slate-700/50">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-gradient-to-r from-orange-500 to-green-500 p-2 rounded-lg">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
                    Contact Information
                  </h3>
                </div>

                {/* Compact Company Info */}
                <div className="mb-3 p-3 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-lg border border-slate-600/30">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                    Building India Digital
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    Transforming businesses through cutting-edge digital solutions.
                  </p>
                </div>

                {/* Compact Contact Details */}
                <div className="space-y-2.5">
                  {/* Phone */}
                  <div className="flex items-start gap-2.5 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 border border-slate-700/30 hover:border-orange-500/50 transition-all duration-300">
                    <div className="flex-shrink-0 bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg shadow-md">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="text-sm sm:text-base font-bold text-white mb-1.5">
                        For any enquiry, Call Us:
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-300 font-semibold">+919041499964</p>
                      <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-0.5">+919041499973</p>
                    </div>
                  </div>

                  {/* Locations */}
                  <div className="flex items-start gap-2.5 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 border border-slate-700/30 hover:border-green-500/50 transition-all duration-300">
                    <div className="flex-shrink-0 bg-gradient-to-br from-orange-500 to-green-500 p-2 rounded-lg shadow-md">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="text-sm sm:text-base font-bold text-white mb-2">
                        Our Locations
                      </h5>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">#246, Devaji VIP Plaza, VIP Road, Zirakpur, India</p>
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">DLF, Cyber City, Gurugram, India</p>
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">Head Office - Plot No. 2466, Sec 82, Mohali, India</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Compact Contact Form */}
          <div className="h-full">
            <div className="relative group h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-orange-500 to-green-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-xl p-4 sm:p-5 h-full border border-slate-700/50">
                {/* Compact Form Header */}
                <div className={`text-center mb-4 transition-all duration-700 ${
                  isAnimated('form-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  <div className="inline-block p-2.5 bg-gradient-to-br from-orange-500/20 to-green-500/20 rounded-xl mb-2">
                    <MessageSquare className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent mb-1">
                    Send us a Message
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">We'll respond within 24 hours</p>
                </div>

                <div className="space-y-3">
                  {/* Name Input */}
                  <div className={`transition-all duration-700 ${
                    isAnimated('name-field') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center">
                      <User className={`w-3.5 h-3.5 mr-1.5 transition-all duration-300 ${
                        focusedField === 'name' ? 'text-orange-500 scale-110' : 'text-slate-500'
                      }`} />
                      Your Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        placeholder="Enter your full name"
                        className={`w-full px-3 py-2.5 bg-slate-800/50 border-2 rounded-lg focus:outline-none transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md text-white placeholder-slate-500 ${
                          focusedField === 'name' 
                            ? 'border-orange-500 bg-slate-800 scale-[1.02]' 
                            : 'border-slate-700/50'
                        } ${filledFields.name ? 'border-green-500' : ''}`}
                      />
                      {filledFields.name && (
                        <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500 animate-scaleIn" />
                      )}
                    </div>
                    {errors.name && <p className="text-red-400 text-xs mt-1 flex items-center animate-slideIn">⚠️ {errors.name}</p>}
                  </div>

                  {/* Phone Input */}
                  <div className={`transition-all duration-700 ${
                    isAnimated('phone-field') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center">
                      <Phone className={`w-3.5 h-3.5 mr-1.5 transition-all duration-300 ${
                        focusedField === 'phone' ? 'text-green-500 scale-110' : 'text-slate-500'
                      }`} />
                      Phone Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => handleFocus('phone')}
                        onBlur={handleBlur}
                        placeholder="Enter 10-digit mobile number"
                        maxLength="10"
                        className={`w-full px-3 py-2.5 bg-slate-800/50 border-2 rounded-lg focus:outline-none transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md text-white placeholder-slate-500 ${
                          focusedField === 'phone' 
                            ? 'border-green-500 bg-slate-800 scale-[1.02]' 
                            : 'border-slate-700/50'
                        } ${filledFields.phone ? 'border-green-500' : ''}`}
                      />
                      {filledFields.phone && (
                        <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500 animate-scaleIn" />
                      )}
                    </div>
                    {errors.phone && <p className="text-red-400 text-xs mt-1 flex items-center animate-slideIn">⚠️ {errors.phone}</p>}
                  </div>

                  {/* Email Input */}
                  <div className={`transition-all duration-700 ${
                    isAnimated('email-field') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center">
                      <Mail className={`w-3.5 h-3.5 mr-1.5 transition-all duration-300 ${
                        focusedField === 'email' ? 'text-orange-500 scale-110' : 'text-slate-500'
                      }`} />
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        placeholder="Enter your email address"
                        className={`w-full px-3 py-2.5 bg-slate-800/50 border-2 rounded-lg focus:outline-none transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md text-white placeholder-slate-500 ${
                          focusedField === 'email' 
                            ? 'border-orange-500 bg-slate-800 scale-[1.02]' 
                            : 'border-slate-700/50'
                        } ${filledFields.email ? 'border-green-500' : ''}`}
                      />
                      {filledFields.email && (
                        <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500 animate-scaleIn" />
                      )}
                    </div>
                    {errors.email && <p className="text-red-400 text-xs mt-1 flex items-center animate-slideIn">⚠️ {errors.email}</p>}
                  </div>

                  {/* Message Input */}
                  <div className={`transition-all duration-700 ${
                    isAnimated('message-field') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center">
                      <MessageSquare className={`w-3.5 h-3.5 mr-1.5 transition-all duration-300 ${
                        focusedField === 'message' ? 'text-green-500 scale-110' : 'text-slate-500'
                      }`} />
                      Your Message *
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        placeholder="Tell us about your project..."
                        rows="4"
                        className={`w-full px-3 py-2.5 bg-slate-800/50 border-2 rounded-lg focus:outline-none transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md resize-vertical text-white placeholder-slate-500 ${
                          focusedField === 'message' 
                            ? 'border-green-500 bg-slate-800 scale-[1.02]' 
                            : 'border-slate-700/50'
                        } ${filledFields.message ? 'border-green-500' : ''}`}
                      ></textarea>
                      {filledFields.message && (
                        <CheckCircle className="absolute right-3 top-3 w-4 h-4 text-green-500 animate-scaleIn" />
                      )}
                    </div>
                    {errors.message && <p className="text-red-400 text-xs mt-1 flex items-center animate-slideIn">⚠️ {errors.message}</p>}
                  </div>

                  {/* Error Message */}
                  {errors.submit && (
                    <div className="p-3 bg-red-500/10 border-l-4 border-red-500 rounded-lg animate-slideIn">
                      <p className="text-red-400 text-xs font-semibold">{errors.submit}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className={`transition-all duration-700 ${
                    isAnimated('submit-button') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}>
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 via-orange-500 to-green-500 hover:from-orange-600 hover:via-orange-600 hover:to-green-600 text-white font-bold py-3 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin mr-2 h-4 w-4" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4 animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 p-6 sm:p-8 rounded-xl max-w-sm w-full shadow-2xl transform animate-scaleIn">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-green-400 to-green-600 mb-4 animate-bounce">
                <CheckCircle className="h-8 w-8 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-3">
                Success! 🎉
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-medium">
                Your message has been sent successfully!
              </p>
              <p className="text-xs text-slate-400 mt-2">
                We'll respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes scaleIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        @keyframes slideIn {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;