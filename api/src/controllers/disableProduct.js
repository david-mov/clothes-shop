const { Product } = require('../db.js')

const disableProduct = async (req, res, next) => {
	const { id } = req.params;
	try {
		const disabledProduct = await Product.update({
			enabled: false,
		}, {
			where: {
				id,
			}
		})
		res.json('Product disabled correctly');
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = disableProduct;