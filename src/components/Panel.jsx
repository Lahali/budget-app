import { PanelStyled } from "./Styles";
import React from "react";

const Panel = () => {
  return (
    <div>
      <PanelStyled>
        <p>
          Número de páginas <input type="number" />
        </p>
        <p>
          Número de idiomas <input type="number" />
        </p>
      </PanelStyled>
    </div>
  );
};

export default Panel;
