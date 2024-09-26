import fileSystem from 'fs'

const crearjson = async (fileName, data) => {
    const file = './public/${fileName}.json'
    await fileSystem.writeFile(file, JSON.stringify(data), encoding = 'utf-8')
}

const leerJson = async (fileName) => {
    const file = './public/${fileName}.json'
    const data = await fileSystem.readFile(file, encoding = 'utf-8')
    return JSON.parse(data)
}