const {Size} = require('../db');

const createSize = async (req, res, next) => {
    const {name} = req.body;
    try { 
        const createdSize = await Size.create({name});
        res.json(createdSize);
    } catch (error) {
        next(error);  
    }
}

module.exports = createSize;





