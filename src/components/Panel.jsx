import React, { useState } from "react";
import Modal from "./Modal";
import { PanelStyled, InputStyled, ButtonStyled, ModalButton } from "./Styles";

const Panel = (props) => {


  return (
    <>
      <PanelStyled>
       
          Número de páginas
          {/* callback para pasar elementos */}
          <ButtonStyled
            type="button"
            onClick={() => props.activateButton("pages", "increase")}
          >
            +
          </ButtonStyled>
          <InputStyled
            type="text"
            placeholder="páginas"
            name="pages"
            value={props.budget.pages}
            onChange={props.budgetPanel}
          />
          <ButtonStyled
            type="button"
            onClick={() => props.activateButton("pages", "decrease")}
          >
            -
          </ButtonStyled>
          <Modal text="¿Cuántas páginas necesitas? Pon mínimo una."/>
     </PanelStyled>
    <PanelStyled>
        
          Número de idiomas
          <ButtonStyled
            type="button"
            onClick={() => props.activateButton("languages", "increase")}
          >
            +
          </ButtonStyled>
          <InputStyled
            type="text"
            placeholder="idiomas"
            name="languages"
            onChange={props.budgetPanel}
            value={props.budget.languages}
          />
          <ButtonStyled
            type="button"
            onClick={() => props.activateButton("languages", "decrease")}
          >
            -
          </ButtonStyled>
        <Modal text="¿Cuántos idiomas necesitas? Pon mínimo uno"/>
      </PanelStyled>
    </>
  );
};

export default Panel;
