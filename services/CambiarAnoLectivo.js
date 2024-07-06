import { databaseExecute } from "../database/database.js"

export const actualizarAnoSVC = async (anoLectivo, userId) => {

    const consulta = "UPDATE users SET anoLectivo = ? WHERE userId = ?"

    const results = await databaseExecute(consulta, [anoLectivo, userId])

    if (results.changedRows == 1) return true

    return false
}