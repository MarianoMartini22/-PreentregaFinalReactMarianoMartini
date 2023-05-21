import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import './App.css'
// import ItemCount from './Components/ItemCount'
import ItemDetailContainer from './Components/ItemDetailContainer';
import { CartProvider } from "./contexts/CartContext";
import Checkout from "./Components/Checkout";

function App () {
  return (
    <div className="App">
        <BrowserRouter basename="/PreentregaFinalReactMarianoMartini">
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>
        </BrowserRouter>
      </div>
  );

};

export default App;
