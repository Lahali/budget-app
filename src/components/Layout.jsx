import React from "react";
import { DivStyled, NavStyled, LinkStyled, ParragrafStyled } from "./Styles";
import Panel from "./Panel";

const Layout = (props) => {
  return (
    <DivStyled>
      <h2>¿Qué quieres hacer?</h2>
      <ParragrafStyled>
        <input type="checkbox" name="webSite" onChange={props.updateBudget2} />
        Una página web (500€) <br />
      </ParragrafStyled>

      {props.budget.webSite && (
        <Panel
          budget={props.budget}
          updateBudget2={props.updateBudget2}
          increaseButton={props.increaseButton}
          decreaseButton={props.decreaseButton}
          budgetPanel={props.budgetPanel}
        />
      )}

      <ParragrafStyled>
        <input
          type="checkbox"
          name="seoConsulting"
          onChange={props.updateBudget2}
        />
        Una consulta SEO (300€) <br />
      </ParragrafStyled>

      <ParragrafStyled>
        <input
          type="checkbox"
          name="googleAdds"
          onChange={props.updateBudget2}
        />
        Una campaña Google Ads (200€) <br />
      </ParragrafStyled>
      <ParragrafStyled>Total: {props.total}</ParragrafStyled>
      <NavStyled>
          <LinkStyled to="/">Volver</LinkStyled>
        </NavStyled>
    </DivStyled>
  );
};

export default Layout;
