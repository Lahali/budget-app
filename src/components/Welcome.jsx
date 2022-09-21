import React from "react";

import {
  DivStyled,
  HeaderStyled,
  LinkStyled,
  WelcomeParragrafStyled,
  NavStyled,
} from "./Styles";

const Welcome = () => {
  return (
    <div>
      <DivStyled>
        <HeaderStyled>
          <h2>Calcula tu presupuesto</h2>
        </HeaderStyled>
        <WelcomeParragrafStyled>
          ¿Necesitas una página web?
          <br />
          Entra y te hacemos un presupuesto que se ajuste a tus necesidades
        </WelcomeParragrafStyled>
        <NavStyled>
          <LinkStyled to="/budget">Calcular</LinkStyled>
        </NavStyled>
      </DivStyled>
    </div>
  );
};

export default Welcome;
