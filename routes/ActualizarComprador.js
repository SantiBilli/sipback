import { Router } from "express"
import { validateToken } from "../middlewares/Authenticator.js"
import { actualizarCompradorCTL } from "../controller/ActualizarComprador.js"

const actualizarCompradorRouter = Router()

actualizarCompradorRouter.post("/actualizar-comprador", validateToken, actualizarCompradorCTL)

export default actualizarCompradorRouter