import { createPost, searchPosts } from "../services/FileUpload.js"
import { v4 } from "uuid"

export const fileUpload = async (req, res) => {
    const bodyParams = req.body
    const image = req.file.buffer.toString('base64')
   
    // console.log(req.file);
    //console.log(image);
    //console.log(bodyParams);

    const postId = v4()

    const post = await createPost(postId, bodyParams.userId, bodyParams.nameProd, bodyParams.description, bodyParams.price, image) 

    // console.log(post);

    if (!post) {
        return res.status(501).send("Error en la Base de Datos.")
    }
    
    return res.send()
}

export const postsList = async (req, res) => {
    const postsList = await searchPosts()

    return res.json(postsList);
}