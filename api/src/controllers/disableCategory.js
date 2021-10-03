const { Category } = require('../db.js')

const disableCategory = async (req, res, next) => {
	const { id } = req.params;
	try {
		const disabledCategory = await Category.update({
			enabled: false,
		}, {
			where: {
				id,
			}
		})
		res.json('Category disabled correctly');
	}
	catch (err) {
		next(err);
	}
}

module.exports = disableCategory;