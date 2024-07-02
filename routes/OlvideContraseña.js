import { Router } from "express"
import { OlvideContrasenaCTL, ObtenerDatosContraCTL, CambiarContraseñaCTL } from "../controller/OlvideContraseña.js"
import { validateToken } from "../middlewares/Authenticator.js"

const olvideContrasenaRouter = Router()

olvideContrasenaRouter.post("/olvide-contrasena", OlvideContrasenaCTL)

olvideContrasenaRouter.get("/olvide-contrasena-user", validateToken, ObtenerDatosContraCTL)

olvideContrasenaRouter.post("/cambiar-contrasena", validateToken, CambiarContraseñaCTL)

export default olvideContrasenaRouter