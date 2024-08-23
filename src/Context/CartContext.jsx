import { Children, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContextt = createContext();

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const estaEnCarrito = (idProducto) => {
    const condicional = carrito.some(
      (productoCarrito) => productoCarrito.id === idProducto
    );
    return condicional;
  };
  const agregarProducto = (productoNuevo) => {
    const condicion = estaEnCarrito(productoNuevo.id);
    if (condicion) {
      const nuevoCarrito = carrito.map((produ) => {
       
        if (produ.id === productoNuevo.id) {
          return {
            ...produ,
            cantidad: produ.cantidad + productoNuevo.cantidad,
          };
        } else {
          return produ;
        }
      });
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, productoNuevo]);
    }
  };

  const cantidadTotal = () => {
    const totalProductos = carrito.reduce(
      (total, produCarr) => total + produCarr.cantidad,
      0
    );
    return totalProductos;
  };
  const precioTotal = () => {
    const precio = carrito.reduce(
      (total, productoCarrito) =>
        total + productoCarrito.cantidad * productoCarrito.precio,
      0
    );
    return precio;
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };
  const borrarProducto = (idProducto) => {
    const productosFiltrados = carrito.filter(
      (productoCarrito) => productoCarrito.id !== idProducto
    );
    setCarrito(productosFiltrados);
  };

  const navigate = useNavigate();
  let [contCom, setContCom] = useState(false);
  const terminar = () => {
    setContCom(true);
    console.log(contCom);
  };

  return (
    <CartContextt.Provider
      value={{
        carrito,
        agregarProducto,
        cantidadTotal,
        precioTotal,
        vaciarCarrito,
        borrarProducto,
        contCom,
        terminar,
      }}
    >
      {children}
    </CartContextt.Provider>
  );
};

export { CartProvider, CartContextt };
