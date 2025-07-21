import React from "react";
import KitDetail from "./KitDetails";
import kit1 from '../assets/Kits/kit1.jpeg';
import kit from '../assets/Kits/kit.jpg';
import kit2 from '../assets/Kits/kit2.png';
import kit3 from '../assets/Kits/kit3.png';
import kit4 from '../assets/Kits/kit4.png';

const kitsData = [
  {
    title: "Basic Electronics Kit",
    duration: "Est. Completion: 12 weeks",
    features: [
      "15+ projects like LED circuits, motor control, and ON/OFF switches",
      "Covers RGB, series/parallel, motors, switches",
      "Perfect for beginners to understand circuit building"
    ],
    components: [
      "LEDs, resistors, breadboard, switches, sensors, motors, ICs, batteries"
    ],
    image: kit
  },
  {
    title: "Arduino Starter Kit",
    duration: "Est. Completion: 14 weeks",
    features: [
      "Projects like LED control, piano, radar, digital clock, contactless doorbell",
      "Hands-on intro to Arduino Uno",
      "Enables students to prototype their own ideas"
    ],
    components: [
      "Arduino Uno, sensors, LEDs, buzzers, motors, Bluetooth modules, breadboard"
    ],
    image: kit1
  },
  {
    title: "Advance Arduino Kit",
    duration: "Est. Completion: 16 weeks",
    features: [
      "Advanced projects like home automation, real-time heart rate monitor, auto fan control",
      "Focus on sensors and real-world automation",
      "Includes Nano boards and camera modules"
    ],
    components: [
      "Arduino Uno/Nano, temp/humidity sensors, touchscreens, displays, motors"
    ],
    image: kit2
  },
  {
    title: "Arduino Robot Kit",
    duration: "Est. Completion: 12+ weeks",
    features: [
      "Build 10+ robots: line-follower, Bluetooth bot, robotic arm, 4WD robocar",
      "Ideal for robotics competitions and ATL labs",
      "Includes gyroscope, accelerometer, IR, PIR, motor drivers"
    ],
    components: [
      "Smart chassis, servos, IR/PIR sensors, motor drivers, LCDs, Arduino boards"
    ],
    image: kit3
  },
  {
    title: "Raspberry Pi Kit",
    duration: "Est. Completion: 14+ weeks",
    features: [
      "Projects like home automation, weather station, retro gaming console",
      "For intermediate to advanced learners",
      "Includes Pi Pico, sensors, display, camera, RFID, robocar"
    ],
    components: [
      "Raspberry Pi Pico/Zero W, sensors, displays, camera, SD, RFID, 4WD chassis"
    ],
    image: kit4
  }
];

const KitsSection = () => {
  return (
    <section id="kits" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2c5f55] mb-10">
          Our STEM Kits
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Hands-on learning made easy! Our kits are designed to spark innovation through real-world projects and curated components.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {kitsData.map((kit, idx) => (
            <KitDetail key={idx} kit={kit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitsSection;
