import './App.css'
import About from './components/Aboutme/About'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import NavBar from './components/navbar/NavBar'
import Project from './components/projects/Project'
import Skill from './components/skills/Skill'

function App() {

  return (
    <>
    <NavBar />
    <Home />
    <Skill/>
    <Project/>
    <About/>
    <Footer/>

    </>
  )
}

export default App
