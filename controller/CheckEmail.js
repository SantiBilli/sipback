import { checkEmailExists } from "../services/CheckEmail.js"

export const checkEmail = async (req, res) => {
    const bodyParams = req.body

    const emailExist = await checkEmailExists(bodyParams.mail)

    if (emailExist.length == 0) return res.status(204).send("Mail Found")

return res.json(emailExist)
}