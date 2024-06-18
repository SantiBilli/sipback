import { v4 } from "uuid"
import { soporteSVC } from "../services/Soporte.js"

export const soporteCTL = async (req, res) => {
    
    const bodyParams = req.body
    const jwt = req.jwtData

    const imagen = req.file.filename
    const idConsulta = v4()

    const post = await soporteSVC(idConsulta, jwt.userId, bodyParams.descripcion, imagen)

    if (!post) {
        return res.status(204).send("Error.")
    }
    
    return res.send()
}
