import { actualizarCompradorSVC } from "../services/ActualizarComprador.js"

export const actualizarCompradorCTL = async (req, res) => {
    
    const bodyParams = req.body

    const actualizar = await actualizarCompradorSVC(bodyParams)

    if (actualizar == false) return res.status(204).send("Error al Actualizar")

    return res.status(200).send()
}
