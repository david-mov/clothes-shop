const { Rating, Product, User } = require('../db.js')

const addRating = async (req, res, next) => {
	const { idUser, idProduct } = req.params;
    const {rating} = req.body;
	try {
		const addRating = await Rating.findOne({
            rating,
            idProduct,
            idUser,			
        }, {include: [Product]
        }, {include: [User]})
		res.json('Rating Add correctly');
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = addRating;