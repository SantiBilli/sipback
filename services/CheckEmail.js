import { databaseExecute } from "../database/database.js"

export const checkEmailExists = async (mail) => {

    const consulta = "SELECT mail FROM users WHERE mail = ?"

    const results = await databaseExecute(consulta, [mail])

    return results
}