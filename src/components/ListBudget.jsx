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
          client={client}
          budgetName={budgetName}
          budget={budget}
          total={total}
          newBudget={newBudget}
        />
      ))}
    </ContainerScroll>
  );
};

export default ListBudget;
