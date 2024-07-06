import { createUser } from "../services/Register.js"
import { v4 } from "uuid"
import bcrypt from "bcrypt"

export const registerUser = async (req, res) => {
    const bodyParams = req.body

    const userId = v4()

    const salt = await bcrypt.genSalt(10)
    const contraHasheada = await bcrypt.hash(bodyParams.contra, salt)

    const user = await createUser(userId, bodyParams.email, bodyParams.nombre, bodyParams.apellido, bodyParams.telefono, contraHasheada, bodyParams.anoLectivo)

    if (user === false) {
        return res.status(501).send("Error en la Base de Datos.")
    }
    
    return res.send()

}