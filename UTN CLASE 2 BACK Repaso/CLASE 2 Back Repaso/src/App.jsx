import React from 'react'

import { Boton, FormLogin, FormRegister, SelectorEmociones } from './Components'
import './app.css'



function App() {

  return (
    <>
      <h1>Hola mundo</h1>
      <FormLogin/>
      <FormRegister/>
      <Boton/>
      <SelectorEmociones/>

      <div className='contenedor-link'>
        <a href="">Soy un link</a>
        <span>Contenido oculto</span>
      </div>
    </>
  )
}

export default App
