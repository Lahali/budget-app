import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Button } from "./styledComponents"
import team from "../assets/images/team-bro.svg"

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
  color: #222222;
  margin-left: 1rem;
  padding: 1rem;
  height: 100vh;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
`

const ParragrafStyled = styled.p`
  font-size: larger;
  margin-top: 5px;
`

const Welcome = () => {
  return (
    <ContainerStyled>
      <DivStyled>
        <h2>Calcula tu presupuesto</h2>
        <ParragrafStyled>¿Necesitas una página web?</ParragrafStyled>
        <ParragrafStyled>
          Confía en nuestro equipo! Entra y te hacemos un presupuesto que se
          ajuste a tus necesidades
        </ParragrafStyled>
        <Link to="/budget">
          <Button width="fit-content" padding="1rem">
            Calcular
          </Button>
        </Link>
      </DivStyled>

      <img style={{ maxWidth: "500px" }} src={team} alt="team" />
    </ContainerStyled>
  )
}

export default Welcome
