import React, { useRef, useEffect } from 'react';
// import gsap from 'gsap';

const Hero = () => {
  return (
    <article className="max-w-6xl m-auto px-2 xl:px-0">
      <p className="text-2xl pt-40 pb-20">
        Welcome to <span className="font-bold">Admiralty Secondary School</span>
        's Virtual Open House.
      </p>
      <div className="flex items-center">
        <svg className="w-4 h-4 animate-bounce" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
        <p className="mx-4 uppercase border-b-2 border-gray-900">Scroll to explore</p>
        <svg className="w-4 h-4 animate-bounce" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
      </div>
      {/* <h1 ref={titleRef} className="border-2 w-1/2">
        Virtual Open House
      </h1> */}
      {/* <button to="/explore">Explore</button> */}
    </article>
  );
};

export default Hero;
