import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Welcome from "./Welcome";

const Main = () => {
  const [budget, setBudget] = useState({
    webSite: false,
    seoConsulting: false,
    googleAdds: false,
    pages: 0,
    languages: 0,
  });

  const [total, setTotal] = useState(0);

  //  Hay dos opciones de hacerlo: se puede hacer todo en una función, o dos funciones:
  //  una para el input y otra para el checkbox.
  // Como solo hay 2 inputs, lo vamos a hacer con una sola función
  const updateBudget2 = (event) => {
    if (!event) return;
    let name = event.target.name;
    // Validar si es un checkbox o un input
    const newValue = event.target.checked;
    // esta validación no estaba funcionando y daba como resultado un NaN al hacer uncheck
    // || Number(event.target.value);
    let newBudget = { ...budget };
    newBudget[name] = newValue;

    setBudget(newBudget);
  };

  const budgetPanel = (event) => {
    const name = event.target.name;
    const newNumberValue = Number(event.target.value);
    let newBudget = { ...budget };
    newBudget[name] = newNumberValue;

    setBudget(newBudget);
  };

  const increaseButton = (type) => {
    let newBudget = { ...budget };
    newBudget[type] = newBudget[type] + 1;
    setBudget(newBudget);
  };

  const decreaseButton = (type) => {
    if (budget.pages <= 0) return;
    let newBudget = { ...budget };
    newBudget[type] = newBudget[type] - 1;
    setBudget(newBudget);
  };

  const calculateTotal = () => {
    let newTotal =
      (budget.seoConsulting ? +300 : 0) +
      (budget.googleAdds ? +200 : 0) +
      (budget.webSite ? +(budget.pages * budget.languages * 30) + 500 : 0);
    setTotal(newTotal);
  };

  useEffect(() => {
    calculateTotal();
  }, [budget]);

  // localStorage
  // con este estamos definiendo el localstorage
  const saveBudget = () => {
    localStorage.setItem("budget", JSON.stringify(budget));
  };
  useEffect(() => {
    saveBudget();
  }, [budget]);

  // el getBudget todavía no se está utilizando, lo usaremos para guardar varios presupuestos
  const getBudget = () => {
    localStorage.getItem("budget");
  };
  useEffect(() => {
    getBudget();
  }, [budget]);

  return (
    <div>
      <Layout
        budget={budget}
        updateBudget2={updateBudget2}
        increaseButton={increaseButton}
        decreaseButton={decreaseButton}
        budgetPanel={budgetPanel}
        total={total}
      />
    </div>
  );
};

export default Main;
