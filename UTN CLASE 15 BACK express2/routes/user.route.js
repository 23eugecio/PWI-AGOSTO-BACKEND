import express from 'express'
import ResponseBuilder from '../utils/ResponseBuilder.util.js'
import getUserByName from '../repositories/user.repository.js'


const userRouter = express.Router()



    userRouter.get('/:nombre', async (request, response) => {
        console.log(request.params.nombre)
        const nombre = request.params.nombre
        const usuario = await getUserByName(nombre)


    response.send(usuario)
    })


userRouter.get("/", (request, response) => {
    let response = new ResponseBuilder()
        .setOk(true)
        .setStatus(200)
        .setCode(ResponseBuilder.CODE.GET_INFO_SUCCESS)
        .setPayload({
            mensaje: 'datos del usuarios'
        })
        .build()
        response.json(response)
    })


userRouter.get('/cantidad', (request, response) => {
    let response = new ResponseBuilder()
        .setOk(true)
        .setStatus(200)
        .setPayload({
            mensaje: 'datos del usuarios'
        })
        .build()
        response.json(response)
    })

/* 
Estructuras tipicas de respuesta:
{
    ok: boolean,
    status: estatusHTTP,
    payload | data  : objeto con informacion,
    code: number || string
}
{
    ok: boolean,
    status: estatusHTTP,
    payload | data  : objeto con informacion,
    code: number || string,
    message: 'Datos de usuario obtenidos'
}
En caso de error
{
    ok: boolean,
    status: estatusHTTP,
    error
    code: number || string,
    message: 'Datos de usuario obtenidos'
}
{
    ok: boolean,
    payload | data  : objeto con informacion
}
{
    ok: boolean,
    status: estatusHTTP,
    payload: {},
    code: 5,
    message: 'Datos de usuario obtenidos'
}
*/



/* let response = fetch()
if(response.ok){
    Caso verdadero
}else{
    Caso falso
}
 */




export default userRouter