const db = require("../../database/models")
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
module.exports = (req, res)=>{
    db.product.findAll({
        include: [{
            association:"category",
            attributes: ["id", "name"]
        }]
    }).then((products) => {
        res.render("admin/listProducts",
        {products,toThousand}) 
    })    
}