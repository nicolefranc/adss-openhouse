import React from 'react';
import PropTypes from 'prop-types';
// import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

// const Container = styled.div`
// `

// const Content = styled.main`
//   margin: 0 auto;
//   // max-width: 960px;
//   max-width: 1024px;
//   padding-inline: 20px;
// `

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Navigation /> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
