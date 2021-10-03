// add or remove category of product
const { Product, Category } = require('../db.js');

const postProductCategory = async (req, res, next) => {
	console.log('enter to post product category')
	const { id, categoryId } = req.params;
	try {
		const productFound = await Product.findOne({
			where: { id, enabled: true  }
		})
		const categoryFound = await Category.findOne({
			where: { id: categoryId, enabled: true }
		})
		if (productFound && categoryFound) {
			console.log('enter to if')
			await productFound.addCategory(categoryId)
			return res.json('Category added to the product correctly.')
		} else {
			return next({message: 'Invalid Product/Category', status: 404})
		}
	}
	catch (err) {
		return next(err);
	}
}

module.exports = postProductCategory;