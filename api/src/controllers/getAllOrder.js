const { Orders, CartUsers, Product, User} = require("../db.js");

const getAllOrders = async (req, res, next) => {	

	try {
		
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
 
module.exports = getAllOrders;

