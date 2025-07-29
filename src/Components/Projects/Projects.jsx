import React, { useState, useEffect, useRef } from "react";
import automeeticon from "../../assets/Automeet.png";

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
      <div className={`transition-all duration-300 ${showDetails ? 'py-8' : 'bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-gray-700/50 hover:border-blue-400/50 group'}`}>
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
              ) : (
                <span className="text-6xl">{project.image}</span>
              )}
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-4">
              {project.title}
            </h3>
            
            {/* GitHub Links */}
            <div className="flex justify-center gap-4">
              {project.title === "AutoMeet - Intelligent Meeting Scheduler" ? (
                <>
                  <a 
                    href="#projects" 
                    className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 border-0 outline-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Frontend
                  </a>
                  <a 
                    href="#projects" 
                    className="flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 border-0 outline-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Backend
                  </a>
                </>
              ) : (
                <a 
                  href="#projects" 
                  className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 border-0 outline-none"
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
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <div className="mb-4 flex justify-center">
                <span className="text-sm px-4 py-2 bg-green-600/20 text-green-300 rounded-full">
                  {project.status}
                </span>
              </div>
            </div>
                
            <p className="text-base text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
              {project.description}
            </p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-white mb-4">Key Features:</h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    {project.features.map((feature) => (
                      <span 
                        key={feature} 
                        className="px-3 py-2 bg-gray-600/30 text-gray-300 rounded-lg text-sm hover:bg-gray-600/50 transition-colors duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-white mb-4">Technologies Used:</h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-2 bg-blue-600/20 text-blue-300 rounded-lg text-sm hover:bg-blue-600/30 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* GitHub Links */}
                <div className="flex flex-wrap justify-center gap-4">
                  {project.title === "AutoMeet - Intelligent Meeting Scheduler" ? (
                    <>
                      <a 
                        href="#projects" 
                        className="flex items-center gap-2 px-3 py-1.5 bg-gray-600 hover:bg-gray-700 text-white rounded-md text-xs font-medium transition-all duration-300 hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub Frontend
                      </a>
                      <a 
                        href="#projects" 
                        className="flex items-center gap-2 px-3 py-1.5 bg-black hover:bg-gray-800 text-white rounded-md text-xs font-medium transition-all duration-300 hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub Backend
                      </a>
                    </>
                  ) : (
                    <a 
                      href="#projects" 
                      className="flex items-center gap-2 px-3 py-1.5 bg-gray-600 hover:bg-gray-700 text-white rounded-md text-xs font-medium transition-all duration-300 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
      technologies: ["Next.js", "Ballerina", "MongoDB"],
      category: "software",
      status: "Completed",
      image: "automeet",
      githubUrl: true,
      features: ["Automated Scheduling", "AI Report Generation", "Meeting Notifications", "Conflict Detection and Resolution", "Note-Taking", "Real-Time Chat", "Browser Extension", "Calendar Integration"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my skills, projects, and experience. Built with React and Tailwind CSS, featuring smooth animations, responsive design, dark theme, and interactive elements. Includes sections for about, skills, projects, and contact information.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "CSS3", "HTML5"],
      category: "software",
      status: "Completed",
      image: "💼",
      githubUrl: true,
      features: ["Responsive Design", "Smooth Animations", "Dark Theme", "Contact Form", "SEO Optimized"]
    },
    {
      id: 3,
      title: "IoT Smart Home System",
      description: "An Internet of Things project for home automation using Arduino and sensors. The system controls lighting, temperature, and security features remotely through a mobile app. Includes real-time monitoring and automated responses based on environmental conditions.",
      technologies: ["Arduino", "C++", "Sensors", "WiFi Module", "Mobile App"],
      category: "hardware",
      status: "Completed",
      image: "🏠",
      githubUrl: true,
      features: ["Remote Control", "Sensor Monitoring", "Automated Responses", "Mobile Integration", "Real-time Data"]
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="text-white bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 min-h-screen">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="min-h-screen py-4 lg:py-6">
          
          {/* Header Section */}
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight tracking-tight mb-4">
              <TypewriterProjects />
            </h1>
            <div className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto transition-all duration-1000 delay-1000 ${
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
                      : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white'
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