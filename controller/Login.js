import { generateToken, validateToken } from "../middlewares/Authenticator.js"
import { checkUser } from "../services/Login.js"

export const loginUser = async (req, res) => {
    const bodyParams = req.body

    const userExists = await checkUser(bodyParams.mail, bodyParams.password)

    if (!userExists) return res.status(401).send("Usuario Incorrecto") //401 Unauthorized

    const token = generateToken(userExists)

    return res.json({
        token: token, 
        userData: userExists
    })
}

export const validateLogin = async (req, res) => {
    res.send("Token Validado")
}