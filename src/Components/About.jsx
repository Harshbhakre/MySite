import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [firstparaSpan, setfirstparaSpan] = useState()
  const [secondparaSpan, setsecondparaSpan] = useState()
  const [thirdparaSpan, setthirdparaSpan] = useState()
  const AboutanimationRef = useRef()
  useGSAP(() => {
    gsap.from(AboutanimationRef.current.querySelectorAll("p"), {
      y: 80,
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
      stagger: 0.5,
      scrollTrigger: {
        trigger: AboutanimationRef.current,
        start: "top 70%",
        end: "60% 50%",
        scrub: 2,
      }
    });
  });
  return (
    <div id="about" className="h-max p-10 bg-[#060704] flex justify-between w-full font-light">
      <div ref={AboutanimationRef} className="h-150 w-full mr-10 pt-20  flex flex-col gap-y-10">
        <div onMouseEnter={()=>{setfirstparaSpan("text-[#F4B931] transition-all ease-in-out duration-300 drop-shadow")}}
        onMouseLeave={()=>{setfirstparaSpan("")}}>
          <h5 className="font-semibold text-2xl text-[#F4B931]">About Me</h5>
          <p className="  cursor-pointer">
            I'm Harsh Bhakre, a passionate <span className={firstparaSpan}>Full Stack Developer</span> from Nagpur,
            specializing in creating dynamic and user-friendly web applications.
          </p>
        </div>
        <div onMouseEnter={()=>{setsecondparaSpan("text-[#F4B931] transition-all ease-in-out duration-300 drop-shadow")}}
        onMouseLeave={()=>{setsecondparaSpan("")}}>
          <h5 className="font-semibold text-2xl text-[#F4B931]">What I DO</h5>
          <p className="mb-2">
            My main areas of expertise are <span className={secondparaSpan}>
            Frontend Development, Backend
            Development, and a bit of UI/UX</span>. I enjoy building complete web
            applications—from designing clean and responsive user interfaces to
            developing secure and efficient server-side logic.
          </p>
          <p>
            I mostly work with technologies like <span className={secondparaSpan}>React, Node.js, Express,
            MongoDB, and Tailwind CSS</span>. I also have experience with <span className={secondparaSpan}>
            REST APIs,
            JWT authentication</span>, and using tools like <span className={secondparaSpan}>Vite, EJS, and Three.js</span> for
            3D projects.
          </p>
        </div>
        <div onMouseEnter={()=>{setthirdparaSpan('text-[#F4B931] transition-all ease-in-out duration-300 drop-shadow')}}
        onMouseLeave={()=>{setthirdparaSpan("")}}>
          <h5 className="font-semibold text-2xl text-[#F4B931]">Experience</h5>
          <p className=" cursor-pointer">
            My journey started with a love for <span className={thirdparaSpan}>Animation</span>, which later grew into
            <span className={thirdparaSpan}>building interactive web applications</span>. I’ve worked on various
            projects, from <span className={thirdparaSpan}>basic apps to 3D web apps</span> using
            Three.js.
          </p>
        </div>

      </div>
      <img src="/imgs/character.webp" className="h-150" alt="" />
      
    </div>
  );
};

export default About;
