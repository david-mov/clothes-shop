const {  User } = require('../db.js')

const getUserIdParams = async (req, res, next) => {
	const { id } = req.params;  

	try {
		const userFound = await User.findOne({
			where: { 
				id,                     
			},			
		});
		res.json(userFound);		
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = getUserIdParams;


