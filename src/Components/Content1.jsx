import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Content1 = () => {
  const Textref0 = useRef();
  const Textref1 = useRef();
  const Textref2 = useRef();
  const Textref3 = useRef();
  useGSAP(() => {
    gsap.fromTo(
      Textref0.current,
      {
        x: -1000,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.7,
        ease: "back.out(1.7)",
      }
    );
    gsap.fromTo(
      Textref1.current,
      {
        x: -1000,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.8,
        ease: "back.out(1.7)",
      }
    );
    gsap.fromTo(
      Textref2.current,
      {
        x: -1000,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.9,
        ease: "back.out(1.7)",
      }
    );
    gsap.fromTo(
      Textref3.current,
      {
        x: -1000,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.6,
        ease: "back.out(1.7)",
      }
    );
  });
  return (
    <>
      <div className="ml-15">
        <div>
          <h1 ref={Textref0} className="tracking-[-15px] uppercase text-white">
            I am Developer
          </h1>
        </div>
        <div>
          <h1
            ref={Textref1}
            className="tracking-[-15px] uppercase text-stroke1 text-stroke-lg"
          >
            I am Developer
          </h1>
        </div>
        <div>
          <h1
            ref={Textref2}
            className="tracking-[-15px] uppercase text-stroke2 text-stroke-lg"
          >
            I am Developer
          </h1>
        </div>
        <div>
          <h1
            ref={Textref3}
            className="tracking-[-15px] uppercase text-stroke3 text-stroke-lg"
          >
            I am Developer
          </h1>
        </div>
      </div>
    </>
  );
};

export default Content1;
