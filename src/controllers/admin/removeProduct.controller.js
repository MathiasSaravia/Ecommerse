const db = require("../../database/models")

module.exports = (req, res) => {
    const {id} = req.params

    db.ImagePrincipal.destroy({
        where: {
            productId: id
        }
    })
    .then(() => { 
         db.Product.destroy({
        where:{
            id
        }
    })
    .then(() => {
        res.redirect('/admin/lista-de-productos')
    })
    })
};