const {loadData, saveData} = require("../../data")

module.exports = (req, res) => {       
   const products = loadData()
   const { name, description, price, stock, image, category } = req.body;
    const newId = products [products.length - 1].id + 1

 const newProduct = {
    id: newId,
    name: name,
    description: description,
    price: +price,
    stock: stock,
    image: "imagen-no-disponible.jpg",
    category: category,
 };

 products.push(newProduct)
 saveData(products)

 res.redirect("/admin/lista-de-productos")
};