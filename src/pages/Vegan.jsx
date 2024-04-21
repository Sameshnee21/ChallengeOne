/*Vegan Page */


import useState from "react";
import { VEGAN } from "./filter/vegan";

export function Vegan() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Vegan</h1>
      </div>

      <div className="vegan">
        {VEGAN.map((vegan) => (
          <Vegan key={vegan.id} data={vegan} />
        ))}
      </div>
    </div>
  );
}