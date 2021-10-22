const { Type } = require('../db.js')

const disableType = async (req, res, next) => {
	const { id } = req.params;
	try {
		const disabledType = await Type.update({
			enabled: false,
		}, {
			where: {
				id,
			}
		})
		res.json('Type disabled correctly');
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = disableType;