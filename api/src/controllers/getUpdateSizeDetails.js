const {  Size } = require('../db.js')

const getUpdateSizeDetails = async (req, res, next) => {
	const { id } = req.params;  

	try {
		const sizeFound = await Size.findOne({
			where: { 
				id,
				
                     
			},			
		});
		res.json(sizeFound);		
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = getUpdateSizeDetails;


