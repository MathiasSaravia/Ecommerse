const db = require("../../database/models");
const { validationResult } = require("express-validator");

module.exports = (req, res) => { 
   const errors = validationResult(req)
   if(errors.isEmpty()) {
      
   
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
 } else {
   const old = req.body
   const errorsMapped = errors.mapped();
   db.category.findAll()
   .then(category => {

     res.render(
       "admin/createProduct",
       { category, errors: errorsMapped, old: req.body }
       
     );

   })
 }
}