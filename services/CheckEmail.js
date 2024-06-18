import { databaseExecute } from "../database/database.js"

export const checkEmailExists = async (email) => {

    const consulta = "SELECT email FROM users WHERE email = ?"

    const results = await databaseExecute(consulta, [email])

    return results
}