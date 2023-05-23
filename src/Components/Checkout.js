import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartTable from "./CartTable"
import './Checkout.css';
import CheckoutForm from "./CheckoutForm";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { montoTotal, cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    const esTelefono = isMobile;

    return (
        <>
            {
                (esTelefono && cartItems.length === 0) ? 
                    <>
                        <p className='no-items'>No hay items en el carrito</p>
                        <button className="btn btn-info" onClick={goBack}>Volver</button>
                    </>
                :
                <div className="checkout-container">
                    <section id="detalle">
                        <h3 className="texto-compras">Resumen de Compra</h3>
                        <hr />
                        <CartTable imgClass="checkout-img"/>
                        <h3 className="texto-compras">Total: ${montoTotal}</h3>
                    </section>
                    <section id="checkout">
                        <h3 className="texto-compras">Datos de Compra</h3>
                        <hr />
                        <CheckoutForm />
                    </section>
                </div>
            }
        </>
    )
}

export default Checkout