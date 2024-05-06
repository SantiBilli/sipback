import { Router } from "express"
import { fileUpload, postsList } from "../controller/FIle.js"
import { upload } from "../middlewares/FileUpload.js"
import { validateToken } from "../middlewares/Authenticator.js"

const fileRouter = Router()

fileRouter.post('/upload', validateToken, upload.single('file'), fileUpload) 

fileRouter.get('/get-posts', validateToken, postsList)

export default fileRouter