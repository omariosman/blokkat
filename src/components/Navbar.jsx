import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "./ui/button";
import { Menu, X } from 'lucide-react';

const NavItem = ({ to, children }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => 
      isActive ? "text-sky-200" : "text-white hover:text-sky-200 transition-colors"
    }
  >
    {children}
  </NavLink>
);

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-sky-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0">
              <span className="text-white text-xl font-bold">Blokkat</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/about">About Us</NavItem>
              <NavItem to="/community">Community</NavItem>
              <NavItem to="/blog">Blog</NavItem>
              <NavItem to="/learn">Learn</NavItem>
            </div>
          </div>
          <div className="md:hidden">
            <Button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-sky-200 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About Us</NavItem>
            <NavItem to="/community">Community</NavItem>
            <NavItem to="/blog">Blog</NavItem>
            <NavItem to="/learn">Learn</NavItem>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;