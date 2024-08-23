import React, { useState } from "react";
import { useContext } from "react";
import { CartContextt } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import CartCheckOut from "../CheckOut/CartCheckOut";

const CartContainer = () => {
  const { carrito, contCom } = useContext(CartContextt);
  if (carrito.length === 0) {
    return (
      <div style={{ height: "70vh" }}>
        <h2 className="tit1">El carrito esta vacio 😥</h2>
        <Link className="tit2" to="/">
          Volver Productos
        </Link>
      </div>
    );
  }

  if (contCom == false)
    return (
      <div style={{ display: "grid", gridTemplateColumns: "33% 33% 33%",height: "70vh" }}>
        <Cart></Cart>
      </div>
    );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "33% 33% 33%",
        height: "70vh",
      }}
    >
      <Cart></Cart>
      <CartCheckOut></CartCheckOut>
    </div>
  );
};

export default CartContainer;
