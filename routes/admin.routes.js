const express = require("express");
const router = express.Router();

const {uploadProducts} = require("../middlewares/uploadFile")

const adminController = require("../controllers/admin");

// "/admin"

router.get("/lista-de-productos", adminController.listProducts);

router.get("/crear-producto", adminController.createProduct);
router.post("/crear-producto", adminController.storeProduct);

router.get("/editar-producto/:id", adminController.editProduct);
router.put("/editar-producto/:id", uploadProducts.single("img") , adminController.updateProduct);


router.delete("/eliminar-producto/:id", adminController.deleteProduct);


module.exports = router;