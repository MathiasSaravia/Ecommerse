const express = require("express");
const router = express.Router();

const {uploadProducts} = require("../middlewares/uploadFile")

const adminController = require("../controllers/admin");
const { checkAdmin } = require("../middlewares/validations");
const { productValidationCreate } = require("../middlewares/validations/product.validation");

// "/admin"

router.get("/lista-de-productos", adminController.listProducts);

router.get("/crear-producto", checkAdmin, adminController.createProduct);
router.post("/crear-producto", uploadProducts.single("img"), checkAdmin, productValidationCreate ,adminController.storeProduct);

router.get("/editar-producto/:id", checkAdmin, adminController.editProduct);
router.put("/editar-producto/:id", uploadProducts.single("img"), checkAdmin, adminController.updateProduct);


router.delete("/eliminar-producto/:id", checkAdmin, adminController.deleteProduct);

router.get("/lista-de-ordenes", adminController.orderProduct);


module.exports = router;