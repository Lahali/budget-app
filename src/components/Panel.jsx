import React from "react";
import ModalContent from "./ModalContent";
import { PanelStyled, InputStyled, ButtonStyled, ModalButton } from "./Styles";
// import ModalContent from "./ModalContent";

const Panel = (props) => {
 

  return (
    <div>
      {/* {props.budget.pages > 0 ? "ho!" : "hey!"} */}
      <PanelStyled>
        <p>
          Número de páginas
          {/* callback para pasar elementos */}
          <ButtonStyled type="button" onClick={()=>props.activateButton('pages', 'increase')}>
            +
          </ButtonStyled>
          <InputStyled
            type="text"
            placeholder="páginas"
            name="pages"
            value={props.budget.pages}
            onChange={props.budgetPanel}
          />
          <ButtonStyled type="button" onClick={()=>props.activateButton('pages', 'decrease')}>-</ButtonStyled>
          {/* la fucionalidad no va, pero ya sale donde debería */}
          <ModalButton onClick={props.changeModal}>in</ModalButton>
          
          {/* <ModalContent changeModal={props.changeModal} isModalOpen={props.isModalOpen}/> */}
        </p>
   
        <p>
          Número de idiomas
          <ButtonStyled 
          type="button"
          onClick={()=>props.activateButton('languages', 'increase')}>+</ButtonStyled>
          <InputStyled
            type="text"
            placeholder="idiomas"
            name="languages"
            onChange={props.budgetPanel}
            value={props.budget.languages}
          />
          <ButtonStyled type="button" onClick={()=>props.activateButton('languages', 'decrease')} >-</ButtonStyled>
        </p>
      </PanelStyled>
    </div>
  );
};

export default Panel;


