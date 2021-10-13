const {  Category } = require('../db.js')

const getUpdateCategoryDetails = async (req, res, next) => {
	const { id } = req.params;
  console.log(`ID`, id)

	try {
		const categoryFound = await Category.findOne({
			where: { 
				id,
				enabled: true, 
                     
			},			
		});
		res.json(categoryFound);		
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = getUpdateCategoryDetails;


