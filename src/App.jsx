import React, { useEffect, useRef, useState } from "react";
import HomePage from "./Components/HomePage";
import { ReactLenis } from 'lenis/react'
import gsap from "gsap";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Analytics } from "@vercel/analytics/react"



const App = () => {
  //   const cursorRef  = useRef()
  const lenisRef = useRef()
    const [mousepostionx, setMousepostionx] = useState()
    const [mousepostiony, setMousepostiony] = useState()
  const updateMousePostion = (e)=>{
  setMousepostionx(e.clientX)
  setMousepostiony(e.clientY)
  }

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time)
    }
  
    const rafId = requestAnimationFrame(update)
  
    return () => cancelAnimationFrame(rafId)
  }, [])
  return (
    <>
      <ReactLenis root>
      <Analytics/>
      {/* <div ref={cursorRef} className="h-8 w-8 rounded-full absolute z-[50] top-0 bg-[#F4B931] opacity-0"></div> */}
      <Navbar />
      <HomePage />
      <Projects />
      <div className="h-max w-full overflow-hidden relative my-30">
        <Skills />
      </div>
      <About />
      <Contact />
      <Footer />
   
      </ReactLenis>
    </>
  );
};

export default App;
