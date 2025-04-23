import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Navbar = () => {
    const ResumewhitebgRef = useRef()
    let rotated = false;

const handleMouseEnter = () => {
    if (!rotated) {
        gsap.to(ResumewhitebgRef.current, {
            rotate: 180,
            duration: 0.5,
            ease: "power1.inOut",
        });
    } else {
        gsap.to(ResumewhitebgRef.current, {
            rotate: 0,
            duration: 0.5,
            ease: "power1.inOut",
        });
    }
    rotated = !rotated;
};
  return (
    <div className='sticky top-140 h-12 w-full flex justify-center items-center z-[101]'>
      <div className='bg-[#1b1b1b56] h-full w-[60%] rounded-3xl backdrop-blur-lg flex justify-between items-center px-10'>
        <div>
            <img className='h-10' src="/imgs/Tlogo.png" alt="" />
        </div>
        <div className='flex gap-3 text-sm font-thin'>
            <a className='hover:underline' href="#home">Home</a>
            <a className='hover:underline' href="#projects">Projects</a>
            <a className='hover:underline' href="mailto:harshbhakreh3@gmail.com">Contact</a>
        </div>
        <div className='relative'>
            <span ref={ResumewhitebgRef} className='absolute rop-0 -right-3 h-7 w-20 bg-[#D3D9D4] z-[-1] rounded-full'></span>
            <a 
            onMouseEnter={()=>{
                handleMouseEnter() 
            }}
            className='cursor-pointer text-black'  href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
