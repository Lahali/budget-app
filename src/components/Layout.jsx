import React from "react"
import styled from "styled-components"
import {
  LinkStyled,
  ButtonStyledSave,
  InputTextStyled,
  FormStyled,
} from "./Styles"
import Panel from "./Panel"
import ListBudget from "./ListBudget"
import Searcher from "./Searcher"

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  color: #006778;
  padding: 4rem;
  margin: auto;
  border-left: ${(borderLeft) => borderLeft || "none"};
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
            <LabelStyled>Una página web (500€)</LabelStyled>
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
            <LabelStyled>Una consulta SEO (300€)</LabelStyled>
          </DivStyled>
          <DivStyled>
            <input
              type="checkbox"
              name="googleAdds"
              onChange={props.updateBudget2}
              checked={props.budget.googleAdds}
            />
            <LabelStyled>Una campaña Google Ads (200€)</LabelStyled>
          </DivStyled>
          <DivStyled>
            <div>
              <LabelStyled>
                Añade tu nombre y da un nombre al presupuesto:{" "}
              </LabelStyled>
              <DivStyled>
                <InputTextStyled
                  type="text"
                  name="name"
                  value={props.client}
                  onChange={props.getClient}
                  placeholder="nombre"
                />
                <InputTextStyled
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
          <ButtonStyledSave type="submit">Guardar presupuesto</ButtonStyledSave>
          {props.newBudget.length > 0 && (
            <Searcher
              handleFilter={props.handleFilter}
              filteredBudget={props.filteredBudget}
            />
          )}
          <DivStyled>
            <LinkStyled to="/">
              <ButtonStyledSave>Inicio</ButtonStyledSave>
            </LinkStyled>
          </DivStyled>
        </FormStyled>
        <DivStyled>
          {props.newBudget.length > 0 && (
            <ListBudget
              borderLeft="2px solid"
              newBudget={props.newBudget}
              client={props.client}
              budgetName={props.budgetName}
              budget={props.budget}
              total={props.total}
              filteredBudget={props.filteredBudget}
            />
          )}
        </DivStyled>
      </ContainerStyled>
    </>
  )
}

export default Layout
