import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import Logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#1c2e2a] text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={Logo} alt="TechHyaku Logo" className="h-10 bg-white" />
            <span className="text-xl font-bold">Tech Hyaku</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering young minds through STEM, Robotics, AI, and IoT. We deliver hands-on learning with national-level achievements and ATL support across India.
          </p>
          <div className="flex gap-4 mt-6 text-xl text-white">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Home</li>
            <li>Courses</li>
            <li>Kits</li>
            <li>Workshops</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* About TechHyaku */}
        <div>
          <h4 className="text-white font-semibold mb-4">About TechHyaku</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Company Vision</li>
            <li>Our Mentors</li>
            <li>Achievements</li>
            <li>ATL Support</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">Join Our Community</h4>
          <p className="text-gray-400 text-sm mb-4">
            Keep up with the latest in Robotics, STEM & IoT. Subscribe now!
          </p>
          <div className="flex rounded-full overflow-hidden bg-white shadow-md">
            <input
              type="email"
              placeholder="techhyaku@gmail.com"
              className="px-4 py-2 w-full text-gray-700 focus:outline-none select-none"
            />
            
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 py-4 bg-[#344842] text-center text-sm text-gray-300">
        © 2025 Tech Hyaku Pvt. Ltd. | Empowering Innovation Nationwide
        <br />
        Made with Team <b><em>Tech Hyaku</em></b>
      </div>
    </footer>
  );
};

export default Footer;