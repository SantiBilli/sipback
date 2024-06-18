import { databaseExecute } from "../database/database.js"

export const actualizarCompradorSVC = async (bodyParams) => {

    const consulta = "UPDATE publicaciones SET comprador = ? WHERE postId = ?"

    const results = await databaseExecute(consulta, [bodyParams.comprador, bodyParams.postId])

    return results
}