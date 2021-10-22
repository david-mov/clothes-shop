const { Product, Category, Type, Size, Rating } = require("../db.js");

const createProduct = async (req, res, next) => {
	var myAmount = 1


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
		
		var primerRating = {
			Rating_User: 1,
			amount: 2,
			comment: "",
			Rating_product: newProduct.id
		}
		await Rating.create(primerRating)
		return res.json('Product has created correctly');

		
	} 
	catch (err) {
		next(err);
	}
}
 
module.exports = createProduct;

