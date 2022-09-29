import React from "react";
import {
  DivStyled,
  NavStyled,
  LinkStyled,
  ParragrafStyled,
  ButtonStyledSave,
  InputTextStyled,
  FormStyled,
} from "./Styles";
import Panel from "./Panel";
import ListBudget from "./ListBudget";
import Searcher from "./Searcher";

const Layout = (props) => {
  return (
    <>
      <DivStyled>
        {props.newBudget.length > 0 && (
          <ListBudget
            newBudget={props.newBudget}
            client={props.client}
            budgetName={props.budgetName}
            budget={props.budget}
            total={props.total}
            filteredBudget={props.filteredBudget}

          />
        )}
        {/* Así tenemos unidos el botón y el form para que funcione */}
        <FormStyled onSubmit={props.handleSubmit}>
          <h2>¿Qué quieres hacer?</h2>
          <ParragrafStyled>
            <input
              type="checkbox"
              name="webSite"
              onChange={props.updateBudget2}
              checked={props.budget.webSite}
            />
            Una página web (500€) <br />
          </ParragrafStyled>

          {props.budget.webSite && (
            <Panel
              budget={props.budget}
              activateButton={props.activateButton}
              budgetPanel={props.budgetPanel}
            />
          )}

          <ParragrafStyled>
            <input
              type="checkbox"
              name="seoConsulting"
              onChange={props.updateBudget2}
              checked={props.budget.seoConsulting}
            />
            Una consulta SEO (300€) <br />
          </ParragrafStyled>

          <ParragrafStyled>
            <input
              type="checkbox"
              name="googleAdds"
              onChange={props.updateBudget2}
              checked={props.budget.googleAdds}
            />
            Una campaña Google Ads (200€) <br />
          </ParragrafStyled>

          <ParragrafStyled>
            Añade tu nombre y da un nombre al presupuesto: <br />
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
          </ParragrafStyled>

          <ParragrafStyled>Total: {props.total}</ParragrafStyled>

          {/* esto está conectado con el handleSubmit del form */}
          <ButtonStyledSave type="submit">Guardar presupuesto</ButtonStyledSave>
        {props.newBudget.length > 0 && <Searcher handleFilter={props.handleFilter} filteredBudget={props.filteredBudget}/>}
      </FormStyled>
      </DivStyled>
      <NavStyled>
        <LinkStyled to="/">Volver</LinkStyled>
      </NavStyled>
    </>
  );
};

export default Layout;
