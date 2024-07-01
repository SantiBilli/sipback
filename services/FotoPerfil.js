import { databaseExecute } from "../database/database.js";

export const fotoPerfilSVC = async (userId, imagen) => {

    const consulta = "UPDATE users SET pfp = ? WHERE userId = ?"

    const results = await databaseExecute(consulta, [imagen, userId])

    return results
}

export const fotoPerfilResetSVC = async (userId) => {
    
    const consulta = "UPDATE users SET pfp = NULL WHERE userId = ?"

    const results = await databaseExecute(consulta, [userId])

    return results
}