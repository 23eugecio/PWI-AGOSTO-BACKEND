import express, { response } from 'express';
import filesystem from 'fs';


/* // Aqui guardamos a nuestra api
const app = express()

//Middlewares para parsear el body
app.use(express.urlencoded({ extended: true }))


app.get('/', (request, response) => {
    response.send('Hola')
})

app.get('/fecha', (request, response) => {
    response.send(new Date().toString())
})




app.post('/usuario', async (request, response) => {
    //Request es el objeto donde se guarda los datos de consulta
    //request.body es la carga util recibida (los datos recibidos)

    const usuarios = JSON.parse(filesystem.readFileSync('./usuarios.json', 'utf-8'))
    usuarios.push({ nombre: request.body.nombre, email: request.body.email })
    filesystem.writeFileSync('./usuarios.json', JSON.stringify(usuarios), 'utf-8')
    response.send('Usuario registrado')
})
 */

/* 
POST usuario

Deben usar filesystem y asincronia

vamos a verificar que valores hay en ./usuarios.json
Si la resupuesta en string vacio: 
crearemos un array ya agregaremos el usuario recibido. 
Si la respuesta es distinta de null o undefined:
Vamos a transfromar la respuesta a objeto de JS y agregregaremos al usuario recibido

Finalmente lo guardaremos en el archivo usuarios.json

2)
Validar que la consulta este bien hecha, es decir que reciba el nombre y el email
En caso de no recibir deberemos responder con el detalle del error:
Ej:
{nombre:''} => Falta ingresar nombre

Aplicar try catch sobre el codigo, si alguna operacion como readFile, writeFile, JSON.parse o JSON.stringrify falla
debemos capturar el fallo en el catch, mostrar dicho fallo por consola de error y responder con un 'Fallo interno en el servidor'
*/

const app = express();

app.use(express.json());

app.post('/usuario', async (request, response) => {
    const usuario = {
        nombre: request.body.nombre,
        email: request.body.email
    }
    let usuarios
    const resultado = await filesystem.promises.readFile('./usuarios.json', 'utf-8')
    if (!resultado) {
        usuarios = []
    }
    else {
        usuarios = JSON.parse(resultado)
    }

    usuarios.push(usuario)
    await filesystem.promises.writeFile('./usuarios.json', JSON.stringify(usuarios)), { encoding: 'utf-8' }

    response.send('Usuario registrado')
})

app.post('/usuario', async (request, response) => {
    const { nombre, email } = request.body;

    if (!nombre || !email) {
        return response.status(400).send('Falta ingresar nombre o email');
    }

const usuario = { nombre, email };
let usuarios = [];

try {
    const resultado = await filesystem.promises.readFile('./usuarios.json', 'utf-8')
    if (resultado) {
        usuarios = JSON.parse(resultado)
    }
} catch (error) {
    console.error('Error al leer o parsear el archivo:', error)
    response.status(500).send('Fallo interno en el servidor');
}
usuarios.push(usuarios)

try {
    await filesystem.promises.writeFile('./usuarios.json', JSON.stringify(usuarios)), { encoding: 'utf-8' }
    response.send('Usuario registrado');
} catch (error) {
    console.error('Error al registrar el usuario:', error)
    response.status(500).send('Fallo interno en el servidor');
}
finally {
    console.log('Se termino de registrar el usuario')
}
response.send('Usuario registrado');

app.listen(3000, () => {
    console.log('Aplicacion escuachandose en el puerto http://localhost:3000')
})
})
