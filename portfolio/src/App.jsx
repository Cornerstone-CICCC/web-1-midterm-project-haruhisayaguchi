import { useEffect, useRef, useState } from 'react'
import { useInView, motion } from "framer-motion"
import './App.css'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Works from './components/works/Works'
import LocaleContextProvider from './store/language-store'

function App() {
  return (
    <LocaleContextProvider>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Works />
        <div className="scroll-spacer" aria-hidden="true" />
      </main>
      <Footer />
    </LocaleContextProvider>
  )
}

export default App
