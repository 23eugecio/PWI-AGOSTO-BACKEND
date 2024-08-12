/* let objeto_en_JSON = `{
    "version": "1.0.0",
    "lang": {
        "es": {
            "title": "Configuración de la página"
        },
        "en": {
            "title": "Page configuration"
        }
    }
}`
let objeto_de_JS = JSON.parse(objeto_en_JSON) */
/* console.log(objeto_de_JS) */
/* 
let persona = {nombre: 'pepe', apllido: 'suarez'}

let persona_a_JSON = JSON.stringify(persona)

console.log(typeof persona_a_JSON) */


/* const getLukeSkywalker = async () => {
    const URL_API = 'https://swapi.dev/api/'
    const respuesta = await fetch(URL_API + '/people/1', {
        method: 'GET'
    })
    const resultado = await respuesta.json()
    console.log(resultado)
}
getLukeSkywalker() */


/* localStorage.setItem('nombre', 'pepe')

let nombre = localStorage.getItem('nombre') */

/* let usuario = {nombre: 'pepe'} */

/* localStorage.setItem('usuario', JSON.stringify(usuario)) */

/* let usuario = JSON.parse(localStorage.getItem('usuario'))

console.log(usuario.nombre) */


/* let hora = new Date()

console.log(hora.toTimeString()) */


const formLoginHTML = document.getElementById('formLogin')

const validarNombre = (value) => {
    return Boolean(value) && value.length > 5
}

const validarEdad = (value) => {
    return Boolean(value) && !isNaN(value) && value >= 1 && value <= 120
}

const formLoginInputs = {
    'nombre': {
        validar: validarNombre,
        errorText: 'Nombre incorrecto, debe tener mas de 5 caracteres'
    },
    'edad': {
        validar: validarEdad,
        errorText: 'Edad incorrecta debe ser un numero positivo mayor a 1 y menor a 120'
    }
}



formLoginHTML.addEventListener('submit', (event) =>{
    event.preventDefault()
    const formLoginData = new FormData(event.target)
    for (let propiedad in formLoginInputs){
        const inputValue = formLoginData.get(propiedad)
        if(!formLoginInputs[propiedad].validar(inputValue)){
            alert(formLoginInputs[propiedad].errorText)
        }
    }
})



