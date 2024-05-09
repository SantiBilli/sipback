import express from "express";
import cors from "cors";
import loginRouter from "./routes/Login.js";
import "dotenv/config"
import registerRouter from "./routes/Register.js";
import checkEmailRouter from "./routes/CheckEmail.js"
import fileRouter from "./routes/Files.js";
import pingRouter from "./routes/Ping.js";

const app = express()
const PORT = process.env.PORT || 3550

app.disable("x-powered-by")
app.use(cors())
app.use(express.json({limit: "10mb"}))

app.use("/api", loginRouter)
app.use("/api", registerRouter)
app.use("/api", checkEmailRouter)
app.use("/api", fileRouter)
app.use("/api", pingRouter)

app.listen(PORT, () => {
    console.log(`Server listening on https//localhost:${PORT}`)
})

