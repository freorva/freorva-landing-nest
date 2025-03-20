
import React from 'react';
import { cn } from '@/lib/utils';
import { Shield, Lightbulb, Users } from 'lucide-react';

const features = [
  {
    icon: <Lightbulb className="h-8 w-8 text-freorva-700" />,
    title: "Innovation",
    description: "We're committed to pushing boundaries and exploring new possibilities through thoughtful design and cutting-edge technology."
  },
  {
    icon: <Shield className="h-8 w-8 text-freorva-700" />,
    title: "Reliability",
    description: "Built on a foundation of trust and excellence, we're dedicated to creating solutions that stand the test of time."
  },
  {
    icon: <Users className="h-8 w-8 text-freorva-700" />,
    title: "Human-centered",
    description: "People are at the heart of everything we do. We design with empathy and focus on creating meaningful experiences."
  }
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 text-freorva-900">Our Core Principles</h2>
          <p className="text-lg text-freorva-700">
            At Freorva, we're guided by a set of fundamental values that define who we are and how we work.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-freorva-100 transition-all duration-300 hover:shadow-md"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-freorva-50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-freorva-900">{feature.title}</h3>
              <p className="text-freorva-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
