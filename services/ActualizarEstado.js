import { databaseExecute } from "../database/database.js"

export const actualizarEstadoSVC = async (bodyParams) => {

    const consulta = "UPDATE publicaciones SET estado = ? WHERE postId = ?"

    const results = await databaseExecute(consulta, [bodyParams.estado, bodyParams.postId])

    return results
}