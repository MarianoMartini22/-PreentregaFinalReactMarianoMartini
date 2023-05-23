import { useContext, useEffect, useMemo } from "react";
import { CartContext } from "../contexts/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';
import getAutoincrementable from "../helpers/getAutoincrementable";
import Swal from 'sweetalert2';
import validarDatos from "../helpers/validarFormulario";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const CheckoutForm = () => {
    const navigate = useNavigate();
    const { cartItems, clearCart } = useContext(CartContext);

    useMemo(() => {
      if (cartItems.length === 0) navigate(-1);
    }, [cartItems.length, navigate]);

    const {
      register,
      handleSubmit,
      formState: { errors, isValid },
      reset,
      getValues,
    } = useForm();

    useEffect(() => {
      reset({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        email2: '',
        cartItems: [],
        ordenN: 0,
        estado: 'generada',
        timestamp: serverTimestamp(),
      });
    }, [reset]);

    const enviarDatos = async (data) => {
      data.cartItems = cartItems;
      const validador = validarDatos(data);
      if (!validador) {
        Swal.fire({
          title: 'Error al crear orden',
          text: 'Revisar los datos ingresados',
          icon: 'error',
          confirmButtonText: 'Cerrar',
        });
        return;
      }
      try {
        Swal.fire({
          title: 'Espere...',
          html: 'Estamos cargando su orden',
          allowOutsideClick: false,
          showConfirmButton: false,
        });
        const orden = await getAutoincrementable("ordenes");
        data.ordenN = orden;
        await addDoc(collection(db, "ordenes"), data);
        Swal.close();
        Swal.fire({
          title: `Orden #${data.ordenN} creada con éxito!`,
          text: `${data.nombre} pronto vas a recibir el curso al email: ${data.email}`,
          icon: 'success',
          confirmButtonText: 'Volver',
          willClose: () => {
            clearCart();
            navigate('/');
          }
        });
        reset();
      } catch (error) {
        Swal.close();
        Swal.fire({
          title: 'Error al crear orden',
          text: 'Revisar los datos ingresados',
          icon: 'error',
          confirmButtonText: 'Cerrar',
        });
      }
    };

    const validateEmail = (title, value) => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!pattern.test(value)) {
        return 'Ingrese un email válido';
      }
      if (title === 'email2' && value !== getValues('email')) {
        return 'Los email deben coincidir';
      }
      return true;
    };
    
    

    return (
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit(enviarDatos)}>
          <div className="form-group">
            <label htmlFor="nombre" className="form-label">Nombre/s</label>
            <input type="text" className="form-control" id="nombre" name="nombre" {...register('nombre', { required: true, minLength: 3 })} />
            {errors.nombre && <span className="badge text-bg-warning mt-3">Ingrese un nombre válido (mínimo 3 caracteres)</span>}
          </div>
          <div className="form-group">
            <label htmlFor="apellido" className="form-label">Apellido/s</label>
            <input type="text" className="form-control" id="apellido" name="apellido" {...register('apellido', { required: true, minLength: 3 })} />
            {errors.apellido && <span className="badge text-bg-warning mt-3">Ingrese un apellido válido (mínimo 3 caracteres)</span>}
          </div>
          <div className="form-group">
            <label htmlFor="telefono" className="form-label">Telefono</label>
            <input type="tel" className="form-control" id="telefono" name="telefono" {...register('telefono', { required: true, pattern: /[0-9]{10}/ })} />
            {errors.telefono && <span className="badge text-bg-warning mt-3">Ingrese un teléfono válido (10 dígitos numéricos)</span>}
            <div id="phoneHelp" className="form-text">Indique Cod Area (Ej: 11) + numero</div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" {...register('email', { required: true, validate: (value) => validateEmail('email1', value) })} />
            {errors.email && <span className="badge text-bg-warning mt-3">Ingrese un email válido</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email2" className="form-label">Ingrese nuevamente su Email</label>
            <input
              type="email"
              className="form-control"
              id="email2"
              name="email2"
              {...register('email2', {
                required: true,
                validate: (value) => validateEmail('email2', value)
              })}
            />
            {errors.email2 && (
              <span className="badge text-bg-warning mt-3">
                {errors.email2.message}
              </span>
            )}
          </div>

          <button type="submit" className="btn btn-success finalizar-compra" disabled={!isValid}>Finalizar Compra</button>
        </form>
      </div>
    );
  };
  
  export default CheckoutForm;
  