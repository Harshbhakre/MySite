import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Content2 = () => {
  const canvasRef = useRef(null);
  const yellowAnimationRef = useRef();
  const heyheadinganimation = useRef(null);
  const [Loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      1,
      20
    );

    // Directional Light (stronger shadows & highlights)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 20);
    directionalLight.position.set(0, 1, 1); // Position above and to the side
    scene.add(directionalLight);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true // Add antialiasing for smoother edges
    });
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace; // Add this line to fix color space

    const frontTexture = new THREE.TextureLoader().load('/imgs/idcard.png');
    frontTexture.colorSpace = THREE.SRGBColorSpace; // Add this line to fix texture color

    // Create a BoxGeometry instead of PlaneGeometry to add thickness
    const geometry = new THREE.BoxGeometry(3.5, 6, 0.05); // Added 0.05 thickness
    // Create material for front
    const frontMaterial = new THREE.MeshPhysicalMaterial({
      map: frontTexture,
      metalness: 0.9, // Reduced metalness for better visibility
      roughness: 0.05, // Reduced roughness for a clearer look
      side: THREE.FrontSide
    });

    // Create mesh with front material
    const frontPlane = new THREE.Mesh(geometry, frontMaterial);

    // Add mesh to the scene
    scene.add(frontPlane);

    camera.position.z = 5;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.dampingFactor = 0.01;
    controls.enableDamping = true;
    controls.enableZoom = false;

    // Mouse movement tracking variables
    const mouse = new THREE.Vector2();
    const targetRotation = new THREE.Vector2();
    const currentRotation = new THREE.Vector2();
    const movementIntensity = 0.001; // Adjust this value to control movement intensity

    // Add mouse move event listener
    const onMouseMove = (event) => {
      // Calculate mouse position in normalized device coordinates (-1 to +1)
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Set target rotation based on mouse position and intensity
      targetRotation.x = mouse.y * Math.PI * movementIntensity * 50;
      targetRotation.y = mouse.x * Math.PI * movementIntensity * 50;
    };
    window.addEventListener('mousemove', onMouseMove);

    function animate() {
      requestAnimationFrame(animate);
      // Smoothly interpolate current rotation towards target rotation
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;

      // Apply rotation to plane
      frontPlane.rotation.x = currentRotation.x;
      frontPlane.rotation.y = currentRotation.y;
      controls.update();
      frontPlane.rotation.y = -0.3
      renderer.render(scene, camera);
    }
    animate()
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      renderer.setAnimationLoop(null);
    };
    setLoading(false)
  }, []);
  useGSAP(()=>{
    gsap.to(heyheadinganimation.current, {
      letterSpacing: "0em",
      duration: 1,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1, // infinite
    });
  gsap.from(".animated-text", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
      stagger: 1,
    });
  })

  return (
    <div className="h-200 w-full flex justify-center items-center z-0 ">
       {!Loading && <div className='absolute h-screen w-full z-[100] bg-black flex justify-center items-center'>
      <h1 className="text-[1em] text-[#F4B931]">Loading<span className="dot">.</span><span className="dot dot-delay-1">.</span><span className="dot dot-delay-2">.</span>
      <style>
      {`
        @keyframes bounce {
            0% { opacity: 0.2; }
  20% { opacity: 1; }
  100% { opacity: 0.2; }
        }
        .dot {
          display: inline-block;
          animation: bounce 1.4s infinite;
        }
        .dot-delay-1 {
          animation-delay: 0.2s;
        }
        .dot-delay-2 {
          animation-delay: 0.4s;
        }
      `}
    </style>
      </h1>
      </div>}
      {/* <div ref={yellowAnimationRef} className="h-[50vw] w-full absolute z-[50] top-0 bg-[#F4B931]"></div> */}
      <div  className="h-150 w-230 text-[#D3D9D4] pl-20 pt-40 leading-20 flex flex-col ">
        <h1 
          id="heading"
          className="leading-12  h-max tracking-tight cursor-pointer"
        >
          <span ref={heyheadinganimation} className="text-[10vw]">
            Hey!
          </span>{" "}
          <br />{" "}
          <span className="animated-text text-[4.8vw] ml-2 mr-10 text-[#F4B931] whitespace-nowrap">
          Looking for a Web Developer?
          </span>
        </h1>
        <p className="text-xl font-extralight mt-4 mx-4 animated-text">
        You've just landed at the right place. I craft dynamic, user-friendly web apps using modern frameworks.
        </p>
        {/* <a href=""></a> */}
      </div>
      <div className=" h-150 w-100 relative mr-30">
        <canvas ref={canvasRef} className="w-full h-full"></canvas>  
      </div>
    </div>
  );
};

export default Content2;
