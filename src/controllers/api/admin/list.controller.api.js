const db = require("../../../database/models")
const { literal } = require("sequelize")
module.exports = (req, res) => {

    const originServer = () => `${req.protocol}://${req.get("host")}`
    const { page } = req.query
    db.product.paginate({
        page: +page,
        paginate: 10,
        include: ["category"],
        attributes: {
            include: [[literal(`CONCAT('${originServer()}/api/product/',imagePrincipal)`), "imagePrincipal"]]
        }
    })
        .then(({ docs: products, pages, total }) => {
            res.status(200).json({
                ok: true,
                data: products,
                pages,
                total
            })
        }).catch(err => {
            res.status(500).json({
                ok: false,
                msg: err.message
            })
        })

}