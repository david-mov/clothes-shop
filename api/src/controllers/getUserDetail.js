const { User, UserDetail } = require('../db.js')

const getUserDetail = async (req, res, next) => {

const {user_detail} = req.params
console.log("USERRRRR", req.user)
	try {
		const userDetailFound = await UserDetail.findOne({
			where: { 
				user_detail,                     
			},			
			include: {
				model: User
			}
		});
		res.json(userDetailFound);		
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = getUserDetail;

