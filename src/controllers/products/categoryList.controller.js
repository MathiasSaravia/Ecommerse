const db = require("../../database/models")
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
module.exports = (req, res)=>{
    db.category.findAll({
        include: ["products"]
    })  
    
    .then((categories) => {
        res.render("products/categoryProduct", {categories, toThousand})
    })
}