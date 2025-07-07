import React from 'react'
import Collaborator2 from '../assets/Collaborations/collaborator2.png'
import Collaborator3 from '../assets/Collaborations/collaborator3.png'
import Collaborator4 from '../assets/Collaborations/collaborator4.png'
import Collaborator5 from '../assets/Collaborations/collaborator5.png'
import Collaborator6 from '../assets/Collaborations/collaborator6.png'
import Collaborator1 from '../assets/Collaborations/collaborator1.png'
function Collaboration() {
  return (
    <section id='collab'>
      <div class='flex flex-col bg-gray-100 h-screen w-[95%] ml-10 overflow-hidden'>
      <h2 class=' h-24 flex justify-center text-5xl font-semibold m-2'>Our Success</h2>
      <div class='flex flex-wrap justify-center items-center p-4 group'>
        <div class='bg-gray-300 h-48 w-48 flex flex-col justify-center items-center m-2 transition-all duration-500 group-hover:scale-90 hover:scale-105'>
          <h2 class="font-semibold text-6xl">15k+</h2>
          <p>Number Of Students</p>
        </div>
        <div class='bg-white h-48 w-48 flex flex-col justify-center items-center m-2 transition-all duration-500 group-hover:scale-90 hover:scale-105'>
          <h2 class="font-semibold text-6xl">14+</h2>
          <p>Schools Have Collaborated</p>
        </div>
        <div class='bg-gray-300 h-48 w-48 flex flex-col justify-center items-center m-2 transition-all duration-500 group-hover:scale-90 hover:scale-105'>
          <h2 class="font-semibold text-6xl">7+</h2>
          <p>Different Cources Offered</p>
        </div>
        <div class='bg-white h-48 w-48 flex flex-col justify-center items-center m-2 transition-all duration-500 group-hover:scale-90 hover:scale-105'>
          <h2 class="font-semibold text-6xl">10+</h2>
          <p>Number Of Experts</p>
        </div>
        <div class='bg-gray-300 h-48 w-48 flex flex-col justify-center items-center m-2 transition-all duration-500 group-hover:scale-90 hover:scale-105'>
          <h2 class="font-semibold text-6xl">10+</h2>
          <p>Years Of Experience</p>
        </div>
      </div>

      <div class="bg-[#245D51] h-2/3 w-vw ">
        <h2  class=' h-24 flex justify-center text-4xl text-amber-50 font-semibold m-2'>Our Collaborators</h2>
        <div class="flex  justify-center gap-10 ">
          <div className="flex gap-4 group">
            <img src={Collaborator1} className="h-48 w-48 transition-all duration-500 group-hover:scale-90 hover:scale-105" />
            <img src={Collaborator2} className="h-48 w-48 transition-all duration-500 group-hover:scale-90 hover:scale-105" />
            <img src={Collaborator3} className="h-48 w-48 transition-all duration-500 group-hover:scale-90 hover:scale-105" />
            <img src={Collaborator4} className="h-48 w-48 transition-all duration-500 group-hover:scale-90 hover:scale-105" />
            <img src={Collaborator5} className="h-48 w-48 transition-all duration-500 group-hover:scale-90 hover:scale-105" />
            <img src={Collaborator6} className="h-48 w-48 transition-all duration-500 group-hover:scale-90 hover:scale-105" />
          </div>
        </div>
      </div>
    </div>
    </section>
    
  )
}

export default Collaboration