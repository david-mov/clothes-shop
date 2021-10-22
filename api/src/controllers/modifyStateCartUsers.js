const { CartUsers, Product, Image, Size} = require('../db.js')

const modifyStateCategory = async (req, res, next) => {
	const { CartU_product, Cart_Users, state } = req.body;
    
	try {
		const traigo = await CartUsers.update(
          { state: state },
          { where: {Cart_Users} });

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
 
module.exports = modifyStateCategory;