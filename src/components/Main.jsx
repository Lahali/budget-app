import React from "react";
import { useState, useEffect } from "react";
import Layout from "./Layout";

const Main = () => {
  const [budget, setBudget] = useState({
    webSite: false,
    seoConsulting: false,
    googleAdds: false,
    pages: 0,
    languages: 0,
  });

  const [total, setTotal] = useState(0);

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')

  const [newBudget, setNewBudget] = useState([])

  const getName = (event) => setName(event.target.value)
  const getSurname = (event) => setSurname(event.target.value)


  const addBudgetList = budgetNew => {
    setNewBudget([...newBudget, budgetNew])
    console.log(newBudget)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if([name, surname, total].includes('')) {
      return alert("Faltan campos por rellenar")
    }
    addBudgetList({name, surname, total})
  }


  //  Hay dos opciones de hacerlo: se puede hacer todo en una función, o dos funciones:
  //  una para el input y otra para el checkbox.
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
    saveBudget(newBudget);
  };

  const budgetPanel = (event) => {
    const name = event.target.name;
    const newNumberValue = Number(event.target.value);
    let newBudget = { ...budget };
    newBudget[name] = newNumberValue;

    setBudget(newBudget);
    saveBudget(newBudget);
  };

  const activateButton = (type, action) => {
    let newBudget = { ...budget };
    newBudget[type] =
      action === "increase" ? newBudget[type] + 1 : newBudget[type] - 1;
    setBudget(newBudget);
    saveBudget(newBudget);
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
  const saveBudget = (newBudget) => {
    localStorage.setItem("budget", JSON.stringify(newBudget));
  };
  useEffect(() => {}, [budget]);

  const getBudget = () => {
    let newBudget = JSON.parse(localStorage.getItem("budget"));
    newBudget && setBudget(newBudget);
  };
  useEffect(() => {
    getBudget();
  }, []);

  return (
    <div>
      <Layout
        budget={budget}
        updateBudget2={updateBudget2}
        activateButton={activateButton}
        budgetPanel={budgetPanel}
        total={total}
        name={name}
        surname={surname}
        getName={getName}
        getSurname={getSurname}
        addBudgetList = {addBudgetList}
        handleSubmit={handleSubmit}
        newBudget={newBudget}
      />
    </div>
  );
};

export default Main;
