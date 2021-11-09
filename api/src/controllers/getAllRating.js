const { Sequelize } = require('sequelize');
const {Rating, Product, User} = require('../db');

const getAllRating = async (req, res, next) => {
    try {
        const allRating = await Rating.findAll({
          include: [{
                model: Product
            },{
                model: User
            }],
            // attributes: [
            //     'id',
            //     [Sequelize.fn('createdAt', Sequelize.col('createdAt'), '%Y-%m-%d'), 'createdAt']
            // ]
		});
        console.log(allRating)
		res.json(allRating);
	}
	catch (e) {
		next(e)
	}

}

module.exports = getAllRating;