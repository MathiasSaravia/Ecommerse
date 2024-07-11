const db = require("../../../database/models")

module.exports = (req, res) => {
    const {id} = req.params
    const {name, surname, email, password, rol} = req.body;
    const avatar = req.file
    
db.user.create({
    name: name?.trim(),
    surname: surname?.trim(),
    email: email?.trim(),
    password: password?.trim(),
    avatar: "",
    rol:rol

},
     {where: { id }
})
.then(() =>{    
        res.status(200).json({
          ok:true,
          msg:"usuario creado con exito"
        })
      }).catch(err => {
          res.status(500).json({
              ok:false,
              msg:err.message
          })
      })
  }