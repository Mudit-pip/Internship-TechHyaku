import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../assets/Logo.png';

const Home = () => {
  return (
    <section id='home' className="bg-gradient-to-tl from-white via-[#c5fff3] to-white text-black py-20 px-4 md:px-10 h-screen">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text Block */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#2c5f55] mb-6">
            Empowering Innovation Through STEM 🚀
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-xl">
            At Hyaku Innovative Technologies, we empower students to unlock their creative potential through Robotics, AI, IoT, and more — fostering curiosity and future-ready skills.
          </p>
          <div className="flex gap-4">
            <ScrollLink
              to="courses"
              smooth={true}
              duration={500}
              offset={-70}
              className="bg-[#2c5f55] text-white px-6 py-3 rounded-md hover:bg-[#2c5f55] transition cursor-pointer"
            >
              Explore Courses
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="border border-[#2c5f55] text-[#2c5f55] px-6 py-3 rounded-md hover:bg-[#2c5f55] hover:text-white transition cursor-pointer"
            >
              About Us
            </ScrollLink>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={Logo}
            alt="STEM Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
