const ERRORES ={
    'Invalid_Argument':{
        'code': 1,
        'message': 'Argumento invalido',
        'name': 'Invalid_Argument',
        'action': (from, detail)=>{
            console.log('El error viene de: ' + from + ' \nDetalle: ' + detail)
            console.log('Mandar mail de notificacion de error')
        }
    } 
}

export default ERRORES