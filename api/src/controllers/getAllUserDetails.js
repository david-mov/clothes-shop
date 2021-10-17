const {UserDetail} = require('../db');

const getAllUserDetail = async (req, res, next) => {
    try {
        const allUserDetail = await UserDetail.findAll();
        res.json(allUserDetail)
    } catch (err) {
        next(err);    
    }
}
 
module.exports = getAllUserDetail;