import { databaseExecute } from "../database/database.js"

export const BorrarPublicacionSVC = async (postId) => {

    const consulta = "DELETE FROM publicaciones WHERE postId = ?"

    const results = await databaseExecute(consulta, [postId])

    if (results.affectedRows == 1) return true

    return false
}