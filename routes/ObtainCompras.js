import { Router } from "express"
import { validateToken } from "../middlewares/Authenticator.js"
import { obtainComprasCTL } from "../controller/ObtainCompras.js"

const obtainComprasRouter = Router()

obtainComprasRouter.get("/obtain-compras", validateToken, obtainComprasCTL)

export default obtainComprasRouter