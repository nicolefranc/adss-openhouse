import React from 'react';
import PropTypes from 'prop-types';
// import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Navigation /> */}
      <Header />
      <main className="max-w-6xl px-6 xl:px-0 mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
