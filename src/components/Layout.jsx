import React from "react";
import { DivStyled, NavStyled, LinkStyled, ParragrafStyled, ButtonStyled } from "./Styles";
import Panel from "./Panel";
// import ModalContent from "./ModalContent";

const Layout = (props) => {
  return (
    <DivStyled>
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
          // changeModal={props.changeModal}
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
      <ParragrafStyled>Total: {props.total}</ParragrafStyled>
      {/* <ButtonStyled type="button" onClick={props.changeModal}>i</ButtonStyled>  */}
      {/* <ModalContent changeModal={props.changeModal} isModalOpen={props.isModalOpen}/> */}
      <NavStyled>
        <LinkStyled to="/">Volver</LinkStyled>
      </NavStyled>
    </DivStyled>
  );
};

export default Layout;
