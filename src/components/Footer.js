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
    <footer className="max-w-6xl mx-auto mt-20 py-8">
      <h4 className="text-sm px-6 xl:px-0">
        Copyright &copy; {new Date().getFullYear()} Admiralty Secondary School.
        All rights reserved.
      </h4>
    </footer>
  );
};

export default Footer;
