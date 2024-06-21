
const fs = require('fs');
const path = require('path');

const sendGridApi = require('@sendgrid/mail');
require('dotenv').config();



const loadEmailTemplate = (mensaje) => {
    try {
        const filePath = path.join(__dirname, '../templates/emailTemplate.html');
        const data = fs.readFileSync(filePath, 'utf8');
        const htmlTemplate = data.replace('{{mensaje}}', mensaje);
        return htmlTemplate;
    } catch (err) {
        console.error('Error leyendo el archivo:', err);
        return `<p>${mensaje}</p>`;
    }
};


exports.sendEmail = async (req, res) => {
    const { correo, asunto, mensaje } = req.body;

    sendGridApi.setApiKey(process.env.SG_KEY)

    
    var htmlDisenio = loadEmailTemplate(mensaje);
    
    const msg = {
        to: correo,
        from: process.env.SG_EMAIL,
        subject: asunto,
        html: htmlDisenio
    }

    try {
        await sendGridApi.send(msg)

        res.status(200).send({ message: 'Correo enviado exitosamente' });
    } catch (error) {
        console.error(error)

        res.status(500).send({ error: 'Error al enviar el correo' });
    }
};