import { obtainProductSVC } from "../services/ObtainProduct.js"

export const obtainProductCTL = async (req, res) => {
    const postId = req.body.postId

    const producto = await obtainProductSVC(postId)

    // console.log(producto);

    if (producto.length == 0) return res.status(204).send("Product Not Find")

    return res.json({
        producto: producto
    })
}