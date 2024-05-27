import { obtainProductSVC } from "../services/ObtainProduct.js"

export const obtainProductCTL = async (req, res) => {
    const postId = req.body.postId

    const producto = await obtainProductSVC(postId)

    console.log(postId);

    console.log(producto);

    if (producto == false) return res.status(204).send("Product Not Found")

    return res.json({
        producto: producto
    })
}