const { body } = require("express-validator");
const { loadData } = require("../../database");
const { compareSync } = require("bcryptjs");
const db = require("../../database/models");

const fielMailDefault = body("email")
.notEmpty().withMessage("Campo requerido").bail()
.isEmail().withMessage("formato no valido").bail()

const fieldMail = fielMailDefault
.custom((value ,{req})=>{
    const users = loadData("users")
    const existUser = users.find(u => u.email === value.trim())
    if (existUser) {
        throw new Error("Ya existe un usuario con este email")
    }

return true;
})

const fielPasswordRegister = body("password")
.notEmpty().withMessage("Campo requerido").bail()
.isLength({min:8,max:16}).withMessage("Longitud invalida").bail()

//LOGIN

const loginEmail = body("email")
    .notEmpty()
    .withMessage("El campo email es requerido!").bail()
    .isEmail()
    .withMessage("Debe completar un email valido!").bail()
    .custom( async (value, { req }) => {
        try {
            const userFind = await db.user.findAll({
                where: { email: value.trim() }
            })
    
            if (!userFind.length) {
                throw new Error("Credenciales inválidas")
            }
        } catch (error) {
            throw error
        }
    });

const logindPassword = body("password")
    .notEmpty()
    .withMessage("El campo contraseña es requerido!")
    .bail()
    .custom(async (value, { req }) => {
        try {
            const { email } = req.body;
            const userFind = await db.user.findAll({
                where: { email }
            })
            if (userFind.length) {
                const isValidPassword = compareSync(value, userFind[0].password)
                if (!isValidPassword) {
                    throw new Error("Credenciales inválidas");
                }
            } else {
                throw new Error("Credenciales inválidas");
            }
        } catch (error) {
            throw error
        }
    });


module.exports = {
    registerValidation:[fieldMail,fielPasswordRegister],
    LoginValidation:[loginEmail,logindPassword]
}