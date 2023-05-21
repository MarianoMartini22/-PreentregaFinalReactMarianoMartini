const validarDatos = (datos) => {
    const { nombre, apellido, cartItems } = datos;
    if (nombre.trim().length < 3 || apellido.trim().length < 3) {
      return false;
    }
  
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return false;
    }
  
    return true;
};
export default validarDatos;  