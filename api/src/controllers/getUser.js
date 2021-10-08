const getUser = (req, res, next) => {
	res.json(req.user)
}

module.exports = getUser;