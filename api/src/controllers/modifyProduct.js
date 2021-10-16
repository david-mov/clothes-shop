const { Product, Type, Category, Size, Image, Rating} = require('../db.js')

const modifyProduct = async (req, res, next) => {
	const { id } = req.params;
	try {
		const modifiedProduct = await Product.update(req.body, 
			{ where: { id } }
		)
		const allProducts = await Product.findAll({
            where: { enabled: true },

          include: [{
                model: Type,
                attributes:['name']
            },{
                model: Category,
                attributes: ['name'],
            },{
                model:  Size,
                attributes: ['name'],
            },{
                model: Image,
                attributes: ['name'],
            }, {
                model: Rating,
                attributes:['amount']
            },],
            attributes: ['name', 'price','description','stock', 'id'],
		});
		res.json(allProducts);
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = modifyProduct;