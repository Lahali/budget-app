import React from "react"
import styled from "styled-components"
import BudgetElement from "./BudgetElement"

const ContainerScroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45vw;
  max-height: 80vh;
  overflow-y: scroll;
  text-align: right;
  border-left: 2px solid #afafaf;

  &::-webkit-scrollbar-track {
    background-color: #222222;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: #afafaf;
  }
`

const ListBudget = ({ newBudget, filteredBudget }) => {
  return (
    <ContainerScroll>
      <h2>Presupuestos creados</h2>
      {filteredBudget.length > 0
        ? filteredBudget.map((item) => (
            <BudgetElement
              key={item.id}
              date={item.date}
              client={item.client}
              budgetName={item.budgetName}
              budget={item.budget}
              total={item.total}
              filteredBudget={item.filteredBudget}
            />
          ))
        : newBudget.map((item) => (
            <BudgetElement
              key={item.id}
              date={item.date}
              client={item.client}
              budgetName={item.budgetName}
              budget={item.budget}
              total={item.total}
              newBudget={item.newBudget}
            />
          ))}
    </ContainerScroll>
  )
}

export default ListBudget
