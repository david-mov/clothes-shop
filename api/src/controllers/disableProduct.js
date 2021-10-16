const { Product, Type, Category, Size, Image, Rating} = require('../db.js')

const disableProduct = async (req, res, next) => {
	const { id } = req.params;
	try {
		const disabledProduct = await Product.update({
			enabled: false,
		}, {
			where: {
				id,
			}
		})
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
 
module.exports = disableProduct;