import React from "react";

import {
  DivStyledNoGrid,
  HeaderStyled,
  LinkStyled,
  WelcomeParragrafStyled,
  NavStyledNoGrid,
} from "./Styles";

const Welcome = () => {
  return (
    <div>
      <DivStyledNoGrid>
        <HeaderStyled>
          <h2>Calcula tu presupuesto</h2>
        </HeaderStyled>
        <WelcomeParragrafStyled>
          ¿Necesitas una página web?
          <br />
          Entra y te hacemos un presupuesto que se ajuste a tus necesidades
        </WelcomeParragrafStyled>
        <NavStyledNoGrid>
          <LinkStyled to="/budget">Calcular</LinkStyled>
        </NavStyledNoGrid>
      </DivStyledNoGrid>
    </div>
  );
};

export default Welcome;
