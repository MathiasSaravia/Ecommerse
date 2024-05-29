const { literal } = require("sequelize")
const { getOrderPending } = require("../../utils");
module.exports = async (req, res) => {
    const originServer = () => `${req.protocol}://${req.get("host")}`

    try {
        const [order, isCreate] = await getOrderPending(req);

        const statusCode = isCreate ? 201 : 200;
        res.status(statusCode).json({
            ok: true,
            data: await order.reload({
                include: [
                    {
                        association: "products",

                        attributes: {
                            include: [[literal(`CONCAT('${originServer()}/api/product/',imagePrincipal)`), "imagePrincipal"]]
                        },


                            through: {
                            attributes: ["quantity"]
                        }
                    }
                ]
            })
        })

    } catch (err) {
        res.status(500).json({
            ok: false,
            msg: err.message
        })
    }
}
//res.status(200).json({ ok: true, msg: "ok" })
