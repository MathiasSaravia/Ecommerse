const db = require("../../../database/models");

module.exports = (req, res) => {
    db.user.findAll({ 

    })
    .then(user => {
        res.status(200).json({
            ok:true,
            data:user
        })
    }) 
    .catch(err => {
        res.status(500).json({
            ok:false,
            msg:err.message
        })
    })
}