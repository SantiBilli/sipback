import { obtainDatosSVC } from "../services/ObtainDatos.js"

export const obtainDatosCTL = async (req, res) => {
    
    const jwt = req.jwtData

    const datos = await obtainDatosSVC(jwt.userId)

    if (datos == false) return res.status(204).send("Datos Not Found")

    return res.json(datos)
}
