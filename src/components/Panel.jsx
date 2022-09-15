import React from "react";
import { PanelStyled, Input, ButtonStyled } from "./Styles";
import Buttons from "./Buttons";

const Panel = ({
  handleLanguage,
  handlePage,
  languages,
  pages,
  addPage,
  decreasePage,
  addLanguage,
  decreaseLanguage
}) => {
  return (
    <div>
      <PanelStyled>
        <p>
          Número de páginas{" "}
          <ButtonStyled type="button" onClick={addPage}>
            +
          </ButtonStyled>
          <Input
            type="text"
            placeholder="páginas"
            id="pages"
            value={pages}
            onChange={handlePage}
          />
          <ButtonStyled type="button" onClick={decreasePage}>
            -
          </ButtonStyled>
        </p>
        <p>
          Número de idiomas{" "}
          <ButtonStyled type="button" onClick={addLanguage}>
            +
          </ButtonStyled>
          <Input
            type="text"
            placeholder="idiomas"
            id="languages"
            value={languages}
            onChange={handleLanguage}
          />
          <ButtonStyled type="button" onClick={decreaseLanguage}>-</ButtonStyled>
        </p>
      </PanelStyled>
    </div>
  );
};

export default Panel;
