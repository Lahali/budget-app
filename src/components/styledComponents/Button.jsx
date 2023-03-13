import styled from "styled-components"

const ButtonStyled = styled.button`
  padding: ${({ padding }) => padding || "none"};
  width: ${({ width }) => width || " 2rem"};
  height: ${({ height }) => height || "auto"};
  font-size: ${({ fontSize }) => fontSize || "1.4rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "bolder"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  background-color: ${({ bgColor }) => bgColor || "#00ABB3"};
  color: ${({ color }) => color || "#EEEEEE"};
  border-radius: ${({ borderRadius }) => borderRadius || "3px"};
  border-style: ${({ borderStyle }) => borderStyle || "solid"};
  border-width: ${({ borderWidth }) => borderWidth || "1px"};
  border-color: ${({ borderColor }) => borderColor || "#00ABB3"};
  margin-left: ${({ marginLeft }) => marginLeft || "0.5rem"};
  margin-right: ${({ marginRight }) => marginRight || " 0.5rem"};
  &:hover {
    background-color: ${({ hoverBgColor }) => hoverBgColor || "#00afc1"};
    color: ${({ hoverColor }) => hoverColor || "#3C4048"};
    cursor: pointer;
  }
`

const Button = ({ children, onClick, type, ...rest }) => {
  return (
    <ButtonStyled onClick={onClick} type={type} {...rest}>
      {children}
    </ButtonStyled>
  )
}

export default Button
