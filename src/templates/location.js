import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import LocationMenu from "../components/LocationMenu"
import styled from "styled-components"

export const query = graphql`
  query($slug: String!) {
    contentfulLocation(slug: { eq: $slug }) {
      name
      description {
        description
      }
    }
  }
`

const Container = styled.section`
  display: flex;
  padding-block: 70px;

  @media (max-width: 767.98px) {
    flex-direction: column;
  }
`

const LocName = styled.h1`
  font-family: "Ubuntu";
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
`

const Info = styled.div`
  width: 100%;
  flex: 1;
`

const Desc = styled.p`
  font-family: "Lato";
  line-height: 1.5;
`

const ImgHolder = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 70px;

  @media (max-width: 767.98px) {
      padding-inline: 0;
  }
`

const Image = styled.img`
  box-shadow: 0 0 20px rgba(0,0,0,0.38);
  width: 480px;
  height: 270px;
  object-fit: cover;

  @media (max-width: 767.98px) {
      width: 100%;
  }
`

const Tour = styled.div`
  margin-block: 100px;
`

const Location = props => {
    console.log(props.data.contentfulLocation.description.description)
    return (
        <Layout>
            <LocationMenu />
            <Container>
                <Info>
                    <LocName>{props.data.contentfulLocation.name}</LocName>
                    <Desc>{props.data.contentfulLocation.description.description}</Desc>   
                </Info>
                <ImgHolder>
                    <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.kH-fuB-zUznhBws7s14I4QHaE7%26pid%3DApi&f=1" /> 
                </ImgHolder>
            </Container>
            <Tour>
                <iframe width="100%" height="480px" 
                    src="https://poly.google.com/view/b2lwwu7m1MN/embed?chrome=min" 
                    frameBorder="0" 
                    allowvr="yes" allow="vr; xr; accelerometer; magnetometer; gyroscope; autoplay;" 
                    allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel="" ></iframe>
            </Tour>
        </Layout>
    )
}

export default Location
