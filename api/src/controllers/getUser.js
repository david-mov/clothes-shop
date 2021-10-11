const getUser = (req, res, next) => {
	const { id, name, email, phone, user_rol, googleId } = req.user;
	const userInfo = {
		id,
		name,
		email,
		phone,
		user_rol,
		googleId,
	};
	res.json(userInfo);
}

module.exports = getUser;