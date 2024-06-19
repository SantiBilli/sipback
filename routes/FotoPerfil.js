import { Router } from "express"
import { validateToken } from "../middlewares/Authenticator.js"
import { upload3 } from "../middlewares/FileUpload.js"
import { fotoPerfilCTL } from "../controller/FotoPerfil.js"

const fotoPerfilRouter = Router()

fotoPerfilRouter.post('/foto-perfil', validateToken, upload3.single('imagen'), fotoPerfilCTL) 

export default fotoPerfilRouter