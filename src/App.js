import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HeaderNav from "./components/headerNav/HeaderNav";
import "./App.css";
import Main from "./components/pages/main/Main";
import About from "./components/pages/about/About";
import Footer from "./components/footer/Footer";
import Katalog from "./components/pages/katalog/Katalog";
import Blog from "./components/pages/blog/Blog";
import ItemKatalog from "./components/pages/katalog/Item";
import Kontact from "./components/pages/kontact/Kontact";

import Busket from "./components/busket/Busket";
import Delivery from "./components/pages/delivery/Delivery";
import FAQ from "./components/pages/faq/FAQ";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handle = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <div className="App">
      <HeaderNav setShow={setShow} size={cart.length} />
      {show ? (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/kategory" element={<Katalog handle={handle} />} />
          <Route path="/kategory/item" element={<ItemKatalog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/kontact" element={<Kontact />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      ) : (
        <Busket cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      <div className="footer_app_container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
