import React, { useState, useEffect, useRef } from "react";

// Typewriter effect for Skills heading
const TypewriterSkills = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Skills";
  
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

// Skill Progress Bar
const SkillProgress = ({ skill, percentage, delay = 0 }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [percentage, delay]);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs sm:text-sm text-white font-medium">{skill}</span>
        <span className="text-xs text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = ({ onPageChange }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = {
    programming: {
      title: "Programming Languages",
      icon: "💻",
      color: "blue",
      skills: [
        { name: "JavaScript", level: 90, image: "/src/assets/javascript.png" },
        { name: "Python", level: 80, image: "/src/assets/python.png" },
        { name: "Java", level: 75, image: "/src/assets/java.png" },
        { name: "PHP", level: 70, image: "/src/assets/php.png" },
        { name: "C++", level: 75, image: "/src/assets/c++.png" },
        { name: "C", level: 70, image: "/src/assets/c.jpg" }
      ]
    },
    frontend: {
      title: "Frontend Development",
      icon: "🎨",
      color: "green",
      skills: [
        { name: "React", level: 90, image: "/src/assets/react.png" },
        { name: "Next.js", level: 85, image: "/src/assets/nextjs.png" },
        { name: "HTML5", level: 95, image: "/src/assets/html.png" },
        { name: "CSS3", level: 90, image: "/src/assets/css.png" },
        { name: "Tailwind CSS", level: 90, image: "/src/assets/talwindcss.png" },
        { name: "Bootstrap", level: 85, image: "/src/assets/bootstrap.png" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: "⚙️",
      color: "purple",
      skills: [
        { name: "Node.js", level: 85, image: "/src/assets/nodejs.png" },
        { name: "Ballerina", level: 70, image: "/src/assets/ballerina.jpeg" }
      ]
    },
    database: {
      title: "Database Management",
      icon: "🗄️",
      color: "yellow",
      skills: [
        { name: "MySQL", level: 85, image: "/src/assets/mysql.png" },
        { name: "MongoDB", level: 80, image: "/src/assets/mongodb.png" }
      ]
    }
  };

  const handleCategoryClick = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null); // Hide if already active
    } else {
      setActiveCategory(category); // Show selected category
    }
  };

  const getButtonColor = (category) => {
    return activeCategory === category 
      ? 'bg-blue-600 text-white' 
      : 'bg-blue-100 text-blue-800 hover:bg-blue-200';
  };

  return (
    <div className="text-black bg-gradient-to-r from-white to-blue-200 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="min-h-screen py-6 sm:py-8 lg:py-12">
          
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight tracking-tight mb-4 sm:mb-6">
              <TypewriterSkills />
            </h1>
            <div className={`w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto transition-all duration-1000 delay-1000 ${
              isLoaded ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}></div>
          </div>
          
          {/* Category Buttons */}
          <ScrollAnimatedSection direction="up" className="mb-8 lg:mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto px-4">
              {Object.entries(skillCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => handleCategoryClick(key)}
                  className={`p-3 sm:p-4 lg:p-6 rounded-xl transition-all duration-300 hover:scale-105 border-2 ${
                    activeCategory === key 
                      ? 'border-blue-600' 
                      : 'border-blue-300 hover:border-blue-500'
                  } ${getButtonColor(key)} w-full`}
                >
                  <div className="text-center">
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold leading-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
                      {category.skills.length} Skills
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </ScrollAnimatedSection>
          
          {/* Skills Details Section */}
          <div className="max-w-7xl mx-auto px-4">
            {activeCategory && (
              <ScrollAnimatedSection direction="up" key={activeCategory}>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border border-blue-300 hover:border-blue-500 transition-all duration-300 shadow-lg">
                  <h3 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 sm:mb-6 lg:mb-8">
                    {skillCategories[activeCategory].title}
                  </h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
                    {skillCategories[activeCategory].skills.map((skill, index) => (
                      <div 
                        key={skill.name} 
                        className="text-center p-3 sm:p-4 lg:p-6 bg-blue-50 rounded-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300 shadow-sm"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <img 
                          src={skill.image} 
                          alt={skill.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 mx-auto mb-2 sm:mb-3 object-contain"
                        />
                        <span className="text-xs sm:text-sm md:text-base text-blue-600 hover:text-blue-800 transition-colors duration-300 block font-medium">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimatedSection>
            )}
          </div>

          {/* Soft Skills */}
          <ScrollAnimatedSection direction="up" className="mt-8 lg:mt-12">
            <div className="max-w-7xl mx-auto px-4">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300">
                <h3 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4 sm:mb-6 lg:mb-8">
                  Soft Skills
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
                  {[
                    { name: "Leadership", image: "/src/assets/leadership.jpeg" },
                    { name: "Communication", image: "/src/assets/communication.jpeg" },
                    { name: "Team Work", image: "/src/assets/teamwork.jpeg" },
                    { name: "Time Management", image: "/src/assets/timemanagement.jpeg" },
                  ].map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="text-center p-3 sm:p-4 lg:p-6 bg-gray-700/30 rounded-lg hover:bg-blue-600/20 hover:scale-105 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <img 
                        src={skill.image} 
                        alt={skill.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 mx-auto mb-2 sm:mb-3 object-contain rounded-lg"
                        onError={(e) => {
                          // Fallback to emoji if image doesn't load
                          e.target.style.display = 'none';
                          const fallbacks = {
                            "Leadership": "👑",
                            "Communication": "💬", 
                            "Team Work": "🤝",
                            "Time Management": "⏰"
                          };
                          const fallbackDiv = document.createElement('div');
                          fallbackDiv.className = "w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 mx-auto mb-2 sm:mb-3 flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl";
                          fallbackDiv.textContent = fallbacks[skill.name];
                          e.target.parentNode.insertBefore(fallbackDiv, e.target);
                        }}
                      />
                      <span className="text-xs sm:text-sm md:text-base text-gray-300 hover:text-white transition-colors duration-300 block font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimatedSection>

        </div>
      </div>
    </div>
  );
};

export default Skills;