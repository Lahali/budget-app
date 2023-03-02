import React from "react"
import styled from "styled-components"

const InputStyled = styled.input`
  padding: ${({ padding }) => padding || "1px"};
  width: ${({ width }) => width || "3rem"};
  height: ${({ height }) => height || "auto"};
  font-size: ${({ fontSize }) => fontSize || "large"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  border-style: ${({ borderStyle }) => borderStyle || "solid"};
  border-width: ${({ borderWidth }) => borderWidth || "1px"};
  border-color: ${({ borderColor }) => borderColor || "white"};
  border-radius: ${({ borderRadius }) => borderRadius || "3px"};
  box-shadow: ${({ boxShadow }) => boxShadow || "5px 5px 5px #efefef"};
  margin-left: ${({ marginLeft }) => marginLeft || "0"};
  &:focus {
    outline: none;
    border: solid 2px #afafaf;
    background-color: #efefef;
  }
`
const Input = ({
  children,
  placeholder,
  type,
  name,
  value,
  onChange,
  ...rest
}) => {
  return (
    <InputStyled
      {...rest}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    >
      {children}
    </InputStyled>
  )
}

export default Input
