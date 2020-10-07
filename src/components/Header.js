import React, { useState, useEffect } from 'react';
import propTypes from "prop-types";
import { Link } from 'gatsby';
import Navigation from './Navigation';

const Header = ({hasBack}) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'Menu',
  });
  const [disabled, setDisabled] = useState(false);

  const handleMenu = () => {
    console.log('Menu is clicked');
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'Close',
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'Menu',
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'Close',
      });
    }
  };

  const disableMenu = () => {
    // set disabled to true
    setDisabled(!disabled);
    // wait for 1200ms to set disabled to false
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  const closeMenu = () => {
    setState({ clicked: false, menuName: "Menu" })
  }

  return (
    <header className="py-10 px-6">
      <div className="relative flex justify-between max-w-6xl m-auto z-20">
        <div>
          {(hasBack && !state.clicked) && 
          <Link to="/" className="flex items-center">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            <span className="ml-2">Back</span>
          </Link>
          }
        </div>
        {/* <div>
          <button
            className="px-2 border-0"
            disabled={disabled}
            onClick={handleMenu}
          >
            {state.menuName == "Menu" ?
              (<div className="flex">
                <h2 className="mr-2 tracking-wider">Map</h2>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clip-rule="evenodd"></path></svg>
               </div>
              )
              : (
                <div className="flex">
                  <h2 className="mr-2 tracking-wider text-scroll-red">Close</h2>
                  <svg class="w-6 h-6" fill="none" stroke="#732910" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
              )
            }
          </button>
        </div> */}
      </div>
      <Navigation state={state} closeMenu={closeMenu} />
    </header>
  );
};

Header.propTypes = {
  hasBack: propTypes.bool
}

export default Header;
