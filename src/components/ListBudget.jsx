import React from "react";
import BudgetElement from "./BudgetElement";

const ListBudget = ({ newBudget, budget, name, surname, total }) => {
  return (
    <div>
      <p>Nombre: {name}</p>
      <p>Apellido: {surname}</p>
      <p>Página Web: {budget.webSite ? "sí" : "no"}</p>
      {budget.webSite && <p>Número de páginas: {budget.pages}</p>}
      {budget.webSite && <p>Número de idiomas: {budget.languages}</p>}
      <p>Consulta Seo: {budget.seoConsulting ? "sí" : "no"}</p>
      <p>Campaña Google Ads: {budget.googleAds ? "sí" : "no"}</p>
      <p>Presupuesto total: {total} €</p>
    </div>
  );
};

export default ListBudget;
