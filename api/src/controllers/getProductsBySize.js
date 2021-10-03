const { Product, Category, Type, Size } = require('../db.js')

const getProductsBySize = async (req, res, next) => {
	const { sizeName } = req.params;
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
			},{
				model: Size,
				attributes: ['name'],
			}],
			attributes: ['name', 'price', 'stock', 'description']
		})
		productsFiltered = allProducts.filter(p => {
			return p.sizes.some(c => c.name === sizeName)
		});
		res.json(productsFiltered);
	} catch (err) {
		return next(err)
	}
}
 
module.exports = getProductsBySize;