import { Router } from "express"
import { registerUser } from "../controller/Register.js"

const registerRouter = Router()

registerRouter.post('/register', registerUser) 

export default registerRouter