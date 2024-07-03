import { createPost, searchPosts } from "../services/FileUpload.js"
import { v4 } from "uuid"
import vision from "@google-cloud/vision"
import fs from "fs";

export const fileUpload = async (req, res) => {
    
    const convertToIndices = (detections, levels) => {
        let result = {};
        
        for (const key in detections) {
          if (detections.hasOwnProperty(key)) {
            result[key] = levels.indexOf(detections[key]);
          }
        }
        
        return result;
      };

    const bodyParams = req.body

    if (req.file === undefined || bodyParams.nameProd === '' || bodyParams.description === '' || bodyParams.price === '') return res.status(204).send("Error.") 

    const client = new vision.ImageAnnotatorClient({
        keyFilename: "credencialesGoogle.json"
    })

    const imageBuffer = fs.readFileSync(req.file.path);

    const [result] = await client.safeSearchDetection(imageBuffer);
    const detections = result.safeSearchAnnotation
      
    const levels = ['UNKNOWN', 'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'];
    const convertedDetections = convertToIndices(detections, levels);

    console.log(req.file.filename, convertedDetections);

    if (convertedDetections.adult >= 3 || convertedDetections.racy >= 3 || convertedDetections.violence >= 3) {
        fs.unlinkSync(req.file.path);
        return res.status(406).send("Contenido Prohibido.")
    }

    const image = req.file.filename
    const postId = v4()
    const post = await createPost(postId, bodyParams.userId, bodyParams.nameProd, bodyParams.description, bodyParams.price, image, bodyParams.institucion, bodyParams.zona, bodyParams.materia, bodyParams.ano)

    if (!post) {
        return res.status(204).send("Error.")
    }
    
    return res.send()
}

export const postsList = async (req, res) => {
    const postsList = await searchPosts()

    return res.json(postsList);
}