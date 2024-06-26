const { Op } = require("sequelize");
const db = require("../../database/models");
module.exports = async (req) => {
    const dataOrder = await db.Order.findOrCreate({
        where: {
            [Op.and]: [
                {
                    userId: req.session.userLogin?.id,
                },
                {
                    state: "pending",   
                }
            ]
        },
        defaults: {
            userId: req.session.userLogin?.id,

        },
        include: [
        {
           association : "products",
            through:{
                attributes: ["quantity"]
            }
        }
    ] 
    });
    return dataOrder
}

