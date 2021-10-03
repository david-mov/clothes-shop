const { Product, Type, Size, Category, Image } = require('../db.js')

const getProductDetails = async (req, res, next) => {
	const { id } = req.params;
	try {
		const productFound = await Product.findOne({
			where: { 
				id,
				enabled: true, 
			},
			include: [{
                	model:Type,
               		attributes: ['name']
            	},{
                	model: Category,
                	attributes:['name']
            	},{
                	model: Image,
                	attributes:['name']
            	}, {
            		model: Size,
            		attributes:['name']
            	}],
            attributes: ['name', 'price', 'stock', 'description', 'color']
		});
		res.json(productFound);		
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = getProductDetails;