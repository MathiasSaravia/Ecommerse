const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products");



router.get("/detalle-de-producto/:id", productsController.details);
router.get("/lista-de-productos", productsController.listProductsAll);



module.exports = router;