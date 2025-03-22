
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, HelpCircle, MessageSquare, FileQuestion } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
            We're here to help. Find answers to your questions or get in touch with our support team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Card */}
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
                For general inquiries and customer support, our team is available via email.
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
          
          {/* Phone Card */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-md border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>Phone Support</span>
              </CardTitle>
              <CardDescription>
                Available Monday-Friday, 9am-5pm
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-freorva-700">
                Speak directly with our support team for urgent matters or complex issues.
              </p>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => window.location.href = 'tel:+1234567890'} 
                variant="outline" 
                className="w-full border-freorva-800 text-freorva-800 hover:bg-freorva-100"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Button>
            </CardFooter>
          </Card>
          
          {/* Help Center Card */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-md border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                <span>Help Center</span>
              </CardTitle>
              <CardDescription>
                Browse our knowledge base
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-freorva-700">
                Find answers to common questions and detailed guides in our documentation.
              </p>
            </CardContent>
            <CardFooter>
              <Button 
                variant="secondary" 
                className="w-full"
                onClick={() => window.location.href = '#faq'}
              >
                <FileQuestion className="mr-2 h-4 w-4" />
                View Resources
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* FAQ Section */}
        <div id="faq" className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-freorva-900 mb-6">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium text-freorva-800">
                What services does Freorva offer?
              </AccordionTrigger>
              <AccordionContent className="text-freorva-700">
                Freorva specializes in innovative technology solutions with thoughtful design. Our services include software development, UX/UI design, and digital transformation consulting.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium text-freorva-800">
                How can I request a quote for my project?
              </AccordionTrigger>
              <AccordionContent className="text-freorva-700">
                You can request a quote by emailing us at contact@freorva.io with details about your project requirements. Our team will get back to you within 24 hours to discuss your needs.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium text-freorva-800">
                What is your typical project timeline?
              </AccordionTrigger>
              <AccordionContent className="text-freorva-700">
                Project timelines vary based on scope and complexity. Small projects typically take 2-4 weeks, while larger initiatives may span several months. We provide detailed timeline estimates during our initial consultation.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium text-freorva-800">
                Do you offer ongoing support after project completion?
              </AccordionTrigger>
              <AccordionContent className="text-freorva-700">
                Yes, we offer various support and maintenance packages to ensure your solution continues to function optimally. Our team can provide regular updates, performance monitoring, and technical support as needed.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium text-freorva-800">
                How do I report an issue with my current service?
              </AccordionTrigger>
              <AccordionContent className="text-freorva-700">
                For existing clients, you can report issues through our dedicated support email at support@freorva.io or call our support line during business hours. Please include as much detail as possible about the issue you're experiencing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
