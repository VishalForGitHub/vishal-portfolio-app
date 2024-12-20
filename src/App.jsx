import { useState } from 'react'
import './App.css'
import Home from './Pagess/home/Home'
import About from './Pagess/About/About'
import Experience from './Pagess/Experience/Experience'
import Projects from './Pagess/Projects/Projects'
import Contact from './Pagess/Contact/Contact'
function App() {
 return (
    <>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}

export default App
