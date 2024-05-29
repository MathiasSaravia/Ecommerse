const { loadData } = require("../database")

module.exports = (req, res, next) => {
    const users = loadData("users")
    const user = users[0]

    if (user.role === "admin") {
        return next()
    }

    return res.redirect("/")
}