const getUser = (req, res, next) => {
	console.log(req);
	res.json({ name: 'pablito', email: 'pablito12@mail.com' })
}

module.exports = getUser;