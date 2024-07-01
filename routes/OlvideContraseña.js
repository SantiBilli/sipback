import { Router } from "express"
import { OlvideContrasenaCTL, ObtenerDatosContraCTL } from "../controller/OlvideContraseña.js"

const olvideContrasenaRouter = Router()

olvideContrasenaRouter.post("/olvide-contrasena", OlvideContrasenaCTL)

olvideContrasenaRouter.get("/olvide-contrasena/:id", ObtenerDatosContraCTL)

export default olvideContrasenaRouter