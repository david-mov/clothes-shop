const { Size } = require('../db.js')

const modifySize = async (req, res, next) => {
	const { id } = req.params;
	try {
		const modifiedProduct = await Size.update(req.body, 
			{ where: { id } }
		)
		res.json('Product modified correctly');
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = modifySize;