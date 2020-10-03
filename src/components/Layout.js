import React from 'react';
import PropTypes from 'prop-types';
// import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, hasBack}) => {
  console.log(hasBack)
  return (
    <div>
      {/* <Navigation /> */}
      <Header hasBack={hasBack} />
      <main className="max-w-6xl px-6 xl:px-0 mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  hasBack: PropTypes.bool
};

export default Layout;
