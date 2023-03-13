import React from "react"
import styled from "styled-components"
import { formateDate } from "../helpers"
// import { ContainerListStyled, DivListStyled } from "./Styles";

const ContainerListStyled = styled.div`
  display: flex;
  float: right;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 1.5rem;
  text-align: left;
`
const DivListStyled = styled.ul`
  list-style: none;
  color: #222222;
  background-color: #faf8ff;
  border-radius: 3px;
  padding: 1rem;
`
const SpanStyled = styled.span`
  font-weight: bold;
`

const ListElement = styled.li`
  color: #222222;
  margin-bottom: 10px;
`

const BudgetElement = ({ client, budgetName, total, date, budget }) => {
  return (
    <ContainerListStyled>
      <DivListStyled>
        <ListElement>
          <SpanStyled>Nombre:</SpanStyled> {client}
        </ListElement>
        <ListElement>
          <SpanStyled>Presupuesto:</SpanStyled> {budgetName}
        </ListElement>
        <ListElement>
          <SpanStyled>Página Web:</SpanStyled> {budget.webSite ? "sí" : "no"}
        </ListElement>
        {budget.webSite && (
          <ListElement>
            <SpanStyled>Número de páginas:</SpanStyled> {budget.pages}
          </ListElement>
        )}
        {budget.webSite && (
          <ListElement>
            <SpanStyled>Número de idiomas:</SpanStyled> {budget.languages}
          </ListElement>
        )}
        <ListElement>
          <SpanStyled>Consulta Seo:</SpanStyled>{" "}
          {budget.seoConsulting ? "sí" : "no"}
        </ListElement>
        <ListElement>
          <SpanStyled>Campaña Google Ads:</SpanStyled>{" "}
          {budget.googleAds ? "sí" : "no"}
        </ListElement>
        <ListElement>
          <SpanStyled>Presupuesto total:</SpanStyled> {total} €
        </ListElement>
        <ListElement>
          <SpanStyled>Creado el:</SpanStyled> {formateDate(date)}
        </ListElement>
      </DivListStyled>
    </ContainerListStyled>
  )
}

export default BudgetElement
