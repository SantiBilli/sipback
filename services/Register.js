import { databaseExecute } from "../database/database.js";

export const createUser = async (userId, email, nombre, apellido, telefono, contra) => {

    const registro = "INSERT INTO users (userId, email, nombre, apellido, telefono, contra) VALUES (?, ?, ?, ?, ?, ?);"

    const results = await databaseExecute(registro, [userId, email, nombre, apellido, telefono, contra])

    return results

}