import React from "react"
import Layout from "../components/Layout"
import LocationMenu from "../components/LocationMenu"
import styled from "styled-components"

const Heading = styled.h1`
  font-family: "Ubuntu";
  margin-block: 40px;
`

const ExplorePage = () => {
  return (
    <Layout>
      <Heading>Choose where to explore</Heading>
      <LocationMenu />
    </Layout>
  )
}

export default ExplorePage
