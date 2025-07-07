import React from 'react';
import { FaUserPlus, FaMicrochip, FaRobot, FaChartLine } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="howitworks" className="bg-[#2c5f55] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">How It Works</h2>

        {/* 4-step process */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white text-[#2c5f55] p-4 rounded-full text-3xl mb-4">
              <FaUserPlus />
            </div>
            <h3 className="font-bold text-lg">Enroll</h3>
            <p className="text-gray-200 text-sm mt-2">
              Join our programs and kickstart your journey into Robotics, IoT, and AI.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white text-[#2c5f55] p-4 rounded-full text-3xl mb-4">
              <FaMicrochip />
            </div>
            <h3 className="font-bold text-lg">Get Kits</h3>
            <p className="text-gray-200 text-sm mt-2">
              Receive curated STEM kits for hands-on learning from basic to advanced levels.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white text-[#2c5f55] p-4 rounded-full text-3xl mb-4">
              <FaRobot />
            </div>
            <h3 className="font-bold text-lg">Build Projects</h3>
            <p className="text-gray-200 text-sm mt-2">
              Create real-world tech projects guided by our expert mentors and structured curriculum.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white text-[#2c5f55] p-4 rounded-full text-3xl mb-4">
              <FaChartLine />
            </div>
            <h3 className="font-bold text-lg">Show Results</h3>
            <p className="text-gray-200 text-sm mt-2">
              Compete, showcase innovations, and win at national and international STEM competitions.
            </p>
          </div>
        </div>

        <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#2c5f55] transition">
          Start Now
        </button>
      </div>
    </section>
  );
};

export default AboutSection;