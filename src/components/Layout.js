import React from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"
import styled from "styled-components"

const Container = styled.div`
`

const Content = styled.main`
  margin: 0 auto;
  // max-width: 960px;
  max-width: 1024px;
  padding-inline: 20px;
`

const Layout = ({ children }) => {
  return (
    <Container>
      <Navigation />
      <Content>{children}</Content>
      <Footer />
    </Container>
  )
}

export default Layout
