const { loadData } = require("../../data")
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
    const products = loadData();
    const productsVinos = products.filter(p => p.category.toLowerCase() === 'vinos')
    const productsEspumantes = products.filter(p => p.category.toLowerCase() === 'espumantes')
    const productsWhiskys = products.filter(p => p.category.toLowerCase() === 'whiskys')
    const productsLicores = products.filter(p => p.category.toLowerCase() === 'licores')
    const productsOtros = products.filter(p => p.category.toLowerCase() === 'otros')
    const productsPopulares = products.filter(p => p.category.toLowerCase() === 'populares')
    console.log(productsVinos)
    res.render("other/home", {
        productsVinos,
        productsEspumantes,
        productsWhiskys,
        productsLicores,
        productsOtros,
        productsPopulares,
        toThousand
    })
}