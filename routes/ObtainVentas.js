import { Router } from "express"
import { validateToken } from "../middlewares/Authenticator.js"
import { obtainVentasCTL } from "../controller/ObtainVentas.js"

const obtainVentasRouter = Router()

obtainVentasRouter.get("/obtain-ventas", validateToken, obtainVentasCTL)

export default obtainVentasRouter