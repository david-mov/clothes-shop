const { Product, Category, Sizes} = require('../db.js')

const modifyProduct = async (req, res, next) => {
	const {name, description, color,stock, type_product, type, categories, sizes, price} = req.body
	const { id } = req.params;

	
	try {
		const modifiedProduct = await Product.update({
			name: name,
			price: price,
			description: description,
			type: type,
			color,
			stock,
			type_product
		}, {
			where: { id }
		},
		)
		const productoModificado = await Product.findByPk(id)
		await productoModificado.setCategories(categories)
		await productoModificado.setSizes(sizes)
		console.log("el producto", modifiedProduct)
		res.json(modifiedProduct);
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = modifyProduct;