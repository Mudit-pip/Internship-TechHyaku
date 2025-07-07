import React, { useState } from "react";
import { IoMdClose } from "react-icons/io"; // for close icon

// Example imports
import img1 from "../assets/News/news1.png";
import img2 from "../assets/News/news2.png";
import img3 from "../assets/News/news3.png";
import img4 from "../assets/News/news4.png";
import img5 from "../assets/News/news5.png";
import img6 from "../assets/News/news6.png";
import img7 from "../assets/News/news7.png";
import img8 from "../assets/News/news8.png";

const AchievementsSection = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="achievements" className="bg-white py-20 px-4 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2c5f55] mb-10">
          Our Achievements 🏆
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Proud moments featured in newspapers and media for innovation in STEM & Robotics.
        </p>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img src={src} alt={`achievement-${idx}`} className="w-full h-[300px] object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 bg-opacity-80">
          
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white text-3xl hover:text-red-400"
          >
            <IoMdClose />
          </button>

          <img
            src={selectedImage}
            alt="Full View"
            className="max-h-[95%] max-w-[95%] md:h-[600px] rounded-lg shadow-xl object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default AchievementsSection;