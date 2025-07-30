import React, { useState, useEffect, useRef } from "react";

// Typewriter effect for Education heading
const TypewriterEducation = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Education";
  
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

const Education = ({ onPageChange }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-gray-800 bg-gradient-to-r from-white to-blue-200 min-h-screen">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="min-h-screen py-4 lg:py-6">
          
          {/* Header Section */}
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight tracking-tight mb-4">
              <TypewriterEducation />
            </h1>
            <div className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto transition-all duration-1000 delay-1000 ${
              isLoaded ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}></div>
          </div>
          
          {/* Education Timeline */}
          <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8">
            
            {/* Current Education */}
            <ScrollAnimatedSection direction="left">
              <div className="bg-gray-100/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-gray-300/50 hover:border-blue-400/50 transition-all duration-300 shadow-lg">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 lg:mb-4">
                  Bachelor of Science in Information Technology
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors duration-300 mb-2">
                  University of Moratuwa, Faculty of Information Technology
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">
                  2022 - Present | Currently in 3rd year, specializing in software engineering and web development
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-1">
                  {['OOP', 'Web Development', 'Database Systems', 'Data Structures', 'Software Engineering', 'etc...'].map((subject, index) => (
                    <div 
                      key={subject}
                      className="text-center p-1 bg-gray-200/60 rounded hover:bg-blue-100/80 hover:scale-105 transition-all duration-300 shadow-sm"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-xs text-gray-700 hover:text-gray-900 transition-colors duration-300">
                        {subject}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimatedSection>


            <ScrollAnimatedSection direction="right">
              <div className="bg-gray-100/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-gray-300/50 hover:border-blue-400/50 transition-all duration-300 shadow-lg">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 lg:mb-4">
                  Intermediate English Course - Batch 78
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors duration-300 mb-2">
                  Keirawa British Way English Academy
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">
                  2022 | Completed a comprehensive English language program covering all fundamental skills
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-1">
                  {['Grammar', 'Speaking', 'Listening', 'Reading', 'Writing'].map((skill, index) => (
                    <div 
                      key={skill}
                      className="text-center p-1 bg-gray-200/60 rounded hover:bg-blue-100/80 hover:scale-105 transition-all duration-300 shadow-sm"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-xs text-gray-700 hover:text-gray-900 transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimatedSection>            <ScrollAnimatedSection direction="left">
              <div className="bg-gray-100/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-gray-300/50 hover:border-blue-400/50 transition-all duration-300 shadow-lg">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 lg:mb-4">
                  Advanced Level (A/L) - Physical Science Stream
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 hover:text-gray-900 transition-colors duration-300 mb-2">
                  Am/Saddhathissa Maha Vidyalaya (National School) - Sri Lanka
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">
                  2020 - 2021 | Achieved ABC with Z-Score: 1.4567 | Strong foundation in Mathematics, Physics, and Chemistry
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-1">
                  {['Mathematics', 'Physics', 'Chemistry'].map((subject, index) => (
                    <div 
                      key={subject}
                      className="text-center p-1 bg-gray-200/60 rounded hover:bg-blue-100/80 hover:scale-105 transition-all duration-300 shadow-sm"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-xs text-gray-700 hover:text-gray-900 transition-colors duration-300">
                        {subject}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimatedSection>


            {/* Achievements Section */}
            <ScrollAnimatedSection direction="up">
              <div className="bg-gray-100/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-gray-300/50 hover:border-blue-400/50 transition-all duration-300 shadow-lg">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 lg:mb-4">
                  Academic Achievements
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3">
                  {["Coderush-2023(Rank43)","JapuraXtreme-2024(Participation)","Coderush-2025(Finalist)","MoraXteam 9.0(Participation)"].map((achievement, index) => (
                    <div 
                      key={achievement}
                      className="text-center p-2 lg:p-3 bg-gray-200/60 rounded-lg hover:bg-blue-100/80 hover:scale-105 transition-all duration-300 shadow-sm"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-xs sm:text-sm text-gray-700 hover:text-gray-900 transition-colors duration-300">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimatedSection>
                        <ScrollAnimatedSection direction="up" className="pt-4 lg:pt-6">
              <div className="text-center">
                <button 
                  onClick={() => onPageChange('about')}
                  className="group px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-blue-400 border-2 border-blue-400 hover:bg-blue-400 hover:text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ease-out"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-3 h-3 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to About
                  </span>
                </button>
              </div>
            </ScrollAnimatedSection>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;