const { Product, Type, Category, Image, Size, Rating } = require('../db.js');

const getAllProducts = async (req, res, next) => {
    try {
        const allProducts = await Product.findAll({
            where: { enabled: true },

          include: [{
                model: Type,
                attributes:['name']
            },{
                model: Category,
                attributes: ['name'],
            },{
                model:  Size,
                attributes: ['name'],
            },{
                model: Image,
                attributes: ['name'],
            }, {
                model: Rating,
                attributes:['amount']
            },],
            attributes: ['name', 'price','description','stock', 'id'],
		});
		res.json(allProducts);
	}
	catch (e) {
		next(e)
	}

}

module.exports = getAllProducts;