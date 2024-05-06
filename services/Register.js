import { databaseExecute } from "../database/database.js";

export const createUser = async (userId, name, surname, bday, mail, password) => {

    // console.log(name,surname,bday,mail,password)

    const registro = "INSERT INTO usuarios (userId, name, surname, bday, mail, password) VALUES (?, ?, ?, ?, ?, ?);"

    const results = await databaseExecute(registro, [userId, name, surname, bday, mail, password])

    return results

}