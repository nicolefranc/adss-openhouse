import React, {useRef, useEffect} from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
// import hero from "../assets/images/hero.jpg"
import addy from "../assets/images/addy_mascot.jpg"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import MotionPathPlugin from "gsap/MotionPathPlugin"
import { Link } from "gatsby"

export default function Home() {
  let svg = useRef(null);
  let ball01 = useRef(null);
  let ball02 = useRef(null);
  let ball03 = useRef(null);
  let ball04 = useRef(null);
  let ball05 = useRef(null)
  let ball06 = useRef(null);
  let ball07 = useRef(null);
  let ball08 = useRef(null);
  let ball09 = useRef(null);
  let ball10 = useRef(null);
  let ball11 = useRef(null);
  let ball12 = useRef(null);
  let ball13 = useRef(null);
  // TEXT REF
  let text01 = useRef(null);
  let text02 = useRef(null);
  let text03 = useRef(null);
  let text04 = useRef(null);
  let text05 = useRef(null);
  let text06 = useRef(null);
  let text07 = useRef(null);
  let text08 = useRef(null);
  let text09 = useRef(null);
  let text10 = useRef(null);
  let text11 = useRef(null);
  let text12 = useRef(null);
  // LINE REF
  let theLine = useRef(null);
  let line01 = useRef(null);
  let line02 = useRef(null);
  let line03 = useRef(null);
  let line04 = useRef(null);
  let line05 = useRef(null);
  let line06 = useRef(null);
  let line07 = useRef(null);
  let line08 = useRef(null);
  let line09 = useRef(null);
  let line10 = useRef(null);
  let line11 = useRef(null);
  let line12 = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    gsap.defaults({ease: "none"});

    gsap.set(ball01, {xPercent: -50, yPercent: -50})
    gsap.set(ball02, {xPercent: -50, yPercent: -50})
    gsap.set(ball03, {xPercent: -50, yPercent: -50})
    gsap.set(ball04, {xPercent: -50, yPercent: -50})
    gsap.set(ball05, {xPercent: -50, yPercent: -50})
    gsap.set(ball06, {xPercent: -50, yPercent: -50})
    gsap.set(ball07, {xPercent: -50, yPercent: -50})
    gsap.set(ball08, {xPercent: -50, yPercent: -50})
    gsap.set(ball09, {xPercent: -50, yPercent: -50})
    gsap.set(ball10, {xPercent: -50, yPercent: -50})
    gsap.set(ball11, {xPercent: -50, yPercent: -50})
    gsap.set(ball12, {xPercent: -50, yPercent: -50})
    gsap.set(ball13, {xPercent: -50, yPercent: -50})

    var tl = gsap.timeline({
      defaults: {
        duration: 0.01, 
        autoAlpha: 1, 
        scale: 2, 
        transformOrigin: 'center', 
        ease: "elastic(2.5, 1)"
      }})
      // .to(".ball02, .text01", {}, 0.2)
      // .to(".ball03, .text02", {}, 0.33)
      // .to(".ball04, .text03", {}, 0.46)
      .to([ball02, text01], {}, 0.08)
      .to([ball03, text02], {}, 0.13)
      .to([ball04, text03], {}, 0.18)
      .to([ball05, text04], {}, 0.24)
      .to([ball06, text05], {}, 0.30)
      .to([ball07, text06], {}, 0.41)
      .to([ball08, text07], {}, 0.48)
      .to([ball09, text08], {}, 0.57)
      .to([ball10, text09], {}, 0.64)
      .to([ball11, text10], {}, 0.71)
      .to([ball12, text11], {}, 0.79)
      .to([ball13, text12], {}, 0.91)

    var action = gsap.timeline({defaults: {duration: 1},
      scrollTrigger: {
        trigger: "#svg",
        // trigger: "#target",
        scrub: true,
        start: "top center",
        end: "bottom center"
      }})
      // .to(".ball01", {duration: 0.01, autoAlpha: 1})
      // .to(".ball01", {motionPath: {path: ".theLine", alignOrigin: [0.5, 0.5]}}, 0)
      .to(ball01, {duration: 0.01, autoAlpha: 1})
      .to(ball01, {motionPath: {path: theLine, alignOrigin: [0.5, 0.5]}}, 0)
      .add(tl, 0);

  }, [])

  return (
    // <div className="bg-sky relative">
    //   <h2 className="absolute right-0 left-0 bottom-0 w-40 mx-auto mb-8 px-4 py-3 bg-scroll-red text-white tracking-widest uppercase text-center rounded-md cursor-pointer">
    //     Explore
    //   </h2>
    //   <img src={hero} alt="Admiralty Secondary School welcomes you."
    //     className="h-screen w-100 mx-auto" />
    // </div>
    <Layout>
      <Hero />

      <svg ref={el => (svg = el)} id="svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 600 2600">
        {/* <path ref={el => (line01 = el)} className="line01 line" d="M 10 200  600 200" ></path>
        <path ref={el => (line02 = el)} className="line02 line" d="M 10 400  600 400" ></path>
        <path ref={el => (line03 = el)} className="line03 line" d="M 10 600  600 600" ></path>
        <path ref={el => (line04 = el)} className="line04 line" d="M 10 800  600 800" ></path>
        <path ref={el => (line05 = el)} className="line05 line" d="M 10 1000 600 1000" ></path>
        <path ref={el => (line06 = el)} className="line05 line" d="M 10 1200 600 1200" ></path>
        <path ref={el => (line07 = el)} className="line05 line" d="M 10 1400 600 1400" ></path>
        <path ref={el => (line08 = el)} className="line01 line" d="M 10 1600 600 1600" ></path>
        <path ref={el => (line09 = el)} className="line02 line" d="M 10 1800 600 1800" ></path>
        <path ref={el => (line10 = el)} className="line03 line" d="M 10 2000 600 2000" ></path>
        <path ref={el => (line11 = el)} className="line04 line" d="M 10 2200 600 2200" ></path>
        <path ref={el => (line12 = el)} className="line05 line" d="M 10 2400 600 2400" ></path> */}
        {/* CONTENT */}
        <img className="absolute" src={addy} height="200" width="200"/>
        <text ref={el => (text01 = el)} className="text01" x="60" y="190">
          <Link to="explore/art-room">Art Room</Link>
        </text>
        <text ref={el => (text02 = el)} className="text02" x="120" y="390">
          <Link to="explore/canteen">Canteen</Link>
        </text>
        <text ref={el => (text03 = el)} className="text03" x="320" y="590">
          <Link to="explore/classroom">Classroom</Link>
        </text>
        <text ref={el => (text04 = el)} className="text04" x="220" y="790">
          <Link to="explore/foyer">Foyer</Link>
        </text>
        <text ref={el => (text05 = el)} className="text05" x="40" y="990">
          <Link to="explore/ict-space">ICT Space</Link>
        </text>
        <text ref={el => (text06 = el)} className="text06" x="255" y="1190">
          <Link to="explore/indoor-sports-hall">Indoor Sports Hall</Link>
        </text>
        <text ref={el => (text07 = el)} className="text07" x="355" y="1390">
          <Link to="explore/laboratories">Laboratories</Link>
        </text>
        <text ref={el => (text08 = el)} className="text08" x="320" y="1590">
          <Link to="explore/library">Library</Link>
        </text>
        <text ref={el => (text09 = el)} className="text09" x="130" y="1790">
          <Link to="explore/parade-square">Parade Square</Link>
        </text>
        <text ref={el => (text10 = el)} className="text10" x="410" y="1990">
          <Link to="explore/quadrangle">Quadrangle</Link>
        </text>
        <text ref={el => (text11 = el)} className="text11" x="160" y="2190">
          <Link to="explore/school-field">School Field</Link>
        </text>
        <text ref={el => (text12 = el)} className="text12" x="240" y="2390">
          <Link to="explore/school-hall">School Hall</Link>
        </text>

        <path ref={el => (theLine = el)} className="theLine" 
              d="M -5,0
                Q 450 230 300 450 
                T 130 750
                Q 100 950 300 1000
                T 200 1100
                Q 40 1195 50 1275
                T 150 1375
                Q 550 1550 550 1600
                T 520 1700
                Q 450 1800 250 1900
                T 300 2000
                Q 400 2000 460 2200
                T 300 2300
                Q 5 2200 120 2700
                "
              fill="none" stroke="#ddd" strokeWidth="10px" strokeDasharray="20,20" />
        
        <circle ref={el => (ball01 = el)} className="ball ball01" r="20" cx="25" cy="25"></circle>
        <circle ref={el => (ball02 = el)} className="ball ball02" r="20" cx="298" cy="221"></circle>
        <circle ref={el => (ball03 = el)} className="ball ball03" r="20" cx="347" cy="419"></circle>
        <circle ref={el => (ball04 = el)} className="ball ball04" r="20" cx="223" cy="621"></circle>
        <circle ref={el => (ball05 = el)} className="ball ball05" r="20" cx="150" cy="820"></circle>
        <circle ref={el => (ball06 = el)} className="ball ball06" r="20" cx="312" cy="1021"></circle>
        <circle ref={el => (ball07 = el)} className="ball ball07" r="20" cx="105" cy="1219"></circle>
        <circle ref={el => (ball08 = el)} className="ball ball08" r="20" cx="223" cy="1421"></circle>
        <circle ref={el => (ball09 = el)} className="ball ball09" r="20" cx="560" cy="1620"></circle>
        <circle ref={el => (ball10 = el)} className="ball ball10" r="20" cx="448" cy="1819"></circle>
        <circle ref={el => (ball11 = el)} className="ball ball11" r="20" cx="263" cy="2021"></circle>
        <circle ref={el => (ball12 = el)} className="ball ball12" r="20" cx="480" cy="2215"></circle>
        <circle ref={el => (ball13 = el)} className="ball ball13" r="20" cx="110" cy="2425"></circle>
      </svg>
      <h1 className="m-40 text-6xl">THANK YOU!</h1>
    </Layout>
  )
}
