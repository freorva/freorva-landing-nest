
import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const handleContact = () => {
    window.location.href = "mailto:contact@freorva.io";
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50 flex flex-col justify-center items-center p-4">
      {/* Background pattern */}
      <div className="fixed inset-0 bg-pattern opacity-5 pointer-events-none"></div>
      
      {/* Gradient blobs */}
      <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-purple-100 to-blue-100 blur-3xl opacity-40"></div>
      <div className="absolute bottom-[20%] left-[20%] w-[25%] h-[25%] rounded-full bg-gradient-to-tr from-blue-50 to-purple-50 blur-3xl opacity-30"></div>
      
      <div className="content text-center z-10 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#434756] mb-2">
          Freorva <span className="font-normal text-3xl text-[#5a6379]">LLC</span>
        </h1>
        <p className="text-xl text-[#5a6379] mt-4 max-w-md mx-auto">
          Building something special.
        </p>
      </div>
      
      <button 
        className="flex items-center gap-3 px-8 py-4 text-xl font-medium text-white bg-gradient-to-r from-[#6c7897] to-[#5a6379] rounded-full shadow-lg hover:translate-y-[-3px] transition-all hover:shadow-xl active:translate-y-[-1px] z-10"
        onClick={handleContact}
      >
        <Mail className="h-5 w-5" />
        <span>Contact Us</span>
      </button>
      
      <Link 
        to="/support" 
        className="fixed top-6 right-8 text-[#5a6379] text-sm flex items-center gap-2 px-4 py-2 bg-white/70 rounded-full shadow-sm hover:bg-white/90 hover:translate-y-[-2px] hover:shadow-md transition-all z-10"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" fill="none" stroke="currentColor" strokeWidth="2"></path>
          <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></line>
        </svg>
        <span>Support</span>
      </Link>
      
      <footer className="fixed bottom-6 text-sm text-[#5a6379] opacity-80 z-10">
        © {new Date().getFullYear()} Freorva LLC. All rights reserved.
      </footer>
    </main>
  );
};

export default Index;
