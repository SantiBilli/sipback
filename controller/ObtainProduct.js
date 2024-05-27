import { obtainProductSVC, obtainSellerSVC } from "../services/ObtainProduct.js"

export const obtainProductCTL = async (req, res) => {
    
    const bodyParams = req.body

    const producto = await obtainProductSVC(bodyParams.id)

    if (producto == false) return res.status(204).send("Product Not Found")

    const datosVendedor = await obtainSellerSVC(producto.userId)

    if (producto == false) return res.status(204).send("Vendedor Not Found")

    return res.json({
        producto: producto,
        vendedor: datosVendedor
    })
}
