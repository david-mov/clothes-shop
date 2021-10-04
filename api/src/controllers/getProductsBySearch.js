const {Op} = require ('sequelize');

const { Product, Image, Type, Category } = require('../db.js')

const getProductsBySearch = async (req, res, next) => {
	const { query } = req.query;
	console.log("ACA ESTA QUERY", query)
	try {
		const productsFound = await Product.findAll({
			where: { 
				name: {[Op.iLike]: `%${query}%`},
				enabled: true,
			},
			include: [{
                model: Image,
                attributes:['name']
            },{
                model: Type,
                attributes: ['name'],
            },{
                model: Category,
                attributes: ['name'],
            }],
			attributes: ['name', 'price','description','stock', 'id'],
		})
		res.json(productsFound);
	}
	catch (err) {
		next(err)
	}
}
 
module.exports = getProductsBySearch;