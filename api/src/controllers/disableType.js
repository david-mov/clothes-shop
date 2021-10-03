const { Size } = require('../db.js')

const disableType = async (req, res, next) => {
	const { id } = req.params;
	try {
		const disabledSize = await Size.update({
			enabled: false,
		}, {
			where: {
				id,
			}
		})
		res.json('Size disabled correctly');
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = disableType;