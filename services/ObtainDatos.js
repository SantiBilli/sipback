import { databaseExecute } from "../database/database.js";

export const obtainDatosSVC = async (userId) => {

    const consulta = "SELECT * FROM users WHERE userId = ?"

    const results = await databaseExecute(consulta, [userId])

    return results[0];
}