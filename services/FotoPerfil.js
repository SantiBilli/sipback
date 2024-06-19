import { databaseExecute } from "../database/database.js";

export const fotoPerfilSVC = async (userId, imagen) => {

    const consulta = "UPDATE users SET pfp = ? WHERE userId = ?"

    const results = await databaseExecute(consulta, [imagen, userId])

    return results
}