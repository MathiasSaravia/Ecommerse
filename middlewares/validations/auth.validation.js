const { body } = require("express-validator");
const { loadData } = require("../../data");
const { compareSync } = require("bcryptjs");

const fielMailDefault = body("email")
.notEmpty().withMessage("Campo requerido").bail()
.isEmail().withMessage("formato no valido").bail()

const fieldMail =fielMailDefault
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

const fieldMailLogin = body("email")
.custom((value,{req})=>{
    const users = loadData("users")
    const userFind = users.find(u => u.email === email.toLowerCase());
    if (!userFind) {
        throw new Error("No existe un usuario con este email")
    } 
    return true;  
})

const fieldPassword = body("password")
.notEmpty().withMessage("Campo requerido").bail()
.custom((value,{req})=>{
    const users = loadData("users")
    const isValidPass = compareSync(password, userFind.password)
    if(!isValidPass){
        throw new Error("Contraseña invalida")
    }
})



module.exports = {
    registerValidation:[fieldMail,fielPasswordRegister],
    LoginValidation:[fieldMailLogin,fieldPassword]
}