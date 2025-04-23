import React,{useRef}  from 'react'
import Links from '../assets/Socialmedialinks';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { main } from 'motion/react-client';

const Footer = () => {
  const homearrow = useRef()
  useGSAP(()=>{
    gsap.to(homearrow.current, {
      y:-30,
      duration:1,
      repeat:-1,
      yoyo:1,
      ease:'power1.inOut',
    })
  })
  return (
    <div className=" w-full h-40 flex bg-[#1b1b1b] text-zinc-200 font-light relative z-[102]">
      <a ref={homearrow} className="absolute top-10 right-10 p-5 bg-[#0000003d] rounded-full" href="#home"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D3D9D4"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/></svg></a>
      <div className="w-1/2 h-full pl-20 py-5 flex justify-between ">
        <div className="h-full w-max flex items-center ">
          <img className="h-30 w-30" src="/imgs/Tlogo.png" alt="" />
          <p className="text-white font-extralight italic opacity-70">
            © 2023 Harsh Bhakre. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col w-max justify-center ">
          <a className='hover:text-[#F4B931] hover:underline duration-300 transition-all drop-shadow' href="#about">About</a>
          <a className='hover:text-[#F4B931] hover:underline duration-300 transition-all drop-shadow' href="#projects">Projects</a>
          <a className='hover:text-[#F4B931] hover:underline duration-300 transition-all drop-shadow' href="mailto:harshbhakreh3@gmail.com">Contact</a>
          <a className='hover:text-[#F4B931] hover:underline duration-300 transition-all drop-shadow' href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
      <div className="w-1/2 h-full px-20 py-5 flex">
        <div className="flex flex-col w-1/4 justify-center">
          {Links.map((link, index) => (
            <a
              className="hover:text-[#F4B931] hover:underline duration-300 transition-all drop-shadow"
              href={link.url}
              key={index}
            >
              {link.platform}
            </a>
          ))}
        </div>
        <div className="w-full h-full flex flex-col justify-end">
            
            <p className="text-sm italic opacity-70">
  Spot a bug or got an idea? Drop your <a className='underline' href="mailto:harshbhakreh3@gmail.com">feedback</a> — I'm all ears!
</p>
       
        </div>
      </div>
    </div>
  );
}

export default Footer