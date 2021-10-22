const { Orders, CartUsers, Product, User} = require("../db.js");

const createOrder = async (req, res, next) => {	

	const { total, cartUserOder } = req.body;
	try {
		const newOrder = await Orders.create({
			total
		})
		await newOrder.setCartUsers(cartUserOder);

        const traigoCarrito = await Orders.findAll({
            include: [
                {model: CartUsers, include: [Product,User] }
              ],
              order: [
                ['id', 'ASC']
            ]
        })
        res.json(traigoCarrito)
	} 
	catch (err) {
		next(err);
	}
}
 
module.exports = createOrder;

