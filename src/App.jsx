import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ProjectCard from './Components/ProjectCard'
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
      <ProjectCard />
      <br />
      <ProjectCard />
      
      <Experience />
    </div>
    
  )
}


export default App
