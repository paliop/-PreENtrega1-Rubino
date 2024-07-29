
import { resolvePath } from "react-router-dom"
import data from "../assets/Productos.json"

export const GetProducts = () =>{

    return new Promise((resolve, reject) =>{
        resolve(data)
    })

}

export const GetProductById = (id) =>{
    return new Promise((resolve, reject) =>{
        const item = data.find((el) => el.id === id)
        if (item) {
            resolve(item)
            
        } else {
            reject({
                error:"no se encontro el producto"
            })
        }
    })
}
