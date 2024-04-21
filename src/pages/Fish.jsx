/*Veg Page */


import useState from "react";
//import { VEG } from "./filter/veg";

export function Fish() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h2>Salmon Nigiri</h2>
        <h3>Recipe Here.</h3>
        <img src="Fish1.png" alt="" />
        <h2>Cheesy Garlic Mussels</h2>
        <h3>Recipe Here.</h3>
        <img src="Fish2.png" alt="" />
        <h2>Calamari Steaks</h2>
        <h3>Recipe Here.</h3>
        <img src="Fish3.png" alt="" />
      </div>

      <div className="fish">
        {/*{VEG.map((veg) => (*/}
          {/*<Veg key={veg.id} data={veg} />
        ))}*/}
      </div>
    </div>
  );
}