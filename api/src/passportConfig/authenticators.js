exports.isAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		next();
	} else {
		res.status(401).json('You must login to access this resource')
	}
}

exports.isUnauthenticated = (req, res, next) => {
	if (req.isUnauthenticated()) {
		next()
	} else {
		res.status(401).json('You are already logged')
	}
}