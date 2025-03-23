
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Mail } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleContact = () => {
    window.location.href = "mailto:contact@freorva.io";
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold tracking-tight text-freorva-900 transition-colors duration-200">
            Freorva
          </a>
        </div>
        
        <button 
          onClick={handleContact}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out",
            scrolled 
              ? "bg-freorva-800 text-white hover:bg-freorva-900" 
              : "bg-white/80 backdrop-blur-md text-freorva-800 hover:bg-white shadow-sm"
          )}
        >
          <Mail size={16} />
          <span>Contact Us</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
