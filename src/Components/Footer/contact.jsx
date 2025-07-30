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

// Typewriter effect for Contact heading
const TypewriterContact = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Contact Me";
  
  useEffect(() => {
    let timeoutId;
    
    const typeText = () => {
      let currentIndex = 0;
      
      const typeNextChar = () => {
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(typeNextChar, 150);
        }
      };
      
      typeNextChar();
    };
    
    const timer = setTimeout(typeText, 500);
    
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <span className="text-black">
      {displayText}
      <span className="animate-pulse text-gray-600">|</span>
    </span>
  );
};

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
      const serviceId = 'service_ow57u2h';
      const templateId = 'template_q0rs2te';
      const publicKey = 'yOasyCDP2RzUQOiut';
      
      // Prepare template parameters
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_subject: formData.subject,
        message: formData.message,
        to_name: 'Asela'
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('EmailJS Response:', response);

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('EmailJS Error - Status:', response.status);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      console.error('Error details:', error.text || error.message);
      console.error('Error status:', error.status);
      
      // Show specific error messages
      let errorMessage = "Sorry, there was an error sending your message.";
      
      if (error.status === 412) {
        errorMessage = "Email service authentication error. Please try again later or contact me directly.";
      } else if (error.status === 400) {
        errorMessage = "Invalid email configuration. Please contact me directly.";
      } else if (error.status === 404) {
        errorMessage = "Email service not found. Please contact me directly.";
      }
      
      setSubmitStatus('error');
      
      // You can also display the specific error message
      console.log("User-friendly error:", errorMessage);
    }
    
    // Clear status message after 5 seconds
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  const currentYear = new Date().getFullYear();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-blue-200 text-gray-800">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header Section */}
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight tracking-tight mb-4">
            <TypewriterContact />
          </h1>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto transition-all duration-1000 delay-1000 ${
            isLoaded ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <ScrollAnimatedSection direction="left">
            <div className="space-y-8">
              <div>
                <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-blue-50 backdrop-blur-sm border border-blue-200 hover:border-blue-400 p-3 rounded-full hover:bg-blue-100 transition-all duration-300 shadow-sm">
                      <EmailIcon />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900">Email</h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">i.asela919@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-blue-50 backdrop-blur-sm border border-blue-200 hover:border-blue-400 p-3 rounded-full hover:bg-blue-100 transition-all duration-300 shadow-sm">
                      <PhoneIcon />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900">Phone</h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">+94 70 1574865</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-blue-50 backdrop-blur-sm border border-blue-200 hover:border-blue-400 p-3 rounded-full hover:bg-blue-100 transition-all duration-300 shadow-sm">
                      <LocationIcon />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900">Location</h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">Moratuwa, Western Province, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/indunil-asela/" target="_blank" rel="noopener noreferrer" className="group relative p-3 bg-blue-50 backdrop-blur-sm rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-100 transform transition-all duration-500 shadow-sm hover:shadow-md border border-blue-200 hover:border-blue-400">
                    <div className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <LinkedInIcon />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-blue-600/10 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
                  </a>
                  <a href="https://github.com/indunilasela" target="_blank" rel="noopener noreferrer" className="group relative p-3 bg-blue-50 backdrop-blur-sm rounded-full text-gray-600 hover:text-gray-800 hover:bg-blue-100 transform transition-all duration-500 shadow-sm hover:shadow-md border border-blue-200 hover:border-blue-400">
                    <div className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <GitHubIcon />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-blue-600/10 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
                  </a>
                  <a href="https://www.facebook.com/share/1JuBSaEihv/" target="_blank" rel="noopener noreferrer" className="group relative p-3 bg-blue-50 backdrop-blur-sm rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-100 transform transition-all duration-500 shadow-sm hover:shadow-md border border-blue-200 hover:border-blue-400">
                    <div className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <FacebookIcon />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-blue-600/10 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
                  </a>
                  <a href="https://instagram.com/indunil__asela" target="_blank" rel="noopener noreferrer" className="group relative p-3 bg-blue-50 backdrop-blur-sm rounded-full text-gray-600 hover:text-pink-600 hover:bg-blue-100 transform transition-all duration-500 shadow-sm hover:shadow-md border border-blue-200 hover:border-blue-400">
                    <div className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <InstagramIcon />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-blue-600/10 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* Contact Form */}
          <ScrollAnimatedSection direction="right">
            <div className="bg-gray-100/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-300/50">
              <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-gray-900 mb-6">Send Me a Message</h2>
              
              {submitStatus === 'sending' && (
                <div className="mb-6 p-4 bg-blue-50 border border-blue-300 text-blue-800 rounded-lg">
                  <p className="font-semibold text-center">Sending email... </p>
                </div>
              )}

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-300 text-green-800 rounded-lg">
                  <p className="font-semibold text-center">Email sent successfully! </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-300 text-red-800 rounded-lg">
                  Sorry, there was an error sending your message. Please try again or contact me directly at i.asela919@gmail.com
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-500 text-xs sm:text-sm md:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-500 text-xs sm:text-sm md:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-500 text-xs sm:text-sm md:text-base"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical placeholder-gray-500 text-xs sm:text-sm md:text-base"
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