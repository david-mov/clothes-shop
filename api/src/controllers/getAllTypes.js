const {Type} = require('../db');

const getAllTypes = async (req, res, next) => {
    try {
        const allTypes = await Type.findAll({ 
            where: { enabled: true }, 
        });  
        res.json(allTypes)
    } catch (err) {
        next(err);
    }
}
 
module.exports = getAllTypes;