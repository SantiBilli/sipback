import { databaseExecute } from "../database/database.js";

export const checkUser = async (email, contra) => {

    const consulta = "SELECT userId FROM users WHERE email = ? and contra = ?"

    const results = await databaseExecute(consulta, [email, contra])
    
    if (results.length == 0) {
        return false
    }
    
    return results[0];
}