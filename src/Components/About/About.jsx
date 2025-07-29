import React, { useState, useEffect, useRef } from "react";

// Typewriter effect for About heading
const TypewriterAbout = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "About Me";
  
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
    
    // Start typing after component mounts
    const timer = setTimeout(typeText, 500);
    
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <span className="text-blue-400">
      {displayText}
      <span className="animate-pulse text-blue-300">|</span>
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
          setIsVisible(false); // Reset animation when out of view
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of element is visible
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

const About = ({ onPageChange }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-white bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 min-h-screen">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="min-h-screen py-4 lg:py-6">
          
          {/* Header Section */}
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight tracking-tight mb-4">
              <TypewriterAbout />
            </h1>
            <div className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto transition-all duration-1000 delay-1000 ${
              isLoaded ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}></div>
          </div>
          
          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8">
            
            {/* Introduction Paragraph 1 */}
            <ScrollAnimatedSection direction="left">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300">
                
                <p className="text-sm sm:text-base md:text-lg text-gray-300 hover:text-white transition-colors duration-300">
                  I am a third-year undergraduate at the University of Moratuwa, Faculty of Information Technology. 
                  A passionate full-stack web developer and aspiring financial technologist. Skilled in modern web technologies including 
                  C, C++, CSS, PHP, Python, Tailwind CSS, Bootstrap, JavaScript, Node.js, Ballerina, MySQL, MongoDB, and React.
                </p>
              </div>
            </ScrollAnimatedSection>
            
            {/* Introduction Paragraph 2 */}
            <ScrollAnimatedSection direction="right">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300">
                <p className="text-sm sm:text-base md:text-lg text-gray-300 hover:text-white transition-colors duration-300">
                  I enjoy building complete web applications — from intuitive front-end interfaces to 
                  efficient back-end systems. I'm also deeply interested in how technology intersects with finance 
                  and constantly explore ways to create value through innovative, impactful software solutions.
                </p>
              </div>
            </ScrollAnimatedSection>
            
            {/* Navigation Buttons */}
            <ScrollAnimatedSection direction="up" className="pt-4 lg:pt-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <button 
                  onClick={() => onPageChange('education')}
                  className="group px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ease-out"
                >
                  <span className="flex items-center gap-2">
                    Education
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
                
                <button 
                  onClick={() => onPageChange('skills')}
                  className="group px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-blue-400 border-2 border-blue-400 hover:bg-blue-400 hover:text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ease-out"
                >
                  <span className="flex items-center gap-2">
                    Skills
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
                
                <button 
                  onClick={() => onPageChange('projects')}
                  className="group px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-blue-400 border-2 border-blue-400 hover:bg-blue-400 hover:text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ease-out"
                >
                  <span className="flex items-center gap-2">
                    Projects
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </ScrollAnimatedSection>
            
            {/* Quick Stats */}
            <ScrollAnimatedSection direction="up" className="mt-8 lg:mt-12">
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs text-gray-400">
                <div className="text-center hover:scale-110 hover:text-blue-400 transition-all duration-300 cursor-pointer">
                  <div className="text-lg sm:text-xl font-bold text-white">3rd</div>
                  <div className="text-xs">Year Student</div>
                </div>
                <div className="text-center hover:scale-110 hover:text-blue-400 transition-all duration-300 cursor-pointer">
                  <div className="text-lg sm:text-xl font-bold text-white">13+</div>
                  <div className="text-xs">Technologies</div>
                </div>
                <div className="text-center hover:scale-110 hover:text-blue-400 transition-all duration-300 cursor-pointer">
                  <div className="text-lg sm:text-xl font-bold text-white">Full</div>
                  <div className="text-xs">Stack Dev</div>
                </div>
                <div className="text-center hover:scale-110 hover:text-blue-400 transition-all duration-300 cursor-pointer">
                  <div className="text-lg sm:text-xl font-bold text-white">FinTech</div>
                  <div className="text-xs">Enthusiast</div>
                </div>
              </div>
            </ScrollAnimatedSection>
            
            {/* Technology Skills Section */}
            <ScrollAnimatedSection direction="left" className="mt-8 lg:mt-12">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-3 lg:mb-4">
                  Technology Stack
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3">
                  {['C', 'C++', 'CSS', 'PHP', 'Python', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'Node.js', 'Ballerina', 'MySQL', 'MongoDB', 'React'].map((tech, index) => (
                    <div 
                      key={tech}
                      className="text-center p-3 lg:p-4 bg-gray-700/30 rounded-lg hover:bg-blue-600/20 hover:scale-105 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-300">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;