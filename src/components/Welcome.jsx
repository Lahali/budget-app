import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { HeaderStyled, ParragrafStyled } from "./Styles";

const Welcome = () => {
  return (
    <div>
      <HeaderStyled>
        <h2>Calcula tu presupuesto</h2>
      </HeaderStyled>
      <ParragrafStyled>¿Necesitas una página web?</ParragrafStyled>
      <ParragrafStyled>Entra y te hacemos un presupuesto que se ajuste a tus necesidades</ParragrafStyled>
        <nav>
           <Link to="/budget">Calcular</Link>
        </nav>
    </div>
  );
};

export default Welcome;
