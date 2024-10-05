import React from 'react';
import { Button } from "../components/ui/button";
import NavBar from "../components/Navbar";
import { Image, Users } from "lucide-react";

const EventsGallerySection = () => (
  <section className="py-16 bg-sky-50 w-full">
    <div className="px-4 md:px-8 lg:px-16 w-full">
      <h2 className="text-3xl font-bold mb-12 text-center text-sky-800">Events Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Replace these with images from your events */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Image className="w-full h-48 object-cover mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-sky-700">Event 1</h3>
          <p className="text-sky-600">Description of the event and key highlights.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Image className="w-full h-48 object-cover mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-sky-700">Event 2</h3>
          <p className="text-sky-600">Description of the event and key highlights.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Image className="w-full h-48 object-cover mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-sky-700">Event 3</h3>
          <p className="text-sky-600">Description of the event and key highlights.</p>
        </div>
      </div>
    </div>
  </section>
);

const JoinCommunitySection = () => (
  <section className="py-16 bg-sky-500 text-white w-full">
    <div className="px-4 md:px-8 lg:px-16 w-full text-center">
      <h2 className="text-3xl font-bold mb-6">Join the Blokkat Community</h2>
      <p className="text-xl mb-8">Connect with like-minded blockchain enthusiasts and professionals.</p>
      <Button className="bg-white text-sky-600 hover:bg-sky-100">Join Now</Button>
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

const CommunityPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <EventsGallerySection />
      <JoinCommunitySection />
      <Footer />
    </div>
  );
};

export default CommunityPage;
