const { Product } = require('../db.js')

const modifyProduct = async (req, res, next) => {
	const { id } = req.params;
	try {
		const modifiedProduct = await Product.update(req.body, 
			{ where: { id } }
		)
		res.json('Product modified correctly');
	}
	catch (err) {
		next(err);
	}
}

module.exports = modifyProduct;