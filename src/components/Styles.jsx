import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  margin: 1.5rem;
  font-size: larger;
  font-weight: bold;
  text-align: center;
`;

export const PanelStyled = styled.form`
  text-align: center;
  justify-content: center;
  align-items: center;
  border: solid 2px #efefef;
  padding: 1rem;
  width: fit-content;
  height: auto;
  border-radius: 1rem;
  margin: 1.5rem;
  box-shadow: 0.75rem 0.75rem 0.2rem #EFEFEF;
`;

export const ParragrafStyled = styled.p`
  /* margin: 1.5rem; */
  line-height: 2rem;
`;


export const WelcomeParragrafStyled = styled.p`
  margin: 2rem;
  line-height: 2rem;
  text-align: center;
`;

export const ButtonStyled = styled.button`
  width: 2rem;
  height: auto;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  font-weight: bolder;
  text-align: center;
  background-color: #00AFC1;
  color: #FFF8BC;
  border: solid 2px #00AFC1;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
&:hover {
  background-color: #FFF8BC;
  color: #00AFC1;
}

`;

export const InputStyled = styled.input`
  width: 3rem;
  height: auto;
  font-size: large;
  box-shadow: 5px 5px 5px #EFEFEF;
  text-align: center;
  border: none;
  border-radius: 0.5rem;
`;

export const LinkStyled = styled(Link)`
  color: #00AFC1;
  text-decoration: none;
  font-size: large;
  font-weight: bold;

  &:hover {
    color: #0093AB;
  }
`
export const DivStyled = styled.div`
  color: #006778 ;
  padding: 5rem;
  margin: auto;
`

export const NavStyled = styled.nav`
background-color: #FFE9A0;
min-height: 4rem;
border-radius: 1rem;
padding: 10px;
max-width: 100%;
text-align: center;
margin-top: 4rem;
`

