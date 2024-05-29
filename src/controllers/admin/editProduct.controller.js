const db = require("../../database/models")
module.exports = (req, res) => {
    const { id } = req.params   
    const categoryPromise = db.category.findAll()
    const productPromise = db.product.findByPk(id)
    Promise.all([categoryPromise,productPromise])
    .then(([category, product]) => {
        res.render("admin/editProduct", { product, category })
    })
}

