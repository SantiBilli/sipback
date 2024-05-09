import { databaseExecute } from "../database/database.js";

export const checkUser = async (mail, password) => {

    const consulta = "SELECT userId, name, surname FROM users WHERE mail = ? and password = ?"

    const results = await databaseExecute(consulta, [mail, password])
    
    if (results.length == 0) {
        return false
    }
    
    return results[0];
}