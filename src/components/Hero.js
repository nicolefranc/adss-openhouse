import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [winHeight, setWinHeight] = useState(undefined);
  const handleResize = () => {
    setWinHeight(window.innerHeight/4)
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [])
  return (
    <article className="absolute max-w-6xl m-auto px-2 xl:px-0"
      style={{ top: winHeight }}>
      <p className="text-2xl text-white">
        Welcome to <span className="font-bold">Admiralty Secondary School</span>
        's Virtual Open House
      </p>
    </article>
  );
};

export default Hero;
