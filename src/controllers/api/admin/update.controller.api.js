const db = require("../../../database/models")
module.exports = (req, res) => {
    const {title,price,discount,description,categoryId} = req.body;
    const image = req.file
    const {id} = req.params
    
    db.product.update({

        title: title.trim(),
        price: +price,
        discount: +discount,
        description: description.trim(),
        categoryId: +categoryId,
        imagePrincipal:image ? image.filename : image

    }, {where: {
        id
    }})
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