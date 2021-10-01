const { Product } = require('../db.js');

const createProduct = async (req, res, next) => {
	const { name, price, description, stock } = req.body;
	try {
		const newProduct = await Product.create({
			name,
			price,
			description,
			stock
		})
		return res.json(newProduct);
	} 
	catch (err) {
		next({status: 500, message: 'entré, ' + err});
	}
}

module.exports = createProduct;