import { Router } from "express"
import { validateToken } from "../middlewares/Authenticator.js"
import { upload2 } from "../middlewares/FileUpload.js"
import { soporteCTL } from "../controller/SoporteController.js"

const soporteRouter = Router()

soporteRouter.post('/soporte', validateToken, upload2.single('imagen'), soporteCTL) 

export default soporteRouter