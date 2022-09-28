import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  margin: 1.5rem;
  font-size: larger;
  font-weight: bold;
  text-align: center;
`;

export const PanelStyled = styled.div`
  display: flex;
  /* flex-direction: column; */
  text-align: center;
  justify-content: center;
  align-items: center;
  border: solid 2px #efefef;
  padding: 1rem;
  width: fit-content;
  height: auto;
  border-radius: 1rem;
  margin: 1.5rem;
  box-shadow: 0.75rem 0.75rem 0.2rem #efefef;
`;

export const ParragrafStyled = styled.p`
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
  background-color: #00afc1;
  color: #fff8bc;
  border: solid 2px #00afc1;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  &:hover {
    background-color: #fff8bc;
    color: #00afc1;
  }
`;

export const InputStyled = styled.input`
  width: 3rem;
  height: auto;
  font-size: large;
  box-shadow: 5px 5px 5px #efefef;
  text-align: center;
  border: none;
  border-radius: 0.5rem;
`;

export const LinkStyled = styled(Link)`
  color: #00afc1;
  text-decoration: none;
  font-size: large;
  font-weight: bold;

  &:hover {
    color: #0093ab;
  }
`;
export const DivStyled = styled.div`

  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 25% 25% 25% 25% ;


  color: #006778;
  padding: 4rem;
  margin: auto;
`;

export const FormStyled = styled.form`
  grid-column-start: 1 ;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
`

export const NavStyled = styled.nav`

  grid-column-start: 1;
  grid-column-end: 6;

  grid-row-start: 5;
 


  background-color: #ffe9a0;
  max-height: 5rem;
  border-radius: 1rem;
  padding: 10px;
  max-width: 100vw;
  text-align: center;
`;

export const ModalStyled = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
`;

export const ModalContentStyled = styled.p`
  text-align: center;
  padding: 1rem;
  width: fit-content;
  height: fit-content;
  border-radius: 1rem;

  margin-top: 16rem;
  background-color: #efefef;
`;

export const ModalButton = styled.button`
  width: fit-content;
  min-height: 1.5rem;
  border-radius: 2rem;
  font-size: 18px;
  font-weight: bolder;
  text-align: center;
  background-color: #cdf0ea;
  color: #006778;
  border: solid 2px #cdf0ea;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  &:hover {
    background-color: #006778;
    color: #cdf0ea;
  }
`;

export const InputTextStyled = styled.input`
  min-width: 5rem;
  height: auto;
  font-size: large;
  box-shadow: 3px 3px 3px #efefef;
  text-align: center;
  border: solid 2px #efefef;
  border-radius: 0.5rem;
  padding: 0.75rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
  background-color: white;
  &:focus {
    outline: none;
    border: solid 2px #afafaf;
    background-color: #efefef;
  }
`;

export const ButtonStyledSave = styled.button`
  width: fit-content;
  height: auto;
  border-radius: 0.5rem;
  font-size: 18px;
  font-weight: bolder;
  text-align: center;
  background-color: #00afc1;
  color: #fff8bc;
  border: solid 2px #00afc1;
  padding: 1rem;
  &:hover {
    background-color: #fff8bc;
    color: #00afc1;
  }
`;

export const ContainerScroll = styled.div`
  grid-column-start: 3 ;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 3;
  overflow-y: scroll;
`;

export const ContainerListStyled = styled.div`
  float: right;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 1.5rem;
`;
export const DivListStyled = styled.div`
  border-radius: 1rem;
  border: solid 2px #efefef;
  padding: 1rem;
`;

export const DivStyledNoGrid = styled.div`

  color: #006778;
  padding: 5rem;
  margin: auto;
`;

export const NavStyledNoGrid = styled.nav`
  background-color: #ffe9a0;
  max-height: 4rem;
  border-radius: 1rem;
  padding: 10px;
  max-width: 100vw;
  text-align: center;
  margin-top: 1rem;
`;