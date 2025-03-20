
import React from 'react';
import { cn } from '@/lib/utils';
import { Shield, Lightbulb, Users, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: <Lightbulb className="h-8 w-8 text-purple-500" />,
    title: "Innovation",
    description: "We're committed to pushing boundaries and exploring new possibilities through thoughtful design and cutting-edge technology.",
    benefits: ["Creative problem solving", "Future-proof technology", "Seamless experiences"]
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    title: "Reliability",
    description: "Built on a foundation of trust and excellence, we're dedicated to creating solutions that stand the test of time.",
    benefits: ["Rock-solid infrastructure", "Dependable support", "Consistent performance"]
  },
  {
    icon: <Users className="h-8 w-8 text-indigo-500" />,
    title: "Human-centered",
    description: "People are at the heart of everything we do. We design with empathy and focus on creating meaningful experiences.",
    benefits: ["Intuitive interfaces", "Accessible design", "Personalized solutions"]
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-gradient-to-bl from-purple-50 to-indigo-50 rounded-full mix-blend-multiply blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-tr from-blue-50 to-cyan-50 rounded-full mix-blend-multiply blur-3xl opacity-70"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></div>
          <h2 className="heading-lg mb-4 text-freorva-900">Our Core Principles</h2>
          <p className="text-lg text-freorva-700">
            At Freorva, we're guided by a set of fundamental values that define who we are and how we work.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-freorva-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-freorva-50 to-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-freorva-900">{feature.title}</h3>
              <p className="text-freorva-700 mb-5">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-freorva-700 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
