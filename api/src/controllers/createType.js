const {Type} = require('../db');

const createType = async (req, res, next) => {
    const {name} = req.body;
    try { 
        const createdType = await Type.create({name});
        res.json(createdType);
    } catch (error) {
        next(error);     
    }
}

module.exports = createType;





