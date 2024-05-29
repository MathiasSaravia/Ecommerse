
const db = require("../../database/models")

module.exports = (req, res)=>{
    db.Order.findAll({
        include: ["user","products"]
    })
    .then((orders) => {
      res.render("admin/listOrders", 
      {orders})   

    })

   
}