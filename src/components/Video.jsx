import React from 'react';
import thumbnail from '../assets/Our_Courses/thumbnail.png';
import data from './Data';

const { videos } = data;

function Video() {
  return (
    <section id='video'>
      <div className="w-full min-h-screen px-4 py-10 ">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A6B5C] text-center mb-10">
         Video Lessons
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.03] hover:shadow-lg flex flex-col h-[350px]"
          >
            
            <div className="h-[180px] w-full bg-[#E6F4F1]">
              <img
                src={thumbnail}
                alt="Thumbnail"
                className="w-full h-full object-cover"
              />
            </div>

            
            <div className="p-5 flex flex-col justify-between flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {video.title}
              </h3>

              <a href={video.link} target="_blank" rel="noopener noreferrer" >
                <button className="bg-[#1A6B5C] hover:bg-[#155f51] text-white py-2 px-4 rounded-lg w-full transition-all duration-200 cursor-pointer">
                  Watch Now
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
    
  );
}

export default Video;
