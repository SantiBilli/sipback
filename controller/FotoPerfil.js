import { fotoPerfilSVC } from "../services/FotoPerfil.js"



export const fotoPerfilCTL = async (req, res) => {
    
    const jwt = req.jwtData

    const imagen = req.file.filename

    const post = await fotoPerfilSVC(jwt.userId, imagen)

    if (!post) {
        return res.status(204).send("Error.")
    }

    return res.json({
        imagen: imagen
    })
}
