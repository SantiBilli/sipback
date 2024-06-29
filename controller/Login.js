import { generateToken, validateToken } from "../middlewares/Authenticator.js"
import { obtenerContra } from "../services/Login.js"
import bcrypt from "bcrypt"

export const loginUser = async (req, res) => {
    const bodyParams = req.body

    const contraBD = await obtenerContra(bodyParams.mail)

    if (!contraBD) return res.status(401).send("Invalid Credentials") //401 Unauthorized

    const match = await bcrypt.compare(bodyParams.password, contraBD.contra)

    if (!match) return res.status(401).send("Invalid Credentials")

    const token = generateToken({userId: contraBD.userId})

    return res.json({
        token: token, 
        userData: {userId: contraBD.userId}
    })
}

export const validateLogin = async (req, res) => {
    res.send("Token Validado")
}