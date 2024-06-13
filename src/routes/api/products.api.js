const router = require("express").Router()
const { listApi, createApi, updateApi, deleteApi, renderingApi } = require("../../controllers/api/admin");
const {uploadProducts} = require("../../middlewares/uploadFile")


/* /api/product */
router.get("/", listApi) 
router.post("/" , uploadProducts.single("image"), createApi)
router.put("/:id", uploadProducts.single("image"), updateApi)
router.delete("/:id", deleteApi)
router.get("/:image", renderingApi)

module.exports = router