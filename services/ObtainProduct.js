import { databaseExecute } from "../database/database.js";

export const obtainProductSVC = async (postId) => {

    const consulta = "SELECT * FROM publicaciones WHERE postId = ?"

    const results = await databaseExecute(consulta, [postId])

    if (results.length == 0) {
        return false
    }
    
    return results[0];
}

export const obtainSellerSVC = async (userId) => {

    const consulta = "SELECT * FROM users WHERE userId = ?"

    const results = await databaseExecute(consulta, [userId])

    if (results.length == 0) {
        return false
    }
    
    return results[0];
}