const db = require("../../../database/models");
const { getOrderPending } = require("../../utils");
const  {getTotalOrder, getTotalOrderV2}  = require("../../utils/getTotalOrder");
module.exports = async (req, res) => {

    try {
        const { id: productId } = req.params;

        if (!productId) throw new Error("el id del producto es obligatorio");

        let [order, isCreate] = await getOrderPending(req);

        await db.OrderProduct.create({
            orderId: order.id,
            productId
        });

        order = await order.reload({
            include: [
                {
                    association: "products",
                    through: {
                        attributes: ["quantity"]
                    }
                }
            ]
        });

        const total = getTotalOrderV2(order.products);
        order.total = total;
        await order.save();


        res.status(201).json({
            ok: true,
            msg: "producto agregado al carrito con exito"
        });
    } catch (err) {
        res.status(500).json({
            ok: false,
            msg: err.message
        })
    }
}
//res.status(200).json({ ok: true, msg: "ok" })
