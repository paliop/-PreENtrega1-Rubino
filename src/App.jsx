import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './ItemListContainer'

function App() {
  

  return (
    <>
      <div className='container-fluid'>
        <NavBar></NavBar>
        <ItemListContainer saludo={"Recibi tus plantas en casa! Envios en gran Rosario Gratis"}/>
      </div>
    </>
  )
}

export default App
