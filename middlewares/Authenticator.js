import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const generateToken = (jwtData) => {
    return jwt.sign(jwtData, process.env.API_KEY, {expiresIn: '2h'})
}

export const validateToken = (req, res, next) => {

    const accessToken = req.headers['authorization']
    if (!accessToken) res.status(401).send('Access denied')

    else {
        const clearedToken = accessToken.split(' ')[1].replace(/^"(.*)"$/, '$1'); //Limpia el token recibido
        jwt.verify(clearedToken, process.env.API_KEY, (err, jwtData) => {
            if (err) res.status(401).send('Access Denied. Token Expirado o Incorrecto')

            else {
                req.jwtData = jwtData
                next()
            }
        })
    }
}