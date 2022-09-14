import React  from "react";
import { PanelStyled } from "./Styles";

const Panel = ({handleLanguage, handlePage, languages, pages}) => {

  return (
    <div>
      <PanelStyled>
        <p>
          Número de páginas <input type="number" placeholder="páginas" id="pages" value={pages} onChange={handlePage}/>
        </p>
        <p>
          Número de idiomas <input type="number" placeholder="idiomas" id="languages" value={languages} onChange={handleLanguage} />
        </p>
      </PanelStyled>
    </div>
  );
};

export default Panel;
