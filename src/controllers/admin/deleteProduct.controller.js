/* const { loadData, saveData } = require("../../database");
const path = require("path")
const fs = require("fs")

module.exports = (req, res) => {
    const { id } = req.params;
    const products = loadData();

    const productsLessOne = products.filter(p => p.id !== +id)
    const productDestroy = products.find(p => p.id == +id)

    const pathFile = path.join(__dirname, "/public/images/products" + productDestroy.image);

    const existFile = fs.existsSync(pathFile)
    if (existFile) {
        fs.unlinkSync(pathFile)
    }

    saveData(productsLessOne)

    res.redirect('/admin/lista-de-productos')
} */

const { where } = require("sequelize")
const db = require("../../database/models")
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