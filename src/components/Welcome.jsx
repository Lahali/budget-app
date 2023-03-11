import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Button } from "./styledComponents"
import team from "../assets/images/team-bro.svg"

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  color: #222222;
  margin-left: 1rem;
  padding: 1rem;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
`

const ParragrafStyled = styled.p`
  font-size: larger;
`

const Welcome = () => {
  return (
    <ContainerStyled>
      <div>
        <h2>Calcula tu presupuesto</h2>
        <ParragrafStyled>¿Necesitas una página web?</ParragrafStyled>
        <ParragrafStyled>
          Entra y te hacemos un presupuesto que se ajuste a tus necesidades
        </ParragrafStyled>
        <Link to="/budget">
          <Button width="fit-content" padding="1rem">
            Calcular
          </Button>
        </Link>
      </div>

      <img style={{ maxWidth: "500px" }} src={team} alt="team" />
    </ContainerStyled>
  )
}

export default Welcome
