const {  Type } = require('../db.js')

const getUpdateTypeDetails = async (req, res, next) => {
	const { id } = req.params;  

	try {
		const typeFound = await Type.findOne({
			where: { 
				id,
				enabled: true, 
                     
			},			
		});
		res.json(typeFound);		
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = getUpdateTypeDetails;


