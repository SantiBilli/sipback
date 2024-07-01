import { actualizarCredencialesSVC } from "../services/ActualizarCredenciales.js"


export const actualizarCredencialesCTL = async (req, res) => {
    
    const bodyParams = req.body
    const jwt = req.jwtData

    const actualizar = await actualizarCredencialesSVC(bodyParams.nombre, bodyParams.apellido, bodyParams.telefono, jwt.userId)

    if (actualizar == false) return res.status(204).send("Error al Actualizar")

    return res.status(200).send()
}
