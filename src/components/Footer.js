import React from "react"
import styled from "styled-components"

const Container = styled.footer`
    padding: 30px;
`

const Copyright = styled.h4`
    max-width: 1024px;
    margin: 0 auto;
    font-family: "Ubuntu";
    font-weight: 400;
`

const Footer = () => {
    return (
        <Container>
            <Copyright>
            Copyright &copy; 2002 Admiralty Secondary School. All rights reserved.
            </Copyright>
        </Container>
    )
}

export default Footer