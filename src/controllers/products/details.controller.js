const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../../database/models");

module.exports = (req, res) => {
    const { id } = req.params;
    db.product.findByPk(id, {
        include: ["category"],
    }).then((product) => {
        res.render("products/productDetail", { product, toThousand });
    })

}