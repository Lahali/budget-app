import React from "react";
import { useState } from "react";
import { PanelStyled, Input, ButtonStyled } from "./Styles";

const Panel = (props) => {

  return (
    <div>
      <PanelStyled>
        <p>
          Número de páginas <ButtonStyled type="button" >+</ButtonStyled>
          <Input type="text" placeholder="páginas" name="pages" />
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
