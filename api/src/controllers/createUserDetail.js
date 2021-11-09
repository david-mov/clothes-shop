const { UserDetail, User } = require("../db.js");

const createUserDetail = async (req, res, next) => {
  
  const {user_detail} = req.params;
  
	const {

     address,
     nacionality,
     sex,
     location, 
     documentType, 
     numberDocument, 
     birthDate,
     phone
     
       

  } = req.body;  

	try {

		const newUserDetail = await UserDetail.create({
      address,
      nacionality,
      sex,
      location,
      documentType,
      numberDocument,
      birthDate,
      phone,
      user_detail
    }, {include: [User]})
    	
		return res.json('User Detail has created correctly');
	} 
	catch (err) {
		next(err);
	}
}
 
module.exports = createUserDetail;


