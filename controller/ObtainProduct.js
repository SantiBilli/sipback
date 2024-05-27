import { obtainProductSVC } from "../services/ObtainProduct.js"

export const obtainProductCTL = async (req, res) => {
    
    const bodyParams = req.body

    const producto = await obtainProductSVC(bodyParams.id)

    if (producto == false) return res.status(204).send("Product Not Found")

    return res.json({
        producto: producto
    })

}