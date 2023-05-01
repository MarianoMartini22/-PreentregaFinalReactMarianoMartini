import './ItemList.css'
import Item from './Item'

const ItemList = ({products}) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 text-center justify-content-center w-50 itemList">
            {products.map (prod => <Item key={prod.id}{...prod} />)}
        </div>
    )
}

export default ItemList