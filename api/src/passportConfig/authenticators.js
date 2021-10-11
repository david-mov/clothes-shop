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

exports.isAdmin = (req, res, next) => {
	if (req.user.user_rol === 2) {
		next();
	} else {
		res.status(401).json('You must be admin to access this resource')
	}
}

exports.isSuperAdmin = (req, res, next) => {
	if (req.user.user_rol === 1) {
		next();
	} else {
		res.status(401).json('You must be superAdmin to access to this resource');
	}
}