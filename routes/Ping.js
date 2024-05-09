import { Router } from "express"

const pingRouter = Router()

pingRouter.post('/ping', (req, res) => {
    res.send("Pong!")
}) 

export default pingRouter