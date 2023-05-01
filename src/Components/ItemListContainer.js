import { useState, useEffect } from "react";
import {getProducts, getProductsByCategory} from '../asyncMock.js';
import ItemList from './ItemList';

import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState ([])

  const {categoryId} = useParams ()

  useEffect (() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts
    asyncFunc (categoryId)
      .then (response => {
        setProducts (response)
      })
      .catch (error => {
        console.error (error)
      })
  }, [categoryId])
      
  return (
    <div className="mt-5" style={{display: "flex", justifyContent: "center"}}>
      <h1>{greeting}</h1>
      {(typeof products !== 'undefined' && products.length > 0) ? <ItemList products={products}/> : ''}
    </div>
  )
}


export default ItemListContainer;