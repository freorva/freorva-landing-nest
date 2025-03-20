
import React from 'react';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Freorva's approach to technology is refreshing. They truly understand the balance between innovation and usability.",
    author: "Alex Morgan",
    title: "Technology Enthusiast"
  },
  {
    quote: "I'm excited to see what Freorva will bring to the market. Their vision for the future of technology is inspiring.",
    author: "Sam Taylor",
    title: "Industry Analyst"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-freorva-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full mix-blend-multiply blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full mix-blend-multiply blur-3xl opacity-70 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></div>
          <h2 className="heading-lg mb-4 text-freorva-900">What People Are Saying</h2>
          <p className="text-lg text-freorva-700">
            Early feedback from industry professionals who've previewed our vision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-freorva-100 relative"
            >
              <Quote className="absolute top-6 left-6 h-8 w-8 text-freorva-100 opacity-40" />
              <div className="relative z-10">
                <p className="text-lg text-freorva-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium text-freorva-900">{testimonial.author}</p>
                  <p className="text-sm text-freorva-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
