import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { GetProducts } from "./components/GetProducts";
import ItemList from "./ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer";

import { ItemListOrdenado2 } from "./ItemListOrdenado2";



const ItemListContainer = () => {
  const [productos, setProductos] = useState([]) 
  
 /*  const categoria = useParams().categoria */
    const {idCategoria} = useParams()

  useEffect(() =>{
    GetProducts().then ((res )=>{
      if (idCategoria){
        const productosFiltrados = res.filter((producto)=> producto.categoria ===idCategoria)
        setProductos(productosFiltrados)
      } else{
      
      
      setProductos(res)}
    })
      .catch((error)=>{
        console.error(error)
      })
      .finally(()=>{
        console.log("Finalizao la promesa")
      })
  }, [idCategoria])

  return (
      <div>
        <ItemList productos={productos}/>
        
      
       {/*  <ItemListOrdenado2 productos={productos}></ItemListOrdenado2> */}
      </div>
      
    )
  
  }

  export default ItemListContainer;
  