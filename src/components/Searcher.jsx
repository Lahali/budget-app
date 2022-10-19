import React from 'react'
import { InputTextStyled, ParragrafStyled } from './Styles'

const Searcher = (props) => {
  return (
    <div>
        <ParragrafStyled>¿Qué presupuesto buscas?</ParragrafStyled>
        <InputTextStyled type="text" onChange={props.handleFilter}/>
    </div>
  )
}

export default Searcher