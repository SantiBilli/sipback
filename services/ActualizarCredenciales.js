import { databaseExecute } from "../database/database.js"

export const actualizarCredencialesSVC = async (nombre, apellido, telefono, userId) => {

    const consulta = "UPDATE users SET nombre = ?, apellido = ?, telefono = ? WHERE userId = ?"

    const results = await databaseExecute(consulta, [nombre, apellido, telefono, userId])

    return results
}