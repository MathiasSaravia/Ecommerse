const { validationResult } = require("express-validator");
const db = require("../../database/models");
const bcrypt = require("bcryptjs");

module.exports = (req, res) => { 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render("auth/updateUser", { user: req.body, errors: errors.mapped() });
    }

    const { id } = req.params;
    const { name, email, surname, password } = req.body;

    db.user.findByPk(id)
        .then(user => {
            if (!user) {
                return res.status(404).send("Usuario no encontrado");
            }

            user.name = name;
            user.email = email;
            user.surname = surname;
            if (password.trim().length > 1) {
                user.password = bcrypt.hashSync(password, 10);
            }

            return user.save();
        })
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            res.status(500).send("usuario no encontrado");
        });
};