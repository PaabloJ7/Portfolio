import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ProjectCard from './Components/ProjectCard'
import MouseLight from './Components/MouseLight'
import LeftLane from './Components/LeftLane'
import Rightlane from './Components/RightLane.jsx'
import ExperienceSection from './Components/ExperienceCard.jsx'
import Contact from './Components/Contact.jsx'
import ProjectsSection from './Components/ProjectsSection';
import Footer from './Components/Footer.jsx'
<script src="https://kit.fontawesome.com/8c84d65625.js" crossorigin="anonymous"></script>



function App() {
  return (
    <div>
      
      <MouseLight />
      <LeftLane />
      <Rightlane />
      <Navbar />
      <Hero />
      <hr className="section-divider" />
      <ProjectsSection />
      <hr className="section-divider" />
      <ExperienceSection />
      <hr className="section-divider" />
      <Contact />
      <Footer />


    </div>
    
  )
}


export default App
