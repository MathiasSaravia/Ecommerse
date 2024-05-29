const path = require("path")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/products')
    },
    filename: function (req, file, cb) {
      const fieldnameFormat = file.fieldname + '-' + Date.now() + '-' + path.extname(file.originalname)
      cb(null, fieldnameFormat)
    }
  })
  
  const uploadProducts = multer({ storage})

module.exports = {
 uploadProducts
}