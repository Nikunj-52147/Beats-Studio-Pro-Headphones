
import './App.css'
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import SplitText from 'gsap/src/SplitText';
import Hero from "./pages/Hero";
import Product_Information from "./pages/Product_Information";
import Product_Demo from './pages/Product_Demo';
import Available_Colors from './pages/Available_Colors';
import Sound_Profiles from './pages/Sound_Profiles';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

function App() {

  const smootherRef = useRef(null);

  const headphoneRef = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  
  const readRef = useRef(null);
  const comfortRef = useRef(null);
  const sec2Ref = useRef(null);

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 4,
      effects: true,
    });

    smootherRef.current = smoother;

    return () => smoother.kill();
  }, []);
 

  
  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 991px)": () => {


      const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section2Ref.current,        
        start: "top bottom",
        endTrigger: section4Ref.current,    
        end: "bottom bottom",
        scrub: true,
      }
    });

    
    tl.to(headphoneRef.current, {
      
      y: "30vh",
      x: "-50vw",
     
      scale: 1,           
      rotate: 45,
      ease: "power1.inOut",
      immediateRender: false
    });

    
    tl.to(headphoneRef.current, {
      y: "230vh",
      x: "-27vw",
      scale: 1.15,           
      rotate: 15,
      ease: "power1.inOut",
      immediateRender: false
    });

    tl.to(headphoneRef.current, {
      y: "355vh",
      x: "36vw",
      width: 360,           
      rotate: 1,
      ease: "power1.inOut",
      immediateRender: false
    });

     gsap.from(textRef.current.children, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section5Ref.current,
          start: "top 80%",
        },
      });

      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: section5Ref.current,
          start: "top 80%",
        },
      });

       let split = SplitText.create('#section1 .heading', {
      type: 'chars, words, lines',
      mask: 'lines'
    });

     gsap.from(readRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: headphoneRef.current,
          start: "top 80%",
        },
      });

     gsap.from(comfortRef.current.children, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: headphoneRef.current,
          start: "top 80%",
        },
      });

     gsap.from(sec2Ref.current.children, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 90%",
        },
      });

    gsap.from(split.chars, {
      yPercent: ()=> gsap.utils.random(-100, 100),
      rotation: ()=> gsap.utils.random(-30, 30),
      autoAlpha: 0,
      ease: 'back.out(1.5)',
      stagger: {
        amount: 0.5,
        from: 'random'
      },
      duration: 1.5
    });

    gsap.from('#headphone', {
      opacity: 0,
      scale: 0,
      duration: 1,
      delay: 1,
      ease: 'power1.inOut'
    })

      }
    });
  });

  return () => ctx.revert();
}, []);


  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero imgRef={headphoneRef} readRef={readRef} comfortRef={comfortRef}/>
          <Product_Information s2={section2Ref} sec2ref={sec2Ref} />
          <Product_Demo s3={section3Ref}/>
          <Available_Colors s4={section4Ref}/>
          <Sound_Profiles s5={section5Ref} textRef={textRef} imageRef={imageRef}/>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
