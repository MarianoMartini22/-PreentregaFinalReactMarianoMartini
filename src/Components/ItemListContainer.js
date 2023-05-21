import ItemList from './ItemList';

import { useParams } from "react-router-dom";
import { useFirebase } from "../hooks/useFirebase.js";

const ItemListContainer = ({greeting}) => {

  const {categoryId} = useParams ();
  const cursos = useFirebase();
  const cursosCategoria = useFirebase('categorias', {category: categoryId}, 'items', true, true);

  let products = [];
  if (categoryId) products = cursosCategoria;
  else products = cursos;
  return (
    <div className="mt-5" style={{display: "flex", justifyContent: "center"}}>
      <h1>{greeting}</h1>
      {(typeof products !== 'undefined' && products.length > 0) ? <ItemList products={products}/> : ''}
    </div>
  )
}


export default ItemListContainer;