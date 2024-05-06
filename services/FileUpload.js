import { databaseExecute } from "../database/database.js";

export const createPost = async (postId, userId, nameProd, description, price, image) => {
    const post = "INSERT INTO userposts (postId, userId, nameProd, descProd, price, image) VALUES (?, ?, ?, ?, ?, ?);"

    const results = await databaseExecute(post, [postId, userId, nameProd, description, price, image])

    return results

}

export const searchPosts = async () => {
    const posts = "SELECT * FROM userposts;"
    
    const results = await databaseExecute(posts, [])

    return results
}