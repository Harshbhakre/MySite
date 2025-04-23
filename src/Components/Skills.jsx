import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Icons from '../assets/SkillsIcons';

const Skills = () => {
  const containerRef = useRef();
  const iconTrackRef = useRef();
  const timelineRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const track = iconTrackRef.current;

    const iconWidth = 120; // Approx width of one icon + margin
    const totalIcons = track.children.length;

    // Duplicate icons for seamless scroll
    const clone = track.innerHTML;
    track.innerHTML += clone;

    // Set width dynamically
    gsap.set(track, {
      width: totalIcons * iconWidth * 2, // Double for loop
    });

    // Infinite horizontal loop with modifiers
    timelineRef.current = gsap.to(track, {
      x: `-=${totalIcons * iconWidth}`, // Full loop distance
      duration: 50,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % (totalIcons * iconWidth)), // Wrap around
      },
    });

    const handleWheel = (e) => {
      const direction = e.deltaY > 0 ? 1 : -1;
      const tl = timelineRef.current;
      tl.timeScale(direction); // just reverse the direction
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div
      ref={containerRef}
      className='absoulte top-10 h-max w-full flex flex-col justify-center items-center overflow-hidden text-white'
    >
      <div
        ref={iconTrackRef}
        className='flex items-center gap-10'
      >
        {Icons.map((icon) => (
          <div key={icon.name} className='flex flex-col items-center min-w-[100px]'>
            <img src={icon.icon} alt={icon.name} className='h-15 w-15' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
