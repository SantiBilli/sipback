import { generateMailToken } from "../middlewares/Authenticator.js"
import { CambiarContraseñaSVC, ObtenerDatosContraSVC, obtenerContrasenaSVC } from "../services/OlvideContraseña.js"
import nodemailer from 'nodemailer'
export const OlvideContrasenaCTL = async (req, res) => {    
    const bodyParams = req.body

    const datos = await obtenerContrasenaSVC(bodyParams.email)
    const email = bodyParams.email
    const userId = datos.userId

    if(!datos) return res.status(401).send("Usuario Incorrecto") //401 Unauthorized

    const token = generateMailToken({userId: userId})

    const link = `http://smartswap.com.ar/cambiar-contrasena/${token}`;
    
    var transporter= nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'smartswapsip@gmail.com',
            pass: 'errz tzzp rija oxkn'
        }        
    });

    var mailOptions= {
        from: 'smartswapsip@gmail.com',
        to: email,
        subject: 'Cambiar Contraseña Smart Swap',
        // text: 'Ingresa al siguiente link para cambiar tu contraseña: ' + link
        html:   `
                <p>Ingresa al siguiente link para cambiar tu contraseña:</p>
                <p>${link}</p>
                `
    };

    // <p>Ingresa al siguiente link para cambiar tu contraseña:</p>
    // <p>${link}</p>
    // <p>&nbsp;</p>
    // <div style="display: flex; justify-content: center; align-items: center;">
    //     <img src="https://drive.google.com/uc?export=download&id=1LHokCs_RFHhgXc8hRX4gz07zq6XMON-f" alt="Image" style="max-width: 100%; height: auto;">
    // </div>

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            return res.status(500).send("Error al enviar el correo: " + error.message);
        } else {
            console.log('Email enviado: ' + info.response);
            return res.status(200).send("Correo enviado: " + info.response);
        }
    });
}

export const ObtenerDatosContraCTL = async (req, res) => {

    const jwt = req.jwtData

    const response = await ObtenerDatosContraSVC(jwt.userId)

    if (!response) return res.status(204).send("User Not Found")

    return res.json(response)
}

export const CambiarContraseñaCTL = async (req, res) => {

    const bodyParams = req.body
    const jwt = req.jwtData

    const response = await CambiarContraseñaSVC(bodyParams.contra, jwt.userId)

    if (!response) return res.status(204).send("User Not Found")

    return res.send()
}
