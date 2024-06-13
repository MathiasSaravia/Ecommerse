const db = require("../../../database/models")

module.exports = (req, res) => {
    const {id} = req.params
    const {name, surname, email, password, rol} = req.body;
    const avatar = req.file
    
db.user.update({
    name: name.trim(),
    surname: surname.trim(),
    email: email.trim(),
    password: password.trim(),
    avatar: avatar ? avatar.filename:image,
    rol:rol

},
     {where: { id }
})
.then(() =>{    
        res.status(200).json({
          ok:true,
          msg:"usuario actualizado con exito"
        })
      }).catch(err => {
          res.status(500).json({
              ok:false,
              msg:err.message
          })
      })
  }