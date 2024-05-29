const { loadData, saveData } = require("../../data");

module.exports = (req, res) => {
    const {name, surname,email, password} = req.body;
    const user = loadData("users");
    const newUser= {
        id:!user ? 1: user [user.length - 1].id + 1,
        name: name?.trim(),
        surname: surname?.trim(),
        email: email?.trim(),
        password: password?.trim(),
        avatar: "",
    };

    user.push(newUser)

    saveData(user, "users")

    res.redirect("/")

};