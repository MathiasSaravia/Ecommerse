const db = require('../../database/models');
const path = require('path');
const fs = require('fs');

module.exports = async (req, res) => {
    const { id } = req.params;

    try {
       
        const productDeleted = await db.product.findByPk(id);

        
        if (!productDeleted) {
            return res.status(404).send("El producto no fue encontrado");
        }

        
        if (productDeleted.image != "/images/default.jpg") {
            const filePath = path.join(__dirname, `../../public/images/products/${productDeleted.image}`);
            const existFile = fs.existsSync(filePath);
            if (existFile) {
                fs.unlinkSync(filePath);
            }
        }

        
        await db.product.destroy({
            where: {
                id: productDeleted.id
            }
        });

        res.redirect("/admin/lista-de-productos");
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        res.status(500).send("Error interno del servidor");
    }
};