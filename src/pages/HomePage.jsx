import React from 'react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import NavBar from "../components/Navbar";
import { BookOpen, Users, Calendar, Send } from "lucide-react";

const HeroSection = () => (
  <section className="bg-gradient-to-r from-sky-400 to-blue-500 text-white py-20">
    <div className="container mx-auto px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Blokkat</h1>
      <p className="text-xl md:text-2xl mb-8">Empowering the future through blockchain education</p>
      <Button className="bg-white text-sky-600 hover:bg-sky-100">Learn More</Button>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="w-12 h-12 text-sky-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-sky-700">{title}</h3>
    <p className="text-sky-600">{description}</p>
  </div>
);

const WhatWeDoSection = () => (
  <section className="py-16 bg-sky-50">
    <div className="container mx-auto px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-12 text-center text-sky-800">What We Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={BookOpen}
          title="Free Courses"
          description="Access our comprehensive blockchain courses at no cost."
        />
        <FeatureCard
          icon={Users}
          title="Community Lectures"
          description="Attend engaging lectures led by blockchain experts."
        />
        <FeatureCard
          icon={Calendar}
          title="Events"
          description="Participate in our blockchain-focused events and workshops."
        />
      </div>
    </div>
  </section>
);

const JoinCommunitySection = () => (
  <section className="py-16 bg-sky-500 text-white">
    <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Join the Blokkat Community</h2>
      <p className="text-xl mb-8">Be part of a growing network of blockchain enthusiasts and professionals.</p>
      <a href="https://chat.whatsapp.com/GTzMCGaaw7F9kQKo1AOKbX" target="_blank" rel="noopener noreferrer">
        <Button className="bg-white text-sky-600 hover:bg-sky-100">Join Now</Button>
      </a>

    </div>
  </section>
);

const ContactForm = () => (
  <form className="space-y-4">
    <Input type="text" placeholder="Your Name" className="border-sky-300 focus:border-sky-500" />
    <Input type="email" placeholder="Your Email" className="border-sky-300 focus:border-sky-500" />
    <Textarea placeholder="Your Message" className="border-sky-300 focus:border-sky-500" />
    <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white">
      <Send className="w-4 h-4 mr-2" />
      Send Message
    </Button>
  </form>
);

const ContactUsSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-12 text-center text-sky-800">Contact Us</h2>
      <div className="max-w-md mx-auto">
        <ContactForm />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-sky-800 text-white py-8">
    <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
      <p>&copy; {new Date().getFullYear()} Blokkat. All rights reserved.</p>
    </div>
  </footer>
);

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <HeroSection />
      <WhatWeDoSection />
      <JoinCommunitySection />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default HomePage;