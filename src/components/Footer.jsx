import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../assets/Icon.png";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#1c2e2a] text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={Logo} alt="TechHyaku Logo" className="h-12" />
            <span className="text-xl font-bold">Tech Hyaku</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering young minds through STEM, Robotics, AI, and IoT. We
            deliver hands-on learning with national-level achievements and ATL
            support across India.
          </p>
          <div className="flex gap-4 mt-6 text-xl text-white">
            <a href="https://www.facebook.com/TECHHYAKU/" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/tech_hyaku/" target="_blank">
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/hyaku-innovative-technologies-pvt-ltd/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com/@techhyaku" target="_blank">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-white"
            >
              <li className="hover:text-white mb-1">Home</li>
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-white"
            >
              <li className="hover:text-white mb-1">About Us</li>
            </ScrollLink>
            <ScrollLink
              to="courses"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-white"
            >
              <li className="hover:text-white mb-1">Courses</li>
            </ScrollLink>
            <ScrollLink
              to="kits"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-white"
            >
              <li className="hover:text-white mb-1">Kits</li>
            </ScrollLink>

            <ScrollLink
              to="video"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-white"
            >
              <li className="hover:text-white mb-1">Videos</li>
            </ScrollLink>
          </ul>
        </div>

        {/* About TechHyaku */}
        <div>
          <h4 className="text-white font-semibold mb-4">About TechHyaku</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-white"
            >
              <li className="hover:text-white mb-1">About Us</li>
            </ScrollLink>
            <ScrollLink
              to="whyus"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-white"
            >
              <li className="hover:text-white mb-1">Why Choose Us</li>
            </ScrollLink>
            <ScrollLink
              to="achievements"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-white"
            >
              <li className="hover:text-white mb-1">Achievements</li>
            </ScrollLink>
            <ScrollLink
              to="collab"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-white"
            >
              <li className="hover:text-white mb-1">Collaborations</li>
            </ScrollLink>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li className="hover:text-white">techhyaku@gmail.com</li>

            <li className="hover:text-white">
              <a
                href="https://www.instagram.com/tech_hyaku/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="hover:text-white">
              <a
                href="https://www.linkedin.com/company/hyaku-innovative-technologies-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">Join Our Community</h4>
          <p className="text-gray-400 text-sm mb-4">
            Keep up with the latest in Robotics, STEM & IoT. Subscribe now!
          </p>
          <div className="flex rounded-full overflow-hidden bg-white shadow-md">
            {/* <input
              type="email"
              placeholder="techhyaku@gmail.com"
              className="px-4 py-2 w-full text-gray-700 focus:outline-none select-none"
            /> */}
            <div className="px-4 py-2 w-full text-gray-700 bg-white border border-gray-300 rounded-md cursor-select">
              techhyaku@gmail.com
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 py-4 bg-[#344842] text-center text-sm text-gray-300">
        © 2025 Tech Hyaku Pvt. Ltd. | Empowering Innovation Nationwide
        <br />
        Made with Team{" "}
        <b>
          <em>Tech Hyaku</em>
        </b>
      </div>
    </footer>
  );
};

export default Footer;
