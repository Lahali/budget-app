import React from "react"
import { ParragrafStyled } from "./Styles"
import { Input } from "./styledComponents"

const Searcher = (props) => {
  return (
    <div>
      <ParragrafStyled>¿Qué presupuesto buscas?</ParragrafStyled>
      <Input
        padding="10px"
        width="fit-content"
        boxShadow="none"
        type="text"
        marginLeft="0.5rem"
        onChange={props.handleFilter}
      />
    </div>
  )
}

export default Searcher
