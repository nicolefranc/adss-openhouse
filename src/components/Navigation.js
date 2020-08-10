import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Navbar = styled.nav`
  background-color: #fbfbfb;
  padding: 20px 0;
`

const MaxWidth = styled.div`
  // max-width: 960px;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)`
  font-family: "Ubuntu";
  font-size: 18px;
  color: #000;
  text-decoration: none;
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
`

const NavItem = styled(Link)`
  margin-left: 35px;
  font-family: "Ubuntu";
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #000;
  text-decoration: none;
`

const Navigation = () => {
  return (
    <Navbar>
      <MaxWidth>
        <Logo to="/">ADSS Open House 2020</Logo>
        <NavList>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/explore">Explore</NavItem>
          <NavItem to="/mission">Mission</NavItem>
        </NavList>
      </MaxWidth>
    </Navbar>
  )
}

export default Navigation
