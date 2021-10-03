// change type of product
const { Product, Type } = require('../db.js');

const postProductType = async (req, res, next) => {
	const { id, typeId } = req.params;
	try {
		const productFound = await Product.findOne({
			where: { id, enabled: true  }
		})
		const typeFound = await Type.findOne({
			where: { id: typeId, enabled: true }
		})
		if (productFound && typeFound) {
			await productFound.setType(typeId)
			return res.json('Type added to the product correctly.')
		} else {
			return next({message: 'Invalid Product/Type', status: 404})
		}
	}
	catch (err) {
		return next(err);
	}
}

module.exports = postProductType;