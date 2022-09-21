import React from "react";
import { useState } from "react";
import { PanelStyled, InputStyled, ButtonStyled } from "./Styles";

const Panel = (props) => {
 

  return (
    <div>
      {/* {props.budget.pages > 0 ? "ho!" : "hey!"} */}
      <PanelStyled>
        <p>
          Número de páginas{" "}
          {/* callback para pasar elementos */}
          <ButtonStyled type="button" onClick={()=>props.increaseButton('pages')}>
            +
          </ButtonStyled>
          <InputStyled
            type="text"
            placeholder="páginas"
            name="pages"
            value={props.budget.pages}
            onChange={props.budgetPanel}
          />
          <ButtonStyled type="button" onClick={()=>props.decreaseButton('pages')}>-</ButtonStyled>
        </p>
        <p>
          Número de idiomas 
          <ButtonStyled 
          type="button"
          onClick={()=>props.increaseButton('languages')}>+</ButtonStyled>
          <InputStyled
            type="text"
            placeholder="idiomas"
            name="languages"
            onChange={props.budgetPanel}
            value={props.budget.languages}
          />
          <ButtonStyled type="button" onClick={()=>props.decreaseButton('languages')} >-</ButtonStyled>
        </p>
      </PanelStyled>
    </div>
  );
};

export default Panel;


