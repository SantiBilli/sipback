import { Router } from "express"
import { validateToken } from "../middlewares/Authenticator.js"
import { BorrarPublicacionCTL } from "../controller/BorrarPublicacion.js"

const borrarPublicacionRouter = Router()

borrarPublicacionRouter.post("/borrar-publicacion", validateToken, BorrarPublicacionCTL)

export default borrarPublicacionRouter