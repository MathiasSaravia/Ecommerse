const { loadData } = require("../../data")


module.exports = (req, res)=>{
    const products = loadData();
    res.render("admin/listProducts", {products})
}