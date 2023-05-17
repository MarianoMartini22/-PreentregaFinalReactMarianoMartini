import { useState, useEffect } from "react";
import {getProducts, getProductsByCategory} from '../asyncMock.js';
import ItemsContext from "../contexts/ItemsContext.js";

import ItemList from './ItemList';

import { useParams } from "react-router-dom";
import { useFirebase } from "../hooks/useFirebase.js";

const ItemListContainer = ({greeting}) => {

  const {categoryId} = useParams ()
  const products = useFirebase();

      
  return (
    <ItemsContext.Provider value="">
      <div className="mt-5" style={{display: "flex", justifyContent: "center"}}>
        <h1>{greeting}</h1>
        {(typeof products !== 'undefined' && products.length > 0) ? <ItemList products={products}/> : ''}
      </div>
    </ItemsContext.Provider>
  )
}


export default ItemListContainer;