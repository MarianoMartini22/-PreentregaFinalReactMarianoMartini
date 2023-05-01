import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import './App.css'
// import ItemCount from './Components/ItemCount'
import ItemDetailContainer from './Components/ItemDetailContainer';

function App () {
  return (
    <div className="App">
      <BrowserRouter basename="/PreentregaFinalReactMarianoMartini">
      <NavBar />
      <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
