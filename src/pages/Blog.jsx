import React from 'react';
import NavBar from "../components/Navbar";
import { Button } from "../components/ui/button";
import { BookOpen } from "lucide-react";

const BlogPost = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h3 className="text-xl font-semibold mb-2 text-sky-700">{title}</h3>
    <p className="text-sky-600 mb-4">{description}</p>
    <Button className="bg-sky-500 text-white hover:bg-sky-600">Read More</Button>
  </div>
);

const BlogSection = () => (
  <section className="py-16 bg-sky-50 w-full">
    <div className="px-4 md:px-8 lg:px-16 w-full">
      <h2 className="text-3xl font-bold mb-12 text-center text-sky-800">Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BlogPost
          title="Understanding Blockchain Technology"
          description="Blockchain technology is revolutionizing various industries. Learn the basics and explore its applications."
        />
        <BlogPost
          title="Smart Contracts 101"
          description="Discover how smart contracts work and why they are essential for decentralized applications."
        />
        <BlogPost
          title="The Future of Web3"
          description="Explore the possibilities and potential of Web3 in transforming the digital landscape."
        />
        <BlogPost
          title="Decentralized Finance (DeFi) Explained"
          description="An introduction to DeFi, its key components, and how it's changing the financial sector."
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-sky-800 text-white py-8 w-full">
    <div className="px-4 md:px-8 lg:px-16 w-full text-center">
      <p>&copy; {new Date().getFullYear()} Blokkat. All rights reserved.</p>
    </div>
  </footer>
);

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Blog;
