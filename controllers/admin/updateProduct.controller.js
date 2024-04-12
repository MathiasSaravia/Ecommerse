const { loadData , saveData} = require("../../data");
const path = require("path")
const fs = require("fs")

module.exports = (req, res)=>{
    const {id} = req.params
    const {name,price,discount,description,category} = req.body;
    const image = req.file

    const products = loadData()
    const productsMapped = products.map(p => {
        if(p.id === +id){
            const productsUpdate = {
                ...p,
                name: name.trim(),
                price: +price,
                discount: +discount,
                description: description.trim(),
                category: category?.trim(),
                image: image ? image.filename : p.image
            };

            if(image?.filename) {
                const pathBeforeFile = path.join(__dirname,"../../public/image/products" + p.image)
                const exitsFile= fs.existsSync(pathBeforeFile)
                if(exitsFile){
                    fs.unlinkSync(pathBeforeFile)
                }
            }
            return productsUpdate
        }
        return p
    })
    
 saveData(productsMapped)


    res.redirect(`/detalle-de-producto/${id}`)
}