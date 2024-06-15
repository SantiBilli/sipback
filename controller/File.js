import { createPost, searchPosts } from "../services/FileUpload.js"
import { v4 } from "uuid"

export const fileUpload = async (req, res) => {
    const bodyParams = req.body

    // console.log(req.file);
    // console.log(bodyParams);

    if (req.file === undefined || bodyParams.nameProd === '' || bodyParams.description === '' || bodyParams.price === '') return res.status(204).send("Error.") 

    const image = req.file.buffer.toString('base64')
    const postId = v4()
    const post = await createPost(postId, bodyParams.userId, bodyParams.nameProd, bodyParams.description, bodyParams.price, image) 

    if (!post) {
        return res.status(204).send("Error.")
    }
    
    return res.send()
}

export const postsList = async (req, res) => {
    const postsList = await searchPosts()

    return res.json(postsList);
}