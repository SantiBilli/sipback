import { obtainVentasSVC } from "../services/ObtainVentas.js"

export const obtainVentasCTL = async (req, res) => {
    
    const jwt = req.jwtData

    const ventas = await obtainVentasSVC(jwt.userId)

    if (ventas == false) return res.status(204).send("Product Not Found")


    return res.json(ventas)
}
