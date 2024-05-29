const db = require("../../database/models")

module.exports = (req, res) => {       
   const {title,price,discount,description,category} = req.body;
   const image = req.file

   db.product.create({
      title: title.trim(),
      price: +price,
      discount: +discount,
      description: description.trim(),
      categoryId: +category,
      imagePrincipal: image?.length ? 
      image?.filname : "default-avatar-icon-of-social-media-user-vector.jpg",
   })
   .then(() => {
      res.redirect("/admin/lista-de-productos")
   })
}