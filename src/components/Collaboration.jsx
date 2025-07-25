import React from "react";
import Collaborator2 from "../assets/Collaborations/Collaborator2.png";
import Collaborator3 from "../assets/Collaborations/Collaborator3.png";
import Collaborator4 from "../assets/Collaborations/Collaborator4.png";
import Collaborator5 from "../assets/Collaborations/Collaborator5.png";
import Collaborator6 from "../assets/Collaborations/Collaborator6.png";
import Collaborator1 from "../assets/Collaborations/Collaborator1.png";
function Collaboration() {
  return (
    <section id="collab">
      <div class="flex flex-col bg-gray-100 h-[100rem] w-[95%] ml-10 overflow-hidden xs:h-[100rem] sm:h-[65rem] xl:h-[52rem] ">
        <h2 class=" h-24 flex justify-center text-5xl font-semibold m-2">
          Our Success
        </h2>
        <div class="flex flex-wrap justify-center items-center p-4 group">
          <div class="bg-gray-300 h-48 w-48 flex flex-col justify-center items-center m-2 transition-all duration-500 group-hover:scale-90 hover:scale-105">
            <h2 class="font-semibold text-6xl">15k+</h2>
            <p>Number Of Students</p>
          </div>
          <div class="bg-white h-48 w-48 flex flex-col justify-center items-center m-2 transition-all duration-500 group-hover:scale-90 hover:scale-105">
            <h2 class="font-semibold text-6xl">14+</h2>
            <p>Schools Have Collaborated</p>
          </div>
          <div class="bg-gray-300 h-48 w-48 flex flex-col justify-center items-center m-2 transition-all duration-500 group-hover:scale-90 hover:scale-105">
            <h2 class="font-semibold text-6xl">7+</h2>
            <p>Different Courses Offered</p>
          </div>
          <div class="bg-white h-48 w-48 flex flex-col justify-center items-center m-2 transition-all duration-500 group-hover:scale-90 hover:scale-105">
            <h2 class="font-semibold text-6xl">10+</h2>
            <p>Number Of Experts</p>
          </div>
          <div class="bg-gray-300 h-48 w-48 flex flex-col justify-center items-center m-2 transition-all duration-500 group-hover:scale-90 hover:scale-105">
            <h2 class="font-semibold text-6xl">10+</h2>
            <p>Years Of Experience</p>
          </div>
        </div>

        <div className="bg-[#245D51] h-auto w-[95%] py-6 sm:h-[45rem] xl:h-[26rem]">
          <h2 className="h-24 flex justify-center items-center text-2xl sm:text-4xl text-amber-50 font-semibold m-2">
            Our Collaborators
          </h2>

          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-4">
              <img
                src={Collaborator1}
                className="h-28 w-28 sm:h-32 sm:w-32 md:h-48 md:w-48 transition-all duration-500 hover:scale-105"
              />
              <img
                src={Collaborator2}
                className="h-28 w-28 sm:h-32 sm:w-32 md:h-48 md:w-48 transition-all duration-500 hover:scale-105"
              />
              <img
                src={Collaborator3}
                className="h-28 w-28 sm:h-32 sm:w-32 md:h-48 md:w-48 transition-all duration-500 hover:scale-105"
              />
              <img
                src={Collaborator4}
                className="h-28 w-28 sm :h-32 sm:w-32 md:h-48 md:w-48 transition-all duration-500 hover:scale-105"
              />
              <img
                src={Collaborator5}
                className="h-28 w-28 sm:h-32 sm:w-32 md:h-48 md:w-48 transition-all duration-500 hover:scale-105"
              />
              <img
                src={Collaborator6}
                className="h-28 w-28 sm:h-32 sm:w-32 md:h-48 md:w-48 transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
}

export default Collaboration;
