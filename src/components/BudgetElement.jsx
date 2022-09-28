import React from "react";
import { formateDate } from "../helpers";
import { ContainerListStyled, DivListStyled } from "./Styles";

const BudgetElement = ({ client, budgetName, budget, total, date }) => {
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
  );
};

export default BudgetElement;
