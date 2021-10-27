const { Orders, CartUsers, Product, User} = require("../db.js");

const getAllOrdersDetails = async (req, res, next) => {

const {idOrder} = req.params
	try {
		
        const traigoCarrito = await Orders.findAll({
            where: { 
				id:idOrder                     
			},
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
 
module.exports = getAllOrdersDetails;

