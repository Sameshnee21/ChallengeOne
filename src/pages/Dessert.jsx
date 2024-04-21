/*Dessert Page */


import useState from "react";
//import { VEG } from "./filter/veg";

export function Dessert() {
  return (
    <div className="shop">
      <div className="shopTitle">
      <h2>Berry Tart</h2>
      <h3>Recipe Here.</h3>
        <img src="Dessert1" alt="" />
        <h2>Baklava</h2>
        <h3>Recipe Here.</h3>
        <img src="Dessert2" alt="" />
        <h2>Iced Coffee</h2>
        <h3>Recipe Here.</h3>
        <img src="Dessert3.png" alt="" />
      </div>

      <div className="dessert">
        {/*{VEG.map((veg) => (*/}
          {/*<Veg key={veg.id} data={veg} />
        ))}*/}
      </div>
    </div>
  );
}