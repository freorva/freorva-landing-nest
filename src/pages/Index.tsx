
import React from 'react';
import { Mail } from 'lucide-react';

const Index = () => {
  const handleContact = () => {
    window.location.href = "mailto:contact@freorva.io";
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50 flex flex-col justify-center items-center p-4">
      {/* Background elements */}
      <div className="fixed inset-0 bg-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-purple-100 to-blue-100 blur-3xl opacity-40"></div>
      <div className="absolute bottom-[20%] left-[20%] w-[25%] h-[25%] rounded-full bg-gradient-to-tr from-blue-50 to-purple-50 blur-3xl opacity-30"></div>
      
      <div className="text-center z-10 mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-freorva-900 mb-2">
          Freorva <span className="text-4xl md:text-6xl font-normal text-freorva-700">LLC</span>
        </h1>
        <p className="text-xl text-freorva-600 mt-4 max-w-md mx-auto">
          Building something special.
        </p>
      </div>
      
      <button 
        onClick={handleContact}
        className="z-10 px-8 py-4 text-xl font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-3"
      >
        <Mail size={24} />
        <span>Contact Us</span>
      </button>
      
      <footer className="fixed bottom-6 text-sm text-freorva-600 z-10">
        © {new Date().getFullYear()} Freorva LLC. All rights reserved.
      </footer>
    </main>
  );
};

export default Index;
