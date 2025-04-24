import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import gsap from "gsap";
import { All } from "../assets/All";
import { motion } from "framer-motion";
import { img } from "motion/react-client";

const Projects = ({ mousepostionx, mousepostiony }) => {
  const [ProjextText] = useState(["p", "r", "o", "j", "e", "c", "t"]);
  const [hoverID, setHoverID] = useState(0);
  const letterRefs = useRef([]);
  const clickmeRef = useRef();
  const ProjectList = useRef();
  const [filters, setfilters] = useState("All");
  const [imghide, setimgHide] = useState(false);
  const ShowImgRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  const ProjectpageAnimationRef = useRef();
    useGSAP(() => {
    //   gsap.set(ProjectpageAnimationRef.current, {
    //     ClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    //   });
    //   gsap.from(ProjectpageAnimationRef.current, {
    //     clipPath: "polygon(5% 0%, 90% 0%, 70% 90%, 30% 90%)",
    //     duration: 1,
    //     ease: "power4.inOut",
    //     scrollTrigger: {
    //       trigger: ProjectpageAnimationRef.current,
    //       start: "-10% 70%",
    //       end: "40% 50%",
    //       scrub: 1,
    //       markers:true
    //     },
    //   });
    // gsap.to(text1Ref.current, {
    //   xPercent: () => getRandomInt(translate),
    //   yPercent: () => getRandomInt(translate),
    //   rotation: () => getRandomInt(rotate),
    //   ease: "expo.out",
    //   duration: 2
    // });
    gsap.fromTo(
      letterRefs.current,
      {
        x: () => gsap.utils.random(-100, 100), // Random X position
        y: () => gsap.utils.random(-100, 100), // Random Y position
        rotation: () => gsap.utils.random(-180, 180), // Random rotation
        opacity: 0, // Start with opacity 0
      },
      {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1, // Delays each letter animation
        ease: "power3.out",
      }
    );
    });
  const handerEnter = (e)=>{
  gsap.to(clickmeRef.current,{
    x:-100,
    duration:0.5,
    ease:'power4.inOut'
  })
  }
    const handelClick = (e) => {

      gsap.to(letterRefs.current, {
        x: () => gsap.utils.random(-100, 100), // Scatter randomly
        y: () => gsap.utils.random(-100, 100),
        rotation: () => gsap.utils.random(-180, 180),
        opacity: 0.5, // Reduce visibility slightly
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.inOut",
      });

  };

    const handleLeave = () => {
      
      gsap.to(clickmeRef.current,{
        x:30,
        duration:0.5,
         ease:'power4.inOut'
      })

      gsap.to(letterRefs.current, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power3.out",
      });
    };

  return (
    <div id="projects"
      ref={ProjectpageAnimationRef}
      className="h-screen w-full flex flex-col items-start overflow-x-hidden px-10 text-[#D3D9D4] "
    >
      <div className="flex items-baseline gap-x-10 relative w-full mb-5 font-mono">
      <div  ref={clickmeRef} className="absolute h-30 -right-30 top-8 after:content-['Wanna_see_magic?'] after:block after:absolute after:text-center after:-mt-4">
  <img
   
    src="/public/imgs/mario.png"
    className="h-[10vw]"
    alt=""
  />
</div>

        <h1
          onMouseEnter={(e) => handerEnter(e)}
          onClick={(e) => handelClick(e)}
          onMouseLeave={(e) => handleLeave(e)}
          className=' inline text-[10vw] font-extralight relative , font-["Inter"] tracking-tight cursor-pointer'
        >
          {ProjextText.map((e, index) => (
            <span
              key={index}
              ref={(el) => (letterRefs.current[index] = el)} // Assign each span to refs
              className="inline-block"
            >
              {e}
            </span>
          ))}
        </h1>

        <select
          onChange={(e) => setfilters(e.target.value)}
          className="bg-black text-center"
        >
          <option value="All">All</option>
          <option value="frontend">Frontend</option>
          <option value="threejs">Threejs</option>
          <option value="API">API</option>
        </select>
      </div>
      <div className="overflow-y-auto overflow-x-hidden w-full ">
        {All.filter((ele) => {
          return filters == "All" || filters == ele.category;
        }).map((ele, idx) => (
          <motion.div
            key={idx}
            className=" relative h-10 w-full p-10"
            onMouseEnter={(e) => {
              setHoverID(ele.id)
            }}
            onMouseLeave={() => {
              setHoverID(null)
          
            }}
            onMouseMove={(e) => {
              imghide?
              gsap.to(ShowImgRef.current, {
                opacity:0,
                scale: 0,
                duration:0.3,
                ease:'power4.inOut'
              })
              :gsap.to(ShowImgRef.current, {
                opacity:1,
                scale: 1.2,
                x: e.clientX-200,
                y: e.clientY+600,
                duration: 0.2,
              });
            }}
            whileHover={{
              scale: 1.05,
              transition: {duration: 0.8, ease: [0, 0.71, 0.2, 1.01] },
            }}
            
          >
            
              <motion.img key={idx}
                src={`/imgs/ProjectID_${hoverID}.png`}
                ref={ShowImgRef}
                className="fixed top-0 h-30 z-[-1] rounded-lg scale-0 pointer-events-none opacity-0"
              />
            
            <div className="flex items-center justify-between ">
              <h1 className="text-2xl">{ele.name}</h1>
              <a onMouseEnter={()=>{setimgHide(true)}}
              onMouseLeave={()=>{setimgHide(false)}}	
             
              
                target="_blank"
                href={ele.link}
                className=" hover:underline hover:text-[#F4B931] h-15 w-40 text-center"
              >
                Live-link
              </a>
            </div>
            <div className="h-[1px]  mt-2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
