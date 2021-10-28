const { Orders, CartUsers, Product, User, UserDetail, Type} = require("../db.js");

const getAllOrdersDetails = async (req, res, next) => {

const {idOrder} = req.params
	try {
		
        const traigoCarrito = await Orders.findAll({
            where: { 
				id:idOrder                     
			},
            include: [
                {model: CartUsers, include: [Product, User, { model: User, include: [UserDetail]}               
            ] }
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

