import { Router } from "express"
import { OlvideContrasenaCTL } from "../controller/OlvideContraseña.js"

const olvideContrasenaRouter = Router()

olvideContrasenaRouter.post("/olvide-contrasena", OlvideContrasenaCTL)

olvideContrasenaRouter.get("/olvide-contrasena/:id", OlvideContrasenaCTL)

export default olvideContrasenaRouter