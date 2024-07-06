import { databaseExecute } from "../database/database.js";

export const createUser = async (userId, email, nombre, apellido, telefono, contra, anoLectivo) => {

    const registro = "INSERT INTO users (userId, email, nombre, apellido, telefono, contra, anoLectivo) VALUES (?, ?, ?, ?, ?, ?, ?);"

    const results = await databaseExecute(registro, [userId, email, nombre, apellido, telefono, contra, anoLectivo])

    return results

}