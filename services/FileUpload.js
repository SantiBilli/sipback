import { databaseExecute } from "../database/database.js";

export const createPost = async (postId, userId, nameProd, description, price, image, institucion, zona, materia, ano) => {
    
    const fecha = new Date(Date.now());

    const post = "INSERT INTO publicaciones (postId, userId, nombreProd, descripcionProd, precio, imagen, fecha, estado, institucion, zona, materia, ano) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"

    const results = await databaseExecute(post, [postId, userId, nameProd, description, price, image, fecha, "publicado", institucion, zona, materia, ano])

    return results

}

export const searchPosts = async () => {
    const posts = "SELECT * FROM publicaciones INNER JOIN users ON publicaciones.userId = users.userId WHERE estado = 'publicado';"
    
    const results = await databaseExecute(posts, [])

    return results
}