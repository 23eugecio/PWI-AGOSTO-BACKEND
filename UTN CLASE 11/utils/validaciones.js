

function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validarNumero(numero) {
    return !isNaN(numero);
}

function validarNombre(nombre) {
    const nombreRegex = /^[a-zA-Z ]+$/;
    return nombreRegex.test(nombre);
}

module.exports = {
    validarEmail,
    validarNumero,
    validarNombre
};
