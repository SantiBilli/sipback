import { databaseExecute } from "../database/database.js";

export const obtenerContra = async (email) => {

    const consulta = "SELECT contra, userId FROM users WHERE email = ?"

    const results = await databaseExecute(consulta, [email])

    if (results.length == 0) {
        return false
    }
    
    return results[0];
}