import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from "three";
import Vertex from "../Shaders/Vertex.glsl";
import Fragment from "../Shaders/Fragment.glsl";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ThreeJSModel = () => {

    gsap.registerPlugin(ScrollTrigger);
  const landing = useRef(null);
  const canvas = useRef();
  useEffect(() => {
    setLoading(true)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );

    const geometry = new THREE.IcosahedronGeometry(3, 50);
    const mesh = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0.0 },
        uColor:{ value:0},
      },
      
      vertexShader: Vertex,
      fragmentShader: Fragment,
    });
    const sphere = new THREE.Mesh(geometry, mesh);
    sphere.position.y = -2;
    scene.add(sphere);

    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas: canvas.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: landing.current,
        start: "-20% 1%", // Adjust this as needed
        end: "60% 40%", // Adjust this as needed
      scrub:2,
      },
    });
    tl.to(sphere.position, {
      y: 0,
      z: -3,
      duration: 1,
      ease: "power2.inOut",
    },"a").to(mesh.uniforms.uColor,{
      value:1,
      ease:'power2.inOut',
    },"a")

    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);

      mesh.uniforms.uTime.value = clock.getElapsedTime();
      console.log(mesh.uniforms.uColor.value) 
      renderer.render(scene, camera);
    }
    animate();
    setLoading(false)
  }, []);
  return (
    <>
   
       <canvas
            ref={canvas}
            className=" pointer-events-none sticky h-max mt-20"
          ></canvas>
    </>
  )
}

export default ThreeJSModel
