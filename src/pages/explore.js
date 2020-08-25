import React from 'react';
import Layout from '../components/Layout';
import LocationMenu from '../components/LocationMenu';

// const Heading = styled.h1`
//   font-family: "Ubuntu";
//   margin-block: 40px;
// `

const ExplorePage = () => {
  return (
    <Layout>
      <h1>Choose where to explore</h1>
      <LocationMenu />
    </Layout>
  );
};

export default ExplorePage;
