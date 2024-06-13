const router = require("express").Router()
const { editUserApi, updateApi, loginProcessApi, userDeleteApi } = require("../../controllers/api/auth");

/* /api/auth */
router.get("/", editUserApi)
router.post("/", loginProcessApi)
router.post("/", updateApi)
router.delete("/", userDeleteApi)

module.exports = router