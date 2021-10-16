const { User } = require('../db.js')

const giveAdmin = async (req, res, next) => {
	const { id } = req.params;
	try {
		const giveAdmin = await User.update(req.body, 
			{ where: { id } }
		)
		res.json('User modified correctly');
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = giveAdmin;