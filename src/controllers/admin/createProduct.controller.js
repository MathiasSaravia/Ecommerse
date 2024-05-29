const db = require("../../database/models")

module.exports = (req, res) => {
 db.category.findAll()
 .then((category) => {
      res.render("admin/createProduct", {category})
 })
}