const getUserProfile = (req, res, next) => {
	const { name, email, phone } = req.user;
	console.log('cookie: ', req.session.cookie);
	const userInfo = {
		name,
		email,
		phone,
	};
	res.json(userInfo);
}

module.exports = getUserProfile;