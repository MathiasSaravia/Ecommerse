const { Op } = require("sequelize");
const db = require("../../../database/models");
const { getOrderPending } = require("../../utils");
const { getTotalOrderV2 } = require("../../utils/getTotalOrder");


module.exports = async (req, res) => {
    try {
    const {id} = req.params;
    
    let [order, isCreate] = await getOrderPending(req);

    const record = await db.OrderProduct.findOne({
        where:{
            [Op.and]:[
                {
                    orderId: order.id
                },
                {
                    productId: id,
                }
            ]
        }
    });
    record.quantity++;
    await record.save();

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

    res.status(200).json({
        ok: true,
        msg: "cantidad aumentada con exito"
    })

    }catch(error){
      res.status(500).json({
        ok: false,
        msg: error.message
      })
    }



}