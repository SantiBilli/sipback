import { databaseExecute } from "../database/database.js";

export const soporteSVC = async (userId, idConsulta, description, imagen) => {
    
    const post = "INSERT INTO soporte (idConsulta, userId, descripcion, imagen) VALUES (?, ?, ?, ?);"

    const results = await databaseExecute(post, [userId, idConsulta, description, imagen])

    return results

}