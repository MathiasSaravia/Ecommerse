const { validationResult } = require("express-validator");
const {loadData, saveData} = require ("../../database")
const bcrypt = require ("bcryptjs")

module.exports = (req, res) => {
   
    const errors = validationResult(req)

    if (errors.isEmpty()) {

         const {email ,password , surname ,name } = req.body;
         const users = loadData("users");

     const newUser= {
        id: !users.length ? 1 : users[users.length - 1].id + 1,
        name : name?.trim(),
        surname : surname?.trim(),
        email : email?.trim().toLowerCase(),
        password: bcrypt.hashSync(password?.trim() , 10),
        rol: "regular",
        avatar: "default-avatar-icon-of-social-media-user-vector.jpg"
    }
   

 
    users.push(newUser)

    saveData(users, "users")

    res.redirect("/") 
    return
}

res.render("auth/register",{
    old: req.body,
    errors: errors.mapped(),
})

}