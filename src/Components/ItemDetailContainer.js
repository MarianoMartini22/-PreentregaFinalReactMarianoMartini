import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import {getProductById} from '../asyncMock'
import itemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)
    
    const {itemId} = useParams ()

    useEffect (() =>{
        getProductById (itemId)
        .then (response => {
            setProduct (response)    
        })
        .catch (error => {
            console.error (error)
        })
    }, [itemId])
    
    return (
        <div className='ItemDetailContainer'>
            <itemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer