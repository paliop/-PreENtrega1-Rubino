import BotonCont from "./BotonCont";
import ExtraDet from "./ExtraDet";


const ItemDetail = ({item}) =>{
    let Cuotas;
                    Cuotas = Math.floor(item.precio/6) 
    return(
        <div>
            <div className="container fluid" style={{display:"grid", gridTemplateColumns:"20% 50% 30%", height:"70vh"}}>
        <div className="col">
            <div className="row" style={{paddingTop:10}}>
                <img src={item.imagen} style={{width:145, height:145}}></img>
            </div>
            <div className="row" style={{paddingTop:10}}>
                <img src={item.imagen} style={{width:145, height:145}}></img>
            </div>
            <div className="row" style={{paddingTop:10}}>
                <img src={item.imagen} style={{width:145, height:145}}></img>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src={item.imagen}style={{width:380, height:400, paddingTop:10}}></img>
            </div> 
        </div>
        <div className="col" style={{paddingTop:10}} >
            <div className="row">
                <h1 className="tit2">{item.nombreProdu}</h1><br></br>
                <h3 className="tit1">{item.categoria}</h3><br></br>
                <h1 className="tit2">${item.precio}</h1>
                
            </div>
            <div className="row">
                <h2 className="tit1">20% off pagando por tranfeencia</h2>
            </div>
            <div className="row">
            <h3 className="tit2">6 Cuotas de ${Cuotas}</h3>
            </div>
            <div className="row" style={{paddingTop:10}}>
                
                
                <BotonCont stock={item.stock}/>
                {item.cuidados && (
                    <ExtraDet detalles={item.cuidados}></ExtraDet>
                )}
                
            </div>
        </div>

        
        
        
        
        
        </div>
        </div>
    )
}

export default ItemDetail;