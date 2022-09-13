import React from "react";

const Budget = ({webChecked, seoChecked, adsCheked, budget}) => {

  return (
    <div>
      {/* <header>¿Qué quieres hacer?</header>
      <p>
        <input
          type="checkbox"
          value="500"
          name="webSite"
          checked = {webChecked}
          // onChange={(e) => setWebChecked(Number(e.target.value))}
        />
        Una página web (500€) <br />
      </p>
      <p>
        <input
          type="checkbox"
          value="300"
          name="SEOConsulting"
          checked={seoChecked}
          // onChange={(e) => setSeoChecked(Number(e.target.value))}
        />
        Una consulta SEO (300€) <br />
      </p>
      <p>
        <input
          type="checkbox"
          value="200"
          name="googleAdds"
          checked={adsCheked}
          // onChange={(e) => setAdsChecked(Number(e.target.value))}
        />
        Una campaña Google Ads (200€) <br />
      </p>

      <p>Total: {budget}</p> */}
    </div>
  );
};

export default Budget;
