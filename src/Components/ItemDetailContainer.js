import './ItemDetailContainer.css'
import ItemDetail from './ItemDetail'
import { useNavigate, useParams } from 'react-router-dom'
import { useFirebase } from '../hooks/useFirebase'
import { useEffect } from 'react'
import Swal from 'sweetalert2'

const ItemDetailContainer = () => {
    const navigate = useNavigate();
    const {itemId} = useParams ()
    const productData = useFirebase('id', { id: itemId }, 'items', true);
    useEffect(() => {
        if (productData[0]?.message) {
            Swal.fire({
                title: `Error`,
                text: `${productData[0].message}`,
                icon: 'error',
                confirmButtonText: 'Volver',
                willClose: () => {
                    navigate(-1);
                }
            });
        }
    }, [productData, navigate])
    
    let product = {};
    if (productData && productData.category) product = {...productData, id: itemId};
    return (
        <div className='ItemDetailContainer'>
            {(product) ? <ItemDetail {...product}/> : <span>No hay elementos</span>}
        </div>
    )
}

export default ItemDetailContainer