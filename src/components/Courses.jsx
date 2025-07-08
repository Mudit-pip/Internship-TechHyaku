import React from 'react';
import data from './Data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const { courses } = data;

function Courses() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section id='courses' className="bg-[#F0F4F3]">
      <div className="w-screen m-auto py-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A6B5C] text-center mb-10">
        Our Courses
      </h2>

      <Slider {...settings}>
        {courses.map((course) => (
          <div
            key={course.name}
            className="bg-white w-[350px] h-[450px] rounded-2xl border border-gray-200 shadow-md p-4 flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            <div className="w-full h-[200px] rounded-xl overflow-hidden mb-4">
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center flex-grow flex flex-col justify-between">
              <p className="text-2xl font-bold text-[#1A6B5C] mb-2">
                {course.name}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed line-clamp-5">
                {course.details}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </section>
    
  );
}

export default Courses;
