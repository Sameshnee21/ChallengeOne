import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to={"/"}>Full Recipebook</Link>
        <Link to={"/vegan"}>Vegan</Link>
        <Link to={"/veg"}>Vegetarian</Link>
        <Link to={"/dessert"}>Desserts</Link>
        <Link to={"/meat"}>Meat</Link>
        <Link to={"/fish"}>Fish</Link>
       
        <Link to={"/cart"}>
          <ShoppingCart size={32} />
        </Link>
        
      </div>
    </div>
  );
}
