
const { loadData , saveData} = require("../../database");
const path = require("path")
const fs = require("fs")
const db = require("../../database/models")

module.exports = (req, res)=>{
    const {id} = req.params
    const {title,price,discount,description,category} = req.body;
    const image = req.file
    
    db.product.update({
        title: title.trim(),
        price: +price,
        discount: +discount,
        description: description.trim(),
        categoryId: +category,
        imagePrincipal:image ? image.filename : image

    }, {where: {
        id
    }})
    .then(() =>{
     res.redirect(`/detalle-de-producto/${id}`)
    })
   
}