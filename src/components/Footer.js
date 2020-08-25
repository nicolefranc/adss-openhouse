import React from 'react';

// const Container = styled.footer`
//     padding: 30px;
// `

// const Copyright = styled.h4`
//     max-width: 1024px;
//     margin: 0 auto;
//     font-family: "Ubuntu";
//     font-weight: 400;
// `

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 max-w-6xl m-auto px-8 xl:px-0 py-4">
      <h4 className="text-sm">
        Copyright &copy; {new Date().getFullYear()} Admiralty Secondary School.
        All rights reserved.
      </h4>
    </footer>
  );
};

export default Footer;
