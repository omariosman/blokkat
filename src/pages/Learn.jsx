import React from 'react';
import { BookOpen, Video, Calendar, FileText, ClipboardList } from "lucide-react";

// Define the ContentCard component
const ContentCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="w-12 h-12 text-sky-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-sky-700">{title}</h3>
    <p className="text-sky-600">{description}</p>
  </div>
);

// LearnSection component that contains the content
const LearnSection = () => (
  <section className="py-16 bg-sky-50 w-full">
    <div className="px-4 md:px-8 lg:px-16 w-full">
      <h2 className="text-3xl font-bold mb-12 text-center text-sky-800">Our Content</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Original Materials Section */}
        <div className="flex flex-col space-y-6">
          <h3 className="text-2xl font-bold mb-4 text-sky-700">Original Materials</h3>
          <ContentCard
            icon={BookOpen}
            title="Research Papers"
            description="Explore our in-depth research papers on blockchain and related topics."
          />
          <ContentCard
            icon={Video}
            title="Tutorial Videos"
            description="Watch our curated video tutorials for step-by-step guidance."
          />
          {/* New Original Materials Items */}
          <ContentCard
            icon={FileText}
            title="Case Studies"
            description="Read our detailed case studies to understand blockchain implementations in various sectors."
          />
          <ContentCard
            icon={ClipboardList}
            title="Guides & Checklists"
            description="Download our practical guides and checklists for step-by-step learning."
          />
        </div>

        {/* Workshops / Courses Section */}
        <div className="flex flex-col space-y-6">
          <h3 className="text-2xl font-bold mb-4 text-sky-700">Workshops / Courses</h3>
          <ContentCard
            icon={Calendar}
            title="Live Workshops"
            description="Join our interactive live workshops and enhance your knowledge."
          />
          <ContentCard
            icon={BookOpen}
            title="Blockchain Courses"
            description="Take our comprehensive courses and build your skills."
          />
          {/* New Workshops/Courses Items */}
          <ContentCard
            icon={ClipboardList}
            title="Certification Programs"
            description="Get certified with our recognized programs to showcase your skills."
          />
          <ContentCard
            icon={Video}
            title="Webinars & Q&A Sessions"
            description="Participate in our live webinars and ask questions directly to experts."
          />
        </div>
      </div>
    </div>
  </section>
);

// Footer component
const Footer = () => (
  <footer className="bg-sky-800 text-white py-8 w-full">
    <div className="px-4 md:px-8 lg:px-16 w-full text-center">
      <p>&copy; {new Date().getFullYear()} Blokkat. All rights reserved.</p>
    </div>
  </footer>
);

// Learn component with the new structure
const Learn = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <LearnSection />
      <Footer />
    </div>
  );
};

export default Learn;
