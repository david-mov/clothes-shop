const { Product, Type, Size, Category, Image, Rating, View } = require('../db.js')

const getProductDetailsInfo = async (req, res, next) => {
	const { id } = req.params;
	try {
		const productFound = await Product.findOne({
			where: { 
				id,
				enabled: true, 
			},
			include: [{
            		model: Rating,
            		attributes:['amount', "createdAt"]
            	}, {
            		model: View,
            		attributes:['amount', "createdAt"]
            	}],
            attributes: ['id']
		});
		res.json(productFound);		
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = getProductDetailsInfo;