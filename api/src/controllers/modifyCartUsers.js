const { CartUsers, Product, Image, Size} = require('../db.js')

const modifyCategory = async (req, res, next) => {
	const { CartU_product, Cart_Users, quantity, price, sizesUser } = req.body;
    var subtotal = parseInt(quantity * price)
	try {
		const traigo = await CartUsers.update(
          { quantity: parseInt(quantity), subtotal: parseInt(subtotal), sizesUser: sizesUser },
          { where: {CartU_product, Cart_Users} });

        var traigoTodos = await CartUsers.findAll({
            where: { Cart_Users: Cart_Users },
            include: [
                {model: Product, include: [Image, Size] }
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