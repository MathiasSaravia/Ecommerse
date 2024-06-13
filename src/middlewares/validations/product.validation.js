const { check, body } = require("express-validator");
const path = require("path");
const regExpFiles = /.png|.jpg|.jpeg|.webp|.gif/i;

//CREATE PRODUCT

const fieldTitulo = check("title")
    .notEmpty()
    .withMessage("El título es requerido")
    .bail()
    .isAlphanumeric("es-ES", { ignore: " .," })
    .withMessage("El título debe ser alfanumérico")
    .bail()
    .isLength({ min: 5, max: 100 })
    .withMessage("El título debe tener un mínimo de 5 caracteres y un máximo de 100 caracteres");

    const fieldPrecio = check("price")
    .notEmpty()
    .withMessage("El precio es requerido")
    .bail()
    .isNumeric()
    .withMessage("El precio debe ser numérico")
    .bail()
    .isFloat({ gt: 0 })
    .withMessage("El precio debe tener un valor positivo");

    const fieldDescuento = check("discount")
    .optional()
    .isFloat({ min: 0, max: 100 })
    .withMessage("El descuento debe ser un porcentaje entre 0 y 100");

const fieldDescripcion = check("description")
    .notEmpty()
    .withMessage("La descripción es requerida")
    .bail()
    .isAlphanumeric("es-ES", { ignore: " .," })
    .withMessage("La descripción debe ser alfanumérica")
    .bail()
    .isLength({ min: 30, max: 500 })
    .withMessage("La descripción debe tener un mínimo de 30 y un máximo de 500 caracteres");

    const fieldImagePrincipalStore = body("imagePrincipal")
    .custom((value, { req }) => {
    const lengthImages = req.files?.imagePrincipal?.length;

    if (!lengthImages) throw new Error("Debes ingresar una imagen principal");
    if (lengthImages > 1) throw new Error("No puedes ingresar más de 1 archivo");

    const extFile = path.extname(req.files.imagePrincipal[0].originalname);
    const isFormatSuccess = regExpFiles.test(extFile);

    if (!isFormatSuccess) throw new Error("El formato de la imagen principal es inválido");
    return true;
});

const defaultValidationFields = [
    fieldTitulo,
    fieldDescripcion,
    fieldPrecio,
    fieldDescuento,
];

module.exports = {
    productValidationCreate:[
        ...defaultValidationFields,
        fieldImagePrincipalStore]}; 
