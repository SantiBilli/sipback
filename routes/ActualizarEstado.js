import { Router } from "express"
import { validateToken } from "../middlewares/Authenticator.js"
import { actualizarEstadoCTL } from "../controller/ActualizarEstado.js"

const actualizarEstadoRouter = Router()

actualizarEstadoRouter.post("/actualizar-estado", validateToken, actualizarEstadoCTL)

export default actualizarEstadoRouter