import { useContext } from "react";
import { CartContextt } from "../../Context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Precios from "../ItemDetail/Precios";
import CartCheckOut from "../CheckOut/CartCheckOut";


const Cart = () => {
  const {
    carrito,
    precioTotal,
    vaciarCarrito,
    borrarProducto,
    contCom,
    terminar,
  } = useContext(CartContextt);

  if (carrito.length === 0) {
    return (
      <div>
        <h2 className="tit1">El carrito esta vacio 😥</h2>
        <Link className="tit2" to="/">
          Volver Productos
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="tit1" style={{ padding: 10 }}>
        CARRITO DE COMPRAS
      </h2>
      {carrito.map((productoCarrito) => (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "50% 50%",
            marginTop: 10,
          }}
        >
          <img width={150} height={120} src={productoCarrito.imagen} alt="" />
          <div>
            <h4 className="tit2">{productoCarrito.nombreProdu}</h4>
            <h5 className="tit2">Cantidad: {productoCarrito.cantidad}</h5>
            <h5 className="tit1">
              Subtotal: ${productoCarrito.cantidad * productoCarrito.precio}
            </h5>
            <button
              className="boton1"
              style={{ height: 30, width: 75 }}
              onClick={() => borrarProducto(productoCarrito.id)}
            >
              ELIMINAR
            </button>
          </div>
        </div>
      ))}
      <h3 className="tit1" style={{ padding: 10 }}>
        Total de la orden: ${precioTotal()}
      </h3>
      <Precios precio={precioTotal()} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          marginTop: 10,
        }}
      >
        <button
          className="boton3"
          style={{ padding: 10 }}
          onClick={vaciarCarrito}
        >
          Vaciar Carrito
        </button>
        <button className="boton1" style={{ padding: 10 }} onClick={terminar}>
          Continuar la compra
        </button>
      </div>
    </div>
  );
};

export default Cart;
