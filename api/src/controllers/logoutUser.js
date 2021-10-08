const logoutUser = (req, res, next) => {
	req.logout();
	res.json('Successfully Logout')
}

module.exports = logoutUser;