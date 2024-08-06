const getLukeSkywalker = async() => {
    const URL_Api = "https://swapi.dev/api/people/1/";
    const respuesta = await fetch(URL_Api + '/people/1' {
        method: 'GET',
    });
    const resultado = await respuesta.json()
        console.log(resultado)
    
}
getLukeSkywalker()