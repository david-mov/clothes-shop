const { User, Rol } = require('../db.js')

const changeRolUsers = async (req, res, next) => {
	const { id } = req.params;
    const {user_rol} = req.body;

	try {
		const chageRolUser = await User.update({
			user_rol: user_rol,
		}, {
			where: {
				id,
			}
		});
        const allUsers = await User.findAll({
            include: {
                model: Rol
            }, 
        order: [
            ['id', 'ASC'],
        ]
        });        
        res.json(allUsers)
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = changeRolUsers;