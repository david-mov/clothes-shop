const { Product, Type, Category, Image } = require('../db.js');

const getAllProducts = async (req, res, next) => {
    try {
        const allProducts = await Product.findAll({
            where: { enabled: true },
            include: [{
                model: Image,
                attributes: ['name']
            }, {
                model: Type,
                attributes: ['name'],
            }, {
                model: Category,
                attributes: ['name'],
            }],
            attributes: ['name', 'price', 'description', 'stock', 'id'],
        });
        res.json(allProducts);
    }
    catch (e) {
        next(e)
    }
}

module.exports = getAllProducts;