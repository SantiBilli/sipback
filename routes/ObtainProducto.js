import { Router } from "express"
import { validateToken } from "../middlewares/Authenticator.js"
import { obtainProductCTL } from "../controller/ObtainProduct.js"

const obtainProductRouter = Router()

obtainProductRouter.post("/obtain-product", validateToken, obtainProductCTL)

export default obtainProductRouter