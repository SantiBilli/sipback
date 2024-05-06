import { createUser } from "../services/Register.js"
import { v4 } from "uuid"

export const registerUser = async (req, res) => {
    const bodyParams = req.body

    const userId = v4()

    const user = await createUser(userId, bodyParams.name, bodyParams.surname, bodyParams.birthday, bodyParams.mail, bodyParams.password) 

    if (user === false) {
        return res.status(501).send("Error en la Base de Datos.")
    }
    
    return res.send()

}