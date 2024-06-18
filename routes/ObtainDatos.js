import { Router } from "express"
import { validateToken } from "../middlewares/Authenticator.js"
import { obtainDatosCTL } from "../controller/ObtainDatos.js"

const obtainDatosRouter = Router()

obtainDatosRouter.get("/obtener-datos", validateToken, obtainDatosCTL)

export default obtainDatosRouter