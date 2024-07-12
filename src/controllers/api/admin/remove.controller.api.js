const { where } = require("sequelize")
const db = require("../../../database/models")
module.exports = (req, res) => {
    const {id} = req.params
    db.product.destroy({
        where: {
            id
        }
    })
}