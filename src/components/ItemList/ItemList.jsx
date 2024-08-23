
import { Link } from "react-router-dom" 
const ItemList = ({productos}) =>{
        
    return(
        
        
        <div style={{display:"grid", gridTemplateColumns:"25% 25% 25% 25%", gridTemplateRows:"33% 33% 33%"}}>
            {productos.length > 0 && 
                productos.map((produ) =>{
                    let Cuotas;
                    Cuotas = Math.floor(produ.precio/6) 
                    return(
                    <div key={produ.id} style={{textAlign:"center", marginTop:10}}>
                    <img src={produ.imagen} alt="{produ.nombreProdu}" style={{width:230, height:210}}></img>
                    <h3 className="tit2">{produ.nombreProdu}</h3>
                    <h4 className="tit2">${produ.precio}</h4>
                    <h5 className="tit2">6 Cuotas de ${Cuotas}</h5>
                    <Link className="boton2" to={`/item/${produ.id}`}>Ver Mas</Link>
                    </div>
                

                   
                
                )})
            }


      
        </div>
    )

}

export default ItemList;


