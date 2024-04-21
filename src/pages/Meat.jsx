/*Veg Page */


import useState from "react";
//import { VEG } from "./filter/veg";

export function meat() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h2>Salmon Nigiri</h2>
        <img src="Meat1" alt="" />
        <h2>Cheesy Garlic Mussels</h2>
        <img src="Meat22" alt="" />
        <h2>Calamari Steaks</h2>
        <img src="Meat3" alt="" />
      </div>

      <div className="meat">
        {/*{VEG.map((veg) => (*/}
          {/*<Veg key={veg.id} data={veg} />
        ))}*/}
      </div>
    </div>
  );
}