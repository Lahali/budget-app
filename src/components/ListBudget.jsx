import React from "react";
import BudgetElement from "./BudgetElement";
import { ContainerScroll } from "./Styles";

const ListBudget = ({ newBudget, client, budgetName, budget, total }) => {
  return (
    <ContainerScroll>
      {newBudget.map((item) => (
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
