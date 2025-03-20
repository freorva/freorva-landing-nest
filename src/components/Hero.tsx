
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleContact = () => {
    window.location.href = "mailto:contact@freorva.io";
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-freorva-50 to-transparent"></div>
      <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-freorva-100 blur-3xl opacity-60 animate-float"></div>
      <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-freorva-50 blur-3xl opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-xs font-medium text-freorva-800 bg-freorva-100 rounded-full animate-fade-down">
            Coming Soon
          </div>
          
          <h1 className="heading-xl mb-6 text-freorva-900 animate-fade-up" style={{ animationDelay: '150ms' }}>
            Transforming the way you experience technology
          </h1>
          
          <p className="text-xl mb-8 text-freorva-700 animate-fade-up max-w-2xl mx-auto" style={{ animationDelay: '300ms' }}>
            We're building something special. Join us on our journey to redefine what's possible with thoughtful design and innovative technology.
          </p>
          
          <div className="animate-fade-up" style={{ animationDelay: '450ms' }}>
            <button 
              onClick={handleContact}
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Get in Touch
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
