const { Product, Type, Size, Category, Image } = require('../db.js')

const getUpdateProductDetails = async (req, res, next) => {
	const { id } = req.params;
	try {
		const productFound = await Product.findOne({
			where: { 
				id,
				enabled: true,                 
			},
			include: [{
                	model:Type,
            	},{
                	model: Category,
            	},{
                	model: Image,
            	}, {
            		model: Size,
            	}],
		});
		res.json(productFound);		
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = getUpdateProductDetails;