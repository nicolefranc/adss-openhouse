import React, { useRef, useEffect } from 'react';
// import gsap from 'gsap';

// const Article = styled.article`
//   padding: 100px 0;
// `

// const Subtitle = styled.h2`
//   font-family: "Lato";
//   text-transform: uppercase;
//   letter-spacing: 1px;
// `

// const Title = styled.h1`
//   font-family: "Ubuntu";
//   font-size: 72px;
//   margin-top: 0;
// `

// const Button = styled(Link)`
//   font-family: "Lato";
//   font-weight: 400;
//   font-size: 13px;
//   letter-spacing: 1.3px;
//   text-transform: uppercase;
//   padding: 13px 30px;
//   text-decoration: none;
//   color: #fff;
//   background-color: #000;
//   border-radius: 8px;
//   cursor: pointer;
// `

const Hero = () => {
  // const titleRef = useRef(null);

  // useEffect(() => {
  //   gsap.to(titleRef.current, {
  //     x: 100,
  //     duration: 1,
  //     ease: 'elastic',
  //   });
  // }, []);
  return (
    <article className="max-w-6xl m-auto px-8 xl:px-0">
      <p className="text-2xl py-40">
        Welcome to <span className="font-bold">Admiralty Secondary School</span>
        's Virtual Open House.
      </p>
      {/* <h1 ref={titleRef} className="border-2 w-1/2">
        Virtual Open House
      </h1> */}
      {/* <button to="/explore">Explore</button> */}
    </article>
  );
};

export default Hero;
