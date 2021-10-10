const getLogout = (req, res, next) => {
	req.logout();
	res.json('Successfully Logout')
}

module.exports = getLogout;