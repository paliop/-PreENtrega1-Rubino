import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GetProductById } from "./GetProducts"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () =>{

    const [item, setItem] = useState(null)
    const id = useParams().id

    useEffect(() =>{
        GetProductById(Number(id))
        .then((res) =>{
            setItem(res)
        })
        
    },[])

    return(
        <div>
           {item && <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer;