import React from 'react';
import agentImage from '../assets/Contact/contact.png'; // Update path if needed

const ContactSection = () => {
  return (
    <section id='contact' className="bg-white py-16 px-6">
      <div>
        <h1 className='text-center text-6xl text-[#2c5f55] mb-5 pb-4 font-bold'>Contact Us</h1>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <div className="flex-1 flex justify-center">
          <img src={agentImage} alt="Support Agent" className="max-w-sm h-[300px] md:h-[500px] md:max-w-md" />
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 w-full max-w-lg">
          <h2 className="text-[#2c5f55] text-lg mb-6 font-medium">
            Contact professionals for guidance
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm text-gray-400">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter you Full Name"
                className="w-full border border-gray-500 px-4 py-2 rounded-sm outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-gray-400">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full border border-gray-500 px-4 py-2 rounded-sm outline-none"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm text-gray-400">Mobile Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="+91 69696 96969"
                className="w-full border border-gray-500 px-4 py-2 rounded-sm outline-none"
              />
            </div>
            <div>
              <label htmlFor="query" className="text-sm text-gray-400">Your Query</label>
              <textarea
                id="query"
                placeholder="Type here..."
                className="w-full border border-gray-500 px-4 py-2 rounded-sm outline-none resize-none"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#2c5f55] text-white py-3 rounded-full hover:bg-[#264d45] transition"
            >
              Contact Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;