import React from "react"
import { ParragrafStyled } from "./Styles"
import { Input } from "./styledComponents"

const Searcher = (props) => {
  return (
    <div>
      <ParragrafStyled>¿Qué presupuesto buscas?</ParragrafStyled>
      <Input
        boxShadow="none"
        padding="0.75rem"
        type="text"
        marginLeft="0.5rem"
        onChange={props.handleFilter}
      />
    </div>
  )
}

export default Searcher
