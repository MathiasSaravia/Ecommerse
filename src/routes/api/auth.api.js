const router = require("express").Router()
const { editUserApi, updateApi, registerProcessApi, userDeleteApi, loginProcessControllerApi } = require("../../controllers/api/auth");

/* /api/auth */
router.get("/", editUserApi)
router.post("/register", registerProcessApi)
router.post("/", updateApi)
router.delete("/", userDeleteApi)
router.get("/login", loginProcessControllerApi)

module.exports = router