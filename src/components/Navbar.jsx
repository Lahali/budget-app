import React from "react"
import styled from "styled-components"
import { Button } from "./styledComponents"
import { LinkStyled } from "./Styles"

const NavStyled = styled.nav`
  width: 100%;
  position: fixed;
  padding: 1rem;
  background-color: #3c4048;
`

const Navbar = () => {
  return (
    <NavStyled>
      <LinkStyled to="/">
        <Button
          hoverColor="#00ABB3"
          bgColor="transparent"
          width="auto"
          hoverBgColor="none"
          borderColor="transparent"
        >
          Inicio
        </Button>
      </LinkStyled>
    </NavStyled>
  )
}

export default Navbar
