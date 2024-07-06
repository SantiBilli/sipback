import { actualizarAnoSVC } from "../services/CambiarAnoLectivo.js"


export const actualizarAnoCTL = async (req, res) => {
    
    const bodyParams = req.body
    const jwt = req.jwtData

    const actualizar = await actualizarAnoSVC(bodyParams.anoLectivo, jwt.userId)

    if (actualizar == false) return res.status(204).send("Error al Actualizar")

    return res.status(200).send()
}
