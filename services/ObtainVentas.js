import { databaseExecute } from "../database/database.js";

export const obtainVentasSVC = async (userId) => {

    const consulta = "SELECT * FROM publicaciones WHERE userId = ?"

    const results = await databaseExecute(consulta, [userId])

    return results;
}