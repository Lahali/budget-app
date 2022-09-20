import React from "react";
import { Header, Parragraf } from "./Styles";
import Panel from "./Panel";

const Layout = (props) => {
  return (
    <div>
      <Header>¿Qué quieres hacer?</Header>
      <Parragraf>
        <input type="checkbox" name="webSite" onChange={props.updateBudget2} />
        Una página web (500€) <br />
      </Parragraf>

      {props.budget.webSite && (
        <Panel
          budget={props.budget}
          updateBudget2={props.updateBudget2}
          increaseButton={props.increaseButton}
          decreaseButton={props.decreaseButton}
          budgetPanel={props.budgetPanel}
        />
      )}

      <Parragraf>
        <input
          type="checkbox"
          name="seoConsulting"
          onChange={props.updateBudget2}
        />
        Una consulta SEO (300€) <br />
      </Parragraf>

      <Parragraf>
        <input
          type="checkbox"
          name="googleAdds"
          onChange={props.updateBudget2}
        />
        Una campaña Google Ads (200€) <br />
      </Parragraf>
      <Parragraf>Total: {props.total}</Parragraf>
    </div>
  );
};

export default Layout;
