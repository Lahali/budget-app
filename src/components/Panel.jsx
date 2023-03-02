import React from "react"
import Modal from "./Modal"
import { Button, Input } from "./styledComponents"
import styled from "styled-components"

const InputGroupContainer = styled.div`
  background-color: white;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: solid 2px #efefef;
  padding: 1rem;
  width: fit-content;
  height: auto;
  border-radius: 3px;
  margin: 1.5rem;
  color: #222831;
`

const Panel = (props) => {
  return (
    <>
      <InputGroupContainer>
        <label>Número de páginas</label>
        {/* callback para pasar elementos */}
        <Button
          type="button"
          onClick={() => props.activateButton("pages", "increase")}
        >
          +
        </Button>
        <Input
          type="text"
          placeholder="páginas"
          name="pages"
          value={props.budget.pages}
          onChange={props.budgetPanel}
        />
        <Button
          type="button"
          onClick={() => props.activateButton("pages", "decrease")}
        >
          -
        </Button>
        <Modal text="¿Cuántas páginas necesitas? Pon mínimo una." />
      </InputGroupContainer>
      <InputGroupContainer>
        <label>Número de idiomas</label>
        <Button
          type="button"
          onClick={() => props.activateButton("languages", "increase")}
        >
          +
        </Button>
        <Input
          type="text"
          placeholder="idiomas"
          name="languages"
          onChange={props.budgetPanel}
          value={props.budget.languages}
        />
        <Button
          type="button"
          onClick={() => props.activateButton("languages", "decrease")}
        >
          -
        </Button>
        <Modal text="¿Cuántos idiomas necesitas? Pon mínimo uno" />
      </InputGroupContainer>
    </>
  )
}

export default Panel
