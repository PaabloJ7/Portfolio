import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ProjectCard from './Components/ProjectCard'
import MouseLight from './Components/MouseLight'
import LeftLane from './Components/LeftLane'
import ProjectCard2 from './Components/ProjectCard2'
import Rightlane from './Components/RightLane.jsx'
import ExperienceSection from './Components/ExperienceCard.jsx'
import Contact from './Components/Contact.jsx'
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
      <br />
      <ExperienceSection />
      <Contact />

    </div>
    
  )
}


export default App
