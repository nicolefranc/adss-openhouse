import React, {useRef, useEffect} from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Header from '../components/Header';
import addy from "../assets/images/addy_mascot.jpg"
import island from "../assets/images/island.png"
import pin from "../assets/images/marker.png"
import bubble from "../assets/images/speech.png"
import fb from "../assets/images/facebook.svg"
import ig from "../assets/images/instagram.svg"
import web from "../assets/images/www-click-no-border.svg"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import MotionPathPlugin from "gsap/MotionPathPlugin"
import { Link } from "gatsby"

export default function Home() {
  // TEXT REF
  let text01 = useRef(null);
  let text02 = useRef(null);
  let text2pt5 = useRef(null);
  let text03 = useRef(null);
  let text3pt5 = useRef(null);
  // let text04 = useRef(null);
  // let text05 = useRef(null);
  let text06 = useRef(null);
  let text07 = useRef(null);
  let text08 = useRef(null);
  let text09 = useRef(null);
  let text10 = useRef(null);
  let text11 = useRef(null);
  let text12 = useRef(null);

  let scrollDist = useRef(null)
  let container = useRef(null)
  let addy = useRef(null)
  let path = useRef(null)

  const handleResize = () => {
      gsap.set(container, { left: window.innerWidth/2, top: window.innerHeight/2 })
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    console.log(window.innerWidth);
    
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    gsap.set(scrollDist, {width:'100%', height:'500%'})
    gsap.set(container, {position:'fixed', width:1980, height:1980, transformOrigin:'0 0', left:window.innerWidth/2, top:window.innerHeight/2})
        
    gsap.from(container, {opacity: 0, ease: 'power1.inOut', duration: 2}, 0.3);
    // set initial states
    var tl = gsap.timeline({
      defaults: {
        duration: 0.01,
        autoAlpha: 1,
        scale: 2,
        transformOrigin: 'center',
        ease: 'elastic(2.5, 1)'
      }
    })
      // .from(container, {opacity:0, ease:'power1.inOut', duration:1}, 0.3)
      .to(text01, {}, 0.04)
      .to(text02, {}, 0.08)
      .to(text2pt5, {}, 0.10)
      .to(text03, {}, 0.12)
      .to(text3pt5, {}, 0.16)
      // .to(text04, {}, 0.19)
      // .to(text05, {}, 0.22)
      .to(text06, {}, 0.26)
      .to(text07, {}, 0.29)
      .to(text08, {}, 0.31)
      .to(text09, {}, 0.32)
      .to(text10, {}, 0.38)
      .to(text11, {}, 0.40)
      .to(text12, {}, 0.46)

    //tween the svg path + circle
    var action = gsap.timeline({defaults:{ease:'none'}, scrollTrigger:{trigger:scrollDist, start:'top top', end:'bottom bottom', scrub:1}}) 
        .to(addy, {motionPath: {path: path, alignOrigin: [0.5, 0.5]}, immediateRender:true}, 0)
        .add(tl, 0)
        // .from('#p', {drawSVG:'0 0'}, 0)

    //move container to follow circle
    let povDelay = 0.1, 
        pos = { x:-1980, y:-1980 },
        xSet = gsap.quickSetter(container, "x", "px"),
        ySet = gsap.quickSetter(container, "y", "px");

    gsap.ticker.add(() => {  
      pos.x += (-gsap.getProperty(addy, 'x') - pos.x) * povDelay;
      pos.y += (-gsap.getProperty(addy, 'y') - pos.y) * povDelay;
      xSet(pos.x);
      ySet(pos.y);
    })

    return () => window.removeEventListener("resize", handleResize);

  }, [])

  return (
    <div>
      <main className="max-w-6xl px-6 xl:px-0 mx-auto">
        <Hero />
        <section>
          <div id="scrollDist" ref={el => (scrollDist = el)} className="absolute"></div>
          <div id="container" ref={el => (container = el)} className="absolute">
            <img src={island} width="100%" className="absolute" />
            <img id="c" ref={el => (addy = el)} src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fadmiraltysec.moe.edu.sg%2Fqql%2Fslot%2Farticles%2Fig01%2F05e0e6a48_544.png&f=1&nofb=1" width="120"
              className="absolute z-50" />
            <p className="absolute text-md tracking-wider w-48" style={{ top: 80, left: 490 }}>
              <span className="text-2xl">Hi, I'm Addy!</span>
              <br/>
              <span className="font-light">
                Scroll down to explore the school with me. Click on the various locations to find out more.
              </span>
            </p>
            {/* Social Icons */}
            <div className="flex flex-row absolute z-10" style={{ top: 1740, left: 170 }}>
              <a href="https://www.facebook.com/Admiralty-Secondary-School-105684431224254/">
                <img src={fb} alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="https://instagram.com/admiraltysecschool?igshid=1fcqyhbjhc66b">
                <img src={ig} alt="Instagram" className="w-8 h-8 ml-4" />
              </a>
              <a href="https://admiraltysec.moe.edu.sg/">
                <img src={web} alt="Website" className="w-8 h-8 ml-4" />
              </a>
            </div>
            {/* Contact Details */}
            <div className="absolute z-10"
              style={{ top: 1730, left: 370}}>
              <h1 className="text-xl font-semibold">Admiralty Secondary School</h1>
              <h2 className="italic pb-1">Be a guiding light that shines.</h2>
              <div className="flex items-center pt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                <p className="ml-2">31 Woodlands Crescent S(737916)</p>
              </div>
              <div className="flex items-center pt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <p className="ml-2">admiralty_ss[at]moe.edu.sg</p>
              </div>
              <div className="flex items-center pt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <p className="ml-2">6365 2774</p>
              </div>
            </div>
            
            {/* LOCATION LINKS */}
            <div>
              <div ref={el => text01 = el} className="text absolute z-10"
                style={{ top: 390, left: 820}}>
                <div className="flex items-center group cursor-pointer">
                  <img src={pin} alt="x" className="w-4 h-4 mr-1 transform group-hover:scale-150" />
                  <Link to="explore/ict-space">
                    <h1>ICT Space</h1>
                  </Link>
                </div>
              </div>
              <div ref={el => text02 = el} className="text absolute z-10"
                style={{ top: 440, left: 1220}}>
                <div className="flex items-center group cursor-pointer">
                  <img src={pin} alt="x" className="w-4 h-4 mr-1 transform group-hover:scale-150" />
                  <Link to="explore/art-room">
                    <h1>Art Room</h1>
                  </Link>
                </div>
              </div>
              <div ref={el => text2pt5 = el} className="text absolute z-10"
                style={{ top: 640, left: 1190}}>
                <div className="flex items-center group cursor-pointer">
                  <img src={pin} alt="x" className="w-4 h-4 mr-1 transform group-hover:scale-150" />
                  <Link to="explore/library">
                    <h1>Library</h1>
                  </Link>
                </div>
              </div>
              <div ref={el => text03 = el} className="text absolute z-10"
                style={{ top: 540, left: 840}}>
                <div className="flex items-center group cursor-pointer">
                  <img src={pin} alt="x" className="w-4 h-4 mr-1 transform group-hover:scale-150" />
                  <Link to="explore/classroom">
                    <h1>Classroom</h1>
                  </Link>
                </div>
              </div>
              <div ref={el => text3pt5 = el} className="text absolute z-10"
                style={{ top: 620, left: 580}}>
                <div className="flex items-center group cursor-pointer">
                  <img src={pin} alt="x" className="w-4 h-4 mr-1 transform group-hover:scale-150" />
                  <Link to="explore/laboratories">
                    <h1>Labs</h1>
                  </Link>
                </div>
              </div>
              {/* <div ref={el => text04 = el} className="text absolute z-10"
                style={{ top: 720, left: 520}}>
                <div className="flex items-center group cursor-pointer">
                  <img src={pin} alt="x" className="w-4 h-4 mr-1 transform group-hover:scale-150" />
                  <Link to="explore/music-room">
                    <h1>Music Room</h1>
                  </Link>
                </div>
              </div> */}

              {/* SPORTS ZONE */}
              {/* <div ref={el => text05 = el} className="text absolute z-10"
                style={{ top: 890, left: 820}}>
                <div className="flex items-center group cursor-pointer">
                  <img src={pin} alt="x" className="w-4 h-4 mr-1 transform group-hover:scale-150" />
                  <Link to="explore/harbour">
                    <h1>Harbour</h1>
                  </Link>
                </div>
              </div> */}
              <div ref={el => text06 = el} className="text absolute z-10"
                style={{ top: 780, left: 1080}}>
                <div className="flex items-center group cursor-pointer">
                  <img src={pin} alt="x" className="w-4 h-4 mr-1 transform group-hover:scale-150" />
                  <Link to="explore/school-field">
                    <h1>School Field</h1>
                  </Link>
                </div>
              </div>
              <div ref={el => text07 = el} className="text absolute z-10"
                style={{ top: 890, left: 1240}}>
                <div className="flex items-center group cursor-pointer">
                  <img src={pin} alt="x" className="w-4 h-4 mr-1 transform group-hover:scale-150" />
                  <Link to="explore/indoor-sports-hall">
                    <h1>Indoor Sports Hall</h1>
                  </Link>
                </div>
              </div>

              {/* REST ZONE */}
              {/* Canteen
              Foyer
              Parade Square
              Admiral Garden
              School Hall */}
              <div ref={el => text08 = el} className="text absolute z-10"
                style={{ top: 1120, left: 1420}}>
                <div className="flex items-center group cursor-pointer">
                  <img src={pin} alt="x" className="w-4 h-4 mr-1 transform group-hover:scale-150" />
                  <Link to="explore/canteen">
                    <h1>Canteen</h1>
                  </Link>
                </div>
              </div>
              <div ref={el => text09 = el} className="text absolute z-10"
                style={{ top: 1360, left: 1370}}>
                <div className="flex items-center group cursor-pointer">
                  <img src={pin} alt="x" className="w-4 h-4 mr-1 transform group-hover:scale-150" />
                  <Link to="explore/foyer">
                    <h1>Foyer</h1>
                  </Link>
                </div>
              </div>
              <div ref={el => text10 = el} className="text absolute z-10"
                style={{ top: 1090, left: 1080}}>
                <div className="flex items-center group cursor-pointer">
                  <img src={pin} alt="x" className="w-4 h-4 mr-1 transform group-hover:scale-150" />
                  <Link to="explore/parade-square">
                    <h1>Parade Square</h1>
                  </Link>
                </div>
              </div>
              <div ref={el => text11 = el} className="text absolute z-10"
                style={{ top: 1340, left: 990}}>
                <div className="flex items-center group cursor-pointer">
                  <img src={pin} alt="x" className="w-4 h-4 mr-1 transform group-hover:scale-150" />
                  <Link to="explore/admiral-garden">
                    <h1>Admiral Garden</h1>
                  </Link>
                </div>
              </div>
              <div ref={el => text12 = el} className="text absolute z-10"
                style={{ top: 1490, left: 720}}>
                <div className="flex items-center group cursor-pointer">
                  <img src={pin} alt="x" className="w-4 h-4 mr-1 transform group-hover:scale-150" />
                  <Link to="explore/school-hall">
                    <h1>School Hall</h1>
                  </Link>
                </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
              className="absolute">
              {/* <text ref={el => (text01 = el)} x="790" y="420">
                <Link to="explore/art-room">Art Room</Link>
              </text> */}
              {/* <text ref={el => (text02 = el)} className="text02" x="1150" y="490">
                <Link to="explore/canteen">Canteen</Link>
              </text> */}
              {/* <text ref={el => (text03 = el)} className="text03" x="850" y="650">
                <Link to="explore/classroom">Classroom</Link>
              </text> */}
              {/* <text ref={el => (text04 = el)} className="text04" x="410" y="700">
                <Link to="explore/foyer">Foyer</Link>
              </text> */}
              {/* <text ref={el => (text05 = el)} className="text05" x="680" y="790">
                <Link to="explore/ict-space">ICT Space</Link>
              </text> */}
              {/* <text ref={el => (text06 = el)} className="text06" x="1038" y="790">
                <Link to="explore/indoor-sports-hall">Indoor Sports Hall</Link>
              </text> */}
              {/* <text ref={el => (text07 = el)} className="text07" x="1250" y="1000">
                <Link to="explore/laboratories">Laboratories</Link>
              </text> */}
              {/* <text ref={el => (text08 = el)} className="text08" x="1290" y="1198">
                <Link to="explore/library">Library</Link>
              </text> */}
              {/* <text ref={el => (text09 = el)} className="text09" x="1000" y="1075">
                <Link to="explore/parade-square">Parade Square</Link>
              </text> */}
              {/* <text ref={el => (text10 = el)} className="text10" x="910" y="1220">
                <Link to="explore/quadrangle">Quadrangle</Link>
              </text> */}
              {/* <text ref={el => (text11 = el)} className="text11" x="990" y="1390">
                <Link to="explore/school-field">School Field</Link>
              </text>
              <text ref={el => (text12 = el)} className="text12" x="810" y="1610">
                <Link to="explore/school-hall">School Hall</Link>
              </text> */}
              {/* <path id="p" ref={el => (path = el)} stroke="#ffffff" stroke-width="0" d="M691.393+62.1462C670.072+126.11+654.482+186.197+648.973+252.305C609.817+722.18+1241.93+350.909+1191.66+702.834C1178.62+794.077+988.378+591.692+973.705+582.888C873.218+522.595+523.812+510.766+485.144+626.77C448.398+737.01+581.587+847.661+684.079+833.019C880.314+804.986+1302.73+630.461+1349.63+958.816C1356.67+1008.05+1382.25+1294.82+1364.26+1312.8C1296.65+1380.41+1139.89+1042.01+1102.43+1049.51C1072.81+1055.43+1094.79+1147.94+1081.95+1165.06C1055.46+1200.38+976.358+1248.49+998.572+1304.03C1014.56+1344+1171.14+1399.14+1119.98+1450.3C1039.81+1530.47+958.209+1332.21+863.998+1347.91C710.174+1373.55+688.135+1579.02+514.4+1579.02" fill="none" stroke-linecap="round" opacity="1" stroke-linejoin="round" stroke-dasharray="20,0,20"/> */}
              <path id="p" ref={el => (path = el)} stroke="#ffffff" stroke-width="0" d="M691.393+62.1462C670.072+126.11+654.482+186.197+648.973+252.305C609.817+722.18+1241.93+350.909+1191.66+702.834C1178.62+794.077+988.378+591.692+973.705+582.888C873.218+522.595+523.812+510.766+485.144+626.77C448.398+737.01+581.587+847.661+684.079+833.019C880.314+804.986+1302.73+630.461+1349.63+958.816C1356.67+1008.05+1382.25+1294.82+1364.26+1312.8C1296.65+1380.41+1139.89+1042.01+1102.43+1049.51C1072.81+1055.43+1094.79+1147.94+1081.95+1165.06C1055.46+1200.38+976.358+1248.49+998.572+1304.03C1014.56+1344+1171.14+1399.14+1119.98+1450.3C1039.81+1530.47+958.209+1332.21+863.998+1347.91C710.174+1373.55+688.135+1579.02+514.4+1579.02L273.561+1583.96" fill="none" stroke-linecap="round" opacity="1" stroke-linejoin="round" stroke-dasharray="20,0,20"/>
            </svg>
          </div>
        </section>
      </main>
    </div>
  )
}
