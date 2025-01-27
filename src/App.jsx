import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ProjectCard from './Components/ProjectCard'
import MouseLight from './Components/MouseLight'
import Experience from './Components/Experience'
import LeftLane from './Components/LeftLane'
import ProjectCard2 from './Components/ProjectCard2'
import Rightlane from './Components/RightLane.jsx'
<script src="https://kit.fontawesome.com/8c84d65625.js" crossorigin="anonymous"></script>



function App() {
  return (
    <div>
      
      <MouseLight />
      <LeftLane />
      <Rightlane />
      <Navbar />
      <br />
      <Hero />
      <div className="text-center text-yellow-400 text-5xl font-bold">(Sitio web en construcción)</div>
      <ProjectCard />
      <br />
      <ProjectCard2 />
      <Experience />
      
      
    </div>
    
  )
}


export default App
