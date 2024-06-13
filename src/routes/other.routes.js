const express = require("express");
const router = express.Router();

const otherController = require("../controllers/other");


router.get("/", otherController.home);
router.get("/buscar", otherController.search);
router.get("/contacto", otherController.contact);




module.exports = router;