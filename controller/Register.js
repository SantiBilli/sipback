import { createUser } from "../services/Register.js"
import { v4 } from "uuid"

export const registerUser = async (req, res) => {
    const bodyParams = req.body

    const userId = v4()

    const user = await createUser(userId, body.email, bodyParams.nombre, bodyParams.apellido, bodyParams.telefono, bodyParams.contra) 

    if (user === false) {
        return res.status(501).send("Error en la Base de Datos.")
    }
    
    return res.send()

}