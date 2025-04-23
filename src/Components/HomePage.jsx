import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Content1 from "./Content1";
import Content2 from "./Content2";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Links from "../assets/Socialmedialinks";

const HomePage = () => {
  const Aboutarrow = useRef()
  gsap.registerPlugin(ScrollTrigger);
  const homepageAnimationRef = useRef();

  useGSAP(()=>{
    gsap.to(Aboutarrow.current, {
      x: 5,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    })
  })

  return (
    <><div className="" id="home">
      <div
        ref={homepageAnimationRef}
        className='rounded-none h-screen w-full flex flex-col bg-black font-bold text-[13vw] font-["Newake Demo"] leading-38 overflow-hidden'
        >
        <div className="h-10 w-full mt-10 text-sm flex justify-between items-center px-22 z-[10]">
          <nav className="flex gap-6 ">
            <a
              href={Links[1].url}
              className="text-white font-thin cursor-pointer hover:underline"
              >
              Linkedin
            </a>
            <a
              href={Links[0].url}
              className="text-white font-thin cursor-pointer hover:underline"
              >
              Github
            </a>
            <a
              href={Links[3].url}
              className="text-white font-thin cursor-pointer hover:underline"
              >
              Vercel
            </a>
          </nav>
          <a
            href="#about"
            className="text-white font-thin cursor-pointer hover:underline"
            >
            About me{" "}
            <svg ref={Aboutarrow}
              className="inline "
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#e3e3e3"
              >
              <path d="m576-288-51-51 105-105H192v-72h438L525-621l51-51 192 192-192 192Z" />
            </svg>
          </a>
        </div>
        {/* <Content1 /> */}
        <Content2 />
      </div>
      </div>
    </>
  );
};

export default HomePage;
