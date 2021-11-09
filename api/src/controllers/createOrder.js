const { Orders, CartUsers, Product, User} = require("../db.js");

const createOrder = async (req, res, next) => {	

	const { total, Cart_Users } = req.body;
	try {
		console.log("EL CART USER", Cart_Users)
		const cartUserOder = await CartUsers.findAll({
			where: { Cart_Users: Cart_Users, state: 3 },
			attributes: ['id']
		  });
		  console.log("ORDENES DEL USUARIO", cartUserOder)

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

