const db = require("../../../database/models");
const { getOrderPending } = require("../../utils");

module.exports = async (req, res) => {
    const [order, isCreate] = await getOrderPending(req);
    try{
     await db.OrderProduct.destroy({
         where:{
         orderId:order.id
        }
    });

    order.total = 0;
    await order.save();

    res.status(200).json({
    ok: true,
    msg: "productos eliminados con exito"
    });}catch(error){
        res.status(500).json({
            ok: false,
            msg: error.message
        })
    }
}