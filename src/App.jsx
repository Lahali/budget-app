import React from "react";
import { useState, useEffect } from "react";
import { Parragraf, Header } from "./components/Styles";
import Panel from "./components/Panel";
import Layout from "./components/Layout";

function App() {
  // const [webChecked, setWebChecked] = useState(false);
  // const [seoChecked, setSeoChecked] = useState(false);
  // const [adsChecked, setAdsChecked] = useState(false);
  // const [pages, setPages] = useState(0);
  // const [languages, setLanguages] = useState(0);
  

  const [budget, setBudget] = useState({
    webSite: false,
    seoConsulting: false,
    googleAdds: false,
    pages: 0,
    languages: 0,
  });



  // function calculateTotal () {
  //   total = budget.seo? 500 : 0  + budget.webSite, etc 
  // } esto tendría que ir aparte en una carpeta utils, x ejemplo


  useEffect(() => {
    //setBudget(0);
    // updateBudget();
  }, []);

 

  const updateBudget2 = (event) => {
    if(!event) return;
    let name = event.target.name;
    let value = event.target.checked;
    let newBudget = { ...budget };

    newBudget[name] = value;
    setBudget(newBudget);
  };



  // localStorage
  // useEffect(() => {
  //localStorage.setItem("budget", JSON.stringify(budget))
  // }, [budget])

  return (
    <div>
      {budget.webSite ? "ueee" : "uooo"}
      <Layout budget={budget} updateBudget2={updateBudget2}/>
    </div>
    //   <div>
    //     <Header>¿Qué quieres hacer?</Header>

    //     <Parragraf>
    //       <input
    //         type="checkbox"
    //         value="500"
    //         name="webSite"
    //         checked={webChecked}
    //         onChange={updateBudget2}
    //         />
    //       Una página web (500€) <br />
    //     </Parragraf>

    //     {/* {webChecked && (
    //       <Panel
    //       handlePage={handlePage}
    //       handleLanguage={handleLanguage}
    //       pages={pages}
    //       languages={languages}
    //       addPage={addPage}
    //       decreasePage={decreasePage}
    //       addLanguage={addLanguage}
    //       decreaseLanguage={decreaseLanguage}
    //       />
    //       )} */}

    //     <Parragraf>
    //       <input
    //         type="checkbox"
    //         value="300"
    //         name="seoConsulting"
    //         checked={seoChecked}
    //         // onChange={handleSeoChange}
    //         />
    //       Una consulta SEO (300€) <br />
    //     </Parragraf>

    //     <Parragraf>
    //       <input
    //         type="checkbox"
    //         value="200"
    //         name="googleAdds"
    //         checked={adsChecked}
    //         // onChange={handleAdsChange}
    //         />
    //       Una campaña Google Ads (200€) <br />
    //     </Parragraf>

    //     <Parragraf>Total: {budget} </Parragraf>
    //   </div>
  );
}

export default App;

// const updateBudget = () => {
//   webChecked && setBudget((prev) => prev + (pages * languages * 30 + 500));
//   seoChecked && setBudget((prev) => prev + 300);
//   adsChecked && setBudget((prev) => prev + 200);
// };

// const handleWebChange = () => {
//   setWebChecked(!webChecked);
//   setLanguages(0);
//   setPages(0);
// };
// const handleSeoChange = () => {
//   setSeoChecked(!seoChecked);
// };
// const handleAdsChange = () => {
//   setAdsChecked(!adsChecked);
// };

// const handlePage = (e) => {
//   setPages(Number(e.target.value));
//   addPage()
//   decreasePage()
// };
// const handleLanguage = (e) => {
//   setLanguages(Number(e.target.value));
// };

// const addPage = () => {
//   setPages(prev => prev + 1)
// }

// const decreasePage = () => {
//   if(pages <= 0) return
//   setPages(prev => prev - 1)
// }

// const addLanguage = () => {
//   setLanguages(prev => prev + 1)
// }

// const decreaseLanguage = () => {
//   if(languages <= 0) return
//   setLanguages(prev => prev - 1)
// }
