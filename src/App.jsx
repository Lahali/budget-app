import React from "react";
import { useState, useEffect } from "react"
import { Parragraf, Header } from "./components/Styles";
import Panel from "./components/Panel";

function App() {
  const [webChecked, setWebChecked] = useState(false);
  const [seoChecked, setSeoChecked] = useState(false);
  const [adsChecked, setAdsChecked] = useState(false);
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    setBudget(0);
    webChecked && setBudget((prev) => prev + 500);
    seoChecked && setBudget((prev) => prev + 300);
    adsChecked && setBudget((prev) => prev + 200);
    console.log("holiii");
  });

  // No es necesario hacer un ternario, así ya se cambia el state de false a true y viceversa
  const handleWebChange = () => {
    setWebChecked(!webChecked);
  };

  const handleSeoChange = () => {
    setSeoChecked(!seoChecked);
  };

  const handleAdsChange = () => {
    setAdsChecked(!adsChecked);
  };

  return (
    <div>
      <Header>¿Qué quieres hacer?</Header>
      <Parragraf>
        <input
          type="checkbox"
          value="500"
          name="webSite"
          checked={webChecked}
          onChange={handleWebChange}
        />
        Una página web (500€) <br />
      </Parragraf>
      <Panel/>
      <Parragraf>
        <input
          type="checkbox"
          value="300"
          name="SEOConsulting"
          checked={seoChecked}
          onChange={handleSeoChange}
        />
        Una consulta SEO (300€) <br />
      </Parragraf>
      <Parragraf>
        <input
          type="checkbox"
          value="200"
          name="googleAdds"
          checked={adsChecked}
          onChange={handleAdsChange}
        />
        Una campaña Google Ads (200€) <br />
      </Parragraf>

      <Parragraf>Total: {budget} </Parragraf>
    </div>
  );
}

export default App;
