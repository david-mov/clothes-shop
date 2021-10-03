const { Product, Category, Type, Size } = require('../db.js');

const createProduct = async (req, res, next) => {
	const { name, price, description, stock, color, type_product, categories, sizes } = req.body;
	try {
		const newProduct = await Product.create({
			name,
			price,
			description,
			color,
			stock,
			type_product
		}, {include: [Type]})
		await newProduct.setCategories(categories);
		await newProduct.setSizes(sizes);
		return res.json('Product has created correctly');
	} 
	catch (err) {
		next(err);
	}
}
 
module.exports = createProduct;