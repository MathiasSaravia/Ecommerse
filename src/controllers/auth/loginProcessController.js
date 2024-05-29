const { compareSync } = require("bcryptjs");
const { loadData } = require("../../database");

module.exports = (req, res) => {
    const { email, password, remember } = req.body;
    const users = loadData();
    const user = users.find((u) => u.email === email);
    if (!user) {
        return res.render("auth/login", {
            errorMessage: "El usuario no existe",
        });

    }
}