import { useContext } from "react";
import { CartContext } from '../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartTable = (props) => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    return (
        <div className='table-container'>
            {
            (cartItems.length === 0) ?
                <p className='no-items'>No hay items en el carrito</p>
            :
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                </tr>
                </thead>
                <tbody>
                {
                    cartItems.map((item) => (
                    <tr key={item.item.id}>
                        <td>
                            <img src={item.item.img} alt={item.item.name} className={(props.imgClass) ? props.imgClass + ' img-thumbnail' : 'img-thumbnail cart-image'}/>
                        </td>
                        <td>{item.item.name}</td>
                        <td>{item.quantity}</td>
                        <td>${item.item.price}</td>
                        <td><FontAwesomeIcon icon={faTrash} className="cart-trash" onClick={() => removeFromCart(item.item.id)}/></td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
            }
        </div>
    )
}

export default CartTable;