const { where } = require("sequelize")
const db = require("../../../database/models")
module.exports = (req, res) => {
    const {id} = req.params
    db.product.destroy({
        where: {
            id
        }
    })
    .then(() => {
        res.status(200).json({
          ok:true,
          msg:"producto eliminado con exito"
        })
      }).catch(err => {
          res.status(500).json({
              ok:false,
              msg:err.message
          })
      })
}