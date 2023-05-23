import '../Components/ItemCount.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';

const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState (initial);
    const esTelefono = isMobile;
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    
    const increment = () => {
        if (quantity < stock) {
            setQuantity (quantity+1)
        }
    }


    const decrement = () => {
    if (quantity > 1) {
        setQuantity (quantity -1)
    }
}

return (
    <div className='Counter'>
        <div className='Controls mb-3'>
            <FontAwesomeIcon icon={faMinus} onClick={decrement} className='addsBTN'/>
            <h4 className='Number'>{quantity}</h4>
            <FontAwesomeIcon icon={faPlus} onClick={increment} className='addsBTN'/>
        </div>
        <div className={(esTelefono) ? 'button-container' : ''}>
            <button className='btn btn-success m-1' onClick={() => onAdd (quantity)} disabled={!stock}>
                Agregar al carrito
            </button>
            {
                (esTelefono) ?
                <button className='btn btn-info m-1' onClick={goBack}>
                    Volver
                </button> : ""
            }
        </div>
    </div>
)
}
export default ItemCount;