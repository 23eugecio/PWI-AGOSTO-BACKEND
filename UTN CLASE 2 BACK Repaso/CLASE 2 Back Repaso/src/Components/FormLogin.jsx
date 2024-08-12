import React, { useState } from 'react'

const FormLogin = () => {
    
    const esquemaFormulario = {
        'nombre': {
            validate: (value) => { 
                return Boolean(value) && value.length > 5
            },
            errorText: 'El nombre debe tener mas de 5 caracteres'
        },
        'email': {
            validate: (value) => {
                return Boolean(value) && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)
            },
            errorText: 'el email debe tener formato de email'
        },
        'password': {
            validate: (value) => {
                return Boolean(value) && value.length > 5
            },
            errorText: 'La contraseña debe tener mas de 5 caracteres'
        }
    }

    const [errores, setErrores] = useState({})

    const agregarError = (error, origen) =>{

        setErrores((prevState) => ({...prevState, [origen]: error}))
    }
    const eliminarError = (origen) => {
        setErrores((prevState) => ({...prevState, [origen]: ''}))
    }

    const handleLogin = (evento) => {
        evento.preventDefault()
        const formulario = evento.target
        const formularioData = new FormData(formulario)
        const formularioValores = {}
        for(const propiedad in esquemaFormulario){
            formularioValores[propiedad] = formularioData.get(propiedad)
            const validacionResultado = esquemaFormulario[propiedad].validate(formularioValores[propiedad])
            console.log(validacionResultado)
            if(!validacionResultado){
                agregarError(esquemaFormulario[propiedad].errorText, propiedad)
            }
            else{
                eliminarError(propiedad)
            }
        }
        
        
        

    }
    console.log(errores)
    return (
        <form onSubmit={handleLogin}>
            <div>
                <label htmlFor='nombre'>Ingresa tu nombre:</label>
                <input type="text" id='nombre' name='nombre' placeholder='joedoe'/>
                {errores.nombre && <span style={{color: 'red'}}>{errores.nombre}</span>}
            </div>
            <div>
                <label htmlFor='email'>Ingresa tu email:</label>
                <input type="text" id='email' name='email' placeholder='joedoe@gmail.com'/>
                {errores.email && <span style={{color: 'red'}}>{errores.email}</span>}
            </div>
            <div>
                <label htmlFor='nombre'>Ingresa tu password:</label>
                <input type="password" id='password' name='password' />
                {errores.password && <span style={{color: 'red'}}>{errores.password}</span>}
            </div>
            <input type='submit' value={'iniciar sesion'}/>
        </form>
    )
}

export default FormLogin