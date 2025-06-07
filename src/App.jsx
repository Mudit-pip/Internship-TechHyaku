import { useState } from 'react'
import Header from './components/Header.jsx'
import Courses from './components/Courses.jsx'
import Collaboration from './components/Collaboration.jsx'
import Home from './components/Home.jsx'
import Video from './components/Video.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Courses/>
      <Collaboration/>
      <Video/>
    </>
  )
}

export default App
