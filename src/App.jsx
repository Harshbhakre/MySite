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
    const cursorRef  = useRef()
  const lenisRef = useRef()

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
      {/* <div onMouseMove={(e)=>{
        gsap.to(cursorRef.current, {x: e.clientX, y: e.clientY, duration: 0.5, ease: "elastic.out(1, 0.9)"});
      }} className="relative">

      <div ref={cursorRef} className="h-15 w-15 rounded-full absolute top-0 flex bg-[#F4B931] blur-lg">
        <div className="h-1/2 w-full bg-white z-10 rounded-full" />
      </div> */}
      <Navbar />
      <HomePage />
      <Projects />
      <div className="h-max w-full overflow-hidden relative my-30">
        <Skills />
      </div>
      <About />
      <Contact />
      <Footer />
{/*    
      </div> */}
      </ReactLenis>
    </>
  );
};

export default App;
