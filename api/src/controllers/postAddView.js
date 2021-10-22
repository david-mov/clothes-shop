const { View, Product, User } = require('../db.js')

const addView = async (req, res, next) => {
	
    const {View_User, View_product} = req.body;
	try {
		const addView = await View.create({           
            View_product,
            View_User,			
        }, {include: [Product]
        }, {include: [User]})
		
		const allView = await View.findAll({
			include: [{
				  model: Product,
				  attributes:['id']
			  },{
				  model: User,
				  attributes: ['id'],
			  }],
			  attributes: ['amount'],
		  });
		  res.json(allView);
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = addView;