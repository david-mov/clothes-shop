const {Rating, Product, User} = require('../db');

const getAllRating = async (req, res, next) => {
    try {
        const allRating = await Rating.findAll({
          include: [{
                model: Product,
                attributes:['id']
            },{
                model: User,
                attributes: ['id'],
            }],
            attributes: ['amount'],
		});
		res.json(allRating);
	}
	catch (e) {
		next(e)
	}

}

module.exports = getAllRating;