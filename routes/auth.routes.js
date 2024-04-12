const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");
const { registerValidation } = require("../middleware/validations/auth.validation");
const { LoginValidation } = require("../middleware/validations/auth.validation");


router.get("/iniciar-sesion", authController.login);
router.post("/iniciar-sesion",authController.loginProcess);

router.get("/registrarse", authController.register);
router.post("/registrarse", registerValidation ,authController.registerProcess);


//router.get("/perfil", authController.perfil)

router.get("/actualizar-usuario/:id", authController.editUser);
router.put("/actualizar-usuario/:id", updateValidation, authController.updateUser);

module.exports = router;