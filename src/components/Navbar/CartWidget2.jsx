
import CartLogo from "/src/assets/images/cart3.svg"

import { useContext } from "react";
import { CartContextt } from "../../Context/CartContext";
import { Link } from "react-router-dom"

const CartWidget2 = () => {
  const {cantidadTotal} =useContext(CartContextt)
  return (
    <div style={{display:"grid", gridTemplateColumns:"50% 50%"}}>
    
    <Link to="/cart">
    <button type="button" className="btn btn-warning">

        <img src={CartLogo} width="28"/>
        
        <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill text-bg-warning">{cantidadTotal()}</span>


        </button>
        </Link>
     
</div>
  )
}


export default CartWidget2;