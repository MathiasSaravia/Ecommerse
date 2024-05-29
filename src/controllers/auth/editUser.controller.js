const db = require('../../database/models');

module.exports = (req, res) => {
    const users=db.user.findAll()
    .then((users) => {
        const {id} = req.params;
    const userFind = users.find(u => u.id == +id)
    console.log(userFind)
    res.render("auth/updateUser", {user: userFind});
    })
};