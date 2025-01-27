import './App.css'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Hero from './Components/Hero'
import MouseLight from './Components/MouseLight'
import Experience from './Components/Experience'
import LeftLane from './Components/LeftLane'
import RightLane from './Components/Rightlane'
<script src="https://kit.fontawesome.com/8c84d65625.js" crossorigin="anonymous"></script>



function App() {
  return (
    <div>
      <LeftLane />
      <RightLane />
      <Navbar />
      <br />
      <Hero />
      <Projects />
      <Projects />
      <Experience />
    </div>
    
  )
}


export default App
