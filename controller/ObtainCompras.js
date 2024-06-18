import { obtainComprasSVC } from "../services/ObtainCompras.js"


export const obtainComprasCTL = async (req, res) => {
    
    const jwt = req.jwtData

    const compras = await obtainComprasSVC(jwt.userId)

    if (compras == false) return res.status(204).send("Compras Not Found")


    return res.json(compras)
}
