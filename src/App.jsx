import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './ItemListContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemList, { ItemListOrdenado } from './ItemList'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/catalogo" element={<ItemList/>}></Route>
        <Route path="/item/:id"element={<ItemDetailContainer/>}></Route>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/> 
        
        </Routes>   
        <Footer></Footer>     
        </BrowserRouter>
    </>
  )
}

export default App
