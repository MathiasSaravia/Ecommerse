const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../../database/models");

/* const category =categoryJSON.find(c => c.id === p.category) */

module.exports = (req, res) => {
    db.product.findAll({
        include: [{
            association:"category",
            attributes: ["id","name"]
        }]
    })
    .then((products) => {
        res.render("other/home", {
            products,
            toThousand
        })
    })
}
