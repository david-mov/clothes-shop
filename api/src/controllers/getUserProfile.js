const getUserProfile = (req, res, next) => {
	const { name, email, phone } = req.user;
	console.log("ESTE SII", req.user)
	const userInfo = {
		name,
		email,
		phone,
	};
	res.json(userInfo);
}

module.exports = getUserProfile;