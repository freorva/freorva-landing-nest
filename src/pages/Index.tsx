
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
      
      {/* Content is rendered by the HTML file */}
      <div className="h-full">
        {/* This is intentionally empty as content is in the HTML */}
      </div>
    </main>
  );
};

export default Index;
