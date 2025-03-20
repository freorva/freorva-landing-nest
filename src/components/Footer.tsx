
import React from 'react';
import { Mail, GitHub, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const handleContact = () => {
    window.location.href = "mailto:contact@freorva.io";
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gradient-to-b from-freorva-50 to-freorva-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-medium mb-6 text-freorva-900">Ready to connect?</h3>
          
          <button 
            onClick={handleContact}
            className="inline-flex items-center gap-2 px-6 py-3 mb-12 bg-gradient-to-r from-freorva-700 to-freorva-800 text-white rounded-full hover:shadow-lg transition-all duration-300"
          >
            <Mail size={18} />
            <span>contact@freorva.io</span>
          </button>
          
          <div className="flex justify-center gap-6 mb-8">
            {[GitHub, Twitter, Linkedin].map((Icon, index) => (
              <div 
                key={index} 
                className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-freorva-700 hover:text-freorva-900 hover:bg-white transition-all cursor-pointer shadow-sm"
              >
                <Icon size={20} />
              </div>
            ))}
          </div>
          
          <div className="pt-8 border-t border-freorva-200">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-freorva-700">
              <p>© {currentYear} Freorva. All rights reserved.</p>
              <div className="mt-4 md:mt-0 flex gap-6">
                <p>Terms</p>
                <p>Privacy</p>
                <p>Crafted with precision and care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
