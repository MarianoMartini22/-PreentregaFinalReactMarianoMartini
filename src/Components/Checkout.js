import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartTable from "./CartTable"
import './Checkout.css';
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
    const { montoTotal } = useContext(CartContext);


    return (
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
    )
}

export default Checkout