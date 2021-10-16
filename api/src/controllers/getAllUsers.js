const {User } = require('../db');

const getAllUser = async (req, res, next) => {
    try {
        const allUser = await User.findAll({            
             
            attributes: ['name', "id", "email", "user_rol"],
		});

    let filterUser = allUser.filter(e => e.user_rol === 3) 
		console.log("ALLUSER", allUser)
    res.json(filterUser);
	}
	catch (e) {
		next(e)
	}
}

module.exports = getAllUser;