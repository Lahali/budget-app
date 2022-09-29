import React from "react";
import BudgetElement from "./BudgetElement";
import { ContainerScroll } from "./Styles";

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
  );
};

export default ListBudget;
