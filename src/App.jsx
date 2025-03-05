import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ProjectCard from './Components/ProjectCard'
import MouseLight from './Components/MouseLight'
import LeftLane from './Components/LeftLane'
import ProjectCard2 from './Components/ProjectCard2'
import Rightlane from './Components/RightLane.jsx'
import ExperienceSection from './Components/ExperienceCard.jsx'
<script src="https://kit.fontawesome.com/8c84d65625.js" crossorigin="anonymous"></script>



function App() {
  return (
    <div>
      
      <MouseLight />
      <LeftLane />
      <Rightlane />
      <Navbar />
      <Hero />
      <ProjectCard />
      <br />
      <ProjectCard2 />
      <ExperienceSection />
      <div className="text-center text-yellow-400 text-4xl font-extrabold bg-black p-4 rounded-lg shadow-lg animate-pulse-slow"> Portfolio en desarrollo... </div>

    </div>
    
  )
}


export default App
