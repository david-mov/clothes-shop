const {User } = require('../db');

const getAllAdmin = async (req, res, next) => {
    try {
        const allAdmin = await User.findAll({            
             
            attributes: ['name', "id", "email", "user_rol"],
		});

    let filterAdmin = allAdmin.filter(e => e.user_rol === 2) 		
    res.json(filterAdmin);
	}
	catch (e) {
		next(e)
	}
}

module.exports = getAllAdmin;