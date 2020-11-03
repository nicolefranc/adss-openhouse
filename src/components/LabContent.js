import React from 'react'
import scienceLab from '../assets/images/labIcons/chemistry.png'
import compLab from '../assets/images/labIcons/computer.png'
import foodLab from '../assets/images/labIcons/kitchen.png'
import dnt from '../assets/images/labIcons/workshop.png'

const LabContent = () => {
  return (
    <>
      <div className="flex items-center">
        <img src={scienceLab} alt="Science Lab" className="w-12 h-12" />
        <h2 className="ml-4 text-2xl font-semibold capitalize tracking-wide">Science Laboratories</h2>
      </div>
      <p className="visible leading-8 tracking-wide">
        Adjacent to the parade square are the 6 science laboratories; 2 each for Biology, Chemistry and Physics. Through a variety of hands-on experiments, Admirals discover the Joy of Learning in Science. 
      </p>
      <div className="flex items-center mt-8">
        <img src={compLab} alt="Computer Lab" className="w-12 h-12" />
        <h2 className="ml-4 text-2xl font-semibold capitalize tracking-wide">Computer Laboratories</h2>
      </div>
      <p className="visible leading-8 tracking-wide">
      As a one-to-one computing school, the 4 computer laboratories and 2 IT resource rooms are alternative learning environment for Admirals. Students have the option to choose Computing (O-level) as an elective in Upper Secondary. 
      </p>
      <div className="flex items-center mt-8">
        <img src={dnt} alt="DnT Workshop" className="w-12 h-12" />
        <h2 className="ml-4 text-2xl font-semibold capitalize tracking-wide">Design &amp; Technology Workshop</h2>
      </div>
      <p className="visible leading-8 tracking-wide">
      During Design &amp; Technology lessons, Admirals are engaged in designing and prototyping ideas. Design &amp; Technology is offered to all Lower Secondary Admirals and can be chosen as an elective subject (O-level &amp; N-level) in Upper Secondary. 
      </p>
      <div className="flex items-center mt-8">
        <img src={foodLab} alt="Food Lab" className="w-12 h-12" />
        <h2 className="ml-4 text-2xl font-semibold capitalize tracking-wide">Food Laboratory</h2>
      </div>
      <p className="visible leading-8 tracking-wide">
      The Food laboratory provide opportunities for Admirals to explore and master their culinary skills and knowledge through the Food &amp; Consumer Science curriculum. Students get to learn a variety of cooking and baking techniques by the end of Lower Secondary. Admirals also get to bring home the food or pastry they made! 
      </p>
    </>
  )
}

export default LabContent