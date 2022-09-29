import React, { useState, useEffect } from "react";
import { generateId } from "../helpers/index";
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

  const [client, setClient] = useState('')
  const [budgetName, setbudgetName] = useState('')

  const [newBudget, setNewBudget] = useState([])

  // para el buscador por palabras
  const [searchField, setSearchField] = useState('')

  // lógica del buscador
  // hacemos un filter y pasamos todo a minúsculas: lo que entra en el input y lo que compara en el array
  const filteredBudget = newBudget.filter(item => {
    return (
      item.budgetName.toLocaleLowerCase().startsWith(searchField.toLocaleLowerCase())
    )
  })
  // ejecutamos la función desde el input
  const handleFilter = (event) => {
    setSearchField(event.target.value)
  }


  const getClient = (event) => setClient(event.target.value)
  const getbudgetName = (event) => setbudgetName(event.target.value)


  const addBudgetList = budgetNew => {
    budgetNew.id = generateId()
    budgetNew.date = Date.now()
    setNewBudget([...newBudget, budgetNew])
    
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    if([client, budgetName, total].includes('')) {
      return alert("Faltan campos por rellenar")
    }
    addBudgetList({client, budgetName, total, budget})
    saveTotalBudget(newBudget)
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

  // localStorage del presupuesto total
  const saveTotalBudget = (newTotalBudget) => {
    localStorage.setItem("totalBudget", JSON.stringify(newTotalBudget));
  };
  useEffect(() => {}, [newBudget]);




  return (
    <div>
      <Layout
        budget={budget}
        updateBudget2={updateBudget2}
        activateButton={activateButton}
        budgetPanel={budgetPanel}
        total={total}
        client={client}
        budgetName={budgetName}
        getClient={getClient}
        getbudgetName={getbudgetName}
        addBudgetList = {addBudgetList}
        handleSubmit={handleSubmit}
        newBudget={newBudget}
        handleFilter={handleFilter}
        filteredBudget={filteredBudget}
      />
    </div>
  );
};

export default Main;
