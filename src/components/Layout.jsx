import React from "react";
import {
  DivStyled,
  NavStyled,
  LinkStyled,
  ParragrafStyled,
  ButtonStyledSave,
  InputTextStyled,
} from "./Styles";
import Panel from "./Panel";

const Layout = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if([props.name, props.surname, props.total].includes('') ) {
      return alert("Faltan campos por llenar")
    }
  };

  return (
    <DivStyled>
      <h2>¿Qué quieres hacer?</h2>

      {/* Así tenemos unidos el botón y el form para que funcione */}
      <form onSubmit={handleSubmit}>
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
            isModalOpen={props.isModalOpen}
            changeModal={props.changeModal}
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
          Añade tu nombre y apellidos: <br />
          <InputTextStyled
            type="text"
            name="name"
            value={props.name}
            onChange={props.getName}
            placeholder="nombre"
          />
          <InputTextStyled
            type="text"
            name="surname"
            value={props.surname}
            onChange={props.getSurname}
            placeholder="apellidos"
          />
        </ParragrafStyled>

        <ParragrafStyled>Total: {props.total}</ParragrafStyled>

          {/* esto está conectado con el handleSubmit del form */}
        <ButtonStyledSave type="submit">Guardar presupuesto</ButtonStyledSave>
      </form>
      <NavStyled>
        <LinkStyled to="/">Volver</LinkStyled>
      </NavStyled>
    </DivStyled>
  );
};

export default Layout;
