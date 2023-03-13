import React from "react"
import styled from "styled-components"
import { FormStyled } from "./Styles"
import { Button, Input } from "./styledComponents"
import Panel from "./Panel"
import ListBudget from "./ListBudget"
import Searcher from "./Searcher"
import Navbar from "./Navbar"
import design from "../assets/images/design.svg"

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: #222222;
  padding: 4rem;
  margin: auto;
  border-left: ${(borderLeft) => borderLeft || "none"};

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
const DivStyled = styled.div`
  display: flex;
  flex-direction: ${(direction) => direction || "column"};
  max-height: ${(maxHeight) => maxHeight || "none"};
  width: 50vw;
  margin-top: 1rem;
`
const ParragrafStyled = styled.p`
  line-height: 2rem;
`
const LabelStyled = styled.label`
  margin-left: 4px;
`

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <ContainerStyled>
        {/* Así tenemos unidos el botón y el form para que funcione */}
        <FormStyled onSubmit={props.handleSubmit}>
          <h2>¿Qué quieres hacer?</h2>
          <DivStyled>
            <input
              type="checkbox"
              name="webSite"
              onChange={props.updateBudget2}
              checked={props.budget.webSite}
            />
            <LabelStyled htmlFor="web">Una página web (500€)</LabelStyled>
          </DivStyled>
          {props.budget.webSite && (
            <Panel
              budget={props.budget}
              activateButton={props.activateButton}
              budgetPanel={props.budgetPanel}
            />
          )}

          <DivStyled>
            <input
              type="checkbox"
              name="seoConsulting"
              onChange={props.updateBudget2}
              checked={props.budget.seoConsulting}
            />
            <LabelStyled htmlFor="seo">Una consulta SEO (300€)</LabelStyled>
          </DivStyled>
          <DivStyled>
            <input
              type="checkbox"
              name="googleAdds"
              onChange={props.updateBudget2}
              checked={props.budget.googleAdds}
            />
            <LabelStyled htmlFor="googleAds">
              Una campaña Google Ads (200€)
            </LabelStyled>
          </DivStyled>
          <DivStyled>
            <div>
              <p>Añade tu nombre y da un nombre al presupuesto: </p>
              <DivStyled>
                <label htmlFor="name" />
                <Input
                  padding="10px"
                  width="fit-content"
                  boxShadow="none"
                  type="text"
                  name="name"
                  value={props.client}
                  onChange={props.getClient}
                  placeholder="nombre"
                />
                <label htmlFor="badgetName" />
                <Input
                  marginLeft="10px"
                  width="fit-content"
                  boxShadow="none"
                  type="text"
                  name="budgetName"
                  value={props.budgetName}
                  onChange={props.getbudgetName}
                  placeholder="presupuesto"
                />
              </DivStyled>
            </div>
          </DivStyled>

          <ParragrafStyled>Total: {props.total}</ParragrafStyled>

          {/* esto está conectado con el handleSubmit del form */}
          <Button type="submit" width="fit-content" padding="1rem">
            Guardar presupuesto
          </Button>
          {props.newBudget.length > 0 && (
            <Searcher
              handleFilter={props.handleFilter}
              filteredBudget={props.filteredBudget}
            />
          )}
        </FormStyled>
        <DivStyled>
          {props.newBudget.length > 0 ? (
            <ListBudget
              borderLeft="2px solid"
              newBudget={props.newBudget}
              client={props.client}
              budgetName={props.budgetName}
              budget={props.budget}
              total={props.total}
              filteredBudget={props.filteredBudget}
            />
          ) : (
            <img src={design} alt="people drawing" />
          )}
        </DivStyled>
      </ContainerStyled>
    </>
  )
}

export default Layout
