const { compareSync } = require("bcryptjs");
const { validationResult } = require("express-validator");
const { loadData } = require("../../data");

module.exports = (req, res) => {
const errors = validationResult(req)

    
const {email , password , remember} = req.body;  
const users = loadData("users");  

if(!email){
   return res.send("debe mandar un email")
}
const userFind = users.find(u => u.email === email.toLowerCase());

if(!userFind){
    return res.send("el usuario no existe")
}

const isValidPass = compareSync(password, userFind.password)

if(!isValidPass){
    return res.send("Contraseña invalida")
}

const {name,surname,rol,avatar} = userFind
req.session.userLogin = {
name,
surname,
email,
rol,
avatar,
};

if(remember){
res.cookie("userLogin",req.session.userLogin,{maxAage:5000})
}

res.redirect("/")
}



