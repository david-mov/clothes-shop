const {View, Product, User} = require('../db');

const getAllView = async (req, res, next) => {
    try {
        const allView = await View.findAll({

          include: [{
                model: Product,
                attributes:['id']
            },{
                model: User,
                attributes: ['id'],
            }]
		});
		res.json(allView);
	}
	catch (e) {
		next(e)
	}

}

module.exports = getAllView;