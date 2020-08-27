import React, { useState } from 'react';
import { Link } from 'gatsby';
import Navigation from './Navigation';

const Header = () => {
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

    console.log('Clicked:' + state.clicked);
  };

  const disableMenu = () => {
    // set disabled to true
    setDisabled(!disabled);
    // wait for 1200ms to set disabled to false
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header className="py-10 px-6">
      <div className="relative flex justify-between max-w-6xl m-auto z-20">
        <div>
          <Link to="/">Virtual ADSS</Link>
        </div>
        <div>
          <button
            className="px-2 border-0"
            disabled={disabled}
            onClick={handleMenu}
          >
            {state.menuName}
          </button>
        </div>
      </div>
      <Navigation state={state} setState={setState} />
    </header>
  );
};

export default Header;
