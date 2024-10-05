import React from 'react';
import { Button } from "../components/ui/button";

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold mb-6 text-sky-800">{children}</h2>
);

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-grow">
        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle>Our Story</SectionTitle>
            <p className="text-lg text-gray-700 mb-4">
              Blokkat was founded in 2023 with a mission to democratize blockchain education. Our journey began when a group of blockchain enthusiasts realized the need for accessible, high-quality education in this rapidly evolving field.
            </p>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="py-16 bg-sky-50">
          <div className="container mx-auto px-4">
            <SectionTitle>Our Vision</SectionTitle>
            <p className="text-lg text-gray-700 mb-4">
              We envision a world where blockchain technology is understood and accessible to all. Our goal is to empower individuals and organizations with the knowledge and skills needed to harness the potential of blockchain.
            </p>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle>Our Values</SectionTitle>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
              <li>Accessibility: Making blockchain education available to everyone</li>
              <li>Innovation: Staying at the forefront of blockchain technology</li>
              <li>Community: Fostering a supportive learning environment</li>
              <li>Integrity: Providing honest, unbiased information</li>
            </ul>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 bg-sky-50">
          <div className="container mx-auto px-4">
            <SectionTitle>What We Do</SectionTitle>
            <p className="text-lg text-gray-700 mb-4">
              At Blokkat, we offer a range of services to support blockchain education:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
              <li>Free online courses on blockchain fundamentals and advanced topics</li>
              <li>Community lectures led by industry experts</li>
              <li>Workshops and events for hands-on learning</li>
              <li>Resources and tools for blockchain developers</li>
            </ul>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle>Our Team</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Add team member components here */}
              <div className="text-center">
                <img src="/placeholder.svg?height=150&width=150" alt="Team Member" className="rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
              <div className="text-center">
                <img src="/placeholder.svg?height=150&width=150" alt="Team Member" className="rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
                <p className="text-gray-600">Lead Educator</p>
              </div>
              <div className="text-center">
                <img src="/placeholder.svg?height=150&width=150" alt="Team Member" className="rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
                <p className="text-gray-600">Community Manager</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-sky-50">
          <div className="container mx-auto px-4">
            <SectionTitle>FAQs</SectionTitle>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Are the courses really free?</h3>
                <p className="text-gray-700">Yes, all our courses are completely free and accessible to everyone.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Do I need prior knowledge to start learning?</h3>
                <p className="text-gray-700">No, we offer courses for all levels, from beginners to advanced learners.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How can I get involved in the community?</h3>
                <p className="text-gray-700">You can join our online forums, attend our events, and participate in community projects.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle>Our Partners</SectionTitle>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {/* Add partner logos here */}
              <img src="/placeholder.svg?height=80&width=200" alt="Partner 1" className="h-20" />
              <img src="/placeholder.svg?height=80&width=200" alt="Partner 2" className="h-20" />
              <img src="/placeholder.svg?height=80&width=200" alt="Partner 3" className="h-20" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;