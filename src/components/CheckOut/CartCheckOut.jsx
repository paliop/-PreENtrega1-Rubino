import { useState, useContext } from "react";
import { CartContextt } from "../../Context/CartContext.jsx";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import FormularioCheckOut from "./FormularioCheckOut";
import { db } from "../../db/db.js";
import ValidateForm from "../../utils/validacionForm.js";
import Swal from 'sweetalert2'

const CartCheckOut = () => {
  /*  const {user}= useContext(LogContext) */
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    confirmarCorreo:"",
  });
  const [idOrden, setIdOrden] = useState(null);
  const { carrito, precioTotal } = useContext(CartContextt);
  const handleChangeInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const orden = {
      comprador: { ...datosForm },
      produdctos: [...carrito],
      fecha: Timestamp.fromDate(new Date()),
      total: precioTotal(),
    };
    const response = await ValidateForm(datosForm);

    if (response.status === "succes") {
      sendOrder(orden);
    } else {
      await Swal.fire({
        icon:"error",
        title:"Error de validacion",
        text:response.message,
        color: "#F8E437",
        confirmButtonColor:"#8CF3B5"
      })
      console.log(response.message);
    }
  };

  const sendOrder = async (orden) => {
    try {
      const ordenRef = collection(db, "ordenes");
      const ordenDb = await addDoc(ordenRef, orden);
      setIdOrden(ordenDb.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {idOrden ? (
        <div style={{ marginTop: 10 }}>
          <h2 className="tit2"> PEDIDO COMPLETADO! </h2>
          <h5 className="tit1">
            Pronto nos pondremos en contacto para coordinar el envio{" "}
          </h5>
          <h4 className="tit2"> Numero de Orden : {idOrden}</h4>
        </div>
      ) : (
        <FormularioCheckOut
          datosForm={datosForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        ></FormularioCheckOut>
      )}
    </div>
  );
};

export default CartCheckOut;
