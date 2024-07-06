import { Router } from "express"
import { validateToken } from "../middlewares/Authenticator.js"
import { actualizarAnoCTL } from "../controller/CambiarAnoLectivo.js"

const actualizarAnoLectivoRouter = Router()

actualizarAnoLectivoRouter.post("/actualizar-ano", validateToken, actualizarAnoCTL)

export default actualizarAnoLectivoRouter