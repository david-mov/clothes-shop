const { UserDetail } = require('../db.js')

const modifyUserDetail = async (req, res, next) => {
	const { user_detail } = req.params;
	try {
		const modifiedUserDetail = await UserDetail.update(req.body, 
			{ where: { user_detail } }
		)
		res.json('User Detail modified correctly');
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = modifyUserDetail;