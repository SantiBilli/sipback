import { actualizarEstadoSVC } from "../services/ActualizarEstado.js"

export const actualizarEstadoCTL = async (req, res) => {
    
    const bodyParams = req.body

    const actualizar = await actualizarEstadoSVC(bodyParams)

    if (actualizar == false) return res.status(204).send("Error al Actualizar")

    return res.status(200).send()
}
