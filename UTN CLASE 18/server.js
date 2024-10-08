//Motorees de plantilla o Template engine
//Tambien aprenderemos a configurar archvos estaticos.
//HANDLEBARS

import express from 'express'
import { engine } from 'express-handlebars'


const app = express()

const PORT = 5000

//Indicar a nuestro server que puede enviar los archivos estaticos dentro de la carpet ./public
app.use(express.static('./public'))

//Indicamos que a los archivos con extension handlebars deberemos tratarlos usando la libreria handlebars
app.engine('handlebars', engine())

//Cuando el servidor quiera renderizar respuestas, lo hara usando a handlebars
app.set('view engine', 'handlebars')
app.set('views', './views')


const productos = [
    {
        id: 1,
        nombre: 'Tv samsung',
        precio: 100,
        descripcion: 'La mejor tv',
        stock: 5
    },
    {
        id: 2,
        nombre: 'Tv LG',
        precio: 150,
        descripcion: 'La mejor tv',
        stock: 10
    },
    {
        id: 3,
        nombre: 'Tv Noblex',
        precio: 200,
        descripcion: 'La mejor tv',
        stock: 54
    }
]

app.get('/', (req, res) => {
    try {


        /*         throw new Error('no hay productos ahora') */

        const response = {
            status: 200,
            message: "Productos Obtenidos",
            ok: true,
            data: {
                titulo: 'Titulo X',
                fecha: '03/10/2024',
                valor_dolar: 1200,
                productos
            },
            layout: 'products' //El nombre del layout que queremos mostrar
        }
        res.render('home', response)
    }
    catch (error) {
        const response = {
            status: 500,
            message: 'Internal server error',
            ok: false,
            data: {
                detail: error.message
            }
        }
        res.render('home', response)
    }
})

app.get('/products/:products_id', (req, res) => {
    const {product_id} = req.params
    //Aqui validar el producto_id
    const producto_buscado = productos.find(producto => producto.id === Number(product_id))
    const response = {
        ok: true,
        message: "Producto Obtenido",
        status: 200,
        data: {
            product: producto_buscado
        }
    }
    res.render('product-detail', response)
})
app.listen(PORT, () => {
    console.log(
        `La aplicacion se esta ejecutando en http://localhost:${PORT}`)
})