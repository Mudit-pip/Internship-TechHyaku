import React from 'react'
import Robot from '../assets/WhyUs/robot.png'

function WhyUs() {
  return (
    <section id='whyus'>
        <div class='flex flex-col bg-gray-100 h-screen w-[95%] ml-10 overflow-x-hidden'>
        <h2 class="text-5xl font-semibold font-serif m-4 flex justify-center mt-8">Why Choose Us?</h2>
        <div class="bg-[#245D51] w-full flex flex-col items-center py-10 relative space-y-20">
            <div class="flex w-[50rem] items-center space-x-10 ">
                <div class="w-[35rem]">
                <h3 class='text-4xl text-[#FDF6E3] font-serif underline mb-4'>Innovative Educational Approach:</h3>
                <p class='text-[#C7E7E1] font-serif text-lg'>
                    Hyaku Innovative Technologies offers a unique service by providing qualified
                    teachers to schools equipped with Atal Tinkering Labs (ATL), fostering a culture of
                    curiosity, experimentation, and achievement among students.
                </p>
                </div>
                <img src={Robot} className='h-48' />
            </div>
            <div class="w-1 h-10 bg-[#FDF6E3]"></div>
            <div class="flex w-[50rem] items-center justify-between space-x-10 flex-row-reverse ml-[15rem]">
                <div class="w-[35rem] ">
                <h3 class='text-4xl text-[#FDF6E3] font-serif underline mb-4'>Innovative Educational Approach:</h3>
                <p class='text-[#C7E7E1] font-serif text-lg'>
                    Hyaku Innovative Technologies offers a unique service by providing qualified
                    teachers to schools equipped with Atal Tinkering Labs (ATL), fostering a culture of
                    curiosity, experimentation, and achievement among students.
                </p>
                </div>
                <img src={Robot} className='h-48 ' />
            </div>
            <div class="w-1 h-20 bg-[#FDF6E3]"></div>
            <div class="flex w-264 items-center space-x-10">
                <div class="w-1/2 ml-12">
                <h3 class='text-4xl text-[#FDF6E3] font-serif underline mb-4'>Innovative Educational Approach:</h3>
                <p class='text-[#C7E7E1] font-serif text-lg'>
                    Hyaku Innovative Technologies offers a unique service by providing qualified
                    teachers to schools equipped with Atal Tinkering Labs (ATL), fostering a culture of
                    curiosity, experimentation, and achievement among students.
                </p>
                </div>
                <img src={Robot} className='h-48' />
            </div>
            <div class="w-1 h-20 bg-[#FDF6E3]"></div>
            <div class="flex w-264 items-center space-x-10 flex-row-reverse">
                <div class="w-1/2 mr-12">
                <h3 class='text-4xl text-[#FDF6E3] font-serif underline mb-4'>Innovative Educational Approach:</h3>
                <p class='text-[#C7E7E1] font-serif text-lg'>
                    Hyaku Innovative Technologies offers a unique service by providing qualified
                    teachers to schools equipped with Atal Tinkering Labs (ATL), fostering a culture of
                    curiosity, experimentation, and achievement among students.
                </p>
                </div>
                <img src={Robot} className='h-48' />
            </div>
        </div>
    </div>
    </section>
    
  )
}

export default WhyUs