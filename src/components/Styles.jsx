import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  margin: 1.5rem;
  font-size: larger;
  font-weight: bold;
  text-align: center;
`;

export const PanelStyled = styled.form`
display: flex;
flex-direction: column;
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
  color: #006778;
  padding: 5rem;
  margin: auto;
`;

export const NavStyled = styled.nav`
  background-color: #ffe9a0;
  min-height: 4rem;
  border-radius: 1rem;
  padding: 10px;
  max-width: 100%;
  text-align: center;
  margin-top: 4rem;
`;

export const ModalStyled = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
`;

export const ModalButton = styled.button`
  width: 1rem;
  height: auto;
  border-radius: 0.5rem;
  /* font-size: 1.4rem; */
  font-weight: bolder;
  text-align: center;
  background-color: #CDF0EA;
  color: #006778;
  border: solid 2px #CDF0EA;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  &:hover {
    background-color: #006778;
    color: #CDF0EA;
  }
`
