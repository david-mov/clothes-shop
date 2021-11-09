const {  Product, Image } = require('../db.js')

const getProductsHome = async (req, res, next) => {
	try {
		const Products = await Product.findAll({
			order: [
                ['id', 'DESC'],
            ],
            limit: 6,
			include: [{
				model: Image,
				attributes:['name']
			}],			
		});
		res.json(Products);		
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = getProductsHome;


