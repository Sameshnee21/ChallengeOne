/*Veg Page */


import useState from "react";
//import { VEG } from "./filter/veg";

export function Contact() {
  return (
    <div className="shop">
      <div className="shopTitle">
      <h2>Lamb Rack</h2>
      <h3>Recipe Here.</h3>
        <img src="Meat1.png" alt="" />
        <h2>Chicken Burger</h2>
        <h3>Recipe Here.</h3>
        <img src="Meat2.png" alt="" />
        <h2>Roast Duck</h2>
        <h3>Recipe Here.</h3>
        <img src="Meat3.png" alt="" />
      </div>

      <div className="meat">
        {/*{VEG.map((veg) => (*/}
          {/*<Veg key={veg.id} data={veg} />
        ))}*/}
      </div>
    </div>
  );
}