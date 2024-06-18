import { databaseExecute } from "../database/database.js";

export const obtainComprasSVC = async (userId) => {

    const consulta = "SELECT publicaciones.*, users2.email FROM publicaciones INNER JOIN users AS users1 ON publicaciones.comprador = users1.email INNER JOIN users AS users2 ON publicaciones.userId = users2.userId WHERE users1.userId = ?;"

    const results = await databaseExecute(consulta, [userId])

    return results;
}