import robotics from '../assets/Our_Courses/robotics.jpg'
import iot from '../assets/Our_Courses/iot.jpg'
import pcb from '../assets/Our_Courses/pcb.jpg'
import app_dev from '../assets/Our_Courses/app_dev.jpg'
import game_dev from '../assets/Our_Courses/game_dev.jpg'
import basic_electronics from '../assets/Our_Courses/basic_electronics.jpg'
import drone from '../assets/Our_Courses/drone.jpg'
import ai from '../assets/Our_Courses/ai.jpg'


const videos = [
  {
    id: 1,
    title: "Video 1",
    link: "https://www.youtube.com/watch?v=e7rtpnzZ6fk",
    
  },
  {
    id: 2,
    title: "Video 2",
    link: "https://www.youtube.com/watch?v=e7rtpnzZ6fk",
    
  },
  {
    id: 3,
    title: "Video 3",
    link: "https://www.youtube.com/watch?v=VwGNwAXl730",
    
  },
  {
    id: 4,
    title: "Video 4",
    link: "https://www.youtube.com/watch?v=e7rtpnzZ6fk",
    
  },
  {
    id: 5,
    title: "Video 5",
    link: "https://www.youtube.com/watch?v=e7rtpnzZ6fk",
    
  },
  {
    id: 6,
    title: "Video 6",
    link: "https://www.youtube.com/watch?v=e7rtpnzZ6fk",
    
  },
  {
    id: 7,
    title: "Video 7",
    link: "https://www.youtube.com/watch?v=e7rtpnzZ6fk",
    
  }
];

const courses = [
  {
    name: "Robotics",
    details: "Build and program autonomous robots from scratch. Learn the fundamentals of sensors, actuators, and motion control. Gain hands-on experience with real-world robotic systems.",
    image: robotics
  },
  {
    name: "Internet of Things",
    details: "Connect devices and collect data using IoT technology. Explore microcontrollers, sensors, and real-time communication. Build smart systems like home automation and environmental monitors.",
    image: iot
  },
  {
    name: "PCB Designing",
    details: "Design your own printed circuit boards using industry tools. Learn schematic capture, layout, and fabrication basics. Perfect for electronics and embedded system projects.",
    image: pcb
  },
  {
    name: "Android App Development",
    details: "Create fully functional Android apps . Learn to build user interfaces, manage databases, and publish apps. Ideal for beginners and future app developers.",
    image: app_dev
  },
  {
    name: "Game Development",
    details: "Design and build 2D/3D games . Learn game physics, scripting, and asset management. Turn your imagination into playable experiences.",
    image: game_dev
  },
  {
    name: "Artificial Intelligence",
    details: "Understand machine learning, neural networks, and data training. Build smart systems capable of learning and adapting. and explore real AI applications.",
    image: ai
  },
  {
    name: "Drone and RC Plane",
    details: "Learn aerodynamics, flight control, and wireless navigation. Assemble and fly custom drones and remote planes. A practical course with hands-on flying experience.",
    image: drone
  },
  {
    name: "Basic Electronics",
    details: "Master the fundamentals of electricity and components. Build circuits using resistors, capacitors, diodes, and transistors. Essential foundation for all electronics and hardware projects.",
    image: basic_electronics
  }
];

export default {
  videos,
  courses
};
