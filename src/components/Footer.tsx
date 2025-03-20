
import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  const handleContact = () => {
    window.location.href = "mailto:contact@freorva.io";
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-freorva-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-medium mb-6 text-freorva-900">Ready to connect?</h3>
          
          <button 
            onClick={handleContact}
            className="inline-flex items-center gap-2 px-6 py-3 mb-12 bg-freorva-900 text-white rounded-full hover:bg-freorva-800 transition-all duration-300 shadow-sm"
          >
            <Mail size={18} />
            <span>contact@freorva.io</span>
          </button>
          
          <div className="pt-8 border-t border-freorva-200">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-freorva-700">
              <p>© {currentYear} Freorva. All rights reserved.</p>
              <div className="mt-4 md:mt-0">
                <p>Crafted with precision and care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent opacity-30"></div>
    </footer>
  );
};

export default Footer;
