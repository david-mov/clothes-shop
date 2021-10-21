const {Rating, Product, User} = require('../db');

const getAllRating = async (req, res, next) => {
    try {
        const allRating = await Rating.findAll({
          include: [{
                model: Product
            },{
                model: User
            }]
		});
        console.log(allRating)
		res.json(allRating);
	}
	catch (e) {
		next(e)
	}

}

module.exports = getAllRating;