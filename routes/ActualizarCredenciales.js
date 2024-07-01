import { Router } from "express"
import { validateToken } from "../middlewares/Authenticator.js"
import { actualizarCredencialesCTL } from "../controller/ActualizarCredenciales.js"

const actualizarCredencialesRouter = Router()

actualizarCredencialesRouter.post("/actualizar-credenciales", validateToken, actualizarCredencialesCTL)

export default actualizarCredencialesRouter