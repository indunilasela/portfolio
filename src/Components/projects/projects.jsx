import React, { useState, useEffect, useRef } from "react";
import automeeticon from "../../assets/Automeet.png";
import iotimage from "../../assets/iot.jpg";
import lakpuraimage from "../../assets/lakpura.jpg";
import portfolioimage from "../../assets/portfolio.jpg";

// Typewriter effect for Projects heading
const TypewriterProjects = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Projects";
  
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

// Project Card Component
const ProjectCard = ({ project, index, openProjectId, setOpenProjectId }) => {
  const showDetails = openProjectId === project.id;

  const toggleDetails = () => {
    if (showDetails) {
      setOpenProjectId(null); // Close if already open
    } else {
      setOpenProjectId(project.id); // Open this project and close others
    }
  };

  return (
    <ScrollAnimatedSection direction={index % 2 === 0 ? "left" : "right"}>
      <div className={`transition-all duration-300 ${showDetails ? 'py-8' : 'bg-gray-100/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-gray-300/50 hover:border-blue-400/50 group shadow-lg'}`}>
        {!showDetails ? (
          // Project Image View
          <div className="text-center">
            <div 
              className="w-60 h-48 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden cursor-pointer"
              onClick={toggleDetails}
            >
              {project.image === "automeet" ? (
                <img 
                  src={automeeticon}
                  alt="AutoMeet Project" 
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : project.image === "iot" ? (
                <img 
                  src={iotimage}
                  alt="Auto-Off Ironboard IoT Project" 
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : project.image === "lakpura" ? (
                <img 
                  src={lakpuraimage}
                  alt="Lakpura E-commerce Project" 
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : project.image === "portfolio" ? (
                <img 
                  src={portfolioimage}
                  alt="Portfolio Website Project" 
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <span className="text-6xl">{project.image}</span>
              )}
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {project.title}
            </h3>
            
            {/* GitHub Links */}
            <div className="flex justify-center gap-4">
              {project.title === "AutoMeet - Intelligent Meeting Scheduler" ? (
                <>
                  <a 
                    href="https://github.com/Serryudy/AutomeetFE" 
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 border-0 outline-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Frontend
                  </a>
                  <a 
                    href="https://github.com/Serryudy/AutomeetBE" 
                    className="flex items-center gap-2 px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 border-0 outline-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Backend
                  </a>
                </>
              ) : project.title === "Lakpura" ? (
                <a 
                  href="https://github.com/indunilasela/Lakpura-E-Commerce" 
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 border-0 outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.30.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              ) : project.title === "Portfolio" ? (
                <a 
                  href="https://github.com/indunilasela/portfolio" 
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 border-0 outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.30.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              ) : (
                <a 
                  href="https://github.com/indunilasela/Harware-project-code" 
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 border-0 outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </div>
        ) : (
          // Project Details View (Centered, No Box)
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {project.title}
              </h3>
              <div className="mb-4 flex justify-center">
                <span className="text-sm px-4 py-2 bg-green-100 text-green-800 rounded-full">
                  {project.status}
                </span>
              </div>
            </div>
                
            <p className="text-base text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
              {project.description}
            </p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Key Features:</h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    {project.features.map((feature) => (
                      <span 
                        key={feature} 
                        className="px-3 py-2 bg-blue-50 text-blue-800 rounded-lg text-sm hover:bg-blue-100 transition-colors duration-300 border border-blue-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Technologies Used:</h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm hover:bg-blue-200 transition-colors duration-300 border border-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* GitHub Links */}
                <div className="flex flex-wrap justify-center gap-2">
                  {project.title === "AutoMeet - Intelligent Meeting Scheduler" ? (
                    <>
                      <a 
                        href="https://github.com/Serryudy/AutomeetFE" 
                        className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs font-medium transition-all duration-300 hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Frontend
                      </a>
                      <a 
                        href="#projects" 
                        className="flex items-center gap-1 px-3 py-1.5 bg-blue-800 hover:bg-blue-900 text-white rounded-md text-xs font-medium transition-all duration-300 hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Backend
                      </a>
                    </>
                  ) : project.title === "Lakpura" ? (
                    <a 
                      href="https://github.com/indunilasela/Lakpura-E-Commerce" 
                      className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs font-medium transition-all duration-300 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  ) : project.title === "Portfolio" ? (
                    <a 
                      href="https://github.com/indunilasela/portfolio" 
                      className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs font-medium transition-all duration-300 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.30.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  ) : (
                    <a 
                      href="https://github.com/indunilasela/Harware-project-code" 
                      className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs font-medium transition-all duration-300 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.30.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
          </div>
        )}
      </div>
    </ScrollAnimatedSection>
  );
};

const Projects = ({ onPageChange }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [openProjectId, setOpenProjectId] = useState(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "AutoMeet - Intelligent Meeting Scheduler",
      description: "AutoMeet is an intelligent meeting scheduling platform that automates the complex process of finding optimal meeting times for groups. Built with Ballerina backend and modern web technologies, it eliminates the back-and-forth emails typically required for scheduling meetings.",
      technologies: ["Next.js","Bootstrap", "Ballerina", "MongoDB"],
      category: "software",
      status: "Completed",
      image: "automeet",
      githubUrl: true,
      features: ["Automated Scheduling", "AI Report Generation", "Meeting Notifications", "Conflict Detection and Resolution", "Note-Taking", "Real-Time Chat", "Browser Extension", "Calendar Integration"]
    },
    {
      id: 2,
      title: "Portfolio",
      description: "A modern, responsive personal portfolio website built with React and Vite. Features a clean design with smooth animations, interactive components, and a professional layout showcasing skills, projects, and contact information. The portfolio includes a contact form with EmailJS integration and social media links.",
      technologies: ["React", "Vite", "Tailwind CSS", "EmailJS"],
      category: "software",
      status: "Completed",
      image: "portfolio",
      githubUrl: true,
      features: ["Responsive Design", "Smooth Animations", "Contact Form", "Social Media Integration", "Project Showcase", "Skills Display", "Modern UI/UX", "Fast Performance"]
    },
    {
      id: 3,
      title: "Lakpura",
      description: "Developed a fully responsive e-commerce platform aimed at promoting and selling traditional Sri Lankan handicraft masks. The application features a smooth and secure shopping experience with functionalities including user authentication, dynamic product listing, shopping cart management, and real-time order tracking.",
      technologies: ["HTML", "CSS","Bootstrap", "JavaScript","Firebase"],
      category: "software",
      status: "Completed",
      image: "lakpura",
      githubUrl: true,
      features: ["User Authentication", "Product Listing", "Cart Management", "Responsive Design"]
    },
    {
      id: 4,
      title: "Auto-Off Ironboard",
      description: "We proudly present our freshman hardware project the Auto-Off Ironboard a smart solution to a common household issue: forgetting to turn off the iron. Designed for both safety and energy efficiency, this system automatically powers off the iron when it's left unattended, preventing accidents and saving electricity.",
      technologies: ["Arduino Mega", "C++"],
      category: "hardware",
      status: "Completed",
      image: "iot",
      githubUrl: true,
      features: ["Arduino Microcontroller", "Ultrasonic Sensor", "PIR Motion Sensor", "MAX6675 Thermocouple", "Relay Control System", "PZEM004 Power Monitor", "Real-Time Clock (RTC) Module", "Display Module", "Micro SD Card Storage"]
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="text-gray-800 bg-gradient-to-r from-white to-blue-200 min-h-screen">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="min-h-screen py-4 lg:py-6">
          
          {/* Header Section */}
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight tracking-tight mb-4">
              <TypewriterProjects />
            </h1>
            <div className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto transition-all duration-1000 delay-1000 ${
              isLoaded ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}></div>
          </div>
          
          {/* Filter Buttons */}
          <ScrollAnimatedSection direction="up" className="mb-8 lg:mb-12">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                { key: "all", label: "All Projects" },
                { key: "software", label: "Software" },
                { key: "hardware", label: "Hardware" }
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm lg:text-base font-medium rounded-full transition-all duration-300 hover:scale-105 ${
                    activeFilter === filter.key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-blue-100 text-blue-800 hover:bg-blue-200 hover:text-blue-900'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </ScrollAnimatedSection>
          
          {/* Projects Grid */}
          <div className="max-w-6xl mx-auto space-y-6 lg:space-y-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                openProjectId={openProjectId}
                setOpenProjectId={setOpenProjectId}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;