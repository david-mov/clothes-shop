const { Cart, Product, Image } = require('../db.js')

const modifyCategory = async (req, res, next) => {
	const { productId, quantity, price } = req.body;
    var subtotal = parseInt(quantity * price)
    console.log("EN EL BACK", quantity, price)
	try {
		const traigo = await Cart.update(
          { quantity: parseInt(quantity), subtotal: parseInt(subtotal) },
          { where: {Cart_product: productId} });

        var traigoTodos = await Cart.findAll({
            include: [
                {model: Product, include: [Image] }
              ],
              order: [
                ['id', 'ASC']
            ]
        })
		res.json(traigoTodos);
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = modifyCategory;