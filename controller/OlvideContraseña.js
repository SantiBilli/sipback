import { generateToken } from "../middlewares/Authenticator.js"
import { obtenerContrasenaSVC } from "../services/OlvideContraseña.js"
import nodemailer from 'nodemailer'
export const OlvideContrasenaCTL = async (req, res) => {    
    const bodyParams = req.body

    const datos = await obtenerContrasenaSVC(bodyParams.email)
    const email = bodyParams.email
    const contra = datos.contra
    const userId = datos.userId

    if(!datos) return res.status(401).send("Usuario Incorrecto") //401 Unauthorized

    const token2= generateToken({email: email})

    const link= `http://localhost:5173/cambiar-contrasena/${userId}/${token2}`;

    
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
        text: 'Ingresa al siguiente link para cambiar tu contraseña: '+ link
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            return res.status(500).send("Error al enviar el correo: " + error.message);
        }else{
            console.log('Email enviado: ' + info.response);
            return res.status(200).send("Correo enviado: " + info.response);
        }
    });

}