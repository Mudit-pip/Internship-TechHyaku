import React from 'react';
import Robot from '../assets/WhyUs/robot.png';
import second from '../assets/WhyUs/second.png';
import third from '../assets/WhyUs/third.png';
import four from '../assets/WhyUs/four.png';
import FadeInOnScroll from './FadeInOnScroll'; // adjust path if needed

function WhyUs() {
  const features = [
    {
      title: "Innovative Educational Approach:",
      description: `Hyaku Innovative Technologies offers a unique service by providing qualified teachers to schools equipped with Atal Tinkering Labs (ATL), fostering a culture of curiosity, experimentation, and achievement among students.`,
      image: Robot,
    },
    {
      title: "Proven Track Record:",
      description: `The company's students have consistently earned accolades in national robotics competitions, showcasing the caliber of talent cultivated within the Hyaku ecosystem and even representing India at prestigious international events.`,
      image: second,
    },
    {
      title: "Empowerment and Vision:",
      description: `Hyaku's vision of empowering students to become active creators in the technological landscape aligns with the evolving needs of the future, emphasizing the judicious harnessing of technology for positive change.`,
      image: third,
    },
    {
      title: "Commitment to Excellence:",
      description: `The company's unwavering commitment to shaping a better, technologically enriched world and creating a lasting impact on the future of technology and education makes it a compelling choice for schools and institutions looking to inspire and cultivate the next generation of innovators and creators.`,
      image: four,
    },
  ];

  return (
    <section id='whyus'>
      <div className="flex flex-col bg-gray-100 min-h-screen w-full overflow-hidden">
  <h2 className="text-3xl sm:text-5xl font-semibold font-serif m-4 flex justify-center mt-8 text-center">
    Why Choose Us?
  </h2>

  <div className="bg-[#245D51] w-full flex flex-col items-center py-10 space-y-20">
    {features.map((feature, index) => (
      <React.Fragment key={index}>
        <FadeInOnScroll>
          <div
            className={`flex flex-col-reverse sm:flex-row ${
              index % 2 !== 0 ? "sm:flex-row-reverse" : ""
            } w-full max-w-screen-xl items-center justify-between px-4 sm:px-10 gap-6`}
          >
            <div className="w-full sm:w-1/2">
              <h3 className="text-2xl sm:text-4xl text-[#FDF6E3] font-serif underline mb-4 text-center sm:text-left">
                {feature.title}
              </h3>
              <p className="text-[#C7E7E1] font-serif text-md sm:text-lg whitespace-pre-line text-center sm:text-left">
                {feature.description}
              </p>
            </div>
            <img
              src={feature.image}
              alt={feature.title}
              className="h-40 sm:h-48 w-auto"
            />
          </div>
        </FadeInOnScroll>
        {index !== features.length - 1 && (
          <div className="hidden sm:block w-1 h-20 bg-[#FDF6E3]"></div>
        )}
      </React.Fragment>
    ))}
  </div>
</div>

    </section>
  );
}

export default WhyUs;
