

 const ExtraDet = ({titulo, detalles}) =>{
    return(
        <div style={{display:"grid", gridTemplateRows:"50% 50%", marginTop:10}}>
                        <h4 className="tit2" style={{fontSize:"X-Large"}}>{titulo}</h4>
                        <p className="tit2">{detalles}</p>
                        
                    </div>
    )
 }

 export default ExtraDet;