import React from "react";
import { useState } from "react";
import { PanelStyled, Input, ButtonStyled } from "./Styles";

const Panel = (props) => {
  
//  FALTA UN ONCHANGE EN LOS INPUTS, ECHAR UN OJO AL ERROR QUE DA EN CONSOLA

  return (
    <div>
      {props.budget.pages > 0 ? "hey!" : "hoo!"}
      <PanelStyled>
        <p>
          Número de páginas <ButtonStyled type="button" onClick={props.updatePages}>+</ButtonStyled>
          <Input type="text" placeholder="páginas" name="pages" value={props.budget.pages} onChange={props.updatePages}/>
          <ButtonStyled type="button">-</ButtonStyled>
        </p>
        <p>
          Número de idiomas <ButtonStyled type="button">+</ButtonStyled>
          <Input type="text" placeholder="idiomas" name="languages" />
          <ButtonStyled type="button">-</ButtonStyled>
        </p>
      </PanelStyled>
    </div>
  );
};

export default Panel;

// handleLanguage,
// handlePage,
// languages,
// pages,
// addPage,
// decreasePage,
// addLanguage,
// decreaseLanguage
