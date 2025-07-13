import { useState } from 'react'
import Header from './components/Header.jsx'
import Courses from './components/Courses.jsx'
import Collaboration from './components/Collaboration.jsx'
import Home from './components/Home.jsx'
import Video from './components/Video.jsx'
import WhyUs from './components/whyUs.jsx'
import AboutSection from './components/About.jsx'
import AchievementsSection from './components/Achievements.jsx'
import KitsSection from './components/KitSection.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <AboutSection/>
      <WhyUs/>
      <Courses/>
      <KitsSection/>
      <Video/>
      <AchievementsSection/>
      <Collaboration/>
      <Footer/>
      
    </>
  )
}

export default App
