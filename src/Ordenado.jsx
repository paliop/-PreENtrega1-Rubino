

const ordenado = (Component, productos) =>{
    return function(){
    const Sorted = (ordProductos) =>{
        const ordenarProductos  = ordProductos.sort((a,b)=>b.precio - a.precio)
        console.log(ordenarProductos)
        return ordenarProductos;

        
    }
    return(
        productos && (
           <div>
           <Component productos={Sorted(productos)}/>
           </div>
        )
    )
    
}
}
export default ordenado;