const { User, UserDetail } = require('../db.js')

const getUserDetail = async (req, res, next) => {
const id = req.user
console.log("USERRRRR", req.user)
	try {
		const userDetailFound = await UserDetail.findOne({
			where: { 
				id,                     
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

