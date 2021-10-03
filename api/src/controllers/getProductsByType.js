const { Product, Category, Type } = require('../db.js')

const getProductsByType = (req, res, next) => {
	const { typeName } = req.params;
	try {
		const allProducts = await Product.findAll({
			where: { enabled: true },
			include: [{
                model: Image,
                attributes:['name']
            },{
				model: Category,
				attributes: ['name'],
			},{
				model: Type,
				attributes: ['name'],
			}],
			attributes: ['name', 'price', 'stock', 'description']
		})
		productsFiltered = allProducts.filter(p => {
			return p.type?.name === typeName
		});
		res.json(productsFiltered);
	} catch (err) {
		return next(err)
	}
}

module.exports = getProductsByType;