import React from "react";
import about1 from '../assets/About/about1.jpg'
import about2 from '../assets/About/about2.jpg'
import about3 from '../assets/About/about3.jpg'

const AboutSection = () => {
  const Section = ({ title, text, reverse, image }) => (
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 mb-20`}>
      {/* Text Content */}
      <div className="flex-1">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#2c5f55] mb-4">{title}</h3>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{text}</p>
      </div>

      {/* Image */}
      <div className="flex-1">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );

  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c5f55]">
            About Tech Hyaku
          </h2>
        </div>

        {/* Our Mission */}
        <Section className='h-[200px]'
          title="Our Mission"
          text={`To build a generation of tech-savvy innovators by combining imagination, hands-on experimentation, and 21st-century skills. 
We empower students through interactive learning kits, structured courses, and expert mentorship.

Whether it's building a robot, designing an app, or exploring IoT — we ensure every child learns by doing. 
Our mission is to make cutting-edge technology education accessible, fun, and impactful for every school-going student in India.`}
          image={about1}
        />

        {/* Our Vision */}
        <Section
          title="Our Vision"
          text={`To revolutionize the Indian education system by shifting from rote learning to creation-based learning.

We envision a future where every student, regardless of their background, has the tools and guidance to innovate and build solutions for real-world problems.
By bridging the gap between textbook theory and practical application, Tech Hyaku aims to turn learners into future-ready creators, leaders, and changemakers.`}
          image={about2}
          reverse
        />

        {/* Our Impact */}
        <Section
          title="Our Impact"
          text={`With presence in 100+ schools and support to multiple ATL (Atal Tinkering Lab) programs, Tech Hyaku has touched thousands of lives.

                Our students have:
                • Built innovative robots, drones, and IoT devices
                • Represented India in national & international competitions
                • Received accolades from institutions and government bodies

                From first-time coders to national champions, we celebrate every milestone of growth and invention.`}
          image={about3}
        />
      </div>
    </section>
  );
};

export default AboutSection;
