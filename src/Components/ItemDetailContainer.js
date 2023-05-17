import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import {getProductById} from '../asyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { useFirebase } from '../hooks/useFirebase'

const ItemDetailContainer = () => {
    const {itemId} = useParams ()
    const product = useFirebase('id', { id: itemId }, 'items', true);
    
    return (
        <div className='ItemDetailContainer'>
            {(product.category) ? <ItemDetail {...product}/> : ''}
        </div>
    )
}

export default ItemDetailContainer