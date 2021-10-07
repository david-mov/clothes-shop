const { Product, Category, Type } = require('../db.js')

const getProductsByCategory = async (req, res, next) => {
	const { categoryName } = req.params;
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
			attributes: ['name', 'price', 'stock', 'description', 'id']
		})
		productsFiltered = allProducts.filter(p => {
			return p.categories.some(c => c.name === categoryName)
		});
		res.json(productsFiltered);
	} catch (err) {
		return next(err)
	}
}
 
module.exports = getProductsByCategory;