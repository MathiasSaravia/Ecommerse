module.exports = (req, res) => {

    const category = require("../../data/products.json")
    res.render("admin/createProduct", {category})
}