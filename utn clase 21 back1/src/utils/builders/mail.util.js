import transporter from "../../config/transporter.config.js"

/**
 * Send an email using the transporter
 * @param {string} html - The content of the email
 * @param {string} subject - The subject of the email
 * @param {string} to - The recipient of the email
 * @returns {Promise<void>}
 */

const sendEmail = async (options) => {
    try{
        let response = await transporter.sendMail(options)
    }
    catch(error){
        // para traquear mejor el error y arreglarlo
        console.error('error al enviar el mail:', error)
        //Para que la funcion que invoque a esta funcion tambien le salte el error
        throw error
    }

}
sendEmail(
    {html: 'Hola desde nodejs', 
    subject: 'probar',
    to: 'mariaeugeniaciotti8@gmail.com'
    })


    export {sendEmail} //exportamos la funcion sendEmail