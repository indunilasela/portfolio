import React, { useState, useEffect } from "react";
import profile from "../../assets/profile.jpg"; // Adjust the path as necessary

// Note: Import your profile image like this in your actual component:
// import avatarImg from "../../assets/profile.jpg";
const avatarImg = profile; // Placeholder for demo

// Add custom CSS animations
const customStyles = `
  @keyframes bounce-in {
    0% {
      opacity: 0;
      transform: translateY(20px) scale(0.8);
    }
    50% {
      transform: translateY(-5px) scale(1.05);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-3px);
    }
  }
  
  @keyframes glow-pulse {
    0%, 100% {
      box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
    }
    50% {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.4);
    }
  }
  
  .animate-bounce-in {
    animation: bounce-in 0.6s ease-out;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-glow-pulse {
    animation: glow-pulse 2s ease-in-out infinite;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = customStyles;
  document.head.appendChild(styleSheet);
}

// Typewriter effect for name with 1.5 second wait
const TypewriterName = () => {
  const [displayText, setDisplayText] = useState("");
  const fullName = "Indunil Asela";
  
  useEffect(() => {
    let timeoutId;
    
    const cycle = () => {
      // Reset text
      setDisplayText("");
      
      // Start typing name immediately (Hi is always shown)
      setTimeout(() => {
        typeText();
      }, 200);
    };
    
    const typeText = () => {
      let currentIndex = 0;
      
      const typeNextChar = () => {
        if (currentIndex < fullName.length) {
          setDisplayText(fullName.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(typeNextChar, 100); // 100ms per character
        } else {
          // Wait 1.5 seconds then restart cycle
          timeoutId = setTimeout(cycle, 1500);
        }
      };
      
      typeNextChar();
    };
    
    // Start the first cycle
    cycle();
    
    return () => clearTimeout(timeoutId);
  }, []);
  
  return (
    <span className="text-black">
      Hi, I'm {displayText}
      <span className="animate-pulse text-gray-600">|</span>
    </span>
  );
};

// Simple rectangular frame component without animations
const RectangularFrame = ({ children }) => {
  return (
    <div className="relative w-full h-full">
      {/* Profile Image with rectangular border frame */}
      <div className="relative z-10 w-full h-full p-1 rounded-lg bg-gradient-to-br from-blue-400 via-purple-400 to-pink-500 shadow-2xl">
        <div className="w-full h-full rounded-lg overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

// Social Media Icons
const GitHubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const Home = ({ onPageChange }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCenter, setShowCenter] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    // Animation sequence
    const timer1 = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const timer2 = setTimeout(() => {
      setShowCenter(true);
    }, 1200);

    const timer3 = setTimeout(() => {
      setShowFinal(true);
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      icon: <GitHubIcon />,
      url: "https://github.com/indunilasela",
      hoverColor: "hover:text-gray-300",
      bgHover: "hover:bg-gray-700/60"
    },
    {
      name: "LinkedIn", 
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/indunil-asela/",
      hoverColor: "hover:text-blue-400",
      bgHover: "hover:bg-blue-500/20"
    },
    {
      name: "Facebook",
      icon: <FacebookIcon />,
      url: "https://www.facebook.com/share/1JuBSaEihv/", 
      hoverColor: "hover:text-blue-500",
      bgHover: "hover:bg-blue-600/20"
    },
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      url: "https://instagram.com/indunil__asela",
      hoverColor: "hover:text-pink-400",
      bgHover: "hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-purple-500/20"
    }
  ];

  return (
    <div className="text-gray-800 bg-gradient-to-r from-white to-blue-400 min-h-screen">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 md:pl-16 lg:pl-20 xl:pl-24 2xl:pl-32 md:pr-12 lg:pr-16 xl:pr-20 2xl:pr-28">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-40 lg:py-6 gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left Content Section - Complex animation sequence */}
          <div className={`flex-1 text-center lg:text-left space-y-4 lg:space-y-6 order-2 lg:order-1 transition-all duration-1000 ease-out ${
            !isLoaded ? '-translate-x-full opacity-0' : 
            !showCenter ? 'translate-x-0 opacity-100' :
            !showFinal ? 'lg:translate-x-32 translate-x-0 opacity-100' :
            'translate-x-0 opacity-100'
          }`}>
            {/* Main Heading */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight tracking-tight min-h-[1.2em]">
              <TypewriterName />
            </h1>
            
            {/* Description */}
            <div className="space-y-2 lg:space-y-3">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
                Undergraduate at the{" "}
                <span className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                  University of Moratuwa
                </span>
              </p>
              <p className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-gray-600 hover:text-gray-800 transition-colors duration-300">
                Faculty of Information Technology
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-900 font-medium hover:text-blue-700 transition-colors duration-300">
                Full-Stack Web Developer
              </p>
            </div>
            
            {/* Buttons with popup animation */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 lg:pt-4 justify-center lg:justify-start transition-all duration-1000 ${
              !showFinal ? 'scale-75 opacity-0' : 'scale-100 opacity-100'
            }`}>
              <button 
                onClick={() => window.open('https://drive.google.com/drive/folders/133Uf1qtOslmKnWt0ZWkmUcnfFFjjkRiD?usp=sharing', '_blank')}
                className="px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm lg:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ease-out"
              >
                Download CV
              </button>
              <button 
                onClick={() => onPageChange && onPageChange('contact')}
                className="px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm lg:text-base font-semibold text-blue-400 border-2 border-blue-400 hover:bg-blue-400 hover:text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ease-out"
              >
                Hire Me
              </button>
            </div>
            
            {/* Stats Section - Slides in from left */}
            <div className={`flex flex-wrap justify-center lg:justify-start gap-4 pt-4 lg:pt-6 text-xs text-gray-600 transition-all duration-1000 ${
              !showFinal ? 'translate-x-0 opacity-0' : 'translate-x-0 opacity-100'
            }`}>
              <div className="text-center hover:scale-110 hover:text-blue-700 transition-all duration-300 cursor-pointer">
                <div className="text-lg sm:text-xl font-bold text-gray-900">3+</div>
                <div className="text-xs">Projects</div>
              </div>
              {/* <div className="text-center hover:scale-110 hover:text-blue-700 transition-all duration-300 cursor-pointer">
                <div className="text-lg sm:text-xl font-bold text-gray-900">3+</div>
                <div className="text-xs">Years Experience</div>
              </div> */}
              <div className="text-center hover:scale-110 hover:text-blue-700 transition-all duration-300 cursor-pointer">
                <div className="text-lg sm:text-xl font-bold text-gray-900">13+</div>
                <div className="text-xs">Technologies</div>
              </div>
            </div>

            {/* Social Media Icons - Enhanced with better responsive design and animations */}
            <div className={`transition-all duration-1000 delay-500 ${
              !showFinal ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'
            }`}>
              {/* Social Icons Container */}
              <div className="flex justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 pt-4 lg:pt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-2 sm:p-2.5 md:p-3 bg-gray-800/30 backdrop-blur-sm rounded-full text-black ${social.hoverColor} ${social.bgHover} transform transition-all duration-500 shadow-md hover:shadow-2xl border border-gray-700/50 hover:border-gray-600/50 animate-bounce-in animate-float hover:animate-glow-pulse`}
                    style={{ 
                      animationDelay: `${(index * 150) + 500}ms`,
                      animationFillMode: 'both'
                    }}
                    aria-label={social.name}
                  >
                    {/* Icon with responsive sizing and rotation effect */}
                    <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {social.icon}
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
                      {social.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                    </div>
                    
                    {/* Ripple effect on hover */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
                  </a>
                ))}
              </div>
              
              {/* Connecting line decoration */}
              <div className={`mt-3 lg:mt-4 flex justify-center lg:justify-start transition-all duration-1000 delay-1000 ${
                !showFinal ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'
              }`}>
                <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className={`flex-shrink-0 order-1 lg:order-2 transition-all duration-1000 ease-out ${
            !isLoaded ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
          }`}>
            <div className="w-56 h-64 sm:w-64 sm:h-72 md:w-72 md:h-80 lg:w-80 lg:h-96 xl:w-96 xl:h-[420px] 2xl:w-[420px] 2xl:h-[460px] mx-auto lg:mx-0">
              <RectangularFrame>
                <img 
                  className="w-full h-full object-cover object-center" 
                  src={avatarImg} 
                  alt="Indunil Asela - Full Stack Developer" 
                />
              </RectangularFrame>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;