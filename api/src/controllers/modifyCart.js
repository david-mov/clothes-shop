const { Cart, Product, Image } = require('../db.js')

const modifyCategory = async (req, res, next) => {
	const { productId, quantity } = req.body;
    console.log("EN EL BACK", req.body)
	try {
		const traigo = await Cart.update(
          { quantity: parseInt(quantity) },
          { where: {Cart_product: productId} });


        var traigoTodos = await Cart.findAll({
            include: [
                {model: Product, include: [Image] }
              ]
        })
		res.json(traigoTodos);
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = modifyCategory;