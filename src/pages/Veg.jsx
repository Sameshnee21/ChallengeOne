/*Veg Page */


import useState from "react";
//import { VEG } from "./filter/veg";

export function Veg() {
  return (
    <div className="shop">
      <div className="shopTitle">
      <h2>Chilli Paneer</h2>
      <h3>Recipe Here.</h3>
        <img src="Veg1" alt="" />
        <h2>Potatoe Pockets</h2>
        <h3>Recipe Here.</h3>
        <img src="Veg2" alt="" />
        <h2>Tomato Pasta</h2>
        <h3>Recipe Here.</h3>
        <img src="Veg3.png" alt="" />
      </div>

      <div className="veg">
        {/*{VEG.map((veg) => (*/}
          {/*<Veg key={veg.id} data={veg} />
        ))}*/}
      </div>
    </div>
  );
}