const db = require("../../../database/models")
module.exports = (req, res) => {
    const {title,price,discount,description,categoryId} = req.body;
    const image = req.file
    
    db.product.create({
      title: title.trim(),
      price: +price,
      discount: +discount,
      description: description.trim(),
      categoryId: +categoryId,
      imagePrincipal: image?.length ? 
      image?.filname : "default-avatar-icon-of-social-media-user-vector.jpg",

    })
    .then(() => {
      res.status(201).json({
        ok:true,
        msg:"producto creado con exito"
      })
    }).catch(err => {
        res.status(500).json({
            ok:false,
            msg:err.message
        })
    })
}