const { Size } = require('../db.js')

const disableSize = async (req, res, next) => {
	const { id } = req.params;
	try {
		const disabledSize = await Size.update({
			enabled: false,
		}, {
			where: {
				id,
			}
		})
        const allSizes = await Size.findAll({
			where: { enabled: true },
		});
		res.json(allSizes);
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = disableSize;