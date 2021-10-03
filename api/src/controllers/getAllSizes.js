const {Size} = require('../db');

const getAllSizes = async (req, res, next) => {
    try {
        const allSizes = await Size.findAll();
        res.json(allSizes)
    } catch (err) {
        next(err);    
    }
}

module.exports = getAllSizes;