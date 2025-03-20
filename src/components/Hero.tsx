
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Sparkles, ArrowUpRight } from 'lucide-react';

const Hero = () => {
  const handleContact = () => {
    window.location.href = "mailto:contact@freorva.io";
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-freorva-50 to-transparent"></div>
      <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-purple-100 to-freorva-100 blur-3xl opacity-60 animate-float"></div>
      <div className="absolute -bottom-[10%] -left-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-tr from-blue-50 to-freorva-50 blur-3xl opacity-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-[15%] w-8 h-8 rounded-full bg-gradient-to-r from-purple-300 to-pink-200 blur-sm animate-pulse"></div>
      <div className="absolute bottom-1/3 left-[10%] w-4 h-4 rounded-full bg-gradient-to-r from-blue-300 to-cyan-200 blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-xs font-medium text-freorva-800 bg-freorva-100 rounded-full animate-fade-down">
            <Sparkles size={14} className="mr-1.5" />
            Coming Soon
          </div>
          
          <h1 className="heading-xl mb-6 text-freorva-900 animate-fade-up" style={{ animationDelay: '150ms' }}>
            Transforming the way you
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent"> experience technology</span>
          </h1>
          
          <p className="text-xl mb-8 text-freorva-700 animate-fade-up max-w-2xl mx-auto" style={{ animationDelay: '300ms' }}>
            We're building something special. Join us on our journey to redefine what's possible with thoughtful design and innovative technology.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '450ms' }}>
            <button 
              onClick={handleContact}
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Get in Touch
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            
            <a 
              href="#features"
              className="inline-flex items-center gap-1.5 text-freorva-700 hover:text-freorva-900 transition-colors px-4 py-2"
            >
              Learn more
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
