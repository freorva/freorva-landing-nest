
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Support = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#e9eeff] to-[#f0e6ff]">
      <div className="bg-pattern absolute inset-0 opacity-5 pointer-events-none"></div>
      <div className="decorative-circle-1 absolute top-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-[rgba(238,230,255,0.5)] to-[rgba(220,230,255,0.5)] blur-[50px] -z-10"></div>
      <div className="decorative-circle-2 absolute bottom-[20%] left-[20%] w-[25%] h-[25%] rounded-full bg-gradient-to-tr from-[rgba(220,230,255,0.3)] to-[rgba(238,230,255,0.3)] blur-[50px] -z-10"></div>
      
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-freorva-900 mb-4">Support Center</h1>
          <p className="text-xl text-freorva-700 max-w-2xl mx-auto">
            We're here to help. Get in touch with our support team.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          {/* Email Support Card */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-md border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>Email Support</span>
              </CardTitle>
              <CardDescription>
                Get a response within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-freorva-700">
                For inquiries and customer support, our team is available via email.
              </p>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => window.location.href = 'mailto:support@freorva.io'} 
                className="w-full bg-freorva-800 hover:bg-freorva-900"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="text-center mt-16">
          <Link to="/">
            <Button variant="ghost" className="text-freorva-800 hover:text-freorva-900 hover:bg-freorva-100">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Support;
