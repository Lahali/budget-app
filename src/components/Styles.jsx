import styled from "styled-components"

export const ParragrafStyled = styled.p`
  line-height: 2rem;
`

export const FormStyled = styled.form`
  margin-top: 5rem;
`

export const ModalStyled = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
`

export const ModalContentStyled = styled.p`
  text-align: center;
  border-radius: 3px;
  padding: 1rem;
  width: fit-content;
  height: fit-content;
  margin-top: 16rem;
  background-color: #efefef;
`

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
`
