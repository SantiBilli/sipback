import fs from "fs"
import { BorrarPublicacionSVC } from "../services/BorrarPublicacion.js"

export const BorrarPublicacionCTL = async (req, res) => {
    
    const bodyParams = req.body

    const borrar = await BorrarPublicacionSVC(bodyParams.postId)

    if (borrar == false) return res.status(204).send("Error al borrar.")

    fs.unlinkSync(`uploads/${bodyParams.imagen}`);

    return res.status(200).send()
}
