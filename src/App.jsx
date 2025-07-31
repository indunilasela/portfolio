import React, { useState, useEffect, useRef } from 'react';

// Import your page components (these would be your actual imports)
import Home from './Components/Home/Home';
 import About from './Components/About/About';
import Education from './Components/Education/Education';
 import Skills from './Components/skils/skils';
 import Projects from './Components/projects/projects';
import Contact from './Components/Footer/contact';

// Mock components for demonstration (replace with your actual components)

// Navigation icons
const HomeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const AboutIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const EducationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const SkillsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const ProjectsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const ContactIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// Vertical Navbar Component
const VerticalNavbar = ({ currentPage, onPageChange }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const navigateToPage = (pageId) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { id: 'home', label: 'Home', icon: <HomeIcon /> },
    { id: 'about', label: 'About', icon: <AboutIcon /> },
    { id: 'education', label: 'Education', icon: <EducationIcon /> },
    { id: 'skills', label: 'Skills', icon: <SkillsIcon /> },
    { id: 'projects', label: 'Projects', icon: <ProjectsIcon /> },
    { id: 'contact', label: 'Contact', icon: <ContactIcon /> }
  ];

  return (
    <>
      {/* Desktop Sidebar Navigation - Hidden on mobile */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-16 lg:w-20 xl:w-24 bg-gray-900/95 backdrop-blur-sm shadow-2xl z-50 flex-col items-center py-6 lg:py-8 border-r border-gray-700/50">
        <div className={`mb-8 lg:mb-12 transition-all duration-1500 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-10 opacity-0 scale-50'
        }`}>
          <button 
            onClick={() => navigateToPage('home')}
            className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg lg:rounded-xl flex items-center justify-center text-white font-bold text-base lg:text-lg xl:text-xl hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            IA
          </button>
        </div>

        <div className="flex flex-col space-y-2 lg:space-y-3 xl:space-y-4 flex-1">
          {navigationItems.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-1500 ease-out ${
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <button
                onClick={() => navigateToPage(item.id)}
                className={`group relative w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-lg lg:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  currentPage === item.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
                aria-label={item.label}
              >
                <div className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6">
                  {item.icon}
                </div>
                
                <div className="hidden xl:block absolute left-full ml-3 lg:ml-4 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10 shadow-xl">
                  {item.label}
                  <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
                </div>

                {currentPage === item.id && (
                  <div className="absolute -right-px top-1/2 transform -translate-y-1/2 w-1 h-6 lg:h-8 bg-blue-500 rounded-l-full"></div>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className={`mt-6 lg:mt-8 transition-all duration-1500 ease-out delay-1500 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="w-6 md:w-8 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm shadow-2xl z-50 border-t border-gray-700/50">
        <div className="flex justify-around items-center py-2 px-4">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigateToPage(item.id)}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300 min-w-0 flex-1 ${
                currentPage === item.id
                  ? 'text-blue-400 bg-blue-600/20'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
              aria-label={item.label}
            >
              <div className={`w-5 h-5 mb-1 transition-all duration-300 ${
                currentPage === item.id ? 'scale-110' : ''
              }`}>
                {item.icon}
              </div>
              <span className={`text-xs font-medium transition-all duration-300 ${
                currentPage === item.id ? 'text-blue-400' : 'text-gray-500'
              }`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const swipeContainerRef = useRef(null);

  // Define the page order for swipe navigation
  const pageOrder = ['home', 'about', 'education', 'skills', 'projects', 'contact'];

  // Hide swipe hint after first interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSwipeHint(false);
    }, 5000); // Hide after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  // Swipe navigation functions
  const goToNextPage = () => {
    const currentIndex = pageOrder.indexOf(currentPage);
    if (currentIndex < pageOrder.length - 1) {
      setCurrentPage(pageOrder[currentIndex + 1]);
      setShowSwipeHint(false); // Hide hint after first swipe
    }
  };

  const goToPreviousPage = () => {
    const currentIndex = pageOrder.indexOf(currentPage);
    if (currentIndex > 0) {
      setCurrentPage(pageOrder[currentIndex - 1]);
      setShowSwipeHint(false); // Hide hint after first swipe
    }
  };

  // Touch event handlers for swipe detection
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    // Prevent default scrolling behavior during horizontal swipes
    if (!touchStartX.current || !touchStartY.current) return;

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    
    const diffX = touchStartX.current - currentX;
    const diffY = touchStartY.current - currentY;

    // If horizontal swipe is more significant than vertical, prevent default
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current || !touchStartY.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    // Minimum swipe distance
    const minSwipeDistance = 50;
    
    // Check if horizontal swipe is more significant than vertical
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > minSwipeDistance) {
      if (diffX > 0) {
        // Swiped left - go to next page
        goToNextPage();
      } else {
        // Swiped right - go to previous page
        goToPreviousPage();
      }
    }

    // Reset touch coordinates
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Add touch event listeners
  useEffect(() => {
    const container = swipeContainerRef.current;
    if (!container) return;

    // Add passive: false to allow preventDefault
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentPage]); // Re-add listeners when page changes

  // Function to render the current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      {/* Vertical Navbar - Always Visible */}
      <VerticalNavbar 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      />
      
      {/* Main Content Area with Swipe Detection */}
      <div 
        ref={swipeContainerRef}
        className="md:ml-16 lg:ml-20 xl:ml-24 pb-20 md:pb-0 relative swipe-container"
        style={{ touchAction: 'pan-y' }} // Allow vertical scrolling but enable horizontal swipe detection
      >
        {renderCurrentPage()}
        
        {/* Swipe Indicators for Mobile */}
        <div className="md:hidden fixed bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {pageOrder.map((page, index) => (
            <div
              key={page}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentPage === page 
                  ? 'bg-blue-400 scale-125' 
                  : 'bg-gray-500/50'
              }`}
            />
          ))}
        </div>

        {/* Swipe Hint for Mobile - Only show initially
        {showSwipeHint && (
          <div className="md:hidden fixed top-1/2 left-4 transform -translate-y-1/2 z-30 animate-pulse">
            <div className="bg-black/70 text-white px-3 py-2 rounded-lg text-sm flex items-center space-x-2">
              <span>Swipe to navigate</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white rounded-full swipe-hint"></div>
                <div className="w-2 h-2 bg-white rounded-full swipe-hint" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-white rounded-full swipe-hint" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )} */}

        {/* Page Navigation Edges for Visual Feedback */}
        <div className="md:hidden fixed top-0 left-0 w-4 h-full z-20 bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none opacity-0 transition-opacity duration-300" id="left-edge"></div>
        <div className="md:hidden fixed top-0 right-0 w-4 h-full z-20 bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none opacity-0 transition-opacity duration-300" id="right-edge"></div>
      </div>
    </div>
  );
};

export default App;