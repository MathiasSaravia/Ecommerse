const{ body } = require('express-validator');
const { loadDataUser } = require('../../data');


const fieldNameUpdate = body("name")
    .notEmpty()
    .withMessage("El campo es requerido")
    .bail()
    .isAlphanumeric("es-ES", {ignora: " "})
    .withMessage("El campo debe ser alfanumerico")
    .bail()
    .isLength({min: 5, max: 50})
    .withMessage("Longitud del campo incorrecto")

const fieldLastNameUpdate = body("lastname")
    .notEmpty()
    .withMessage("El campo es requerido")
    .bail()
    .isAlphanumeric("es-ES", {ignora: " "})
    .withMessage("El campo debe ser alfanumerico")
    .bail()
    .isLength({min: 5, max: 50})
    .withMessage("Longitud del campo incorrecto")

const fieldEmailUpdate = body("email")
    .notEmpty()
    .withMessage("El email es requerido")
    .bail()
    .custom((value, {req})=>{
        const users = loadDataUser("users")
        const existUser = users.find(u => u.email == value.trim())
        if(existUser){
            throw new Error("Ya existe un usuario registrado con ese email")
        }
        return true;
    })

const fieldPasswordUpdate = body("password")
    .isLength({min: 8})
    .withMessage("La contraseña debe tener minimo 8 caracteres")
    .bail()


module.exports = {
    updateValidation: [
        fieldNameUpdate,
        fieldLastNameUpdate,
        fieldEmailUpdate,
        fieldPasswordUpdate
    ]
}