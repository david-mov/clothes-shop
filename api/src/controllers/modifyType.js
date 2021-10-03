const { Type } = require('../db.js')

const modifyType = async (req, res, next) => {
	const { id } = req.params;
	try {
		const modifiedType = await Type.update(req.body, 
			{ where: { id } }
		)
		res.json('Type modified correctly');
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = modifyType;