const { Rating, Product, User } = require('../db.js')

const addRating = async (req, res, next) => {
	
    const {amount, Rating_User, Rating_product} = req.body;
    console.log("data",amount, Rating_User, Rating_product)
	try {
		const addRating = await Rating.create({
            amount,
            Rating_product,
            Rating_User,			
        }, {include: [Product]
        }, {include: [User]})
		res.json(addRating);
	}
	catch (err) {
        console.log(err)
		//next(err);
	}
}
 
module.exports = addRating;