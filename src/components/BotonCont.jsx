import { useState } from "react";


 
const BotonCont = ({stock}) =>{
    
    const [cont, setCont] = useState(1)
    const sumar = () =>{
        
        (cont >= stock) ? setCont(cont) : setCont(cont+1)
        
    }
    const restar = () =>{
        (cont >=2) ? setCont(cont-1) : setCont(1)
        
    }
    
    return(
        <div style={{display:"grid", gridTemplateColumns:"60% 40%", height:50, width:380, textAlign:"center"}}>
        <div style={{display:"grid", gridTemplateColumns:"33% 33% 33%", paddingRight:10 }}>
            <button  className="boton1"onClick={sumar}>+</button>
            <h3 className="tit2">{cont}</h3>
            <button className="boton1" onClick={restar}>-</button>
        </div>
        <button className="boton1">Agregar al Carrito</button>
        </div>
    )
}

export default  BotonCont;