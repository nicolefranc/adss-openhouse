import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Article = styled.article`
  padding: 100px 0;
`

const Subtitle = styled.h2`
  font-family: "Lato";
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Title = styled.h1`
  font-family: "Ubuntu";
  font-size: 72px;
  margin-top: 0;
`

const Button = styled(Link)`
  font-family: "Lato";
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  padding: 13px 30px;
  text-decoration: none;
  color: #fff;
  background-color: #000;
  border-radius: 8px;
  cursor: pointer;
`

const Hero = () => {
  return (
    <Article>
      <Subtitle>Admiralty Secondary School</Subtitle>
      <Title>Virtual Open House</Title>
      <Button to="/explore">Explore</Button>
    </Article>
  )
}

export default Hero
