import { databaseExecute } from "../database/database.js";

export const obtenerContrasenaSVC = async (email) => {

    const consulta = "SELECT contra, userId FROM users WHERE email = ?"

    const results = await databaseExecute(consulta, [email])

    if (results.length == 0) {
        return false
    }
    
    return results[0];
    

}

