import express from "express";
import cors from "cors";
import loginRouter from "./routes/Login.js";
import "dotenv/config"
import registerRouter from "./routes/Register.js";
import checkEmailRouter from "./routes/CheckEmail.js"
import fileRouter from "./routes/Files.js";
import pingRouter from "./routes/Ping.js";
import obtainProductRouter from "./routes/ObtainProducto.js";
import path from "path";
import { fileURLToPath } from "url";
import obtainVentasRouter from "./routes/ObtainVentas.js";
import actualizarEstadoRouter from "./routes/ActualizarEstado.js";
import actualizarCompradorRouter from "./routes/ActualizarComprador.js";
import obtainComprasRouter from "./routes/ObtainCompras.js";
import obtainDatosRouter from "./routes/ObtainDatos.js";
import olvideContrasenaRouter from "./routes/OlvideContraseña.js";
import soporteRouter from "./routes/Soporte.js";
import fotoPerfilRouter from "./routes/FotoPerfil.js";
import actualizarCredencialesRouter from "./routes/ActualizarCredenciales.js";
import borrarPublicacionRouter from "./routes/BorrarPublicacion.js";
import actualizarAnoLectivoRouter from "./routes/CambiarAnoLectivo.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDirectory = path.join(__dirname, 'uploads');
const pfpDirectory = path.join(__dirname, 'uploadsPFP');

// console.log(uploadsDirectory);
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
app.use("/api", obtainProductRouter)
app.use("/api",obtainVentasRouter)
app.use("/api", actualizarEstadoRouter)
app.use("/api", actualizarCompradorRouter)
app.use("/api",obtainComprasRouter)
app.use("/api", obtainDatosRouter)
app.use("/api", olvideContrasenaRouter)
app.use("/api", soporteRouter)
app.use("/api",fotoPerfilRouter)
app.use("/api", actualizarCredencialesRouter)
app.use("/api",borrarPublicacionRouter)
app.use("/api",actualizarAnoLectivoRouter)

app.use("/api/images/", express.static(uploadsDirectory))
app.use("/api/pfp/", express.static(pfpDirectory))

app.listen(PORT, () => {
    console.log(`Server listening on https//localhost:${PORT}`)
})

