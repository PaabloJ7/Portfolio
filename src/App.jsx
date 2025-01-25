import './App.css'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Hero from './Components/Hero'
import MouseLight from './Components/MouseLight'
import Experience from './Components/Experience'
import LeftLane from './Components/LeftLane'
import RightLane from './Components/RightLane'

function App() {
  return (
    <div>
      <LeftLane />
      <RightLane />
      <Navbar />
      <br />
      <Hero />
      <Projects />
      <Experience />
    </div>
    
  )
}


export default App
