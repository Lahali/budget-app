import React from "react";
import { formatearFecha } from "../helpers/index";
import { ContainerListStyled, DivListStyled } from "./Styles";

const ListBudget = ({ newBudget, budget, name, surname, total }) => {
  return (
    <ContainerListStyled>
      <DivListStyled>
        <p>Nombre: {name}</p>
        <p>Apellido: {surname}</p>
        <p>Página Web: {budget.webSite ? "sí" : "no"}</p>
        {budget.webSite && <p>Número de páginas: {budget.pages}</p>}
        {budget.webSite && <p>Número de idiomas: {budget.languages}</p>}
        <p>Consulta Seo: {budget.seoConsulting ? "sí" : "no"}</p>
        <p>Campaña Google Ads: {budget.googleAds ? "sí" : "no"}</p>
        <p>Presupuesto total: {total} €</p>
      </DivListStyled>
    </ContainerListStyled>
  );
};

export default ListBudget;
