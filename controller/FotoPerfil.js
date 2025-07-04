import { fotoPerfilResetSVC, fotoPerfilSVC } from "../services/FotoPerfil.js"
import vision from "@google-cloud/vision"
import fs from "fs";

export const fotoPerfilCTL = async (req, res) => {

    const convertToIndices = (detections, levels) => {
        let result = {};
        
        for (const key in detections) {
          if (detections.hasOwnProperty(key)) {
            result[key] = levels.indexOf(detections[key]);
          }
        }
        
        return result;
      };

    const jwt = req.jwtData

    const imagen = req.file.filename

    const client = new vision.ImageAnnotatorClient({
        keyFilename: "credencialesGoogle.json"
    })

    const imageBuffer = fs.readFileSync(req.file.path);

    const [result] = await client.safeSearchDetection(imageBuffer);
    const detections = result.safeSearchAnnotation
      
    const levels = ['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'];
    const convertedDetections = convertToIndices(detections, levels);

    console.log(imagen, convertedDetections);

    if (convertedDetections.adult >= 3 || convertedDetections.racy >= 3 || convertedDetections.violence >= 3) {
        fs.unlinkSync(req.file.path);
        return res.status(406).send("Contenido Prohibido.")
    }

    const post = await fotoPerfilSVC(jwt.userId, imagen)

    if (!post) {
        return res.status(204).send("Error.")
    }

    if (req.body.imagenVieja != 'null') {
      fs.unlinkSync(`uploadsPFP/${req.body.imagenVieja}`);
    }

    return res.json({
        imagen: imagen
    })
}



export const fotoPerfilResetCTL = async (req, res) => {

  const bodyParams = req.body

  const actualizarFoto = await fotoPerfilResetSVC(bodyParams.userId)

  if (bodyParams.imagenVieja != 'null') {
    fs.unlinkSync(`uploadsPFP/${req.body.imagenVieja}`);
  }

  return res.send()
}