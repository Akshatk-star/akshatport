import React from "react"
import { Hero } from "../pages/Hero"
import { About } from "../pages/About"
import { Portfolio } from "../pages/Portfolio"
import { Footer } from "../pages/Footer"
import { Navbar } from "../pages/Navbar"

function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Portfolio/>
    <Footer/>
    </>
  )
}

export default App