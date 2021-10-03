const { Category } = require('../db.js')

const modifyCategory = async (req, res, next) => {
	const { id } = req.params;
	try {
		const modifiedCategory = await Product.update(req.body, 
			{ where: { id } }
		)
		res.json('Category modified correctly');
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = modifyCategory;