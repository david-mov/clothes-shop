const { Product, Image, Type, Category } = require('../db.js')

const getProductsBySearch = async (req, res, next) => {
	const { query } = req.query;
	try {
		const productsFound = Product.findAll({
			where: { 
				name: `%${query}%`,
				enabled: true,
			},
			include: [{
                model: Image,
                attributes:['name']
            },{
                model: Type,
                attributes: ['name'],
            },{
                model: Category,
                attributes: ['name'],
            }],
			attributes: ['name', 'price','description','stock'],
		})
		res.json(productsFound);
	}
	catch (err) {
		next(err)
	}
}

module.exports = getProductsBySearch;