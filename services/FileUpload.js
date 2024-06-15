import { databaseExecute } from "../database/database.js";

export const createPost = async (postId, userId, nameProd, description, price, image) => {
    const post = "INSERT INTO publicaciones (postId, userId, nombreProd, descripcionProd, precio, imagen) VALUES (?, ?, ?, ?, ?, ?);"

    const results = await databaseExecute(post, [postId, userId, nameProd, description, price, image])

    return results

}

export const searchPosts = async () => {
    const posts = "SELECT postId, nombreProd, descripcionProd, precio, imagen, email, nombre, apellido, telefono FROM publicaciones INNER JOIN users ON publicaciones.userId = users.userId;"
    
    const results = await databaseExecute(posts, [])

    return results
}