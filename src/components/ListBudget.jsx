import React from "react";
import BudgetElement from "./BudgetElement";

const ListBudget = ({ newBudget, client, budgetName, budget, total, date }) => {
  return (
    <div>
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
    </div>
  );
};

export default ListBudget;
