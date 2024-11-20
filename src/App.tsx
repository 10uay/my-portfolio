import './App.css'

import Hero from './MyComponents/Hero.jsx'
import { Navbar } from './MyComponents/Navbar.jsx'
import { Knowledage } from "./MyComponents/Knowledage.jsx"
import { Projects } from './MyComponents/Projects.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Knowledage />
    </>
  )
}

export default App
