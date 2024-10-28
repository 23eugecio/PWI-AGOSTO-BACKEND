import transporter from "../config/transporter.config.js"


/**
 * Sends an email with the specified text to the given recipient.
 *
 * @param {string} text - The text content of the email.
 * @param {string} to - The email address of the recipient.
 */
const sendEmail = async (options) => {
    try {
        let response =await transporter.sendMail(options)
    }
    catch (error) {
        // para poder traquear el error mejor y arreglarlo
        console.log('error al enviar el Email', error)
        //Para que la funcion que invoque a esta funcion tambien lesalte el error
        throw error
    }

}

sendEmail({
    html: 'Hola desde NodeJS',
    subject: 'probar',
    to: 'mariaeugeniaciotti8@gmail.com'
})

export { sendEmail }