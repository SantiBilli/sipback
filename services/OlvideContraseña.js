import { databaseExecute } from "../database/database.js";

export const obtenerContrasenaSVC = async (email) => {

    const consulta = "SELECT contra, userId FROM users WHERE email = ?"

    const results = await databaseExecute(consulta, [email])

    if (results.length == 0) {
        return false
    }
    
    return results[0];
    

}

export const ObtenerDatosContraSVC = async (userId) => {

    const consulta = "SELECT email FROM users WHERE userId = ?"

    const results = await databaseExecute(consulta, [userId])

    if (results.length == 0) {
        return false
    }
    
    return results[0];

}
