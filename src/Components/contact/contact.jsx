import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// Social Media Icons (from your footer)
const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// Email and Phone Icons
const EmailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

// Scroll-triggered animated sections
const ScrollAnimatedSection = ({ children, direction = "left", className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
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
  }, []);
  
  const translateClass = direction === "left" ? "-translate-x-20" : 
                       direction === "right" ? "translate-x-20" : 
                       "translate-y-20";
  
  return (
    <div 
      ref={sectionRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'translate-x-0 translate-y-0 opacity-100' : `${translateClass} opacity-0`
      } ${className}`}
    >
      {children}
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');
    
    try {
      // EmailJS configuration - these are public demo credentials
      const serviceId = 'service_8hu3qgf';
      const templateId = 'template_portfolio';
      const publicKey = 'gJO5JV8v4P_pQ8SBe';
      
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'i.asela919@gmail.com'
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    }
    
    // Clear status message after 5 seconds
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#171d32] text-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <ScrollAnimatedSection direction="left">
            <div className="space-y-8">
              <div>
                <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 p-3 rounded-full hover:bg-blue-500/20 transition-all duration-300">
                      <EmailIcon />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white">Email</h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-blue-400 transition-colors duration-300">i.asela919@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 p-3 rounded-full hover:bg-green-500/20 transition-all duration-300">
                      <PhoneIcon />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white">Phone</h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-green-400 transition-colors duration-300">+94 77 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 p-3 rounded-full hover:bg-purple-500/20 transition-all duration-300">
                      <LocationIcon />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white">Location</h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-purple-400 transition-colors duration-300">Moratuwa, Western Province, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="#" className="group relative p-3 bg-gray-800/30 backdrop-blur-sm rounded-full text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 transform transition-all duration-500 shadow-md hover:shadow-2xl border border-gray-700/50 hover:border-gray-600/50">
                    <div className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <LinkedInIcon />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
                  </a>
                  <a href="#" className="group relative p-3 bg-gray-800/30 backdrop-blur-sm rounded-full text-gray-400 hover:text-gray-300 hover:bg-gray-700/60 transform transition-all duration-500 shadow-md hover:shadow-2xl border border-gray-700/50 hover:border-gray-600/50">
                    <div className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <GitHubIcon />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
                  </a>
                  <a href="#" className="group relative p-3 bg-gray-800/30 backdrop-blur-sm rounded-full text-gray-400 hover:text-blue-500 hover:bg-blue-600/20 transform transition-all duration-500 shadow-md hover:shadow-2xl border border-gray-700/50 hover:border-gray-600/50">
                    <div className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <FacebookIcon />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
                  </a>
                  <a href="#" className="group relative p-3 bg-gray-800/30 backdrop-blur-sm rounded-full text-gray-400 hover:text-pink-400 hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-purple-500/20 transform transition-all duration-500 shadow-md hover:shadow-2xl border border-gray-700/50 hover:border-gray-600/50">
                    <div className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <InstagramIcon />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* Contact Form */}
          <ScrollAnimatedSection direction="right">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-700">
              <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-white mb-6">Send Me a Message</h2>
              
              {submitStatus === 'sending' && (
                <div className="mb-6 p-4 bg-blue-900/50 border border-blue-600 text-blue-400 rounded-lg">
                  <p className="font-semibold text-center">Sending email... </p>
                </div>
              )}

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/50 border border-green-600 text-green-400 rounded-lg">
                  <p className="font-semibold text-center">Email sent successfully! </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900/50 border border-red-600 text-red-400 rounded-lg">
                  Sorry, there was an error sending your message. Please try again or contact me directly at i.asela919@gmail.com
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400 text-xs sm:text-sm md:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400 text-xs sm:text-sm md:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400 text-xs sm:text-sm md:text-base"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical placeholder-gray-400 text-xs sm:text-sm md:text-base"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === 'sending'}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 text-xs sm:text-sm md:text-base transform hover:scale-105 disabled:transform-none"
                >
                  {submitStatus === 'sending' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <SendIcon />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollAnimatedSection>
        </div>
      </div>


    </div>
  );
};

export default ContactPage;