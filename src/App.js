import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import './App.css'

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer nombre="Mariano"/>
    </div>
  );
};

export default App;
