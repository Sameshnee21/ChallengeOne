import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/cart/Cart";

import { Fish} from "./pages/Fish";
import { Dessert} from "./pages/Dessert";
import { Veg} from "./pages/Veg";
import { Vegan} from "./pages/Vegan";
import {Contact} from "./pages/Contact";


import "./App.css";
import CartContextProvider from "./Context/CartContext";

function App() {
  return (
    <div className="App">
      {
      <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fish" element={<Fish />} />
          <Route path="/dessert" element={<Dessert/>} />
          <Route path="/veg" element={<Veg/>} />
          <Route path="/vegan" element={<Vegan/>} />
          

        </Routes>
      </BrowserRouter>
    </CartContextProvider>
      }
    </div>
  );
}

export default App;
