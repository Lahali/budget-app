import { Link } from "react-router-dom"
import styled from "styled-components"

export const HeaderStyled = styled.header`
  margin: 1.5rem;
  font-size: larger;
  font-weight: bold;
  text-align: center;
`

export const ParragrafStyled = styled.p`
  line-height: 2rem;
`

export const WelcomeParragrafStyled = styled.p`
  margin: 2rem;
  line-height: 2rem;
  text-align: center;
`

export const LinkStyled = styled(Link)`
  color: #00afc1;
  text-decoration: none;
  font-size: large;
  font-weight: bold;

  &:hover {
    color: #0093ab;
  }
`

export const FormStyled = styled.form`
  /* grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3; */
`

export const ModalStyled = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
`

export const ModalContentStyled = styled.p`
  text-align: center;
  border-radius: 3px;
  padding: 1rem;
  width: fit-content;
  height: fit-content;
  margin-top: 16rem;
  background-color: #efefef;
`

export const ModalButton = styled.button`
  width: fit-content;
  min-height: 1.5rem;
  border-radius: 2rem;
  font-size: 18px;
  font-weight: bolder;
  text-align: center;
  background-color: #cdf0ea;
  color: #006778;
  border: solid 2px #cdf0ea;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  &:hover {
    background-color: #006778;
    color: #cdf0ea;
  }
`

export const DivStyledNoGrid = styled.div`
  color: #006778;
  padding: 5rem;
  margin: auto;
`

export const NavStyledNoGrid = styled.nav`
  background-color: #ffe9a0;
  max-height: 4rem;
  border-radius: 1rem;
  padding: 10px;
  max-width: 100vw;
  text-align: center;
  margin-top: 1rem;
`
