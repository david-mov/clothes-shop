const { Product, Type, Size, Category, Image } = require('../db.js');

const getAllProducts = async (req, res, next) => {
	try {
		const allProducts = await Product.findAll({
			include: [{
                model:Type,
                attributes: ['name']
            },{
                model: Size,
                attributes:['name']
            },{
                model: Category,
                attributes:['name']
            },{
                model: Image,
                attributes:['name']
            }]    
		});
		res.json(allProducts);
	}
	catch (e) {
		next(e)
	}
}

module.exports = getAllProducts;