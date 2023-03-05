import React from "react"
import styled from "styled-components"
import { formateDate } from "../helpers"
// import { ContainerListStyled, DivListStyled } from "./Styles";

const ContainerListStyled = styled.div`
  float: right;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 1.5rem;
  text-align: left;
`
const DivListStyled = styled.div`
  color: #222222;
  background-color: #efefef;
  border-radius: 3px;
  border: solid 2px #efefef;
  padding: 1rem;
`

const BudgetElement = ({ client, budgetName, total, date, budget }) => {
  return (
    <ContainerListStyled>
      <DivListStyled>
        <p>Nombre: {client}</p>
        <p>Presupuesto: {budgetName}</p>
        <p>Página Web: {budget.webSite ? "sí" : "no"}</p>
        {budget.webSite && <p>Número de páginas: {budget.pages}</p>}
        {budget.webSite && <p>Número de idiomas: {budget.languages}</p>}
        <p>Consulta Seo: {budget.seoConsulting ? "sí" : "no"}</p>
        <p>Campaña Google Ads: {budget.googleAds ? "sí" : "no"}</p>
        <p>Presupuesto total: {total} €</p>
        <p>Creado el: {formateDate(date)}</p>
      </DivListStyled>
    </ContainerListStyled>
  )
}

export default BudgetElement
