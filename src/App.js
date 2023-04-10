import React, {  useState } from "react";
import { Route, Routes} from 'react-router-dom';
import HeaderNav from "./components/headerNav/HeaderNav";
import './App.css'
import Main from "./components/pages/main/Main";
import About from "./components/pages/about/About";
import Footer from "./components/footer/Footer";
import Katalog from "./components/pages/katalog/Katalog";
import Blog from './components/pages/blog/Blog'
import ItemKatalog from "./components/pages/katalog/Item";


import Busket from "./components/busket/Busket";


function App() {
  const [show,setShow] = useState(true)
  const [cart,setCart] = useState([])

  const handle = (item)=>{
    if(cart.indexOf(item) !== -1) return;
    setCart([...cart,item])
      
  }
  const handleChange = (item,d) =>{
    const ind = cart.indexOf(item)
    const arr =cart
    arr[ind].amount +=d
  
    if(arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);

  }




  return (
    <div className="App">
      <HeaderNav setShow={setShow} size={cart.length} />
      {
show?<Routes>
      
<Route path="/"  element={<Main />}/>
<Route path="/about"  element={<About />}/>
<Route path="/kategory"  element={<Katalog handle={handle} />}/>
<Route path="/kategory/item"  element={<ItemKatalog />}/>
<Route path="/blog"  element={<Blog />}/>

</Routes>:<Busket cart={cart} setCart={setCart} handleChange={handleChange}/>
      }
       
       <Footer />

    </div>
  );
}

export default App;
